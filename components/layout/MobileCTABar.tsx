import Link from 'next/link'
import { PHONE_TEL } from '@/lib/constants'

/** スマホ固定CTAバー（電話 + フォーム） */
export default function MobileCTABar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 grid grid-cols-2 border-t border-navy-600 shadow-[0_-4px_16px_rgba(0,0,0,0.12)]">
      <a
        href={PHONE_TEL}
        className="flex items-center justify-center gap-2 bg-navy-800 text-paper-50 py-3.5 text-sm tracking-wider"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
        電話する
      </a>
      <Link
        href="/contact"
        className="flex items-center justify-center gap-2 bg-enji-500 text-paper-50 py-3.5 text-sm tracking-wider"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
        お問い合わせ
      </Link>
    </div>
  )
}
