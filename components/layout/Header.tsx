'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { NAV_ITEMS, PHONE, PHONE_TEL, PHONE_NOTE, COMPANY } from '@/lib/constants'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-paper-50/95 backdrop-blur-sm border-b border-paper-300 shadow-sm'
          : 'bg-paper-50/85 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 lg:h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <Image
            src="/images/opt/logo.webp"
            alt="有限会社幸住食品 ロゴ"
            width={72}
            height={66}
            priority
            className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
          />
          <span className="flex flex-col leading-none">
            <span className="font-heading text-base lg:text-lg tracking-wide text-navy-800 group-hover:text-enji-600 transition-colors">
              有限会社幸住食品
            </span>
            <span className="text-[10px] tracking-[0.22em] text-ink-500 mt-1">
              東京・板橋区の製麺所
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => 'children' in item && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="text-ink-700 hover:text-enji-600 transition-colors py-2 tracking-wide whitespace-nowrap"
              >
                {item.label}
              </Link>
              {'children' in item && openDropdown === item.label && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1">
                  <div className="bg-paper-50 border border-paper-300 shadow-lg min-w-44 py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-5 py-2.5 text-sm text-ink-700 hover:text-enji-600 hover:bg-paper-100 transition-colors whitespace-nowrap"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop right: phone + note */}
        <a href={PHONE_TEL} className="hidden lg:flex flex-col items-end shrink-0 group">
          <span className="flex items-center gap-1.5 text-navy-800 group-hover:text-enji-600 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <span className="font-heading text-xl tracking-wide leading-none">{PHONE}</span>
          </span>
          <span className="text-[10px] text-ink-500 mt-1 hidden xl:block">
            {PHONE_NOTE}
          </span>
          <span className="text-[10px] text-ink-500 mt-1 xl:hidden">受付 {COMPANY.hours}</span>
        </a>

        {/* Hamburger */}
        <button
          aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          className="lg:hidden flex flex-col gap-1.5 p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-px bg-navy-800 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-navy-800 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-navy-800 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-paper-50 border-t border-paper-300 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="px-5 py-5 flex flex-col">
            <Link href="/" onClick={() => setMenuOpen(false)} className="py-3 text-navy-800 border-b border-paper-200 tracking-wide">
              トップ
            </Link>
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-navy-800 border-b border-paper-200 tracking-wide"
                >
                  {item.label}
                </Link>
                {'children' in item && (
                  <div className="pl-4 bg-paper-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMenuOpen(false)}
                        className="block py-2.5 text-sm text-ink-600 border-b border-paper-200"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Phone CTA in drawer */}
            <a
              href={PHONE_TEL}
              onClick={() => setMenuOpen(false)}
              className="mt-5 flex items-center justify-center gap-2 bg-navy-800 text-paper-50 py-3.5 tracking-wider"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              電話する（{PHONE}）
            </a>
            <p className="mt-2 text-xs text-ink-500 text-center">{PHONE_NOTE}</p>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 block text-center bg-enji-500 text-paper-50 py-3.5 tracking-wider"
            >
              お問い合わせフォーム
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
