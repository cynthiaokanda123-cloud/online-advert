import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsDone(true);
      onComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            onComplete();
          }, 300);
          return 100;
        }
        const increment = Math.floor(Math.random() * 15) + 12;
        return Math.min(prev + increment, 100);
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white"
        >
          {/* Animated Background Mesh */}
          <div className="absolute inset-0 bg-radial from-blue-900/30 via-purple-900/20 to-slate-950 pointer-events-none" />

          <div className="relative flex flex-col items-center z-10">
            {/* Logo initials container with rotating gradient border */}
            <div className="relative w-24 h-24 flex items-center justify-center mb-8">
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#1E3A8A] via-[#7C3AED] to-[#EC4899] animate-spin opacity-80 blur-xs"
                style={{ animationDuration: '3s' }}
              />
              <div className="relative w-22 h-22 rounded-2xl bg-slate-950 flex items-center justify-center border border-white/10 shadow-2xl">
                <span className="text-3xl font-extrabold tracking-wider bg-gradient-to-r from-pink-400 via-purple-300 to-blue-400 bg-clip-text text-transparent font-display">
                  CO
                </span>
              </div>
            </div>

            <h2 className="text-xl font-bold tracking-tight text-white mb-2">
              Cynthia Okanda
            </h2>
            <p className="text-xs tracking-widest uppercase text-slate-400 mb-6 font-mono">
              Engineering Scalable Systems
            </p>

            {/* Progress bar */}
            <div className="w-56 h-1.5 bg-slate-800 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-[#1E3A8A] via-[#7C3AED] to-[#10B981]"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <span className="text-xs font-mono text-slate-400 mt-2 tabular-nums">
              {progress}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
