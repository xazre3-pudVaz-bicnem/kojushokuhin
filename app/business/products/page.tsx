import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import CTASection from '@/components/ui/CTASection'
import Reveal from '@/components/ui/Reveal'
import Placeholder from '@/components/ui/Placeholder'
import { PRODUCTS } from '@/lib/constants'
import { pageMeta } from '@/lib/seo'

export const metadata: Metadata = pageMeta({
  title: '麺の種類｜ラーメン・焼きそば・あげめんの業務用麺',
  description:
    'ラーメン・焼きそば・あげめんを中心に、用途に応じた業務用麺を製造。餃子・しゅうまいなど中華食品・関連商品のご相談も承ります。東京・板橋区の製麺所 有限会社幸住食品。',
  path: '/business/products',
  keywords: ['業務用麺 東京', 'ラーメン 麺 製造', '焼きそば 麺', 'あげめん', '中華麺', '製麺所'],
})

const noodles = PRODUCTS.filter((p) => p.category === 'noodle')
const related = PRODUCTS.filter((p) => p.category === 'related')

export default function ProductsPage() {
  return (
    <>
      <PageHero
        en="Products"
        title="麺の種類"
        lead="ラーメン・焼きそば・あげめんを中心に、用途や調理方法に合わせた業務用麺を製造しています。餃子・しゅうまいなど中華食品・関連商品のご相談も承ります。"
        breadcrumb={[{ label: '事業紹介', href: '/business' }, { label: '麺の種類' }]}
      />

      {/* 麺 */}
      <section className="py-18 md:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading en="Noodles" title="麺の製造" className="mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {noodles.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 80}>
                <Link href={p.href} className="group flex flex-col h-full border border-paper-300 bg-paper-50 overflow-hidden hover:border-navy-600 hover:shadow-[0_8px_30px_rgba(20,27,49,0.08)] transition-all duration-300">
                  <Placeholder label={`${p.short}用麺のイメージ`} ratio="4 / 3" />
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-heading text-lg text-navy-800 group-hover:text-enji-600 transition-colors">
                      {p.short}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600 flex-1">{p.lead}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-navy-700 group-hover:text-enji-600 transition-colors">
                      詳しく見る
                      <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 関連商品 */}
      <section className="pb-18 md:pb-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading
            en="Related"
            title="中華食品・関連商品のご相談"
            lead="餃子・しゅうまいなどは麺そのものではありませんが、皮をはじめとした中華食品・関連商品づくりについても、用途に応じてご相談を承ります。"
            className="mb-10"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 80}>
                <Link href={p.href} className="group flex gap-5 border border-paper-300 bg-paper-50 p-6 hover:border-navy-600 transition-colors h-full">
                  <div className="w-28 shrink-0 overflow-hidden border border-paper-300">
                    <Placeholder label={p.short} ratio="1 / 1" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-navy-800 group-hover:text-enji-600 transition-colors">
                      {p.short}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600">{p.lead}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
