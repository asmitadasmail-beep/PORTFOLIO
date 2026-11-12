import React from 'react';
import { Cpu, Target, Clock, Zap, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      title: "AI & Computer Vision",
      desc: "Building production-grade real-time systems utilizing OpenCV, landmark detection, and deterministic rule integration for reliable automation."
    },
    {
      icon: <Layers className="w-5 h-5 text-emerald-400" />,
      title: "Full-Stack Architecture",
      desc: "Architecting modular web applications with React 19, TypeScript, Node.js, Express, and FastAPI paired with relational databases."
    },
    {
      icon: <Clock className="w-5 h-5 text-emerald-400" />,
      title: "Rapid Hackathon Execution",
      desc: "Proven ability to design, code, and deploy functional MVPs under stringent 8-hour deadlines, earning 8th place in the Hack & Crack Event."
    },
    {
      icon: <BookOpen className="w-5 h-5 text-emerald-400" />,
      title: "Algorithmic Precision",
      desc: "Strong foundation in discrete mathematics, graph neural network representations, and structured Java data structures and algorithms."
    }
  ];

  return (
    <section id="about" className="py-20 border-t border-neutral-200 dark:border-neutral-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold mb-2">
            About Me
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Engineering at the intersection of AI, systems, and deterministic software.
          </h2>
        </div>

        {/* Story & Context Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-7 space-y-4 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            <p>
              I am a second-year undergraduate pursuing a <strong className="text-neutral-950 dark:text-white">B.Tech in Computer Science and Engineering with specialization in AI & Machine Learning</strong> at Jain (Deemed-to-be) University in Bengaluru, maintaining an academic CGPA of <strong className="text-emerald-600 dark:text-emerald-400 font-mono">9.5/10</strong>.
            </p>
            <p>
              My engineering philosophy revolves around solving real problems through engineered systems rather than toy scripts. Whether designing <strong className="text-neutral-950 dark:text-white">BIOLYTIX</strong> — a biomedical decision-support system coupling deterministic rule engines with 3D molecular structure visualizers — or developing <strong className="text-neutral-950 dark:text-white">EXAMSHIELD-AI</strong> for computer vision proctoring, I focus on system reliability, zero-hallucination pipelines, and human-centric utility.
            </p>
            <p>
              I thrive under intense development sprints: building real-time voice assistants, LLM applications, and responsive platforms under 8-hour hackathon constraints. Recently, my team secured <strong className="text-neutral-950 dark:text-white">8th place in the Hack and Crack Event</strong> at Jain University. Currently, I am actively seeking an <strong className="text-emerald-600 dark:text-emerald-400">SDE Internship</strong> where I can contribute to mission-critical codebases and scale impactful products.
            </p>
          </div>

          {/* Quick Profile Summary Card */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 shadow-sm dark:shadow-none space-y-4">
            <h3 className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold pb-2 border-b border-neutral-200 dark:border-neutral-800">
              Quick Facts
            </h3>
            
            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-1 border-b border-neutral-100 dark:border-neutral-800/60">
                <span className="text-neutral-500 dark:text-neutral-400">Current Standing</span>
                <span className="font-semibold text-neutral-900 dark:text-neutral-200">2nd Year B.Tech CSE (AI & ML)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-100 dark:border-neutral-800/60">
                <span className="text-neutral-500 dark:text-neutral-400">Institution</span>
                <span className="font-semibold text-neutral-900 dark:text-neutral-200">Jain University, Bengaluru</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-100 dark:border-neutral-800/60">
                <span className="text-neutral-500 dark:text-neutral-400">Academic CGPA</span>
                <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">9.5 / 10.0</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-100 dark:border-neutral-800/60">
                <span className="text-neutral-500 dark:text-neutral-400">Schooling Score</span>
                <span className="font-mono text-neutral-900 dark:text-neutral-200">12th: 94.5% · 10th: 98.4%</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-100 dark:border-neutral-800/60">
                <span className="text-neutral-500 dark:text-neutral-400">Target Role</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">Software Development Engineer (SDE) Intern</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-neutral-500 dark:text-neutral-400">Location</span>
                <span className="font-semibold text-neutral-900 dark:text-neutral-200">Bengaluru, Karnataka, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white dark:bg-neutral-900/30 border border-neutral-200 dark:border-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-all space-y-2.5 shadow-sm dark:shadow-none"
            >
              <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60 flex items-center justify-center">
                {pillar.icon}
              </div>
              <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">{pillar.title}</h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
