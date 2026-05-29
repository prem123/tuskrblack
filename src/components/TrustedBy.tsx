import { motion } from 'framer-motion'
import { Building2, UtensilsCrossed, Home, ShoppingBag, Stethoscope, Wrench } from 'lucide-react'

const businesses = [
  { icon: Stethoscope, label: 'Clinics & Healthcare', color: 'text-red-400' },
  { icon: UtensilsCrossed, label: 'Restaurants', color: 'text-orange-400' },
  { icon: Home, label: 'Real Estate', color: 'text-blue-400' },
  { icon: ShoppingBag, label: 'Retail Stores', color: 'text-purple-400' },
  { icon: Building2, label: 'Local Businesses', color: 'text-green-400' },
  { icon: Wrench, label: 'Service Providers', color: 'text-yellow-400' },
  { icon: Stethoscope, label: 'Clinics & Healthcare', color: 'text-red-400' },
  { icon: UtensilsCrossed, label: 'Restaurants', color: 'text-orange-400' },
  { icon: Home, label: 'Real Estate', color: 'text-blue-400' },
  { icon: ShoppingBag, label: 'Retail Stores', color: 'text-purple-400' },
  { icon: Building2, label: 'Local Businesses', color: 'text-green-400' },
  { icon: Wrench, label: 'Service Providers', color: 'text-yellow-400' },
]

export default function TrustedBy() {
  return (
    <section className="py-16 bg-[#080808] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-2">
            Trusted by 100+ Businesses Across India
          </p>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-brand-blue to-transparent mx-auto" />
        </motion.div>
      </div>

      {/* Scrolling marquee */}
      <div className="relative">
        <div className="flex overflow-hidden">
          <div className="flex gap-6 animate-scroll whitespace-nowrap">
            {businesses.map((biz, i) => {
              const Icon = biz.icon
              return (
                <div
                  key={i}
                  className="flex-shrink-0 flex items-center gap-3 px-6 py-3 glass-card rounded-xl border border-white/5 hover:border-brand-blue/20 transition-colors"
                >
                  <div className={`w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center`}>
                    <Icon size={16} className={biz.color} />
                  </div>
                  <span className="text-sm font-medium text-white/60">{biz.label}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#080808] to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#080808] to-transparent pointer-events-none z-10" />
      </div>
    </section>
  )
}
