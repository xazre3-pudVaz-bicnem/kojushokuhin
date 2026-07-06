import { COMPANY, PHONE, PHONE_TEL } from '@/lib/constants'

/** 会社概要テーブル + Googleマップ埋め込み */
export default function CompanyInfo({ withMap = true }: { withMap?: boolean }) {
  const rows: [string, React.ReactNode][] = [
    ['会社名', COMPANY.name],
    ['代表者', COMPANY.representative],
    ['所在地', `〒${COMPANY.postalCode} ${COMPANY.address}`],
    [
      '電話番号',
      <a key="tel" href={PHONE_TEL} className="text-enji-600 hover:text-enji-700 transition-colors">
        {PHONE}
      </a>,
    ],
    ['営業時間', COMPANY.hours],
    ['定休日', COMPANY.holiday],
    ['事業内容', COMPANY.business],
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
      <div>
        <dl className="border-t border-paper-300">
          {rows.map(([k, v]) => (
            <div key={k} className="flex flex-col sm:flex-row border-b border-paper-300 py-4">
              <dt className="sm:w-36 shrink-0 text-sm font-medium text-navy-800 tracking-wide">{k}</dt>
              <dd className="mt-1 sm:mt-0 text-sm text-ink-700 leading-relaxed">{v}</dd>
            </div>
          ))}
        </dl>
      </div>

      {withMap && (
        <div>
          <div className="border border-paper-300 overflow-hidden">
            <iframe
              src={COMPANY.googleMapEmbedUrl}
              title={`${COMPANY.name}の所在地（Googleマップ）`}
              className="w-full h-72 lg:h-[22rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href={COMPANY.googleMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm text-navy-700 hover:text-enji-600 transition-colors"
          >
            Googleマップで見る
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      )}
    </div>
  )
}
