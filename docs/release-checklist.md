# Release Checklist

公開前の最終確認リストです。

## Build

```bash
npm run check:assets
npm run build
```

## Pages

以下をPC `1280px` とMobile `390px` で確認します。

- `/`
- `/about`
- `/works`
- `/news`
- 未定義URL例: `/unknown-path`

## Assets

以下がplaceholderではなく実画像で表示されることを確認します。

- Hero: `/media/hero/hero-01.jpg`
- Works: `/media/works/work-01.jpg`
- Works: `/media/works/work-02.jpg`
- Members: `/media/members/member-01.jpg` 〜 `/media/members/member-04.jpg`
- Logo: `/media/logo/logo.png`

## Links

現時点では外部リンクが未接続のため、以下はdisabled表示で問題ありません。

- Works特設サイトリンク
- X
- YouTube

公開前に実URLが決まった場合は `src/data/siteData.ts` を更新してください。

- `works[].link`
- `socialLinks[].href`

空文字のままなら、UIではdisabled表示として扱います。

## SEO / Public files

以下が配信されることを確認します。

- `/robots.txt`
- `/sitemap.xml`

`index.html` の以下が現在の公開URLと合っていることを確認します。

- canonical
- `og:url`
- `og:image`
- `twitter:image`

独自ドメインへ切り替える場合は、上記URLを置換してください。

## Routing

- `/about` 直リンクで表示される
- `/works` 直リンクで表示される
- `/news` 直リンクで表示される
- 存在しないURLではNotFoundページが表示される

## Accessibility

- `本文へスキップ` がキーボードで最初に表示される
- Header navigationがキーボードで操作できる
- Mobile menuが開閉できる
- disabledリンクが本物のリンクのようにfocusされない

## Final decision

以下を満たしたら公開前最終仕上げは完了扱いにできます。

- Build成功
- 実画像表示OK
- SPA直リンクOK
- NotFound OK
- OGP / robots / sitemap OK
- 仮リンクがdisabledとして見える
- PC / Mobileで大きな崩れなし
