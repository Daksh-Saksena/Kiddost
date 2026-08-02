'use client'

import { motion } from 'framer-motion'
import { paperRotateLeft, paperRotateRight, viewportOnce } from '@/lib/motion'
import { cn } from '@/lib/cn'

interface StickyNoteProps {
  children: React.ReactNode
  color?: 'yellow' | 'blue' | 'sage' | 'terracotta' | 'lavender'
  tilt?: 'left' | 'right' | 'none'
  className?: string
}

const colorMap = {
  yellow:    'bg-[#FFF3B0] border-[#E8D47A]',
  blue:      'bg-[#D4E8F0] border-[#B0CCE0]',
  sage:      'bg-[#D4E8D4] border-[#B0CCB0]',
  terracotta:'bg-[#F0D8D0] border-[#D8B8A8]',
  lavender:  'bg-[#E4D8F0] border-[#C8B4E0]',
}

export default function StickyNote({
  children,
  color = 'yellow',
  tilt = 'left',
  className,
}: StickyNoteProps) {
  const variants = tilt === 'left' ? paperRotateLeft : tilt === 'right' ? paperRotateRight : undefined

  return (
    <motion.div
      variants={variants}
      initial={variants ? 'hidden' : undefined}
      whileInView={variants ? 'visible' : undefined}
      viewport={viewportOnce}
      className={cn(
        'relative rounded-sm border shadow-paper p-4',
        'before:content-[""] before:absolute before:top-0 before:left-0 before:right-0',
        'before:h-6 before:bg-black/[0.04] before:rounded-t-sm',
        colorMap[color],
        className
      )}
    >
      {/* Fold shadow at top (like sticky pad binding) */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-black/[0.04] rounded-t-sm" aria-hidden="true" />
      <div className={cn("relative z-10 p-3 pt-4 h-full", className)}>
        <div className="font-hand text-lg leading-snug">
          {children}
        </div>
      </div>
    </motion.div>
  )
}
