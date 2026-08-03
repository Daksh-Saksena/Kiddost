'use client'

import SectionContainer from '@/components/layout/SectionContainer'
import PaperCard from '@/components/ui/PaperCard'
import MarginNote from '@/components/ui/MarginNote'

export default function HowItWorksSection() {
  const steps = [
    {
      title: 'Tell Us About Your Child',
      description: 'Share your child’s age, interests, location and preferred timing.'
    },
    {
      title: 'Book an Introductory Session',
      description: 'Experience how a KidDost member connects and engages with your child.'
    },
    {
      title: 'We Plan Age-Appropriate Activities',
      description: 'Sessions may include stories, puzzles, art, movement, brain games and learning support.'
    },
    {
      title: 'Choose Flexible Sessions or a Package',
      description: 'Book occasional support or regular weekly sessions depending on your requirement.'
    }
  ]

  return (
    <SectionContainer id="how-it-works" size="lg" className="relative z-10">
      <div className="absolute top-16 -left-2 md:-left-12 z-20 hidden md:block">
        <MarginNote color="terracotta" rotation={-5}>
          Simple & seamless!
        </MarginNote>
      </div>

      <PaperCard variant="notebook" animate={true} className="p-8 md:p-12 md:px-16 w-full max-w-3xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-ink-charcoal mb-10 text-center">
          How KidDost Works
        </h2>
        
        <div className="flex flex-col gap-10">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-4 md:gap-8 items-start relative">
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute left-6 top-14 bottom-[-40px] w-px bg-dusty-blue/30" />
              )}
              <div className="shrink-0 relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-[2px] border-dusty-blue bg-paper-white shadow-paper-sm">
                <span className="font-hand text-3xl font-bold text-dusty-blue-dark">{idx + 1}</span>
              </div>
              <div className="pt-2">
                <h3 className="font-serif text-2xl text-ink-charcoal mb-2">{step.title}</h3>
                <p className="font-sans text-base text-ink-medium leading-relaxed max-w-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </PaperCard>
    </SectionContainer>
  )
}
