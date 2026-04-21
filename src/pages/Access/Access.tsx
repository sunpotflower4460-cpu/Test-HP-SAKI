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
          <h1>Access</h1>
          <p className="section-subtitle">Find Your Way to Us</p>
        </motion.div>

        <div className={styles['access-content']}>
          <motion.div className={styles['access-info-section']} {...fadeInUp}>
            <h2>Visit Information</h2>

            <div className={styles['info-item']}>
              <h3>📍 Location</h3>
              <p>123 Coffee Street</p>
              <p>Shibuya-ku, Tokyo</p>
              <p>Japan 150-0001</p>
            </div>

            <div className={styles['info-item']}>
              <h3>🕐 Business Hours</h3>
              <p>Monday - Friday: 8:00 - 20:00</p>
              <p>Saturday - Sunday: 9:00 - 21:00</p>
              <p>Holidays: 10:00 - 18:00</p>
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', fontStyle: 'italic' }}>
                Last order 30 minutes before closing
              </p>
            </div>

            <div className={styles['info-item']}>
              <h3>📞 Contact</h3>
              <p>Tel: 03-1234-5678</p>
              <p>Email: info@maisoncafe.com</p>
            </div>

            <div className={styles['info-item']}>
              <h3>🚇 Access by Train</h3>
              <p>5 min walk from Shibuya Station (JR/Metro)</p>
              <p>3 min walk from Omotesando Station (Metro)</p>
            </div>

            <div className={styles['info-item']}>
              <h3>🚗 Parking</h3>
              <p>No dedicated parking available</p>
              <p>Coin parking nearby (5 min walk)</p>
            </div>
          </motion.div>

          <motion.div className={styles['map-section']} {...fadeInUp}>
            <h2>Map</h2>
            <div className={styles['map-placeholder']}>
              🗺️
            </div>
          </motion.div>
        </div>

        <motion.div className={styles['photos-section']} {...fadeInUp}>
          <h2>Our Café</h2>
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
