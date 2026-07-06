import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import CTASection from '@/components/ui/CTASection'
import Reveal from '@/components/ui/Reveal'
import Placeholder from '@/components/ui/Placeholder'
import { pageMeta } from '@/lib/seo'

export const metadata: Metadata = pageMeta({
  title: 'テストキッチン｜製麺した麺をその場で調理・試食・検証',
  description:
    '製麺所の横にOPEN予定のラーメン店を、製麺した麺を実際に調理・試食・検証できるテストキッチンとして貸出。新メニュー開発や試作品の確認、味の調整に。東京・板橋区の製麺所 有限会社幸住食品。',
  path: '/business/test-kitchen',
  keywords: ['テストキッチン 東京', 'ラーメン 試作', '麺 調理 検証', 'メニュー開発', '製麺所 板橋区'],
})

const USES = [
  { title: '製麺した麺をその場で調理', body: 'つくった麺を、実際にゆでて・炒めて確認できます。数値上の仕様だけでなく、食べたときの印象までその場で確かめられます。' },
  { title: 'ラーメン・焼きそばの調理テスト', body: 'スープや具材と合わせた状態で、麺の相性やゆで加減を検証。提供イメージに近い形でテストできます。' },
  { title: '新メニュー開発・試作品の確認', body: '開発中のメニューの試作品を、味・食感・見た目までまとめて確認。改善点を洗い出せます。' },
  { title: '味の調整・方向性の確認', body: '「もう少し歯切れを」「スープに負けない太さに」など、食べながらの調整で方向性を固められます。' },
]

const TARGETS = ['食品事業者さま', '飲食店さま', 'ラーメン店さま', '開業を予定されている方']

export default function TestKitchenPage() {
  return (
    <>
      <PageHero
        en="Test Kitchen"
        title="テストキッチン"
        lead="製麺所の横にOPEN予定のラーメン店を、製麺した麺を実際に調理・試食・検証できる場としてご利用いただけます。"
        breadcrumb={[{ label: '事業紹介', href: '/business' }, { label: 'テストキッチン' }]}
      />

      <section className="py-18 md:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <Reveal className="lg:col-span-6">
            <SectionHeading en="Concept" title="「作る」から「食べて確かめる」まで、一か所で" />
            <div className="mt-6 space-y-4 text-sm md:text-base leading-loose text-ink-700">
              <p>
                麺は、実際に調理して食べてみて初めて分かることがあります。幸住食品では、
                製麺所の横にラーメン店をOPEN予定。ここを、つくった麺をその場で調理・試食・検証できる
                テストキッチンとしてご活用いただけます。
              </p>
              <p>
                サンプル製麺で試作した麺を、スープや具材と合わせて調理し、食感や相性を確認する。
                気になる点があればその場で相談し、次の調整につなげる——製麺と調理確認を
                近い距離で行えることが、幸住食品ならではの強みです。
              </p>
              <p>
                新メニューの開発、試作品の確認、味の調整など、飲食店・食品事業者・開業予定の方の
                「試したい」にお応えします。
              </p>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-6" delay={100}>
            <Placeholder label="ラーメン店（テストキッチン）の厨房・調理の様子" ratio="5 / 4" />
          </Reveal>
        </div>
      </section>

      <section className="pb-6">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading en="Uses" title="テストキッチンでできること" className="mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {USES.map((u, i) => (
              <Reveal key={u.title} delay={(i % 2) * 80}>
                <div className="flex gap-4 border border-paper-300 bg-paper-50 p-6 md:p-7 h-full">
                  <span className="font-en text-xl text-enji-500 shrink-0">0{i + 1}</span>
                  <div>
                    <h3 className="font-heading text-lg text-navy-800">{u.title}</h3>
                    <p className="mt-2 text-sm leading-loose text-ink-600">{u.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="border border-paper-300 bg-paper-50 p-8 md:p-12">
            <SectionHeading en="For" title="こんな方にご利用いただけます" />
            <ul className="mt-6 flex flex-wrap gap-3">
              {TARGETS.map((t) => (
                <li key={t} className="border border-paper-400 px-4 py-2 text-sm text-ink-700">
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-loose text-ink-600">
              テストキッチンのご利用については、お問い合わせより個別にご相談を承ります。
              「まず何ができるか聞いてみたい」という段階でも構いません。サンプル製麺とあわせて、
              麺づくりから調理確認までをお手伝いします。
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 bg-enji-500 text-paper-50 px-8 py-3.5 text-sm tracking-wider hover:bg-enji-600 transition-colors"
            >
              テストキッチンについて相談する
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="製麺と調理確認を、同じ場所で"
        lead="サンプル製麺で試作した麺を、テストキッチンで実際に調理して確かめる。飲食店・食品事業者さまのメニュー開発を、麺づくりから伴走します。"
      />
    </>
  )
}
