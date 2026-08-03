'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Menu, X } from 'lucide-react'
import { whatsapp } from '@/lib/tokens'
import { cn } from '@/lib/cn'

const navLinks = [
  {
    label: 'About',
    subLinks: [
      { label: 'Our Mission', href: '#about' },
      { label: 'Who is a KidDost', href: '#showcase-catalogue' },
      { label: 'Our Team', href: '#team' },
      { label: 'Philosophy', href: '#about' },
    ]
  },
  {
    label: 'Services',
    subLinks: [
      { label: 'Play & Engagement', href: '#services' },
      { label: 'Home Tutoring', href: '#services' },
      { label: 'Activity Sessions', href: '#services' },
      { label: 'Pricing Plans', href: '#pricing' },
    ]
  }
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          'bg-paper-warm/95 backdrop-blur-sm',
          scrolled
            ? 'border-b border-border-soft shadow-paper-sm'
            : 'border-b border-transparent'
        )}
      >
        <nav
          className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 flex-shrink-0" aria-label="KidDost home">
            <Image
              src="/logo.png"
              alt="KidDost logo"
              width={36}
              height={36}
              className="w-9 h-9 object-contain"
              priority
            />
            <span className="font-serif text-xl font-semibold text-ink-charcoal tracking-tight">
              KidDost
            </span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-7" role="list">
            {navLinks.map(link => (
              <li key={link.label} className="relative group">
                <span
                  className={cn(
                    'font-sans text-sm font-medium text-ink-medium cursor-pointer',
                    'hover:text-ink-charcoal transition-colors duration-150 py-4',
                    'relative after:absolute after:bottom-[14px] after:left-0 after:w-0 after:h-[1px]',
                    'after:bg-terracotta after:transition-all after:duration-200',
                    'hover:after:w-full'
                  )}
                >
                  {link.label}
                </span>
                <div className="absolute top-[48px] left-0 w-48 bg-paper-white shadow-paper border border-border-soft rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <ul className="flex flex-col py-2">
                    {link.subLinks.map(sub => (
                      <li key={sub.label}>
                        <a href={sub.href} className="block px-4 py-2 font-sans text-sm text-ink-medium hover:text-ink-charcoal hover:bg-paper-cream transition-colors">
                          {sub.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>

          {/* Desktop WhatsApp CTA */}
          <a
            id="nav-whatsapp-cta"
            href={whatsapp.urlWithMessage}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'hidden md:inline-flex items-center gap-2',
              'bg-whatsapp text-white font-sans text-sm font-medium',
              'px-4 py-2 rounded-sm',
              'hover:bg-whatsapp-dark transition-colors duration-200',
              'shadow-paper-sm hover:shadow-paper'
            )}
          >
            <MessageCircle size={16} aria-hidden="true" />
            <span>WhatsApp Us</span>
          </a>

          {/* Mobile: WhatsApp icon + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={whatsapp.urlWithMessage}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact via WhatsApp"
              className="w-9 h-9 flex items-center justify-center rounded-sm bg-whatsapp text-white whatsapp-pulse"
            >
              <MessageCircle size={18} aria-hidden="true" />
            </a>
            <button
              onClick={() => setMobileOpen(prev => !prev)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              className="w-9 h-9 flex items-center justify-center rounded-sm text-ink-charcoal hover:bg-ink-charcoal/6 transition-colors"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-ink-charcoal/20 md:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className={cn(
                'fixed top-0 right-0 bottom-0 z-50 w-72 md:hidden',
                'bg-paper-warm border-l border-border-soft shadow-paper-lg',
                'flex flex-col'
              )}
            >
              {/* Drawer header */}
              <div className="h-16 flex items-center justify-between px-6 border-b border-border-soft">
                <span className="font-serif text-lg font-semibold text-ink-charcoal">Menu</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="w-8 h-8 flex items-center justify-center rounded-sm text-ink-medium hover:text-ink-charcoal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 px-6 py-8" aria-label="Mobile navigation">
                <ul className="flex flex-col gap-1" role="list">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.25 }}
                      className="border-b border-border-soft/50 py-2"
                    >
                      <span className="block px-3 py-2 font-serif text-lg font-semibold text-ink-charcoal">
                        {link.label}
                      </span>
                      <ul className="flex flex-col pl-4 mt-1">
                        {link.subLinks.map((sub) => (
                          <li key={sub.label}>
                            <a
                              href={sub.href}
                              onClick={() => setMobileOpen(false)}
                              className={cn(
                                'block py-2 px-3 rounded-sm font-sans text-base font-medium',
                                'text-ink-warm hover:text-ink-charcoal hover:bg-paper-cream',
                                'transition-all duration-150'
                              )}
                            >
                              {sub.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Bottom CTA */}
              <div className="p-6 border-t border-border-soft">
                <a
                  href={whatsapp.urlWithMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'flex items-center justify-center gap-2 w-full',
                    'bg-whatsapp text-white font-sans text-sm font-semibold',
                    'py-3.5 rounded-sm',
                    'hover:bg-whatsapp-dark transition-colors',
                    'whatsapp-pulse'
                  )}
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  <span>Chat on WhatsApp</span>
                </a>
                <p className="font-sans text-xs text-ink-light text-center mt-3">
                  We&apos;re available Mon–Sat, 9am–7pm
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
