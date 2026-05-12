import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={`container ${styles.page}`}>
      <motion.section
        className={styles.panel}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.42 }}
      >
        <p className={styles.label}>404</p>
        <h1>ページが見つかりません</h1>
        <p className={styles.description}>
          探しているページは移動したか、まだ公開準備中の可能性があります。
          トップページからもう一度ご覧ください。
        </p>
        <Link to="/" className="btn btn-primary">
          Homeへ戻る
        </Link>
      </motion.section>
    </div>
  );
};

export default NotFound;
