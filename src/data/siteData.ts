export interface NavItem {
  path: string;
  label: string;
}

export interface WorkItem {
  id: string;
  title: string;
  players: string;
  duration: string;
  status: string;
  image: string;
  description: string;
  link: string;
  buttonLabel: string;
  disabled?: boolean;
  accent: string;
}

export interface NewsItem {
  id: string;
  date: string;
  label?: string;
  title: string;
  body?: string;
}

export interface MemberItem {
  id: string;
  name: string;
  role: string;
  favorite: string;
  image: string;
  accent: string;
}

export interface SocialLink {
  label: string;
  description: string;
  href: string;
}

export const siteInfo = {
  name: 'Liminarium Lab.',
  kana: 'リミナリウムラボ',
  description: '物語体験を制作する小さなラボ。',
  tagline: '物語の果てに、何が残るか。',
  copyright: '© 2026 Liminarium Lab. All rights reserved.',
};

export const siteMeta = {
  name: siteInfo.name,
  nameJa: siteInfo.kana,
  tagline: siteInfo.tagline,
  copyright: siteInfo.copyright,
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
    description: siteMeta.name,
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
${siteInfo.name} は、マーダーミステリーや体験型作品を通じて、
現実と虚構、推理と感情が交差する時間をつくる制作チームです。`,
  cta: 'もっと見る',
};

export const aboutPageSections = {
  philosophyTitle: `${siteInfo.name} 理念`,
  philosophy: `世界の境界は曖昧で、物語はいつもその隙間から始まります。
${siteInfo.name} は、マーダーミステリーや体験型作品を通じて、
現実と虚構、推理と感情が交差する時間をつくる制作チームです。
プレイヤーが物語の中で「誰か」になり、
曖昧な世界の中で真実を探す。
その体験が、参加した人自身の直感や記憶に小さな火を灯すような、
そんな作品づくりを目指しています。`,
  activitiesTitle: '活動内容',
  activities: `2025年、代表が新たにサークルを立ち上げ、
UZUでの公開を目指してマーダーミステリー作品を制作中。
さらに、推し活と推理を掛け合わせたアイドル×マダミスプロジェクトも始動。
マーダーミステリー作品の制作や楽曲制作など、
物語と音楽が交差する企画を展開しています。`,
};

export const worksPageIntro =
  '静かな緊張と余白のあるビジュアルを添えながら、公開準備中の作品や進行中の企画を一覧で見渡せる構成にしています。';

export const works: WorkItem[] = [
  {
    id: 'work-01',
    title: '千草色に吹く 未完の詩',
    players: '6人',
    duration: '180分',
    status: '制作中',
    image: '/media/placeholder-work-01.svg',
    description:
      '推理×青春×アイドルをテーマにしたマーダーミステリー。デビューを控えた少女たちを襲う悲劇。彼女たちの運命の歯車が廻りだす…。',
    link: '#',
    buttonLabel: '特設サイトへ',
    accent: '#b79a69',
  },
  {
    id: 'work-02',
    title: 'あったかくて、甘くて、潰れた',
    players: '6人',
    duration: '180分',
    status: '制作中',
    image: '/media/placeholder-work-02.svg',
    description:
      'とある屋敷にて。主人の遺体と謎の来訪者。それぞれの思惑が絡み合う。あなたはすべて解きほぐすことができるか。',
    link: '#',
    buttonLabel: '制作中',
    disabled: true,
    accent: '#8f7651',
  },
];

export const members: MemberItem[] = [
  {
    id: 'member-01',
    name: '葉宮よしの',
    role: '制作・GMほか',
    favorite: '好きな系統：ガチ推理系・SF',
    image: '/media/member-01.jpg',
    accent: '#b79a69',
  },
  {
    id: 'member-02',
    name: '三河柚',
    role: '制作・イラスト',
    favorite: '好きな系統：エモ系',
    image: '/media/member-02.jpg',
    accent: '#b08b73',
  },
  {
    id: 'member-03',
    name: 'もぶ',
    role: '音楽',
    favorite: '好きな系統：推理系',
    image: '/media/member-03.jpg',
    accent: '#8f7651',
  },
  {
    id: 'member-04',
    name: 'ヤッホー・ナーン',
    role: '制作補助',
    favorite: '好きな系統：島・屋敷系',
    image: '/media/member-04.jpg',
    accent: '#9d8b68',
  },
];

export const newsItems: NewsItem[] = [
  {
    id: 'news-01',
    date: '2026/05/dd',
    label: 'NEW',
    title: 'Liminarium Lab. サイト公開',
    body: 'サイトを公開しました。',
  },
  {
    id: 'news-02',
    date: '2026/04/12',
    title: 'Liminarium Lab. サイト制作決定',
    body: 'ブランド全体の世界観と導線設計の整理を開始しました。',
  },
  {
    id: 'news-03',
    date: '2026/01/10',
    title: 'アイドル×マダミスプロジェクト始動',
    body: '推し活と推理が交差する新作プロジェクトの企画制作を進行しています。',
  },
];

export const socialLinks: SocialLink[] = [
  { label: 'X', description: 'お問い合わせはDMまで', href: '#' },
  { label: 'YouTube', description: '動画や告知を準備中', href: '#' },
];
