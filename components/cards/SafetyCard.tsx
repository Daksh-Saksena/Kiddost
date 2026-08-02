'use client'

import PaperCard from '@/components/ui/PaperCard'
import { cn } from '@/lib/cn'
import { CheckCircle } from 'lucide-react'

interface SafetyCardProps {
  icon: React.ReactNode
  title: string
  description: string
  highlight?: string
  color?: 'sage' | 'blue' | 'forest' | 'terracotta'
  className?: string
}

const colorMap = {
  sage:       { border: 'border-l-sage',       icon: 'text-sage',        bg: 'bg-sage/8' },
  blue:       { border: 'border-l-dusty-blue', icon: 'text-dusty-blue',  bg: 'bg-dusty-blue/8' },
  forest:     { border: 'border-l-forest',     icon: 'text-forest',      bg: 'bg-forest/8' },
  terracotta: { border: 'border-l-terracotta', icon: 'text-terracotta',  bg: 'bg-terracotta/8' },
}

// Used for trust / safety features — verified checks, background screening, etc.
export default function SafetyCard({
  icon,
  title,
  description,
  highlight,
  color = 'sage',
  className,
}: SafetyCardProps) {
  const { border, icon: iconColor, bg } = colorMap[color]

  return (
    <PaperCard
      variant="cardstock"
      hoverable
      className={cn(
        'p-5 border-l-[3px] flex gap-4',
        border,
        className
      )}
    >
      {/* Icon container */}
      <div className={cn(
        'w-10 h-10 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5',
        bg, iconColor
      )}>
        {icon}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1.5 flex-1">
        <h4 className="font-serif text-base font-semibold text-ink-charcoal leading-tight">
          {title}
        </h4>
        <p className="font-sans text-sm text-ink-medium leading-relaxed">
          {description}
        </p>
        {highlight && (
          <div className="flex items-center gap-1.5 mt-1">
            <CheckCircle size={13} className={cn('flex-shrink-0', iconColor)} aria-hidden="true" />
            <span className={cn('font-sans text-xs font-medium', iconColor)}>
              {highlight}
            </span>
          </div>
        )}
      </div>
    </PaperCard>
  )
}
