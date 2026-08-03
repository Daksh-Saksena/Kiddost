'use client'

import SectionContainer from '@/components/layout/SectionContainer'
import CataloguePage from '@/components/objects/CataloguePage'
import ReportCard from '@/components/objects/ReportCard'
import Certificate from '@/components/objects/Certificate'
import IndexCard from '@/components/objects/IndexCard'
import MarginNote from '@/components/ui/MarginNote'
import StickyNote from '@/components/ui/StickyNote'
import Tag from '@/components/ui/Tag'
import Badge from '@/components/ui/Badge'
import FoldedCorner from '@/components/ui/FoldedCorner'
import Divider from '@/components/ui/Divider'

// ─────────────────────────────────────────────────────────────────────────────
// KidDost Physical Object Library Showcase
// Demonstrates the editorial, asymmetrical layout using physical document models.
// ─────────────────────────────────────────────────────────────────────────────

export default function ComponentShowcase() {
  return (
    <div className="flex flex-col overflow-hidden pb-32">

      {/* ── 1. The Catalogue Page (Services) ── */}
      <SectionContainer id="showcase-catalogue" size="lg" className="relative z-10">
        <CataloguePage
          title="Who is a KidDost"
          subtitle="A KidDost member is a trained female learning companion who engages children through age-appropriate play, conversation, stories, creative activities, puzzles, movement and learning support. Our members are selected for their warmth, communication skills and ability to connect meaningfully with children."
          pageNumber="02"
        >
          {/* Feature Highlights Banner */}
          <div className="col-span-1 md:col-span-2 flex flex-col sm:flex-row flex-wrap gap-3 mb-2 border-b border-ink-light/20 pb-8">
            <Badge variant="sage">✓ Background-verified members</Badge>
            <Badge variant="terracotta">✓ Activities planned by age</Badge>
            <Badge variant="blue">✓ Flexible hourly bookings</Badge>
          </div>
          
          <div className="col-span-1 md:col-span-2 mt-2 mb-8">
            <div className="bg-tape-yellow/30 p-6 rounded-sm relative shadow-paper-sm border border-tape-yellow/50">
              {/* Tape decoration */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-tape-pink/60 rotate-2 opacity-80 backdrop-blur-sm" />
              <p className="font-hand text-3xl text-ink-charcoal text-center leading-relaxed">
                "KidDost is <span className="text-terracotta underline decoration-wavy underline-offset-4">not</span> a nanny service. Our focus is active, screen-free engagement and learning through play."
              </p>
            </div>
          </div>

        </CataloguePage>

        {/* Scattered elements around the catalogue */}
        <div className="absolute top-1/4 -left-12 z-0 hidden lg:block">
          <StickyNote color="yellow" tilt="right">
            Parents love the tutoring!
          </StickyNote>
        </div>
      </SectionContainer>

      <Divider variant="thread" />

      {/* ── 2. The Certificate (Safety) ── */}
      <SectionContainer id="showcase-safety" size="lg" className="relative z-20">
        <div className="relative">
          <Certificate
            title="Circle of Trust Verification"
            awardedTo="KidDost Companions"
            description="Every KidDost member undergoes a rigorous background screening, including thorough identity and reference checks, before joining our network."
            date="2024–2025"
          />

          {/* Margin note annotating the certificate */}
          <div className="absolute top-10 -right-8 md:-right-24 z-30 hidden md:block">
            <MarginNote color="charcoal" rotation={6}>
              Safety is our<br/>first promise.
            </MarginNote>
          </div>
        </div>
      </SectionContainer>

      {/* ── 3. Desk Scatter (Reviews & FAQs) ── */}
      <SectionContainer id="showcase-scatter" size="xl" className="relative z-30">
        <div className="flex flex-col gap-12 md:block md:relative md:h-[600px] w-full items-center">
          
          {/* Document 1: Report Card (Review) */}
          <div className="relative md:absolute md:top-0 md:left-10 w-full max-w-[450px] md:w-[450px] z-10 self-start" style={{ rotate: '-2deg' }}>
            <ReportCard
              name="Priya S."
              subject="Child Engagement"
              grade="5 Stars"
              comment="KidDost has been a lifesaver! The companion was so patient and engaging. My 4-year-old usually takes time to warm up, but they were playing together in 10 minutes. Highly recommend!"
              date="1 week ago"
            />
          </div>

          {/* Document 2: Index Card (FAQ) */}
          <div className="relative md:absolute md:top-20 md:right-10 w-full max-w-[350px] md:w-[350px] z-20 self-end">
            <IndexCard
              heading="What if my child doesn't mingle?"
              content={
                <p>
                  It's normal! Our companions are trained to be patient. We usually spend the first 20 minutes doing low-pressure parallel activities until your child feels comfortable.
                </p>
              }
              rotation={3}
            />
          </div>

          {/* Document 3: Another Report Card slightly tucked under */}
          <div className="relative md:absolute md:top-[280px] md:left-1/3 w-full max-w-[450px] md:w-[400px] z-15 self-center" style={{ rotate: '1deg' }}>
            <ReportCard
              name="Rahul M."
              subject="Home Tutoring"
              grade="5 Stars"
              comment="Excellent tutoring service. The tutor understood exactly where my daughter was struggling in Math and made the sessions interactive and fun. We are seeing great progress."
              date="3 weeks ago"
            />
          </div>

          {/* Scattered decorative note */}
          <div className="absolute bottom-10 right-1/4 z-30 hidden md:block">
            <StickyNote color="blue" tilt="left">
              Follow up with Rahul!
            </StickyNote>
          </div>
        </div>
      </SectionContainer>

    </div>
  )
}
