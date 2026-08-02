'use client'

import PaperCard from '@/components/ui/PaperCard'
import { cn } from '@/lib/cn'

interface QuoteCardProps {
  quote: string
  attribution?: string
  variant?: 'cream' | 'cardstock' | 'notebook'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function QuoteCard({
  quote,
  attribution,
  variant = 'cream',
  size = 'md',
  className,
}: QuoteCardProps) {
  const textSizes = {
    sm: 'text-base',
    md: 'text-lg md:text-xl',
    lg: 'text-xl md:text-2xl',
  }

  return (
    <PaperCard
      variant={variant}
      className={cn('relative p-6 md:p-8', className)}
    >
      {/* Opening quotation mark */}
      <span
        aria-hidden="true"
        className="absolute top-4 left-6 font-serif text-6xl leading-none text-ink-faint select-none"
      >
        &ldquo;
      </span>

      <blockquote className="pt-8">
        <p className={cn(
          'font-serif italic text-ink-warm leading-relaxed',
          textSizes[size]
        )}>
          {quote}
        </p>

        {attribution && (
          <footer className="mt-4">
            <cite className="not-italic font-sans text-sm font-medium text-ink-light tracking-wide">
              — {attribution}
            </cite>
          </footer>
        )}
      </blockquote>
    </PaperCard>
  )
}
