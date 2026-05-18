# Release Operation

## Production source
- main branch を公開基準にする

## Deploy
- Vercel: preview / production確認
- Cloudflare Workers: public/_redirects を置かない
- canonical / robots / sitemap は現状 `https://test-hp-saki.vercel.app/` を代表URLとして扱う
- 本番ドメイン確定後は `index.html` / `public/robots.txt` / `public/sitemap.xml` を更新する

## Manual checks
- Home
- About
- Works
- News
- 404
- 390px mobile
- 1280px desktop

## SEO
- title
- description
- canonical
- OGP
- robots
- sitemap

## Known placeholders
- 未公開リンク
- 制作中作品
- 本番ドメイン確定後に更新する項目
