import {
  Globe,
  Palette,
  Server,
  Cloud,
  Compass,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const serviceIcons: Record<string, React.ElementType> = {
  Globe,
  Palette,
  Server,
  Cloud,
  Compass
};

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold mb-3">
            <span>OFFERINGS &amp; SOLUTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white dark:text-white">
            Comprehensive <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">Engineering Services</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base">
            From initial system architecture blueprints to complete full-stack web platforms and cloud automation.
          </p>
        </div>

        {/* 5 Services Bento / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.services.map((service, idx) => {
            const IconComp = serviceIcons[service.iconName] || Globe;
            const isFeatured = idx === 0 || idx === 1;

            return (
              <div
                key={service.id}
                className={`p-6 sm:p-8 rounded-3xl bg-slate-900/60 dark:bg-slate-900/70 border backdrop-blur-xl transition-all duration-300 hover:border-pink-500/40 hover:-translate-y-1.5 flex flex-col justify-between shadow-lg ${
                  isFeatured
                    ? 'border-purple-500/30 shadow-purple-950/20'
                    : 'border-slate-800'
                }`}
              >
                <div>
                  {/* Top Icon & Tag */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-600/20 border border-pink-500/30 flex items-center justify-center text-pink-400">
                      <IconComp className="w-6 h-6" />
                    </div>
                    {isFeatured && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/30">
                        <Sparkles className="w-3 h-3" />
                        High Demand
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-display">
                    {service.title}
                  </h3>
                  <p className="text-xs text-purple-400 font-mono mb-4">{service.tagline}</p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-800">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                      Key Deliverables
                    </span>
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                  <div className="text-[11px] text-slate-400 font-mono">
                    <span className="text-slate-400">Ideal for: </span>
                    <span className="text-slate-300">{service.idealFor.split(' ')[0]} {service.idealFor.split(' ')[1]}</span>
                  </div>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-pink-600 text-slate-200 hover:text-white text-xs font-bold transition-all shadow-sm group"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
