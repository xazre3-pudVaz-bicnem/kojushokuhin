import type { Metadata } from 'next'
import { SITE_URL, SITE_NAME, COMPANY, PHONE } from './constants'

type PageMetaArgs = {
  title: string
  description: string
  path: string
  keywords?: string[]
}

/** 各ページ共通の metadata 生成（canonical / OGP 含む） */
export function pageMeta({ title, description, path, keywords }: PageMetaArgs): Metadata {
  const url = `${SITE_URL}${path}`
  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      title: `${title}｜${SITE_NAME}`,
      description,
      url,
      type: 'website',
      locale: 'ja_JP',
      siteName: SITE_NAME,
      images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image' },
  }
}

/** FAQPage 構造化データ */
export function faqSchema(faqs: readonly { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

/** LocalBusiness 構造化データ（トップ・共通で使用） */
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#business`,
  name: SITE_NAME,
  alternateName: '幸住食品',
  url: SITE_URL,
  telephone: PHONE,
  image: `${SITE_URL}/og-image.jpg`,
  description:
    '東京都板橋区赤塚の製麺所。飲食店・ラーメン店・中華料理店・惣菜店・食品メーカー向けに業務用麺を製造。オリジナル麺の開発、サンプル製麺、テストキッチンの貸出に対応。',
  address: {
    '@type': 'PostalAddress',
    postalCode: COMPANY.postalCode,
    addressRegion: COMPANY.addressRegion,
    addressLocality: COMPANY.addressLocality,
    streetAddress: COMPANY.streetAddress,
    addressCountry: 'JP',
  },
  geo: { '@type': 'GeoCoordinates', latitude: COMPANY.lat, longitude: COMPANY.lng },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
  areaServed: [
    { '@type': 'AdministrativeArea', name: '東京都' },
    { '@type': 'City', name: '板橋区' },
  ],
  hasMap: COMPANY.googleMapUrl,
  knowsAbout: [
    '製麺', '業務用麺', 'ラーメンの麺', '焼きそばの麺', 'あげめん',
    'オリジナル麺の開発', 'サンプル製麺', 'テストキッチン', '中華麺',
  ],
}

/** Organization 構造化データ */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/og-image.jpg`,
  telephone: PHONE,
  address: {
    '@type': 'PostalAddress',
    postalCode: COMPANY.postalCode,
    addressRegion: COMPANY.addressRegion,
    addressLocality: COMPANY.addressLocality,
    streetAddress: COMPANY.streetAddress,
    addressCountry: 'JP',
  },
}
