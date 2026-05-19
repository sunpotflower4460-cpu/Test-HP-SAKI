import { Link } from 'react-router-dom';
import WorkCard from '../../components/WorkCard';
import styles from './Works.module.css';
import { works } from '../../data/siteData';

const Works = () => {
  return (
    <div className={`container ${styles.page}`}>
      <section className={styles.header}>
        <Link to="/" className="backLink">
          ◀ 戻る
        </Link>
        <h1 className={styles.pageTitle}>Works</h1>
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
