'use client'

import { motion } from 'framer-motion'
import { viewportOnce, paperSlideUp } from '@/lib/motion'
import { cn } from '@/lib/cn'
import PaperClip from '@/components/ui/PaperClip'

interface ReportCardProps {
  name: string
  subject: string
  grade: 'A+' | 'A' | 'B' | '5 Stars'
  comment: React.ReactNode
  date?: string
  className?: string
  delay?: number
}

// Mimics a school report card — perfect for reviews and testimonials
export default function ReportCard({
  name,
  subject,
  grade,
  comment,
  date = 'Current Term',
  className,
  delay = 0
}: ReportCardProps) {
  return (
    <motion.div
      variants={paperSlideUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
      className={cn(
        'relative bg-paper-notebook shadow-paper p-6 md:p-8 rounded-sm',
        'border border-border-soft',
        className
      )}
    >
      <div className="absolute top-0 right-8 -mt-3">
        <PaperClip color="silver" size="md" />
      </div>

      {/* Header section */}
      <div className="flex justify-between items-end border-b-2 border-ink-charcoal pb-3 mb-4">
        <div>
          <p className="font-serif text-xs font-bold uppercase tracking-widest text-ink-charcoal">
            KidDost Evaluation
          </p>
        </div>
        <div className="text-right">
          <p className="font-sans text-[10px] uppercase tracking-wider text-ink-medium">
            Date: <span className="font-hand text-base ml-1">{date}</span>
          </p>
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="border-b border-ink-light/40 pb-1">
          <span className="font-sans text-[10px] uppercase text-ink-light">Parent Name</span>
          <p className="font-serif text-lg text-ink-charcoal">{name}</p>
        </div>
        <div className="border-b border-ink-light/40 pb-1">
          <span className="font-sans text-[10px] uppercase text-ink-light">Subject</span>
          <p className="font-serif text-lg text-ink-charcoal">{subject}</p>
        </div>
      </div>

      {/* Grade */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full border border-ink-charcoal flex items-center justify-center bg-paper-white">
          <span className="font-serif text-2xl font-bold text-ink-charcoal">{grade}</span>
        </div>
        <div>
          <p className="font-sans text-xs uppercase tracking-widest text-ink-medium mb-1">
            Overall Rating
          </p>
          <div className="flex gap-1">
            {[1,2,3,4,5].map(i => (
              <span key={i} className="text-ochre text-xl leading-none">★</span>
            ))}
          </div>
        </div>
      </div>

      {/* Comment section — handwritten */}
      <div className="bg-paper-white border border-border-soft p-4 rounded-sm relative">
        <span className="absolute -top-2 left-4 bg-paper-white px-1 font-sans text-[10px] uppercase text-ink-light">
          Instructor Comments
        </span>
        <p className="font-hand text-xl leading-relaxed text-ink-charcoal mt-1">
          "{comment}"
        </p>
      </div>
    </motion.div>
  )
}
