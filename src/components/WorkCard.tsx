import { useState, useEffect } from 'react';
import styles from './WorkCard.module.css';
import { WorkItem } from '../data/siteData';

interface WorkCardProps {
  work: WorkItem;
  layout?: 'preview' | 'full';
}

const WorkCard = ({ work, layout = 'full' }: WorkCardProps) => {
  const [imgSrc, setImgSrc] = useState(work.image);
  const isPreview = layout === 'preview';
  const isPlaceholderLink = !work.link || work.link === '#';
  const isUnavailable = work.disabled || isPlaceholderLink || isPreview;
  const ctaLabel = work.buttonLabel;

  useEffect(() => {
    setImgSrc(work.image);
  }, [work.image]);

  const handleImgError = () => {
    if (imgSrc !== work.fallback) {
      setImgSrc(work.fallback);
    }
  };

  return (
    <article className={`${styles.card} ${isPreview ? styles.preview : styles.full}`}>
      <div
        className={styles.image}
        role="img"
        aria-label={`${work.title} のビジュアル`}
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundPosition: work.imagePosition ?? 'center',
        }}
      >
        <img
          src={imgSrc}
          alt=""
          aria-hidden={true}
          style={{ display: 'none' }}
          onError={handleImgError}
        />
      </div>
      <div className={styles.content}>
        <p className={styles.specs}>
          <span>{work.players}</span>
          <span>/</span>
          <span>{work.duration}</span>
        </p>
        <h3>{work.title}</h3>
        <p className={styles.description}>{work.description}</p>
        <div className={styles.footer}>
          {isUnavailable ? (
            <span className={`${styles.cta} ${styles.ctaDisabled}`} aria-disabled="true">
              {ctaLabel}
            </span>
          ) : (
            <a href={work.link} className={styles.cta}>
              {ctaLabel}
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default WorkCard;
