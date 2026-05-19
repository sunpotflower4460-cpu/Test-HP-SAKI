import { Link } from 'react-router-dom';
import NewsList from '../../components/NewsList';
import styles from './News.module.css';
import { newsItems } from '../../data/siteData';

const News = () => {
  return (
    <div className={`container ${styles.page}`}>
      <section className={styles.header}>
        <Link to="/" className="backLink">
          ◀ 戻る
        </Link>
        <h1 className={styles.pageTitle}>News</h1>
      </section>

      <div className={styles.listWrap}>
        <NewsList items={newsItems} />
      </div>
    </div>
  );
};

export default News;
