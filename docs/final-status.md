# Final Status

このドキュメントは、Figma ZIP再現から公開前最終仕上げまでの現在地を記録するためのメモです。

## Current status

設計図ベースの実装作業は完了扱いです。

対象サイト:

- Liminarium Lab. 公式サイト
- Public URL: `https://test-hp-saki.vercel.app/`

## Completed phases

### Phase 1-4

- Vite + React + TypeScript構成
- Home / About / Works / News の基本ページ
- Figma基準のレイアウト補正
- PC / Mobile基準寸法の整理
- SEO/OGPの初期設定
- 仮リンクのdisabled表示
- アクセシビリティの基礎対応

### Phase 5

- Figma ZIP由来の実画像素材を `public/media/**` に投入
- Hero / Works / Members / Logo の実画像化
- `check:assets` で必須素材の存在確認

### Phase 6

- `npm run build` 前に `check:assets` を必須化
- Heroを実在画像のみの `productionHeroSlides.ts` へ整理
- Hero / Works / Member の表示位置調整をデータ側で可能化
- スマホHeader / Footerの余白微調整
- `docs/qa.md` を実画像QA用に拡張
- READMEへ実画像運用・トリミング調整方法を反映

### Phase 7

- canonical / OGP image / twitter image / og:url を追加
- `robots.txt` と `sitemap.xml` を追加
- SPA直リンク対策
  - Vercel: `vercel.json` rewrite確認済み
  - Cloudflare Workers assets deploy: `public/_redirects` は無限ループ判定になるため削除済み
- NotFoundページ追加
- 仮リンクを `#` から空文字へ整理
- `docs/release-checklist.md` 追加
- `check:release` を手動検証コマンドとして追加

### Final visual refinement after mobile check

スマホ実機確認後、Figma ZIP基準にさらに近づけるため、以下を追加調整しました。

- Hero画像内にすでに文字が焼き込まれているため、React側のHero重ね文字とoverlayを非表示化
- スマホHero上で縦スクロールが引っかかりにくいようにtouch/overscroll周りを調整
- スマホHero矢印が大きく出ないよう、`figma-precision.css` の上書きを調整
- Home / About / Works / News の文言をFigma ZIP画像の内容へ再調整
- 日本語タイポグラフィは `Noto Sans JP` を基準に維持
- 英字ロゴは `Cormorant Garamond` を維持
- 背景色、Header/Footer色、金色アクセント、本文グレーをFigma ZIPの見え方へ寄せる
- WorkCard / MemberCard / News / About / Home / Footer の色・フォントを調整
- Worksページに `And More...` を追加
- 作品画像上の余計なステータスバッジと暗いグラデーションを削除
- `#9747FF` はFigma管理色として扱い、実装には使用しない

## Build status

main最新のVercel buildは成功しています。

Cloudflare Workers deployでは、`public/_redirects` を置かない構成にしています。
Cloudflare側でSPA直リンク挙動を追加調整する場合は、Cloudflare / Wrangler 側の設定で行ってください。

ローカルまたはCloud Agentで最終確認する場合:

```bash
npm run check:assets
npm run check:release
npm run build
```

## Required final manual visual check

以下は人間の目視で最終確認してください。

- `/`
- `/about`
- `/works`
- `/news`
- `/unknown-path`

主な確認幅:

- Desktop: `1280px`
- Mobile: `390px`

特にスマホでは以下を確認してください。

- Hero画像内文字とReact文字が二重になっていない
- Hero上から縦スクロールできる
- Works上からも縦スクロールを阻害しない
- Hero矢印が大きすぎない
- Figma ZIPに近い色・フォント・文言になっている

## Known intentional placeholders

現時点では以下は未接続で問題ありません。

- Works特設サイトリンク
- X
- YouTube

これらは空文字のまま保持され、UIではdisabled表示になります。

実URLが決まったら `src/data/siteData.ts` を更新してください。

- `works[].link`
- `socialLinks[].href`

## Domain note

現時点のcanonical / OGP / sitemap / robotsは以下のURLを基準にしています。

```txt
https://test-hp-saki.vercel.app/
```

独自ドメインへ切り替える場合は、以下を置換してください。

- `index.html`
- `public/robots.txt`
- `public/sitemap.xml`

## Final decision

コード・素材・ドキュメント・公開前導線の整備は完了です。

人間の最終目視で大きな崩れがなければ、この設計図ベースの作業は完了として扱えます。
