import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, ChevronRight, Play, Info, CheckCircle2, Layers } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

interface ProjectsProps {
  onLaunchDemo: (demoType: 'biolytix' | 'quantum' | 'hostel') => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onLaunchDemo }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'ai-cv' | 'fullstack' | 'simulation' | 'data-dsa'>('all');
  const [selectedArchitectureProject, setSelectedArchitectureProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai-cv', label: 'AI & Computer Vision' },
    { id: 'fullstack', label: 'Full-Stack Systems' },
    { id: 'simulation', label: 'Simulations & Physics' },
    { id: 'data-dsa', label: 'Data & Algorithms' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 border-t border-neutral-200 dark:border-neutral-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold mb-2">
              Featured Work
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
              Projects & Engineering Systems
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              From deterministic biological rule engines to computer vision proctoring and interactive physics simulations.
            </p>
          </div>

          {/* Interactive Filter Tabs (functional buttons) */}
          <div className="flex items-center gap-1 p-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-x-auto shrink-0 max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-white dark:bg-neutral-800 text-neutral-950 dark:text-neutral-100 shadow-sm border border-neutral-200 dark:border-neutral-700/80'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-200 hover:bg-neutral-200/60 dark:hover:bg-neutral-800/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-2xl bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800/90 hover:border-neutral-300 dark:hover:border-neutral-700/80 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-black/40"
            >
              {/* Media Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800/80">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

                {/* Quiet Metadata Banner */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs text-neutral-300">
                  <span className="px-2.5 py-1 rounded-md bg-neutral-950/80 backdrop-blur-sm border border-neutral-800 font-mono text-[11px] text-emerald-400">
                    {project.categoryLabel}
                  </span>
                  
                  {project.hasInteractiveDemo && (
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/40 text-[11px] font-semibold text-emerald-300">
                      <Sparkles className="w-3 h-3" /> Live Simulator
                    </span>
                  )}
                </div>

                {/* Bottom title overlay */}
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-300 line-clamp-1">{project.subtitle}</p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                {/* Tech Stack Metadata without pills */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                  {project.technologies.map((tech, tIdx) => (
                    <React.Fragment key={tech}>
                      <span className="text-neutral-700 dark:text-neutral-300 font-medium">{tech}</span>
                      {tIdx < project.technologies.length - 1 && (
                        <span className="text-neutral-400 dark:text-neutral-600" aria-hidden="true">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Project Description */}
                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Bullet Highlights from Resume */}
                <ul className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-400">
                  {project.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-emerald-500 dark:bg-emerald-400 shrink-0 mt-1.5" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Card Actions */}
                <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800/80 flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    {project.hasInteractiveDemo && project.demoType && (
                      <button
                        onClick={() => onLaunchDemo(project.demoType!)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-neutral-950 font-semibold transition-colors cursor-pointer shadow-sm"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Run Simulation</span>
                      </button>
                    )}

                    {project.architecture && (
                      <button
                        onClick={() => setSelectedArchitectureProject(project)}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-transparent transition-colors cursor-pointer"
                      >
                        <Layers className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
                        <span>Architecture</span>
                      </button>
                    )}
                  </div>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture Deep-Dive Drawer / Modal */}
      {selectedArchitectureProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-2xl bg-neutral-900 border border-neutral-700 rounded-2xl p-6 space-y-5 animate-in fade-in zoom-in-95 text-neutral-100">
            <div className="flex justify-between items-center border-b border-neutral-800 pb-3">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Architecture Blueprint</span>
                <h3 className="text-lg font-bold text-white">{selectedArchitectureProject.title}</h3>
              </div>
              <button
                onClick={() => setSelectedArchitectureProject(null)}
                className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs text-neutral-300">
              <div>
                <h4 className="font-semibold text-neutral-200 mb-1">System Overview</h4>
                <p className="leading-relaxed text-neutral-400">{selectedArchitectureProject.architecture?.overview}</p>
              </div>

              <div>
                <h4 className="font-semibold text-neutral-200 mb-2">Key Engineering Modules</h4>
                <div className="space-y-2">
                  {selectedArchitectureProject.architecture?.keyModules.map((mod, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-800">
                      <div className="font-semibold text-emerald-400 mb-0.5">{mod.name}</div>
                      <div className="text-neutral-400">{mod.detail}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                <span className="font-bold block mb-0.5">Practical Impact:</span>
                {selectedArchitectureProject.architecture?.impact}
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedArchitectureProject(null)}
                className="px-4 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs transition-colors"
              >
                Close Blueprint
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
