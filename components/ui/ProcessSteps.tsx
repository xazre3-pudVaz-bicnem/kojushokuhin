const STEPS = [
  {
    title: 'お問い合わせ',
    body: 'お電話またはフォームより、麺の用途やご相談の背景をお知らせください。「こういう麺を作りたい」という段階でも構いません。',
  },
  {
    title: 'ヒアリング・ご提案',
    body: 'スープや調理方法、想定する食感・数量などをお伺いし、麺の仕様をご提案します。',
  },
  {
    title: 'サンプル製麺・試作',
    body: 'ご相談内容をもとに麺を試作。必要に応じてテストキッチンで実際に調理・試食し、味や食感を確認します。',
  },
  {
    title: '調整・お取引開始',
    body: '試作結果をふまえて太さ・加水率・ゆで時間などを調整し、業務用としての製造・安定供給へ進みます。',
  },
] as const

/** お問い合わせから取引開始までの流れ */
export default function ProcessSteps() {
  return (
    <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {STEPS.map((s, i) => (
        <li key={i} className="relative border border-paper-300 bg-paper-50 p-6">
          <span className="font-en text-3xl text-wheat-400 leading-none">
            0{i + 1}
          </span>
          <h3 className="font-heading text-base text-navy-800 mt-3 mb-2">{s.title}</h3>
          <p className="text-sm leading-relaxed text-ink-600">{s.body}</p>
        </li>
      ))}
    </ol>
  )
}
