import React, { useEffect, useState } from 'react';
import { ResumeModal } from './components/ResumeModal';
import { InteractiveDemosModal } from './components/InteractiveDemosModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeDemo, setActiveDemo] = useState<'biolytix' | 'quantum' | 'hostel' | null>(null);
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [contactStatus, setContactStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [contactError, setContactError] = useState('');

  useEffect(() => {
    let mouseX = 0, mouseY = 0;

    function updateHeroBadge() {
      const badge = document.querySelector('.hero-badge');
      if (!badge) return;
      const options: Intl.DateTimeFormatOptions = { timeZone: 'Asia/Kolkata', hour: 'numeric', minute: 'numeric', hour12: true };
      const istTime = new Intl.DateTimeFormat('en-US', options).format(new Date());
      const hour = parseInt(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata', hour: 'numeric', hour12: false }), 10);
      const isSleeping = hour >= 2 && hour < 8;
      badge.innerHTML = `<span class="status-dot"></span> ${isSleeping ? '🌙 Sleeping (probably)' : '☀️ Coding in Bangalore'} • ${istTime}`;
    }
    const badgeInterval = setInterval(updateHeroBadge, 60000);
    updateHeroBadge();

    // SCROLL PROGRESS
    const handleScrollProgress = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const scrollBar = document.getElementById('scroll-bar');
      if (scrollBar) scrollBar.style.width = scrolled + '%';
    };
    window.addEventListener('scroll', handleScrollProgress, { passive: true });

    // NAV SCROLL STUCK
    const nav = document.getElementById('nav');
    const handleNavScroll = () => {
      if (nav) nav.classList.toggle('stuck', window.scrollY > 40);
    };
    window.addEventListener('scroll', handleNavScroll, { passive: true });

    // 3D TILT EFFECT
    const handleTiltMove = (e: MouseEvent, card: HTMLElement) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    const handleTiltLeave = (card: HTMLElement) => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    };

    const tiltCards = document.querySelectorAll<HTMLElement>('.bento-item, .proj, .exp-card');
    tiltCards.forEach(card => {
      card.addEventListener('mousemove', (e) => handleTiltMove(e, card));
      card.addEventListener('mouseleave', () => handleTiltLeave(card));
    });

    // MOUSE SPOTLIGHT & CARD GLOW
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
      document.querySelectorAll<HTMLElement>('.bento-item, .proj').forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // CLICK SPARK EFFECT
    const handleMouseDown = (e: MouseEvent) => {
      const spark = document.createElement('div');
      spark.className = 'click-spark';
      spark.style.left = `${e.clientX}px`;
      spark.style.top = `${e.clientY}px`;
      document.body.appendChild(spark);
      setTimeout(() => spark.remove(), 600);
    };
    window.addEventListener('mousedown', handleMouseDown);

    // REVEAL OBSERVER
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    // MAGNETIC BUTTONS
    const buttons = document.querySelectorAll<HTMLElement>('.btn');
    buttons.forEach(btn => {
      btn.addEventListener('mousemove', e => {
        const rect = btn.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        btn.style.transform = `translate(${x * 12}px, ${y * 12}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });

    // HAMBURGER & MOBILE MENU
    const ham = document.getElementById('ham');
    const mob = document.getElementById('mob');
    const toggleMob = () => {
      ham?.classList.toggle('open');
      mob?.classList.toggle('open');
    };
    ham?.addEventListener('click', toggleMob);

    const mobLinks = mob?.querySelectorAll('a');
    mobLinks?.forEach(link => {
      link.addEventListener('click', () => {
        ham?.classList.remove('open');
        mob?.classList.remove('open');
      });
    });

    // P2P MESH CANVAS BACKGROUND
    const meshCanvas = document.getElementById('mesh-bg') as HTMLCanvasElement | null;
    let animId: number;
    if (meshCanvas) {
      const mctx = meshCanvas.getContext('2d');
      let mWidth: number, mHeight: number, mNodes: { x: number; y: number; vx: number; vy: number }[];
      const initMesh = () => {
        mWidth = meshCanvas.width = window.innerWidth;
        mHeight = meshCanvas.height = window.innerHeight;
        mNodes = Array.from({ length: 60 }, () => ({
          x: Math.random() * mWidth,
          y: Math.random() * mHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        }));
      };
      initMesh();
      window.addEventListener('resize', initMesh);

      const drawMesh = () => {
        if (!mctx) return;
        mctx.clearRect(0, 0, mWidth, mHeight);
        mctx.fillStyle = '#d48c48';

        mNodes.forEach(node => {
          node.x += node.vx;
          node.y += node.vy;
          if (node.x < 0 || node.x > mWidth) node.vx *= -1;
          if (node.y < 0 || node.y > mHeight) node.vy *= -1;

          mctx.beginPath();
          mctx.arc(node.x, node.y, 1.5, 0, Math.PI * 2);
          mctx.fill();

          // Cursor magnetism
          const distToMouse = Math.hypot(node.x - mouseX, node.y - mouseY);
          if (distToMouse < 150) {
            mctx.beginPath();
            mctx.strokeStyle = `rgba(212, 140, 72, ${0.8 - distToMouse / 150})`;
            mctx.lineWidth = 1;
            mctx.moveTo(node.x, node.y);
            mctx.lineTo(mouseX, mouseY);
            mctx.stroke();
            node.x += (mouseX - node.x) * 0.01;
            node.y += (mouseY - node.y) * 0.01;
          }

          mNodes.forEach(peer => {
            const dist = Math.hypot(node.x - peer.x, node.y - peer.y);
            if (dist < 100) {
              mctx.beginPath();
              mctx.strokeStyle = `rgba(212, 140, 72, ${1 - dist / 100})`;
              mctx.lineWidth = 0.5;
              mctx.moveTo(node.x, node.y);
              mctx.lineTo(peer.x, peer.y);
              mctx.stroke();
            }
          });
        });
        animId = requestAnimationFrame(drawMesh);
      };
      drawMesh();
    }

    // MUSIC PLAYER
    const musicBtn = document.getElementById('music-btn');
    const audio = document.getElementById('bg-audio') as HTMLAudioElement | null;
    const trackText = document.getElementById('track-text');
    if (musicBtn && audio) {
      audio.volume = 0.2;
      musicBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (audio.paused) {
          audio.play().then(() => {
            musicBtn.classList.add('is-playing');
            if (trackText) trackText.innerText = 'Linkin Park - Esaul';
          }).catch(() => {});
        } else {
          audio.pause();
          musicBtn.classList.remove('is-playing');
          if (trackText) trackText.innerText = 'Paused';
        }
      });
    }

    // CAROUSEL NAVIGATION
    const grid = document.getElementById('proj-grid');
    const prev = document.getElementById('prev-btn');
    const next = document.getElementById('next-btn');
    if (grid && prev && next) {
      const scrollAmount = 344;
      prev.onclick = () => grid.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      next.onclick = () => grid.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }

    // DEVTOOLS EASTER EGG
    (window as any).asmita = {
      hire: () => {
        console.log("%c🏆 HIRE ASMITA DAS 🏆", "color: #d48c48; font-size: 26px; font-weight: bold;");
        console.log("Candidate: Second-year B.Tech CSE (AI & ML) at Jain University · GPA: 9.5/10");
        console.log("Direct Email: asmitadasmail@gmail.com | Phone: +91 7980995226");
        setIsResumeOpen(true);
        return "Opening Official Resume Viewer... 🚀";
      }
    };

    const ascii = `  A S M I T A   D A S\n  -------------------\n  AI & Software Engineer · GPA 9.5`;
    console.log(`%c${ascii}\n%cHi there! 🚀 I'm Asmita. Exploring the code? Type 'asmita.hire()' to connect!`,
      'color:#d48c48; font-weight:bold; font-family:monospace; font-size:12px;',
      'color:#888; font-size:11px;');

    return () => {
      clearInterval(badgeInterval);
      window.removeEventListener('scroll', handleScrollProgress);
      window.removeEventListener('scroll', handleNavScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div id="scroll-bar"></div>

      {/* Background Canvas P2P Mesh */}
      <canvas id="mesh-bg" style={{ position: 'fixed', inset: 0, zIndex: -2, pointerEvents: 'none', opacity: 0.4 }}></canvas>

      {/* Mouse Spotlight */}
      <div id="spotlight"></div>

      {/* Music Pill Widget */}
      <div className="music-pill" id="music-btn">
        <div className="eq-bars">
          <span className="eq-bar"></span>
          <span className="eq-bar"></span>
          <span className="eq-bar"></span>
        </div>
        <span className="track-text" id="track-text">Play: Esaul</span>
        <audio
          id="bg-audio"
          src="https://archive.org/download/hybrid_theory_9-track_demo/2000%20-%20Hybrid%20Theory%20%289-Track%20Demo%29%20%5BFLAC%2016%20bit%2044%20kHz%5D/09.%20Esaul.mp3"
          preload="auto"
          loop
          crossOrigin="anonymous"
        ></audio>
      </div>

      {/* Fixed Sticky Nav */}
      <nav id="nav">
        <a href="#home" className="nav-brand">Asmita Das</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-btn"
              title="Open Word Resume (.docx) in separate tab"
              id="nav-resume-btn"
            >
              Resume ↗
            </a>
          </li>
        </ul>
        <button className="ham" id="ham" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className="mob" id="mob">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#work">Work</a>
        <a href="#skills">Skills</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
        <a href="/resume.html" target="_blank" rel="noopener noreferrer">Open Word Resume ↗</a>
      </div>

      {/* Hero Section */}
      <div id="home" className="hero">
        <div className="hero-badge reveal">
          <span className="status-dot"></span> ☀️ Coding in Bangalore
        </div>
        <h1 className="reveal">Hi! I'm Asmita Das</h1>
        <span className="hero-role reveal" style={{ transitionDelay: '.1s' }}>
          AI & Machine Learning Engineer
        </span>
        <p className="hero-sub reveal" style={{ transitionDelay: '.2s' }}>
          CS undergrad at <strong>Jain University</strong> (GPA: <strong>9.5/10</strong>) building thoughtful software at the intersection of <strong>AI</strong>, <strong>real-time systems</strong>, and clean engineering.
        </p>
        <div className="hero-actions reveal" style={{ transitionDelay: '.3s' }}>
          <a href="#work" className="btn btn-fill">View my work</a>
          <a href="mailto:asmitadasmail@gmail.com" className="btn btn-ghost">Get in touch</a>
          <a
            href="https://github.com/asmitadasmail-beep"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}
            aria-label="GitHub Profile"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>GitHub ↗</span>
          </a>
        </div>
      </div>

      <div className="divider"></div>

      {/* About Section - Bento Grid */}
      <section id="about" className="section">
        <div className="sec-eyebrow reveal">About</div>
        <h2 className="sec-title reveal">The short story.</h2>
        <div className="bento-grid">
          {/* Biography Item */}
          <div className="bento-item reveal">
            <div className="bento-label">Biography</div>
            <div className="about-body">
              <p>
                I'm a 2nd-year <strong>Computer Science & Engineering (AI & ML)</strong> student at <strong>Jain University</strong> (GPA: <strong>9.5/10</strong>). My focus is on <strong>AI-powered products</strong>, <strong>biomedical decision systems</strong>, and <strong>real-time architectures</strong> — often built under 8-hour hackathon deadlines.
              </p>
              <p className="bio-mission">
                Currently developing <strong>BIOLYTIX</strong>, a deterministic biological explanation platform and 3D molecular docking visualizer, and <strong>EXAMSHIELD-AI</strong> for computer vision proctoring. Seeking an <strong>SDE Internship</strong>.
              </p>
            </div>
          </div>

          {/* Education Item */}
          <div className="bento-item reveal">
            <div className="bento-label">Education</div>
            <div className="edu-item">
              <div className="edu-init">JU</div>
              <div className="edu-item-body">
                <div className="edu-item-name">Jain (Deemed-to-be) University</div>
                <div className="edu-item-degree">B.Tech, CSE — AI & ML (GPA: 9.5/10)</div>
                <div className="exp-date" style={{ marginTop: '0.2rem', fontSize: '0.75rem' }}>Aug 2025 — May 2029 · Bengaluru, India</div>
                <div className="edu-pills" style={{ marginTop: '0.8rem' }}>
                  <div className="bento-label" style={{ width: '100%', marginBottom: '0.4rem', opacity: 0.6 }}>Peer Initiatives & Hackathons</div>
                  <span className="pill" style={{ borderColor: 'var(--accent)', color: 'var(--text)' }}>8th Place: Hack and Crack Event</span>
                </div>
                <div className="edu-pills" style={{ marginTop: '0.7rem' }}>
                  <div className="bento-label" style={{ width: '100%', marginBottom: '0.4rem', opacity: 0.6 }}>Academic Track & Schooling</div>
                  <span className="pill">Vivekananda Mission 10th: 98.4%</span>
                  <span className="pill">12th: 94.5%</span>
                  <span className="pill">DSA in Java</span>
                  <span className="pill">Discrete Math</span>
                  <span className="pill">GNNs</span>
                  <span className="pill">Topper (9.5 GPA)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recognition Item */}
          <div className="bento-item reveal">
            <div className="bento-label">Recognition & Certifications</div>
            <div className="edu-pills" style={{ marginTop: '0.8rem', gap: '0.6rem' }}>
              <div className="cert-btn"><span className="cert-verify"></span>8th Place — Hack and Crack (Jain Univ)</div>
              <div className="cert-btn"><span className="cert-verify"></span>Learning Graph Neural Networks (LinkedIn)</div>
              <div className="cert-btn"><span className="cert-verify"></span>Discrete Mathematics (LinkedIn)</div>
              <div className="cert-btn"><span className="cert-verify"></span>Full-Stack Web Dev Bootcamp (Dr. Angela Yu)</div>
            </div>
          </div>

          {/* Connect Item */}
          <div className="bento-item reveal">
            <div className="bento-label">Connect</div>
            <div className="bento-socials" style={{ marginTop: 'auto' }}>
              <a href="https://www.linkedin.com/in/asmita-das-03078738a" target="_blank" rel="noreferrer" className="bento-soc-link">
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16 }}>
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
              <a href="mailto:asmitadasmail@gmail.com" className="bento-soc-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 16, height: 16 }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Email
              </a>
              <a href="https://github.com/asmitadasmail-beep" target="_blank" rel="noreferrer" className="bento-soc-link">
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16 }}>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                </svg>
                GitHub
              </a>
              <a href="tel:+917980995226" className="bento-soc-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 16, height: 16 }}>
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                +91 7980995226
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="sec-eyebrow reveal">Experience</div>
        <h2 className="sec-title reveal">Where I've worked & competed.</h2>
        <div className="exp-grid">
          {/* Card 1 */}
          <div className="exp-card reveal">
            <div className="exp-header">
              <div>
                <div className="exp-role">Hackathon Finalist (8th Place)</div>
                <div className="exp-company">Hack and Crack Event · Jain University</div>
                <div style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'var(--accent)', marginTop: '0.5rem', background: 'var(--bg3)', display: 'inline-block', padding: '0.2rem 0.6rem', borderRadius: '4px', border: '1px solid var(--line)' }}>
                  8th Place Awarded
                </div>
              </div>
              <div className="exp-meta">
                <div className="exp-date">2026</div>
                <div className="exp-loc">Bengaluru, IN</div>
              </div>
            </div>
            <div className="exp-body">
              <p>Competed in a fast-paced university hackathon building functional AI/ML platforms under strict 8-hour deadlines with rapid product iteration, full-stack integration, and live demonstration.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="exp-card reveal">
            <div className="exp-header">
              <div>
                <div className="exp-role">Biomedical Systems & AI Engineering</div>
                <div className="exp-company">Independent Research & Software Development</div>
                <div style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'var(--accent)', marginTop: '0.5rem', background: 'var(--bg3)', display: 'inline-block', padding: '0.2rem 0.6rem', borderRadius: '4px', border: '1px solid var(--line)' }}>
                  Active Development
                </div>
              </div>
              <div className="exp-meta">
                <div className="exp-date">Aug 2025 — Present</div>
                <div className="exp-loc">Bengaluru, IN</div>
              </div>
            </div>
            <div className="exp-body">
              <ul>
                <li>Developing <strong>BIOLYTIX</strong>, a deterministic biomedical decision-support platform for analysing drug–disease interactions with a six-stage biological explanation framework.</li>
                <li>Integrated interactive 3D molecular structure visualisation using <strong>3Dmol.js</strong> and computational docking simulations.</li>
                <li>Built <strong>EXAMSHIELD-AI</strong>, an intelligent proctoring system using <strong>OpenCV</strong> and computer vision for facial landmark tracking and gaze anomaly detection.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Selected Work Section */}
      <section id="work" className="section">
        <div className="sec-eyebrow reveal">Selected Work</div>
        <h2 className="sec-title reveal">Things I've built.</h2>

        {/* Featured Star Project - BIOLYTIX */}
        <div id="featured-star-root" className="proj-star-container">
          <div className="proj-star reveal">
            <div className="proj-star-content">
              <div className="proj-star-badge">
                <span style={{ display: 'inline-block', width: '6px', height: '6px', background: '#fff', borderRadius: '50%', animation: 'pulse 2s infinite' }}></span>
                Star Project
              </div>
              <h3 style={{ cursor: 'pointer' }} onClick={() => window.open('https://github.com/asmitadasmail-beep/BIOLYTIX', '_blank')}>
                BIOLYTIX
              </h3>
              <p className="proj-star-desc">
                Drug–Disease Interaction Analysis & Biological Explanation System. Developing a biomedical decision-support platform for analysing drug–disease interactions using a deterministic, evidence-based rule engine. Designed a six-stage biological explanation framework connecting disease-related physiological changes, drug mechanisms and potential safety implications. Integrated interactive 3D molecular structure visualisation, computational docking simulations and biological pathway exploration.
              </p>
              <div className="proj-star-tech">
                <span className="tech-pill">React 19</span>
                <span className="tech-pill">TypeScript</span>
                <span className="tech-pill">Node.js</span>
                <span className="tech-pill">Express</span>
                <span className="tech-pill">Tailwind CSS</span>
                <span className="tech-pill">3Dmol.js</span>
              </div>
              <div className="hero-actions" style={{ marginTop: '1.5rem', justifyContent: 'flex-start' }}>
                <a href="https://github.com/asmitadasmail-beep/BIOLYTIX" target="_blank" rel="noreferrer" className="btn btn-fill" style={{ padding: '0.75rem 1.4rem', fontSize: '0.82rem' }}>
                  View Source ↗
                </a>
                <button
                  onClick={() => setActiveDemo('biolytix')}
                  className="btn btn-ghost"
                  style={{ padding: '0.75rem 1.4rem', fontSize: '0.82rem', cursor: 'pointer' }}
                >
                  Interactive Demo 🔗
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Grid */}
        <div className="proj-carousel-container">
          <div className="carousel-nav reveal">
            <button className="carousel-nav-btn" id="prev-btn" aria-label="Previous">←</button>
            <button className="carousel-nav-btn" id="next-btn" aria-label="Next">→</button>
          </div>
          <div className="proj-grid" id="proj-grid">
            {/* Card 1: EXAMSHIELD-AI */}
            <div
              className="proj reveal"
              style={{ cursor: 'pointer' }}
              onClick={(e) => {
                if ((e.target as HTMLElement).closest('button, a')) return;
                window.open('https://github.com/asmitadasmail-beep/EXAMSHIELD-AI', '_blank');
              }}
            >
              <a href="https://github.com/asmitadasmail-beep/EXAMSHIELD-AI" target="_blank" rel="noreferrer" className="proj-link" aria-label="View EXAMSHIELD-AI GitHub Repository"></a>
              <div className="proj-header">
                <div className="proj-icon" style={{ width: '50px', height: '50px', fontSize: '1.3rem' }}>🛡️</div>
                <h3 className="proj-title" style={{ margin: 0, fontSize: '1.1rem' }}>EXAMSHIELD-AI</h3>
                <div className="proj-meta">
                  <a
                    href="https://github.com/asmitadasmail-beep/EXAMSHIELD-AI"
                    target="_blank"
                    rel="noreferrer"
                    className="proj-live"
                    style={{ position: 'relative', zIndex: 3, textDecoration: 'none' }}
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
              <p className="proj-desc" style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '0.5rem' }}>
                AI-powered online examination proctoring system integrating webcam-based monitoring and computer vision to identify suspicious activities via facial tracking.
              </p>
              <div className="proj-foot" style={{ marginTop: '0.8rem' }}>
                <div className="proj-tags">
                  <span className="proj-tag"><span className="proj-tag-dot" style={{ background: '#3572A5' }}></span>Python</span>
                  <span className="proj-tag"><span className="proj-tag-dot" style={{ background: '#6b8e6b' }}></span>Flask / CV</span>
                  <span className="proj-tag">★ 8</span>
                </div>
              </div>
            </div>

            {/* Card 2: Girls Hostel Details Management System */}
            <div
              className="proj reveal"
              style={{ cursor: 'pointer' }}
              onClick={(e) => {
                if ((e.target as HTMLElement).closest('button, a')) return;
                window.open('https://github.com/asmitadasmail-beep/hostel-management', '_blank');
              }}
            >
              <a href="https://github.com/asmitadasmail-beep/hostel-management" target="_blank" rel="noreferrer" className="proj-link" aria-label="View Girls Hostel Details Management System GitHub Repository"></a>
              <div className="proj-header">
                <div className="proj-icon" style={{ width: '50px', height: '50px', fontSize: '1.3rem' }}>🏢</div>
                <h3 className="proj-title" style={{ margin: 0, fontSize: '1.1rem' }}>Girls Hostel Management</h3>
                <div className="proj-meta" style={{ display: 'flex', gap: '0.4rem' }}>
                  <a
                    href="https://github.com/asmitadasmail-beep/hostel-management"
                    target="_blank"
                    rel="noreferrer"
                    className="proj-live"
                    style={{ position: 'relative', zIndex: 3, textDecoration: 'none' }}
                  >
                    GitHub ↗
                  </a>
                  <button
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveDemo('hostel'); }}
                    className="proj-live"
                    style={{ position: 'relative', zIndex: 3, background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
                  >
                    Match Sim 🔗
                  </button>
                </div>
              </div>
              <p className="proj-desc" style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '0.5rem' }}>
                Web-based hostel management application featuring a 10-question lifestyle compatibility assessment and weighted scoring algorithm for room-sharing recommendations.
              </p>
              <div className="proj-foot" style={{ marginTop: '0.8rem' }}>
                <div className="proj-tags">
                  <span className="proj-tag"><span className="proj-tag-dot" style={{ background: '#f1e05a' }}></span>JavaScript</span>
                  <span className="proj-tag"><span className="proj-tag-dot" style={{ background: '#2b7489' }}></span>React</span>
                  <span className="proj-tag">★ 6</span>
                </div>
              </div>
            </div>

            {/* Card 3: Quantum Superposition Simulation */}
            <div
              className="proj reveal"
              style={{ cursor: 'pointer' }}
              onClick={(e) => {
                if ((e.target as HTMLElement).closest('button, a')) return;
                window.open('https://github.com/asmitadasmail-beep/QUANTUM-SUPERPOSITION-AND-MEASUREMENT', '_blank');
              }}
            >
              <a href="https://github.com/asmitadasmail-beep/QUANTUM-SUPERPOSITION-AND-MEASUREMENT" target="_blank" rel="noreferrer" className="proj-link" aria-label="View Quantum Superposition GitHub Repository"></a>
              <div className="proj-header">
                <div className="proj-icon" style={{ width: '50px', height: '50px', fontSize: '1.3rem' }}>⚛️</div>
                <h3 className="proj-title" style={{ margin: 0, fontSize: '1.1rem' }}>Quantum Superposition</h3>
                <div className="proj-meta" style={{ display: 'flex', gap: '0.4rem' }}>
                  <a
                    href="https://github.com/asmitadasmail-beep/QUANTUM-SUPERPOSITION-AND-MEASUREMENT"
                    target="_blank"
                    rel="noreferrer"
                    className="proj-live"
                    style={{ position: 'relative', zIndex: 3, textDecoration: 'none' }}
                  >
                    GitHub ↗
                  </a>
                  <button
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveDemo('quantum'); }}
                    className="proj-live"
                    style={{ position: 'relative', zIndex: 3, background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
                  >
                    Wave Sim 🔗
                  </button>
                </div>
              </div>
              <p className="proj-desc" style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '0.5rem' }}>
                Interactive web application demonstrating quantum superposition and measurement concepts through visual wave function representations and stochastic collapse.
              </p>
              <div className="proj-foot" style={{ marginTop: '0.8rem' }}>
                <div className="proj-tags">
                  <span className="proj-tag"><span className="proj-tag-dot" style={{ background: '#2b7489' }}></span>TypeScript</span>
                  <span className="proj-tag"><span className="proj-tag-dot" style={{ background: '#646cff' }}></span>Vite</span>
                  <span className="proj-tag">★ 9</span>
                </div>
              </div>
            </div>

            {/* Card 4: Medical Insurance Cost Analysis */}
            <div
              className="proj reveal"
              style={{ cursor: 'pointer' }}
              onClick={(e) => {
                if ((e.target as HTMLElement).closest('button, a')) return;
                window.open('https://github.com/asmitadasmail-beep/Medical-Insurance-and-Healthcare-Cost-Analysis', '_blank');
              }}
            >
              <a href="https://github.com/asmitadasmail-beep/Medical-Insurance-and-Healthcare-Cost-Analysis" target="_blank" rel="noreferrer" className="proj-link" aria-label="View Healthcare Cost Analysis GitHub Repository"></a>
              <div className="proj-header">
                <div className="proj-icon" style={{ width: '50px', height: '50px', fontSize: '1.3rem' }}>📊</div>
                <h3 className="proj-title" style={{ margin: 0, fontSize: '1.1rem' }}>Healthcare Cost Analysis</h3>
                <div className="proj-meta">
                  <a
                    href="https://github.com/asmitadasmail-beep/Medical-Insurance-and-Healthcare-Cost-Analysis"
                    target="_blank"
                    rel="noreferrer"
                    className="proj-live"
                    style={{ position: 'relative', zIndex: 3, textDecoration: 'none' }}
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
              <p className="proj-desc" style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '0.5rem' }}>
                Exploratory data analysis investigating relationships between patient demographics, risk factors, and medical expenditure patterns through statistical visualisations.
              </p>
              <div className="proj-foot" style={{ marginTop: '0.8rem' }}>
                <div className="proj-tags">
                  <span className="proj-tag"><span className="proj-tag-dot" style={{ background: '#3572A5' }}></span>Python</span>
                  <span className="proj-tag"><span className="proj-tag-dot" style={{ background: '#d48c48' }}></span>Data Viz</span>
                  <span className="proj-tag">★ 5</span>
                </div>
              </div>
            </div>

            {/* Card 5: LeetCode Solutions & DSA */}
            <div
              className="proj reveal"
              style={{ cursor: 'pointer' }}
              onClick={(e) => {
                if ((e.target as HTMLElement).closest('button, a')) return;
                window.open('https://github.com/asmitadasmail-beep/Leetcode-solutions', '_blank');
              }}
            >
              <a href="https://github.com/asmitadasmail-beep/Leetcode-solutions" target="_blank" rel="noreferrer" className="proj-link" aria-label="View LeetCode DSA GitHub Repository"></a>
              <div className="proj-header">
                <div className="proj-icon" style={{ width: '50px', height: '50px', fontSize: '1.3rem' }}>💻</div>
                <h3 className="proj-title" style={{ margin: 0, fontSize: '1.1rem' }}>LeetCode Solutions (DSA)</h3>
                <div className="proj-meta">
                  <a
                    href="https://github.com/asmitadasmail-beep/Leetcode-solutions"
                    target="_blank"
                    rel="noreferrer"
                    className="proj-live"
                    style={{ position: 'relative', zIndex: 3, textDecoration: 'none' }}
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
              <p className="proj-desc" style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '0.5rem' }}>
                Structured problem-solving repository implementing data structures and algorithms in Java, focusing on binary search, arrays, two pointers, and mathematical algorithms.
              </p>
              <div className="proj-foot" style={{ marginTop: '0.8rem' }}>
                <div className="proj-tags">
                  <span className="proj-tag"><span className="proj-tag-dot" style={{ background: '#b07219' }}></span>Java</span>
                  <span className="proj-tag"><span className="proj-tag-dot" style={{ background: '#6b8e6b' }}></span>Algorithms</span>
                  <span className="proj-tag">★ 14</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="more-gh-wrap reveal">
          <a href="https://github.com/asmitadasmail-beep" target="_blank" rel="noreferrer" className="more-gh">
            View more on GitHub ↗
          </a>
        </div>
      </section>

      <div className="divider"></div>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="sec-eyebrow reveal">Skills</div>
        <h2 className="sec-title reveal">What I work with.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {/* Column 1: Core & Systems */}
          <div className="reveal">
            <h3 style={{ fontSize: '0.85rem', color: 'var(--dim)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
              Core & Systems
            </h3>
            <div className="skills-grid">
              <span className="skill-chip">Python</span>
              <span className="skill-chip">Java</span>
              <span className="skill-chip">HTML5</span>
              <span className="skill-chip">CSS3</span>
              <span className="skill-chip">JavaScript</span>
              <span className="skill-chip">TypeScript</span>
            </div>
          </div>

          {/* Column 2: Frontend & Tools */}
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <h3 style={{ fontSize: '0.85rem', color: 'var(--dim)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
              Frontend & Tools
            </h3>
            <div className="skills-grid">
              <span className="skill-chip">React 19</span>
              <span className="skill-chip">Tailwind CSS</span>
              <span className="skill-chip">3Dmol.js</span>
              <span className="skill-chip">Vite</span>
            </div>
          </div>

          {/* Column 3: Backend & APIs */}
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <h3 style={{ fontSize: '0.85rem', color: 'var(--dim)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
              Backend & APIs
            </h3>
            <div className="skills-grid">
              <span className="skill-chip">FastAPI</span>
              <span className="skill-chip">Node.js</span>
              <span className="skill-chip">Express.js</span>
              <span className="skill-chip">REST APIs</span>
              <span className="skill-chip">Git / GitHub</span>
            </div>
          </div>

          {/* Column 4: AI & Databases */}
          <div className="reveal" style={{ transitionDelay: '0.3s' }}>
            <h3 style={{ fontSize: '0.85rem', color: 'var(--dim)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
              AI / GenAI & Databases
            </h3>
            <div className="skills-grid">
              <span className="skill-chip">Prompt Engineering</span>
              <span className="skill-chip">AI Development</span>
              <span className="skill-chip">OpenCV</span>
              <span className="skill-chip">Computer Vision</span>
              <span className="skill-chip">Graph Neural Nets</span>
              <span className="skill-chip">PostgreSQL</span>
              <span className="skill-chip">SQLite</span>
              <span className="skill-chip">Vercel</span>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Official Resume & Word Document Section */}
      <section id="resume" className="section">
        <div className="sec-eyebrow reveal">Curriculum Vitae</div>
        <h2 className="sec-title reveal">Official Resume & Word Document.</h2>

        {/* Word Document Showcase Card */}
        <div className="reveal" style={{
          background: 'var(--bg2)',
          border: '1px solid var(--line2)',
          borderRadius: '16px',
          padding: '2rem',
          marginBottom: '2rem',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '280px',
            height: '280px',
            background: 'radial-gradient(circle, rgba(24, 90, 189, 0.12) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}></div>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', minWidth: '280px' }}>
              <div style={{
                width: '64px',
                height: '64px',
                background: 'linear-gradient(135deg, #185abd 0%, #103f84 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '2rem',
                fontWeight: '900',
                boxShadow: '0 4px 14px rgba(24, 90, 189, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                W
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text)', margin: 0 }}>
                    Asmita_Das_Resume.docx
                  </h3>
                  <span style={{
                    fontSize: '0.7rem',
                    background: 'rgba(24, 90, 189, 0.2)',
                    color: '#60a5fa',
                    border: '1px solid rgba(96, 165, 250, 0.3)',
                    padding: '0.15rem 0.5rem',
                    borderRadius: '4px',
                    fontWeight: 600
                  }}>
                    WORD DOCUMENT
                  </span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '0.35rem', lineHeight: '1.4' }}>
                  Standard ATS-formatted Word file • 12.6 KB • Updated for SDE Internship Applications
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
              <a
                href="/resume.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-fill"
                style={{
                  padding: '0.75rem 1.4rem',
                  fontSize: '0.85rem',
                  background: 'var(--accent)',
                  color: '#fff',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
                title="Open Word Document in separate tab"
              >
                <span>Open in Separate Tab</span>
                <span>↗</span>
              </a>
              <a
                href="/Asmita_Das_Resume.docx"
                download="Asmita_Das_Resume.docx"
                className="btn btn-ghost"
                style={{
                  padding: '0.75rem 1.4rem',
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
                title="Download Microsoft Word .docx file"
              >
                <span>Download .DOCX</span>
                <span>⬇</span>
              </a>
              <button
                onClick={() => setIsResumeOpen(true)}
                className="btn btn-ghost"
                style={{
                  padding: '0.75rem 1.4rem',
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                ATS Preview 👁️
              </button>
            </div>
          </div>

          {/* Resume Snapshot Details */}
          <div style={{
            marginTop: '1.5rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--line)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
            fontSize: '0.85rem'
          }}>
            <div>
              <div style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
                Candidate Summary
              </div>
              <p style={{ color: 'var(--muted)', lineHeight: '1.5' }}>
                Second-year B.Tech CSE (AI & ML) student with a GPA of 9.5/10 at Jain University. Seeking an SDE internship.
              </p>
            </div>
            <div>
              <div style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
                Direct Contact
              </div>
              <div style={{ color: 'var(--muted)', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                <span>📞 +91 7980995226</span>
                <span>✉️ <a href="mailto:asmitadasmail@gmail.com" style={{ color: 'var(--text)', textDecoration: 'underline' }}>asmitadasmail@gmail.com</a></span>
                <span>📍 Bengaluru, India</span>
              </div>
            </div>
            <div>
              <div style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
                Key Recognition
              </div>
              <div style={{ color: 'var(--muted)', lineHeight: '1.4' }}>
                🏆 <strong>8th place</strong> among 48 teams at the Hack and Crack event by The Turing Club, Jain University.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="sec-eyebrow reveal">Get in touch</div>
        <h2 className="sec-title reveal">Let's connect.</h2>
        <p className="contact-intro reveal">
          Have an opportunity, idea, or technical question? Send a message and I will get back to you.
        </p>
        <form
          className="contact-form reveal"
          onSubmit={async (event) => {
            event.preventDefault();
            if (contactStatus === 'sending') return;

            setContactStatus('sending');
            setContactError('');
            const apiUrl = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://127.0.0.1:5000' : '');
            if (!apiUrl) {
              setContactStatus('error');
              setContactError('Contact service is not configured. Please try again later.');
              return;
            }

            try {
              const response = await fetch(`${apiUrl.replace(/\/$/, '')}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  name: contactForm.name.trim(),
                  email: contactForm.email.trim(),
                  message: `Subject: ${contactForm.subject.trim()}\n\n${contactForm.message.trim()}`,
                }),
              });
              const result = await response.json().catch(() => null);
              if (!response.ok) {
                throw new Error(result?.error || 'Unable to send your message.');
              }
              setContactForm({ name: '', email: '', subject: '', message: '' });
              setContactStatus('success');
            } catch (error) {
              setContactStatus('error');
              setContactError(error instanceof Error ? error.message : 'Unable to send your message.');
            }
          }}
        >
          <div className="contact-form-grid">
            <label>
              Full Name
              <input
                required
                maxLength={100}
                value={contactForm.name}
                onChange={(event) => setContactForm({ ...contactForm, name: event.target.value })}
                placeholder="Your name"
              />
            </label>
            <label>
              Email Address
              <input
                required
                type="email"
                maxLength={254}
                value={contactForm.email}
                onChange={(event) => setContactForm({ ...contactForm, email: event.target.value })}
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label>
            Subject
            <input
              required
              maxLength={200}
              value={contactForm.subject}
              onChange={(event) => setContactForm({ ...contactForm, subject: event.target.value })}
              placeholder="What would you like to discuss?"
            />
          </label>
          <label>
            Message
            <textarea
              required
              maxLength={5000}
              rows={6}
              value={contactForm.message}
              onChange={(event) => setContactForm({ ...contactForm, message: event.target.value })}
              placeholder="Tell me a little about your project or opportunity..."
            />
          </label>
          <div className="contact-form-actions">
            <span className={`contact-status ${contactStatus}`} role={contactStatus === 'error' ? 'alert' : undefined}>
              {contactStatus === 'success' && 'Message sent successfully.'}
              {contactStatus === 'error' && contactError}
            </span>
            <button type="submit" className="btn btn-fill contact-submit" disabled={contactStatus === 'sending'}>
              {contactStatus === 'sending' ? 'Sending...' : 'Send Message ↗'}
            </button>
          </div>
        </form>
      </section>

      {/* Footer */}
      <footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="foot-brand">Asmita Das</span>
        <span style={{ fontSize: '0.8rem', color: 'var(--dim)' }}>© 2026 · Bengaluru, India</span>
      </footer>

      {/* Windows BSOD Easter Egg */}
      <div className="bsod" id="bsod">
        <h1>WINDOWS</h1>
        <p>A fatal exception 0E has occurred at 0028:C0011E36 in VXD VMM(01) + 00010E36. The current application will be terminated.</p>
        <p style={{ marginTop: '1rem' }}>* Press any key to terminate the current application.</p>
        <p>* Press CTRL+ALT+DEL again to restart your computer. You will lose any unsaved information in all applications.</p>
        <p style={{ marginTop: '1rem', textAlign: 'center' }}>Press any key to continue _</p>
      </div>

      {/* Official ATS-Friendly Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      {/* Interactive Project Simulators */}
      <InteractiveDemosModal demoType={activeDemo} onClose={() => setActiveDemo(null)} />
    </>
  );
}
