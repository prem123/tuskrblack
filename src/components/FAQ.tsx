import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    category: 'WhatsApp API',
    q: 'How does WhatsApp Business API setup work?',
    a: 'We handle the entire WhatsApp Business API application and setup process. You\'ll need a registered Indian business with GST and a phone number not registered with any personal WhatsApp account. Setup takes 24-72 hours after we receive your business verification documents.',
  },
  {
    category: 'WhatsApp API',
    q: 'Can I send bulk messages without getting banned?',
    a: 'Yes! Through the official WhatsApp Business API, bulk messaging is permitted as long as you follow Meta\'s policies — only messaging users who have opted in. Our platform includes compliance guardrails to protect your account.',
  },
  {
    category: 'WhatsApp API',
    q: 'What types of messages can I send via WhatsApp API?',
    a: 'You can send marketing messages (to opted-in customers), transactional messages (order updates, booking confirmations), utility messages (alerts, reminders), and conversational responses. Template messages require Meta approval, while session messages are unrestricted.',
  },
  {
    category: 'Meta Ads',
    q: 'How much budget do I need for Meta Ads to see results?',
    a: 'We recommend a minimum of ₹15,000/month in ad spend for meaningful results. However, we\'ve seen great results with smaller budgets for highly targeted local campaigns. Our team will assess your market and recommend the right budget for your goals.',
  },
  {
    category: 'Google Business',
    q: 'How long does it take to improve Google Maps ranking?',
    a: 'Most clients see significant improvement in 4-8 weeks with our GMB optimization strategy. Reviews, NAP consistency, regular posting, and complete profile information all contribute. Some competitive markets may take 2-3 months for top-3 ranking.',
  },
  {
    category: 'Google Business',
    q: 'What if my Google Business Profile was previously suspended?',
    a: 'We have experience handling GMB reinstatement cases. We\'ll audit your profile, identify the suspension reason, help you fix compliance issues, and submit a reinstatement request. Success depends on the nature of the original violation.',
  },
  {
    category: 'Reviews',
    q: 'How does automated review collection work?',
    a: 'After a customer interaction, our system automatically sends them a personalized WhatsApp or SMS message with a direct link to leave a Google review. We time these messages strategically (e.g., after a service completion or purchase) for maximum response rates.',
  },
  {
    category: 'Pricing',
    q: 'Are there setup fees?',
    a: 'The Starter and Growth plans include a one-time onboarding fee of ₹5,000 which covers API setup, initial campaign configuration, and team training. Enterprise plans include custom onboarding as part of the contract.',
  },
  {
    category: 'Pricing',
    q: 'Can I cancel my subscription anytime?',
    a: 'Yes, you can cancel monthly plans at any time with 30 days notice. Annual plan cancellations are prorated after a 3-month minimum period. Your data remains accessible for 30 days after cancellation for export.',
  },
]

function FAQItem({ faq }: { faq: typeof faqs[0] }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={false}
      className={`glass-card rounded-2xl border transition-all duration-200 overflow-hidden ${open ? 'border-brand-blue/30' : 'border-white/5'}`}
    >
      <button
        className="w-full flex items-center justify-between p-5 text-left gap-4"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 px-2 py-0.5 rounded-md bg-brand-purple/20 text-brand-purple-light text-xs font-semibold mt-0.5">
            {faq.category}
          </span>
          <span className="text-sm font-semibold text-white">{faq.q}</span>
        </div>
        <div className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${open ? 'bg-brand-blue/20 text-brand-blue' : 'bg-white/5 text-white/40'}`}>
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-5 pb-5">
              <div className="pl-[calc(theme(spacing.10)+theme(spacing.3))]">
                <p className="text-sm text-white/55 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 section-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-brand-blue/30 text-xs font-semibold text-brand-blue-light uppercase tracking-widest mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Everything you need to know about our services. Can't find what you're looking for?{' '}
            <a href="https://wa.me/919606767809" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">
              Chat with us on WhatsApp.
            </a>
          </p>
        </motion.div>

        {/* FAQ list */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <FAQItem faq={faq} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
