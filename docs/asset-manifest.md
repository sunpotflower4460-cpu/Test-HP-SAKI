# Asset manifest

This file maps the uploaded Figma ZIP assets to the repository paths used by `src/data/siteData.ts`.

## Important

The Figma ZIP assets are the visual source of truth. Do not use whole-page screenshots as page backgrounds. Use the individual visual assets below.

## Hero

| Source asset | Target path | Notes |
|---|---|---|
| `image 4.png` | `public/media/hero/hero-01.jpg` | Main hero visual. Source size: `3120 x 1548`. Keep the ratio close to `3120 / 1548`. |

Recommended export:

- Use `.jpg` or optimized `.webp` for production.
- Keep a high quality original outside the app if needed.
- The current code expects `/media/hero/hero-01.jpg`.

## Works

| Source asset | Target path | Notes |
|---|---|---|
| `Remove_ONLY_the_maple_leaf_decorations_from_this_i-1777218403497 2.png` | `public/media/works/work-01.jpg` | Work image for `千草色に吹く 未完の詩`. Source size: `1707 x 960`, close to `16 / 9`. |
| `あったかくて甘くて潰れた_イラスト合わせ 2.png` | `public/media/works/work-02.jpg` | Work image for `あったかくて、甘くて、潰れた`. Source size: `1707 x 960`, close to `16 / 9`. |

Recommended export:

- Use `16 / 9`.
- Current Figma reference uses these images at `512 x 288`, `570 x 320`, and `342 x 192` depending on layout.

## Members

| Source asset | Target path | Notes |
|---|---|---|
| `よしの 1.png` | `public/media/members/member-01.jpg` | Square avatar. Source size: `450 x 450`. |
| `IMG_2532 2 1.png` | `public/media/members/member-02.jpg` | Square avatar. Source size: `450 x 450`. |
| `S__3252226 1.png` | `public/media/members/member-03.jpg` | Square avatar. Source size: `450 x 450`. |
| `IMG_2532 3.png` | `public/media/members/member-04.jpg` | Square avatar. Source size: `450 x 450`. |

Recommended export:

- Keep square crop.
- The UI displays avatars as circles.

## Logo

| Source asset | Target path | Notes |
|---|---|---|
| `Liminarium Lab.  4.png` | `public/media/logo/logo.png` | Wide decorative logo. Source size: `930 x 456`. |

## Not for direct implementation

| Source asset | Reason |
|---|---|
| `home.png` | Full-page desktop reference only. |
| `home-1.png` | Measurement reference only. Red annotations must not be implemented. |
| `About.png` | Full-page desktop reference only. |
| `Works.png` | Full-page desktop reference only. |
| `home-2.png` | Mobile screenshot reference only. Safari UI must not be implemented. |
| `About-1.png` | Mobile screenshot reference only. Safari UI must not be implemented. |
| `Works-1.png` | Mobile screenshot reference only. Safari UI must not be implemented. |

## Current code paths

These are the paths already referenced by `src/data/siteData.ts`:

- `/media/hero/hero-01.jpg`
- `/media/hero/hero-02.jpg`
- `/media/hero/hero-03.mp4`
- `/media/hero/hero-03-poster.jpg`
- `/media/hero/hero-04.jpg`
- `/media/hero/hero-05.jpg`
- `/media/works/work-01.jpg`
- `/media/works/work-02.jpg`
- `/media/members/member-01.jpg`
- `/media/members/member-02.jpg`
- `/media/members/member-03.jpg`
- `/media/members/member-04.jpg`
- `/media/logo/logo.png`
- `/media/logo/logo-mark.png`

## Phase 5 completion condition

Phase 5 is complete when:

- The target paths above contain the actual optimized visual assets.
- Home, About, and Works pages use the real images without fallback.
- The images preserve the Figma ratios.
- Vercel build succeeds.
- Desktop `1280px` and mobile `390px` visual checks pass.
