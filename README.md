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

## 📂 プロジェクト構造

```
Test-HP-SAKI/
├── public/
│   └── media/
│       ├── hero/            # ヒーローカルーセル用画像・動画
│       │   ├── hero-01.jpg
│       │   ├── hero-02.jpg
│       │   ├── hero-03.mp4
│       │   ├── hero-03-poster.jpg
│       │   ├── hero-04.jpg
│       │   └── hero-05.jpg
│       ├── works/           # 作品カード用画像
│       │   ├── work-01.jpg
│       │   └── work-02.jpg
│       ├── members/         # メンバーアバター画像
│       │   ├── member-01.jpg
│       │   ├── member-02.jpg
│       │   ├── member-03.jpg
│       │   └── member-04.jpg
│       ├── logo/            # ロゴ画像
│       │   ├── logo.png
│       │   └── logo-mark.png
│       └── placeholders/    # フォールバック用プレースホルダー（SVG）
│           ├── placeholder-hero.svg
│           ├── placeholder-work.svg
│           └── placeholder-member.svg
├── src/
│   ├── components/
│   │   ├── SafeImage.tsx        # 画像フォールバック共通コンポーネント
│   │   ├── HeroCarousel.tsx     # ヒーローカルーセル（画像・動画混在）
│   │   ├── WorkCard.tsx         # 作品カード
│   │   ├── MemberCard.tsx       # メンバーカード
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout/
│   ├── data/
│   │   └── siteData.ts          # 全素材パスとコンテンツの一元管理
│   └── pages/
│       ├── Home/
│       ├── About/
│       ├── Works/
│       ├── News/
│       ├── Menu/
│       ├── Access/
│       └── Contact/
└── ...
```

---

## 🖼 素材差し替えガイド

### 素材パスの管理場所

**すべての素材パスは `src/data/siteData.ts` で一元管理しています。**  
差し替え時はこのファイルのパスを変更するだけで反映されます。

---

### ヒーローカルーセル画像・動画を差し替える

1. `public/media/hero/` に新しいファイルを配置する  
   - 画像: `hero-01.jpg`〜`hero-05.jpg`（推奨サイズ: 1920×1080px）  
   - 動画: `hero-03.mp4`（推奨: H.264, 720p〜1080p）  
   - 動画ポスター: `hero-03-poster.jpg`（動画の最初のフレームを推奨）

2. `src/data/siteData.ts` の `heroSlides` 配列を確認・更新する:

```ts
export const heroSlides: HeroSlide[] = [
  {
    id: 'hero-01',
    type: 'image',                              // 'image' または 'video'
    src: '/media/hero/hero-01.jpg',             // 実ファイルのパス
    fallback: '/media/placeholders/placeholder-hero.svg',  // 読み込み失敗時のフォールバック
    title: '物語の果てに、',
    subtitle: '何が残るか。',
    description: 'Liminarium Lab.',
    alt: 'メインビジュアル',
  },
  // 動画スライドの例:
  {
    id: 'hero-03',
    type: 'video',
    src: '/media/hero/hero-03.mp4',
    poster: '/media/hero/hero-03-poster.jpg',  // 動画読み込み前に表示する静止画
    fallback: '/media/placeholders/placeholder-hero.svg',
    title: '動き出す物語',
    subtitle: '体感せよ。',
    description: 'Movie',
  },
];
```

---

### 作品（Works）画像を差し替える

1. `public/media/works/` に `work-01.jpg`、`work-02.jpg` を配置する  
   （推奨サイズ: 1200×720px、16:10 程度）

2. `src/data/siteData.ts` の `works` 配列の `image` フィールドを確認する:

```ts
export const works: WorkItem[] = [
  {
    id: 'work-01',
    image: '/media/works/work-01.jpg',          // ← 差し替え先パス
    fallback: '/media/placeholders/placeholder-work.svg',
    // ...
  },
];
```

---

### メンバーアバター画像を差し替える

1. `public/media/members/` に `member-01.jpg`〜`member-04.jpg` を配置する  
   （推奨サイズ: 400×400px 正方形）

2. `src/data/siteData.ts` の `members` 配列の `image` フィールドを確認する:

```ts
export const members: MemberItem[] = [
  {
    id: 'member-01',
    image: '/media/members/member-01.jpg',      // ← 差し替え先パス
    fallback: '/media/placeholders/placeholder-member.svg',
    // ...
  },
];
```

---

### ロゴ画像を追加する

1. `public/media/logo/` に以下を配置する:
   - `logo.png` — フルロゴ（横長）
   - `logo-mark.png` — シンボルマーク（正方形）

2. `src/data/siteData.ts` の `siteAssets` でパスが定義されています:

```ts
export const siteAssets = {
  logo: '/media/logo/logo.png',
  logoMark: '/media/logo/logo-mark.png',
  logoFallback: '',
};
```

Header などでロゴ画像を使いたい場合は `siteAssets.logo` を参照してください。

---

## 🛡 画像フォールバックの仕組み

画像が未配置・読み込み失敗の場合でもレイアウトが崩れないよう、以下の仕組みを入れています。

| コンポーネント | 仕組み |
|---|---|
| `HeroCarousel`（画像スライド） | `SafeImage` コンポーネントが `fallback` パスへ自動切り替え。両方失敗した場合はCSSグラデーション表示 |
| `HeroCarousel`（動画スライド） | `poster` 属性で静止画を表示。動画ファイルがなくてもポスターが表示される |
| `WorkCard` | 隠し `<img>` で読み込みエラーを検知し `fallback` パスに切り替え。CSS グラデーションが常に背景に適用 |
| `MemberCard` | `WorkCard` と同様のフォールバック処理。画像失敗時は初期文字＋グラデーションを表示 |

### SafeImage コンポーネント

```tsx
import SafeImage from '../components/SafeImage';

<SafeImage
  src="/media/hero/hero-01.jpg"
  fallback="/media/placeholders/placeholder-hero.svg"
  alt="メインビジュアル"
  className={styles.media}
  loading="lazy"
/>
```

---

## 🎬 動画について（スマホ対応）

動画スライドはスマホでも安全に動作するよう、以下の設定になっています:

- `muted` — 自動再生に必須
- `playsInline` — iOS Safari でインライン再生（全画面にならない）
- `loop` — ループ再生
- `preload="metadata"` — メタデータのみ先読み（全体をダウンロードしない）
- `poster` — 動画読み込み前に表示する静止画

動画が重い場合は、スマホ向けに低解像度版（480p）を別途用意することを推奨します。

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

