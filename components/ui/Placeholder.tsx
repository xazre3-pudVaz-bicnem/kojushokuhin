type Props = {
  label: string
  ratio?: string
  className?: string
}

/**
 * 画像差し替え用プレースホルダー。
 * public/images 配下の画像が用意でき次第、next/image に差し替えてください。
 */
export default function Placeholder({ label, ratio = '4 / 3', className = '' }: Props) {
  return (
    <div
      className={`relative overflow-hidden bg-navy-700 ${className}`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
      <div
        className="absolute inset-0 opacity-[0.08]"
        aria-hidden
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, #ffffff 0 1px, transparent 1px 6px)',
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <span className="text-center text-[11px] tracking-widest text-paper-200/70">
          {label}
        </span>
      </div>
    </div>
  )
}
