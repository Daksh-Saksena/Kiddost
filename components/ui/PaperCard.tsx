'use client'

import { motion } from 'framer-motion'
import { paperLift, paperHover, paperTap, viewportOnce } from '@/lib/motion'
import { cn } from '@/lib/cn'
import type { PaperVariant } from '@/lib/tokens'

interface PaperCardProps {
  variant?: PaperVariant
  className?: string
  children: React.ReactNode
  /** Animate on scroll into view */
  animate?: boolean
  /** Enable hover lift effect */
  hoverable?: boolean
  /** Slight rotation for decorative placement */
  rotate?: number
  /** CSS fold corner decoration */
  folded?: boolean
  style?: React.CSSProperties
}

const variantClasses: Record<PaperVariant, string> = {
  cardstock: 'bg-paper-white border border-border-soft shadow-paper-md paper-texture',
  cream:     'bg-paper-cream border border-border-warm shadow-paper paper-texture',
  notebook:  'bg-paper-notebook border border-border-soft shadow-paper-sm paper-lines',
  kraft:     'bg-paper-kraft shadow-paper-md kraft-texture',
  tracing:   'bg-paper-white/70 border border-dashed border-border-warm shadow-paper-sm backdrop-blur-sm',
}

export default function PaperCard({
  variant = 'cardstock',
  className,
  children,
  animate = true,
  hoverable = false,
  rotate = 0,
  folded = false,
  style,
}: PaperCardProps) {
  const baseStyle: React.CSSProperties = {
    borderRadius: '4px',
    rotate: rotate ? `${rotate}deg` : undefined,
    ...style,
  }

  if (animate) {
    return (
      <motion.div
        variants={paperLift}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        whileHover={hoverable ? paperHover : undefined}
        whileTap={hoverable ? paperTap : undefined}
        style={baseStyle}
        className={cn(
          variantClasses[variant],
          folded && 'fold-corner',
          className
        )}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div
      style={baseStyle}
      className={cn(
        variantClasses[variant],
        folded && 'fold-corner',
        className
      )}
    >
      {children}
    </div>
  )
}
