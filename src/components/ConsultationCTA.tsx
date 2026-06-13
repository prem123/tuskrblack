import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, ArrowRight, Check, Phone, Clock, Star, Mail } from 'lucide-react'
import { scrollToSection } from '../utils/scrollTo'

const perks = [
  'Free strategy session — no sales pressure',
  'Custom growth plan for your business',
  'Live WhatsApp automation demo',
  'Honest advice on what will actually work',
]

const channels = [
  {
    icon: MessageCircle,
    label: 'WhatsApp Us Now',
    sublabel: 'Typically replies within minutes',
    href: 'https://wa.me/919606767809?text=Hi%20Tuskr%20Black%2C%20I%20want%20to%20book%20a%20free%20consultation',
    style: 'bg-[#25D366] hover:bg-[#1ebe5d] text-white shadow-lg',
    iconColor: 'text-white',
    recommended: true,
  },
  {
    icon: Mail,
    label: 'Email Us',
    sublabel: 'contact@tuskrblack.in',
    href: 'mailto:contact@tuskrblack.in?subject=Free%20Consultation%20Request',
    style: 'bg-white/5 hover:bg-white/10 text-white border border-white/10',
    iconColor: 'text-brand-blue',
    recommended: false,
  },
  {
    icon: Phone,
    label: 'Request a Callback',
    sublabel: 'We\'ll call you within 2 hours',
    href: '#contact',
    style: 'bg-white/5 hover:bg-white/8 text-white border border-white/10',
    iconColor: 'text-brand-purple-light',
    recommended: false,
  },
]

export default function ConsultationCTA() {
  return (
    <section id="consultation" className="py-28 relative overflow-hidden">
      {/* Rich background — translucent so the 3D journey shows through */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d1a]/60 via-[#050505]/55 to-[#0a0515]/60" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #7C3AED, transparent)' }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-8"
          style={{ background: 'radial-gradient(circle, #3B82F6, transparent)' }} />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          {/* Social proof pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-yellow-500/30 text-sm font-medium text-yellow-400 mb-6">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            Trusted by 100+ businesses across India
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
            Ready to Grow?{' '}
            <br className="hidden sm:block" />
            <span className="gradient-text">Book a Free Consultation</span>
          </h2>
          <p className="text-lg text-white/55 max-w-2xl mx-auto leading-relaxed">
            In 30 minutes, our experts will map out a complete growth strategy for your
            business — WhatsApp automation, ads, local SEO, and reviews. Zero cost, zero obligation.
          </p>
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass-card rounded-3xl border border-white/8 overflow-hidden"
        >
          <div className="grid lg:grid-cols-5">
            {/* Left — what you get */}
            <div className="lg:col-span-2 p-8 border-b lg:border-b-0 lg:border-r border-white/8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center">
                  <Clock size={14} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">30-Minute Strategy Call</p>
                  <p className="text-white/40 text-xs">100% Free · No credit card</p>
                </div>
              </div>

              <p className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-4">
                What You'll Get
              </p>
              <ul className="space-y-3">
                {perks.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={11} className="text-green-400" />
                    </div>
                    <span className="text-sm text-white/70 leading-snug">{p}</span>
                  </li>
                ))}
              </ul>

              {/* Urgency nudge */}
              <div className="mt-8 p-3 rounded-xl bg-brand-purple/10 border border-brand-purple/20">
                <p className="text-xs text-brand-purple-light font-medium">
                  🔥 <span className="font-bold">Only 5 slots left</span> this week. Book now to secure your spot.
                </p>
              </div>
            </div>

            {/* Right — booking options */}
            <div className="lg:col-span-3 p-8">
              <p className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-5">
                Choose How to Connect
              </p>
              <div className="space-y-3">
                {channels.map((ch, i) => {
                  const Icon = ch.icon
                  const isAnchor = ch.href.startsWith('#')
                  const handleClick = isAnchor
                    ? (e: React.MouseEvent) => {
                        e.preventDefault()
                        scrollToSection(ch.href)
                      }
                    : undefined

                  const btn = (
                    <motion.a
                      key={ch.label}
                      href={ch.href}
                      target={!isAnchor ? '_blank' : undefined}
                      rel={!isAnchor ? 'noopener noreferrer' : undefined}
                      onClick={handleClick}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + i * 0.08 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center gap-4 w-full px-5 py-4 rounded-2xl font-semibold transition-all ${ch.style}`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={20} className={ch.iconColor} />
                      </div>
                      <div className="flex-1 text-left">
                        <p className="text-sm font-bold">{ch.label}</p>
                        <p className="text-xs opacity-60">{ch.sublabel}</p>
                      </div>
                      <ArrowRight size={16} className="opacity-50" />
                    </motion.a>
                  )

                  return ch.recommended ? (
                    <div key={ch.label} className="relative pt-3">
                      <span className="absolute top-0 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-[#25D366] text-white text-[10px] font-bold uppercase tracking-wider whitespace-nowrap">
                        ⭐ Recommended
                      </span>
                      {btn}
                    </div>
                  ) : (
                    <div key={ch.label}>{btn}</div>
                  )
                })}
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3 my-5">
                <div className="flex-1 h-px bg-white/8" />
                <span className="text-xs text-white/25 font-medium">or fill in your details</span>
                <div className="flex-1 h-px bg-white/8" />
              </div>

              {/* Quick inline form */}
              <QuickForm />
            </div>
          </div>
        </motion.div>

        {/* Bottom trust row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/30"
        >
          {[
            '✅ No spam, ever',
            '✅ Response within 2 business hours',
            '✅ Zero commitment required',
            '✅ Available Mon–Sat, 9am–7pm IST',
          ].map((t) => (
            <span key={t}>{t}</span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function QuickForm() {
  const [phone, setPhone] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `👋 Hi Tuskr Black, I'd like to book a free consultation.\n\n*My WhatsApp number:* ${phone}`
    window.open(`https://wa.me/919606767809?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <input
        type="tel"
        placeholder="Your WhatsApp number"
        required
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-brand-blue/50 transition-colors"
      />
      <button
        type="submit"
        className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue text-white text-sm font-bold hover:opacity-90 transition-all whitespace-nowrap"
      >
        Get Free Call
        <ArrowRight size={14} />
      </button>
    </form>
  )
}
