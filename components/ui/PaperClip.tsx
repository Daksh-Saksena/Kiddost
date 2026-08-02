'use client'

import { motion } from 'framer-motion'
import { floatAnimation } from '@/lib/motion'
import { cn } from '@/lib/cn'

interface PaperClipProps {
  color?: 'silver' | 'gold' | 'rose'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  float?: boolean
}

const sizeMap = { sm: 28, md: 40, lg: 52 }

const colorMap = {
  silver: { stroke: '#9A9590', highlight: '#C8C4BE' },
  gold:   { stroke: '#B8943C', highlight: '#D4B05A' },
  rose:   { stroke: '#B87870', highlight: '#D49890' },
}

// SVG paper clip drawn with strokes — no fills, just wire.
export default function PaperClip({
  color = 'silver',
  size = 'md',
  className,
  float = true,
}: PaperClipProps) {
  const h = sizeMap[size]
  const w = h * 0.45
  const { stroke, highlight } = colorMap[color]

  const clipSvg = (
    <svg
      width={w}
      height={h}
      viewBox="0 0 18 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer loop */}
      <path
        d="M14 6 C14 2.5, 4 2.5, 4 6 L4 34 C4 37.5, 14 37.5, 14 34 L14 10 C14 7.5, 6 7.5, 6 10 L6 30 C6 32, 12 32, 12 30 L12 14"
        stroke={stroke}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Highlight sheen */}
      <path
        d="M13 6 C13 3, 5 3, 5 6"
        stroke={highlight}
        strokeWidth="0.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
    </svg>
  )

  if (float) {
    return (
      <motion.div
        className={cn('inline-block', className)}
        animate={floatAnimation}
        aria-hidden="true"
      >
        {clipSvg}
      </motion.div>
    )
  }

  return (
    <div className={cn('inline-block', className)} aria-hidden="true">
      {clipSvg}
    </div>
  )
}
