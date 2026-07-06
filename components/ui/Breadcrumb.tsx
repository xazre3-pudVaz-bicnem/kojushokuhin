import Link from 'next/link'
import { SITE_URL } from '@/lib/constants'

export type Crumb = { label: string; href?: string }

/** パンくずリスト（表示 + BreadcrumbList 構造化データ） */
export default function Breadcrumb({ items }: { items: Crumb[] }) {
  const trail: Crumb[] = [{ label: 'ホーム', href: '/' }, ...items]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${SITE_URL}${c.href}` } : {}),
    })),
  }

  return (
    <nav aria-label="パンくずリスト" className="border-b border-paper-300 bg-paper-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ol className="max-w-7xl mx-auto px-5 lg:px-8 py-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-ink-500">
        {trail.map((c, i) => {
          const last = i === trail.length - 1
          return (
            <li key={i} className="flex items-center gap-2">
              {c.href && !last ? (
                <Link href={c.href} className="hover:text-enji-500 transition-colors">
                  {c.label}
                </Link>
              ) : (
                <span className={last ? 'text-ink-700' : ''}>{c.label}</span>
              )}
              {!last && <span className="text-paper-400">/</span>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
