import type { CSSProperties } from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { heroSlides } from '../data/siteData';
import SafeImage from './SafeImage';
import styles from './HeroCarousel.module.css';

const AUTOPLAY_INTERVAL = 5000;

type CarouselTrackStyle = CSSProperties & Record<`--${string}`, string>;

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [failedVideoIds, setFailedVideoIds] = useState<Set<string>>(() => new Set());
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const total = heroSlides.length;

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  const goPrev = useCallback(() => {
    setCurrent((c) => (c - 1 + total) % total);
  }, [total]);

  const goNext = useCallback(() => {
    setCurrent((c) => (c + 1) % total);
  }, [total]);

  const markVideoFailed = useCallback((slideId: string) => {
    setFailedVideoIds((prev) => {
      if (prev.has(slideId)) return prev;
      const next = new Set(prev);
      next.add(slideId);
      return next;
    });
  }, []);

  const trackStyle: CarouselTrackStyle = {
    '--carousel-desktop-offset': `calc(12% - ${current * 76}% - ${current * 24}px)`,
    '--carousel-tablet-offset': `calc(9% - ${current * 82}% - ${current * 24}px)`,
    '--carousel-mobile-offset': `-${current * 100}%`,
  };

  // Play/pause video when active slide changes
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === current) {
        v.currentTime = 0;
        v.play().catch((err) => {
          console.warn('[HeroCarousel] Autoplay blocked:', err);
        });
      } else {
        v.pause();
        v.currentTime = 0;
      }
    });
  }, [current]);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(goNext, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [paused, goNext]);

  return (
    <section
      className={styles.carousel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="メインビジュアル カルーセル"
    >
      <div className={styles.viewportWrap}>
        <div className={styles.viewport}>
          <div className={styles.track} style={trackStyle}>
            {heroSlides.map((slide, i) => {
              const shouldUseVideo = slide.type === 'video' && !failedVideoIds.has(slide.id);

              return (
                <div
                  key={slide.id}
                  className={`${styles.slide} ${i === current ? styles.slideActive : ''}`}
                  aria-hidden={i !== current}
                >
                  {shouldUseVideo ? (
                    <video
                      ref={(el) => {
                        videoRefs.current[i] = el;
                      }}
                      className={styles.media}
                      autoPlay={i === current}
                      muted
                      playsInline
                      loop
                      preload="metadata"
                      poster={slide.poster ?? slide.fallback}
                      aria-label={slide.alt ?? slide.title}
                      onError={() => markVideoFailed(slide.id)}
                    >
                      <source
                        src={slide.src}
                        type="video/mp4"
                        onError={() => markVideoFailed(slide.id)}
                      />
                    </video>
                  ) : (
                    <SafeImage
                      src={slide.type === 'video' ? slide.poster ?? slide.fallback : slide.src}
                      fallback={slide.fallback}
                      alt={slide.alt ?? slide.title}
                      className={styles.media}
                      loading={i === 0 ? 'eager' : 'lazy'}
                    />
                  )}
                  <div className={styles.overlay} />
                  <div className={styles.copy}>
                    {slide.description && (
                      <p className={styles.copyEyebrow}>{slide.description}</p>
                    )}
                    <h2 className={styles.copyTitle}>{slide.title}</h2>
                    {slide.subtitle && (
                      <p className={styles.copySubtitle}>{slide.subtitle}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          className={`${styles.navBtn} ${styles.navPrev}`}
          onClick={goPrev}
          aria-label="前のスライド"
        >
          ←
        </button>
        <button
          className={`${styles.navBtn} ${styles.navNext}`}
          onClick={goNext}
          aria-label="次のスライド"
        >
          →
        </button>
      </div>

      <div className={styles.dots} role="tablist" aria-label="スライド選択">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.id}
            role="tab"
            aria-selected={i === current}
            aria-label={`スライド ${i + 1}`}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
