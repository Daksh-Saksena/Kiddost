import SectionContainer from '@/components/layout/SectionContainer'
import PaperCard from '@/components/ui/PaperCard'
import Tag from '@/components/ui/Tag'

export default function WhenToBookSection() {
  const situations = [
    'Work-from-home meetings',
    'Office or doctor appointments',
    'Errands and personal commitments',
    'After-school hours',
    'School holidays',
    'Reduced screen-time routines',
    'Homework and reading time',
    'Playdates and small-group activities',
    'Days when regular family support is unavailable'
  ]

  return (
    <SectionContainer id="when-to-book" size="md" className="relative z-10 pb-4">
      <PaperCard className="p-8 md:p-12 w-full max-w-4xl mx-auto border-t-[8px] border-terracotta">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink-charcoal mb-4">
          When Can You Book a KidDost?
        </h2>
        <p className="font-sans text-lg text-ink-medium leading-relaxed mb-8 border-b border-border-soft pb-6">
          Whether you need a few focused work hours or regular engagement for your child, KidDost can support you during:
        </p>
        
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {situations.map((sit, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-terracotta text-lg mt-[-2px]">•</span>
              <span className="font-sans text-base text-ink-charcoal">{sit}</span>
            </li>
          ))}
        </ul>
      </PaperCard>
    </SectionContainer>
  )
}
