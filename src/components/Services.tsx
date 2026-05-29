import { motion } from 'framer-motion'
import { MessageCircle, BarChart3, MapPin, Star, ArrowRight, Check } from 'lucide-react'
import { scrollToSection } from '../utils/scrollTo'

const services = [
  {
    icon: MessageCircle,
    color: 'from-green-500 to-emerald-600',
    glow: 'rgba(16,185,129,0.2)',
    badge: 'WhatsApp API',
    title: 'WhatsApp API Platform',
    description: 'Official WhatsApp Business API integration for automated conversations, bulk campaigns, and CRM sync.',
    features: [
      'Automated Messaging',
      'AI Chatbots',
      'CRM Integrations',
      'Bulk Campaigns',
      'Multi-Agent Inbox',
      'Broadcast Messaging',
    ],
    cta: 'Explore WhatsApp',
  },
  {
    icon: BarChart3,
    color: 'from-blue-500 to-indigo-600',
    glow: 'rgba(59,130,246,0.2)',
    badge: 'Performance',
    title: 'Meta Ads',
    description: 'Data-driven advertising campaigns on Facebook and Instagram to maximize ROI and generate quality leads.',
    features: [
      'Facebook Ads',
      'Instagram Ads',
      'Lead Generation',
      'Retargeting',
      'Conversion Optimization',
      'Audience Targeting',
    ],
    cta: 'Explore Ads',
  },
  {
    icon: MapPin,
    color: 'from-purple-500 to-violet-600',
    glow: 'rgba(124,58,237,0.2)',
    badge: 'Local SEO',
    title: 'Google Business Profile',
    description: 'Dominate local search results with complete GMB optimization, listing management, and local SEO strategies.',
    features: [
      'Setup & Verification',
      'Local SEO',
      'Ranking Improvement',
      'Profile Management',
      'Business Listing',
      'Maps Optimization',
    ],
    cta: 'Explore GMB',
  },
  {
    icon: Star,
    color: 'from-yellow-500 to-orange-500',
    glow: 'rgba(234,179,8,0.2)',
    badge: 'Reputation',
    title: 'Review Growth System',
    description: 'Automated review collection and reputation management to build trust and improve local search rankings.',
    features: [
      'Auto Review Requests',
      'SEO Review Strategy',
      'Reputation Monitoring',
      'Review Analytics',
      'Google Reviews',
      'Customer Feedback',
    ],
    cta: 'Explore Reviews',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 section-gradient relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-brand-purple/30 text-xs font-semibold text-brand-purple-light uppercase tracking-widest mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Everything You Need to{' '}
            <span className="gradient-text">Scale Your Business</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            From WhatsApp automation to local SEO — we handle it all so you can focus on running your business.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group glass-card rounded-3xl p-6 border border-white/5 hover:border-white/10 cursor-pointer relative overflow-hidden"
              >
                {/* Background glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${svc.glow}, transparent 70%)` }}
                />

                {/* Icon */}
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${svc.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} className="text-white" />
                </div>

                {/* Badge */}
                <span className={`inline-block px-2 py-0.5 rounded-md text-xs font-semibold bg-gradient-to-r ${svc.color} text-white mb-3 opacity-80`}>
                  {svc.badge}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 leading-tight">{svc.title}</h3>

                {/* Description */}
                <p className="text-sm text-white/50 mb-5 leading-relaxed">{svc.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/60">
                      <Check size={12} className="text-brand-blue flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('#contact')
                  }}
                  className="flex items-center gap-2 text-sm font-semibold text-white/60 group-hover:text-white transition-colors"
                >
                  {svc.cta}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
