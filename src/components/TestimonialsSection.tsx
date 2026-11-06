import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function TestimonialsSection() {
  const testimonials = PORTFOLIO_DATA.testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 6 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold mb-3">
            <span>CLIENT &amp; PEER ENDORSEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white dark:text-white">
            Trusted by founders &amp; <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">engineering teams</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative p-8 sm:p-12 md:p-14 rounded-3xl bg-slate-900/60 dark:bg-slate-900/70 border border-slate-800 backdrop-blur-xl shadow-2xl"
        >
          {/* Subtle Quote Watermark */}
          <Quote className="absolute top-6 right-8 w-20 h-20 text-white/5 pointer-events-none" />

          {/* Star Rating */}
          <div className="flex items-center gap-1 mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-xs font-mono text-slate-400 ml-2">5.0 Verified Recommendation</span>
          </div>

          {/* Quote Body */}
          <blockquote className="text-base sm:text-xl lg:text-2xl text-slate-200 font-medium leading-relaxed mb-8 font-sans">
            &ldquo;{current.quote}&rdquo;
          </blockquote>

          {/* Client Attribution & Navigation Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-slate-800">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center font-bold text-white font-display text-sm shadow-md">
                {current.avatar}
              </div>
              <div>
                <h4 className="text-base font-bold text-white">{current.clientName}</h4>
                <p className="text-xs text-pink-400 font-mono">
                  {current.role} · <span className="text-slate-300">{current.company}</span>
                </p>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 mr-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? 'w-6 bg-pink-500' : 'w-2 bg-slate-700'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
