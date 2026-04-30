import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroCarousel from '../../components/HeroCarousel';
import NewsList from '../../components/NewsList';
import WorkCard from '../../components/WorkCard';
import styles from './Home.module.css';
import { aboutPreview, newsItems, siteInfo, works } from '../../data/siteData';

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
        <HeroCarousel />

        <motion.section className={styles.section} {...sectionMotion}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>About us</p>
            <h2>{siteInfo.description}</h2>
          </div>
          <div className={styles.aboutPanel}>
            <p>{aboutPreview.body}</p>
            <div className={styles.previewAction}>
              <Link to="/about" className="btn btn-primary">
                {aboutPreview.cta}
              </Link>
            </div>
          </div>
        </motion.section>

        <motion.section className={styles.section} {...sectionMotion}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Works</p>
            <h2>進行中の作品プレビュー</h2>
          </div>
          <div className={styles.previewGrid}>
            {works.slice(0, 2).map((work) => (
              <WorkCard key={work.id} work={work} layout="preview" />
            ))}
          </div>
          <div className={styles.previewAction}>
            <Link to="/works" className="btn btn-secondary">
              もっと見る
            </Link>
          </div>
        </motion.section>

        <motion.section className={styles.section} {...sectionMotion}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>News</p>
            <h2>お知らせ</h2>
          </div>
          <NewsList items={newsItems} limit={2} />
          <div className={styles.previewAction}>
            <Link to="/news" className="btn btn-secondary">
              もっと見る
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Home;
