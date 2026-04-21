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
    alert('Thank you for your message! We will get back to you soon.\n(Note: This is a demo form and does not actually send messages.)');
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
          <h1>Contact Us</h1>
          <p className="section-subtitle">We'd Love to Hear from You</p>
        </motion.div>

        <div className={styles['contact-container']}>
          <motion.div className={styles['contact-info']} {...fadeInUp}>
            <div className={styles['contact-info-item']}>
              <h3>📍 Location</h3>
              <p>123 Coffee Street</p>
              <p>Shibuya-ku, Tokyo</p>
              <p>Japan 150-0001</p>
            </div>

            <div className={styles['contact-info-item']}>
              <h3>📞 Phone</h3>
              <p>Tel: 03-1234-5678</p>
              <p>Available during business hours</p>
            </div>

            <div className={styles['contact-info-item']}>
              <h3>✉️ Email</h3>
              <p>info@maisoncafe.com</p>
              <p>We respond within 24 hours</p>
            </div>

            <div className={styles['contact-info-item']}>
              <h3>🕐 Hours</h3>
              <p>Mon-Fri: 8:00 - 20:00</p>
              <p>Sat-Sun: 9:00 - 21:00</p>
              <p>Holidays: 10:00 - 18:00</p>
            </div>
          </motion.div>

          <motion.div className={styles['contact-form-section']} {...fadeInUp}>
            <h2>Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles['form-group']}>
                <label htmlFor="name">Name *</label>
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
                <label htmlFor="email">Email *</label>
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
                <label htmlFor="subject">Subject *</label>
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
                <label htmlFor="message">Message *</label>
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
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
