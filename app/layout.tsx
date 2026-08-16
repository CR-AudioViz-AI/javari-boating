// app/layout.tsx
import type { Metadata } from 'next'
export const dynamic = 'force-dynamic'
export const metadata: Metadata = {
  metadataBase: new URL('https://boating.craudiovizai.com'),
  // 2026-08-16: no canonical was declared, so any duplicate path —
  // trailing slash, query string, preview host — competed with itself.
  alternates: { canonical: '/' },
  icons: {
    icon: [{ url: '/favicon.png', sizes: '32x32' }, { url: '/icon-512.png', sizes: '512x512' }],
    apple: '/apple-touch-icon.png',
  },

  title: 'Javari Boating | CR AudioViz AI — EIN 39-3646201',
  description: 'AI-powered boating and marina platform',
  twitter: { card: 'summary_large_image', images: ['/og-image.png'] },
  openGraph: { images: [{ url: '/og-image.png', width: 1200, height: 630 }], title: 'Javari Boating | CR AudioViz AI — EIN 39-3646201', description: 'AI-powered boating and marina platform', type: 'website' },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: '#07080f' }}>
        {children}
      </body>
    </html>
  )
}
