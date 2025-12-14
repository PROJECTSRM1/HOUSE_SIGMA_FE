import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  ArrowRight,
  CheckCircle,
  Clock,
  TrendingUp,
  Users,
  ListPlus,
  FileSignature,
  Shield,
  CreditCard,
  Wrench,
  Sparkles
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthModals from "@/components/AuthModals";
import "@/styles/AdvertiseListings.css";

const AdvertiseListings = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
   const [isAuthModalOpen] = useState(false);
    const setIsAuthModalOpen = (_value: boolean) => {};
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.45 }
  };

  const testimonials = [
    {
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop",
      quote: "We can charge application fees and see them come through in our bottom line — increasing our income potential through applications.",
      author: "Andrew Comeens",
      role: "Property Manager, DASH Real Estate Company"
    },
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
      quote: "HouseSigma is different from other platforms — the biggest difference? Direct communication with tenants and seamless integrations.",
      author: "Chris Lambu",
      role: "CEO, Lambu Management"
    },
    {
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=300&fit=crop",
      quote: "Managing properties is now easier than ever — automation helps us save time and scale faster.",
      author: "Sarah Mitchell",
      role: "Owner, Mitchell Rentals"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const prevSlide = () =>
    setTestimonialIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const nextSlide = () =>
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);

  const faqData = [
    { q: "How do I advertise my rental properties for free?", a: "Simply create a listing in HouseSigma and we'll automatically syndicate it to major rental sites like Zillow, Trulia, and HotPads at no extra cost." },
    { q: "Why should I advertise my own rental properties?", a: "Advertising your own properties gives you direct control over the listing, faster responses to inquiries, and helps you find quality tenants quickly." },
    { q: "Can I charge tenants application fees through HouseSigma?", a: "Yes, you can set up application fees that go directly to your account, helping offset screening costs." },
    { q: "Does it cost money to list my units online?", a: "No, listing your units on major rental sites through HouseSigma is completely free." },
    { q: "How do I list my vacant units on other websites?", a: "Once you create a listing in HouseSigma, simply enable syndication and your listing will appear on partner sites automatically." },
    { q: "What is a custom website?", a: "A custom website is your own branded property management site where tenants can view listings, apply, and access their tenant portal." },
    { q: "How do I get my units to show up on Zillow, Trulia & HotPads?", a: "Enable listing syndication in your HouseSigma dashboard and your units will automatically appear on these platforms within 24-48 hours." },
    { q: "How do I update listing information everywhere at once?", a: "Simply update your listing in HouseSigma and all syndicated listings will be updated automatically across all platforms." }
  ];

  return (
    <div className="list-page">
      <Navbar />

      {/* HERO */}
      <section className="list-hero">
        <div className="list-container">
          <div className="list-breadcrumb">
            <Link to="/">Home</Link>
            <span>|</span>
            <Link to="/features">Features</Link>
            <span>|</span>
            <span>Leasing</span>
          </div>

          <div className="list-hero-content">
            <motion.div
              className="list-hero-text"
              initial={{ opacity: 0, x: -36 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1>Get more eyes on your listings</h1>
              <p>
                Share listings on Zillow, Trulia, and more for free with just a few
                clicks to market your properties.
              </p>

              <div className="list-email-form">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="list-email-input"
                />
                <button
                  className="list-btn"
                  onClick={() => setIsAuthModalOpen(true)}
                >
                  See It In Action
                </button>
              </div>

              <div className="list-rating">
                <span className="list-rating-text">Rated 4.8+ out of 5</span>
                <div className="list-stars" aria-hidden>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>☆</span>
                </div>
                <div className="list-capterra">
                  Based on 700+ reviews on <strong>Capterra</strong>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="list-hero-video"
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              <div className="list-video-box">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop"
                  alt="Listings demo thumbnail"
                  style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 6 }}
                />
                <button
                  className="list-play-btn"
                  aria-label="Play demo"
                  onClick={() => setIsAuthModalOpen(true)}
                >
                  <Play size={22} color="white" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY HOUSESIGMA */}
      <section className="list-why">
        <div className="list-container">
          <motion.h2 {...fadeInUp}>
            Why HouseSigma
          </motion.h2>

          <div className="list-why-grid">
            <motion.div className="list-why-card" {...fadeInUp}>
              <div className="list-why-icon blue">
                <ListPlus size={28} />
              </div>
              <h3>Surprisingly simple</h3>
              <p>Market your listings and start getting leads without extra tools, fees, or skills.</p>
            </motion.div>

            <motion.div className="list-why-card" {...fadeInUp}>
              <div className="list-why-icon pink">
                <Shield size={28} />
              </div>
              <h3>Secure & trusted</h3>
              <p>All listing pages & online applications are protected with the highest security.</p>
            </motion.div>

            <motion.div className="list-why-card" {...fadeInUp}>
              <div className="list-why-icon teal">
                <TrendingUp size={28} />
              </div>
              <h3>Built for growth</h3>
              <p>Manage dozens—or hundreds—of listings as you scale your portfolio.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="list-features">
        <div className="list-container">
          <div className="list-features-header">
            <motion.h2 {...fadeInUp}>Syndicate your listings in seconds</motion.h2>
            <motion.p {...fadeInUp}>
              Maximize listing exposure and attract high-quality tenant leads with zero extra effort.
            </motion.p>
          </div>

          <div className="list-features-grid">
            <motion.div className="list-feature-card pink" {...fadeInUp}>
              <div>
                <h3>List on top rental sites</h3>
                <p>Share to Zillow, Trulia, HotPads, and more from one dashboard. No re-posting or duplicate work.</p>
              </div>
              <div className="list-feature-img">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop"
                  alt="Listing sync"
                />
              </div>
            </motion.div>

            <motion.div className="list-feature-card blue" {...fadeInUp}>
              <div>
                <h3>Instant updates</h3>
                <p>Edit listings in HouseSigma and see your changes synced across every listing site.</p>
              </div>
              <div className="list-feature-img">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop"
                  alt="Instant updates"
                />
              </div>
            </motion.div>

            <motion.div className="list-feature-card teal" {...fadeInUp}>
              <div>
                <h3>Create your own website</h3>
                <p>Create your own website to show off your listings, have tenants apply online, create a tenant portal login, and more.</p>
              </div>
              <div className="list-feature-img">
                <img
                  src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=200&fit=crop"
                  alt="Create website"
                />
              </div>
            </motion.div>

            <motion.div className="list-feature-card purple" {...fadeInUp}>
              <div>
                <h3>Accept applications online</h3>
                <p>Prospects can apply right from their favorite listing site. No more printing, scanning, or chasing down paperwork.</p>
              </div>
              <div className="list-feature-img">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop"
                  alt="Accept applications"
                />
              </div>
            </motion.div>
          </div>

          <div className="list-cta-center">
            <button className="list-btn" onClick={() => setIsAuthModalOpen(true)}>
              See It In Action <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* AI SECTION */}
      <section className="ai-blue-section">
        <div className="ai-inner">
          <motion.div
            className="ai-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="ai-badge">
              <Sparkles size={16} />
              AI Assistant
            </div>

            <h2>Create better<br />listings with AI</h2>

            <p>
              Generate listing descriptions that perform in seconds so you
              can fill units sooner with top candidates.
            </p>

            <button className="list-btn" onClick={() => setIsAuthModalOpen(true)}>
              See It In Action <ArrowRight size={16} />
            </button>
          </motion.div>

          <motion.div
            className="ai-image"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop"
              alt="AI Assistant UI"
            />
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="list-stats-section">
        <div className="list-container">
          <div className="list-stats-content">
            <div className="list-stats-text">
              <h2>The HouseSigma effect</h2>
              <p>Delivering the features you need with the results you've been waiting for. Now that's smarter property management.</p>
              <button className="list-btn" onClick={() => setIsAuthModalOpen(true)}>
                See It In Action <ArrowRight size={16} />
              </button>
            </div>

            <div className="list-stats-grid">
              <div className="list-stat-card blue">
                <CheckCircle size={28} color="#2f82ff" />
                <span>On-Time Payments</span>
                <strong>88%</strong>
              </div>
              <div className="list-stat-card orange">
                <Clock size={28} color="#ff8a30" />
                <span>Time Saved</span>
                <strong>23hrs/mo</strong>
              </div>
              <div className="list-stat-card green">
                <TrendingUp size={28} color="#0fa783" />
                <span>Increased Occupancy</span>
                <strong>96%</strong>
              </div>
              <div className="list-stat-card purple">
                <Users size={28} color="#8d4cff" />
                <span>Tenant Requests Handled</span>
                <strong>Over 50%</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL CAROUSEL */}
      <section className="list-testimonial">
        <div className="list-container">
          <h2>Hear from our customers</h2>

          <AnimatePresence mode="wait">
            <motion.div
              key={testimonialIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="list-testimonial-card"
            >
              <div className="list-testimonial-image">
                <img
                  src={testimonials[testimonialIndex].img}
                  alt="Customer"
                />
                <div className="list-testimonial-play">
                  <Play size={18} color="white" />
                </div>
              </div>

              <div className="list-testimonial-content">
                <div style={{ fontSize: 30, color: "#0fa783", marginBottom: 6 }}>
                  &ldquo;
                </div>

                <blockquote>{testimonials[testimonialIndex].quote}</blockquote>
                <p className="list-testimonial-author">{testimonials[testimonialIndex].author}</p>
                <p className="list-testimonial-role">{testimonials[testimonialIndex].role}</p>

                <div className="testimonial-nav">
                  <button onClick={prevSlide} className="testimonial-arrow">
                    ←
                  </button>
                  <button onClick={nextSlide} className="testimonial-arrow">
                    →
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* FAQ */}
      <section className="list-faq">
        <div className="list-container">
          <h2>Your questions answered</h2>

          <div className="list-faq-grid">
            {faqData.map((faq, i) => (
              <div className="list-faq-item" key={i}>
                <div className="list-faq-question" onClick={() => toggleFaq(i)}>
                  <h4>{faq.q}</h4>
                  <span className={`faq-arrow ${openFaq === i ? "open" : ""}`}>⌃</span>
                </div>

                <AnimatePresence>
                  {openFaq === i && (
                    <motion.p
                      className="list-faq-answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      {faq.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLORE MORE FEATURES */}
      <section className="list-explore">
        <div className="list-container">
          <div className="list-explore-header">
            <h2>Explore more features</h2>
            <p>Discover additional tools and features that can streamline your property management workflow.</p>
          </div>

          <div className="list-explore-grid">
            <Link to="/features/accounting" className="list-explore-card">
              <div className="list-explore-icon blue"><CheckCircle size={22} /></div>
              <span>Accounting</span>
            </Link>

            <Link to="/features/leasing" className="list-explore-card">
              <div className="list-explore-icon teal"><ListPlus size={22} /></div>
              <span>Leasing</span>
            </Link>

            <Link to="/features/resident-experience" className="list-explore-card">
              <div className="list-explore-icon purple"><FileSignature size={22} /></div>
              <span>Resident Experience</span>
            </Link>

            <Link to="/features/operations" className="list-explore-card">
              <div className="list-explore-icon orange"><Wrench size={22} /></div>
              <span>Operations</span>
            </Link>

            <Link to="/features/rent-collection" className="list-explore-card">
              <div className="list-explore-icon teal"><CreditCard size={22} /></div>
              <span>Rent Collection</span>
            </Link>

            <Link to="/features/ai-assistant" className="list-explore-card highlighted">
              <div className="list-explore-icon purple"><Sparkles size={22} /></div>
              <span>AI Assistant</span>
            </Link>
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="resources-section">
        <div className="list-container">
          <h2 className="resources-title">Resources & learning materials</h2>
          <p className="resources-subtitle">
            Bring your entire rental portfolio under one roof so you can move faster and manage
            every property with the support you need to stay organized and grow.
          </p>

          <div className="resources-grid">
            <div className="resource-card">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=200&fit=crop" 
                className="resource-img" 
                alt="Resource 1"
              />
              <div className="resource-content">
                <span className="resource-tag">BLOG</span>
                <h4 className="resource-title">
                  Find the Best Website to List a Rental Property: Complete Guide
                </h4>
                <p className="resource-desc">
                  Discover the best websites to list your rental property to maximize visibility.
                </p>
              </div>
            </div>

            <div className="resource-card">
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=200&fit=crop" 
                className="resource-img" 
                alt="Resource 2"
              />
              <div className="resource-content">
                <span className="resource-tag">FREE GUIDE</span>
                <h4 className="resource-title">
                  A Property Manager's Guide to Attracting New Clients
                </h4>
                <p className="resource-desc">
                  Everything you need to grow your property management business.
                </p>
              </div>
            </div>

            <div className="resource-card">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop" 
                className="resource-img" 
                alt="Resource 3"
              />
              <div className="resource-content">
                <span className="resource-tag">FREE GUIDE</span>
                <h4 className="resource-title">
                  The Landlord's Complete Guide To Finding & Screening Tenants
                </h4>
                <p className="resource-desc">
                  A complete guide for landlords on finding great tenants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="list-footer-cta">
        <div className="list-container">
          <h3>Serious about property management?</h3>
          <p>
            Save more time. Manage more units. Unlock more growth.
            <br />
            Choose HouseSigma's property management software.
          </p>

          <div className="footer-cta-form">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="footer-cta-input"
            />
            <button className="list-btn" onClick={() => setIsAuthModalOpen(true)}>
              See It In Action
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <AuthModals isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </div>
  );
};

export default AdvertiseListings;
