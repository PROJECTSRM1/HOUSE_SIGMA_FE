import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';
import '@/styles/Hero.css';

const heroImages = [
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
  'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80',
  'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=80',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80',
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <div className="hero-slider">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="hero-slide"
          >
            <img
              src={heroImages[currentSlide]}
              alt="Property"
              className="hero-slide-image"
            />
          </motion.div>
        </AnimatePresence>

        <div className="hero-overlay" />

        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-text"
          >
            <h1 className="hero-title">
              Streamline Your Property Management
            </h1>
            <p className="hero-description">
              Explore all the tools you need for efficient and streamlined property management.
            </p>
            <div className="hero-buttons">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hero-btn-secondary"
              >
                <Play size={18} />
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </div>

        <div className="hero-dots">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
