import type { CSSProperties } from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  const ctaLabel = isPreview ? '制作中' : work.buttonLabel;

  useEffect(() => {
    setImgSrc(work.image);
  }, [work.image]);

  const handleImgError = () => {
    if (imgSrc !== work.fallback) {
      setImgSrc(work.fallback);
    }
  };

  return (
    <motion.article
      className={`${styles.card} ${isPreview ? styles.preview : styles.full}`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      style={{ '--work-accent': work.accent } as CSSProperties}
    >
      <div
        className={styles.image}
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
        <span>{work.status}</span>
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
          <span className={styles.status}>{work.status}</span>
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
    </motion.article>
  );
};

export default WorkCard;
