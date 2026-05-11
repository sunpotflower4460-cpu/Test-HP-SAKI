# Liminarium Lab. — 公式サイト

マーダーミステリー制作ブランド「Liminarium Lab.」の公式ウェブサイトです。  
Vite + React + TypeScript + CSS Modules で構築されています。

---

## 🚀 セットアップ

```bash
npm install
npm run dev      # 開発サーバー起動（http://localhost:5173）
npm run build    # プロダクションビルド（dist/ へ出力）
npm run preview  # ビルド結果のプレビュー
```

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
│   ├── data/siteData.ts     # 全素材パスとコンテンツの一元管理
│   ├── pages/
│   ├── index.css
│   └── figma-precision.css  # Figma寸法へ寄せる後段補正CSS
└── docs/
    ├── figma-implementation-spec.md
    └── qa.md
```

---

## 🖼 素材差し替えガイド

### 素材パスの管理場所

すべての素材パスは `src/data/siteData.ts` で一元管理しています。  
差し替え時はこのファイルのパスを変更するだけで反映されます。

### ヒーローカルーセル画像・動画

1. `public/media/hero/` に新しいファイルを配置する
   - 画像: `hero-01.jpg`〜`hero-05.jpg`
   - 推奨比率: `3120 / 1548` に近い横長
   - 動画: `hero-03.mp4`
   - 動画ポスター: `hero-03-poster.jpg`

2. `src/data/siteData.ts` の `heroSlides` 配列を確認・更新します。

### 作品（Works）画像

1. `public/media/works/` に `work-01.jpg`、`work-02.jpg` を配置する
   - 推奨比率: 16:9
   - Figma ZIP素材基準: `1707 × 960`

2. `src/data/siteData.ts` の `works` 配列の `image` フィールドを確認します。

### メンバーアバター画像

1. `public/media/members/` に `member-01.jpg`〜`member-04.jpg` を配置する
   - 推奨サイズ: 正方形
   - Figma ZIP素材基準: `450 × 450`

2. `src/data/siteData.ts` の `members` 配列の `image` フィールドを確認します。

---

## 🛡 画像フォールバック

画像が未配置・読み込み失敗の場合でもレイアウトが崩れないよう、`fallback` パスを `siteData.ts` で指定しています。

- Hero画像: `SafeImage` がfallbackへ切り替え
- Hero動画: `poster` とfallbackを使用
- Works画像: 読み込み失敗時にfallbackへ切り替え
- Member画像: 読み込み失敗時にfallbackへ切り替え

---

## 🎬 動画について

動画スライドはスマホでも安全に動作するよう、以下を使います。

- `muted`
- `playsInline`
- `loop`
- `preload="metadata"`
- `poster`

---

## ✅ QA

視覚確認は `docs/qa.md` を見てください。  
主な確認対象は `/`, `/about`, `/works`, `/news` です。

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
