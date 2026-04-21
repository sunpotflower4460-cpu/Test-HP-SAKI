import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import HeroSlider from '../../components/HeroSlider/HeroSlider';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true }
  };

  const featuredItems = [
    { id: 1, name: 'エスプレッソ', description: '深いコクと芳醇な香りが特徴の本格イタリアンエスプレッソ', price: '¥480', icon: '☕' },
    { id: 2, name: 'カプチーノ', description: 'なめらかなスチームミルクとエスプレッソのハーモニー', price: '¥580', icon: '🥛' },
    { id: 3, name: 'クロワッサン', description: 'バターの風味豊かな、毎朝焼き上げる自家製クロワッサン', price: '¥420', icon: '🥐' },
  ];

  const newsItems = [
    { id: 1, date: '2024.04.15', title: '春季限定メニューのご案内', excerpt: '桜をイメージした新作ドリンクとデザートが登場しました。', icon: '📰' },
    { id: 2, date: '2024.04.08', title: '週末の営業時間延長について', excerpt: '土日祝日は21:00まで営業時間を延長いたします。', icon: '📰' },
    { id: 3, date: '2024.04.01', title: '新入荷コーヒー豆のお知らせ', excerpt: 'エチオピアとコロンビア産の単一農園豆を新たに取り扱い開始。', icon: '📰' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        className={styles.hero}
        initial="initial"
        animate="whileInView"
        variants={staggerContainer}
      >
        <div className={`${styles['hero-bg-circle']} ${styles['circle-1']}`}></div>
        <div className={`${styles['hero-bg-circle']} ${styles['circle-2']}`}></div>

        <div className={styles['hero-content']}>
          <motion.p
            className={styles['hero-subtitle']}
            variants={fadeInUp}
          >
            上質なコーヒー体験
          </motion.p>
          <motion.h1
            className={styles['hero-title']}
            variants={fadeInUp}
          >
            Maison du Café
          </motion.h1>
          <motion.p
            className={styles['hero-description']}
            variants={fadeInUp}
          >
            一杯のコーヒーが織りなす物語。情熱と職人技、世界中から厳選された最高品質の豆で、特別なひとときをお届けします。
          </motion.p>
          <motion.div
            className={styles['hero-buttons']}
            variants={fadeInUp}
          >
            <Link to="/menu" className="btn btn-primary">
              メニューを見る
            </Link>
            <Link to="/contact" className="btn btn-outline">
              店舗情報
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Hero Slider Section */}
      <HeroSlider />

      {/* Concept Section */}
      <section className={`${styles.concept} section`}>
        <div className="container">
          <motion.div {...fadeInUp}>
            <h2 className="section-title">私たちのこだわり</h2>
            <p className="section-subtitle">The Art of Coffee</p>
          </motion.div>
          <motion.div className={styles['concept-content']} {...fadeInUp}>
            <p className={styles['concept-text']}>
              Maison du Caféでは、コーヒーは単なる飲み物ではなく、特別な体験であると考えています。
              一杯一杯を、熟練したバリスタが世界最高峰の農園から厳選された豆を使い、丁寧に淹れています。
              伝統的な技法と現代的なイノベーションを融合させ、純粋な喜びに満ちたひとときを創造します。
            </p>
            <p className={styles['concept-text']}>
              私たちのこだわりは、カップの中だけにとどまりません。心地よい空間づくりから温かなおもてなしまで、
              すべての細部にこだわり、心に残るコーヒー体験をお届けしています。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className={`${styles['featured-menu']} section`}>
        <div className="container">
          <motion.div {...fadeInUp}>
            <h2 className="section-title">おすすめメニュー</h2>
            <p className="section-subtitle">Our Most Loved Selections</p>
          </motion.div>
          <motion.div
            className={styles['menu-grid']}
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {featuredItems.map((item) => (
              <motion.div
                key={item.id}
                className={styles['menu-card']}
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
              >
                <div className={styles['menu-card-image']}>
                  {item.icon}
                </div>
                <div className={styles['menu-card-content']}>
                  <h3 className={styles['menu-card-title']}>{item.name}</h3>
                  <p className={styles['menu-card-description']}>{item.description}</p>
                  <p className={styles['menu-card-price']}>{item.price}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div style={{ textAlign: 'center', marginTop: '3rem' }} {...fadeInUp}>
            <Link to="/menu" className="btn btn-primary">
              メニュー一覧を見る
            </Link>
          </motion.div>
        </div>
      </section>

      {/* News Preview Section */}
      <section className={`${styles['news-preview']} section`}>
        <div className="container">
          <motion.div {...fadeInUp}>
            <h2 className="section-title">新着情報</h2>
            <p className="section-subtitle">Stay Updated with Our Stories</p>
          </motion.div>
          <motion.div
            className={styles['news-grid']}
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {newsItems.map((item) => (
              <motion.div
                key={item.id}
                className={styles['news-card']}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <div className={styles['news-card-image']}>
                  {item.icon}
                </div>
                <div className={styles['news-card-content']}>
                  <p className={styles['news-card-date']}>{item.date}</p>
                  <h3 className={styles['news-card-title']}>{item.title}</h3>
                  <p className={styles['news-card-excerpt']}>{item.excerpt}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div style={{ textAlign: 'center', marginTop: '3rem' }} {...fadeInUp}>
            <Link to="/news" className="btn btn-outline">
              お知らせ一覧を見る
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className={`${styles['about-preview']} section`}>
        <div className="container">
          <motion.div {...fadeInUp}>
            <h2 className="section-title">私たちのストーリー</h2>
            <p className="section-subtitle">Crafted with Passion</p>
          </motion.div>
          <motion.div
            className={styles['about-content']}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className={styles['about-image']} variants={fadeInUp}>
              🏠
            </motion.div>
            <motion.div className={styles['about-text']} variants={fadeInUp}>
              <h3>物語が生まれる場所</h3>
              <p>
                Maison du Caféは、単なるカフェ以上の存在として誕生しました。コーヒーを愛する人々、
                そして日々の喧騒の中で静寂のひとときを求める人々のための聖域です。
              </p>
              <p>
                空間そのものが、私たちの哲学を体現しています。上品でありながら温かみがあり、
                洗練されていながらも居心地の良い。すべての角が、会話、創造性、そして人々のつながりを育むようデザインされています。
              </p>
              <Link to="/about" className="btn btn-primary">
                詳しく見る
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Access Preview Section */}
      <section className={`${styles['access-preview']} section`}>
        <div className="container">
          <motion.div {...fadeInUp}>
            <h2 className="section-title">アクセス</h2>
            <p className="section-subtitle">Find Your Way to Great Coffee</p>
          </motion.div>
          <motion.div
            className={styles['access-content']}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className={styles['access-info']} variants={fadeInUp}>
              <h3>店舗情報</h3>
              <p>〒150-0001</p>
              <p>東京都渋谷区神宮前1-2-3</p>
              <br />
              <h3>営業時間</h3>
              <p>平日: 8:00 - 20:00</p>
              <p>土日祝: 9:00 - 21:00</p>
              <p>定休日: 年末年始</p>
              <br />
              <h3>お問い合わせ</h3>
              <p>Tel: 03-1234-5678</p>
              <p>Email: info@maisoncafe.com</p>
            </motion.div>
            <motion.div className={styles['access-map']} variants={fadeInUp}>
              🗺️
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section className={styles['cta-section']} {...fadeInUp}>
        <div className="container">
          <h2>最高のコーヒー体験を</h2>
          <p>ぜひ一度、お店にお越しください。あなたのお気に入りの一杯が見つかります。</p>
          <Link to="/contact" className="btn btn-white">
            お問い合わせ
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
