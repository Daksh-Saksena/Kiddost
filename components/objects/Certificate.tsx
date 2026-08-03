'use client'

import { motion } from 'framer-motion'
import { viewportOnce, paperSlideUp } from '@/lib/motion'
import { cn } from '@/lib/cn'
import RubberStamp from '@/components/ui/RubberStamp'

interface CertificateProps {
  title: string
  awardedTo: string
  description: React.ReactNode
  date?: string
  className?: string
}

// An official looking document for Verification/Safety
export default function Certificate({
  title,
  awardedTo,
  description,
  date = new Date().getFullYear().toString(),
  className
}: CertificateProps) {
  return (
    <motion.div
      variants={paperSlideUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        'relative bg-paper-white shadow-paper-md w-full max-w-3xl mx-auto p-4 md:p-6',
        className
      )}
    >
      {/* Inner border — intricate certificate style */}
      <div className="border-[3px] border-double border-dusty-blue/40 p-8 pb-20 md:p-12 md:pb-24 text-center h-full relative">
        <h3 className="font-serif text-3xl md:text-4xl font-semibold text-ink-charcoal mb-2">
          {title}
        </h3>
        
        <div className="flex justify-center mt-4 mb-6">
          <div className="h-px w-24 bg-dusty-blue/30" />
        </div>

        <p className="font-serif text-2xl text-dusty-blue italic mb-6">
          {awardedTo}
        </p>

        <p className="font-sans text-sm md:text-base text-ink-medium leading-relaxed max-w-lg mx-auto mb-10">
          {description}
        </p>

        {/* Footer of certificate */}
        <div className="flex justify-between items-end mt-8 border-t border-dusty-blue/20 pt-4">
          <div className="text-left">
            <span className="font-sans text-[10px] uppercase tracking-wider text-ink-light block mb-1">
              Valid For
            </span>
            <span className="font-hand text-xl text-ink-charcoal">{date}</span>
          </div>
          
          <div className="text-right">
             <span className="font-sans text-[10px] uppercase tracking-wider text-ink-light block mb-1">
              Authorized By
            </span>
            <span className="font-hand text-xl text-ink-charcoal">KidDost Trust Team</span>
          </div>
        </div>

        {/* Official Stamp */}
        <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2">
          <RubberStamp text="Background" subtext="Verified" color="blue" size="md" rotation={4} />
        </div>
      </div>
    </motion.div>
  )
}
