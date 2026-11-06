import { ArrowUp, Heart, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-950 via-[#1E0808] to-[#140404] border-t border-[#7F1D1D]/40 text-slate-300 pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative Maroon Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#7F1D1D]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#7F1D1D]/30">
          {/* Brand & Pitch */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#1E3A8A] via-[#7C3AED] to-[#EC4899] p-0.5">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <span className="font-extrabold text-sm tracking-wider text-pink-400 font-display">
                    CO
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-display">
                  {PORTFOLIO_DATA.personal.name}
                </h3>
                <span className="text-xs font-mono text-pink-400">
                  {PORTFOLIO_DATA.personal.role}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm mb-6 leading-relaxed">
              &ldquo;{PORTFOLIO_DATA.personal.tagline}&rdquo; Building high-throughput distributed architectures, microservices, and modern web platforms.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7F1D1D]/20 border border-[#7F1D1D]/40 text-xs text-rose-300 font-mono">
              <Terminal className="w-3.5 h-3.5 text-pink-400" />
              <span>Available for worldwide remote collaboration</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-4">
              Navigation Index
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-white transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Engineering Philosophy & Back To Top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-2 md:text-right">
                Architecture Standard
              </h4>
              <p className="text-xs text-slate-400 md:text-right max-w-xs leading-relaxed mb-4">
                Designed with zero-downtime tolerance, sub-50ms API response budgets, and WCAG AA accessibility standards.
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 hover:bg-[#7F1D1D]/40 border border-[#7F1D1D]/50 text-xs font-bold text-slate-200 hover:text-white transition-all shadow-md group"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-pink-400" />
            </button>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-500">Crafted with React, Tailwind CSS &amp; Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
