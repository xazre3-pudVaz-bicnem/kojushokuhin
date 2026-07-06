import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import ContactForm from '@/components/forms/ContactForm'
import PhoneBlock from '@/components/ui/PhoneBlock'
import CompanyInfo from '@/components/ui/CompanyInfo'
import { pageMeta } from '@/lib/seo'

export const metadata: Metadata = pageMeta({
  title: 'お問い合わせ｜業務用麺・オリジナル麺のご相談',
  description:
    '有限会社幸住食品へのお問い合わせ。業務用麺の相談、オリジナル麺の相談、サンプル製麺、テストキッチンのご利用など、お電話（03-3975-4147）またはフォームよりお気軽にご連絡ください。',
  path: '/contact',
  keywords: ['幸住食品 お問い合わせ', '業務用麺 相談', 'サンプル製麺 依頼', '東京 製麺所 問い合わせ'],
})

export default function ContactPage() {
  return (
    <>
      <PageHero
        en="Contact"
        title="お問い合わせ"
        lead="業務用麺・オリジナル麺・サンプル製麺・テストキッチンのご相談を承ります。お電話またはフォームよりお気軽にご連絡ください。"
        breadcrumb={[{ label: 'お問い合わせ' }]}
      />

      {/* 電話 */}
      <section className="py-14 md:py-18">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <div className="border border-paper-300 bg-paper-50 p-8 md:p-10 text-center flex flex-col items-center">
            <PhoneBlock />
          </div>
        </div>
      </section>

      {/* フォーム */}
      <section className="pb-18 md:pb-24">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <SectionHeading
            en="Form"
            title="お問い合わせフォーム"
            lead="下記フォームに必要事項をご記入のうえ、送信してください。内容を確認し、担当者より折り返しご連絡いたします。"
            className="mb-10"
          />
          <ContactForm />
        </div>
      </section>

      {/* 会社情報・地図 */}
      <section className="py-18 md:py-24 bg-paper-200/60">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading en="Access" title="会社情報・アクセス" className="mb-10" />
          <CompanyInfo />
        </div>
      </section>
    </>
  )
}
