'use client'

import PaperCard from '@/components/ui/PaperCard'
import { Star } from 'lucide-react'
import { cn } from '@/lib/cn'

interface ReviewCardProps {
  review: string
  parentName: string
  childInfo?: string
  rating?: number
  location?: string
  className?: string
}

export default function ReviewCard({
  review,
  parentName,
  childInfo,
  rating = 5,
  location,
  className,
}: ReviewCardProps) {
  return (
    <PaperCard
      variant="cardstock"
      hoverable
      className={cn('p-6 flex flex-col gap-4', className)}
    >
      {/* Stars */}
      <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < rating ? 'fill-ochre text-ochre' : 'text-ink-faint'}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Review text */}
      <p className="font-sans text-sm leading-relaxed text-ink-warm flex-1">
        &ldquo;{review}&rdquo;
      </p>

      {/* Author */}
      <div className="border-t border-border-soft pt-4 flex items-center justify-between">
        <div>
          <p className="font-sans text-sm font-semibold text-ink-charcoal">
            {parentName}
          </p>
          {childInfo && (
            <p className="font-sans text-xs text-ink-light mt-0.5">{childInfo}</p>
          )}
        </div>
        {location && (
          <p className="font-sans text-xs text-ink-faint">{location}</p>
        )}
      </div>
    </PaperCard>
  )
}
