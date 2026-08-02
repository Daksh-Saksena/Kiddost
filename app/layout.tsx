import type { Metadata } from 'next'
import { Playfair_Display, Inter, Caveat } from 'next/font/google'
import './globals.css'

// ── Editorial serif for all headings
const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

// ── Clean sans-serif for body text
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

// ── Handwriting font for annotations and sticky notes
const caveat = Caveat({
  variable: '--font-caveat',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'KidDost — Circle of Trust | At-Home Childcare in Bengaluru',
    template: '%s | KidDost',
  },
  description:
    'KidDost brings verified, warm, and engaging companions to your home for your child — so you can step out with confidence. Professional at-home childcare in Bengaluru.',
  keywords: [
    'childcare Bengaluru',
    'babysitter Bangalore',
    'at-home childcare',
    'verified babysitter',
    'child companion',
    'KidDost',
    'home tutor Bangalore',
    'child engagement',
  ],
  authors: [{ name: 'KidDost', url: 'https://kiddost.com' }],
  creator: 'KidDost',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://kiddost.com',
    siteName: 'KidDost',
    title: 'KidDost — Circle of Trust | At-Home Childcare in Bengaluru',
    description:
      'Verified, warm companions who come to your home and engage your child — so you get the break you deserve.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KidDost — At-Home Childcare Bengaluru',
    description: 'Verified companions for your child, at your doorstep.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      className={`${playfair.variable} ${inter.variable} ${caveat.variable}`}
    >
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  )
}
