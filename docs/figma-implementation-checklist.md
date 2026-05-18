# Figma Implementation Checklist

## Visual conformance
- [ ] 色がFigmaプロパティのHex値に揃っているか
- [ ] 本文色が白すぎず、濃紺背景に対して適切なコントラストか
- [ ] Noto Sans JP中心のタイポグラフィになっているか
- [ ] Heroに余計な重ね文字がないか（画像内文字を維持）
- [ ] WF / Archive / 白背景案に見た目が引っ張られていないか
- [ ] 紫破線（`#9747FF`）や赤注釈が混入していないか

## Mobile scroll QA (390px)
- [ ] SP初回ロード直後から縦スクロールできるか
- [ ] Hero上で縦スワイプして下へ進めるか
- [ ] Works上で縦スワイプして下へ進めるか
- [ ] 2本指操作なしで自然に縦移動できるか
- [ ] 横ズレが発生していないか

## Breakpoint QA
- [ ] PC 1280pxでレイアウト破綻がないか
- [ ] SP 390pxでレイアウト破綻がないか
