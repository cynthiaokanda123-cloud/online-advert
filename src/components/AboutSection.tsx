import { useState, useEffect, useRef } from 'react';
import { Award, Layers, Zap, Download, ExternalLink, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

// Hook to animate numbers smoothly when scrolled into view
function useCounter(targetValue: number, isVisible: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 1600; // ms
    const stepTime = 30;
    const totalSteps = duration / stepTime;
    const increment = targetValue / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [targetValue, isVisible]);

  return count;
}

export function AboutSection({ onHireClick }: { onHireClick: () => void }) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const yearsCount = useCounter(PORTFOLIO_DATA.personal.stats[0].value, inView);
  const projectsCount = useCounter(PORTFOLIO_DATA.personal.stats[1].value, inView);
  const techCount = useCounter(PORTFOLIO_DATA.personal.stats[2].value, inView);
  const clientsCount = useCounter(PORTFOLIO_DATA.personal.stats[3].value, inView);

  const animatedValues = [yearsCount, projectsCount, techCount, clientsCount];

  const highlights = [
    {
      title: "Distributed Architecture",
      desc: "Designing decoupled, asynchronous microservices resilient against failure.",
      icon: Layers,
      color: "text-purple-400"
    },
    {
      title: "Sub-Second Performance",
      desc: "Optimizing database queries, caching layers, and bundle footprints for instant interaction.",
      icon: Zap,
      color: "text-pink-400"
    },
    {
      title: "UI/UX Craftsmanship",
      desc: "Bridging architectural rigor with human-centered, responsive design systems.",
      icon: Award,
      color: "text-emerald-400"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-3">
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white dark:text-white">
            Engineering resilient systems with <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">design precision</span>
          </h2>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Bio & Core Mission */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-slate-900/60 dark:bg-slate-900/70 border border-slate-800 backdrop-blur-xl shadow-xl">
            <div>
              {/* Pulsing Availability Badge */}
              <div className="flex items-center justify-between flex-wrap gap-4 mb-6 pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500" />
                  </span>
                  <div>
                    <span className="text-sm font-bold text-white block">Status: Available for Work</span>
                    <span className="text-xs text-slate-400 font-mono">Accepting new engineering opportunities</span>
                  </div>
                </div>

                <button
                  onClick={onHireClick}
                  className="px-4 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold transition-colors"
                >
                  Hire Cynthia
                </button>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
                {PORTFOLIO_DATA.personal.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Bullet highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-800/80">
                {highlights.map((item) => (
                  <div key={item.title} className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <item.icon className={`w-4 h-4 ${item.color}`} />
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-pink-500/20 active:scale-95"
              >
                <span>Discuss a Platform</span>
                <CheckCircle2 className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-medium transition-colors"
              >
                <span>View GitHub Repos</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Animated Stats & Metrics */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6">
            {PORTFOLIO_DATA.personal.stats.map((stat, idx) => (
              <div
                key={stat.label}
                className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 dark:bg-slate-900/70 border border-slate-800 backdrop-blur-xl flex flex-col justify-center items-center text-center shadow-lg group hover:border-pink-500/30 transition-all duration-300"
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-pink-400 via-purple-300 to-blue-400 mb-2 font-display tabular-nums">
                  {animatedValues[idx]}
                  {stat.suffix}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-300 uppercase tracking-wider font-mono">
                  {stat.label}
                </div>
                <div className="w-8 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mt-3 opacity-40 group-hover:w-16 transition-all duration-300" />
              </div>
            ))}

            {/* Quick Pitch Callout across full bottom span */}
            <div className="col-span-2 p-6 rounded-3xl bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-pink-900/20 border border-purple-500/20 backdrop-blur-xl flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-purple-300" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Full-Cycle Delivery</h4>
                  <p className="text-xs text-slate-400">From initial system design blueprint to production monitoring.</p>
                </div>
              </div>
              <a
                href="#projects"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-pink-400 hover:text-pink-300 whitespace-nowrap"
              >
                See Proof
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
