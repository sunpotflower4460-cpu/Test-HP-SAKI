import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('お問い合わせありがとうございます。後ほどご連絡させていただきます。\n（注：これはデモフォームのため、実際には送信されません。）');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className={styles['contact-page']}>
      <div className="container">
        <motion.div
          className={styles['contact-header']}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>お問い合わせ</h1>
          <p className="section-subtitle">We'd Love to Hear from You</p>
        </motion.div>

        <div className={styles['contact-container']}>
          <motion.div className={styles['contact-info']} {...fadeInUp}>
            <div className={styles['contact-info-item']}>
              <h3>📍 所在地</h3>
              <p>〒150-0001</p>
              <p>東京都渋谷区神宮前1-2-3</p>
            </div>

            <div className={styles['contact-info-item']}>
              <h3>📞 電話</h3>
              <p>Tel: 03-1234-5678</p>
              <p>営業時間内でご対応いたします</p>
            </div>

            <div className={styles['contact-info-item']}>
              <h3>✉️ メール</h3>
              <p>info@maisoncafe.com</p>
              <p>24時間以内に返信いたします</p>
            </div>

            <div className={styles['contact-info-item']}>
              <h3>🕐 営業時間</h3>
              <p>平日: 8:00 - 20:00</p>
              <p>土日祝: 9:00 - 21:00</p>
              <p>定休日: 年末年始</p>
            </div>
          </motion.div>

          <motion.div className={styles['contact-form-section']} {...fadeInUp}>
            <h2>メッセージを送る</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles['form-group']}>
                <label htmlFor="name">お名前 *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles['form-group']}>
                <label htmlFor="email">メールアドレス *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles['form-group']}>
                <label htmlFor="subject">件名 *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles['form-group']}>
                <label htmlFor="message">メッセージ *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <motion.button
                type="submit"
                className={styles['submit-btn']}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                送信する
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
