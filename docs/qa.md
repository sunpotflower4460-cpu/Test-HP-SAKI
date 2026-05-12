# QA

This checklist is for the Figma-based Liminarium Lab. site.

## Required commands

Run these before merging production-facing changes:

```bash
npm run check:assets
npm run build
```

`npm run build` already runs `check:assets`, but keeping both commands in QA makes the intent explicit.

## Required routes

Check these pages:

- `/`
- `/about`
- `/works`
- `/news`

## Required viewports

Use these widths as the main Figma reference points:

- Desktop: `1280px`
- Mobile: `390px`

Additional useful widths:

- Narrow mobile: `360px`
- Large desktop: `1440px`

## Global layout targets

- Desktop container: `1120px`
- Desktop side gutter: `80px`
- Mobile side gutter: `24px`
- Mobile content width at 390px: about `342px`
- Header desktop height: about `125px`
- Header mobile height: about `78px`
- Footer should not feel taller than the Figma reference unless content forces it.

## Real asset checks

The production site must use real assets for the required media paths:

- `/media/hero/hero-01.jpg`
- `/media/works/work-01.jpg`
- `/media/works/work-02.jpg`
- `/media/members/member-01.jpg`
- `/media/members/member-02.jpg`
- `/media/members/member-03.jpg`
- `/media/members/member-04.jpg`
- `/media/logo/logo.png`

No full-page screenshot should be used as an implementation asset.

Do not implement:

- Red measurement annotations from `home-1.png`
- Safari or iPhone UI from mobile screenshots
- Whole-page screenshots as background images

## Home page checks

At desktop `1280px`:

- Header aligns with the `1120px` container.
- Hero sits under the header with a Figma-like gap.
- Hero carousel uses only real assets and does not fall back to placeholder slides.
- Hero visual ratio feels close to the Figma reference.
- Hero overlay keeps text readable without making the image look muddy.
- Works preview cards appear as two strong cards with 16:9 images.
- News preview is readable and not visually heavier than Works.

At mobile `390px`:

- Header height is close to `78px`.
- Hero does not overflow horizontally.
- Hero text is readable over the image.
- Hero arrows and dots do not cover important image content too aggressively.
- Works preview maintains the intended carousel / card feel.
- Mobile gutters feel close to `24px`.

## Works page checks

At desktop `1280px`:

- Work cards are wide horizontal cards.
- Image area remains close to 16:9 and does not look stretched.
- Text area does not feel cramped.
- Disabled / placeholder links do not behave like real links.

At mobile `390px`:

- Work cards stack cleanly.
- Images stay 16:9.
- CTA / disabled CTA does not overflow.
- Long titles wrap without breaking the card rhythm.

## About page checks

At desktop `1280px`:

- Member cards form a stable 4-column layout.
- Avatars stay circular and visually centered.
- Member text does not collide with avatar or card edge.

At mobile `390px`:

- Member cards stack cleanly.
- Avatar + text layout stays readable.
- Circular avatar crop does not cut the main subject too severely.

## News page checks

At desktop and mobile:

- Date / label / title alignment remains readable.
- `NEW` label does not overpower the list.
- Mobile line breaks are natural.

## Accessibility checks

- Keyboard Tab should show `本文へスキップ` first.
- Enter on the skip link should move focus to `main`.
- Header nav and mobile menu are reachable by keyboard.
- Disabled placeholder SNS / Works links are not focusable as fake real links.
- Images that are decorative should not create noisy screen-reader output.

## Final acceptance for Phase 6

Phase 6 can be considered complete when:

- Required commands pass.
- Required routes are checked at `1280px` and `390px`.
- No required image falls back to placeholder.
- Hero, Works, and Member image crops are acceptable.
- No obvious horizontal overflow appears on mobile.
- Header and Footer spacing feel close enough to the Figma reference.
