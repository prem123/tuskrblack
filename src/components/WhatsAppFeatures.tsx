import { motion } from 'framer-motion'
import {
  Inbox, Bot, MessageSquare, Radio, UserPlus, RefreshCw,
  BarChart2, Users, GitBranch, Code, Check, ArrowRight
} from 'lucide-react'

const features = [
  { icon: Inbox, title: 'Shared Team Inbox', desc: 'Manage all WhatsApp conversations in one centralized inbox across your team.', color: 'text-blue-400', bg: 'bg-blue-400/10' },
  { icon: Bot, title: 'AI Chatbot', desc: 'Deploy intelligent chatbots that qualify leads and answer queries 24/7.', color: 'text-purple-400', bg: 'bg-purple-400/10' },
  { icon: MessageSquare, title: 'Auto Replies', desc: 'Set up keyword-based and context-aware auto-replies for instant responses.', color: 'text-green-400', bg: 'bg-green-400/10' },
  { icon: Radio, title: 'Broadcast Messaging', desc: 'Send personalized bulk messages to thousands of contacts at once.', color: 'text-orange-400', bg: 'bg-orange-400/10' },
  { icon: UserPlus, title: 'Lead Capture', desc: 'Capture and qualify leads directly through WhatsApp conversations.', color: 'text-pink-400', bg: 'bg-pink-400/10' },
  { icon: RefreshCw, title: 'CRM Sync', desc: 'Two-way sync with HubSpot, Zoho, Salesforce, and more CRMs.', color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
  { icon: BarChart2, title: 'Campaign Analytics', desc: 'Deep campaign insights: delivery, open rates, click-throughs, and conversions.', color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
  { icon: Users, title: 'Contact Segmentation', desc: 'Segment contacts by tags, attributes, and behavior for targeted campaigns.', color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
  { icon: GitBranch, title: 'Workflow Automation', desc: 'Build complex automation workflows with drag-and-drop flow builder.', color: 'text-rose-400', bg: 'bg-rose-400/10' },
  { icon: Code, title: 'API Integration', desc: 'Robust REST APIs and webhooks to integrate with any business software.', color: 'text-teal-400', bg: 'bg-teal-400/10' },
]

const chatMessages = [
  { type: 'bot', msg: '👋 Hi! Thanks for contacting us. How can I help you today?', time: '10:01 AM' },
  { type: 'user', msg: 'I need information about your services', time: '10:02 AM' },
  { type: 'bot', msg: 'Great! We offer:\n1️⃣ WhatsApp Automation\n2️⃣ Digital Marketing\n3️⃣ Local SEO\n\nWhich interests you?', time: '10:02 AM' },
  { type: 'user', msg: '1', time: '10:03 AM' },
  { type: 'bot', msg: '🚀 Excellent choice! Our WhatsApp API platform helps you:\n✅ Automate conversations\n✅ Send broadcasts\n✅ Generate leads\n\nWant to book a FREE demo?', time: '10:03 AM' },
]

export default function WhatsAppFeatures() {
  return (
    <section id="features" className="py-24 section-gradient relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-green-500/30 text-xs font-semibold text-green-400 uppercase tracking-widest mb-4">
            WhatsApp Automation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Everything You Need to{' '}
            <span className="gradient-text">Automate WhatsApp</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            A complete WhatsApp Business platform built for growing businesses. From chatbots to broadcasts — all in one place.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Feature grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feat, i) => {
              const Icon = feat.icon
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group glass-card rounded-2xl p-4 border border-white/5 hover:border-brand-blue/20 transition-all hover:-translate-y-1"
                >
                  <div className={`w-10 h-10 rounded-xl ${feat.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon size={18} className={feat.color} />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">{feat.title}</h3>
                  <p className="text-xs text-white/45 leading-relaxed">{feat.desc}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Chat demo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="sticky top-24"
          >
            <div className="glass-card rounded-3xl overflow-hidden border border-white/10 shadow-glass">
              {/* Phone frame header */}
              <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TB</span>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Tuskr Black</p>
                  <p className="text-green-200 text-xs">🤖 AI Bot Active</p>
                </div>
                <div className="ml-auto flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-green-200">Online</span>
                </div>
              </div>

              {/* Chat messages */}
              <div
                className="p-4 space-y-3 min-h-[320px]"
                style={{ background: 'linear-gradient(180deg, #0d1117 0%, #0a0f1a 100%)' }}
              >
                {chatMessages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm whitespace-pre-line ${
                        msg.type === 'bot'
                          ? 'bg-[#1a1f2e] text-white/80 rounded-tl-sm border border-white/5'
                          : 'bg-[#25D366]/20 text-green-200 rounded-tr-sm'
                      }`}
                    >
                      {msg.msg}
                      <p className="text-white/30 text-[10px] mt-1 text-right">{msg.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Input bar */}
              <div className="px-4 py-3 bg-[#1a1f2e] flex items-center gap-2">
                <div className="flex-1 bg-white/5 rounded-full px-4 py-2 text-xs text-white/30">
                  Type a message...
                </div>
                <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center">
                  <ArrowRight size={14} className="text-white" />
                </div>
              </div>
            </div>

            {/* Stats below chat */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { label: 'Avg Response', value: '< 1s' },
                { label: 'Chatbot Accuracy', value: '96%' },
                { label: 'Lead Capture', value: '3.2x' },
              ].map((s) => (
                <div key={s.label} className="glass-card rounded-xl p-3 border border-white/5 text-center">
                  <p className="text-lg font-bold text-white">{s.value}</p>
                  <p className="text-xs text-white/40">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
