import type { HeroSlide } from './siteData';

export const productionHeroSlides: HeroSlide[] = [
  {
    id: 'hero-01',
    type: 'image',
    src: '/media/hero/hero-01.jpg',
    fallback: '/media/placeholders/placeholder-hero.svg',
    alt: 'Liminarium Lab. main visual',
    objectPosition: '50% 50%',
  },
  {
    id: 'hero-work-01',
    type: 'image',
    src: '/media/works/work-01.jpg',
    fallback: '/media/placeholders/placeholder-work.svg',
    alt: '千草色に吹く 未完の詩 visual',
    objectPosition: '50% 44%',
  },
  {
    id: 'hero-work-02',
    type: 'image',
    src: '/media/works/work-02.jpg',
    fallback: '/media/placeholders/placeholder-work.svg',
    alt: 'あったかくて、甘くて、潰れた visual',
    objectPosition: '50% 48%',
  },
];
