import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp, Shield, Zap, Play, ArrowRight, ChevronDown,
  DollarSign, BarChart3, Users, CheckCircle, Calculator,
  Home, FileText, PieChart, Wallet, Sparkles, Building2,
  MapPin, Receipt, Target
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/styles/Bookkeeping.css';
import AuthModals from '@/components/AuthModals';

const Bookkeeping = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bookkeeping-page">
      <Navbar />

      {/* Hero Section */}
      <section className="bookkeeping-hero">
        <div className="bookkeeping-container">
          <div className="bookkeeping-breadcrumb">
            <Link to="/">Home</Link>
            <span>|</span>
            <Link to="/features">Features</Link>
            <span>|</span>
            <span>Bookkeeping</span>
          </div>

          <div className="bookkeeping-hero-content">
            <motion.div
              className="bookkeeping-hero-text"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1>Track every real estate transaction with precision</h1>
              <p>
                Manage your property finances effortlessly with automated bookkeeping
                tailored for Canadian real estate. Track expenses, income, commissions,
                and generate tax-ready reports—all in one place.
              </p>

              <div className="bookkeeping-email-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bookkeeping-email-input"
                />
                <button className="bookkeeping-cta-btn">Get Started Free</button>
              </div>

              <div className="bookkeeping-rating">
                <span className="bookkeeping-rating-text">Trusted by 10,000+ real estate professionals</span>
                <div className="bookkeeping-stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <div className="bookkeeping-capterra">
                  <strong>4.9/5</strong> rating across Canada
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bookkeeping-hero-video"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bookkeeping-video-placeholder">
                <div className="bookkeeping-play-btn">
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why HomeNest Section */}
      <section className="bookkeeping-why">
        <div className="bookkeeping-container">
          <motion.h2 {...fadeInUp}>Why choose HomeNest for bookkeeping?</motion.h2>

          <div className="bookkeeping-why-grid">
            <motion.div
              className="bookkeeping-why-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bookkeeping-why-icon blue">
                <Building2 size={28} />
              </div>
              <h3>Built for real estate</h3>
              <p>
                Designed specifically for Canadian real estate professionals with features
                that understand property transactions, commissions, and rental income tracking.
              </p>
            </motion.div>

            <motion.div
              className="bookkeeping-why-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bookkeeping-why-icon pink">
                <Shield size={28} />
              </div>
              <h3>Tax-ready reports</h3>
              <p>
                Generate CRA-compliant reports instantly. Track deductible expenses,
                HST/GST, and prepare for tax season with confidence.
              </p>
            </motion.div>

            <motion.div
              className="bookkeeping-why-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bookkeeping-why-icon teal">
                <Zap size={28} />
              </div>
              <h3>Real-time insights</h3>
              <p>
                Get instant visibility into your property portfolio's financial health
                with live dashboards and automated reporting.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="bookkeeping-features">
        <div className="bookkeeping-container">
          <div className="bookkeeping-features-header">
            <motion.h2 {...fadeInUp}>Complete financial control for your property portfolio</motion.h2>
            <motion.p {...fadeInUp}>
              Everything you need to manage real estate finances across Ontario, Alberta, and British Columbia.
            </motion.p>
          </div>

          <div className="bookkeeping-features-grid">
            <motion.div
              className="bookkeeping-feature-card blue-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3>Track property income & expenses</h3>
              <p>
                Automatically categorize rental income, mortgage payments, maintenance costs,
                and property taxes. Keep separate books for each property in your portfolio
                with ease.
              </p>
              <div className="bookkeeping-feature-image income-tracking">
              </div>
            </motion.div>

            <motion.div
              className="bookkeeping-feature-card pink-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3>Commission calculations</h3>
              <p>
                Automate commission splits for real estate agents and brokerages. Track
                buyer and seller commissions, referral fees, and brokerage splits accurately.
              </p>
              <div className="bookkeeping-feature-image commission-calc">
                
              </div>
            </motion.div>

            <motion.div
              className="bookkeeping-feature-card teal-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3>Multi-property management</h3>
              <p>
                Manage financials for multiple properties across different Canadian provinces.
                Consolidate reports or view property-by-property performance.
              </p>
              <div className="bookkeeping-feature-image multi-property">
                
              </div>
            </motion.div>

            <motion.div
              className="bookkeeping-feature-card blue-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3>GST/HST tracking</h3>
              <p>
                Automatically track GST, HST, and PST for different provinces. Generate
                tax-ready reports for filing and maintain compliance with CRA requirements.
              </p>
              <div className="bookkeeping-feature-image tax-tracking">

              </div>
            </motion.div>
          </div>

          <div className="bookkeeping-cta-center">
            <button className="bookkeeping-cta-btn">
              Start Your Free Trial <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Effect Section */}
      <section className="bookkeeping-effect">
        <div className="bookkeeping-container">
          <div className="bookkeeping-effect-content">
            <motion.div
              className="bookkeeping-effect-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>The HomeNest advantage</h2>
              <p>
                Join thousands of Canadian real estate professionals who save time and
                increase profitability with automated bookkeeping built for property management.
              </p>
              <button className="bookkeeping-cta-btn">
                See How It Works <ArrowRight size={18} />
              </button>
            </motion.div>

            <motion.div
              className="bookkeeping-stats-grid"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bookkeeping-stat-card blue">
                <DollarSign className="bookkeeping-stat-icon blue" size={32} />
                <span>Average Monthly Savings</span>
                <strong>$2,400</strong>
              </div>

              <div className="bookkeeping-stat-card orange">
                <Target className="bookkeeping-stat-icon orange" size={32} />
                <span>Time Saved on Bookkeeping</span>
                <strong>15hrs/mo</strong>
              </div>

              <div className="bookkeeping-stat-card green">
                <TrendingUp className="bookkeeping-stat-icon green" size={32} />
                <span>Portfolio Growth Rate</span>
                <strong>+42%</strong>
              </div>

              <div className="bookkeeping-stat-card purple">
                <Users className="bookkeeping-stat-icon purple" size={32} />
                <span>Real Estate Professionals Using HomeNest</span>
                <strong>10,000+</strong>
              </div>

              <p className="bookkeeping-stats-note">
                Based on HomeNest user surveys across Canada. Results may vary.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bookkeeping-testimonial">
        <div className="bookkeeping-container">
          <motion.h2 {...fadeInUp}>Trusted by Canadian real estate professionals</motion.h2>

          <motion.div
            className="bookkeeping-testimonial-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bookkeeping-testimonial-image">
              <div className="bookkeeping-testimonial-play">
                <Play size={20} fill="white" />
              </div>
            </div>

            <div className="bookkeeping-testimonial-content">
              <div className="bookkeeping-quote-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <blockquote>
                HomeNest's bookkeeping has transformed how I manage my
                property portfolio in Toronto. The automated categorization saves
                me hours every week, and the tax reports make filing season a breeze.
                It's built by people who understand Canadian real estate.
              </blockquote>
              <p className="bookkeeping-testimonial-author">Sarah Chen</p>
              <p className="bookkeeping-testimonial-role">Real Estate Investor, Toronto ON</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bookkeeping-faq">
        <div className="bookkeeping-container">
          <motion.h2 {...fadeInUp}>Frequently asked questions</motion.h2>

          <div className="bookkeeping-faq-grid">
            <motion.div
              className="bookkeeping-faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="bookkeeping-faq-question" onClick={() => toggleFaq(0)}>
                <h4>What makes HomeNest Bookkeeping different?</h4>
                <ChevronDown size={20} className={`faq-arrow ${openFaq === 0 ? 'open' : ''}`} />
              </div>
              <AnimatePresence>
                {openFaq === 0 && (
                  <motion.p
                    className="bookkeeping-faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    HomeNest is built specifically for Canadian real estate professionals.
                    We understand property transactions, MLS data, commission structures, and
                    provincial tax requirements (GST/HST/PST). Our platform automates what
                    generic accounting software makes manual.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              className="bookkeeping-faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="bookkeeping-faq-question" onClick={() => toggleFaq(1)}>
                <h4>Can I track multiple properties in different provinces?</h4>
                <ChevronDown size={20} className={`faq-arrow ${openFaq === 1 ? 'open' : ''}`} />
              </div>
              <AnimatePresence>
                {openFaq === 1 && (
                  <motion.p
                    className="bookkeeping-faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Absolutely! HomeNest supports properties across Ontario, Alberta, and
                    British Columbia. Track each property separately with province-specific
                    tax calculations, or view consolidated reports for your entire portfolio.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              className="bookkeeping-faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="bookkeeping-faq-question" onClick={() => toggleFaq(2)}>
                <h4>How does commission tracking work?</h4>
                <ChevronDown size={20} className={`faq-arrow ${openFaq === 2 ? 'open' : ''}`} />
              </div>
              <AnimatePresence>
                {openFaq === 2 && (
                  <motion.p
                    className="bookkeeping-faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    HomeNest automatically calculates real estate commissions based on your
                    brokerage split structure. Track buyer and seller side commissions, referral
                    fees, and team splits. Generate detailed commission reports for each transaction.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              className="bookkeeping-faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="bookkeeping-faq-question" onClick={() => toggleFaq(3)}>
                <h4>Is HomeNest compliant with CRA requirements?</h4>
                <ChevronDown size={20} className={`faq-arrow ${openFaq === 3 ? 'open' : ''}`} />
              </div>
              <AnimatePresence>
                {openFaq === 3 && (
                  <motion.p
                    className="bookkeeping-faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Yes! HomeNest generates CRA-compliant reports for income tax filing,
                    including T776 (Statement of Real Estate Rentals) support. Our GST/HST
                    tracking ensures you're audit-ready with proper documentation.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              className="bookkeeping-faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <div className="bookkeeping-faq-question" onClick={() => toggleFaq(4)}>
                <h4>Can I import data from my existing accounting software?</h4>
                <ChevronDown size={20} className={`faq-arrow ${openFaq === 4 ? 'open' : ''}`} />
              </div>
              <AnimatePresence>
                {openFaq === 4 && (
                  <motion.p
                    className="bookkeeping-faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Yes! HomeNest supports importing from QuickBooks, Excel, and CSV files.
                    Our migration team can help transfer your historical data to ensure a
                    smooth transition without losing any financial records.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              className="bookkeeping-faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <div className="bookkeeping-faq-question" onClick={() => toggleFaq(5)}>
                <h4>Do you offer support for real estate agents and property managers?</h4>
                <ChevronDown size={20} className={`faq-arrow ${openFaq === 5 ? 'open' : ''}`} />
              </div>
              <AnimatePresence>
                {openFaq === 5 && (
                  <motion.p
                    className="bookkeeping-faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Absolutely! Our platform serves both real estate agents managing
                    transactions and property managers handling rental portfolios. We offer
                    dedicated support, training resources, and onboarding tailored to your
                    specific needs.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Explore More Features */}
      <section className="bookkeeping-explore">
        <div className="bookkeeping-container">
          <div className="bookkeeping-explore-header">
            <motion.h2 {...fadeInUp}>Explore more features</motion.h2>
            <motion.p {...fadeInUp}>
              Discover additional tools designed for Canadian real estate professionals.
            </motion.p>
          </div>

          <div className="bookkeeping-explore-grid">
            <Link to="/features/bank-sync" className="bookkeeping-explore-card">
              <div className="bookkeeping-explore-icon blue">
                <Wallet size={24} />
              </div>
              <span>Bank Sync</span>
            </Link>

            <Link to="/features/financial-reports" className="bookkeeping-explore-card">
              <div className="bookkeeping-explore-icon teal">
                <BarChart3 size={24} />
              </div>
              <span>Financial Reports</span>
            </Link>

            <Link to="/features/rent-collection" className="bookkeeping-explore-card">
              <div className="bookkeeping-explore-icon purple">
                <DollarSign size={24} />
              </div>
              <span>Rent Collection</span>
            </Link>

            <Link to="/features/tenant-management" className="bookkeeping-explore-card">
              <div className="bookkeeping-explore-icon pink">
                <Users size={24} />
              </div>
              <span>Tenant Management</span>
            </Link>

            <Link to="/features/quickbooks" className="bookkeeping-explore-card">
              <div className="bookkeeping-explore-icon green">
                <PieChart size={24} />
              </div>
              <span>QuickBooks Integration</span>
            </Link>

            <Link to="/market-trends" className="bookkeeping-explore-card highlighted">
              <div className="bookkeeping-explore-icon orange">
                <Sparkles size={24} />
              </div>
              <span>Market Trends</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Bookkeeping;
