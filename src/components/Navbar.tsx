import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Sparkles, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onHireMeClick: () => void;
}

export function Navbar({ isDark, onToggleTheme, onHireMeClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 20);
      setScrollProgress(totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Promotional Advert Banner */}
      {showBanner && (
        <aside
          aria-label="Promotional Announcement"
          className="relative bg-gradient-to-r from-[#1E3A8A] via-[#7C3AED] to-[#EC4899] text-white px-4 py-2 text-xs md:text-sm shadow-md flex items-center justify-between"
        >
          <div className="mx-auto flex items-center gap-2 md:gap-3 flex-wrap justify-center font-medium">
            <span className="flex items-center gap-1.5 bg-black/20 px-2 py-0.5 rounded-full text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-spin" style={{ animationDuration: '6s' }} />
              Platform Special
            </span>
            <span>{PORTFOLIO_DATA.promotionalBanner.headline}</span>
            <span className="hidden sm:inline opacity-80">— {PORTFOLIO_DATA.promotionalBanner.subline}</span>
            <a
              href="#contact"
              className="inline-flex items-center gap-1 bg-[#10B981] hover:bg-emerald-400 text-slate-950 font-bold px-3 py-0.5 rounded-full text-xs transition-colors shadow-sm whitespace-nowrap"
            >
              {PORTFOLIO_DATA.promotionalBanner.ctaText}
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
          <button
            onClick={() => setShowBanner(false)}
            aria-label="Close promotional banner"
            className="text-white/80 hover:text-white p-1 ml-2 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </aside>
      )}

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 border-b ${
          isScrolled
            ? 'glass-panel bg-slate-950/85 dark:bg-slate-950/90 shadow-lg border-slate-800/80 backdrop-blur-md'
            : 'bg-slate-950/60 dark:bg-slate-950/70 border-white/5 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
          {/* Brand Wordmark (Zone 1) */}
          <a
            href="#"
            className="flex items-center gap-2.5 group whitespace-nowrap shrink-0"
            aria-label="Cynthia Okanda Homepage"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#1E3A8A] via-[#7C3AED] to-[#EC4899] p-0.5 transition-transform group-hover:scale-105 duration-200">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-sm tracking-wider text-pink-400 font-display">
                  CO
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-white dark:text-white group-hover:text-pink-400 transition-colors">
                {PORTFOLIO_DATA.personal.name}
              </span>
              <span className="text-[10px] font-mono text-slate-400 tracking-wider hidden sm:block">
                SYSTEMS &amp; WEB ARCHITECT
              </span>
            </div>
          </a>

          {/* Navigation Links (Zone 2) */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-white transition-colors relative py-1 group whitespace-nowrap"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Action Area (Zone 3) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors border border-white/10"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-purple-300" />}
            </button>

            {/* Green "Hire Me" Primary CTA */}
            <button
              onClick={onHireMeClick}
              className="hidden sm:inline-flex items-center gap-2 bg-[#10B981] hover:bg-emerald-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs md:text-sm transition-all shadow-md hover:shadow-emerald-500/25 active:scale-95 whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping" />
              Hire Me
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors border border-white/10"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pt-2 pb-6 border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">Available for projects</span>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onHireMeClick();
                  }}
                  className="bg-[#10B981] text-slate-950 font-bold px-4 py-2 rounded-lg text-xs"
                >
                  Hire Me Now
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Scroll Progress Bar at the bottom of Navbar */}
        <div className="w-full h-[3px] bg-transparent overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#EC4899] via-[#7C3AED] to-[#10B981] transition-all duration-75"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </nav>
    </header>
  );
}
