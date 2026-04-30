export interface NavItem {
  path: string;
  label: string;
}

export interface WorkItem {
  id: string;
  title: string;
  specs: string;
  description: string;
  status: string;
  cta: string;
  image: string;
  accent: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  isNew?: boolean;
}

export interface MemberItem {
  id: string;
  name: string;
  role: string;
  favorite: string;
}

export interface SocialLink {
  label: string;
  description: string;
  href: string;
}

export const siteMeta = {
  name: 'Liminarium Lab.',
  nameJa: 'リミナリウムラボ',
  tagline: '物語の果てに、何が残るか。',
  copyright: '© 2026 Liminarium Lab. All rights reserved.',
};

export const desktopNavItems: NavItem[] = [
  { path: '/about', label: 'About us' },
  { path: '/works', label: 'Works' },
  { path: '/news', label: 'News' },
];

export const mobileNavItems: NavItem[] = [
  { path: '/', label: 'Home' },
  ...desktopNavItems,
];

export const heroPlaceholder = {
  eyebrow: 'Murder Mystery Production Brand',
  title: siteMeta.tagline,
  subtitle: siteMeta.name,
  description:
    '静かな緊張と余白の中に、物語体験のための大型ビジュアルを置く予定地。次のPhaseで動画・画像混在カルーセルへ拡張できる構成です。',
};

export type HeroSlide = {
  id: string;
  type: 'image' | 'video';
  src: string;
  poster?: string;
  title: string;
  subtitle?: string;
  description?: string;
  alt?: string;
};

export const heroSlides: HeroSlide[] = [
  {
    id: 'hero-01',
    type: 'image',
    src: '/media/hero-01.jpg',
    title: '物語の果てに、',
    subtitle: '何が残るか。',
    description: 'Liminarium Lab.',
    alt: 'Liminarium Lab. main visual',
  },
  {
    id: 'hero-02',
    type: 'image',
    src: '/media/hero-02.jpg',
    title: '境界の向こうで',
    subtitle: '真実が揺れる。',
    description: 'Works',
    alt: 'Works visual',
  },
  {
    id: 'hero-03',
    type: 'video',
    src: '/media/hero-03.mp4',
    poster: '/media/hero-03-poster.jpg',
    title: '動き出す物語',
    subtitle: '体感せよ。',
    description: 'Movie',
  },
  {
    id: 'hero-04',
    type: 'image',
    src: '/media/hero-04.jpg',
    title: '静かな緊張と',
    subtitle: '余白の中に。',
    description: '千草色に吹く 未完の詩',
    alt: 'Work 01 visual',
  },
  {
    id: 'hero-05',
    type: 'image',
    src: '/media/hero-05.jpg',
    title: 'やさしさの輪郭が',
    subtitle: '壊れるとき。',
    description: 'あったかくて、甘くて、潰れた',
    alt: 'Work 02 visual',
  },
];

export const aboutPreview = {
  title: 'About us',
  body: `世界の境界は曖昧で、物語はいつもその隙間から始まります。
${siteMeta.name} は、マーダーミステリーや物語体験を通じて、
現実と虚構が交差する時間をつくる制作チームです。`,
  cta: 'もっと見る',
};

export const aboutPageSections = {
  philosophy:
    '輪郭の定まらない感情や沈黙の余韻にこそ、物語の真実が宿ると考えています。プレイヤーの選択と会話の積み重ねから、ひとりでは辿り着けない記憶の奥行きを立ち上げる。それがLiminarium Lab.の目指す体験です。',
  activities:
    '2025年、代表が新たにサークルを立ち上げ、UZUでの公開を目指してマーダーミステリー作品を制作中。さらに、推し活と推理を掛け合わせたアイドル×マダミスプロジェクトも進行中。',
};

export const works: WorkItem[] = [
  {
    id: 'work-01',
    title: '千草色に吹く 未完の詩',
    specs: '6人 / 180分',
    description: '推理×青春×アイドルをテーマにしたマーダーミステリー。きらめきと焦燥が交差する舞台裏で、未完成の想いが暴かれていきます。',
    status: '制作中',
    cta: '制作中',
    image: '/media/placeholder-work-01.svg',
    accent: '#a98b5e',
  },
  {
    id: 'work-02',
    title: 'あったかくて、甘くて、潰れた',
    specs: '6人 / 180分',
    description: '屋敷に残された遺体と、謎の来訪者を巡る物語。やさしさの輪郭が壊れるとき、それでも守りたい秘密が残るのかを描きます。',
    status: '制作中',
    cta: '特設サイトへ',
    image: '/media/placeholder-work-02.svg',
    accent: '#8f7651',
  },
];

export const newsItems: NewsItem[] = [
  { id: 'news-20260501', date: '2026/05/01', title: 'Liminarium Lab. サイト公開', isNew: true },
  { id: 'news-20260412', date: '2026/04/12', title: 'Liminarium Lab. サイト制作決定' },
  { id: 'news-20260328', date: '2026/03/28', title: 'アイドル×マダミス企画の世界観設計を開始' },
];

export const members: MemberItem[] = [
  { id: 'member-01', name: '葉宮よしの', role: '制作・GM他', favorite: '好きな系統：ガチ推理系・SF' },
  { id: 'member-02', name: '三河柚', role: '制作・イラスト', favorite: '好きな系統：エモ系' },
  { id: 'member-03', name: 'もぶ', role: '音楽', favorite: '好きな系統：推理系' },
  { id: 'member-04', name: 'ヤッホー・ナーン', role: '制作補助', favorite: '好きな系統：島・屋敷系' },
];

export const socialLinks: SocialLink[] = [
  { label: 'X', description: 'お問い合わせはDMまで', href: '#' },
  { label: 'YouTube', description: 'Youtubeはこちら', href: '#' },
];
