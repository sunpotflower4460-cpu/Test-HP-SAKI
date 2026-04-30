import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './Header.module.css';
import { desktopNavItems, mobileNavItems, siteMeta } from '../data/siteData';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <motion.header
      className={styles.header}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.brand} aria-label={siteMeta.name}>
          <span className={styles.brandMain}>{siteMeta.name}</span>
          <span className={styles.brandSub}>{siteMeta.nameJa}</span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {desktopNavItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className={`${styles.menuButton} ${isMenuOpen ? styles.menuButtonOpen : ''}`}
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="メニューを開閉"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <>
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.nav
              id="mobile-menu"
              className={styles.mobilePanel}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.25 }}
              aria-label="Mobile navigation"
            >
              <div className={styles.mobilePanelHeader}>
                <span className={styles.mobileEyebrow}>Navigation</span>
                <span className={styles.mobileBrand}>{siteMeta.name}</span>
              </div>
              <div className={styles.mobileNavLinks}>
                {mobileNavItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) => `${styles.mobileNavLink} ${isActive ? styles.active : ''}`}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
