'use client'

// Decorative folded corner overlay.
// Apply to any card to give it the paper fold effect.
// The fold is rendered as a positioned CSS element.

interface FoldedCornerProps {
  size?: number
  color?: string
  position?: 'bottom-right' | 'top-right' | 'bottom-left' | 'top-left'
  className?: string
}

export default function FoldedCorner({
  size = 20,
  color = '#F5EFE0',
  position = 'bottom-right',
  className,
}: FoldedCornerProps) {
  const positionStyles: Record<string, React.CSSProperties> = {
    'bottom-right': { bottom: 0, right: 0, background: `linear-gradient(225deg, ${color} 50%, transparent 50%)` },
    'top-right':    { top: 0, right: 0,    background: `linear-gradient(135deg, transparent 50%, ${color} 50%)` },
    'bottom-left':  { bottom: 0, left: 0,  background: `linear-gradient(315deg, ${color} 50%, transparent 50%)` },
    'top-left':     { top: 0, left: 0,     background: `linear-gradient(45deg, transparent 50%, ${color} 50%)` },
  }

  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '1px',
        pointerEvents: 'none',
        zIndex: 1,
        ...positionStyles[position],
        // Subtle shadow on the fold
        boxShadow: '-1px -1px 2px rgba(44,35,25,0.10)',
      }}
    />
  )
}
