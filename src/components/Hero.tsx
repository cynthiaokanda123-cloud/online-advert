import { useState, useEffect } from 'react';
import { ArrowRight, MessageSquare, Terminal, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { NetworkBackground } from './NetworkBackground';

interface HeroProps {
  isDark: boolean;
  onTalkClick: () => void;
}

export function Hero({ isDark, onTalkClick }: HeroProps) {
  // Typewriter effect state
  const roles = PORTFOLIO_DATA.personal.typewriterRoles;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 85;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentRole.length) {
          // Pause at end
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting backward
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  const orbitingTech = [
    { label: 'React 19', color: 'from-cyan-500 to-blue-500', pos: 'top-0 left-1/2 -translate-x-1/2 -translate-y-4' },
    { label: 'Distributed Systems', color: 'from-purple-500 to-indigo-600', pos: 'top-1/4 -right-6' },
    { label: 'Node.js & Redis', color: 'from-emerald-500 to-teal-600', pos: 'bottom-1/4 -right-4' },
    { label: 'Cloud & Docker', color: 'from-blue-600 to-cyan-600', pos: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-4' },
    { label: 'TypeScript', color: 'from-pink-500 to-rose-600', pos: 'top-1/3 -left-6' }
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-12 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Animated Gradient Mesh Background */}
      <div
        className="absolute inset-0 opacity-40 dark:opacity-30 pointer-events-none animate-gradient-mesh"
        style={{
          backgroundImage:
            'radial-gradient(at 20% 20%, #1e3a8a 0px, transparent 50%), radial-gradient(at 80% 20%, #7c3aed 0px, transparent 50%), radial-gradient(at 50% 80%, #ec4899 0px, transparent 50%), radial-gradient(at 80% 80%, #7f1d1d 0px, transparent 50%)'
        }}
      />

      {/* Interactive distributed systems node canvas */}
      <NetworkBackground isDark={isDark} />

      {/* Floating Translucent Shapes */}
      <div
        className="absolute top-20 left-12 w-64 h-64 rounded-full bg-blue-600/15 blur-3xl pointer-events-none animate-pulse"
        style={{ animationDuration: '8s' }}
      />
      <div
        className="absolute bottom-16 right-16 w-80 h-80 rounded-full bg-pink-600/15 blur-3xl pointer-events-none animate-pulse"
        style={{ animationDuration: '10s' }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full bg-purple-600/15 blur-3xl pointer-events-none animate-pulse"
        style={{ animationDuration: '9s' }}
      />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Headline & Bio & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-6 shadow-xs backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span>Available for Hire · Full-time &amp; Contracts</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white dark:text-white leading-[1.1] mb-4 text-balance">
            Hi, I&apos;m <span className="bg-gradient-to-r from-pink-400 via-purple-300 to-blue-400 bg-clip-text text-transparent">{PORTFOLIO_DATA.personal.name}</span>
          </h1>

          {/* Typewriter Dynamic Title */}
          <div className="h-14 sm:h-16 flex items-center mb-6">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-200 font-display">
              I build as a{' '}
              <span className="text-pink-400 underline decoration-purple-500 decoration-wavy decoration-2">
                {displayedText}
              </span>
              <span className="inline-block w-1 h-8 sm:h-10 ml-1 bg-pink-400 animate-pulse align-middle" />
            </span>
          </div>

          {/* Tagline & Pitch */}
          <p className="text-lg sm:text-xl text-slate-300 dark:text-slate-300 font-medium mb-4 max-w-2xl leading-relaxed">
            &ldquo;{PORTFOLIO_DATA.personal.tagline}&rdquo;
          </p>

          <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed">
            Specializing in high-concurrency backend microservices, resilient distributed architecture, and responsive modern web platforms designed for speed, scale, and conversion.
          </p>

          {/* Location & Trust Markers */}
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 mb-8">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-pink-400" />
              {PORTFOLIO_DATA.personal.location}
            </span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Sub-50ms Microservices SLA
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#7C3AED] to-[#EC4899] hover:from-purple-600 hover:to-pink-600 text-white font-bold text-sm shadow-lg shadow-purple-900/30 hover:shadow-pink-500/25 transition-all duration-200 active:scale-95"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onTalkClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#10B981] hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-900/30 hover:shadow-emerald-500/25 transition-all duration-200 active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Let&apos;s Talk</span>
            </button>
          </div>
        </div>

        {/* Right Column: Profile Image in Rotating Gradient Ring with Orbiting Badges */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-8">
          {/* Main Visual Circle Assembly */}
          <div className="relative w-72 h-72 sm:w-84 sm:h-84 md:w-96 md:h-96 flex items-center justify-center">
            {/* Outer Rotating Gradient Ring */}
            <div
              className="absolute -inset-3 rounded-full bg-gradient-to-tr from-[#1E3A8A] via-[#EC4899] to-[#7C3AED] animate-spin opacity-85 blur-sm"
              style={{ animationDuration: '14s' }}
            />

            {/* Middle decorative border ring */}
            <div
              className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#EC4899] via-[#7C3AED] to-[#10B981] opacity-70 animate-spin"
              style={{ animationDuration: '22s', animationDirection: 'reverse' }}
            />

            {/* Glass Container */}
            <div className="relative w-full h-full rounded-full p-2 bg-slate-950/80 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden group">
              <img
                src={PORTFOLIO_DATA.personal.avatarImage}
                alt={PORTFOLIO_DATA.personal.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top rounded-full transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />

              {/* Subtle inner dark scrim at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 inset-x-0 text-center pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 text-pink-300 text-xs font-medium border border-pink-500/30 backdrop-blur-md">
                  <Terminal className="w-3.5 h-3.5" />
                  Systems Architect
                </span>
              </div>
            </div>

            {/* Orbiting Tech Nodes */}
            {orbitingTech.map((tech, idx) => (
              <div
                key={tech.label}
                className={`absolute ${tech.pos} hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 text-white text-xs font-semibold border border-white/15 shadow-xl backdrop-blur-md animate-float z-20`}
                style={{ animationDelay: `${idx * 0.8}s` }}
              >
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tech.color}`} />
                <span>{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
