import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { mobileNavItems, siteMeta, socialLinks } from '../data/siteData';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.brandBlock}>
            <p className={styles.brandMain}>{siteMeta.name}</p>
            <p className={styles.brandSub}>{siteMeta.nameJa}</p>
          </div>

          <div className={styles.socialBlock}>
            {socialLinks.map((link) => {
              const isPlaceholder = !link.href || link.href === '#';
              const content = (
                <>
                  <span>{link.label}</span>
                  <small>{link.description}</small>
                </>
              );

              return isPlaceholder ? (
                <span key={link.label} className={styles.socialLink} aria-disabled="true">
                  {content}
                </span>
              ) : (
                <a key={link.label} href={link.href} className={styles.socialLink}>
                  {content}
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
