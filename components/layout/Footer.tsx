import Link from 'next/link'
import { COMPANY, PHONE, PHONE_TEL, SITE_NAME, NAV_ITEMS, LANDING_PAGES } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-paper-200">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-12">
          {/* Brand + company */}
          <div className="md:col-span-4">
            <p className="font-heading text-xl tracking-wide text-paper-50 mb-1">{SITE_NAME}</p>
            <p className="text-[11px] tracking-[0.25em] text-wheat-300 mb-5">
              東京・板橋区の製麺所
            </p>
            <div className="text-sm text-paper-300/90 space-y-1.5 leading-relaxed">
              <p>〒{COMPANY.postalCode}</p>
              <p>{COMPANY.address}</p>
              <p>営業時間：{COMPANY.hours}</p>
              <p>定休日：{COMPANY.holiday}</p>
              <p className="pt-2">
                <a href={PHONE_TEL} className="text-paper-50 hover:text-wheat-300 transition-colors">
                  TEL {PHONE}
                </a>
              </p>
            </div>
          </div>

          {/* Site nav */}
          <div className="md:col-span-4">
            <p className="text-xs tracking-[0.25em] text-wheat-300 uppercase mb-5">Menu</p>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-paper-300/90">
              <Link href="/" className="hover:text-paper-50 transition-colors">トップ</Link>
              <Link href="/company" className="hover:text-paper-50 transition-colors">会社案内</Link>
              {NAV_ITEMS[1].children!.map((c) => (
                <Link key={c.href} href={c.href} className="hover:text-paper-50 transition-colors">
                  {c.label}
                </Link>
              ))}
              <Link href="/contact" className="hover:text-paper-50 transition-colors">お問い合わせ</Link>
            </nav>
          </div>

          {/* SEO landing links */}
          <div className="md:col-span-4">
            <p className="text-xs tracking-[0.25em] text-wheat-300 uppercase mb-5">Guide</p>
            <nav className="flex flex-col gap-2.5 text-sm text-paper-300/90">
              {LANDING_PAGES.map((l) => (
                <Link key={l.href} href={l.href} className="hover:text-paper-50 transition-colors">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-navy-600 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-paper-300/60">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME} All Rights Reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center">
            <Link href="/sitemap" className="hover:text-paper-100 transition-colors">サイトマップ</Link>
            <Link href="/privacy" className="hover:text-paper-100 transition-colors">プライバシーポリシー</Link>
            <Link href="/contact" className="hover:text-paper-100 transition-colors">お問い合わせ</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
