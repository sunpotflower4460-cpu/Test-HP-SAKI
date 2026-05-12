# Liminarium Lab. — 公式サイト

マーダーミステリー制作ブランド「Liminarium Lab.」の公式ウェブサイトです。  
Vite + React + TypeScript + CSS Modules で構築されています。

---

## 🚀 セットアップ

```bash
npm install
npm run dev      # 開発サーバー起動（http://localhost:5173）
npm run build    # 素材チェック後、プロダクションビルド（dist/ へ出力）
npm run preview  # ビルド結果のプレビュー
```

`npm run build` は `npm run check:assets` を先に実行します。  
必須の実画像素材が抜けている場合、ビルド前に検知できます。

---

## 🎯 Figma再現基準

このサイトは、Figma ZIPから読み取った寸法を `docs/figma-implementation-spec.md` に固定しています。

重要な基準:

- PC: 1280px基準 / container 1120px / 左右80px
- Mobile: 390px基準 / 左右24px / content 342px
- Hero: 3120×1548素材を基準に、PC 1040×516 / Mobile 約390×194
- Works画像: 16:9
- Member画像: 1:1 circle

`home-1.png` の赤い寸法注釈や、スマホスクショ内のSafari UIは再現対象ではありません。

---

## 📂 プロジェクト構造

```
Test-HP-SAKI/
├── public/
│   └── media/
│       ├── hero/            # ヒーローカルーセル用画像・動画
│       ├── works/           # 作品カード用画像
│       ├── members/         # メンバーアバター画像
│       ├── logo/            # ロゴ画像
│       └── placeholders/    # フォールバック用プレースホルダー
├── src/
│   ├── components/
│   ├── data/siteData.ts             # 全素材パスとコンテンツの一元管理
│   ├── data/productionHeroSlides.ts # 本番表示用Heroスライド
│   ├── pages/
│   ├── index.css
│   └── figma-precision.css          # Figma寸法へ寄せる後段補正CSS
└── docs/
    ├── figma-implementation-spec.md
    ├── asset-manifest.md
    └── qa.md
```

---

## 🖼 素材差し替えガイド

### 素材パスの管理場所

すべての素材パスは `src/data/siteData.ts` で一元管理しています。  
Figma ZIP由来の素材対応表は `docs/asset-manifest.md` に固定しています。  
差し替え時は、素材を所定の `public/media/**` に配置し、必要に応じて `siteData.ts` のパスを確認します。

### ヒーローカルーセル画像・動画

本番表示では、存在する実画像だけを `src/data/productionHeroSlides.ts` にまとめています。

現時点の本番Heroは以下の3枚です。

- `public/media/hero/hero-01.jpg`
- `public/media/works/work-01.jpg`
- `public/media/works/work-02.jpg`

将来、Hero専用画像や動画を追加する場合は、ファイルを `public/media/hero/` に配置したうえで、`productionHeroSlides.ts` に追加してください。

推奨:

- 画像: `3120 / 1548` に近い横長
- Works系画像を使う場合: 16:9
- 動画: `muted`, `playsInline`, `loop`, `preload="metadata"`, `poster` を使用

### 作品（Works）画像

1. `public/media/works/` に `work-01.jpg`、`work-02.jpg` を配置する
   - 推奨比率: 16:9
   - Figma ZIP素材基準: `1707 × 960`

2. `src/data/siteData.ts` の `works` 配列の `image` フィールドを確認します。

3. トリミング位置を変えたい場合は、同じ項目の `imagePosition` を調整します。

### メンバーアバター画像

1. `public/media/members/` に `member-01.jpg`〜`member-04.jpg` を配置する
   - 推奨サイズ: 正方形
   - Figma ZIP素材基準: `450 × 450`

2. `src/data/siteData.ts` の `members` 配列の `image` フィールドを確認します。

3. 円形内の見え方を変えたい場合は、同じ項目の `imagePosition` を調整します。

---

## 🎚 画像トリミング調整

実画像は表示枠に合わせてトリミングされます。  
見せたい中心がズレる場合は、以下の値を調整してください。

- Hero: `src/data/productionHeroSlides.ts` の `objectPosition`
- Works: `src/data/siteData.ts` の `works[].imagePosition`
- Members: `src/data/siteData.ts` の `members[].imagePosition`

例:

```ts
objectPosition: '50% 44%'
imagePosition: '50% 45%'
```

---

## 🛡 画像フォールバック

画像が未配置・読み込み失敗の場合でもレイアウトが崩れないよう、`fallback` パスを `siteData.ts` で指定しています。

- Hero画像: `SafeImage` がfallbackへ切り替え
- Hero動画: `poster` とfallbackを使用
- Works画像: 読み込み失敗時にfallbackへ切り替え
- Member画像: 読み込み失敗時にfallbackへ切り替え

---

## ✅ QA

視覚確認は `docs/qa.md` を見てください。  
主な確認対象は `/`, `/about`, `/works`, `/news` です。

Phase 6の主要確認幅:

- PC: `1280px`
- Mobile: `390px`

---

## 🛠 使用技術

| ツール | バージョン |
|---|---|
| Vite | ^5.1.0 |
| React | ^18.2.0 |
| TypeScript | ^5.2.2 |
| React Router | ^6.22.0 |
| Framer Motion | ^11.0.0 |
| CSS Modules | — |

---

## 📄 ライセンス

このプロジェクトはデモ・開発目的で作成されたものです。
