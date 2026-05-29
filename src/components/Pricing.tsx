import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Zap, Building2, Star, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    icon: Zap,
    price: { monthly: 2999, annual: 2399 },
    description: 'Perfect for small businesses getting started',
    badge: null,
    color: 'from-blue-500 to-indigo-500',
    borderColor: 'border-blue-500/20',
    features: [
      'WhatsApp Business API (1 number)',
      'Up to 1,000 monthly contacts',
      'Basic chatbot (5 flows)',
      'Broadcast campaigns (5/month)',
      'Google Business Profile setup',
      '10 review requests/month',
      'Meta Ads management (1 campaign)',
      'Monthly performance report',
      'Email support',
    ],
    cta: 'Get Started',
    ctaStyle: 'border border-blue-500/40 text-white hover:bg-blue-500/10',
  },
  {
    name: 'Growth',
    icon: Star,
    price: { monthly: 7999, annual: 6399 },
    description: 'For growing businesses that want more',
    badge: 'Most Popular',
    color: 'from-brand-purple to-brand-blue',
    borderColor: 'border-brand-purple/50',
    features: [
      'WhatsApp Business API (2 numbers)',
      'Up to 10,000 monthly contacts',
      'Advanced chatbot (unlimited flows)',
      'Broadcast campaigns (unlimited)',
      'Full GMB optimization & management',
      'Automated review collection',
      'Meta + Google Ads (up to 5 campaigns)',
      'CRM integration (HubSpot / Zoho)',
      'Weekly performance report',
      'Shared team inbox (5 agents)',
      'Priority support',
      'Dedicated account manager',
    ],
    cta: 'Start Free Trial',
    ctaStyle: 'bg-gradient-to-r from-brand-purple to-brand-blue text-white hover:opacity-90',
  },
  {
    name: 'Enterprise',
    icon: Building2,
    price: { monthly: null, annual: null },
    description: 'Custom solutions for established businesses',
    badge: null,
    color: 'from-yellow-500 to-orange-500',
    borderColor: 'border-yellow-500/20',
    features: [
      'Unlimited WhatsApp numbers',
      'Unlimited contacts & messages',
      'Custom AI chatbot development',
      'White-label solutions',
      'Custom CRM & API integrations',
      'Full-scale Meta + Google Ads',
      'Complete GMB management (all locations)',
      'Advanced review growth strategy',
      'Custom reporting dashboard',
      'Unlimited agents & team inboxes',
      'SLA-backed support',
      'On-site training available',
    ],
    cta: 'Contact Sales',
    ctaStyle: 'border border-yellow-500/40 text-white hover:bg-yellow-500/10',
  },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="py-24 bg-[#080808] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-brand-blue/30 text-xs font-semibold text-brand-blue-light uppercase tracking-widest mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Simple, Transparent{' '}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg mb-8">
            No hidden fees. Cancel anytime. All plans include onboarding support.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!annual ? 'text-white' : 'text-white/40'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${annual ? 'bg-gradient-to-r from-brand-purple to-brand-blue' : 'bg-white/10'}`}
            >
              <span
                className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-300 ${annual ? 'left-7' : 'left-1'}`}
              />
            </button>
            <span className={`text-sm font-medium ${annual ? 'text-white' : 'text-white/40'}`}>
              Annual
              <span className="ml-1.5 px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs font-bold">Save 20%</span>
            </span>
          </div>
        </motion.div>

        {/* Plans */}
        <div className="grid lg:grid-cols-3 gap-6">
          {plans.map((plan, i) => {
            const Icon = plan.icon
            const price = annual ? plan.price.annual : plan.price.monthly
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative glass-card rounded-3xl p-7 border ${plan.borderColor} ${plan.badge ? 'ring-1 ring-brand-purple/30' : ''}`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue text-white text-xs font-bold whitespace-nowrap">
                      ⭐ {plan.badge}
                    </span>
                  </div>
                )}

                {/* Plan header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center`}>
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                    <p className="text-xs text-white/40">{plan.description}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  {price ? (
                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-black text-white">₹{price.toLocaleString()}</span>
                      <span className="text-white/40 text-sm mb-1.5">/month</span>
                    </div>
                  ) : (
                    <div className="text-3xl font-black text-white">Custom Pricing</div>
                  )}
                  {annual && price && (
                    <p className="text-xs text-green-400 mt-1">Billed annually — save ₹{((plan.price.monthly! - price) * 12).toLocaleString()}/yr</p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-2.5 mb-7">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/65">
                      <Check size={14} className="text-green-400 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl text-sm font-bold transition-all hover:scale-105 ${plan.ctaStyle}`}
                >
                  {plan.cta}
                  <ArrowRight size={14} />
                </a>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-white/30 mt-8"
        >
          All prices are in INR (Indian Rupees). GST applicable. * WhatsApp conversation charges billed separately by Meta.
        </motion.p>
      </div>
    </section>
  )
}
