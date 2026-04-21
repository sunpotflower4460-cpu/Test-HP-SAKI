import { useState, useEffect, useRef } from 'react';
import styles from './HeroSlider.module.css';
import { slides, SlideData } from './slideData';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  const totalSlides = slides.length;
  const autoPlayInterval = 5000; // 5秒ごとに自動切替

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = window.setInterval(() => {
        goToNext();
      }, autoPlayInterval);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [currentSlide, isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div
      className={styles.slider}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {slides.map((slide: SlideData, index: number) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
        >
          <div
            className={styles['slide-background']}
            style={{ background: slide.image }}
          />
          <div className={styles['slide-overlay']} />
          <div className={styles['slide-content']}>
            <p className={styles['slide-subtitle']}>{slide.subtitle}</p>
            <h2 className={styles['slide-title']}>{slide.title}</h2>
            <p className={styles['slide-description']}>{slide.description}</p>
          </div>
        </div>
      ))}

      {/* Arrow Controls */}
      <button
        className={`${styles.arrow} ${styles['arrow-left']}`}
        onClick={goToPrevious}
        aria-label="前のスライド"
      >
        ‹
      </button>
      <button
        className={`${styles.arrow} ${styles['arrow-right']}`}
        onClick={goToNext}
        aria-label="次のスライド"
      >
        ›
      </button>

      {/* Dot Controls */}
      <div className={styles.controls}>
        {slides.map((slide: SlideData, index: number) => (
          <button
            key={slide.id}
            className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`スライド ${index + 1} へ移動`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
