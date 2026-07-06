import Image from 'next/image'

type Props = {
  /** /images/opt 配下のファイル名（例: 'noodles-crate-straight.webp'）。未指定時はブランドタイルを表示 */
  src?: string
  alt: string
  ratio?: string
  className?: string
  priority?: boolean
  sizes?: string
  /** ブランドタイル時に表示する小さなラベル */
  fallbackLabel?: string
}

const BASE = '/images/opt/'

/**
 * 写真表示コンポーネント。
 * - src あり：next/image（object-cover, lazy/priority対応）
 * - src なし：ブランドカラーのタイル + ロゴマーク（altテキスト露出を防ぐ）
 */
export default function Media({
  src,
  alt,
  ratio = '4 / 3',
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
  fallbackLabel,
}: Props) {
  return (
    <div
      className={`relative overflow-hidden bg-paper-200 ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {src ? (
        <Image
          src={`${BASE}${src}`}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-navy-800"
          role="img"
          aria-label={alt}
        >
          <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
          <Image
            src={`${BASE}logo.webp`}
            alt=""
            width={72}
            height={66}
            className="relative w-16 h-auto opacity-90 brightness-0 invert"
          />
          {fallbackLabel && (
            <span className="relative text-[11px] tracking-widest text-paper-200/80">
              {fallbackLabel}
            </span>
          )}
        </div>
      )}
    </div>
  )
}
