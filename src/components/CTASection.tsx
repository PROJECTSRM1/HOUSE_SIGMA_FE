import { motion } from 'framer-motion';
import '@/styles/CTA.css';

const CTASection = () => {
  return (
    <section className="cta">
      <div className="cta-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="cta-box"
        >
          <h2 className="cta-title">
            Ready to Take Your Property Management to the Next Level?
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cta-button"
          >
            Get Started Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
