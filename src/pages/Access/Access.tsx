import { motion } from 'framer-motion';
import styles from './Access.module.css';

const Access = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className={styles['access-page']}>
      <div className="container">
        <motion.div
          className={styles['access-header']}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>アクセス</h1>
          <p className="section-subtitle">Find Your Way to Us</p>
        </motion.div>

        <div className={styles['access-content']}>
          <motion.div className={styles['access-info-section']} {...fadeInUp}>
            <h2>店舗情報</h2>

            <div className={styles['info-item']}>
              <h3>📍 所在地</h3>
              <p>〒150-0001</p>
              <p>東京都渋谷区神宮前1-2-3</p>
            </div>

            <div className={styles['info-item']}>
              <h3>🕐 営業時間</h3>
              <p>平日: 8:00 - 20:00</p>
              <p>土日祝: 9:00 - 21:00</p>
              <p>定休日: 年末年始</p>
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', fontStyle: 'italic' }}>
                ラストオーダーは閉店30分前
              </p>
            </div>

            <div className={styles['info-item']}>
              <h3>📞 お問い合わせ</h3>
              <p>Tel: 03-1234-5678</p>
              <p>Email: info@maisoncafe.com</p>
            </div>

            <div className={styles['info-item']}>
              <h3>🚇 電車でのアクセス</h3>
              <p>渋谷駅(JR/地下鉄)より徒歩5分</p>
              <p>表参道駅(地下鉄)より徒歩3分</p>
            </div>

            <div className={styles['info-item']}>
              <h3>🚗 駐車場</h3>
              <p>専用駐車場はございません</p>
              <p>近隣にコインパーキングあり(徒歩5分)</p>
            </div>
          </motion.div>

          <motion.div className={styles['map-section']} {...fadeInUp}>
            <h2>地図</h2>
            <div className={styles['map-placeholder']}>
              🗺️
            </div>
          </motion.div>
        </div>

        <motion.div className={styles['photos-section']} {...fadeInUp}>
          <h2>店内の様子</h2>
          <div className={styles['photos-grid']}>
            <motion.div
              className={styles['photo-placeholder']}
              whileHover={{ scale: 1.05 }}
            >
              🏪
            </motion.div>
            <motion.div
              className={styles['photo-placeholder']}
              whileHover={{ scale: 1.05 }}
            >
              ☕
            </motion.div>
            <motion.div
              className={styles['photo-placeholder']}
              whileHover={{ scale: 1.05 }}
            >
              🪑
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Access;
