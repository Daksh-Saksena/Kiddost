// ─── KidDost Design Tokens ────────────────────────────────────────────────────
// Single source of truth for all design decisions.
// These map directly to CSS custom properties defined in globals.css.

export const colors = {
  // Paper backgrounds
  paper: {
    warm: '#FBF8F2',    // Site background
    white: '#FEFCF8',   // Cardstock
    cream: '#F5EFE0',   // Cream paper
    notebook: '#F8F6EE', // Lined notebook
    kraft: '#E8D5B0',   // Brown kraft
    tracing: 'rgba(254,252,248,0.72)', // Semi-transparent overlay
  },

  // Ink / text
  ink: {
    charcoal: '#2C2C2C',  // Primary text
    warm: '#4A4035',      // Warm dark
    medium: '#7A7060',    // Secondary text
    light: '#A89F90',     // Captions, muted
    faint: '#C9C0B0',     // Disabled
  },

  // Accent palette — all muted
  accent: {
    sage: '#8A9E8A',        // Muted sage green
    sageDark: '#6A7E6A',    // Darker sage
    terracotta: '#C4785A',  // Warm terracotta
    terracottaLight: '#E8B49A', // Terracotta tint
    blue: '#7A9BAD',        // Dusty blue
    blueDark: '#5A7B8D',    // Deeper blue
    ochre: '#C9A84C',       // Golden ochre
    ochreDark: '#A88A3C',   // Deeper ochre
    forest: '#5A7A62',      // Forest green
  },

  // Decorative / tape
  tape: {
    yellow: '#F5E8A0',     // Classic masking tape
    yellowDark: '#E8D47A', // Tape shadow edge
    blue: '#B8D4E0',       // Blue washi tape
    pink: '#E8C4C0',       // Pink tape
  },

  // Brand utility
  whatsapp: '#25D366',
  whatsappDark: '#1BA84E',

  // Borders
  border: {
    soft: 'rgba(44,35,25,0.08)',
    medium: 'rgba(44,35,25,0.14)',
    warm: 'rgba(200,180,140,0.30)',
  },
} as const

// Paper shadow presets (CSS box-shadow values)
export const shadows = {
  paperSm: '0 1px 3px rgba(44,35,25,0.08)',
  paper: '0 2px 8px rgba(44,35,25,0.10), 0 1px 2px rgba(44,35,25,0.06)',
  paperMd: '0 4px 16px rgba(44,35,25,0.12), 0 2px 4px rgba(44,35,25,0.08)',
  paperLg: '0 8px 32px rgba(44,35,25,0.14), 0 4px 8px rgba(44,35,25,0.08)',
  paperLift: '0 12px 40px rgba(44,35,25,0.18), 0 4px 8px rgba(44,35,25,0.10)',
  inset: 'inset 0 1px 3px rgba(44,35,25,0.08)',
} as const

// Paper types with their visual identity
export type PaperVariant = 'cardstock' | 'cream' | 'notebook' | 'kraft' | 'tracing'

export const paperStyles: Record<PaperVariant, {
  background: string
  border: string
  shadow: string
}> = {
  cardstock: {
    background: colors.paper.white,
    border: `1px solid ${colors.border.soft}`,
    shadow: shadows.paperMd,
  },
  cream: {
    background: colors.paper.cream,
    border: `1px solid ${colors.border.warm}`,
    shadow: shadows.paper,
  },
  notebook: {
    background: colors.paper.notebook,
    border: `1px solid rgba(180,190,200,0.30)`,
    shadow: shadows.paperSm,
  },
  kraft: {
    background: colors.paper.kraft,
    border: 'none',
    shadow: shadows.paperMd,
  },
  tracing: {
    background: colors.paper.tracing,
    border: `1px dashed ${colors.border.warm}`,
    shadow: shadows.paperSm,
  },
}

// Spacing scale (used in component sizing decisions)
export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '40px',
  '2xl': '64px',
  '3xl': '96px',
  '4xl': '128px',
} as const

// Border radius
export const radius = {
  none: '0px',
  sm: '2px',
  paper: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  full: '9999px',
} as const

// Font family tokens (matched to globals.css variables)
export const fonts = {
  serif: 'var(--font-playfair)',    // Editorial serif for headings
  sans: 'var(--font-inter)',        // Clean sans for body
  hand: 'var(--font-caveat)',       // Handwriting for annotations
} as const

// WhatsApp CTA config
export const whatsapp = {
  number: '918296756700',
  message: "Hi, could i know more?",
  // Using whatsapp:// scheme directly forces the app to open instead of the browser fallback page
  urlWithMessage: 'whatsapp://send?phone=918296756700&text=Hi%2C%20could%20i%20know%20more%3F',
} as const
