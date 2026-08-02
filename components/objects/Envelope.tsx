'use client'

import { motion } from 'framer-motion'
import { viewportOnce, paperLift } from '@/lib/motion'
import { cn } from '@/lib/cn'
import RubberStamp from '@/components/ui/RubberStamp'

interface EnvelopeProps {
  title: string
  description: string
  action: React.ReactNode
  className?: string
}

// An envelope used for the final call to action
export default function Envelope({ title, description, action, className }: EnvelopeProps) {
  return (
    <motion.div
      variants={paperLift}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        'relative w-full max-w-3xl mx-auto shadow-paper-lg rounded-sm overflow-hidden',
        // Envelope base is kraft paper
        'bg-paper-kraft kraft-texture',
        className
      )}
    >
      {/* Top flap simulation */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 origin-top bg-paper-kraft kraft-texture border-b border-black/10 z-0"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
          boxShadow: 'inset 0 -2px 10px rgba(0,0,0,0.05)'
        }}
      />
      
      {/* Side flaps lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          background: `
            linear-gradient(to bottom right, transparent 49.5%, #000 49.5%, #000 50.5%, transparent 50.5%) top left / 50% 100% no-repeat,
            linear-gradient(to bottom left, transparent 49.5%, #000 49.5%, #000 50.5%, transparent 50.5%) top right / 50% 100% no-repeat
          `
        }}
      />

      {/* Content — floating letter inside */}
      <div className="relative z-10 pt-20 px-4 pb-8 md:pt-24 md:pb-12 md:px-12 flex flex-col items-center">
        <div className="bg-paper-white p-8 md:p-12 shadow-paper w-full max-w-xl text-center flex flex-col items-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink-charcoal mb-4">
            {title}
          </h2>
          <p className="font-sans text-base text-ink-medium mb-8 max-w-sm">
            {description}
          </p>
          {action}
          
          <div className="absolute bottom-4 right-4">
             <RubberStamp text="Express" color="terracotta" size="sm" rotation={-15} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
