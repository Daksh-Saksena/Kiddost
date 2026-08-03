'use client'

import { motion } from 'framer-motion'
import { paperLift } from '@/lib/motion'
import { cn } from '@/lib/cn'

interface CataloguePageProps {
  title: string
  subtitle?: string
  children: React.ReactNode
  className?: string
  pageNumber?: string
}

// A layout mimicking a printed catalogue or brochure page for Services
export default function CataloguePage({
  title,
  subtitle,
  children,
  className,
  pageNumber = '01'
}: CataloguePageProps) {
  return (
    <motion.div
      variants={paperLift}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className={cn(
        'bg-paper-cream shadow-paper w-full max-w-5xl mx-auto',
        // Brochure look — tall, generous padding
        'p-8 md:p-16 relative',
        className
      )}
    >
      {/* Page number annotation */}
      {pageNumber && (
        <div className="absolute top-8 right-8 border border-ink-charcoal/20 w-10 h-10 rounded-full flex items-center justify-center">
          <span className="font-serif text-sm font-semibold text-ink-charcoal">{pageNumber}</span>
        </div>
      )}

      <div className="mb-12 max-w-2xl pr-16 md:pr-20">
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-ink-charcoal mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="font-sans text-lg text-ink-medium leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {children}
      </div>
    </motion.div>
  )
}
