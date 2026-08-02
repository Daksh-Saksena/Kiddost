'use client'

import { motion } from 'framer-motion'
import { stampReveal, viewportOnce } from '@/lib/motion'
import { cn } from '@/lib/cn'

interface RubberStampProps {
  text: string
  subtext?: string
  color?: 'terracotta' | 'sage' | 'blue' | 'ochre' | 'forest'
  size?: 'sm' | 'md' | 'lg'
  rotation?: number
  className?: string
}

const colorMap = {
  terracotta: 'border-terracotta text-terracotta',
  sage:       'border-sage text-sage',
  blue:       'border-dusty-blue text-dusty-blue',
  ochre:      'border-ochre text-ochre',
  forest:     'border-forest text-forest',
}

const sizeMap = {
  sm:  { outer: 'w-16 h-16', text: 'text-[9px]', sub: 'text-[6px]' },
  md:  { outer: 'w-24 h-24', text: 'text-[11px]', sub: 'text-[8px]' },
  lg:  { outer: 'w-32 h-32', text: 'text-[13px]', sub: 'text-[9px]' },
}

export default function RubberStamp({
  text,
  subtext,
  color = 'terracotta',
  size = 'md',
  rotation = -6,
  className,
}: RubberStampProps) {
  const { outer, text: textSize, sub } = sizeMap[size]

  return (
    <motion.div
      variants={stampReveal}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn('inline-flex items-center justify-center', outer, className)}
      style={{ rotate: `${rotation}deg` }}
      aria-label={text}
    >
      {/* Outer circle */}
      <div className={cn(
        'w-full h-full rounded-full border-[2.5px] flex flex-col items-center justify-center',
        'gap-0.5 opacity-80',
        colorMap[color]
      )}>
        {/* Inner border ring */}
        <div className={cn(
          'absolute inset-[6px] rounded-full border-[1px] opacity-50',
          `border-current`
        )} />
        <span className={cn(
          'font-serif font-semibold tracking-wide text-center leading-tight px-2',
          textSize
        )}>
          {text}
        </span>
        {subtext && (
          <span className={cn('tracking-widest uppercase font-sans', sub)}>
            {subtext}
          </span>
        )}
      </div>
    </motion.div>
  )
}
