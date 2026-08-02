'use client'

import { motion } from 'framer-motion'
import { paperSlideUp, viewportOnce } from '@/lib/motion'
import { cn } from '@/lib/cn'

interface SectionHeadingProps {
  eyebrow?: string
  heading: string
  subheading?: string
  align?: 'left' | 'center' | 'right'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  italic?: boolean
  className?: string
}

const sizeMap = {
  sm:  'text-2xl md:text-3xl',
  md:  'text-3xl md:text-4xl',
  lg:  'text-4xl md:text-5xl',
  xl:  'text-5xl md:text-6xl',
}

const alignMap = {
  left:   'text-left items-start',
  center: 'text-center items-center',
  right:  'text-right items-end',
}

export default function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = 'left',
  size = 'md',
  italic = false,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={paperSlideUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        'flex flex-col gap-3',
        alignMap[align],
        className
      )}
    >
      {eyebrow && (
        <p className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-ink-light">
          {eyebrow}
        </p>
      )}

      <h2
        className={cn(
          'font-serif font-semibold leading-[1.15] text-ink-charcoal',
          sizeMap[size],
          italic && 'italic'
        )}
      >
        {heading}
      </h2>

      {subheading && (
        <p className={cn(
          'font-sans text-ink-medium leading-relaxed max-w-xl',
          'text-base md:text-lg',
          align === 'center' && 'mx-auto'
        )}>
          {subheading}
        </p>
      )}
    </motion.div>
  )
}
