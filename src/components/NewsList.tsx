import styles from './NewsList.module.css';
import { NewsItem } from '../data/siteData';

interface NewsListProps {
  items: NewsItem[];
  limit?: number;
}

const NewsList = ({ items, limit }: NewsListProps) => {
  const sortedItems = [...items].sort((a, b) => b.date.localeCompare(a.date));
  const visibleItems = typeof limit === 'number' ? sortedItems.slice(0, limit) : sortedItems;

  return (
    <div className={styles.list}>
      {visibleItems.map((item) => (
        <article key={item.id} className={styles.item}>
          <div className={styles.meta}>
            <time>{item.date}</time>
            {item.label ? <span className={styles.badge}>{item.label}</span> : null}
          </div>
          <div className={styles.content}>
            <p className={styles.title}>{item.title}</p>
            {item.body ? <p className={styles.body}>{item.body}</p> : null}
          </div>
        </article>
      ))}
    </div>
  );
};

export default NewsList;
