import { motion } from 'framer-motion'
import { ArrowRight, Check, MessageCircle, TrendingUp, Star, Zap, Move3D } from 'lucide-react'
import { scrollToSection } from '../utils/scrollTo'

const floatingStats = [
  { icon: MessageCircle, label: '500K+ Messages', color: 'text-green-400', bg: 'bg-green-400/10' },
  { icon: TrendingUp, label: '98% Satisfaction', color: 'text-blue-400', bg: 'bg-blue-400/10' },
  { icon: Star, label: '100+ Businesses', color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
]

const heroFeatures = [
  'Official WhatsApp Business API',
  'AI-Powered Chatbots',
  'Google Review Automation',
  'Meta Ads Management',
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-purple/30 text-sm font-medium text-brand-purple-light">
                <Zap size={14} className="text-brand-purple" />
                AI-Powered Business Growth Platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                Grow Your Business with{' '}
                <span className="gradient-text">WhatsApp Automation</span>{' '}
                &{' '}
                <span className="gradient-text">Digital Marketing</span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/60 leading-relaxed max-w-xl"
            >
              Automate customer conversations, generate more leads, improve your Google
              rankings, and scale your business with AI-powered marketing solutions.
            </motion.p>

            {/* Features list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              {heroFeatures.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-white/70">
                  <Check size={14} className="text-brand-blue flex-shrink-0" />
                  {f}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection('#contact') }}
                className="group flex items-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-brand-purple to-brand-blue text-white font-bold text-base hover:opacity-90 transition-all hover:scale-105 shadow-glow-purple"
              >
                Book Free Demo
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              {floatingStats.map(({ icon: Icon, label, color, bg }) => (
                <div key={label} className={`flex items-center gap-2 px-3 py-2 rounded-xl ${bg} border border-white/5`}>
                  <Icon size={14} className={color} />
                  <span className="text-sm text-white/70 font-medium">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: reserved space — the global 3D scene renders the glass phone here */}
          <div className="relative hidden lg:block h-[600px]" aria-hidden="true" />
        </div>

        {/* Scroll / interaction hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full glass px-4 py-2 text-xs text-white/60"
        >
          <Move3D size={14} className="text-brand-purple-light" />
          Scroll to explore — move your mouse to look around
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505]/80 to-transparent pointer-events-none" />
    </section>
  )
}
