# Figma Design Standard (Production)

## Source of truth
- Figma **Design**領域（濃紺本番デザイン）を実装の唯一の見た目基準にする。
- WFは構造確認のみで使用し、見た目の根拠にはしない。
- Design archiveは過去案・参考案として扱い、本番見た目に合わせない。
- 白背景案は文言・情報構造の補助としてのみ参照する。

## Asset interpretation rules
- PNGは完成見た目の確認用として扱う。
- Figmaスクリーンショットは数値・色・フォント確認用として扱う。
- `#9747FF` はFigma管理用の枠線/破線色であり、実装に使用しない。
- 赤い注釈線、ブラウザUI、Safari UIは実装対象外。

## Typography and hero policy
- 通常テキストは `Noto Sans JP` を基本フォントとして使用する。
- Heroは画像内の文字を活かし、React側で大きなHeroテキストを重ねない。
- ロゴや画像に含まれる文字は画像素材として扱い、CSSフォントで再現しない。

## Mobile quality priority
- スマホ縦スクロール品質を最重要QA項目にする。
- 横スクロール/カルーセルを導入しても、縦スクロール操作を奪わない。
