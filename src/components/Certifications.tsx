import React from 'react';
import { Award, CheckCircle, ExternalLink, Calendar, BookOpen } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 border-t border-neutral-200 dark:border-neutral-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold mb-2">
            Continuous Learning
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Professional Certifications & Specializations
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
            Structured coursework bridging graph machine learning theory, discrete mathematics, and production full-stack engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900/60 transition-all flex flex-col justify-between space-y-4 group shadow-sm dark:shadow-none"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                  <span className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold">{cert.issuer}</span>
                  <span className="flex items-center gap-1 text-neutral-400 dark:text-neutral-500">
                    <Calendar className="w-3 h-3" /> {cert.date}
                  </span>
                </div>

                <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {cert.title}
                </h3>

                <ul className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-400">
                  {cert.description.map((desc, dIdx) => (
                    <li key={dIdx} className="leading-relaxed">
                      • {desc}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Topics / syllabus breakdown */}
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 space-y-2">
                <span className="text-[11px] text-neutral-500 block">Competencies Verified</span>
                <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs font-mono text-neutral-700 dark:text-neutral-300">
                  {cert.topics.map((t, tIdx) => (
                    <span key={t}>
                      {t}{tIdx < cert.topics.length - 1 && ' ·'}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
