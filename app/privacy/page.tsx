import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import { pageMeta } from '@/lib/seo'
import { COMPANY, PHONE, PHONE_TEL } from '@/lib/constants'

export const metadata: Metadata = pageMeta({
  title: 'プライバシーポリシー',
  description:
    '有限会社幸住食品のプライバシーポリシー（個人情報保護方針）。お問い合わせ等で取得した個人情報の取り扱いについてご案内します。',
  path: '/privacy',
})

const SECTIONS: { heading: string; body: React.ReactNode }[] = [
  {
    heading: '1. 個人情報の取得について',
    body: '当社は、お問い合わせフォームやお電話でのご相談などを通じて、お名前・会社名・電話番号・メールアドレス・ご相談内容などの個人情報を、適法かつ公正な手段により取得します。',
  },
  {
    heading: '2. 個人情報の利用目的',
    body: 'お問い合わせやご相談への対応、お見積り・ご提案、業務用麺の製造・取引に関するご連絡、その他上記に付随する業務のために利用します。取得した目的の範囲を超えて利用することはありません。',
  },
  {
    heading: '3. 個人情報の第三者提供',
    body: '当社は、法令に定める場合を除き、あらかじめご本人の同意を得ることなく、取得した個人情報を第三者に提供することはありません。',
  },
  {
    heading: '4. 個人情報の管理',
    body: '当社は、個人情報への不正アクセス、紛失、破壊、改ざん、漏えいなどを防止するため、必要かつ適切な安全管理措置を講じます。',
  },
  {
    heading: '5. 個人情報の開示・訂正・削除',
    body: 'ご本人から、個人情報の開示・訂正・利用停止・削除等のお申し出があった場合は、ご本人であることを確認のうえ、法令に基づき適切に対応します。',
  },
  {
    heading: '6. お問い合わせ窓口',
    body: (
      <>
        本ポリシーに関するお問い合わせ、個人情報の取り扱いに関するご相談は、下記までご連絡ください。
        <br />
        {COMPANY.name}
        <br />
        {`〒${COMPANY.postalCode} ${COMPANY.address}`}
        <br />
        TEL：
        <a href={PHONE_TEL} className="text-enji-600 hover:text-enji-700 transition-colors">
          {PHONE}
        </a>
        （営業時間 {COMPANY.hours}）
      </>
    ),
  },
  {
    heading: '7. 本ポリシーの改定',
    body: '当社は、法令の変更や事業内容の変更に応じて、本ポリシーを予告なく改定することがあります。改定後の内容は、本ページに掲載した時点から効力を生じるものとします。',
  },
]

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        en="Privacy Policy"
        title="プライバシーポリシー"
        breadcrumb={[{ label: 'プライバシーポリシー' }]}
      />
      <section className="py-18 md:py-24">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-sm leading-loose text-ink-700 mb-12">
            {COMPANY.name}（以下「当社」といいます）は、お客さまの個人情報の重要性を認識し、
            以下の方針に基づいて個人情報を適切に取り扱い、保護に努めます。
          </p>
          <div className="space-y-10">
            {SECTIONS.map((s) => (
              <div key={s.heading}>
                <h2 className="font-heading text-lg text-navy-800 mb-3">{s.heading}</h2>
                <p className="text-sm leading-loose text-ink-600">{s.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-14 text-right text-xs text-ink-500">
            制定日：2026年7月6日
            <br />
            {COMPANY.name}
          </p>
        </div>
      </section>
    </>
  )
}
