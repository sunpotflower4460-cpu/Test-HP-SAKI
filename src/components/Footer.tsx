import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { mobileNavItems, siteAssets, siteMeta, socialLinks } from '../data/siteData';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.brandBlock}>
            <img src={siteAssets.logo} alt={siteMeta.name} className={styles.brandLogo} />
          </div>

          <div className={styles.socialBlock}>
            {socialLinks.map((link) => {
              const isPlaceholder = !link.href || link.href === '#';

              return isPlaceholder ? (
                <span key={link.label} className={styles.socialLink} aria-disabled="true">
                  <span>{link.label}</span>
                </span>
              ) : (
                <a key={link.label} href={link.href} className={styles.socialLink}>
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>

          <nav className={styles.footerNav} aria-label="Footer navigation">
            {mobileNavItems.map((item) => (
              <Link key={item.path} to={item.path} className={styles.footerNavLink}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className={styles.bottom}>
          <span>{siteMeta.copyright}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
