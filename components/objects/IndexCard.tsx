'use client'

import { motion } from 'framer-motion'
import { paperLift } from '@/lib/motion'
import { cn } from '@/lib/cn'

interface IndexCardProps {
  heading: string
  content: React.ReactNode
  className?: string
  rotation?: number
}

// Small, structured card with a red top rule like a classic index card
export default function IndexCard({
  heading,
  content,
  className,
  rotation = 0
}: IndexCardProps) {
  return (
    <motion.div
      variants={paperLift}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={cn(
        'bg-paper-white shadow-paper-sm w-full p-6 pb-8 relative rounded-sm',
        'border border-border-soft',
        className
      )}
      style={{ rotate: `${rotation}deg` }}
    >
      {/* Top red line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-terracotta/60" />
      
      {/* Faint blue ruling lines in background */}
      <div 
        className="absolute top-10 left-0 right-0 bottom-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'linear-gradient(transparent 95%, #7A9BAD 95%)',
          backgroundSize: '100% 28px'
        }}
      />

      <h4 className="font-serif text-lg font-semibold text-ink-charcoal mb-4 relative z-10">
        {heading}
      </h4>
      <div className="font-sans text-sm text-ink-medium leading-relaxed relative z-10">
        {content}
      </div>
    </motion.div>
  )
}
