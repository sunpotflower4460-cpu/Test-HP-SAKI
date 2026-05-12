# Asset import guide

This guide explains the Phase 5 asset import flow.

## Goal

Put optimized Figma ZIP assets into the exact paths used by the app.

Use `docs/asset-manifest.md` as the source mapping.

## 1. Optional: stage assets from extracted Figma folder

When the Figma ZIP is already extracted, this command copies the required source files into `_asset-staging/public/media/**` using the final app filenames:

```bash
npm run stage:figma-assets -- path/to/extracted-figma-folder
```

A custom staging folder can also be passed:

```bash
node scripts/stage-figma-assets.mjs path/to/extracted-figma-folder path/to/staging
```

This staging step only renames and copies files. Optimize or convert formats before the final commit if needed.

## 2. Prepare staging folder

Create this folder locally or in a Cloud Agent workspace:

```txt
_asset-staging/
└── public/
    └── media/
        ├── hero/
        │   └── hero-01.jpg
        ├── works/
        │   ├── work-01.jpg
        │   └── work-02.jpg
        ├── members/
        │   ├── member-01.jpg
        │   ├── member-02.jpg
        │   ├── member-03.jpg
        │   └── member-04.jpg
        └── logo/
            └── logo.png
```

## 3. Export / optimize assets

Recommended source mapping:

- `image 4.png` -> `_asset-staging/public/media/hero/hero-01.jpg`
- `Remove_ONLY_the_maple_leaf_decorations_from_this_i-1777218403497 2.png` -> `_asset-staging/public/media/works/work-01.jpg`
- `あったかくて甘くて潰れた_イラスト合わせ 2.png` -> `_asset-staging/public/media/works/work-02.jpg`
- `よしの 1.png` -> `_asset-staging/public/media/members/member-01.jpg`
- `IMG_2532 2 1.png` -> `_asset-staging/public/media/members/member-02.jpg`
- `S__3252226 1.png` -> `_asset-staging/public/media/members/member-03.jpg`
- `IMG_2532 3.png` -> `_asset-staging/public/media/members/member-04.jpg`
- `Liminarium Lab.  4.png` -> `_asset-staging/public/media/logo/logo.png`

Do not use full-page screenshots as app assets.

## 4. Import assets

```bash
npm run import:assets
```

This copies files from `_asset-staging/public/media/**` into `public/media/**`.

A custom staging folder can be passed directly:

```bash
node scripts/import-assets.mjs path/to/staging
```

The custom folder must still contain `public/media/**` inside it.

## 5. Check assets

```bash
npm run check:assets
```

This verifies required files exist and are not empty.

## 6. Build

```bash
npm run build
```

## Phase 5 visual check

After import, check:

- `/` at desktop `1280px` and mobile `390px`
- `/about` at desktop `1280px` and mobile `390px`
- `/works` at desktop `1280px` and mobile `390px`

Main visual risks:

- Hero crop position
- Works image contrast under gradient overlay
- Member avatar crop
- Logo size and spacing
