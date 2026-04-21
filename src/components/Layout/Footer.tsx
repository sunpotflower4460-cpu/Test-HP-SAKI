import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-container']}>
        <div className={styles['footer-content']}>
          <div className={styles['footer-section']}>
            <h3>Maison du Café</h3>
            <p>
              情熱と精密さで作り上げる、最高のコーヒーをご体験ください。
              世界最高の豆を厳選し、特別なひとときをお届けします。
            </p>
          </div>

          <div className={styles['footer-section']}>
            <h3>クイックリンク</h3>
            <div className={styles['footer-links']}>
              <Link to="/menu">メニュー</Link>
              <Link to="/news">お知らせ</Link>
              <Link to="/about">私たちについて</Link>
              <Link to="/access">アクセス</Link>
              <Link to="/contact">お問い合わせ</Link>
            </div>
          </div>

          <div className={styles['footer-section']}>
            <h3>営業時間</h3>
            <p>平日: 8:00 - 20:00</p>
            <p>土日祝: 9:00 - 21:00</p>
            <p>定休日: 年末年始</p>
          </div>

          <div className={styles['footer-section']}>
            <h3>お問い合わせ</h3>
            <p>〒150-0001</p>
            <p>東京都渋谷区神宮前1-2-3</p>
            <p>Tel: 03-1234-5678</p>
            <p>Email: info@maisoncafe.com</p>
          </div>
        </div>

        <div className={styles['footer-bottom']}>
          <p>&copy; 2024 Maison du Café. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
