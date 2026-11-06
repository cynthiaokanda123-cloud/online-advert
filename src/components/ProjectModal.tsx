import { X, ExternalLink, Github, CheckCircle2, Cpu, ArrowUpRight } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-950/70 text-slate-300 hover:text-white hover:bg-slate-900 transition-colors border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Thumbnail Hero with Scrim */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-950">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

          {/* Badges Overlay */}
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30 backdrop-blur-md">
                {project.category}
              </span>
              <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-white mt-2 font-display">
                {project.title}
              </h2>
            </div>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {project.description}
          </p>

          {/* Architecture Details Box */}
          <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
            <div className="flex items-center gap-2 mb-2 text-pink-400">
              <Cpu className="w-4 h-4" />
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider">
                System Architecture &amp; Implementation
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.architectureDetails}
            </p>
          </div>

          {/* Key Metrics Achieved */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold mb-3 tracking-wider">
              Benchmarked Results &amp; Metrics
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-800/40 border border-slate-800 flex items-center gap-2 text-xs text-emerald-300 font-semibold"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{metric}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold mb-3 tracking-wider">
              Technologies &amp; Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-slate-800 text-xs font-mono text-slate-300 border border-slate-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-xs sm:text-sm font-bold shadow-lg transition-all"
              >
                <span>Launch Live Demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold transition-colors border border-slate-700"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="text-xs text-slate-400 hover:text-white transition-colors"
            >
              Close Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
