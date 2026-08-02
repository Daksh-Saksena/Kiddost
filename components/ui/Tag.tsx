'use client'

import { cn } from '@/lib/cn'

interface TagProps {
  children: React.ReactNode
  color?: 'cream' | 'kraft' | 'sage' | 'terracotta' | 'blue'
  className?: string
}

const colorMap = {
  cream:      'bg-paper-cream border-border-warm text-ink-warm',
  kraft:      'bg-paper-kraft border-transparent text-ink-charcoal',
  sage:       'bg-sage/15 border-sage/30 text-sage-dark',
  terracotta: 'bg-terracotta/10 border-terracotta/25 text-terracotta',
  blue:       'bg-dusty-blue/10 border-dusty-blue/25 text-dusty-blue-dark',
}

// Paper hang tag — a small label with a punched hole.
export default function Tag({ children, color = 'cream', className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 pl-1.5 pr-3 py-1',
        'border rounded-sm text-xs font-sans font-medium tracking-wide',
        'shadow-paper-sm',
        colorMap[color],
        className
      )}
    >
      {/* Punched hole */}
      <span
        aria-hidden="true"
        className="w-2.5 h-2.5 rounded-full border border-current opacity-40 flex-shrink-0"
      />
      {children}
    </span>
  )
}
