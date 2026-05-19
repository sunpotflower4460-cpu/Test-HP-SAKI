import NewsList from '../../components/NewsList';
import styles from './News.module.css';
import { newsItems } from '../../data/siteData';

const News = () => {
  return (
    <div className={`container ${styles.page}`}>
      <section className={styles.header}>
        <p className={styles.label}>News</p>
      </section>

      <div className={styles.listWrap}>
        <NewsList items={newsItems} />
      </div>
    </div>
  );
};

export default News;
