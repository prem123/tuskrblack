import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Shield, Zap, HeadphonesIcon, TrendingUp } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { end: 500, suffix: 'K+', label: 'Messages Delivered', icon: '💬', color: 'from-green-500 to-emerald-500' },
  { end: 100, suffix: '+', label: 'Businesses Served', icon: '🏢', color: 'from-blue-500 to-indigo-500' },
  { end: 5, suffix: 'M+', label: 'Customer Interactions', icon: '🤝', color: 'from-purple-500 to-violet-500' },
  { end: 98, suffix: '%', label: 'Client Satisfaction', icon: '⭐', color: 'from-yellow-500 to-orange-500' },
]

const reasons = [
  {
    icon: Shield,
    title: 'Official WhatsApp Partner',
    description: 'Certified WhatsApp Business API provider ensuring 100% policy compliance and platform stability.',
    color: 'text-green-400',
    bg: 'bg-green-400/10',
  },
  {
    icon: Zap,
    title: 'Lightning Fast Setup',
    description: 'Get your WhatsApp Business API live in 24-48 hours with our streamlined onboarding process.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Support',
    description: 'Indian business hours support with dedicated account managers for every client.',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
  },
  {
    icon: TrendingUp,
    title: 'Proven ROI',
    description: 'Our clients see an average 3x increase in lead conversion within the first 90 days.',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
  },
]

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const obj = { val: 0 }
    gsap.to(obj, {
      val: end,
      duration: 2,
      ease: 'power2.out',
      onUpdate: () => setCount(Math.round(obj.val)),
    })
  }, [inView, end])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export default function WhyChoose() {
  return (
    <section id="why" className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #7C3AED, transparent)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-brand-blue/30 text-xs font-semibold text-brand-blue-light uppercase tracking-widest mb-4">
            Why Tuskr Black
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Numbers That{' '}
            <span className="gradient-text">Speak for Themselves</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Join hundreds of businesses that trust Tuskr Black to power their growth.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-3xl p-6 border border-white/5 text-center group hover:border-brand-purple/20 transition-colors"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className={`text-4xl font-black mb-1 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                <Counter end={stat.end} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-white/50 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group glass-card rounded-3xl p-6 border border-white/5 hover:border-brand-blue/20 transition-all hover:-translate-y-1"
              >
                <div className={`w-11 h-11 rounded-2xl ${reason.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={20} className={reason.color} />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{reason.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
