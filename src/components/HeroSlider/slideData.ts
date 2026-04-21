export interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export const slides: SlideData[] = [
  {
    id: 1,
    title: '季節限定ブレンド',
    subtitle: 'Seasonal Blend',
    description: '春の訪れを感じる、特別なブレンドコーヒー',
    image: 'linear-gradient(135deg, #8b7355 0%, #6b5840 100%)',
  },
  {
    id: 2,
    title: '静かな午後のひととき',
    subtitle: 'Quiet Afternoon',
    description: '心安らぐ空間で、ゆったりとした時間を',
    image: 'linear-gradient(135deg, #d4c4b0 0%, #8b7355 100%)',
  },
  {
    id: 3,
    title: '焼き菓子とコーヒー',
    subtitle: 'Pastries & Coffee',
    description: '手作りの焼き菓子と、こだわりのコーヒーのマリアージュ',
    image: 'linear-gradient(135deg, #a0826d 0%, #8b7355 100%)',
  },
  {
    id: 4,
    title: '朝の一杯',
    subtitle: 'Morning Cup',
    description: '新しい一日の始まりに、最高の一杯を',
    image: 'linear-gradient(135deg, #c9b8a3 0%, #a0826d 100%)',
  },
  {
    id: 5,
    title: 'コーヒー豆のこだわり',
    subtitle: 'Our Coffee Beans',
    description: '世界各地から厳選した、最高品質の豆を使用',
    image: 'linear-gradient(135deg, #6b5840 0%, #4a3f2f 100%)',
  },
];
