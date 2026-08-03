'use client'

import SectionContainer from '@/components/layout/SectionContainer'
import CoverPage from '@/components/objects/CoverPage'
import Button from '@/components/ui/Button'
import Tag from '@/components/ui/Tag'
import MarginNote from '@/components/ui/MarginNote'
import StickyNote from '@/components/ui/StickyNote'

export default function HeroSection() {
  return (
    <SectionContainer
      id="hero"
      size="xl"
      // Remove horizontal padding so the CoverPage's mx-4 handles it, allowing shadows/tape to bleed
      className="pt-20 md:pt-24 min-h-screen flex flex-col justify-center relative !px-0"
    >
      <CoverPage
        accentColor="sage"
        title="Screen-Free Learning Companions for Children Aged 1–8"
        subtitle={
          <div className="mt-6 w-fit mx-auto md:mx-0">
            <StickyNote color="yellow" tilt="right" className="text-center font-sans px-6 py-4">
              <p className="font-semibold text-ink-charcoal text-base">Trusted by 600+ families</p>
              <p className="text-[#FFB800] text-lg leading-tight mt-1">
                ★★★★★ <span className="text-ink-medium text-sm font-medium">4.9</span>
              </p>
              <p className="text-xs text-ink-light mt-1 uppercase tracking-wider">Google Rating</p>
            </StickyNote>
          </div>
        }
      >
        <div className="flex flex-col gap-4 mt-8 md:mt-0">
          <Button
            id="hero-whatsapp-cta"
            variant="whatsapp"
            size="lg"
            pulse
          >
            To Learn More
          </Button>
        </div>
      </CoverPage>

      {/* Asymmetrical handwritten note floating next to the cover on desktop */}
      <div className="hidden md:block absolute top-1/3 -right-8 2xl:right-10 z-10">
        <MarginNote color="terracotta" rotation={4} delay={0.8}>
          * We are a village <br/> for modern parents.
        </MarginNote>
      </div>
      
      {/* Scattered tags at the bottom */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 opacity-60">
        <Tag color="cream">Background Verified</Tag>
        <Tag color="sage">Bengaluru Only</Tag>
      </div>
    </SectionContainer>
  )
}
