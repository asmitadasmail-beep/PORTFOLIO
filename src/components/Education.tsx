import React from 'react';
import { GraduationCap, Award, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 border-t border-neutral-200 dark:border-neutral-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold mb-2">
            Academic Track
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Education & Academic Distinction
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
            Rigorous undergraduate training in computer science, machine learning algorithms, and consistent top-tier academic performance.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-6">
          {EDUCATION.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all flex flex-col md:flex-row md:items-start justify-between gap-6 shadow-sm dark:shadow-none"
            >
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500" /> {edu.period}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500" /> {edu.location}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">{edu.institution}</h3>
                  <div className="text-sm text-emerald-600 dark:text-emerald-400 font-medium mt-0.5">{edu.degree}</div>
                </div>

                <ul className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-300 pt-2">
                  {edu.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-emerald-500 dark:bg-emerald-400 shrink-0 mt-1.5" />
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Side: Grade / Distinction Badge */}
              <div className="shrink-0 md:text-right pt-2 md:pt-0 border-t md:border-t-0 border-neutral-100 dark:border-neutral-800">
                <div className="inline-flex flex-col items-start md:items-end p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800">
                  <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold block mb-1">
                    Grade Metric
                  </span>
                  <span className="font-mono text-xl sm:text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">
                    {edu.score}
                  </span>
                  <span className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {idx === 0 ? 'Consistent Top Tier' : 'Distinction Honors'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hackathon Achievement Highlight Banner */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-neutral-900/60 to-neutral-900/40 border border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-emerald-400 font-bold">
                Competitive Achievement
              </div>
              <h4 className="text-base font-bold text-white">
                8th Place — Hack and Crack Event at Jain University
              </h4>
              <p className="text-xs text-neutral-300 mt-0.5">
                Competed in an intensive multi-hour hackathon, architecting and presenting a functional software prototype under deadline.
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <span className="px-3.5 py-1.5 rounded-lg bg-neutral-800 border border-neutral-700 text-xs font-mono text-neutral-300">
              Jain Univ · 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
