import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ComponentShowcase from '@/components/sections/ComponentShowcase'
import { WhatsAppCTASection } from '@/components/sections/WhatsAppCTA'
import Divider from '@/components/ui/Divider'

// ─────────────────────────────────────────────────────────────────────────────
// KidDost — Design System Foundation Showcase
//
// This page demonstrates the full component library and design system.
// It is the proof-of-concept, not the final marketing homepage.
//
// Architecture:
//   Navigation (sticky, mobile-first)
//   HeroSection (placeholder hero with paper stack visual)
//   WhatsAppCTASection (inline CTA)
//   ComponentShowcase (all components displayed)
//   Footer
//   FloatingWhatsApp (mobile only, fixed)
// ─────────────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <>
      <Navigation />

      <main id="main-content">
        {/* Hero */}
        <HeroSection />

        <Divider variant="torn" />

        {/* Inline WhatsApp CTA */}
        <WhatsAppCTASection />

        <Divider variant="rule" />

        {/* Design System Showcase */}
        <ComponentShowcase />
      </main>

      <Footer />
    </>
  )
}
