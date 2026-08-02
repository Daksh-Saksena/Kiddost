'use client'

import PaperCard from '@/components/ui/PaperCard'
import { cn } from '@/lib/cn'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  accent?: 'terracotta' | 'sage' | 'blue' | 'ochre' | 'forest'
  tags?: string[]
  className?: string
}

const accentMap = {
  terracotta: { text: 'text-terracotta', border: 'border-terracotta/20', bg: 'bg-terracotta/8' },
  sage:       { text: 'text-sage-dark',  border: 'border-sage/20',       bg: 'bg-sage/8' },
  blue:       { text: 'text-dusty-blue-dark', border: 'border-dusty-blue/20', bg: 'bg-dusty-blue/8' },
  ochre:      { text: 'text-ochre-dark', border: 'border-ochre/20',      bg: 'bg-ochre/8' },
  forest:     { text: 'text-forest',     border: 'border-forest/20',     bg: 'bg-forest/8' },
}

export default function ServiceCard({
  icon,
  title,
  description,
  accent = 'terracotta',
  tags,
  className,
}: ServiceCardProps) {
  const { text, border, bg } = accentMap[accent]

  return (
    <PaperCard
      variant="cardstock"
      hoverable
      folded
      className={cn('relative p-6 flex flex-col gap-4', className)}
    >
      {/* Icon */}
      <div className={cn(
        'w-12 h-12 rounded-md flex items-center justify-center',
        bg, text
      )}>
        {icon}
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2">
        <h3 className="font-serif text-lg font-semibold text-ink-charcoal leading-tight">
          {title}
        </h3>
        <p className="font-sans text-sm text-ink-medium leading-relaxed">
          {description}
        </p>
      </div>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {tags.map(tag => (
            <span
              key={tag}
              className={cn(
                'inline-block px-2 py-0.5 text-[10px] font-sans font-medium tracking-wide',
                'rounded-sm border',
                border, text
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </PaperCard>
  )
}
