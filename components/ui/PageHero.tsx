import Breadcrumb, { type Crumb } from './Breadcrumb'

type Props = {
  en?: string
  title: string
  lead?: string
  breadcrumb: Crumb[]
}

/** 下層ページ共通ヒーロー（見出し + パンくず） */
export default function PageHero({ en, title, lead, breadcrumb }: Props) {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-800 text-paper-50">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div
          className="absolute inset-0 opacity-[0.07]"
          aria-hidden
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 30%, #ffffff 0, transparent 45%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-28 pb-14 md:pt-32 md:pb-16">
          {en && (
            <span className="font-en block text-sm tracking-[0.3em] uppercase text-wheat-300 mb-3">
              {en}
            </span>
          )}
          <h1 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] leading-tight">
            {title}
          </h1>
          {lead && (
            <p className="mt-5 max-w-2xl text-sm md:text-base leading-loose text-paper-200/90">
              {lead}
            </p>
          )}
        </div>
      </section>
      <Breadcrumb items={breadcrumb} />
    </>
  )
}
