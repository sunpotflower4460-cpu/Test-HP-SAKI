import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import { desktopNavItems, mobileNavItems, siteAssets, siteMeta } from '../data/siteData';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.style.overflowY = isMenuOpen ? 'hidden' : '';
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.documentElement.style.overflowY = '';
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.brand} aria-label={siteMeta.name}>
          <img src={siteAssets.logo} alt={siteMeta.name} className={styles.brandLogo} />
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {desktopNavItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className={`${styles.menuButton} ${isMenuOpen ? styles.menuOpen : ''}`}
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

      {isMenuOpen ? (
        <>
          <div className={styles.overlay} onClick={() => setIsMenuOpen(false)} />
          <nav id="mobile-menu" className={styles.mobilePanel} aria-label="Mobile navigation">
            <div className={styles.mobilePanelHeader}>
              <button
                type="button"
                className={styles.closeButton}
                onClick={() => setIsMenuOpen(false)}
                aria-label="メニューを閉じる"
              >
                ×
              </button>
            </div>

            <div className={styles.mobileNavLinks}>
              {mobileNavItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </nav>
        </>
      ) : null}
    </header>
  );
};

export default Header;
