export interface NavItem {
  path: string;
  label: string;
}

export interface WorkItem {
  id: string;
  title: string;
  players: string;
  duration: string;
  // NOTE: Keep as metadata only unless the production Figma explicitly reintroduces a status badge.
  status: string;
  image: string;
  fallback: string;
  imagePosition?: string;
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
  fallback: string;
  imagePosition?: string;
  accent: string;
}

export interface SocialLink {
  label: string;
  // NOTE: Retained as metadata only; Footer should keep rendering the label alone unless Figma changes.
  description: string;
  href: string;
}

export const siteInfo = {
  name: 'Liminarium Lab.',
  kana: 'リミナリウムラボ',
  description: '物語体験を制作する小さなラボ。',
  tagline: '物語の果てに、何が残るか。',
  copyright: '© 2026 Liminarium Lab.',
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

export type HeroSlide = {
  id: string;
  type: 'image' | 'video';
  src: string;
  poster?: string;
  fallback: string;
  alt: string;
  objectPosition?: string;
};

export const aboutPreview = {
  title: 'About us',
  body: `世界の境界は曖昧で、無数に存在しています。現実と虚構、私とあなた、真実と嘘——それらは溶け合い、シンクロし、パラレルに交差します。
私たちは、マーダーミステリーがその境界線上に立つ体験と捉えます。
プレイヤーは物語の中で「誰か」になり、曖昧な境界の中で真実を探します。
私たちは、そんな神秘的な境界を描く物語を創ります。その体験が、あなた自身の直感や、命の輝きに気づくきっかけになれば嬉しいです。`,
  cta: 'もっと見る',
};

export const aboutPageSections = {
  philosophyTitle: `${siteInfo.name} 理念`,
  philosophy: aboutPreview.body,
  activitiesTitle: '活動内容',
  activities: `2025年、代表・葉宮が新たにサークルを立ち上げ、UZUでの公開を目指してマーダーミステリー作品を制作中です。

さらに1月からは、「推し活」と「推理」を掛け合わせたアイドル×マダミスプロジェクト が始動。
アイドルグループI’ll☆Sync（アイルシンク）のプロデュースを中心に、マーダーミステリー作品の制作や楽曲制作など、物語と音楽が交差する新しい企画を展開しています。`,
};

export const worksPageIntro = '';

export const works: WorkItem[] = [
  {
    id: 'work-01',
    title: '千草色に吹く 未完の詩',
    players: '6人',
    duration: '180分',
    status: '制作中',
    image: '/media/works/work-01.jpg',
    fallback: '/media/placeholders/placeholder-work.svg',
    imagePosition: '50% 44%',
    description:
      '推理×推し活プロジェクト第一弾！\nデビューを控えたアイドルたちを襲う悲劇。\n彼女たちの運命の歯車が廻りだす…。',
    link: '',
    buttonLabel: '製作中',
    disabled: true,
    accent: '#C6A86A',
  },
  {
    id: 'work-02',
    title: 'あったかくて、甘くて、潰れた',
    players: '6人',
    duration: '180分',
    status: '制作中',
    image: '/media/works/work-02.jpg',
    fallback: '/media/placeholders/placeholder-work.svg',
    imagePosition: '50% 48%',
    description:
      'とある屋敷にて。主人の遺体と謎の来訪者。\nそれぞれの思惑が絡み合う。\nあなたはすべて解きほぐすことができるか。',
    link: '',
    buttonLabel: '制作中',
    disabled: true,
    accent: '#AE9054',
  },
];

export const members: MemberItem[] = [
  {
    id: 'member-01',
    name: '葉宮よしの',
    role: '制作・GM他',
    favorite: '好きな系統：ガチ推理系・SF',
    image: '/media/members/member-01.jpg',
    fallback: '/media/placeholders/placeholder-member.svg',
    imagePosition: '50% 45%',
    accent: '#C6A86A',
  },
  {
    id: 'member-02',
    name: '三河柚',
    role: '制作・イラスト',
    favorite: '好きな系統：エモ系',
    image: '/media/members/member-02.jpg',
    fallback: '/media/placeholders/placeholder-member.svg',
    imagePosition: '50% 45%',
    accent: '#C6A86A',
  },
  {
    id: 'member-03',
    name: 'もぶ',
    role: '音楽',
    favorite: '好きな系統：推理系',
    image: '/media/members/member-03.jpg',
    fallback: '/media/placeholders/placeholder-member.svg',
    imagePosition: '50% 45%',
    accent: '#C6A86A',
  },
  {
    id: 'member-04',
    name: 'ヤッホー・ナーン',
    role: '制作補助',
    favorite: '好きな系統：島・屋敷系',
    image: '/media/members/member-04.jpg',
    fallback: '/media/placeholders/placeholder-member.svg',
    imagePosition: '50% 45%',
    accent: '#C6A86A',
  },
];

export const newsItems: NewsItem[] = [
  {
    id: 'news-01',
    date: '2026/05/21',
    label: 'NEW',
    title: 'Liminarium Lab. サイト公開',
  },
  {
    id: 'news-02',
    date: '2026/04/12',
    title: 'Liminarium Lab. サイト制作決定',
  },
];

export const socialLinks: SocialLink[] = [
  { label: 'X', description: 'お問い合わせはDMまで', href: '' },
  { label: 'YouTube', description: 'Youtubeはこちら', href: '' },
];

export const siteAssets = {
  logo: '/media/logo/logo.png',
  logoMark: '/media/logo/logo-mark.png',
  logoFallback: '/media/placeholders/placeholder-hero.svg',
};
