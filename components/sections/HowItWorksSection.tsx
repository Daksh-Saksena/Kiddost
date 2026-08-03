'use client'

import SectionContainer from '@/components/layout/SectionContainer'
import PaperCard from '@/components/ui/PaperCard'
import MarginNote from '@/components/ui/MarginNote'
import PaperClip from '@/components/ui/PaperClip'

const colorMap = {
  'dusty-blue': 'border-dusty-blue bg-dusty-blue/10 text-dusty-blue-dark',
  'terracotta': 'border-terracotta bg-terracotta/10 text-terracotta',
  'sage':       'border-sage bg-sage/10 text-sage-dark',
  'ochre':      'border-ochre bg-ochre/10 text-ochre-dark',
}

export default function HowItWorksSection() {
  const steps = [
    {
      title: 'Tell Us About Your Child',
      description: 'Share your child’s age, interests, location and preferred timing.',
      colorKey: 'dusty-blue' as keyof typeof colorMap
    },
    {
      title: 'Book an Introductory Session',
      description: 'Experience how a KidDost member connects and engages with your child.',
      colorKey: 'terracotta' as keyof typeof colorMap
    },
    {
      title: 'We Plan Age-Appropriate Activities',
      description: 'Sessions may include stories, puzzles, art, movement, brain games and learning support.',
      colorKey: 'sage' as keyof typeof colorMap
    },
    {
      title: 'Choose Flexible Sessions or a Package',
      description: 'Book occasional support or regular weekly sessions depending on your requirement.',
      colorKey: 'ochre' as keyof typeof colorMap
    }
  ]

  return (
    <SectionContainer id="how-it-works" size="lg" className="relative z-10">
      <div className="absolute top-16 -left-2 md:-left-12 z-20 hidden md:block">
        <MarginNote color="terracotta" rotation={-5}>
          Simple & seamless!
        </MarginNote>
      </div>

      <PaperCard variant="notebook" animate={true} className="p-8 md:p-12 md:px-16 w-full max-w-3xl mx-auto relative" rotate={-1}>
        <div className="absolute top-0 right-10 -mt-4">
          <PaperClip color="gold" size="lg" />
        </div>

        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-ink-charcoal mb-12 text-center">
          How KidDost Works
        </h2>
        
        <div className="flex flex-col gap-10">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-4 md:gap-8 items-start relative group">
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute left-6 top-14 bottom-[-40px] w-px bg-border-medium" />
              )}
              <div className={`shrink-0 relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-[2px] shadow-paper-sm transition-transform group-hover:scale-110 duration-300 ${colorMap[step.colorKey]}`}>
                <span className="font-hand text-3xl font-bold">{idx + 1}</span>
              </div>
              <div className="pt-1">
                <h3 className="font-hand text-3xl md:text-4xl text-ink-charcoal mb-1">{step.title}</h3>
                <p className="font-sans text-base text-ink-medium leading-relaxed max-w-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </PaperCard>
    </SectionContainer>
  )
}
