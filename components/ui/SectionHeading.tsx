type Props = {
  en?: string
  title: string
  lead?: string
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
  className?: string
}

/** セクション見出し（英字ラベル + 和文見出し + リード文） */
export default function SectionHeading({
  en,
  title,
  lead,
  align = 'left',
  tone = 'dark',
  className = '',
}: Props) {
  const isCenter = align === 'center'
  const isLight = tone === 'light'
  return (
    <div
      className={`${isCenter ? 'text-center mx-auto max-w-2xl' : ''} ${className}`}
    >
      {en && (
        <span
          className={`font-en block text-sm tracking-[0.3em] uppercase mb-3 ${
            isLight ? 'text-wheat-300' : 'text-enji-500'
          }`}
        >
          {en}
        </span>
      )}
      <h2
        className={`font-heading text-2xl md:text-3xl lg:text-[2rem] leading-snug ${
          isLight ? 'text-paper-50' : 'text-navy-800'
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-4 text-sm md:text-base leading-loose ${
            isLight ? 'text-paper-200/90' : 'text-ink-600'
          } ${isCenter ? '' : 'max-w-2xl'}`}
        >
          {lead}
        </p>
      )}
    </div>
  )
}
