# Figma ZIP implementation spec

This document is the implementation reference for reproducing the uploaded Figma ZIP design in this repository.

## Source handling rules

- `home.png`, `About.png`, and `Works.png` are the desktop visual references.
- `home-2.png`, `About-1.png`, and `Works-1.png` are the mobile visual references.
- `home-1.png` is a desktop reference with red measurement annotations. Do not reproduce the red annotations in the app.
- The mobile PNGs include iPhone/Safari browser chrome. Do not reproduce the Safari UI. Use only the web page area as a design reference.
- Prefer rebuilding the layout with CSS and components instead of placing whole-page screenshots as images.

## Desktop layout baseline

- Reference viewport width: `1280px`.
- Main content width: `1120px`.
- Main left/right margin: `80px` each.
- Header height: approximately `125px`.
- Footer height: approximately `272px` on the desktop page references.
- Primary page background: deep navy/black around `#0f0f1a` / `#090a14`.
- Header/footer surface: around `#111425`.
- Card surface: around `#171d31`.
- Accent color: muted gold around `#c9a96a`.

## Mobile layout baseline

- Reference viewport width: `390px`.
- Horizontal page padding: `24px` each side.
- Main content width: `342px`.
- Mobile header height: approximately `78px`.
- Do not include the iPhone status bar, Safari address bar, or Safari bottom toolbar in the app UI.

## Image ratio rules

### Hero

- Source hero image: `3120 × 1548`.
- Desktop display target: `1040 × 516`.
- Mobile display target: approximately `390 × 194`.
- Aspect ratio: `3120 / 1548`.

### Works images

Use `16 / 9` consistently.

- Home desktop work card image: `512 × 288`.
- Works desktop list image: `570 × 320`.
- Works mobile card image: `342 × 192`.

### Member avatars

- Source images are square, `450 × 450`.
- Desktop avatar target: about `150 × 150`.
- Mobile avatar target: about `88–96px`.
- Display avatars as circles.

## Component targets

### Header

- Desktop: text logo on the left, `About us / Works / News` on the right.
- Mobile: text logo on the left, hamburger button on the right.
- Keep the mood static and calm; avoid over-bright app-like motion.

### Home / Hero

- Desktop hero stage should feel like a centered `1040 × 516` visual inside a 1280px page.
- Use the original hero aspect ratio instead of arbitrary min-height values.
- Arrows should be circular and understated.
- Dots should sit below the hero.

### Home / Works preview

- Desktop: two cards, each about `512 × 583`, with a `512 × 288` image.
- Gap between the two desktop cards: about `96px`.
- Mobile: may be a horizontal carousel/peek layout, but must not overflow the viewport unexpectedly.

### Works page list

- Desktop card: `1120 × 320`.
- Left image: `570 × 320`.
- Right content area: about `550 × 320`.
- Gap between cards: about `50px`.
- Mobile: vertical cards with `342 × 192` images.

### About / Members

- Desktop: four columns, each about `257px` wide, with about `24px` gap.
- Desktop avatar: about `150px` circular.
- Mobile: horizontal member cards around `342 × 136`.

## QA checklist

- `npm run build` should pass.
- Check `/`, `/about`, `/works`, and `/news`.
- Check around `1280px` desktop width.
- Check around `390px` mobile width.
- No red annotation lines from `home-1.png` should appear.
- No Safari browser chrome should be reproduced.
- Works images should remain `16 / 9`.
- Page should not horizontally scroll on mobile.
