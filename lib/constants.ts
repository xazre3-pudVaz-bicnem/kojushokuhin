export const SITE_NAME = '有限会社幸住食品'
export const SITE_NAME_SHORT = '幸住食品'
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kojushokuhin.com'

export const PHONE = '03-3975-4147'
export const PHONE_TEL = 'tel:0339754147'

/** 電話番号の横に必ず添える一文 */
export const PHONE_NOTE = 'ホームページを見たとお伝えいただけるとスムーズです'

export const COMPANY = {
  name: '有限会社幸住食品',
  nameKana: 'ゆうげんがいしゃ こうじゅうしょくひん',
  representative: '竹田 吉住',
  postalCode: '175-0092',
  address: '東京都板橋区赤塚5-28-1',
  addressRegion: '東京都',
  addressLocality: '板橋区',
  streetAddress: '赤塚5-28-1',
  phone: PHONE,
  hours: '9:00〜17:00',
  holiday: '土・日・祝',
  business: '製麺所／業務用麺の製造・オリジナル麺開発・サンプル製麺・テストキッチン貸出',
  /** 板橋区赤塚5-28-1 のおおよその座標（差し替え可） */
  lat: 35.7876,
  lng: 139.6392,
  googleMapUrl: 'https://maps.google.com/?q=東京都板橋区赤塚5-28-1',
  googleMapEmbedUrl:
    'https://maps.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%9D%BF%E6%A9%8B%E5%8C%BA%E8%B5%A4%E5%A1%9A5-28-1&hl=ja&z=16&ie=UTF8&iwloc=&output=embed',
} as const

/** グローバルナビゲーション */
export const NAV_ITEMS = [
  { label: '会社案内', href: '/company' },
  {
    label: '事業紹介',
    href: '/business',
    children: [
      { label: '麺へのこだわり', href: '/business/quality' },
      { label: '麺の種類', href: '/business/products' },
      { label: 'サンプル製麺', href: '/business/sample' },
      { label: 'テストキッチン', href: '/business/test-kitchen' },
    ],
  },
  {
    label: '麺の種類',
    href: '/business/products',
    children: [
      { label: 'ラーメン', href: '/business/products/ramen' },
      { label: '焼きそば', href: '/business/products/yakisoba' },
      { label: 'あげめん', href: '/business/products/agemen' },
      { label: '餃子', href: '/business/products/gyoza' },
      { label: 'しゅうまい', href: '/business/products/shumai' },
    ],
  },
  { label: 'お問い合わせ', href: '/contact' },
] as const

/** 麺の種類（一覧・詳細で共有） */
export const PRODUCTS = [
  {
    slug: 'ramen',
    name: 'ラーメン用麺',
    short: 'ラーメン',
    href: '/business/products/ramen',
    category: 'noodle',
    lead: 'スープの種類や提供スタイルに合わせて、細麺から太麺、ちぢれ・ストレートまで幅広く製造します。',
    image: '/images/products/ramen.jpg',
  },
  {
    slug: 'yakisoba',
    name: '焼きそば用麺',
    short: '焼きそば',
    href: '/business/products/yakisoba',
    category: 'noodle',
    lead: '鉄板・中華鍋での調理を想定し、ほぐれやすさやソースの絡みを考えた蒸し麺・生麺に対応します。',
    image: '/images/products/yakisoba.jpg',
  },
  {
    slug: 'agemen',
    name: 'あげめん',
    short: 'あげめん',
    href: '/business/products/agemen',
    category: 'noodle',
    lead: '揚げ調理を前提とした、食感と油切れにこだわった麺。おつまみ・スナック・トッピング用途に。',
    image: '/images/products/agemen.jpg',
  },
  {
    slug: 'gyoza',
    name: '餃子（中華食品のご相談）',
    short: '餃子',
    href: '/business/products/gyoza',
    category: 'related',
    lead: '皮をはじめとした中華食品・関連商品についても、用途に応じてご相談を承ります。',
    image: '/images/products/gyoza.jpg',
  },
  {
    slug: 'shumai',
    name: 'しゅうまい（中華食品のご相談）',
    short: 'しゅうまい',
    href: '/business/products/shumai',
    category: 'related',
    lead: '中華食品・惣菜まわりの商品づくりについて、麺以外の関連商品もあわせてご相談ください。',
    image: '/images/products/shumai.jpg',
  },
] as const

/** 事業紹介カード（TOP・事業紹介トップで共有） */
export const BUSINESS_CARDS = [
  {
    title: '麺へのこだわり',
    href: '/business/quality',
    lead: '用途・スープ・調理方法に合わせて、太さ・食感・加水率・ゆで時間を調整。飲食店のメニュー開発を支える麺づくりです。',
  },
  {
    title: '麺の種類',
    href: '/business/products',
    lead: 'ラーメン・焼きそば・あげめんなど、用途に応じた業務用麺を製造。中華食品・関連商品のご相談も承ります。',
  },
  {
    title: 'サンプル製麺',
    href: '/business/sample',
    lead: '「こういう麺を作りたい」という段階から試作に対応。既存メニューの改善やスープに合わせた調整もご相談いただけます。',
  },
  {
    title: 'テストキッチン',
    href: '/business/test-kitchen',
    lead: '製麺所の横にOPEN予定のラーメン店を活用し、製麺した麺を実際に調理・試食・検証できる場としてご利用いただけます。',
  },
  {
    title: '業務用取引のご相談',
    href: '/business-noodles',
    lead: '飲食店・ラーメン店・中華料理店・惣菜店・食品メーカーへ、業務用麺を安定して供給する体制を整えています。',
  },
] as const

/** 選ばれる理由 */
export const REASONS = [
  {
    title: '東京で業務用麺を相談できる',
    body: '板橋区赤塚の自社製麺所で、飲食店・食品事業者からの業務用麺のご相談を直接お受けします。',
  },
  {
    title: '小ロット・試作の相談に対応',
    body: '新メニュー開発やテスト販売など、まずは少量から試したいというご要望にも柔軟に対応します。',
  },
  {
    title: '製麺から調理テストまで一貫',
    body: '併設予定のテストキッチンで、製麺した麺を実際に調理・試食し、味や食感を確認できます。',
  },
  {
    title: 'メニュー開発を伴走支援',
    body: 'スープや具材、提供スタイルに合わせた麺づくりで、飲食店・食品事業者のメニュー開発を支えます。',
  },
] as const

/** よくある質問（FAQPage schema と共有） */
export const FAQS = [
  {
    q: '小ロットでも麺の製造を相談できますか。',
    a: '新メニューの開発やテスト販売など、まずは少量から試したいというご相談にも対応しています。数量やご希望の内容をお問い合わせフォームまたはお電話でお知らせください。',
  },
  {
    q: 'どのような業種からの相談が多いですか。',
    a: 'ラーメン店・中華料理店をはじめ、飲食店、惣菜店、食品メーカーなど、業務用麺を必要とする幅広い事業者さまからご相談をいただいています。',
  },
  {
    q: '「こういう麺を作りたい」という要望段階でも相談できますか。',
    a: 'はい。完成したレシピがなくても、スープや調理方法、イメージしている食感などをお伺いしながら、サンプル製麺を通して形にしていきます。',
  },
  {
    q: 'テストキッチンはどのように利用できますか。',
    a: '製麺所の横にOPEN予定のラーメン店を、製麺した麺を実際に調理・試食・検証できる場としてご利用いただけます。ご利用条件はお問い合わせより個別にご相談ください。',
  },
  {
    q: '対応エリアはどこまでですか。',
    a: '東京都板橋区の製麺所を拠点に、東京都内および近郊の飲食店・食品事業者さまへの業務用麺の供給・ご相談に対応しています。詳しくはお問い合わせください。',
  },
  {
    q: '見積もりや相談に費用はかかりますか。',
    a: 'ご相談・お見積りは無料です。まずはお気軽にお問い合わせください。お電話の際は「ホームページを見た」とお伝えいただけるとスムーズです。',
  },
] as const

/** お問い合わせ種別 */
export const INQUIRY_TYPES = [
  '業務用麺の相談',
  'オリジナル麺の相談',
  'サンプル製麺',
  'テストキッチン',
  'その他',
] as const

/** SEO用ランディングページ（フッター・内部リンクで共有） */
export const LANDING_PAGES = [
  { label: '東京の製麺所をお探しの方へ', href: '/tokyo-seimenjo' },
  { label: '業務用麺の製造について', href: '/business-noodles' },
  { label: '飲食店向けオリジナル麺開発', href: '/original-noodles' },
  { label: 'ラーメン店向け麺のご相談', href: '/ramen-noodles' },
  { label: '中華料理店向け製麺', href: '/chinese-noodles' },
  { label: '板橋区の製麺所 有限会社幸住食品', href: '/itabashi-seimenjo' },
] as const
