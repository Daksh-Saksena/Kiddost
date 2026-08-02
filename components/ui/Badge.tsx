'use client'

import { cn } from '@/lib/cn'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'sage' | 'terracotta' | 'blue' | 'ochre' | 'forest' | 'neutral'
  className?: string
}

const variantMap = {
  sage:       'bg-sage/15 text-sage-dark border-sage/20',
  terracotta: 'bg-terracotta/12 text-terracotta border-terracotta/20',
  blue:       'bg-dusty-blue/12 text-dusty-blue-dark border-dusty-blue/20',
  ochre:      'bg-ochre/12 text-ochre-dark border-ochre/20',
  forest:     'bg-forest/12 text-forest border-forest/20',
  neutral:    'bg-ink-charcoal/6 text-ink-medium border-ink-charcoal/12',
}

// Small inline badge — for status labels, feature tags.
export default function Badge({ children, variant = 'neutral', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full',
        'text-[11px] font-sans font-semibold tracking-wider uppercase',
        'border',
        variantMap[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
