import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, MessageCircle, Phone, Mail, MapPin, Check } from 'lucide-react'

const services = [
  'WhatsApp Business API',
  'Digital Marketing (Meta Ads)',
  'Google Business Profile',
  'Review Growth System',
  'Complete Business Package',
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '', business: '', phone: '', email: '', service: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, connect to your CRM / backend
    console.log('Form submitted:', form)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7C3AED, transparent)' }} />

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
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Schedule Your{' '}
            <span className="gradient-text">Free Consultation</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Tell us about your business and we'll craft a custom growth strategy for you. No obligation, completely free.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Let's Talk Business</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Our team of experts is ready to help you scale with WhatsApp automation, digital marketing, and local SEO. Expect a response within 2 business hours.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: MessageCircle, label: 'WhatsApp', value: '+91 99999 99999', href: 'https://wa.me/919999999999', color: 'text-green-400 bg-green-400/10' },
                { icon: Mail, label: 'Email', value: 'contact@tuskrblack.in', href: 'mailto:contact@tuskrblack.in', color: 'text-blue-400 bg-blue-400/10' },
                { icon: MapPin, label: 'Location', value: 'India (Remote-first)', href: '#', color: 'text-purple-400 bg-purple-400/10' },
              ].map(({ icon: Icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className={`w-10 h-10 rounded-xl ${color.split(' ')[1]} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon size={18} className={color.split(' ')[0]} />
                  </div>
                  <div>
                    <p className="text-xs text-white/30">{label}</p>
                    <p className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick actions */}
            <div className="space-y-3">
              <div className="relative">
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-[#25D366] text-white text-[10px] font-bold uppercase tracking-wider whitespace-nowrap">
                  ⭐ Recommended
                </span>
                <a
                  href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20schedule%20a%20free%20consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-[#25D366] text-white text-sm font-bold hover:bg-[#1ebe5d] transition-all shadow-lg"
                >
                  <MessageCircle size={16} />
                  WhatsApp Chat
                </a>
              </div>
              <a
                href="mailto:contact@tuskrblack.in?subject=Free%20Consultation%20Request"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl glass border border-white/10 text-white text-sm font-semibold hover:border-brand-blue/30 transition-all"
              >
                <Mail size={16} className="text-brand-blue" />
                Email Us
              </a>
            </div>

            {/* Trust badges */}
            <div className="glass-card rounded-2xl p-4 border border-white/5">
              <p className="text-xs text-white/30 mb-3 uppercase tracking-wider font-semibold">Why book a call?</p>
              {[
                'Free strategy session (no sales pressure)',
                'Custom growth plan for your business',
                'Live WhatsApp demo',
                'Pricing tailored to your needs',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-white/60 mb-2">
                  <Check size={12} className="text-green-400 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="glass-card rounded-3xl p-8 border border-green-500/20 text-center h-full flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Check size={28} className="text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Request Received!</h3>
                <p className="text-white/50 text-sm max-w-xs">
                  Thanks! We'll reach out within 2 business hours. Check your WhatsApp for a confirmation message.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 rounded-xl glass border border-white/10 text-white text-sm hover:border-brand-blue/30 transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card rounded-3xl p-7 border border-white/8 space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wide">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Rahul Sharma"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-brand-blue/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wide">Business Name *</label>
                    <input
                      type="text"
                      name="business"
                      value={form.business}
                      onChange={handleChange}
                      required
                      placeholder="Your Business Pvt. Ltd."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-brand-blue/50 transition-colors"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wide">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 98765 43210"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-brand-blue/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wide">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-brand-blue/50 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wide">Services Interested In</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-blue/50 transition-colors"
                    style={{ colorScheme: 'dark' }}
                  >
                    <option value="" className="bg-[#0a0a0a]">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-[#0a0a0a]">{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wide">Tell Us About Your Business</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Brief description of your business and what you're looking to achieve..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-brand-blue/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-gradient-to-r from-brand-purple to-brand-blue text-white font-bold text-sm hover:opacity-90 transition-all hover:scale-[1.02] shadow-glow-purple"
                >
                  <Send size={16} />
                  Schedule Free Consultation
                </button>
                <p className="text-xs text-center text-white/25">
                  By submitting, you agree to our{' '}
                  <a href="/privacy-policy" className="text-brand-blue hover:underline">Privacy Policy</a>
                  . We respect your data and never spam.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
