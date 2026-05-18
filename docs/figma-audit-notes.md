# Figma Audit Notes

- Verified `docs/figma-design-standard.md` and `docs/figma-implementation-checklist.md` as the source of truth for this audit pass.
- Unified primary dark surfaces around `#0F0F1A`, `#16213E`, `#111425`, `#131728`, and `#171D31`.
- Normalized text usage toward `Noto Sans JP`, with headings/body/subtext/note colors aligned to the Figma token set.
- Refined Header and Footer to use the darker production blue instead of the lighter previous surface treatment.
- Removed viewport-gated `whileInView` reveals from Works/About/News/member content so the first mobile load no longer delays lower sections.
- Kept Hero free from React-side headline overlays and preserved vertical scroll priority by retaining `pan-y` behavior.
- Confirmed `public/_redirects` is not present.
