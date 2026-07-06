# 有限会社幸住食品 公式サイト

東京・板橋区赤塚の製麺所「有限会社幸住食品」のコーポレートサイト。
業務用麺の製造、オリジナル麺開発、サンプル製麺、テストキッチン貸出を紹介し、
「東京 製麺所」でのSEO・板橋区でのMEOを意識した構成です。

## 技術構成

- **Next.js 16**（App Router）
- **TypeScript**
- **Tailwind CSS v4**
- **next/font**（Noto Sans JP / Noto Serif JP / Cormorant Garamond）

装飾ライブラリに依存せず、軽量なCSS + IntersectionObserverで演出しています。

## セットアップ

```bash
npm install
npm run dev      # 開発サーバー（http://localhost:3000）
npm run build    # 本番ビルド
npm run start    # 本番サーバー
npm run lint     # ESLint
```

### 環境変数

`.env.local` に以下を設定できます（未設定でも動作します）。

```
NEXT_PUBLIC_SITE_URL=https://kojushokuhin.com
```

## ディレクトリ構成

```
app/
  layout.tsx              ルートレイアウト（共通metadata・構造化データ）
  page.tsx                トップページ
  company/                会社案内
  business/               事業紹介
    quality/              麺へのこだわり
    products/             麺の種類（一覧）
      [slug]/             麺の種類 詳細（ramen / yakisoba / agemen / gyoza / shumai）
    sample/               サンプル製麺
    test-kitchen/         テストキッチン
  contact/                お問い合わせ（フォーム）
  tokyo-seimenjo/         東京の製麺所をお探しの方へ（SEO）
  business-noodles/       業務用麺の製造について（SEO）
  original-noodles/       飲食店向けオリジナル麺開発（SEO）
  ramen-noodles/          ラーメン店向け麺のご相談（SEO）
  chinese-noodles/        中華料理店向け製麺（SEO）
  itabashi-seimenjo/      板橋区の製麺所（MEO）
  sitemap/                HTMLサイトマップ
  privacy/                プライバシーポリシー
  api/contact/            お問い合わせ受信エンドポイント
  sitemap.ts / robots.ts  XMLサイトマップ・robots
components/
  layout/                 Header / Footer / MobileCTABar
  ui/                     SectionHeading / PageHero / Breadcrumb / CTASection ほか
  forms/                  ContactForm
lib/
  constants.ts            会社情報・ナビ・商品データ・FAQ 等の一元管理
  products.ts             麺の種類 詳細コンテンツ
  seo.ts                  metadata生成・構造化データ
public/images/            画像（差し替え方法は images/README.md 参照）
```

## 会社情報（`lib/constants.ts` で一元管理）

| 項目 | 内容 |
| --- | --- |
| 会社名 | 有限会社幸住食品 |
| 代表者 | 竹田 吉住 |
| 所在地 | 東京都板橋区赤塚5-28-1 |
| 電話番号 | 03-3975-4147 |
| 営業時間 | 9:00〜17:00 |

会社情報・電話番号・住所などは `lib/constants.ts` の `COMPANY` を変更すれば全ページに反映されます。

## 実装メモ

- **お問い合わせフォーム**: `app/api/contact/route.ts` は受信内容をログ出力し成功を返す
  仮実装です。本番ではメール送信（Resend / SendGrid 等）や通知連携を接続してください。
- **画像**: 未用意箇所はプレースホルダー表示。差し替え手順は `public/images/README.md` を参照。
- **郵便番号・座標**: `COMPANY.postalCode` / `lat` / `lng` はおおよその値です。正確な値に差し替えてください。
- **OGP画像**: `public/og-image.jpg`（1200×630）を配置してください。
- **構造化データ**: LocalBusiness / Organization / BreadcrumbList / FAQPage を実装済み。
