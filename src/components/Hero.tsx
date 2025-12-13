import { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import { useNavigate } from 'react-router-dom';

type HeroProps = {
  backgroundImage?: string; // 👈 optional
};

const Hero = ({ backgroundImage }: HeroProps) => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slider images (used only if backgroundImage is NOT provided)
  const slides = [
    '/assets/hero-slide-1.jpeg',
    '/assets/hero-slide-2.jpeg',
    '/assets/hero-slide-3.jpeg',
    '/assets/hero-slide-4.jpeg',
    '/assets/hero-slide-5.jpeg',
  ];

  useEffect(() => {
    if (backgroundImage) return; // ❗ stop slider for static hero

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length, backgroundImage]);

  return (
    <section className={styles.hero}>
      {/* Background */}
      {backgroundImage ? (
        // ✅ Static background (Alberta, Ontario, etc.)
        <div
          className={styles.slide}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      ) : (
        // ✅ Slider (Home page)
        <div className={styles.sliderContainer}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${styles.slide} ${
                index === currentSlide ? styles.slideActive : ''
              }`}
              style={{ backgroundImage: `url(${slide})` }}
            />
          ))}
        </div>
      )}

      <div className={styles.overlay} />

      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            Make Better<br />Real Estate Decisions in Ontario
          </h1>
          <p className={styles.subtitle}>
            Browse 22 years of sales history.<br />
            Watch new listings, get notified when they're sold.
          </p>
        </div>
      </div>

      {/* Indicators only for slider */}
      {!backgroundImage && (
        <div className={styles.indicators}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === currentSlide ? styles.indicatorActive : ''
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Hero;
