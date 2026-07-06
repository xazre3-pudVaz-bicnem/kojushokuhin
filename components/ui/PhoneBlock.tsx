import { PHONE, PHONE_TEL, PHONE_NOTE, COMPANY } from '@/lib/constants'

type Props = {
  tone?: 'dark' | 'light'
  className?: string
}

/** 電話番号 + 「ホームページを見たと…」注記 + 営業時間 */
export default function PhoneBlock({ tone = 'light', className = '' }: Props) {
  const isDark = tone === 'dark'
  return (
    <div className={className}>
      <p
        className={`text-xs tracking-widest mb-1 ${
          isDark ? 'text-wheat-300' : 'text-enji-500'
        }`}
      >
        お電話でのお問い合わせ
      </p>
      <a
        href={PHONE_TEL}
        className={`font-heading inline-flex items-center gap-3 text-3xl md:text-4xl tracking-wide transition-colors ${
          isDark ? 'text-paper-50 hover:text-wheat-300' : 'text-navy-800 hover:text-enji-500'
        }`}
      >
        <svg
          className="w-7 h-7 shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
        {PHONE}
      </a>
      <p
        className={`mt-2 text-sm ${isDark ? 'text-paper-200/90' : 'text-ink-600'}`}
      >
        {PHONE_NOTE}
      </p>
      <p className={`mt-1 text-xs ${isDark ? 'text-paper-300/70' : 'text-ink-500'}`}>
        営業時間 {COMPANY.hours}（定休日：{COMPANY.holiday}）
      </p>
    </div>
  )
}
