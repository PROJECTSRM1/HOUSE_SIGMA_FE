import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

type Testimonial = {
  img: string;
  quote: string;
  author: string;
  role: string;
};

type Props = {
  testimonials: Testimonial[];
};

const TestimonialCarousel: React.FC<Props> = ({ testimonials }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const nextSlide = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="list-testimonial-card"
      >
        <div className="list-testimonial-image">
          <img src={testimonials[index].img} alt="Customer" />
          <div className="list-testimonial-play">
            <Play size={18} color="white" />
          </div>
        </div>

        <div className="list-testimonial-content">
          <div style={{ fontSize: 30, color: "#0fa783", marginBottom: 6 }}>
            &ldquo;
          </div>

          <blockquote>{testimonials[index].quote}</blockquote>
          <p className="list-testimonial-author">
            {testimonials[index].author}
          </p>
          <p className="list-testimonial-role">
            {testimonials[index].role}
          </p>

          <div className="testimonial-nav">
            <button onClick={prevSlide} className="testimonial-arrow">←</button>
            <button onClick={nextSlide} className="testimonial-arrow">→</button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TestimonialCarousel;
