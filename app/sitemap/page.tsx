import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import { pageMeta } from '@/lib/seo'
import { LANDING_PAGES } from '@/lib/constants'

export const metadata: Metadata = pageMeta({
  title: 'サイトマップ',
  description:
    '有限会社幸住食品の公式サイトのサイトマップ。会社案内、事業紹介、麺の種類、サンプル製麺、テストキッチン、お問い合わせなど、各ページの一覧をご案内します。',
  path: '/sitemap',
})

const GROUPS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: '会社情報',
    links: [
      { label: 'トップ', href: '/' },
      { label: '会社案内', href: '/company' },
      { label: 'お問い合わせ', href: '/contact' },
    ],
  },
  {
    heading: '事業紹介',
    links: [
      { label: '事業紹介トップ', href: '/business' },
      { label: '麺へのこだわり', href: '/business/quality' },
      { label: 'サンプル製麺', href: '/business/sample' },
      { label: 'テストキッチン', href: '/business/test-kitchen' },
    ],
  },
  {
    heading: '麺の種類',
    links: [
      { label: '麺の種類 一覧', href: '/business/products' },
      { label: 'ラーメン用麺', href: '/business/products/ramen' },
      { label: '焼きそば用麺', href: '/business/products/yakisoba' },
      { label: 'あげめん', href: '/business/products/agemen' },
      { label: '餃子（中華食品のご相談）', href: '/business/products/gyoza' },
      { label: 'しゅうまい（中華食品のご相談）', href: '/business/products/shumai' },
    ],
  },
  {
    heading: 'お探しの方へ',
    links: [...LANDING_PAGES],
  },
  {
    heading: 'その他',
    links: [
      { label: 'プライバシーポリシー', href: '/privacy' },
      { label: 'サイトマップ', href: '/sitemap' },
    ],
  },
]

export default function SitemapPage() {
  return (
    <>
      <PageHero
        en="Sitemap"
        title="サイトマップ"
        breadcrumb={[{ label: 'サイトマップ' }]}
      />
      <section className="py-18 md:py-24">
        <div className="max-w-5xl mx-auto px-5 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {GROUPS.map((g) => (
            <div key={g.heading}>
              <h2 className="font-heading text-lg text-navy-800 pb-3 mb-4 border-b border-paper-300">
                <span className="rule-accent">{g.heading}</span>
              </h2>
              <ul className="space-y-3">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-ink-700 hover:text-enji-600 transition-colors inline-flex items-center gap-2"
                    >
                      <span className="text-wheat-500">―</span>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
