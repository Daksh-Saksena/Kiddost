// ─── KidDost Framer Motion Presets ────────────────────────────────────────────
// All animations follow "paper physics" — calm, tactile, grounded.
// No flashy bounces, no spring overshoots.

import type { Variants, Transition } from 'framer-motion'

// ─── Shared Transitions ───────────────────────────────────────────────────────

export const springGentle: Transition = {
  type: 'spring',
  stiffness: 120,
  damping: 20,
  mass: 0.8,
}

export const springSnap: Transition = {
  type: 'spring',
  stiffness: 200,
  damping: 24,
  mass: 0.6,
}

export const easeOut: Transition = {
  duration: 0.4,
  ease: [0.25, 0.46, 0.45, 0.94],
}

export const easeOutSlow: Transition = {
  duration: 0.6,
  ease: [0.25, 0.46, 0.45, 0.94],
}

// ─── Paper Lift ───────────────────────────────────────────────────────────────
// Card floats up gently from below, like being lifted off a stack.

export const paperLift: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
    scale: 0.99,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: springGentle,
  },
}

// ─── Paper Slide ──────────────────────────────────────────────────────────────
// Text / content slides in from left or bottom.

export const paperSlideUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: easeOut,
  },
}

export const paperSlideLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: easeOut,
  },
}

export const paperSlideRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: easeOut,
  },
}

// ─── Paper Stack ──────────────────────────────────────────────────────────────
// Stagger children like laying papers down one by one.

export const paperStack: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
}

// Use paperLift or paperSlideUp for children with paperStack parent.

// ─── Paper Unfold ─────────────────────────────────────────────────────────────
// Unfolds from top edge, like opening a folded note.

export const paperUnfold: Variants = {
  hidden: {
    scaleY: 0.92,
    opacity: 0,
    transformOrigin: 'top',
  },
  visible: {
    scaleY: 1,
    opacity: 1,
    transformOrigin: 'top',
    transition: springGentle,
  },
}

// ─── Paper Rotate ─────────────────────────────────────────────────────────────
// Subtle rotation on decorative elements (tape, clip, sticky note).

export const paperRotateLeft: Variants = {
  hidden: { opacity: 0, rotate: 4, scale: 0.95 },
  visible: {
    opacity: 1,
    rotate: -1.5,
    scale: 1,
    transition: springGentle,
  },
}

export const paperRotateRight: Variants = {
  hidden: { opacity: 0, rotate: -4, scale: 0.95 },
  visible: {
    opacity: 1,
    rotate: 1.5,
    scale: 1,
    transition: springGentle,
  },
}

// ─── Stamp Reveal ────────────────────────────────────────────────────────────
// Stamp appears with a slight press effect.

export const stampReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.3,
    rotate: -8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: -6,
    transition: springSnap,
  },
}

// ─── Fade In ─────────────────────────────────────────────────────────────────
// Simple opacity fade — used for backgrounds and subtle elements.

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: easeOutSlow,
  },
}

// ─── Paper Hover ─────────────────────────────────────────────────────────────
// For whileHover prop — gentle paper lift on interaction.

export const paperHover = {
  y: -3,
  rotate: 0.3,
  transition: {
    type: 'spring' as const,
    stiffness: 300,
    damping: 20,
  },
}

// ─── Paper Tap ────────────────────────────────────────────────────────────────
// For whileTap — press down slightly.

export const paperTap = {
  y: 0,
  scale: 0.98,
  transition: { duration: 0.1, type: 'tween' as const },
}

// ─── Float ────────────────────────────────────────────────────────────────────
// Slow oscillation for decorative elements (clips, tape).
// Use with animate prop directly, not variants.

export const floatAnimation = {
  y: [0, -4, 0],
  rotate: [0, 0.5, 0],
  transition: {
    duration: 4,
    ease: 'easeInOut' as const,
    repeat: Infinity,
    repeatType: 'loop' as const,
    type: 'tween' as const,
  },
}

// ─── Viewport Options ─────────────────────────────────────────────────────────
// Shared viewport trigger config — enter once when 20% visible.

export const viewportOnce = {
  once: true,
  margin: '-60px 0px',
}
