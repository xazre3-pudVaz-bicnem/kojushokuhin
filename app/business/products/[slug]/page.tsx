import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageHero from '@/components/ui/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import CTASection from '@/components/ui/CTASection'
import Reveal from '@/components/ui/Reveal'
import Media from '@/components/ui/Media'
import { PRODUCT_DETAILS, PRODUCT_SLUGS } from '@/lib/products'
import { PRODUCTS } from '@/lib/constants'
import { pageMeta } from '@/lib/seo'

type Params = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return PRODUCT_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const p = PRODUCT_DETAILS[slug]
  if (!p) return {}
  return pageMeta({
    title: p.title,
    description: p.description,
    path: `/business/products/${slug}`,
    keywords: p.keywords,
  })
}

export default async function ProductDetailPage({ params }: Params) {
  const { slug } = await params
  const p = PRODUCT_DETAILS[slug]
  if (!p) notFound()

  const others = PRODUCTS.filter((x) => x.slug !== slug)
  const prod = PRODUCTS.find((x) => x.slug === slug)

  return (
    <>
      <PageHero
        en={p.en}
        title={p.name}
        lead={p.hero}
        breadcrumb={[
          { label: '事業紹介', href: '/business' },
          { label: '麺の種類', href: '/business/products' },
          { label: p.short },
        ]}
      />

      {/* Intro */}
      <section className="py-18 md:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <Reveal className="lg:col-span-6">
            <Media
              src={prod?.image}
              alt={p.imageLabel}
              fallbackLabel={p.short}
              ratio="5 / 4"
              priority
            />
          </Reveal>
          <Reveal className="lg:col-span-6" delay={100}>
            {p.category === 'related' && (
              <span className="inline-block text-[11px] tracking-wider text-ink-600 border border-paper-400 px-2.5 py-1 mb-4">
                中華食品・関連商品のご相談
              </span>
            )}
            <div className="space-y-4 text-sm md:text-base leading-loose text-ink-700">
              {p.intro.map((t, i) => (
                <p key={i}>{t}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Points */}
      <section className="pb-6 md:pb-10">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading en="Points" title="麺づくりのポイント" className="mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {p.points.map((pt, i) => (
              <Reveal key={pt.title} delay={(i % 2) * 80}>
                <div className="flex gap-4 border border-paper-300 bg-paper-50 p-6 md:p-7 h-full">
                  <span className="font-en text-xl text-enji-500 shrink-0">0{i + 1}</span>
                  <div>
                    <h3 className="font-heading text-lg text-navy-800">{pt.title}</h3>
                    <p className="mt-2 text-sm leading-loose text-ink-600">{pt.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Uses */}
      <section className="py-18 md:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="border border-paper-300 bg-paper-50 p-8 md:p-12">
            <SectionHeading en="For" title="想定される用途・業種" />
            <ul className="mt-6 flex flex-wrap gap-3">
              {p.uses.map((u) => (
                <li key={u} className="border border-paper-400 px-4 py-2 text-sm text-ink-700">
                  {u}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-loose text-ink-600">
              上記はあくまで一例です。ご相談内容に合わせて柔軟に対応しますので、
              「まずは相談してみたい」という段階でもお気軽にお問い合わせください。
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="inline-flex items-center justify-center bg-enji-500 text-paper-50 px-8 py-3.5 text-sm tracking-wider hover:bg-enji-600 transition-colors">
                この麺について相談する
              </Link>
              <Link href="/business/sample" className="inline-flex items-center justify-center border border-navy-600 text-navy-800 px-8 py-3.5 text-sm tracking-wider hover:bg-navy-800 hover:text-paper-50 transition-colors">
                サンプル製麺について
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other products */}
      <section className="pb-18 md:pb-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading en="Others" title="ほかの麺の種類" className="mb-8" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {others.map((o) => (
              <Link key={o.slug} href={o.href} className="group block">
                <div className="overflow-hidden border border-paper-300">
                  <Media
                    src={o.image}
                    alt={`${o.short}のイメージ`}
                    fallbackLabel={o.short}
                    ratio="4 / 3"
                    className="transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <p className="mt-2 text-sm text-center text-navy-800 group-hover:text-enji-600 transition-colors">
                  {o.short}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
