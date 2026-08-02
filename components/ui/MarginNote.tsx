'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

interface MarginNoteProps {
  children: React.ReactNode
  color?: 'charcoal' | 'terracotta' | 'sage' | 'blue'
  rotation?: number
  className?: string
  delay?: number
}

const colorMap = {
  charcoal: 'text-ink-charcoal',
  terracotta: 'text-terracotta',
  sage: 'text-sage',
  blue: 'text-dusty-blue',
}

// A handwritten note meant to overlap or sit beside formal documents.
// Adds a human, editorial touch.
export default function MarginNote({
  children,
  color = 'charcoal',
  rotation = -2,
  className,
  delay = 0.3
}: MarginNoteProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay, duration: 0.4, ease: 'easeOut' }}
      className={cn(
        'font-hand text-xl leading-tight',
        colorMap[color],
        className
      )}
      style={{ rotate: `${rotation}deg` }}
      aria-hidden="true" // Usually decorative, screen readers read the main content
    >
      {children}
    </motion.div>
  )
}
