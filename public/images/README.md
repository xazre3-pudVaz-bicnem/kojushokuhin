# 画像について

## 現在の構成

- 元画像（お客様支給）：`public/images/*.jpg`（ロゴ + 麺の写真6点）
- Web表示用に最適化した画像：`public/images/opt/*.webp`
  - `logo.webp` … ロゴ（ヘッダー・フッター・ブランドタイルで使用）
  - `noodles-crate-straight.webp` … 木箱の細麺（トップのメインビジュアル 等）
  - `noodles-crate-wave.webp` / `noodles-crate-fill.webp` … 木箱の麺
  - `noodles-close-a/b/c.webp` … 麺のクローズアップ

各ページでは `components/ui/Media.tsx` 経由で `next/image` として表示しています。

## 画像を追加・差し替えるとき

1. 元画像を `public/images/` に置く。
2. 最適化スクリプトで `opt/` に WebP を生成する（`sharp` 使用）。
   - 幅1600pxの WebP（q82）に縮小して配置してください。
3. 使用箇所のファイル名を差し替える。
   - `lib/constants.ts`（`PRODUCTS` / `BUSINESS_CARDS` の `image`）
   - 各ページの `<Media src="..." />`

## 撮影できると望ましい写真（今後の拡充用）

現状は「麺」の写真のみのため、以下があるとさらに訴求力が高まります。

- 製麺所の外観・工場内観・製麺機・職人の手仕事
- 併設予定のラーメン店（テストキッチン）の厨房・調理・盛り付け
- 焼きそば／あげめん／餃子／しゅうまい など品目ごとの写真

写真が未登録の品目（餃子・しゅうまい等）は、ロゴ入りのブランドタイルを
自動表示します（`Media` の `src` を未指定にすると切り替わります）。

## OGP画像

`public/og-image.jpg`（1200×630）を配置済みです。差し替える場合は同名で上書きしてください。
