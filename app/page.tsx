import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ComponentShowcase from '@/components/sections/ComponentShowcase'
import { WhatsAppCTASection } from '@/components/sections/WhatsAppCTA'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
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

        {/* How It Works */}
        <HowItWorksSection />

        <Divider variant="thread" />

        {/* Design System Showcase */}
        <ComponentShowcase />

        <Divider variant="thread" />

        {/* Pricing */}
        <section id="pricing" className="relative w-full max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20 flex flex-col items-center">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-ink-charcoal mb-10 text-center">
            Pricing Details
          </h2>
          <img 
            src="/Pricing.png" 
            alt="KidDost Pricing Plans" 
            className="w-full max-w-4xl h-auto rounded-md shadow-paper-lg border border-border-soft" 
          />
        </section>
      </main>

      <Footer />
    </>
  )
}
