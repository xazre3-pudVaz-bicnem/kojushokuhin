# 画像の配置について

このサイトでは、画像がまだ用意されていない箇所を `components/ui/Placeholder.tsx` の
プレースホルダーで表示しています。実際の写真が用意でき次第、以下の要領で差し替えてください。

## 差し替え手順

1. 写真をこのフォルダ（`public/images/`）配下に配置します。
   推奨フォーマット：`.webp`（または `.jpg`）。
2. 該当ページの `<Placeholder label="..." />` を `next/image` の `<Image />` に置き換えます。

```tsx
import Image from 'next/image'

<Image
  src="/images/products/ramen.webp"
  alt="スープに合わせて製造したラーメン用麺"
  width={800}
  height={600}
  className="w-full h-auto"
/>
```

## 推奨する画像（命名例）

| 用途 | ファイル名（例） |
| --- | --- |
| トップ メインビジュアル | `/images/hero.webp` |
| 製麺工程・小麦粉 | `/images/factory-process.webp` |
| 製麺所 内観・職人 | `/images/factory-interior.webp` |
| ラーメン用麺 | `/images/products/ramen.webp` |
| 焼きそば用麺 | `/images/products/yakisoba.webp` |
| あげめん | `/images/products/agemen.webp` |
| 餃子 | `/images/products/gyoza.webp` |
| しゅうまい | `/images/products/shumai.webp` |
| テストキッチン（厨房・調理） | `/images/test-kitchen.webp` |
| OGP画像（1200×630） | `/public/og-image.jpg` |

## OGP画像

SNSシェア時に表示される画像は `public/og-image.jpg`（1200×630px）です。
未配置の場合はOGP画像なしで表示されます。用意でき次第、同名で配置してください。
