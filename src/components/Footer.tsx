import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-950 py-12 text-xs text-neutral-500 dark:text-neutral-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 font-bold text-neutral-900 dark:text-neutral-100 text-sm mb-1">
            <span>{PERSONAL_INFO.name}</span>
            <span className="text-neutral-400 dark:text-neutral-600 font-normal">·</span>
            <span className="text-xs font-normal text-neutral-600 dark:text-neutral-400">Bengaluru, India</span>
          </div>
          <p className="text-neutral-500">
            Second-Year B.Tech CSE (AI & ML) @ Jain University · GPA 9.5/10
          </p>
        </div>

        <div className="flex items-center gap-6 text-neutral-600 dark:text-neutral-400">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-950 dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-950 dark:hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-neutral-950 dark:hover:text-white transition-colors"
          >
            Email
          </a>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 mt-6 border-t border-neutral-100 dark:border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-2 text-neutral-400 dark:text-neutral-500 text-[11px]">
        <div>
          © 2026 Asmita Das. Designed for high performance, responsiveness & accessibility.
        </div>
        <div>
          React 19 · TypeScript · Tailwind CSS
        </div>
      </div>
    </footer>
  );
};
