import sqlite3

import pytest

from app import create_app


@pytest.fixture()
def client(tmp_path):
    app = create_app(
        {
            "TESTING": True,
            "DATABASE_PATH": str(tmp_path / "contacts.db"),
            "FRONTEND_ORIGIN": "http://localhost:3000",
            "RATELIMIT_ENABLED": False,
        }
    )
    return app.test_client()


def test_valid_submission_is_stored(client, tmp_path):
    response = client.post(
        "/api/contact",
        json={"name": "Alex Morgan", "email": "alex@example.com", "message": "Hello!"},
    )

    assert response.status_code == 201
    with sqlite3.connect(tmp_path / "contacts.db") as connection:
        row = connection.execute("SELECT name, email, message FROM contacts").fetchone()
    assert row == ("Alex Morgan", "alex@example.com", "Hello!")


@pytest.mark.parametrize(
    "payload",
    [
        {"name": "", "email": "alex@example.com", "message": "Hello!"},
        {"name": "Alex", "email": "not-an-email", "message": "Hello!"},
        {"name": "Alex", "email": "alex@example.com", "message": ""},
        {"name": "Alex", "email": "alex@example.com", "message": "x" * 5001},
    ],
)
def test_invalid_submission_is_rejected(client, payload):
    assert client.post("/api/contact", json=payload).status_code == 400


def test_backend_error_is_json(client, monkeypatch):
    def fail_connect(*_args, **_kwargs):
        raise sqlite3.Error("database unavailable")

    monkeypatch.setattr(sqlite3, "connect", fail_connect)
    response = client.post(
        "/api/contact",
        json={"name": "Alex", "email": "alex@example.com", "message": "Hello!"},
    )

    assert response.status_code == 500
    assert response.json["error"]
