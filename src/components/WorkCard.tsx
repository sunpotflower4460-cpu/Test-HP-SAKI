import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import styles from './WorkCard.module.css';
import { WorkItem } from '../data/siteData';

interface WorkCardProps {
  work: WorkItem;
  layout?: 'preview' | 'full';
}

const WorkCard = ({ work, layout = 'full' }: WorkCardProps) => {
  return (
    <motion.article
      className={`${styles.card} ${layout === 'preview' ? styles.preview : styles.full}`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      style={{ '--work-accent': work.accent } as CSSProperties}
    >
      <div
        className={styles.image}
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(6, 11, 21, 0.12), rgba(6, 11, 21, 0.7)), url(${work.image})`,
        }}
      >
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
          {work.disabled ? (
            <span className={`${styles.cta} ${styles.ctaDisabled}`}>{work.buttonLabel}</span>
          ) : (
            <a href={work.link} className={styles.cta}>
              {work.buttonLabel}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default WorkCard;
