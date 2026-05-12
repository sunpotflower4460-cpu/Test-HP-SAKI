import type { CSSProperties } from 'react';
import { useState, useEffect } from 'react';
import styles from './SafeImage.module.css';

interface SafeImageProps {
  src: string;
  fallback?: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  loading?: 'eager' | 'lazy';
}

const SafeImage = ({ src, fallback, alt, className, style, loading = 'lazy' }: SafeImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [usedFallback, setUsedFallback] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setUsedFallback(false);
    setFailed(false);
  }, [src]);

  const handleError = () => {
    if (!usedFallback && fallback && imgSrc !== fallback) {
      setImgSrc(fallback);
      setUsedFallback(true);
    } else {
      setFailed(true);
    }
  };

  if (failed) {
    return (
      <div
        className={`${styles.placeholder} ${className ?? ''}`}
        style={style}
        role="img"
        aria-label={alt}
      />
    );
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      style={style}
      loading={loading}
      onError={handleError}
    />
  );
};

export default SafeImage;
