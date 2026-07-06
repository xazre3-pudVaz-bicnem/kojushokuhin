import Link from 'next/link'
import PhoneBlock from './PhoneBlock'

type Props = {
  title?: string
  lead?: string
}

/** 問い合わせ誘導セクション（電話 + フォーム導線） */
export default function CTASection({
  title = '麺づくりのご相談は幸住食品へ',
  lead = 'ラーメン・焼きそば・あげめんなどの業務用麺、オリジナル麺の開発、サンプル製麺、テストキッチンのご利用まで。飲食店・食品事業者さまのご相談を承ります。',
}: Props) {
  return (
    <section className="relative overflow-hidden bg-navy-800 text-paper-50">
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
      <div className="relative max-w-5xl mx-auto px-5 lg:px-8 py-18 md:py-24 text-center">
        <span className="font-en block text-sm tracking-[0.3em] uppercase text-wheat-300 mb-3">
          Contact
        </span>
        <h2 className="font-heading text-2xl md:text-3xl leading-snug">{title}</h2>
        <p className="mt-5 max-w-2xl mx-auto text-sm md:text-base leading-loose text-paper-200/90">
          {lead}
        </p>

        <div className="mt-10 flex flex-col items-center gap-8">
          <PhoneBlock tone="dark" />
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-enji-500 text-paper-50 px-8 py-3.5 text-sm tracking-wider hover:bg-enji-600 transition-colors"
            >
              お問い合わせフォーム
            </Link>
            <Link
              href="/business/sample"
              className="inline-flex items-center justify-center border border-paper-300/40 text-paper-100 px-8 py-3.5 text-sm tracking-wider hover:bg-paper-50/10 transition-colors"
            >
              サンプル製麺について
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
