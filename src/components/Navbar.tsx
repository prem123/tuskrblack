import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle, ArrowRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { scrollToSection } from '../utils/scrollTo'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Features', href: '#features' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    if (!isHome) return
    setTimeout(() => scrollToSection(href), 300)
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-[#08080c]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo + wordmark */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <span className="relative">
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-purple to-brand-blue blur-md opacity-60 group-hover:opacity-90 transition-opacity" />
              <img
                src="/logo.jpg"
                alt="Tuskr Black – Digital Marketing & Growth Studio"
                className="relative h-10 w-10 sm:h-12 sm:w-12 object-cover rounded-full ring-1 ring-white/20"
              />
            </span>
            <span className="leading-none">
              <span className="block text-white font-black text-lg sm:text-xl tracking-tight">
                Tuskr <span className="brand-ink">Black</span>
              </span>
              <span className="hidden sm:block text-[10px] font-medium tracking-[0.2em] uppercase text-white/40">
                Marketing & Growth
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full glass px-2 py-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={isHome ? link.href : `/${link.href}`}
                onClick={(e) => {
                  if (isHome) { e.preventDefault(); handleNavClick(link.href) }
                }}
                className="px-4 py-1.5 text-sm text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/10 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href="https://wa.me/919606767809?text=Hi%20Tuskr%20Black%2C%20I%20want%20to%20book%20a%20demo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white/70 hover:text-white rounded-full hover:bg-white/5 transition-colors"
            >
              <MessageCircle size={16} className="text-[#25D366]" />
              WhatsApp
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
              className="group flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue text-white text-sm font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-glow-purple"
            >
              Book Free Demo
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile: WhatsApp icon + hamburger */}
          <div className="flex lg:hidden items-center gap-1">
            <a
              href="https://wa.me/919606767809?text=Hi%20Tuskr%20Black%2C%20I%20want%20to%20book%20a%20demo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#25D366]"
              aria-label="WhatsApp"
            >
              <MessageCircle size={22} />
            </a>
            <button
              className="p-2 text-white/80 hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-t border-white/10"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={isHome ? link.href : `/${link.href}`}
                  onClick={(e) => {
                    if (isHome) { e.preventDefault(); handleNavClick(link.href) }
                  }}
                  className="px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-all font-medium text-base"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 mt-1 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-gradient-to-r from-brand-purple to-brand-blue text-white text-base font-bold shadow-glow-purple active:scale-95 transition-transform"
                >
                  Book Free Demo
                  <ArrowRight size={17} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
