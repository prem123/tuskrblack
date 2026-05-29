import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ArrowRight, Check, MessageCircle, TrendingUp, Star, Zap } from 'lucide-react'

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
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!bgRef.current) return
    const particles = bgRef.current.querySelectorAll('.particle')
    particles.forEach((p, i) => {
      gsap.to(p, {
        y: -40 + Math.sin(i) * 30,
        x: Math.cos(i) * 20,
        duration: 3 + i * 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.3,
      })
    })
  }, [])

  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden pt-24">
      {/* Animated background particles */}
      <div ref={bgRef} className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="particle absolute rounded-full opacity-20"
            style={{
              width: `${20 + i * 15}px`,
              height: `${20 + i * 15}px`,
              left: `${(i * 9) % 100}%`,
              top: `${(i * 13 + 10) % 90}%`,
              background: i % 2 === 0
                ? 'radial-gradient(circle, #7C3AED, transparent)'
                : 'radial-gradient(circle, #3B82F6, transparent)',
            }}
          />
        ))}
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
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

            {/* Brand name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="flex items-center gap-3"
            >
              <img
                src="/logo.jpg"
                alt="Tuskr Black"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-white font-black text-2xl tracking-tight leading-none">
                  Tuskr <span className="text-gray-400">Black</span>
                </p>
                <p className="text-white/40 text-xs font-medium tracking-widest uppercase">Digital Marketing & Growth Studio</p>
              </div>
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
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
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

          {/* Right: Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main dashboard card */}
              <div className="glass-card rounded-3xl p-6 border border-white/10 glow-effect">
                {/* Dashboard header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs text-white/40 font-mono">Tuskr Black Dashboard</span>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: 'Messages Sent', value: '12,847', trend: '+24%', color: 'text-green-400' },
                    { label: 'Leads Generated', value: '1,293', trend: '+18%', color: 'text-blue-400' },
                    { label: 'Conversion Rate', value: '34.2%', trend: '+7%', color: 'text-purple-400' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/5 rounded-xl p-3">
                      <p className="text-xs text-white/40 mb-1">{stat.label}</p>
                      <p className="text-lg font-bold text-white">{stat.value}</p>
                      <p className={`text-xs font-medium ${stat.color}`}>{stat.trend}</p>
                    </div>
                  ))}
                </div>

                {/* WhatsApp chat flow */}
                <div className="space-y-3 mb-6">
                  <p className="text-xs font-semibold text-white/40 uppercase tracking-wider">Live Chat Flow</p>
                  {[
                    { type: 'bot', msg: 'Hi! Welcome to our store. How can I help you today? 👋', time: '2:41 PM' },
                    { type: 'user', msg: 'I want to know about your premium plans', time: '2:42 PM' },
                    { type: 'bot', msg: '✨ Great choice! Our Growth plan starts at ₹4,999/mo. Want to book a demo?', time: '2:42 PM' },
                  ].map((chat, i) => (
                    <div key={i} className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div
                        className={`max-w-[75%] px-3 py-2 rounded-2xl text-xs ${
                          chat.type === 'bot'
                            ? 'bg-[#1a1a2e] text-white/80 rounded-tl-sm'
                            : 'bg-[#25D366]/20 text-green-300 rounded-tr-sm'
                        }`}
                      >
                        {chat.msg}
                        <p className="text-white/30 text-[10px] mt-1 text-right">{chat.time}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Campaign bar */}
                <div className="bg-white/5 rounded-xl p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-white/50">Active Campaign</span>
                    <span className="text-xs text-green-400 font-medium">● Running</span>
                  </div>
                  <p className="text-sm font-semibold text-white mb-2">Diwali Sale Broadcast</p>
                  <div className="flex items-center gap-3 text-xs text-white/40">
                    <span>Sent: 2,847</span>
                    <span>•</span>
                    <span>Delivered: 98.2%</span>
                    <span>•</span>
                    <span>Read: 67%</span>
                  </div>
                  <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[67%] bg-gradient-to-r from-brand-purple to-brand-blue rounded-full" />
                  </div>
                </div>
              </div>

              {/* Floating notification cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 glass-card rounded-2xl p-3 border border-green-500/20 max-w-[180px]"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <MessageCircle size={12} className="text-green-400" />
                  </div>
                  <span className="text-xs font-semibold text-white">New Lead!</span>
                </div>
                <p className="text-xs text-white/50">Priya S. wants a quote for digital marketing</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-6 glass-card rounded-2xl p-3 border border-brand-blue/20 max-w-[160px]"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Star size={12} className="text-yellow-400" />
                  <span className="text-xs font-semibold text-white">New Review</span>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={10} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-xs text-white/50 mt-1">Excellent service!</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
    </section>
  )
}
