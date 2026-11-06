import { useState } from 'react';
import { ExternalLink, Github, ArrowRight, CheckCircle2, Layers } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Distributed Systems', 'Full-Stack', 'UI/UX Design'];

  const filteredProjects =
    activeCategory === 'All'
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
              <span>FEATURED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white dark:text-white">
              Selected <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">Production Systems</span> &amp; Platforms
            </h2>
            <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
              Real-world architectures handling high concurrency, zero-data-loss transactions, and refined UI/UX.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md shadow-pink-900/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl bg-slate-900/60 dark:bg-slate-900/70 border border-slate-800/90 overflow-hidden backdrop-blur-xl shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-pink-500/50 hover:shadow-2xl hover:shadow-purple-950/30 flex flex-col justify-between"
            >
              {/* Thumbnail Area */}
              <div
                onClick={() => setSelectedProject(project)}
                className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-950 cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Category Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 border border-white/10 text-xs font-mono font-medium text-pink-300 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Click to inspect badge */}
                <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10B981] text-slate-950 text-xs font-bold shadow-lg">
                    <span>Inspect Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors cursor-pointer font-display"
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs text-pink-400 font-mono mb-3">{project.subtitle}</p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Metrics Badges */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {project.metrics.slice(0, 2).map((metric, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-2 rounded-xl bg-slate-800/40 border border-slate-800 text-[11px] text-emerald-300 font-mono"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{metric}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-slate-800/60 text-[11px] font-mono text-slate-300 border border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-bold text-pink-400 hover:text-pink-300 inline-flex items-center gap-1 transition-colors"
                  >
                    <span>System Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                      className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-600/20 hover:bg-purple-600/40 border border-purple-500/30 text-purple-300 hover:text-white text-xs font-semibold transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advert Pitch Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#1E3A8A]/40 via-[#7C3AED]/40 to-[#EC4899]/30 border border-purple-500/30 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-display">
              Have a high-throughput platform or web vision to build?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              I partner with founders, engineering teams, and enterprises to architect resilient backends and intuitive digital platforms.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3.5 rounded-2xl bg-[#10B981] hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-950/40 transition-all shrink-0 active:scale-95 whitespace-nowrap"
          >
            Start Your Project
          </a>
        </div>
      </div>

      {/* Modal Dialog */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
