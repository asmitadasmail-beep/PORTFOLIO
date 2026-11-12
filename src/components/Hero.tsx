import React, { useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Phone, Copy, Check, ExternalLink, MapPin, Award, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background radial gradient accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch mb-16">
          {/* Left Column (Typographic Hierarchy) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Status kicker without pulsing pill */}
            <div className="flex items-center gap-3 text-xs text-neutral-600 dark:text-neutral-400">
              <span className="font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Available for SDE Internships
              </span>
              <span>·</span>
              <span className="flex items-center gap-1 text-neutral-600 dark:text-neutral-400">
                <MapPin className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500" /> Bengaluru, India
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 leading-[1.12] text-balance">
              Building AI-powered systems, real-time platforms & software.
            </h1>

            {/* Lead Copy */}
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
              Second-year B.Tech CSE (AI & ML) student at{' '}
              <span className="text-neutral-900 dark:text-neutral-200 font-semibold">Jain University</span> (GPA 9.5/10) engineering deterministic biomedical tools, computer vision proctoring, and high-performance applications under fast-paced hackathon constraints.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-neutral-950 font-semibold text-sm transition-all shadow-md shadow-emerald-500/10 active:scale-95 whitespace-nowrap"
              >
                Explore Projects
              </a>
              <button
                onClick={onOpenResume}
                className="px-5 py-2.5 rounded-xl bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700/80 font-medium text-sm transition-all active:scale-95 whitespace-nowrap shadow-sm"
              >
                View Full Resume
              </button>
              <a
                href="#contact"
                className="px-4 py-2.5 rounded-xl text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-900/60 font-medium text-sm transition-all whitespace-nowrap"
              >
                Get in Touch
              </a>
            </div>

            {/* Contact & Social Bar */}
            <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800/80 flex flex-wrap items-center gap-3 text-xs text-neutral-600 dark:text-neutral-400">
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 hover:text-neutral-950 dark:hover:text-white transition-colors"
                title="Click to copy email address"
              >
                <Mail className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
                <span>{PERSONAL_INFO.email}</span>
                {copiedKey === 'email' ? <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3 h-3 text-neutral-400 dark:text-neutral-500" />}
              </button>

              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 hover:text-neutral-950 dark:hover:text-white transition-colors"
                title="Click to copy phone number"
              >
                <Phone className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
                <span>{PERSONAL_INFO.phone}</span>
                {copiedKey === 'phone' ? <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3 h-3 text-neutral-400 dark:text-neutral-500" />}
              </button>

              <div className="flex items-center gap-2 pl-1">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors"
                  aria-label="GitHub profile"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Container */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900/60 shadow-xl dark:shadow-2xl group">
              <img
                src="/src/assets/images/asmita_portrait_1794459908003.jpg"
                alt="Asmita Das - Software Engineer & B.Tech CSE Student"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent opacity-80" />
              
              {/* Bottom overlay badge */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border border-neutral-200/80 dark:border-neutral-800 shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-sm text-neutral-900 dark:text-neutral-100">{PERSONAL_INFO.name}</div>
                    <div className="text-xs text-neutral-600 dark:text-neutral-400">Jain University · CSE (AI & ML)</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono font-bold text-sm text-emerald-600 dark:text-emerald-400">GPA 9.5</div>
                    <div className="text-[10px] text-neutral-500">Scale of 10</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-Column KPI / Metrics Strip (below hero split) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-white/70 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800/80 shadow-sm dark:shadow-none">
          {PERSONAL_INFO.stats.map((stat, i) => (
            <div key={i} className="space-y-1">
              <span className="text-xs text-neutral-500 dark:text-neutral-400 block font-medium">{stat.label}</span>
              <div className="text-xl sm:text-2xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 font-mono">
                {stat.value}
              </div>
              <span className="text-[11px] text-emerald-600 dark:text-emerald-400/90 block font-medium">{stat.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
