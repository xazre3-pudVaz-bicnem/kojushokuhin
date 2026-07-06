import type { Metadata } from 'next'
import { Noto_Sans_JP, Noto_Serif_JP, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'
import { SITE_URL, SITE_NAME } from '@/lib/constants'
import { localBusinessSchema, organizationSchema } from '@/lib/seo'

const notoSans = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-noto-sans',
  display: 'swap',
})

const notoSerif = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-serif',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: '東京 製麺所｜業務用麺の製造・オリジナル麺開発｜有限会社幸住食品（板橋区）',
    template: `%s｜${SITE_NAME}`,
  },
  description:
    '東京・板橋区赤塚の製麺所「有限会社幸住食品」。飲食店・ラーメン店・中華料理店・惣菜店・食品メーカー向けに業務用麺を製造。オリジナル麺の開発、サンプル製麺、テストキッチンの貸出にも対応します。',
  keywords: [
    '東京 製麺所', '板橋区 製麺所', '業務用麺 東京', 'ラーメン 麺 製造 東京',
    'オリジナル麺 製造', '飲食店 麺 仕入れ', '中華料理店 麺 仕入れ',
    'サンプル製麺', 'テストキッチン 東京', '業務用ラーメン麺',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { telephone: true },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: SITE_NAME,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ja"
      className={`${notoSans.variable} ${notoSerif.variable} ${cormorant.variable}`}
    >
      <body className="flex flex-col min-h-screen bg-paper-100 text-ink-800 antialiased pb-14 lg:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCTABar />
      </body>
    </html>
  )
}
