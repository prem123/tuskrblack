import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, TrendingUp, Star, Search, ArrowUp, Check } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const metrics = [
  { label: 'Google Search Visibility', before: 15, after: 78, color: '#3B82F6' },
  { label: 'Google Maps Ranking', before: 22, after: 91, color: '#7C3AED' },
  { label: 'Review Score', before: 35, after: 96, color: '#10B981' },
  { label: 'Local Click-Through Rate', before: 18, after: 74, color: '#F59E0B' },
]

const steps = [
  { step: '01', title: 'Profile Audit & Setup', desc: 'Complete Google Business Profile setup with all categories, attributes, and correct business information.' },
  { step: '02', title: 'Content Optimization', desc: 'Keyword-rich descriptions, regular posts, photo optimization for maximum local search visibility.' },
  { step: '03', title: 'Review Automation', desc: 'Automated WhatsApp & SMS review request system to consistently grow 5-star ratings.' },
  { step: '04', title: 'Performance Monitoring', desc: 'Monthly reporting on rankings, views, clicks, and calls with continuous optimization.' },
]

export default function GMBSection() {
  const barsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!barsRef.current) return
    const bars = barsRef.current.querySelectorAll('.progress-after')
    bars.forEach((bar) => {
      const width = (bar as HTMLElement).dataset.width || '0'
      gsap.fromTo(
        bar,
        { width: '0%' },
        {
          width: `${width}%`,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 80%',
          },
        }
      )
    })
  }, [])

  return (
    <section id="gmb" className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, #3B82F6, transparent)' }} />
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
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-brand-purple/30 text-xs font-semibold text-brand-purple-light uppercase tracking-widest mb-4">
            Google Business Profile
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Rank Higher on{' '}
            <span className="gradient-text">Google Maps & Local Search</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Get found by customers when they search for businesses like yours. Dominate local search with our proven GMB optimization system.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Before/After metrics */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-card rounded-3xl p-6 border border-white/8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center">
                  <TrendingUp size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Performance Transformation</h3>
                  <p className="text-xs text-white/40">Before vs After Tuskr Black</p>
                </div>
              </div>

              <div ref={barsRef} className="space-y-5">
                {metrics.map((m) => (
                  <div key={m.label}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-white/70">{m.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-white/30">Before: {m.before}%</span>
                        <ArrowUp size={12} className="text-green-400" />
                        <span className="text-xs font-bold" style={{ color: m.color }}>After: {m.after}%</span>
                      </div>
                    </div>
                    {/* Before bar */}
                    <div className="h-1.5 bg-white/5 rounded-full mb-1">
                      <div className="h-full bg-white/20 rounded-full" style={{ width: `${m.before}%` }} />
                    </div>
                    {/* After bar */}
                    <div className="h-2 bg-white/5 rounded-full">
                      <div
                        className="progress-after h-full rounded-full"
                        data-width={m.after}
                        style={{ background: m.color, width: 0 }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Review growth mini chart */}
              <div className="mt-6 pt-6 border-t border-white/5">
                <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">Monthly Review Growth</p>
                <div className="flex items-end gap-2 h-16">
                  {[12, 18, 24, 19, 32, 28, 45, 38, 52, 48, 67, 71].map((v, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(v / 71) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.6 }}
                      className="flex-1 rounded-t-sm"
                      style={{ background: `linear-gradient(to top, #7C3AED, #3B82F6)` }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-xs text-white/30">Jan</span>
                  <span className="text-xs text-white/30">Dec</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Process steps */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-5 border border-white/5 hover:border-brand-purple/20 transition-all group"
              >
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 border border-brand-purple/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-xs font-black gradient-text">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{step.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Google Maps mock */}
            <div className="glass-card rounded-2xl p-5 border border-green-500/20">
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={16} className="text-red-400" />
                <span className="text-sm font-semibold text-white">Google Maps Presence</span>
              </div>
              <div className="space-y-3">
                {[
                  { name: 'Your Business', rank: '#1', rating: '4.9', reviews: '128' },
                  { name: 'Competitor A', rank: '#2', rating: '4.2', reviews: '34' },
                  { name: 'Competitor B', rank: '#3', rating: '3.8', reviews: '18' },
                ].map((biz, i) => (
                  <div key={i} className={`flex items-center gap-3 p-3 rounded-xl ${i === 0 ? 'bg-green-500/10 border border-green-500/20' : 'bg-white/3'}`}>
                    <span className={`text-xs font-bold w-6 text-center ${i === 0 ? 'text-green-400' : 'text-white/30'}`}>{biz.rank}</span>
                    <div className="flex-1">
                      <p className={`text-sm font-semibold ${i === 0 ? 'text-white' : 'text-white/50'}`}>{biz.name}</p>
                      <div className="flex items-center gap-1">
                        <Star size={10} className="text-yellow-400 fill-yellow-400" />
                        <span className="text-xs text-white/40">{biz.rating} ({biz.reviews} reviews)</span>
                      </div>
                    </div>
                    {i === 0 && <span className="text-xs text-green-400 font-semibold">Optimized ✓</span>}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
