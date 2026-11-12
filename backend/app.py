import os
import re
import sqlite3
from pathlib import Path
from typing import Any

from flask import Flask, current_app, jsonify, request
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address


EMAIL_PATTERN = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")
MAX_NAME_LENGTH = 100
MAX_EMAIL_LENGTH = 254
MAX_MESSAGE_LENGTH = 5000


def create_app(test_config: dict[str, Any] | None = None) -> Flask:
    app = Flask(__name__)
    default_database = Path(__file__).with_name("contacts.db")
    app.config.from_mapping(
        DATABASE_PATH=os.getenv("DATABASE_PATH", str(default_database)),
        FRONTEND_ORIGIN=os.getenv("FRONTEND_ORIGIN", "http://localhost:3000"),
        RATE_LIMIT=os.getenv("RATE_LIMIT", "5 per minute"),
    )
    if test_config:
        app.config.update(test_config)

    database_path = Path(app.config["DATABASE_PATH"])
    database_path.parent.mkdir(parents=True, exist_ok=True)
    init_database(database_path)

    CORS(app, resources={r"/api/*": {"origins": app.config["FRONTEND_ORIGIN"]}})
    limiter = Limiter(
        key_func=get_remote_address,
        app=app,
        default_limits=[],
        storage_uri="memory://",
    )
    app.extensions["contact_limiter"] = limiter
    limited_contact = limiter.limit(app.config["RATE_LIMIT"])(contact)
    app.add_url_rule("/api/contact", view_func=limited_contact, methods=["POST"])

    @app.errorhandler(429)
    def handle_rate_limit(_error: Any):
        return jsonify(error="Too many requests. Please try again later."), 429

    @app.errorhandler(500)
    def handle_server_error(_error: Any):
        app.logger.exception("Unhandled server error")
        return jsonify(error="An unexpected server error occurred."), 500

    return app


def init_database(database_path: Path) -> None:
    with sqlite3.connect(database_path) as connection:
        connection.execute(
            """
            CREATE TABLE IF NOT EXISTS contacts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                message TEXT NOT NULL,
                created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
            )
            """
        )


def validate_payload(payload: Any) -> tuple[dict[str, str] | None, str | None]:
    if not isinstance(payload, dict):
        return None, "Request body must be a JSON object."

    values = {
        "name": payload.get("name"),
        "email": payload.get("email"),
        "message": payload.get("message"),
    }
    if not all(isinstance(value, str) for value in values.values()):
        return None, "Name, email, and message are required."

    cleaned = {key: value.strip() for key, value in values.items()}
    if not all(cleaned.values()):
        return None, "Name, email, and message cannot be empty."
    if len(cleaned["name"]) > MAX_NAME_LENGTH:
        return None, f"Name must be {MAX_NAME_LENGTH} characters or fewer."
    if len(cleaned["email"]) > MAX_EMAIL_LENGTH or not EMAIL_PATTERN.fullmatch(cleaned["email"]):
        return None, "Please provide a valid email address."
    if len(cleaned["message"]) > MAX_MESSAGE_LENGTH:
        return None, f"Message must be {MAX_MESSAGE_LENGTH} characters or fewer."
    return cleaned, None


def contact():
    payload = request.get_json(silent=True)
    values, error = validate_payload(payload)
    if error:
        return jsonify(error=error), 400

    database_path = Path(current_app.config["DATABASE_PATH"])
    try:
        with sqlite3.connect(database_path) as connection:
            connection.execute(
                "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)",
                (values["name"], values["email"], values["message"]),
            )
    except sqlite3.Error:
        current_app.logger.exception("Could not save contact submission")
        return jsonify(error="Unable to save your message. Please try again."), 500

    return jsonify(message="Your message was sent successfully."), 201


app = create_app()


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.getenv("PORT", "5000")))
