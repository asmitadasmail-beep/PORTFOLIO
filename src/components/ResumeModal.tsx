import React, { useState } from 'react';
import { X, Printer, Copy, Check, Download, Mail, Phone, MapPin, Linkedin, Github, ExternalLink, FileText } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION, PROJECTS, SKILL_CATEGORIES, CERTIFICATIONS, ACTIVITIES_AND_ACHIEVEMENTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textContent = `
${PERSONAL_INFO.name}
${PERSONAL_INFO.phone} | ${PERSONAL_INFO.email} | ${PERSONAL_INFO.location}
LinkedIn: ${PERSONAL_INFO.linkedin}
GitHub: ${PERSONAL_INFO.github}

PROFESSIONAL SUMMARY
${PERSONAL_INFO.summary}

EDUCATION
${EDUCATION.map(e => `${e.institution} (${e.period})\n${e.degree} | ${e.score} | ${e.location}\n${e.details.join('\n')}`).join('\n\n')}

TECHNICAL SKILLS
${SKILL_CATEGORIES.map(c => `${c.category}: ${c.skills.map(s => s.name).join(', ')}`).join('\n')}

PROJECTS
${PROJECTS.map(p => `${p.title} – ${p.subtitle}\nTech: ${p.technologies.join(', ')}\n${p.highlights.map(h => `• ${h}`).join('\n')}`).join('\n\n')}

CERTIFICATIONS
${CERTIFICATIONS.map(c => `${c.title} – ${c.issuer} (${c.date})\n${c.description.map(d => `• ${d}`).join('\n')}`).join('\n\n')}

ACTIVITIES & ACHIEVEMENTS
${ACTIVITIES_AND_ACHIEVEMENTS.map(a => `• ${a}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-neutral-900 border border-neutral-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-neutral-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Actions Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950/70">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-neutral-200 text-sm">Resume Preview — Asmita Das</span>
            <span className="text-xs text-neutral-400 hidden sm:inline">· Official SDE Candidate Profile</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
              title="Open Word document in separate tab"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Open Word File ↗</span>
            </a>
            <a
              href="/Asmita_Das_Resume.docx"
              download="Asmita_Das_Resume.docx"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-medium transition-colors"
              title="Download Word Document (.docx)"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download .DOCX</span>
            </a>
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-medium text-neutral-200 transition-colors"
              title="Copy plain text resume"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied' : 'Copy'}
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-neutral-950 text-xs font-semibold transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors ml-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Word Document Callout Banner */}
        <div className="bg-gradient-to-r from-blue-950/60 to-blue-900/40 border-b border-blue-800/40 px-6 py-2.5 flex items-center justify-between text-xs text-blue-200">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded bg-blue-600 text-white font-bold flex items-center justify-center text-[11px]">W</span>
            <span>Word Document available: <strong>Asmita_Das_Resume.docx</strong></span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white underline font-medium flex items-center gap-1"
            >
              Open in Separate Tab <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="/Asmita_Das_Resume.docx"
              download="Asmita_Das_Resume.docx"
              className="text-white bg-blue-600/80 hover:bg-blue-600 px-2.5 py-1 rounded font-medium flex items-center gap-1"
            >
              Download .docx <Download className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Printable & Scrollable Resume Sheet */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-white text-neutral-900 print:p-0 print:text-black">
          {/* Header */}
          <div className="border-b border-neutral-300 pb-5 mb-6 text-center sm:text-left">
            <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 mb-2">
              ASMITA DAS
            </h1>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1.5 text-xs text-neutral-600 font-medium">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-neutral-500" /> {PERSONAL_INFO.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-neutral-500" /> {PERSONAL_INFO.email}
              </span>
              <span>•</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-blue-700 hover:underline">
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-neutral-800 hover:underline">
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-neutral-500" /> {PERSONAL_INFO.location}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-800 border-b border-neutral-200 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs text-neutral-700 leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-800 border-b border-neutral-200 pb-1 mb-2.5">
              Education
            </h2>
            <div className="space-y-3">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="text-xs">
                  <div className="flex justify-between items-baseline font-bold text-neutral-900">
                    <span>{edu.institution}</span>
                    <span className="font-normal text-neutral-600">{edu.period}</span>
                  </div>
                  <div className="flex justify-between items-baseline text-neutral-700 italic mb-1">
                    <span>{edu.degree}  |  {edu.score}</span>
                    <span className="not-italic text-neutral-500">{edu.location}</span>
                  </div>
                  <ul className="list-disc list-inside text-neutral-600 space-y-0.5">
                    {edu.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-800 border-b border-neutral-200 pb-1 mb-2.5">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-neutral-700">
              <div>
                <span className="font-semibold text-neutral-900">Languages:</span> Python, Java, HTML, CSS, JavaScript
              </div>
              <div>
                <span className="font-semibold text-neutral-900">Frontend:</span> React, Tailwind CSS
              </div>
              <div>
                <span className="font-semibold text-neutral-900">Backend & APIs:</span> FastAPI, Node.js, REST APIs, Git/GitHub
              </div>
              <div>
                <span className="font-semibold text-neutral-900">AI / GenAI / CV:</span> Prompt Engineering, AI-Assisted Development
              </div>
              <div>
                <span className="font-semibold text-neutral-900">Databases & Cloud:</span> PostgreSQL, SQLite, Vercel
              </div>
            </div>
          </div>

          {/* Experience and Projects */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-800 border-b border-neutral-200 pb-1 mb-2.5">
              Experience and Projects
            </h2>
            <div className="space-y-4">
              {PROJECTS.map((proj, idx) => (
                <div key={proj.id} className="text-xs">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-neutral-900">
                      {idx + 1}. {proj.title} – {proj.subtitle}
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-neutral-600 mb-1">
                    {proj.technologies.join(', ')}
                  </div>
                  <ul className="list-disc list-inside text-neutral-700 space-y-0.5">
                    {proj.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="leading-relaxed">{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-800 border-b border-neutral-200 pb-1 mb-2.5">
              Certifications
            </h2>
            <div className="space-y-2.5">
              {CERTIFICATIONS.map((cert, cIdx) => (
                <div key={cIdx} className="text-xs">
                  <div className="flex justify-between items-baseline font-bold text-neutral-900">
                    <span>{cIdx + 1}. {cert.title} – {cert.issuer}</span>
                    <span className="font-normal text-neutral-600">{cert.date}</span>
                  </div>
                  <ul className="list-disc list-inside text-neutral-700 space-y-0.5 mt-0.5">
                    {cert.description.map((item, dIdx) => (
                      <li key={dIdx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Activities & Achievements */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-800 border-b border-neutral-200 pb-1 mb-2.5">
              Activities & Achievements
            </h2>
            <ul className="list-disc list-inside text-neutral-700 space-y-1.5 text-xs">
              {ACTIVITIES_AND_ACHIEVEMENTS.map((act, aIdx) => (
                <li key={aIdx} className="leading-relaxed">{act}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
