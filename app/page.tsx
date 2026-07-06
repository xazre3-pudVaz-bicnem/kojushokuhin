import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import LinkCard from '@/components/ui/LinkCard'
import CTASection from '@/components/ui/CTASection'
import CompanyInfo from '@/components/ui/CompanyInfo'
import PhoneBlock from '@/components/ui/PhoneBlock'
import FaqList from '@/components/ui/FaqList'
import Placeholder from '@/components/ui/Placeholder'
import { BUSINESS_CARDS, PRODUCTS, REASONS, FAQS } from '@/lib/constants'
import { faqSchema } from '@/lib/seo'

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }}
      />

      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-navy-900 text-paper-50">
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
        <div
          className="absolute inset-0 opacity-[0.06]"
          aria-hidden
          style={{ backgroundImage: 'repeating-linear-gradient(115deg, #ffffff 0 1px, transparent 1px 9px)' }}
        />
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-28 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="font-en block text-sm tracking-[0.3em] uppercase text-wheat-300 mb-5">
              Noodle Factory in Tokyo
            </span>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-[1.3] tracking-wide">
              東京・板橋区で
              <br />
              業務用麺の製造なら
              <br />
              <span className="text-wheat-300">有限会社幸住食品</span>
            </h1>
            <p className="mt-7 text-sm md:text-base leading-loose text-paper-200/90 max-w-xl">
              ラーメン、焼きそば、あげめんなど、用途や調理方法に合わせた麺づくりに対応。
              サンプル製麺やテストキッチンでの試作相談も承ります。飲食店・食品事業者の
              「理想の麺づくり」を支える製麺所です。
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link
                href="/business"
                className="inline-flex items-center justify-center gap-2 bg-enji-500 text-paper-50 px-8 py-4 text-sm tracking-wider hover:bg-enji-600 transition-colors"
              >
                事業紹介を見る
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-paper-300/40 text-paper-100 px-8 py-4 text-sm tracking-wider hover:bg-paper-50/10 transition-colors"
              >
                麺づくりを相談する
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <Placeholder label="製麺所の外観／麺づくりの様子（メイン画像）" ratio="4 / 3" className="shadow-2xl" />
          </div>
        </div>
      </section>

      {/* 2. 幸住食品について */}
      <section className="py-18 md:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <Reveal className="lg:col-span-6 order-2 lg:order-1">
            <Placeholder label="製麺の工程／小麦粉・生地の写真" ratio="5 / 4" />
          </Reveal>
          <Reveal className="lg:col-span-6 order-1 lg:order-2" delay={100}>
            <SectionHeading en="About" title="東京・板橋区赤塚の製麺所として" />
            <div className="mt-6 space-y-4 text-sm md:text-base leading-loose text-ink-700">
              <p>
                有限会社幸住食品は、東京都板橋区赤塚にある製麺所です。飲食店・ラーメン店・
                中華料理店・惣菜店・食品メーカーなど、業務用の麺を必要とする事業者さまへ、
                用途に合わせた麺を製造しています。
              </p>
              <p>
                ラーメン、焼きそば、あげめんといった麺の種類ごとに、スープや調理方法に合わせた
                太さ・食感・加水率を調整。「こういう麺を作りたい」というご相談の段階から、
                サンプル製麺を通して形にしていきます。
              </p>
              <p>
                さらに、製麺所の横にはラーメン店をOPEN予定。製麺した麺を実際に調理・試食・検証
                できるテストキッチンとしてもご利用いただけます。
              </p>
            </div>
            <Link
              href="/company"
              className="mt-7 inline-flex items-center gap-1.5 text-sm text-navy-700 hover:text-enji-600 transition-colors"
            >
              会社案内を見る
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 3. 事業紹介 */}
      <section className="py-18 md:py-24 bg-paper-200/60 bg-grid">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading
            en="Business"
            title="幸住食品の事業紹介"
            lead="麺へのこだわりから、麺の種類、サンプル製麺、テストキッチンの活用まで。飲食店・食品事業者さまの麺づくりを、相談から一貫してお手伝いします。"
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {BUSINESS_CARDS.map((c, i) => (
              <Reveal key={c.href} delay={(i % 3) * 80}>
                <LinkCard href={c.href} title={c.title} lead={c.lead} index={`0${i + 1}`} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 麺の種類 */}
      <section className="py-18 md:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading
            en="Products"
            title="麺の種類"
            lead="ラーメン・焼きそば・あげめんを中心に、用途に応じた業務用麺を製造。餃子・しゅうまいなど中華食品・関連商品のご相談も承ります。"
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 80}>
                <Link href={p.href} className="group block">
                  <div className="overflow-hidden border border-paper-300">
                    <Placeholder label={`${p.short}用麺のイメージ`} ratio="4 / 3" />
                  </div>
                  <div className="pt-4">
                    <div className="flex items-center gap-2">
                      <h3 className="font-heading text-lg text-navy-800 group-hover:text-enji-600 transition-colors">
                        {p.short}
                      </h3>
                      {p.category === 'related' && (
                        <span className="text-[10px] tracking-wider text-ink-500 border border-paper-400 px-1.5 py-0.5">
                          関連商品
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600">{p.lead}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/business/products"
              className="inline-flex items-center gap-2 border border-navy-600 text-navy-800 px-8 py-3 text-sm tracking-wider hover:bg-navy-800 hover:text-paper-50 transition-colors"
            >
              麺の種類の一覧を見る
            </Link>
          </div>
        </div>
      </section>

      {/* 5. サンプル製麺 + 6. テストキッチン */}
      <section className="py-18 md:py-24 bg-navy-800 text-paper-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid md:grid-cols-2 gap-8">
          <Reveal className="flex flex-col border border-navy-600 p-8 md:p-10">
            <span className="font-en text-sm tracking-[0.25em] text-wheat-300 mb-3">Sample</span>
            <h2 className="font-heading text-2xl text-paper-50">サンプル製麺</h2>
            <p className="mt-4 text-sm leading-loose text-paper-200/90 flex-1">
              新メニュー開発や既存メニューの改善に合わせて、麺を試作します。スープや具材、
              提供スタイルに合わせて、太さ・食感・ゆで時間・調理後の状態などをご相談いただけます。
              「こういう麺を作りたい」という段階からお気軽にどうぞ。
            </p>
            <Link
              href="/business/sample"
              className="mt-6 inline-flex items-center gap-1.5 text-sm text-wheat-300 hover:text-paper-50 transition-colors"
            >
              サンプル製麺について
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </Reveal>
          <Reveal className="flex flex-col border border-navy-600 p-8 md:p-10" delay={100}>
            <span className="font-en text-sm tracking-[0.25em] text-wheat-300 mb-3">Test Kitchen</span>
            <h2 className="font-heading text-2xl text-paper-50">テストキッチン</h2>
            <p className="mt-4 text-sm leading-loose text-paper-200/90 flex-1">
              製麺所の横にOPEN予定のラーメン店を活用し、製麺した麺を実際に調理・試食・検証できる
              場としてご利用いただけます。新メニューの試作品の確認や味の調整など、
              「作る」から「食べて確かめる」までを一か所でご相談いただけます。
            </p>
            <Link
              href="/business/test-kitchen"
              className="mt-6 inline-flex items-center gap-1.5 text-sm text-wheat-300 hover:text-paper-50 transition-colors"
            >
              テストキッチンについて
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 7. 選ばれる理由 */}
      <section className="py-18 md:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading
            en="Reasons"
            title="幸住食品が選ばれる理由"
            lead="製麺から調理テストまで、東京で一貫して相談できる製麺所として、飲食店・食品事業者さまのメニュー開発を支えます。"
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {REASONS.map((r, i) => (
              <Reveal key={r.title} delay={(i % 2) * 80}>
                <div className="flex gap-5 border border-paper-300 bg-paper-50 p-6 md:p-7 h-full">
                  <span className="font-en text-2xl text-enji-500 leading-none shrink-0">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg text-navy-800">{r.title}</h3>
                    <p className="mt-2 text-sm leading-loose text-ink-600">{r.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. お問い合わせ導線 */}
      <CTASection />

      {/* FAQ */}
      <section className="py-18 md:py-24">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeading en="FAQ" title="よくある質問" align="center" className="mb-10" />
          <FaqList items={FAQS} />
        </div>
      </section>

      {/* 9. 会社情報 */}
      <section className="py-18 md:py-24 bg-paper-200/60">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading en="Company" title="会社情報・アクセス" className="mb-10" />
          <CompanyInfo />
          <div className="mt-12 border border-paper-300 bg-paper-50 p-8 md:p-10 flex flex-col items-center text-center">
            <PhoneBlock />
          </div>
        </div>
      </section>
    </>
  )
}
