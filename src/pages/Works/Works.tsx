import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import WorkCard from '../../components/WorkCard';
import styles from './Works.module.css';
import { works, worksPageIntro } from '../../data/siteData';

const Works = () => {
  return (
    <div className={`container ${styles.page}`}>
      <Link to="/" className="backLink">◀ 戻る</Link>

      <motion.section
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <p className={styles.label}>Works</p>
        <h1>作品一覧</h1>
        {worksPageIntro && <p className={styles.description}>{worksPageIntro}</p>}
      </motion.section>

      <div className={styles.grid}>
        {works.map((work) => (
          <div key={work.id}>
            <WorkCard work={work} />
          </div>
        ))}
      </div>

      <p className={styles.moreText}>And More...</p>
    </div>
  );
};

export default Works;
