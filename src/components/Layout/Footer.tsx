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
              Experience the finest coffee crafted with passion and precision.
              We source the world's best beans to bring you exceptional moments.
            </p>
          </div>

          <div className={styles['footer-section']}>
            <h3>Quick Links</h3>
            <div className={styles['footer-links']}>
              <Link to="/menu">Menu</Link>
              <Link to="/news">News</Link>
              <Link to="/about">About Us</Link>
              <Link to="/access">Access</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div className={styles['footer-section']}>
            <h3>Hours</h3>
            <p>Monday - Friday: 8:00 - 20:00</p>
            <p>Saturday - Sunday: 9:00 - 21:00</p>
            <p>Holidays: 10:00 - 18:00</p>
          </div>

          <div className={styles['footer-section']}>
            <h3>Contact</h3>
            <p>123 Coffee Street</p>
            <p>Tokyo, Japan 150-0001</p>
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
