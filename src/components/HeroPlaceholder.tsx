import { motion } from 'framer-motion';
import styles from './HeroPlaceholder.module.css';
import { heroPlaceholder } from '../data/siteData';

const HeroPlaceholder = () => {
  return (
    <motion.section
      className={styles.hero}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
    >
      <div className={styles.frame}>
        <div className={styles.backgroundGlow} />
        <div className={styles.controls}>
          <button type="button" aria-label="Previous slide placeholder">←</button>
          <div className={styles.dots}>
            <span className={`${styles.dot} ${styles.dotActive}`} />
            <span className={styles.dot} />
            <span className={styles.dot} />
          </div>
          <button type="button" aria-label="Next slide placeholder">→</button>
        </div>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{heroPlaceholder.eyebrow}</p>
          <h1>{heroPlaceholder.title}</h1>
          <p className={styles.subtitle}>{heroPlaceholder.subtitle}</p>
          <p className={styles.description}>{heroPlaceholder.description}</p>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroPlaceholder;
