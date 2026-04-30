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
    >
      <div
        className={styles.image}
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(11, 17, 32, 0.45), rgba(28, 41, 68, 0.2)), url(${work.image})`,
          borderColor: `${work.accent}40`,
        }}
      >
        <span>Visual Placeholder</span>
      </div>
      <div className={styles.content}>
        <p className={styles.specs}>{work.specs}</p>
        <h3>{work.title}</h3>
        <p className={styles.description}>{work.description}</p>
        <div className={styles.footer}>
          <span className={styles.status}>{work.status}</span>
          <a href="#" className={styles.cta}>
            {work.cta}
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default WorkCard;
