import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import CTASection from '@/components/ui/CTASection'
import Reveal from '@/components/ui/Reveal'
import Placeholder from '@/components/ui/Placeholder'
import FaqList from '@/components/ui/FaqList'
import { faqSchema } from '@/lib/seo'
import type { Faq } from '@/components/ui/FaqList'

export type LandingContent = {
  en: string
  h1: string
  lead: string
  breadcrumbLabel: string
  imageLabel: string
  intro: string[]
  sections: { heading: string; body: string[] }[]
  points: { title: string; body: string }[]
  faqs?: Faq[]
  related: { label: string; href: string }[]
  cta?: { title: string; lead: string }
}

export default function LandingTemplate({ content }: { content: LandingContent }) {
  return (
    <>
      {content.faqs && content.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(content.faqs)) }}
        />
      )}

      <PageHero
        en={content.en}
        title={content.h1}
        lead={content.lead}
        breadcrumb={[{ label: content.breadcrumbLabel }]}
      />

      {/* Intro */}
      <section className="py-18 md:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <Reveal className="lg:col-span-6 order-2 lg:order-1">
            <Placeholder label={content.imageLabel} ratio="5 / 4" />
          </Reveal>
          <Reveal className="lg:col-span-6 order-1 lg:order-2" delay={100}>
            <div className="space-y-4 text-sm md:text-base leading-loose text-ink-700">
              {content.intro.map((t, i) => (
                <p key={i}>{t}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Sections */}
      {content.sections.length > 0 && (
        <section className="pb-6">
          <div className="max-w-3xl mx-auto px-5 lg:px-8 space-y-12">
            {content.sections.map((s) => (
              <Reveal key={s.heading}>
                <h2 className="font-heading text-xl md:text-2xl text-navy-800 mb-4">
                  <span className="rule-accent">{s.heading}</span>
                </h2>
                <div className="space-y-4 text-sm md:text-base leading-loose text-ink-700">
                  {s.body.map((b, i) => (
                    <p key={i}>{b}</p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Points */}
      {content.points.length > 0 && (
        <section className="py-18 md:py-24">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <SectionHeading en="Point" title="幸住食品にご相談いただく理由" className="mb-10" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {content.points.map((p, i) => (
                <Reveal key={p.title} delay={(i % 2) * 80}>
                  <div className="flex gap-4 border border-paper-300 bg-paper-50 p-6 md:p-7 h-full">
                    <span className="font-en text-xl text-enji-500 shrink-0">0{i + 1}</span>
                    <div>
                      <h3 className="font-heading text-lg text-navy-800">{p.title}</h3>
                      <p className="mt-2 text-sm leading-loose text-ink-600">{p.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {content.faqs && content.faqs.length > 0 && (
        <section className="pb-18 md:pb-24">
          <div className="max-w-3xl mx-auto px-5 lg:px-8">
            <SectionHeading en="FAQ" title="よくある質問" align="center" className="mb-10" />
            <FaqList items={content.faqs} />
          </div>
        </section>
      )}

      {/* Related links */}
      <section className="pb-18 md:pb-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading en="Related" title="関連ページ" className="mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {content.related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group flex items-center justify-between gap-3 border border-paper-300 bg-paper-50 px-6 py-5 hover:border-navy-600 transition-colors"
              >
                <span className="text-sm text-navy-800 group-hover:text-enji-600 transition-colors">
                  {r.label}
                </span>
                <svg className="w-4 h-4 text-ink-400 shrink-0 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection {...(content.cta ?? {})} />
    </>
  )
}
