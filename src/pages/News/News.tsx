import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import NewsList from '../../components/NewsList';
import styles from './News.module.css';
import { newsItems } from '../../data/siteData';

const News = () => {
  return (
    <div className={`container ${styles.page}`}>
      <Link to="/" className={styles.backLink}>← Homeへ戻る</Link>

      <motion.section
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <p className={styles.label}>News</p>
        <h1>最新情報</h1>
        <p className={styles.description}>制作の進行やサイト更新情報を、静かなトーンでまとめてお届けします。</p>
      </motion.section>

      <div className={styles.listWrap}>
        <NewsList items={newsItems} />
      </div>
    </div>
  );
};

export default News;
