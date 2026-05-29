import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageCircle } from 'lucide-react'

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Popup chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.25 }}
            className="glass-card rounded-3xl border border-white/10 overflow-hidden shadow-glass w-72"
          >
            {/* Header */}
            <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-white font-bold text-sm">TB</span>
              </div>
              <div className="flex-1">
                <p className="text-white text-sm font-semibold">Tuskr Black</p>
                <p className="text-green-200 text-xs">🟢 Online now</p>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white transition-colors">
                <X size={16} />
              </button>
            </div>

            {/* Chat bubble */}
            <div className="p-4 bg-gradient-to-b from-[#0d1117] to-[#0a0f1a]">
              <div className="bg-[#1a1f2e] rounded-2xl rounded-tl-sm p-3 text-sm text-white/80 border border-white/5 mb-3">
                👋 Hi there! I'm from Tuskr Black.
                <br /><br />
                Ready to grow your business with WhatsApp automation and digital marketing?
                <br /><br />
                Let's chat! 🚀
              </div>
              <p className="text-xs text-white/25 text-center">Reply to start the conversation</p>
            </div>

            {/* CTA */}
            <div className="p-3 bg-[#0d1117]">
              <a
                href="https://wa.me/919999999999?text=Hi%20Tuskr%20Black%2C%20I%20want%20to%20know%20more%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#1ebe5d] transition-colors"
              >
                <MessageCircle size={16} />
                Start WhatsApp Chat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="relative w-14 h-14 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center text-white hover:shadow-glow-blue transition-all"
        aria-label="Open WhatsApp chat"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={22} />
            </motion.div>
          )}
        </AnimatePresence>
        {/* Ping animation */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-[#050505] text-[8px] text-white flex items-center justify-center font-bold">1</span>
      </motion.button>
    </div>
  )
}
