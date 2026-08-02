'use client'

import { cn } from '@/lib/cn'

interface MaskingTapeProps {
  color?: 'yellow' | 'blue' | 'pink'
  width?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  rotation?: number
  className?: string
  children?: React.ReactNode
}

const colorMap = {
  yellow: 'bg-tape-yellow',
  blue:   'bg-tape-blue',
  pink:   'bg-tape-pink',
}

const widthMap = {
  sm:   'w-10',
  md:   'w-16',
  lg:   'w-24',
  xl:   'w-32',
  '2xl': 'w-48',
  full: 'w-full',
}

// Masking tape strip — can be positioned over cards, headings, images.
// Decorative only. One per component rule.
export default function MaskingTape({
  color = 'yellow',
  width = 'md',
  rotation = 0,
  className,
  children,
}: MaskingTapeProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'h-[20px] rounded-[2px] opacity-95',
        'shadow-[inset_0_1px_2px_rgba(0,0,0,0.1),inset_0_-1px_1px_rgba(255,255,255,0.4),0_2px_5px_rgba(0,0,0,0.15)]',
        // Stronger tape texture via repeating gradient
        'bg-[repeating-linear-gradient(90deg,transparent,transparent_3px,rgba(0,0,0,0.04)_3px,rgba(0,0,0,0.04)_4px)]',
        colorMap[color],
        widthMap[width],
        className
      )}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {children}
    </div>
  )
}
