'use client'

import { cn } from '@/lib/cn'

interface SectionContainerProps {
  children: React.ReactNode
  id?: string
  className?: string
  /** Padding variant — section spacing */
  size?: 'sm' | 'md' | 'lg' | 'xl'
  /** Max width constraint */
  width?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  /** Inner content centering */
  center?: boolean
  as?: 'section' | 'div' | 'article' | 'aside'
}

const sizeMap = {
  sm: 'py-10 md:py-16',
  md: 'py-14 md:py-20',
  lg: 'py-16 md:py-28',
  xl: 'py-20 md:py-36',
}

const widthMap = {
  sm:   'max-w-2xl',
  md:   'max-w-3xl',
  lg:   'max-w-5xl',
  xl:   'max-w-6xl',
  full: 'max-w-none',
}

// The structural wrapper for every page section.
// Provides consistent horizontal padding, vertical rhythm, max-width.
export default function SectionContainer({
  children,
  id,
  className,
  size = 'md',
  width = 'xl',
  center,
  as: Tag = 'section',
}: SectionContainerProps) {
  return (
    <Tag
      id={id}
      className={cn(
        sizeMap[size],
        'px-4 md:px-8',
        className
      )}
    >
      <div className={cn(
        'mx-auto w-full',
        widthMap[width],
        center && 'flex flex-col items-center text-center'
      )}>
        {children}
      </div>
    </Tag>
  )
}
