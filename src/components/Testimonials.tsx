import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Owner, Sharma Electronics',
    avatar: 'RS',
    rating: 5,
    text: 'Tuskr Black transformed our WhatsApp marketing. We went from 50 leads/month to 300+ leads in just 2 months. The automated chatbot handles 80% of inquiries without our staff.',
    metric: '6x Lead Growth',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    name: 'Dr. Priya Mehta',
    role: 'Director, Mehta Dental Clinic',
    avatar: 'PM',
    rating: 5,
    text: 'Our Google Business Profile went from 4 reviews to 127 reviews in 3 months. We\'re now the top-rated dental clinic in our area. Appointments have doubled!',
    metric: '127 New Reviews',
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Amit Patel',
    role: 'CEO, Patel Real Estate',
    avatar: 'AP',
    rating: 5,
    text: 'The Meta Ads campaigns delivered incredible results. Our cost per lead dropped from ₹800 to ₹180. Tuskr Black\'s team is responsive and truly understands local business marketing.',
    metric: '78% Lower CPL',
    color: 'from-purple-500 to-violet-500',
  },
  {
    name: 'Sunita Gupta',
    role: 'Manager, Gupta Restaurant Chain',
    avatar: 'SG',
    rating: 5,
    text: 'We send festive offers via WhatsApp broadcast and get 60%+ open rates. Our daily orders increased by 40% after implementing Tuskr Black\'s WhatsApp automation system.',
    metric: '40% More Orders',
    color: 'from-orange-500 to-red-500',
  },
  {
    name: 'Vikram Singh',
    role: 'Founder, VS Fitness Studio',
    avatar: 'VS',
    rating: 5,
    text: 'Brilliant service! Our WhatsApp chatbot books appointments automatically. Google rankings improved from page 3 to position 1 for \'gym near me\' in our city.',
    metric: 'Position #1 on Maps',
    color: 'from-pink-500 to-rose-500',
  },
  {
    name: 'Kavitha Nair',
    role: 'Owner, Nair Boutique',
    avatar: 'KN',
    rating: 5,
    text: 'The review automation system is incredible. Customers get a WhatsApp message after purchase and most leave 5-star reviews. Our reputation has never been better.',
    metric: '4.9★ Average Rating',
    color: 'from-yellow-500 to-amber-500',
  },
]

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-80 glass-card rounded-3xl p-6 border border-white/5 hover:border-brand-blue/20 transition-all group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex gap-0.5">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <Quote size={18} className="text-white/10" />
      </div>
      <p className="text-sm text-white/65 leading-relaxed mb-5">"{t.text}"</p>
      <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${t.color} text-white mb-4`}>
        📈 {t.metric}
      </div>
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0`}>
          <span className="text-white font-bold text-sm">{t.avatar}</span>
        </div>
        <div>
          <p className="text-sm font-bold text-white">{t.name}</p>
          <p className="text-xs text-white/40">{t.role}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const row1Ref = useRef<HTMLDivElement>(null)
  const row2Ref = useRef<HTMLDivElement>(null)

  return (
    <section id="testimonials" className="py-24 section-gradient relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-yellow-500/30 text-xs font-semibold text-yellow-400 uppercase tracking-widest mb-4">
            Customer Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Real Results from{' '}
            <span className="gradient-text">Real Businesses</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Don't take our word for it. See how Indian businesses are growing with Tuskr Black.
          </p>
        </motion.div>
      </div>

      {/* Scrolling rows */}
      <div className="space-y-4 overflow-hidden">
        {/* Row 1 - scroll left */}
        <div className="flex gap-4 animate-scroll">
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
        {/* Row 2 - scroll right (reverse) */}
        <div className="flex gap-4" style={{ animation: 'scroll 35s linear infinite reverse' }}>
          {[...testimonials.slice(3), ...testimonials.slice(3)].concat([...testimonials.slice(0, 3), ...testimonials.slice(0, 3)]).map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none z-10" />
    </section>
  )
}
