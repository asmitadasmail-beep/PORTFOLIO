import React, { useState } from 'react';
import { Code2, Layout, Server, Brain, Database, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const categoryIcons = [
    <Code2 key="code" className="w-4 h-4 text-emerald-400" />,
    <Layout key="layout" className="w-4 h-4 text-emerald-400" />,
    <Server key="server" className="w-4 h-4 text-emerald-400" />,
    <Brain key="brain" className="w-4 h-4 text-emerald-400" />,
    <Database key="db" className="w-4 h-4 text-emerald-400" />
  ];

  return (
    <section id="skills" className="py-20 border-t border-neutral-200 dark:border-neutral-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold mb-2">
            Technical Stack
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Skills & Core Tooling
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
            Practical competencies developed through hands-on full-stack development, hackathons, and AI research projects.
          </p>
        </div>

        {/* Skill Category Selector Tabs */}
        <div className="flex items-center gap-2 pb-6 overflow-x-auto border-b border-neutral-200 dark:border-neutral-800">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategoryIndex(idx)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                activeCategoryIndex === idx
                  ? 'bg-neutral-900 dark:bg-neutral-800 text-white border border-neutral-900 dark:border-neutral-700/80 shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900'
              }`}
            >
              {categoryIcons[idx % categoryIcons.length]}
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Active Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-8">
          {SKILL_CATEGORIES[activeCategoryIndex].skills.map((skill) => (
            <div
              key={skill.name}
              className="p-5 rounded-2xl bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all flex flex-col justify-between space-y-3 group shadow-sm dark:shadow-none"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-neutral-900 dark:text-neutral-100 text-base group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mt-0.5 font-medium">
                    {skill.level}
                  </span>
                </div>
                <div className="w-2 h-2 rounded-full bg-emerald-500/80 mt-1.5" />
              </div>

              <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800/60">
                <span className="text-[11px] text-neutral-500 block mb-0.5">Production Usage</span>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-mono">
                  {skill.context}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* All Stack Matrix Summary */}
        <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-neutral-900/30 border border-neutral-200 dark:border-neutral-800/80 shadow-sm dark:shadow-none">
          <h4 className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold mb-4">
            Complete Technology Inventory
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-6 text-xs text-neutral-700 dark:text-neutral-300">
            <div>
              <span className="text-neutral-500 font-semibold block mb-1">Languages:</span>
              <p className="text-neutral-800 dark:text-neutral-300 font-mono">Python, Java, JavaScript, TypeScript, HTML, CSS</p>
            </div>
            <div>
              <span className="text-neutral-500 font-semibold block mb-1">Frontend:</span>
              <p className="text-neutral-800 dark:text-neutral-300 font-mono">React 19, Tailwind CSS, 3Dmol.js, Vite</p>
            </div>
            <div>
              <span className="text-neutral-500 font-semibold block mb-1">Backend & APIs:</span>
              <p className="text-neutral-800 dark:text-neutral-300 font-mono">FastAPI, Node.js, Express, REST APIs, Git/GitHub</p>
            </div>
            <div>
              <span className="text-neutral-500 font-semibold block mb-1">AI / GenAI / CV:</span>
              <p className="text-neutral-800 dark:text-neutral-300 font-mono">Prompt Engineering, OpenCV, Computer Vision, GNNs</p>
            </div>
            <div>
              <span className="text-neutral-500 font-semibold block mb-1">Databases & Cloud:</span>
              <p className="text-neutral-800 dark:text-neutral-300 font-mono">PostgreSQL, SQLite, Vercel</p>
            </div>
            <div>
              <span className="text-neutral-500 font-semibold block mb-1">Competitive Coding:</span>
              <p className="text-neutral-800 dark:text-neutral-300 font-mono">Data Structures, Binary Search, Math Algorithms</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
