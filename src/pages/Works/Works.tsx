import WorkCard from '../../components/WorkCard';
import styles from './Works.module.css';
import { works } from '../../data/siteData';

const Works = () => {
  return (
    <div className={`container ${styles.page}`}>
      <section className={styles.header}>
        <p className={styles.label}>Works</p>
      </section>

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
