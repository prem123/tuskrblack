import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'
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
        scrolled
          ? 'bg-white shadow-md py-1 border-b border-gray-100'
          : 'bg-white/95 backdrop-blur-sm py-1 border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center group flex-shrink-0">
            <img
              src="/logo.jpg"
              alt="Tuskr Black – Digital Marketing & Growth Studio"
              className="h-12 w-12 sm:h-16 sm:w-16 object-cover rounded-full group-hover:opacity-90 transition-opacity"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={isHome ? link.href : `/${link.href}`}
                onClick={(e) => {
                  if (isHome) { e.preventDefault(); handleNavClick(link.href) }
                }}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/919606767809?text=Hi%20Tuskr%20Black%2C%20I%20want%20to%20book%20a%20demo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
            >
              <MessageCircle size={16} className="text-green-500" />
              WhatsApp
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue text-white text-sm font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-sm"
            >
              Book Free Demo
            </a>
          </div>

          {/* Mobile: WhatsApp icon + hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="https://wa.me/919606767809?text=Hi%20Tuskr%20Black%2C%20I%20want%20to%20book%20a%20demo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-green-600"
              aria-label="WhatsApp"
            >
              <MessageCircle size={22} />
            </a>
            <button
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
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
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={isHome ? link.href : `/${link.href}`}
                  onClick={(e) => {
                    if (isHome) { e.preventDefault(); handleNavClick(link.href) }
                  }}
                  className="px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all font-medium text-base"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 mt-1 border-t border-gray-100">
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
                  className="flex items-center justify-center w-full py-4 rounded-2xl bg-gradient-to-r from-brand-purple to-brand-blue text-white text-base font-bold shadow-md active:scale-95 transition-transform"
                >
                  Book Free Demo
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
