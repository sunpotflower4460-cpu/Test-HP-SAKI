import { motion } from 'framer-motion';
import styles from './News.module.css';

interface NewsItem {
  id: number;
  date: string;
  title: string;
  excerpt: string;
  icon: string;
}

const News = () => {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      date: '2024.04.15',
      title: '春季限定メニューのご案内',
      excerpt: '桜をイメージした新作ドリンクとデザートが登場しました。春の訪れを感じる繊細な味わいを、期間限定でお楽しみください。',
      icon: '🌸'
    },
    {
      id: 2,
      date: '2024.04.08',
      title: '週末の営業時間延長について',
      excerpt: '土日祝日は21:00まで営業時間を延長いたします。夜遅くまで、お気に入りのコーヒーとともにゆったりとした時間をお過ごしください。',
      icon: '⏰'
    },
    {
      id: 3,
      date: '2024.04.01',
      title: '新入荷コーヒー豆のお知らせ',
      excerpt: 'エチオピアとコロンビア産の単一農園豆を新たに取り扱い開始。それぞれのコーヒーが、産地と生産者の物語を伝えます。',
      icon: '☕'
    },
    {
      id: 4,
      date: '2024.03.25',
      title: 'バリスタワークショップ開催',
      excerpt: '熟練バリスタから学ぶコーヒーの淹れ方。エスプレッソ抽出、ミルクスチーム、ラテアートまで、実践的なワークショップを開催します。',
      icon: '👨‍🍳'
    },
    {
      id: 5,
      date: '2024.03.18',
      title: 'サステナビリティへの取り組み',
      excerpt: '環境に配慮した新しいパッケージの導入と、廃棄物削減への取り組みを開始しました。共に地球のためにできることを。',
      icon: '🌱'
    },
    {
      id: 6,
      date: '2024.03.10',
      title: 'ミュージックイブニング開始',
      excerpt: '毎週金曜日の夜、アコースティックライブを開催。心地よい音楽とお気に入りのコーヒーで、特別な夜をお過ごしください。',
      icon: '🎵'
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className={styles['news-page']}>
      <div className="container">
        <motion.div
          className={styles['news-header']}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>お知らせ</h1>
          <p className="section-subtitle">Stay Connected with Our Latest Stories</p>
        </motion.div>

        <div className={styles['news-list']}>
          {newsItems.map((item, index) => (
            <motion.article
              key={item.id}
              className={styles['news-article']}
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className={styles['news-article-image']}>
                {item.icon}
              </div>
              <div className={styles['news-article-content']}>
                <p className={styles['news-article-date']}>{item.date}</p>
                <h2 className={styles['news-article-title']}>{item.title}</h2>
                <p className={styles['news-article-excerpt']}>{item.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
