import type { HeroSlide } from './siteData';
import { withBase } from '../utils/paths';

export const productionHeroSlides: HeroSlide[] = [
  {
    id: 'hero-01',
    type: 'image',
    src: withBase('/media/hero/hero-01.jpg'),
    fallback: withBase('/media/placeholders/placeholder-hero.svg'),
    alt: 'Liminarium Lab. main visual',
    objectPosition: '50% 50%',
  },
  {
    id: 'hero-work-01',
    type: 'image',
    src: withBase('/media/works/work-01.jpg'),
    fallback: withBase('/media/placeholders/placeholder-work.svg'),
    alt: '千草色に吹く 未完の詩 visual',
    objectPosition: '50% 44%',
  },
  {
    id: 'hero-work-02',
    type: 'image',
    src: withBase('/media/works/work-02.jpg'),
    fallback: withBase('/media/placeholders/placeholder-work.svg'),
    alt: 'あったかくて、甘くて、潰れた visual',
    objectPosition: '50% 48%',
  },
];
