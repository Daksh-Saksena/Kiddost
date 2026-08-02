'use client'

import { cn } from '@/lib/cn'

interface DividerProps {
  variant?: 'rule' | 'torn' | 'thread' | 'dots'
  color?: 'soft' | 'medium' | 'warm'
  className?: string
}

const colorMap = {
  soft:   'border-border-soft',
  medium: 'border-border-medium',
  warm:   'border-border-warm',
}

// Section dividers with four styles matching the paper-craft aesthetic.
export default function Divider({ variant = 'rule', color = 'soft', className }: DividerProps) {

  if (variant === 'rule') {
    return (
      <hr
        className={cn('border-t', colorMap[color], 'my-0', className)}
        aria-hidden="true"
      />
    )
  }

  if (variant === 'dots') {
    return (
      <div
        aria-hidden="true"
        className={cn('flex items-center justify-center gap-2 py-1', className)}
      >
        {[0, 1, 2].map(i => (
          <div
            key={i}
            className={cn(
              'w-1 h-1 rounded-full',
              i === 1 ? 'bg-ink-light' : 'bg-ink-faint'
            )}
          />
        ))}
      </div>
    )
  }

  if (variant === 'thread') {
    return (
      <div
        aria-hidden="true"
        className={cn('relative flex items-center gap-0', className)}
      >
        {/* Left rule */}
        <div className={cn('flex-1 border-t border-dashed', colorMap[color])} />
        {/* Thread knot */}
        <div className="mx-3 w-2 h-2 rounded-full bg-ink-faint/60 flex-shrink-0" />
        {/* Right rule */}
        <div className={cn('flex-1 border-t border-dashed', colorMap[color])} />
      </div>
    )
  }

  if (variant === 'torn') {
    // SVG torn paper edge
    return (
      <div aria-hidden="true" className={cn('relative h-4 overflow-hidden', className)}>
        <svg
          viewBox="0 0 400 16"
          preserveAspectRatio="none"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,8 L20,5 L40,9 L60,4 L80,8 L100,5 L120,10 L140,6 L160,8 L180,4 L200,9 L220,5 L240,8 L260,5 L280,10 L300,6 L320,8 L340,4 L360,9 L380,5 L400,8 L400,16 L0,16 Z"
            fill="rgba(44,35,25,0.06)"
          />
        </svg>
      </div>
    )
  }

  return null
}
