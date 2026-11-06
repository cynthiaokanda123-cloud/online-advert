import { useState } from 'react';
import {
  Code,
  FileCode,
  Atom,
  Server,
  Terminal,
  Box,
  Boxes,
  Cloud,
  Database,
  HardDrive,
  Zap,
  Share2,
  Network,
  GitBranch,
  Figma,
  Activity
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const iconLookup: Record<string, React.ElementType> = {
  Code,
  FileCode,
  Atom,
  Server,
  Terminal,
  Box,
  Boxes,
  Cloud,
  Database,
  HardDrive,
  Zap,
  Share2,
  Network,
  GitBranch,
  Figma,
  Activity
};

export function TechStackSection() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <section id="tech-stack" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold mb-3">
            <span>TOOLING &amp; ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white dark:text-white">
            Battle-tested technologies for <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">high-scale delivery</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base">
            Every library, database, and cloud primitive chosen intentionally for type-safety, resilience, and operational observability.
          </p>
        </div>

        {/* Interactive Grid of Tech with Hover Tilt & Glow */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {PORTFOLIO_DATA.techStack.map((tech) => {
            const IconComponent = iconLookup[tech.icon] || Code;
            const isHovered = hoveredTech === tech.name;

            return (
              <div
                key={tech.name}
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
                className={`relative p-5 sm:p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-900/70 border backdrop-blur-xl transition-all duration-300 cursor-default group flex flex-col items-center text-center ${
                  isHovered
                    ? 'border-pink-500/50 shadow-xl shadow-pink-950/30 -translate-y-1.5'
                    : 'border-slate-800 shadow-md hover:border-slate-700'
                }`}
              >
                {/* Glow backdrop on hover */}
                {isHovered && (
                  <div
                    className="absolute inset-0 rounded-2xl opacity-15 blur-lg pointer-events-none"
                    style={{ backgroundColor: tech.color }}
                  />
                )}

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${tech.color}15`,
                    color: tech.color,
                    border: `1px solid ${tech.color}35`
                  }}
                >
                  <IconComponent className="w-6 h-6" />
                </div>

                <h4 className="text-sm sm:text-base font-bold text-white mb-1 group-hover:text-pink-300 transition-colors">
                  {tech.name}
                </h4>
                <p className="text-[11px] font-mono text-slate-400 line-clamp-1">
                  {tech.role}
                </p>
              </div>
            );
          })}
        </div>

        {/* Infinite Scrolling Marquee Strip */}
        <div className="relative w-full overflow-hidden py-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md">
          {/* Gradient Edge Masks */}
          <div className="absolute left-0 inset-y-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex items-center gap-8 py-2">
            {[...PORTFOLIO_DATA.techStack, ...PORTFOLIO_DATA.techStack].map((item, idx) => {
              const IconComp = iconLookup[item.icon] || Code;
              return (
                <div
                  key={`${item.name}-${idx}`}
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-800/40 border border-slate-700/50 text-slate-300 hover:text-white hover:border-pink-500/50 transition-colors whitespace-nowrap shrink-0 group"
                >
                  <IconComp className="w-4 h-4 text-pink-400 group-hover:rotate-12 transition-transform" />
                  <span className="font-semibold text-xs sm:text-sm">{item.name}</span>
                  <span className="text-[10px] text-slate-400 font-mono">· {item.role}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
