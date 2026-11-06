import { useState, useEffect } from 'react';
import { MessageSquare, Sparkles, X, Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FloatingHireMeProps {
  onHireClick: () => void;
}

export function FloatingHireMe({ onHireClick }: FloatingHireMeProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling down 250px so it doesn't block the hero
      setIsVisible(window.scrollY > 250);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Pill Button */}
      <div className="fixed bottom-6 right-6 z-40 animate-in fade-in slide-in-from-bottom-6 duration-300">
        <button
          onClick={() => setModalOpen(true)}
          aria-label="Hire Cynthia Okanda"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#10B981] hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-2xl shadow-emerald-950/60 transition-all duration-200 hover:scale-105 active:scale-95 border-2 border-emerald-300/30"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-slate-950" />
          </span>
          <span className="tracking-tight whitespace-nowrap">Hire Me</span>
          <Sparkles className="w-3.5 h-3.5 text-slate-950 group-hover:rotate-12 transition-transform" />
        </button>
      </div>

      {/* Quick Hire Consultation Modal */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="hire-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setModalOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200 text-left"
          >
            <button
              onClick={() => setModalOpen(false)}
              aria-label="Close modal"
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Avatar & Title */}
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-12 h-12 rounded-2xl overflow-hidden border border-emerald-500/40 shrink-0">
                <img
                  src={PORTFOLIO_DATA.personal.avatarImage}
                  alt={PORTFOLIO_DATA.personal.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for Immediate Start
                </span>
                <h3 id="hire-modal-title" className="text-xl font-bold text-white font-display">
                  Work with Cynthia Okanda
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              Looking to build high-concurrency systems, modernize your web platform, or add a senior software engineer to your team?
            </p>

            {/* Key Value Highlights */}
            <div className="space-y-2 mb-6">
              {[
                "Architecture consultation & sub-50ms system designs",
                "Full-stack React 19 + Node.js / Python production builds",
                "Flexible contract, freelance, or full-time engagements"
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-800">
              <a
                href="#contact"
                onClick={() => {
                  setModalOpen(false);
                  onHireClick();
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#10B981] hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open Contact Form</span>
              </a>

              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}?subject=Engineering%20Opportunity`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold transition-colors border border-slate-700"
              >
                <Mail className="w-4 h-4" />
                <span>Direct Email</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
