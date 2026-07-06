import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import CompanyInfo from '@/components/ui/CompanyInfo'
import CTASection from '@/components/ui/CTASection'
import Reveal from '@/components/ui/Reveal'
import Media from '@/components/ui/Media'
import { pageMeta } from '@/lib/seo'

export const metadata: Metadata = pageMeta({
  title: '会社案内｜東京・板橋区赤塚の製麺所',
  description:
    '東京・板橋区赤塚の製麺所「有限会社幸住食品」の会社案内。業務用麺の製造、オリジナル麺の開発、サンプル製麺、テストキッチンの貸出を行う製麺所の概要・所在地・アクセスをご案内します。',
  path: '/company',
  keywords: ['有限会社幸住食品', '会社案内', '板橋区 製麺所', '東京 製麺所'],
})

export default function CompanyPage() {
  return (
    <>
      <PageHero
        en="Company"
        title="会社案内"
        lead="東京・板橋区赤塚で、飲食店・食品事業者さまの麺づくりを支える製麺所です。"
        breadcrumb={[{ label: '会社案内' }]}
      />

      {/* 想い・ストーリー */}
      <section className="py-18 md:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <Reveal className="lg:col-span-6">
            <SectionHeading en="Story" title="麺づくりで、飲食店の一杯を支える" />
            <div className="mt-6 space-y-4 text-sm md:text-base leading-loose text-ink-700">
              <p>
                一杯のラーメン、一皿の焼きそば。その味わいを左右するのが麺です。私たち有限会社幸住食品は、
                東京都板橋区赤塚の製麺所として、飲食店や食品事業者さまが思い描く味づくりを、
                麺の面から支えてきました。
              </p>
              <p>
                スープや調理方法、提供スタイルは店ごとに違います。だからこそ、決まった規格の麺を
                届けるのではなく、用途に合わせて太さ・食感・加水率などを調整し、
                一軒一軒に合う麺をご相談しながらつくることを大切にしています。
              </p>
              <p>
                これから製麺所の横にはラーメン店をOPEN予定です。つくった麺を実際に調理して確かめられる
                テストキッチンとして、飲食店・食品事業者さまの新しいメニューづくりを、
                より近い距離でお手伝いしていきます。
              </p>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-6" delay={100}>
            <Media src="noodles-crate-wave.webp" alt="木箱に整然と並べられた、製麺したての麺" ratio="5 / 4" />
          </Reveal>
        </div>
      </section>

      {/* 会社概要 */}
      <section className="py-18 md:py-24 bg-paper-200/60">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading en="Overview" title="会社概要" className="mb-10" />
          <CompanyInfo />
        </div>
      </section>

      <CTASection />
    </>
  )
}
