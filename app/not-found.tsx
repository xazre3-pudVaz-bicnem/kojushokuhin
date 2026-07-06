import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-5 pt-24 pb-16 text-center">
      <div>
        <span className="font-en text-6xl text-wheat-400">404</span>
        <h1 className="font-heading text-2xl text-navy-800 mt-4 mb-3">
          ページが見つかりませんでした
        </h1>
        <p className="text-sm text-ink-600 leading-loose max-w-md mx-auto">
          お探しのページは移動または削除された可能性があります。<br />
          お手数ですが、トップページからお探しください。
        </p>
        <Link
          href="/"
          className="mt-8 inline-block bg-navy-800 text-paper-50 px-8 py-3 text-sm tracking-wider hover:bg-enji-600 transition-colors"
        >
          トップページへ戻る
        </Link>
      </div>
    </div>
  )
}
