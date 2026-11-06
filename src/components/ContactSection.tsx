import { useState, useEffect } from 'react';
import {
  Mail,
  Send,
  Github,
  Linkedin,
  Twitter,
  Copy,
  Check,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactSectionProps {
  initialService?: string;
}

export function ContactSection({ initialService }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(initialService || 'Scalable Backend & API Design');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Please provide your name';
    if (!email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please provide a valid email format';
    }
    if (!message.trim()) {
      errs.message = 'Please share a brief description of your project or requirements';
    } else if (message.trim().length < 15) {
      errs.message = 'Please provide a bit more detail (minimum 15 characters)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white dark:text-white">
            Let&apos;s build your <span className="bg-gradient-to-r from-emerald-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">next platform</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base">
            Have a project in mind, an architectural question, or an open engineering role? Reach out directly — I typically reply within 12 hours.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info, Socials, Copy Email */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-slate-900/60 dark:bg-slate-900/70 border border-slate-800 backdrop-blur-xl shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2 font-display">
                Contact &amp; Availability
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Open to full-time engineering positions, contract system architecture, and modern web platform builds.
              </p>

              {/* Direct Email with 1-Click Copy */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/15 border border-pink-500/30 flex items-center justify-center text-pink-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] text-slate-400 font-mono block">PRIMARY EMAIL</span>
                    <a
                      href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                      className="text-xs sm:text-sm font-bold text-white hover:text-pink-400 transition-colors truncate block"
                    >
                      {PORTFOLIO_DATA.personal.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors shrink-0"
                  title="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Timezone and Location Metadata */}
              <div className="space-y-3 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-pink-400 shrink-0" />
                  <span>Nairobi, Kenya (UTC+3) · Worldwide Remote Friendly</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Response time: &lt; 12 hours (Weekdays &amp; Weekends)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>NDA protected consultations available upon request</span>
                </div>
              </div>

              {/* Social Channels with Hover Effects */}
              <div className="pt-6 mt-6 border-t border-slate-800">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-3 font-semibold">
                  Engineering Profiles &amp; Socials
                </span>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href={PORTFOLIO_DATA.personal.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold transition-all border border-slate-700/60 group"
                  >
                    <Github className="w-4 h-4 group-hover:text-pink-400 transition-colors" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={PORTFOLIO_DATA.personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold transition-all border border-slate-700/60 group"
                  >
                    <Linkedin className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={PORTFOLIO_DATA.personal.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold transition-all border border-slate-700/60 group"
                  >
                    <Twitter className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
                    <span>X (Twitter)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 dark:bg-slate-900/70 border border-slate-800 backdrop-blur-xl shadow-xl">
              {isSubmitted ? (
                /* Success Animation State */
                <div className="py-12 flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 mb-6 shadow-xl shadow-emerald-950/50">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-display">
                    Message Dispatched Successfully!
                  </h3>
                  <p className="text-slate-300 max-w-md text-sm mb-6 leading-relaxed">
                    Thank you for reaching out, <span className="font-semibold text-white">{name}</span>. I have received your request regarding <span className="text-pink-400 font-semibold">{service}</span> and will respond to <span className="text-white font-semibold">{email}</span> shortly.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                /* Active Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2 font-semibold">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-white placeholder-slate-500 text-sm focus:outline-none transition-colors ${
                          errors.name
                            ? 'border-rose-500 focus:border-rose-400'
                            : 'border-slate-800 focus:border-pink-500'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-rose-400 text-xs mt-1.5">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2 font-semibold">
                        Work / Personal Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="alex@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-white placeholder-slate-500 text-sm focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-rose-500 focus:border-rose-400'
                            : 'border-slate-800 focus:border-pink-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-rose-400 text-xs mt-1.5">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Service Category Selection */}
                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2 font-semibold">
                      Primary Area of Interest
                    </label>
                    <select
                      id="contact-service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:outline-none focus:border-pink-500 transition-colors"
                    >
                      <option value="Scalable Backend & API Design">Scalable Backend &amp; API Design</option>
                      <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                      <option value="Web Design & UI/UX Systems">Web Design &amp; UI/UX Systems</option>
                      <option value="Cloud Architecture & DevOps">Cloud Architecture &amp; DevOps</option>
                      <option value="Technical Consulting & Audits">Technical Consulting &amp; Audits</option>
                      <option value="Full-time Software Engineering Role">Full-time Software Engineering Role</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2 font-semibold">
                      Project Details or Inquiry *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Tell me about your system requirements, target launch timeline, or the engineering challenge you are tackling..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-white placeholder-slate-500 text-sm focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? 'border-rose-500 focus:border-rose-400'
                          : 'border-slate-800 focus:border-pink-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-rose-400 text-xs mt-1.5">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#10B981] via-emerald-500 to-[#10B981] hover:brightness-110 text-slate-950 font-extrabold text-sm shadow-xl shadow-emerald-950/50 transition-all duration-200 active:scale-98 disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        <span>Dispatching Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Engineering Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
