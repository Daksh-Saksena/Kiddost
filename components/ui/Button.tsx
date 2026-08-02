'use client'

import { motion } from 'framer-motion'
import { paperHover, paperTap } from '@/lib/motion'
import { cn } from '@/lib/cn'
import { whatsapp } from '@/lib/tokens'
import { MessageCircle, ArrowRight } from 'lucide-react'

type ButtonVariant = 'primary' | 'ghost' | 'whatsapp' | 'outline' | 'link'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  fullWidth?: boolean
  /** Pulse animation — use only for whatsapp variant on mobile */
  pulse?: boolean
  id?: string
  type?: 'button' | 'submit'
}

const sizeMap: Record<ButtonSize, string> = {
  sm:  'px-4 py-2 text-sm',
  md:  'px-6 py-3 text-sm',
  lg:  'px-8 py-4 text-base',
}

const variantMap: Record<ButtonVariant, string> = {
  primary:  'bg-ink-charcoal text-paper-white border border-ink-charcoal hover:bg-ink-warm hover:border-ink-warm',
  ghost:    'bg-transparent text-ink-charcoal border border-ink-charcoal hover:bg-ink-charcoal/6',
  outline:  'bg-transparent text-ink-medium border border-border-medium hover:border-ink-charcoal hover:text-ink-charcoal',
  whatsapp: 'bg-whatsapp text-white border border-whatsapp hover:bg-whatsapp-dark hover:border-whatsapp-dark',
  link:     'bg-transparent text-ink-medium hover:text-ink-charcoal underline underline-offset-4 px-0 py-0',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  onClick,
  className,
  icon,
  iconPosition = 'right',
  disabled,
  fullWidth,
  pulse,
  id,
  type = 'button',
}: ButtonProps) {
  const isWhatsApp = variant === 'whatsapp'
  const finalHref = isWhatsApp && !href ? whatsapp.urlWithMessage : href

  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2',
    'font-sans font-medium tracking-wide rounded-sm',
    'transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:pointer-events-none',
    sizeMap[variant === 'link' ? 'md' : size],
    variantMap[variant],
    pulse && isWhatsApp && 'whatsapp-pulse',
    fullWidth && 'w-full',
    className
  )

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      {isWhatsApp && iconPosition === 'left' && (
        <MessageCircle size={18} className="flex-shrink-0" aria-hidden="true" />
      )}
      <span>{children}</span>
      {isWhatsApp && iconPosition === 'right' && (
        <MessageCircle size={18} className="flex-shrink-0" aria-hidden="true" />
      )}
      {!isWhatsApp && variant !== 'link' && !icon && iconPosition === 'right' && (
        <ArrowRight size={15} className="flex-shrink-0 opacity-60" aria-hidden="true" />
      )}
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </>
  )

  if (finalHref) {
    return (
      <motion.a
        id={id}
        href={finalHref}
        target={isWhatsApp ? '_blank' : undefined}
        rel={isWhatsApp ? 'noopener noreferrer' : undefined}
        className={baseClasses}
        whileHover={paperHover}
        whileTap={paperTap}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      whileHover={paperHover}
      whileTap={paperTap}
    >
      {content}
    </motion.button>
  )
}
