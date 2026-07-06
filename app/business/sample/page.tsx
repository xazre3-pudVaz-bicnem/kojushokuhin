import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import CTASection from '@/components/ui/CTASection'
import ProcessSteps from '@/components/ui/ProcessSteps'
import Reveal from '@/components/ui/Reveal'
import Placeholder from '@/components/ui/Placeholder'
import { pageMeta } from '@/lib/seo'

export const metadata: Metadata = pageMeta({
  title: 'サンプル製麺｜麺の試作・オリジナル麺開発のご相談',
  description:
    '「こういう麺を作りたい」という段階から相談できるサンプル製麺。新メニュー開発や既存メニューの改善に合わせて、スープや具材に合った麺を試作します。東京・板橋区の製麺所 有限会社幸住食品。',
  path: '/business/sample',
  keywords: ['サンプル製麺', 'オリジナル麺 製造', '麺 試作', 'ラーメン 麺 相談', '飲食店 麺 開発', '東京 製麺所'],
})

const CASES = [
  { title: '新メニュー開発に合わせた試作', body: '新しく出す一杯に合わせて、太さや食感の異なる麺を試作。イメージに近い方向を一緒に探ります。' },
  { title: '既存メニューの改善', body: '「今の麺をもう少し変えたい」というご相談も歓迎です。現状をお伺いし、改善の方向をご提案します。' },
  { title: 'スープ・具材に合わせた相談', body: 'スープの濃さやトッピングとのバランスを踏まえ、相性のよい麺を検討します。' },
  { title: '調理・提供を見据えた調整', body: '太さ・食感・ゆで時間・調理後の状態など、実際の提供オペレーションを想定して調整します。' },
]

export default function SamplePage() {
  return (
    <>
      <PageHero
        en="Sample"
        title="サンプル製麺"
        lead="「こういう麺を作りたい」という段階から、サンプルとして麺を試作します。飲食店・食品事業者さまのメニュー開発をお手伝いします。"
        breadcrumb={[{ label: '事業紹介', href: '/business' }, { label: 'サンプル製麺' }]}
      />

      <section className="py-18 md:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <Reveal className="lg:col-span-6 order-2 lg:order-1">
            <Placeholder label="試作した麺・打ち合わせの様子" ratio="5 / 4" />
          </Reveal>
          <Reveal className="lg:col-span-6 order-1 lg:order-2" delay={100}>
            <SectionHeading en="About" title="レシピが決まっていなくても相談できます" />
            <div className="mt-6 space-y-4 text-sm md:text-base leading-loose text-ink-700">
              <p>
                サンプル製麺は、完成した仕様がなくても始められます。「このスープに合う麺がほしい」
                「食感を変えたい」「新メニュー用の麺を試したい」——そんなご相談の段階から、
                実際に麺を試作して形にしていきます。
              </p>
              <p>
                対象は、飲食店・ラーメン店・中華料理店をはじめ、惣菜店や食品メーカーなど。
                業務用麺として量産することを見据えながら、まずは少量の試作から進められます。
              </p>
              <p>
                太さ・食感・ゆで時間・調理後の状態など、気になる点を一つずつ確認しながら、
                納得のいく麺づくりをお手伝いします。
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-6">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading en="Cases" title="こんなご相談に対応します" className="mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {CASES.map((c, i) => (
              <Reveal key={c.title} delay={(i % 2) * 80}>
                <div className="flex gap-4 border border-paper-300 bg-paper-50 p-6 md:p-7 h-full">
                  <span className="font-en text-xl text-enji-500 shrink-0">0{i + 1}</span>
                  <div>
                    <h3 className="font-heading text-lg text-navy-800">{c.title}</h3>
                    <p className="mt-2 text-sm leading-loose text-ink-600">{c.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading
            en="Flow"
            title="サンプル製麺の進め方"
            lead="ご相談から試作、調整、量産・お取引開始まで。段階を追って進めます。"
            className="mb-12"
          />
          <ProcessSteps />
          <div className="mt-10 text-center">
            <Link
              href="/business/test-kitchen"
              className="inline-flex items-center gap-2 border border-navy-600 text-navy-800 px-8 py-3 text-sm tracking-wider hover:bg-navy-800 hover:text-paper-50 transition-colors"
            >
              試作した麺はテストキッチンで調理確認できます
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="「こういう麺を作りたい」をお聞かせください"
        lead="レシピが固まっていない段階でも構いません。まずはイメージや背景をお知らせいただければ、サンプル製麺を通して一緒に形にしていきます。"
      />
    </>
  )
}
