import { Link } from 'react-router-dom';
import HeroCarousel from '../../components/HeroCarousel';
import NewsList from '../../components/NewsList';
import WorkCard from '../../components/WorkCard';
import styles from './Home.module.css';
import { aboutPreview, newsItems, siteInfo, works } from '../../data/siteData';

const Home = () => {
  return (
    <div className={styles.page}>
      <div className="container">
        <HeroCarousel />

        <section className={styles.section}>
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
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Works</p>
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
        </section>

        <section className={styles.section}>
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
        </section>
      </div>
    </div>
  );
};

export default Home;
