'use client'

import { motion } from 'framer-motion'
import { paperLift } from '@/lib/motion'
import { cn } from '@/lib/cn'
import MaskingTape from '@/components/ui/MaskingTape'

interface CoverPageProps {
  eyebrow?: React.ReactNode
  title: React.ReactNode
  subtitle: React.ReactNode
  children: React.ReactNode
  className?: string
  accentColor?: 'terracotta' | 'sage' | 'ochre' | 'blue'
}

const borderColors = {
  terracotta: 'border-terracotta',
  sage: 'border-sage',
  ochre: 'border-ochre',
  blue: 'border-dusty-blue',
}

// Represents a heavy, structured cover document of a family folder
export default function CoverPage({
  eyebrow,
  title,
  subtitle,
  children,
  className,
  accentColor = 'sage'
}: CoverPageProps) {
  return (
    <motion.div
      variants={paperLift}
      initial="hidden"
      animate="visible"
      className={cn(
        // Enhance the physical sheet feel on mobile with margin and clear shadow
        'relative bg-paper-white shadow-paper-xl mx-4 my-8 md:my-0 md:mx-auto',
        'p-8 md:p-14 w-auto max-w-4xl',
        // Slight rotation to break the grid and make it look dropped on a desk
        '-rotate-1 md:rotate-0',
        'border border-ink-charcoal/10',
        className
      )}
    >
      <div className={cn("absolute inset-2 border-2 pointer-events-none", borderColors[accentColor])} aria-hidden="true" />
      
      {/* Tape holding it down - straddling the edge half on/half off */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <MaskingTape color="yellow" width="2xl" rotation={-2} />
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-10 relative z-10 pt-4">
        <div className="flex-1 flex flex-col justify-center">
          {eyebrow && (
            <p className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-ink-light mb-4">
              {eyebrow}
            </p>
          )}
          <h1 className="font-serif text-5xl md:text-7xl font-semibold text-ink-charcoal leading-[1.05] tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <div className="font-sans text-lg md:text-xl text-ink-medium leading-relaxed">
              {subtitle}
            </div>
          )}
        </div>

        <div className="md:w-1/3 flex flex-col justify-end">
          {children}
        </div>
      </div>
    </motion.div>
  )
}
