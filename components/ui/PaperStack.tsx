'use client'

import { motion } from 'framer-motion'
import { paperStack, paperLift, viewportOnce } from '@/lib/motion'
import { cn } from '@/lib/cn'

interface PaperStackProps {
  children: React.ReactNode
  className?: string
  /** Gap between stacked papers (slight offset visible) */
  spread?: 'tight' | 'loose'
}

// A visual container that stacks papers with slight rotation offsets
// creating the illusion of layered sheets.
// Use this as a parent when you want the "papers on a desk" feel.

export default function PaperStack({ children, className, spread = 'tight' }: PaperStackProps) {
  const childArray = Array.isArray(children) ? children : [children]

  return (
    <motion.div
      variants={paperStack}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        'relative',
        spread === 'loose' ? 'space-y-8' : 'space-y-4',
        className
      )}
    >
      {childArray.map((child, i) => (
        <motion.div
          key={i}
          variants={paperLift}
          // Alternate slight rotations for visual interest
          style={{ rotate: `${(i % 3 === 0 ? -0.8 : i % 3 === 1 ? 0.6 : 0)}deg` }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}
