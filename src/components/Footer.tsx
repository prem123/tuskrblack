import { Link } from 'react-router-dom'
import { MessageCircle, Instagram, Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import { scrollToSection } from '../utils/scrollTo'

type FooterLink = { label: string; href: string; isRoute?: boolean }

const footerLinks: Record<string, FooterLink[]> = {
  Services: [
    { label: 'WhatsApp Business API', href: '#services' },
    { label: 'Meta Ads Management', href: '#services' },
    { label: 'Google Business Profile', href: '#gmb' },
    { label: 'Review Growth System', href: '#gmb' },
  ],
  Company: [
    { label: 'About Tuskr Black', href: '#why' },
    { label: 'Free Consultation', href: '#consultation' },
    { label: 'Case Studies', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact Us', href: '#contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy-policy', isRoute: true },
    { label: 'Terms & Conditions', href: '/terms-conditions', isRoute: true },
  ],
}

const socials = [
  { icon: Instagram, href: 'https://instagram.com/tuskrblack', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com/tuskrblack', label: 'Facebook' },
  { icon: Linkedin, href: 'https://linkedin.com/company/tuskrblack', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/tuskrblack', label: 'Twitter' },
]

export default function Footer() {
  return (
    <footer className="bg-[#030303] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-block">
              <div className="bg-white rounded-full p-1 inline-flex">
                <img
                  src="/logo.jpg"
                  alt="Tuskr Black"
                  className="h-12 w-12 object-cover rounded-full"
                />
              </div>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              India's premier AI-powered WhatsApp automation and digital marketing platform. Helping businesses grow smarter.
            </p>
            <div className="space-y-2.5">
              {[
                { icon: Mail, value: 'contact@tuskrblack.in', href: 'mailto:contact@tuskrblack.in' },
                { icon: Phone, value: '+91 96067 67809', href: 'tel:+919606767809' },
                { icon: MapPin, value: 'India (Remote-first)', href: '#' },
              ].map(({ icon: Icon, value, href }) => (
                <a key={value} href={href} className="flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors">
                  <Icon size={13} className="text-brand-blue flex-shrink-0" />
                  {value}
                </a>
              ))}
            </div>
            {/* Social links */}
            <div className="flex gap-3 pt-1">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl glass border border-white/5 flex items-center justify-center text-white/40 hover:text-white hover:border-brand-blue/30 transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs font-bold text-white uppercase tracking-widest mb-4">{category}</p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.isRoute ? (
                      <Link
                        to={link.href}
                        className="text-sm text-white/40 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        onClick={(e) => {
                          if (link.href.startsWith('#')) {
                            e.preventDefault()
                            scrollToSection(link.href)
                          }
                        }}
                        className="text-sm text-white/40 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25 text-center sm:text-left">
            © {new Date().getFullYear()} Tuskr Black. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/20">
              WhatsApp is a registered trademark of Meta Platforms, Inc.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
