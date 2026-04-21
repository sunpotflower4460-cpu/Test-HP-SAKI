import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navItems = [
    { path: '/', label: 'ホーム' },
    { path: '/menu', label: 'メニュー' },
    { path: '/news', label: 'お知らせ' },
    { path: '/about', label: '私たちについて' },
    { path: '/access', label: 'アクセス' },
    { path: '/contact', label: 'お問い合わせ' },
  ];

  return (
    <motion.header
      className={styles.header}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles['header-container']}>
        <Link to="/" className={styles.logo}>
          Maison du Café
        </Link>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={location.pathname === item.path ? styles.active : ''}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 999,
            }}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
