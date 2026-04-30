import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroPlaceholder from '../../components/HeroPlaceholder';
import NewsList from '../../components/NewsList';
import WorkCard from '../../components/WorkCard';
import styles from './Home.module.css';
import { aboutPreview, newsItems, works } from '../../data/siteData';

const sectionMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45 },
};

const Home = () => {
  return (
    <div className={styles.page}>
      <div className="container">
        <HeroPlaceholder />

        <motion.section className={styles.section} {...sectionMotion}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>About us</p>
            <h2>現実と虚構の境界に、体験の余白をつくる。</h2>
          </div>
          <div className={styles.aboutPanel}>
            <p>{aboutPreview.body}</p>
            <Link to="/about" className="btn btn-primary">
              {aboutPreview.cta}
            </Link>
          </div>
        </motion.section>

        <motion.section className={styles.section} {...sectionMotion}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Works</p>
            <div className={styles.headerRow}>
              <h2>進行中の作品プレビュー</h2>
              <Link to="/works" className="btn btn-secondary">作品一覧へ</Link>
            </div>
          </div>
          <div className={styles.previewGrid}>
            {works.slice(0, 2).map((work) => (
              <WorkCard key={work.id} work={work} layout="preview" />
            ))}
          </div>
        </motion.section>

        <motion.section className={styles.section} {...sectionMotion}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>News</p>
            <div className={styles.headerRow}>
              <h2>お知らせ</h2>
              <Link to="/news" className="btn btn-secondary">一覧を見る</Link>
            </div>
          </div>
          <NewsList items={newsItems} />
        </motion.section>
      </div>
    </div>
  );
};

export default Home;
