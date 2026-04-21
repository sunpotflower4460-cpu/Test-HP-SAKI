# Maison du Café - Premium Coffee Brand Website

架空のカフェブランド「Maison du Café」の高品質なブランドサイトです。PC/タブレット/スマホ全対応、上品なアニメーション付きの作品紹介型サイトとして実装しています。

## 🎯 プロジェクト概要

参考サイト（https://toudai-murder.studio.site/）の「構成の型」「見せ方の気持ちよさ」を参考に、独自のカフェブランドサイトとして完成させました。内容はすべてダミーデータですが、デザイン・体験・アニメーションの完成度を重視しています。

## 📱 実装済みページ

### 必須ページ（全て完成）

1. **Home** - トップページ（最重要）
   - Hero セクション（大きなビジュアル、ブランド名、CTAボタン）
   - Concept セクション（カフェの思想・紹介文）
   - Featured Menu セクション（3つのおすすめメニューカード）
   - News Preview セクション（最新のお知らせ3件）
   - About Preview セクション（店の雰囲気紹介）
   - Access Preview セクション（店舗情報の簡易表示）
   - CTA セクション（コンタクトへの誘導）

2. **Menu** - メニュー一覧
   - カテゴリ切替UI（All / Coffee / Dessert / Seasonal）
   - 各カードにhover演出
   - レスポンシブグリッドレイアウト
   - アニメーション付きフィルタリング

3. **News** - お知らせ一覧
   - 6件のニュース記事
   - 日付付き縦並びリスト
   - カード型レイアウト
   - hover演出付き

4. **About** - ブランド紹介
   - ブランドストーリー
   - 店の雰囲気・こだわり
   - 4つのバリュー（Quality, Passion, Sustainability, Community）
   - 画像とテキストの交互レイアウト

5. **Access** - アクセス情報
   - 住所・営業時間
   - 連絡先情報
   - 地図プレースホルダー
   - 店舗写真プレースホルダー（3枚）

6. **Contact** - お問い合わせ
   - フォームUI（名前/メール/件名/内容）
   - バリデーション付き
   - 店舗情報の再掲
   - レスポンシブ2カラムレイアウト

## 🛠 使用技術・ライブラリ

### コア技術
- **Vite** - 高速ビルドツール
- **React** 18.2.0 - UIライブラリ
- **TypeScript** 5.2.2 - 型安全性

### ルーティング・アニメーション
- **React Router** 6.22.0 - ページ遷移
- **Framer Motion** 11.0.0 - アニメーションライブラリ

### スタイリング
- **CSS Modules** - コンポーネント単位のスタイル管理
- **Google Fonts** - Playfair Display（見出し）、Inter（本文）

## ✨ 実装済みアニメーション

### 必須アニメーション
- ✅ カードのhover演出（浮く/拡大）
- ✅ スクロール時のフェードイン（全セクション）
- ✅ セクションごとのスライドイン
- ✅ ボタンのhover演出
- ✅ ヘッダーの固定表示とアニメーション
- ✅ モバイルメニューの開閉アニメーション

### 追加実装したアニメーション
- ✅ Hero内テキストのstagger表示
- ✅ ナビゲーションリンクのアンダーラインアニメーション
- ✅ メニューのカテゴリ切替アニメーション
- ✅ フォーム要素のフォーカスアニメーション

## 📱 レスポンシブ対応

### スマホ（〜768px）
- ✅ ハンバーガーメニュー実装
- ✅ Heroの文字サイズ最適化
- ✅ カード1列表示
- ✅ タッチしやすいCTAボタンサイズ
- ✅ 適切な余白調整

### タブレット（768px〜968px）
- ✅ 2列グリッド自動調整
- ✅ セクション間余白維持

### PC（968px〜）
- ✅ Hero表示の最適化
- ✅ 横並びカードレイアウト
- ✅ max-width管理（1400px）

## 🚀 セットアップ・実行方法

### 依存関係のインストール
```bash
npm install
```

### 開発サーバー起動
```bash
npm run dev
```
ブラウザで http://localhost:5173 を開く

### プロダクションビルド
```bash
npm run build
```
`dist/` フォルダに出力される

### プレビュー
```bash
npm run preview
```

## 📂 プロジェクト構造

```
Test-HP-SAKI/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   └── Layout/
│   │       ├── Header.tsx
│   │       ├── Header.module.css
│   │       ├── Footer.tsx
│   │       ├── Footer.module.css
│   │       └── Layout.tsx
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.tsx
│   │   │   └── Home.module.css
│   │   ├── Menu/
│   │   │   ├── Menu.tsx
│   │   │   └── Menu.module.css
│   │   ├── News/
│   │   │   ├── News.tsx
│   │   │   └── News.module.css
│   │   ├── About/
│   │   │   ├── About.tsx
│   │   │   └── About.module.css
│   │   ├── Access/
│   │   │   ├── Access.tsx
│   │   │   └── Access.module.css
│   │   └── Contact/
│   │       ├── Contact.tsx
│   │       └── Contact.module.css
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## 🎨 デザイン方針

### 配色
- **背景**: `#faf8f5` (オフホワイト) / `#f5f1ed` (ウォームベージュ)
- **テキスト**: `#2d2d2d` (チャコール) / `#6b6b6b` (ライトグレー)
- **アクセント**: `#8b7355` (ミューテッドゴールド) / `#6b5840` (ダークブラウン)
- **ボーダー**: `#e0ddd9`

### タイポグラフィ
- **見出し**: Playfair Display（セリフ体、エレガント）
- **本文**: Inter（サンセリフ、モダン）

### コンセプト
- 上品で洗練された印象
- 余白を広く取った読みやすいレイアウト
- 画像（プレースホルダー）を大きく見せる
- 情報密度を適切に保つ

## 🔄 本番データへの差し替え方法

### 1. テキストコンテンツ
以下のファイル内のダミーテキストを実際の内容に置き換えてください：
- `src/pages/Home/Home.tsx` - トップページの各セクション
- `src/pages/Menu/Menu.tsx` - `menuItems` 配列
- `src/pages/News/News.tsx` - `newsItems` 配列
- `src/pages/About/About.tsx` - ストーリーとバリュー
- `src/pages/Access/Access.tsx` - 店舗情報
- `src/components/Layout/Footer.tsx` - フッター情報

### 2. 画像の差し替え
現在は絵文字をプレースホルダーとして使用しています。実際の画像に差し替える場合：
```tsx
// 現在
<div className={styles['menu-card-image']}>☕</div>

// 差し替え後
<img src="/images/coffee.jpg" alt="Coffee" className={styles['menu-card-image']} />
```

画像は `public/images/` フォルダに配置することを推奨します。

### 3. ブランド名の変更
以下の箇所でブランド名 "Maison du Café" を検索し、置き換えてください：
- `index.html` - `<title>`タグ
- `src/components/Layout/Header.tsx` - ロゴ
- `src/components/Layout/Footer.tsx` - フッター
- `src/pages/Home/Home.tsx` - Hero セクション

### 4. カラースキームのカスタマイズ
`src/index.css` のCSS変数を変更することで、サイト全体の配色を変更できます：
```css
:root {
  --color-bg: #faf8f5;
  --color-accent: #8b7355;
  /* 他の色変数 */
}
```

### 5. フォントの変更
`index.html` のGoogle Fontsリンクと、`src/index.css` のフォント変数を変更してください。

## 🌐 デプロイ方法

### Vercel
```bash
# Vercel CLIをインストール
npm i -g vercel

# デプロイ
vercel
```

### Netlify
```bash
# ビルド
npm run build

# dist/ フォルダをNetlifyにドラッグ&ドロップ
```

### GitHub Pages
```bash
# ビルド
npm run build

# gh-pagesブランチにデプロイ
npm install -g gh-pages
gh-pages -d dist
```

## 📝 レスポンシブで気をつけた点

1. **ブレイクポイント管理**
   - スマホ: 〜768px
   - タブレット: 768px〜968px
   - PC: 968px〜

2. **フレキシブルグリッド**
   - `grid-template-columns: repeat(auto-fit, minmax(320px, 1fr))`
   - 画面幅に応じて自動調整

3. **タッチターゲット**
   - ボタンとリンクは最低44x44pxを確保
   - スマホでタップしやすいサイズ

4. **モバイルメニュー**
   - 固定ポジション
   - スムーズな開閉アニメーション
   - 背景のオーバーレイ

5. **画像とテキストのリフロー**
   - 2カラムレイアウトをスマホで1カラムに自動変換
   - `direction: rtl` を使った順序制御

## 🎯 完成度チェックリスト

- ✅ npm install が通る
- ✅ npm run dev が通る
- ✅ npm run build が通る
- ✅ Homeページが完成している
- ✅ 全6ページが実装済み
- ✅ ページ間遷移が動作する
- ✅ スマホ表示で崩れない
- ✅ hover アニメーションがある
- ✅ スクロールアニメーションがある
- ✅ ハンバーガーメニューが動作する
- ✅ レスポンシブ対応完了

## 📄 ライセンス

このプロジェクトはデモ・学習目的で作成されたものです。

## 🙏 クレジット

- フォント: [Google Fonts](https://fonts.google.com/)
- アニメーション: [Framer Motion](https://www.framer.com/motion/)
- ビルドツール: [Vite](https://vitejs.dev/)