import { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.shell}>
      <a className={styles.skipLink} href="#main-content">
        本文へスキップ
      </a>
      <Header />
      <main id="main-content" className={styles.main} tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
