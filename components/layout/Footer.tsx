'use client'

import Image from 'next/image'
import { MessageCircle, Mail, MapPin, Heart } from 'lucide-react'
import { whatsapp } from '@/lib/tokens'
import { cn } from '@/lib/cn'
import RubberStamp from '@/components/ui/RubberStamp'
import Divider from '@/components/ui/Divider'

const footerLinks = {
  about: [
    { label: 'Our Mission',     href: '#about' },
    { label: 'Who is a KidDost', href: '#about' },
    { label: 'Our Team',        href: '#team' },
    { label: 'Philosophy',      href: '#about' },
  ],
  services: [
    { label: 'Play & Engagement', href: '#services' },
    { label: 'Home Tutoring',     href: '#services' },
    { label: 'Activity Sessions', href: '#services' },
    { label: 'Pricing Plans',     href: '#pricing' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-paper-cream border-t border-border-warm overflow-hidden">
      {/* Paper stack visual — slight shadow above footer */}
      <div
        aria-hidden="true"
        className="absolute -top-4 left-0 right-0 h-4 bg-paper-warm"
        style={{
          boxShadow: '0 -4px 12px rgba(44,35,25,0.08)',
          transform: 'rotate(0.15deg)',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Main footer grid */}
        <div className="py-14 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">

          {/* Brand column */}
          <div className="md:col-span-4 flex flex-col gap-5">
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="KidDost logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <span className="font-serif text-2xl font-semibold text-ink-charcoal">
                KidDost
              </span>
            </div>

            <p className="font-sans text-sm text-ink-medium leading-relaxed max-w-xs">
              Verified, warm companions who come to your home and engage your child — 
              so you get the time you deserve, guilt-free.
            </p>

            {/* Stamp decoration */}
            <div className="mt-2">
              <RubberStamp
                text="Circle of Trust"
                subtext="Since 2022"
                color="terracotta"
                size="md"
                rotation={-8}
              />
            </div>
          </div>

          {/* About links */}
          <div className="md:col-span-2 md:col-start-6 flex flex-col gap-4">
            <h3 className="font-sans text-xs font-semibold tracking-[0.16em] uppercase text-ink-light">
              About
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {footerLinks.about.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-ink-medium hover:text-ink-charcoal transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <h3 className="font-sans text-xs font-semibold tracking-[0.16em] uppercase text-ink-light">
              Services
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {footerLinks.services.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-ink-medium hover:text-ink-charcoal transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="md:col-span-3 md:col-start-10 flex flex-col gap-4">
            <h3 className="font-sans text-xs font-semibold tracking-[0.16em] uppercase text-ink-light">
              Get In Touch
            </h3>

            {/* WhatsApp CTA */}
            <a
              id="footer-whatsapp-cta"
              href={whatsapp.urlWithMessage}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center gap-2.5 self-start',
                'bg-whatsapp text-white font-sans text-sm font-semibold',
                'px-5 py-3 rounded-sm',
                'hover:bg-whatsapp-dark transition-colors duration-200',
                'shadow-paper-sm hover:shadow-paper'
              )}
            >
              <MessageCircle size={17} aria-hidden="true" />
              <span>WhatsApp Us</span>
            </a>

            <div className="flex flex-col gap-3 mt-1">
              <a
                href="mailto:seema@kiddost.com"
                className="flex items-center gap-2 font-sans text-sm text-ink-medium hover:text-ink-charcoal transition-colors"
              >
                <Mail size={14} className="flex-shrink-0 text-ink-light" aria-hidden="true" />
                seema@kiddost.com
              </a>
              <div className="flex items-start gap-2 font-sans text-sm text-ink-medium">
                <MapPin size={14} className="flex-shrink-0 text-ink-light mt-0.5" aria-hidden="true" />
                <span>Bengaluru, India<br/>
                  <span className="text-xs text-ink-light">(Expanding to other metros)</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <Divider variant="rule" color="warm" />

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-ink-faint text-center sm:text-left">
            © {currentYear} KidDost Tech Private Limited. All rights reserved.
          </p>
          <p className="font-sans text-xs text-ink-faint flex items-center gap-1">
            Made with <Heart size={11} className="text-terracotta fill-terracotta" aria-label="love" /> for parents everywhere
          </p>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="font-sans text-xs text-ink-light hover:text-ink-medium transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
