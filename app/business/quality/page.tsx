import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import CTASection from '@/components/ui/CTASection'
import Reveal from '@/components/ui/Reveal'
import Media from '@/components/ui/Media'
import { pageMeta } from '@/lib/seo'

export const metadata: Metadata = pageMeta({
  title: '麺へのこだわり｜用途に合わせた業務用麺の製造',
  description:
    'スープや調理方法に合わせて、太さ・食感・加水率・ゆで時間などを調整する麺づくり。東京・板橋区の製麺所 有限会社幸住食品が、業務用麺・オリジナル麺の製造で飲食店のメニュー開発を支えます。',
  path: '/business/quality',
  keywords: ['東京 製麺所', '業務用麺', 'オリジナル麺', 'ラーメン 麺 製造', '飲食店 麺 仕入れ', '加水率'],
})

const POINTS = [
  {
    title: '用途に合わせた麺づくり',
    body: 'ラーメン、焼きそば、あげめんなど、麺は使われ方によって求められる性質が異なります。提供するメニューや調理方法を前提に、それぞれの用途に合った麺を設計します。',
  },
  {
    title: 'スープ・調理方法に合わせた調整',
    body: '同じラーメンでも、清湯か濃厚か、あっさりか背脂系かでスープと麺の相性は変わります。太さ・食感・加水率・ゆで時間などを調整し、スープや調理方法に合う麺をご相談いただけます。',
  },
  {
    title: 'メニュー開発を支える製麺',
    body: '「このスープに合う麺を探している」「食感を変えたい」といったご相談に、サンプル製麺を通して応えます。飲食店のメニュー開発を、麺の面から支えます。',
  },
  {
    title: '業務用としての安定供給',
    body: '一度決まった麺は、味や食感を保ちながら安定して製造・供給できる体制を整えています。日々の営業で使う業務用麺として、継続的にご利用いただけます。',
  },
]

const SPECS = [
  { k: '太さ', v: '細麺・中細・中太・太麺など、用途に合わせて調整' },
  { k: '食感', v: 'ストレート／ちぢれ、歯切れ・のど越しの方向性をご相談' },
  { k: '加水率', v: 'スープや提供スタイルに合わせて設計' },
  { k: 'ゆで時間・調理後の状態', v: '提供オペレーションや伸びにくさを考慮' },
]

export default function QualityPage() {
  return (
    <>
      <PageHero
        en="Quality"
        title="麺へのこだわり"
        lead="スープや調理方法に合わせて、太さ・食感・ゆで時間などを考慮した麺づくりをご相談いただけます。"
        breadcrumb={[{ label: '事業紹介', href: '/business' }, { label: '麺へのこだわり' }]}
      />

      <section className="py-18 md:py-24">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <div className="space-y-5 text-sm md:text-base leading-loose text-ink-700">
            <p>
              東京・板橋区赤塚の製麺所、有限会社幸住食品では、決まった規格の麺を届けるのではなく、
              使う場面に合わせて麺そのものを設計することを大切にしています。
            </p>
            <p>
              ラーメン、焼きそば、あげめんなど、麺は用途によって最適な太さや食感が変わります。
              スープや調理方法、提供スタイルをお伺いしながら、飲食店・食品事業者さまが思い描く味に
              近づけていく——それが幸住食品の麺づくりです。
            </p>
          </div>
        </div>
      </section>

      <section className="pb-6 md:pb-10">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {POINTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 80}>
              <div className="border border-paper-300 bg-paper-50 p-7 md:p-8 h-full">
                <span className="font-en text-2xl text-enji-500 leading-none">0{i + 1}</span>
                <h2 className="font-heading text-xl text-navy-800 mt-3">{p.title}</h2>
                <p className="mt-3 text-sm leading-loose text-ink-600">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 調整できる要素 */}
      <section className="py-18 md:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-6">
            <Media src="noodles-close-b.webp" alt="太さや食感の異なる、製麺したての中華麺" ratio="5 / 4" />
          </Reveal>
          <Reveal className="lg:col-span-6" delay={100}>
            <SectionHeading en="Spec" title="ご相談いただける主な要素" />
            <dl className="mt-6 border-t border-paper-300">
              {SPECS.map((s) => (
                <div key={s.k} className="flex flex-col sm:flex-row border-b border-paper-300 py-4">
                  <dt className="sm:w-44 shrink-0 text-sm font-medium text-navy-800">{s.k}</dt>
                  <dd className="mt-1 sm:mt-0 text-sm text-ink-700 leading-relaxed">{s.v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm leading-loose text-ink-600">
              上記はあくまで一例です。「東京で業務用麺を相談できる製麺所を探している」という段階から、
              お気軽にご相談ください。まずはご要望をお伺いし、サンプル製麺で形にしていきます。
            </p>
            <Link
              href="/business/sample"
              className="mt-6 inline-flex items-center gap-1.5 text-sm text-navy-700 hover:text-enji-600 transition-colors"
            >
              サンプル製麺について見る
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  )
}
