import type { HeroSlide } from './siteData';

export const productionHeroSlides: HeroSlide[] = [
  {
    id: 'hero-01',
    type: 'image',
    src: '/media/hero/hero-01.jpg',
    fallback: '/media/placeholders/placeholder-hero.svg',
    title: '物語の果てに、',
    subtitle: '何が残るか。',
    description: 'Liminarium Lab.',
    alt: 'Liminarium Lab. main visual',
  },
  {
    id: 'hero-work-01',
    type: 'image',
    src: '/media/works/work-01.jpg',
    fallback: '/media/placeholders/placeholder-work.svg',
    title: '千草色に吹く',
    subtitle: '未完の詩',
    description: 'Works',
    alt: '千草色に吹く 未完の詩 visual',
  },
  {
    id: 'hero-work-02',
    type: 'image',
    src: '/media/works/work-02.jpg',
    fallback: '/media/placeholders/placeholder-work.svg',
    title: 'あったかくて、甘くて、',
    subtitle: '潰れた',
    description: 'Works',
    alt: 'あったかくて、甘くて、潰れた visual',
  },
];
