import { useState } from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function ExperienceEducation() {
  const [filter, setFilter] = useState<'all' | 'experience' | 'education'>('all');

  const items = PORTFOLIO_DATA.experienceAndEducation.filter((item) => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-3">
              <span>TRACK RECORD &amp; BACKGROUND</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white dark:text-white">
              Experience &amp; <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Education</span>
            </h2>
            <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
              A proven track record of engineering leadership, high-concurrency systems, and continuous academic excellence.
            </p>
          </div>

          {/* Filter Segmented Control */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shrink-0">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                filter === 'all'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-900/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Milestones
            </button>
            <button
              onClick={() => setFilter('experience')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                filter === 'experience'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-900/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Engineering Roles
            </button>
            <button
              onClick={() => setFilter('education')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                filter === 'education'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-900/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Academic
            </button>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800/80 space-y-12">
          {items.map((item) => {
            const isExp = item.type === 'experience';

            return (
              <div key={item.id} className="relative group">
                {/* Timeline Node Icon Indicator */}
                <div
                  className={`absolute -left-[35px] sm:-left-[43px] top-1.5 w-10 h-10 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 shadow-lg ${
                    isExp
                      ? 'bg-slate-950 border-purple-500/50 text-purple-400 shadow-purple-950/40'
                      : 'bg-slate-950 border-pink-500/50 text-pink-400 shadow-pink-950/40'
                  }`}
                >
                  {isExp ? <Briefcase className="w-5 h-5" /> : <GraduationCap className="w-5 h-5" />}
                </div>

                {/* Timeline Card */}
                <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 dark:bg-slate-900/70 border border-slate-800/80 backdrop-blur-xl group-hover:border-purple-500/30 shadow-xl transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 inline-block mb-1">
                        {item.type === 'experience' ? 'Full-time Leadership' : 'Degree & Honours'}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                        {item.role}
                      </h3>
                      <h4 className="text-sm font-semibold text-pink-400 mt-0.5">
                        {item.organization}
                      </h4>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400">
                      <span className="inline-flex items-center gap-1.5 text-purple-300 font-semibold">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-slate-400 mt-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mt-4 pt-4 border-t border-slate-800">
                    {item.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies tags if available */}
                  {item.technologies && (
                    <div className="flex flex-wrap gap-1.5 mt-5 pt-3 border-t border-slate-800/70">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md bg-slate-800/50 text-[11px] font-mono text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
