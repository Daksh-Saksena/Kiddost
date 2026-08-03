'use client'

import SectionContainer from '@/components/layout/SectionContainer'
import Envelope from '@/components/objects/Envelope'
import { MessageCircle } from 'lucide-react'
import { whatsapp } from '@/lib/tokens'
import { cn } from '@/lib/cn'
import MarginNote from '@/components/ui/MarginNote'

// ─── Floating WhatsApp Button (Mobile) ───────────────────────────────────────
export function FloatingWhatsApp() {
  return (
    <a
      id="floating-whatsapp-cta"
      href={whatsapp.urlWithMessage}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with KidDost on WhatsApp"
      className={cn(
        'fixed bottom-6 right-4 z-50 md:hidden',
        'w-14 h-14 rounded-full bg-whatsapp text-white',
        'flex items-center justify-center',
        'shadow-paper-lg hover:shadow-paper-lift',
        'hover:bg-whatsapp-dark transition-all duration-200',
        'whatsapp-pulse'
      )}
    >
      <MessageCircle size={26} aria-hidden="true" />
    </a>
  )
}

// ─── Inline WhatsApp CTA Section ─────────────────────────────────────────────
export function WhatsAppCTASection() {
  return (
    <SectionContainer id="cta" size="lg" className="relative">
      
      <div className="hidden md:block absolute top-1/4 left-10 z-20">
        <MarginNote color="sage" rotation={-8}>
          Usually reply in 5 mins!
        </MarginNote>
      </div>

      <Envelope
        title={
          <>
            Your child deserves<br />
            <em className="italic text-terracotta not-italic" style={{ fontStyle: 'italic' }}>great company.</em>
          </>
        }
        description={
          <>
            Trained educated female KidDost members engage your child at home through stories, puzzles, art, brain games, movement and age-appropriate learning activities.
            <div className="flex flex-wrap justify-start gap-x-4 gap-y-2 mt-6">
              <span className="font-sans text-sm font-semibold text-ink-medium uppercase tracking-wide">At-home</span>
              <span className="font-sans text-sm font-semibold text-ink-medium uppercase tracking-wide">One-to-one Sessions</span>
              <span className="font-sans text-sm font-semibold text-ink-medium uppercase tracking-wide">Bangalore</span>
            </div>
          </>
        }
        action={
          <div className="flex flex-col items-center gap-4">
            <a
              id="section-whatsapp-cta"
              href={whatsapp.urlWithMessage}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center justify-start gap-3',
                'bg-whatsapp text-white font-sans text-sm md:text-base font-semibold',
                'px-6 py-3 md:px-8 md:py-4 rounded-sm text-left',
                'hover:bg-whatsapp-dark transition-colors duration-200',
                'shadow-paper hover:shadow-paper-md',
                'whatsapp-pulse'
              )}
            >
              <MessageCircle size={22} className="shrink-0" aria-hidden="true" />
              <span>Book Your Introductory<br />Session</span>
            </a>
          </div>
        }
      />
    </SectionContainer>
  )
}
