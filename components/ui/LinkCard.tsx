import Link from 'next/link'

type Props = {
  href: string
  title: string
  lead?: string
  index?: string
  className?: string
}

/** 内部リンク用カード（事業紹介・関連ページ導線で共有） */
export default function LinkCard({ href, title, lead, index, className = '' }: Props) {
  return (
    <Link
      href={href}
      className={`group relative flex flex-col h-full border border-paper-300 bg-paper-50 p-6 md:p-7 transition-all duration-300 hover:border-navy-600 hover:shadow-[0_8px_30px_rgba(20,27,49,0.08)] ${className}`}
    >
      {index && (
        <span className="font-en text-sm tracking-[0.2em] text-wheat-500 mb-3">{index}</span>
      )}
      <h3 className="font-heading text-lg md:text-xl text-navy-800 group-hover:text-enji-600 transition-colors">
        {title}
      </h3>
      {lead && <p className="mt-3 text-sm leading-loose text-ink-600 flex-1">{lead}</p>}
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-navy-700 group-hover:text-enji-600 transition-colors">
        詳しく見る
        <svg
          className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </span>
    </Link>
  )
}
