import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import LinkCard from '@/components/ui/LinkCard'
import CTASection from '@/components/ui/CTASection'
import ProcessSteps from '@/components/ui/ProcessSteps'
import FaqList from '@/components/ui/FaqList'
import Reveal from '@/components/ui/Reveal'
import Media from '@/components/ui/Media'
import { BUSINESS_CARDS, PRODUCTS, FAQS } from '@/lib/constants'
import { pageMeta, faqSchema } from '@/lib/seo'

export const metadata: Metadata = pageMeta({
  title: '事業紹介｜業務用麺・サンプル製麺・テストキッチン',
  description:
    '有限会社幸住食品の事業紹介。業務用麺の製造、飲食店向けの麺づくり、食品メーカー・惣菜店・中華料理店向けの対応、サンプル製麺、テストキッチンまで。東京・板橋区の製麺所が麺づくりを一貫してお手伝いします。',
  path: '/business',
  keywords: ['業務用麺 製造', '飲食店 麺 仕入れ', 'オリジナル麺 製造', '東京 製麺所', 'サンプル製麺'],
})

const TARGETS = [
  { title: '業務用麺の製造', body: '飲食店で使う麺を、用途や数量に合わせて安定的に製造・供給します。' },
  { title: '飲食店向けの麺づくり', body: 'スープや調理方法に合わせて、一店舗ごとに合う麺をご提案します。' },
  { title: '食品メーカー・惣菜店向け', body: '商品開発や量産を見据えた麺づくり、中華食品・関連商品のご相談に対応します。' },
  { title: '中華料理店向け対応', body: 'ラーメン・焼きそばをはじめ、中華メニューに合わせた麺づくりを承ります。' },
]

export default function BusinessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }}
      />
      <PageHero
        en="Business"
        title="事業紹介"
        lead="麺へのこだわりから、麺の種類、サンプル製麺、テストキッチンまで。飲食店・食品事業者さまの麺づくりを、相談から一貫してお手伝いします。"
        breadcrumb={[{ label: '事業紹介' }]}
      />

      {/* リード + 対応業種 */}
      <section className="py-18 md:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading
            en="Overview"
            title="幸住食品の事業紹介"
            lead="有限会社幸住食品は、東京都板橋区赤塚の製麺所として、飲食店・ラーメン店・中華料理店・惣菜店・食品メーカーなど、業務用麺を必要とする幅広い事業者さまに対応しています。"
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TARGETS.map((t, i) => (
              <Reveal key={t.title} delay={(i % 4) * 70}>
                <div className="border border-paper-300 bg-paper-50 p-6 h-full">
                  <span className="font-en text-sm tracking-[0.2em] text-wheat-500">0{i + 1}</span>
                  <h3 className="font-heading text-base text-navy-800 mt-2">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 事業カード */}
      <section className="py-18 md:py-24 bg-paper-200/60 bg-grid">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading en="Services" title="事業・サービス一覧" align="center" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {BUSINESS_CARDS.map((c, i) => (
              <Reveal key={c.href} delay={(i % 3) * 80}>
                <LinkCard href={c.href} title={c.title} lead={c.lead} index={`0${i + 1}`} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 麺の種類ダイジェスト */}
      <section className="py-18 md:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading
            en="Products"
            title="麺の種類"
            lead="ラーメン・焼きそば・あげめんを中心に、用途に応じた業務用麺を製造。餃子・しゅうまいなど中華食品・関連商品のご相談も承ります。"
          />
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {PRODUCTS.map((p) => (
              <Link key={p.slug} href={p.href} className="group block">
                <div className="overflow-hidden border border-paper-300">
                  <Media
                    src={p.image}
                    alt={`${p.short}のイメージ`}
                    fallbackLabel={p.short}
                    ratio="1 / 1"
                    className="transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <p className="mt-2 text-sm text-center text-navy-800 group-hover:text-enji-600 transition-colors">
                  {p.short}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/business/products"
              className="inline-flex items-center gap-2 border border-navy-600 text-navy-800 px-8 py-3 text-sm tracking-wider hover:bg-navy-800 hover:text-paper-50 transition-colors"
            >
              麺の種類を詳しく見る
            </Link>
          </div>
        </div>
      </section>

      {/* お問い合わせまでの流れ */}
      <section className="py-18 md:py-24 bg-paper-200/60">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading
            en="Flow"
            title="お問い合わせから取引開始までの流れ"
            lead="はじめてのご相談から、試作、調整、お取引開始まで。無理なく進められるよう、段階を追ってお手伝いします。"
            className="mb-12"
          />
          <ProcessSteps />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-18 md:py-24">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeading en="FAQ" title="よくある質問" align="center" className="mb-10" />
          <FaqList items={FAQS} />
        </div>
      </section>

      <CTASection />
    </>
  )
}
