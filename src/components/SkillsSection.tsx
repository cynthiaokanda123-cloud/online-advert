import { useState, useEffect, useRef } from 'react';
import {
  Server,
  Code2,
  Cloud,
  Cpu,
  Layers,
  Database,
  Terminal,
  Zap,
  FileCode,
  Palette,
  Sparkles,
  Container,
  Boxes,
  GitBranch,
  Activity,
  Radio,
  GitPullRequest,
  Gauge
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

// Icon map for skills
const iconMap: Record<string, React.ElementType> = {
  Server,
  Code2,
  Cloud,
  Cpu,
  Layers,
  Database,
  Terminal,
  Zap,
  FileCode,
  Palette,
  Sparkles,
  Container,
  Boxes,
  GitBranch,
  Activity,
  Radio,
  GitPullRequest,
  Gauge
};

export function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold mb-3">
            <span>ENGINEERING COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white dark:text-white">
            Specialized technical proficiency across the <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">modern stack</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base">
            From distributed backends and database internals to accessible, 60fps frontend experiences and cloud-native orchestration.
          </p>
        </div>

        {/* 4 Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.skills.map((categoryGroup, groupIdx) => {
            const isHovered = activeCategoryIndex === groupIdx;

            return (
              <div
                key={categoryGroup.category}
                onMouseEnter={() => setActiveCategoryIndex(groupIdx)}
                onMouseLeave={() => setActiveCategoryIndex(null)}
                className={`p-6 sm:p-8 rounded-3xl bg-slate-900/60 dark:bg-slate-900/70 border transition-all duration-300 backdrop-blur-xl flex flex-col justify-between ${
                  isHovered
                    ? 'border-pink-500/40 shadow-2xl shadow-pink-950/20 scale-[1.01]'
                    : 'border-slate-800 shadow-lg'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                      {categoryGroup.category}
                    </h3>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-800 text-slate-300">
                      {categoryGroup.skills.length} skills
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 mb-8 leading-relaxed">
                    {categoryGroup.description}
                  </p>

                  {/* Skills Progress Bars */}
                  <div className="space-y-6">
                    {categoryGroup.skills.map((skill) => {
                      const IconComponent = iconMap[skill.iconName] || Cpu;

                      return (
                        <div key={skill.name} className="group/item">
                          <div className="flex items-center justify-between text-xs sm:text-sm mb-1.5">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-lg bg-slate-800 flex items-center justify-center text-pink-400 group-hover/item:text-purple-300 transition-colors">
                                <IconComponent className="w-3.5 h-3.5" />
                              </div>
                              <span className="font-semibold text-slate-200 group-hover/item:text-white transition-colors">
                                {skill.name}
                              </span>
                            </div>
                            <span className="font-mono text-xs text-slate-400 tabular-nums">
                              {skill.level}%
                            </span>
                          </div>

                          {/* Secondary focus annotation */}
                          <div className="text-[11px] text-slate-400 ml-8 mb-2 font-mono">
                            {skill.focus}
                          </div>

                          {/* Animated Progress Bar */}
                          <div className="w-full h-2 rounded-full bg-slate-800/80 overflow-hidden">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-[#1E3A8A] via-[#7C3AED] to-[#10B981] transition-all duration-1000 ease-out"
                              style={{
                                width: inView ? `${skill.level}%` : '0%',
                                transitionDelay: `${groupIdx * 150}ms`
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>Benchmarked for production</span>
                  <span className="text-emerald-400 font-medium">Enterprise Grade</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
