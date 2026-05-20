# GitHub Pages 公開手順

このリポジトリは GitHub Pages で公開する前提に設定済みです。

## 公開URL

https://sunpotflower4460-cpu.github.io/liminarium-lab/

## 自動設定済み

- `vite.config.ts` の `base` を `/liminarium-lab/` に設定
- React Router に `basename={import.meta.env.BASE_URL}` を設定
- `.github/workflows/deploy.yml` を追加
- `npm run build` 後に GitHub Pages 用の補助ファイルを作成
- `/about`, `/works`, `/news` の直アクセス用HTMLをビルド後に作成
- `404.html` と `.nojekyll` をビルド後に作成
- `robots.txt` を GitHub Pages URL に更新
- `sitemap.xml` を GitHub Pages URL に更新
- `index.html` の canonical / OGP / Twitter画像URL を GitHub Pages URL に更新
- 公開時に画像パスが崩れないよう、主要な public asset path を `import.meta.env.BASE_URL` 対応に変更

## 手動で必要な作業

1. GitHub のリポジトリ画面を開く
2. `Settings` を開く
3. 左メニューの `Pages` を開く
4. `Build and deployment` の `Source` を `GitHub Actions` に変更する
5. 保存する
6. `Actions` タブを開く
7. `Deploy static content to Pages` を選ぶ
8. `Run workflow` で手動実行する、または `main` に追加コミットをpushして自動実行する

## 公開後の確認URL

- Home: https://sunpotflower4460-cpu.github.io/liminarium-lab/
- About: https://sunpotflower4460-cpu.github.io/liminarium-lab/about
- Works: https://sunpotflower4460-cpu.github.io/liminarium-lab/works
- News: https://sunpotflower4460-cpu.github.io/liminarium-lab/news
- Sitemap: https://sunpotflower4460-cpu.github.io/liminarium-lab/sitemap.xml
- Robots: https://sunpotflower4460-cpu.github.io/liminarium-lab/robots.txt

## Google Search Console

公開後、Google Search Console に以下URLを登録します。

https://sunpotflower4460-cpu.github.io/liminarium-lab/

その後、サイトマップとして以下を送信します。

https://sunpotflower4460-cpu.github.io/liminarium-lab/sitemap.xml

## 独自ドメインに変える場合

独自ドメインを設定したら、以下をドメインに合わせて変更します。

- `vite.config.ts`
  - 独自ドメイン直下なら `base: '/'`
- `index.html`
  - canonical
  - og:url
  - og:image
  - twitter:image
- `public/robots.txt`
- `public/sitemap.xml`

例: `https://liminarium-lab.com/` にする場合は、すべての正式URLをそのドメインへ統一します。
