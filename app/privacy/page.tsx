import fs from 'fs'
import path from 'path'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import SectionContainer from '@/components/layout/SectionContainer'
import PaperCard from '@/components/ui/PaperCard'

export default function PrivacyPolicyPage() {
  const content = fs.readFileSync(path.join(process.cwd(), 'privacy.txt'), 'utf8')
  
  return (
    <>
      <Navigation />
      <main className="pt-32 pb-24 bg-paper-cream min-h-screen">
        <SectionContainer>
          <PaperCard className="p-8 md:p-16 max-w-4xl mx-auto shadow-paper-lg">
            <div className="prose prose-stone max-w-none whitespace-pre-wrap font-sans text-sm md:text-base text-ink-charcoal">
              {content}
            </div>
          </PaperCard>
        </SectionContainer>
      </main>
      <Footer />
    </>
  )
}
