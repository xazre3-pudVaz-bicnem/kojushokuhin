'use client'

import { useState } from 'react'

export type Faq = { q: string; a: string }

/** アコーディオン型FAQ（表示。FAQPage schema は各ページ側で出力） */
export default function FaqList({ items }: { items: readonly Faq[] }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="divide-y divide-paper-300 border-y border-paper-300">
      {items.map((f, i) => {
        const isOpen = open === i
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-start justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="flex items-start gap-3">
                <span className="font-heading text-enji-500 shrink-0">Q</span>
                <span className="font-medium text-navy-800 leading-relaxed">{f.q}</span>
              </span>
              <span
                className={`shrink-0 mt-1 text-ink-500 transition-transform duration-300 ${
                  isOpen ? 'rotate-45' : ''
                }`}
                aria-hidden
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeWidth={1.5} d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="flex gap-3 pb-6 text-sm leading-loose text-ink-600">
                  <span className="font-heading text-wheat-500 shrink-0">A</span>
                  <span>{f.a}</span>
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
