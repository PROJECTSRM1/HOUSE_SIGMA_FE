import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  ArrowRight,
  ChevronDown,
  CheckCircle,
  Clock,
  TrendingUp,
  Users,
  Calculator,
  Home,
  FileText,
  MessageSquare,
  DollarSign,
  Sparkles
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/QuickBooksIntegration.css";

const QuickBooksIntegration = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.45 }
  };

  return (
    <div className="qb-page">
      <Navbar />

      {/* HERO */}
      <section className="qb-hero">
        <div className="qb-container">
          <div className="qb-breadcrumb">
            <Link to="/">Home</Link>
            <span>|</span>
            <Link to="/features">Features</Link>
            <span>|</span>
            <span>Accounting</span>
          </div>

          <div className="qb-hero-content">
            <motion.div
              className="qb-hero-text"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1>Bookkeeping your way with HomeNest + QuickBooks</h1>
              <p>
                Connect HomeNest with QuickBooks Online for financial
                visibility, weekly time savings, and the flexibility to make
                smarter decisions for your rental business.
              </p>

              <div className="qb-email-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="qb-email-input"
                />
                <button className="qb-btn">
                  See It In Action
                </button>
              </div>

              <div className="qb-rating">
                <span className="qb-rating-text">Rated 4.8+ out of 5</span>
                <div className="qb-stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <div className="qb-capterra">
                  Based on 700+ reviews on <strong>Capterra</strong>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="qb-hero-video"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="qb-video-box">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop" 
                  alt="QuickBooks Integration" 
                  className="qb-bg-image"
                />
                <div className="qb-video-overlay">
                  <div className="qb-play-btn">

                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="qb-why">
        <div className="qb-container">
          <motion.h2 {...fadeInUp}>Why HomeNest</motion.h2>

          <div className="qb-why-grid">
            <motion.div
              className="qb-why-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <div className="qb-why-icon blue">
                <Calculator size={28} />
              </div>
              <h3>Surprisingly simple</h3>
              <p>
                Enjoy a painless QuickBooks integration — few clicks to connect
                and automatic syncing thereafter.
              </p>
            </motion.div>

            <motion.div
              className="qb-why-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 }}
            >
              <div className="qb-why-icon pink">
                <FileText size={28} />
              </div>
              <h3>Secure & trusted</h3>
              <p>
                Bank-grade security and PCI standards ensure your financial
                data is protected across the sync.
              </p>
            </motion.div>

            <motion.div
              className="qb-why-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.16 }}
            >
              <div className="qb-why-icon teal">
                <Home size={28} />
              </div>
              <h3>Built for growth</h3>
              <p>
                Scale easily as you add properties — accounts and transactions
                remain reconciled and searchable.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="qb-features">
        <div className="qb-container">
          <div className="qb-features-header">
            <motion.h2 {...fadeInUp}>
              The accounting integration property managers love
            </motion.h2>
            <motion.p {...fadeInUp}>
              Best-in-class property management with the accounting power of
              QuickBooks, easily synced.
            </motion.p>
          </div>

          <div className="qb-features-grid">
            <motion.div
              className="qb-feature-card pink-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <h3>One-click sync</h3>
              <p>
                Instantly connect bookkeeping data between HomeNest and
                QuickBooks Online — no spreadsheets, no double entry.
              </p>
              <div className="qb-feature-image">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" 
                  alt="One-click sync dashboard"
                />
              </div>
            </motion.div>

            <motion.div
              className="qb-feature-card blue-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 }}
            >
              <h3>Simplify tax season</h3>
              <p>
                Export reports, grant accountant access, and keep your records
                accurate with minimal effort.
              </p>
              <div className="qb-feature-image">
                <img 
                  src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&h=400&fit=crop" 
                  alt="Tax reports and documents"
                />
              </div>
            </motion.div>

            <motion.div
              className="qb-feature-card blue-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.16 }}
            >
              <h3>Faster data entry</h3>
              <p>
                Transactions, payments, and adjustments flow between QuickBooks
                and HomeNest automatically — less manual work.
              </p>
              <div className="qb-feature-image">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" 
                  alt="Automated data entry"
                />
              </div>
            </motion.div>

            <motion.div
              className="qb-feature-card teal-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.24 }}
            >
              <h3>Sync your bank</h3>
              <p>
                Pull, categorize, and reconcile transactions from your bank or
                credit card with bank sync powered by Plaid.
              </p>
              <div className="qb-feature-image">
                <img 
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop" 
                  alt="Bank synchronization"
                />
              </div>
            </motion.div>
          </div>

          <div className="qb-cta-center">
            <button className="qb-btn">
              See It In Action <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* EFFECT */}
      <section className="qb-effect">
        <div className="qb-container">
          <div className="qb-effect-content">
            <motion.div
              className="qb-effect-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <h2>The HomeNest effect</h2>
              <p>
                Delivering the features you need with the results you've been
                waiting for. Now that's smarter property management.
              </p>
              <button className="qb-btn">
                See It In Action <ArrowRight size={18} />
              </button>
            </motion.div>

            <motion.div
              className="qb-stats-grid"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.12 }}
            >
              <div className="qb-stat-card blue">
                <CheckCircle className="qb-stat-icon blue" size={32} />
                <span>On-Time Payments</span>
                <strong>88%</strong>
              </div>

              <div className="qb-stat-card orange">
                <Clock className="qb-stat-icon orange" size={32} />
                <span>Time Saved</span>
                <strong>23hrs/mo</strong>
              </div>

              <div className="qb-stat-card green">
                <TrendingUp className="qb-stat-icon green" size={32} />
                <span>Increased Occupancy</span>
                <strong>96%</strong>
              </div>

              <div className="qb-stat-card purple">
                <Users className="qb-stat-icon purple" size={32} />
                <span>Tenant Requests Automatically Handled</span>
                <strong>Over 50%</strong>
              </div>

              <p className="qb-stats-note">
                Based on HomeNest user surveys. Results may vary.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="qb-testimonial">
        <div className="qb-container">
          <motion.h2 {...fadeInUp}>
            Hear from our customers
          </motion.h2>

          <motion.div
            className="qb-testimonial-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.06 }}
          >
            <div className="qb-testimonial-image">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop" 
                alt="Harrison Furman"
                className="qb-person-image"
              />
              <div className="qb-testimonial-play">
                <Play size={20} fill="white" />
              </div>
            </div>

            <div className="qb-testimonial-content">
              <div className="qb-quote-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <blockquote>
                I used QuickBooks with HomeNest and found syncing to be painless —
                the bookkeeping was simpler and the monthly close faster.
              </blockquote>
              <p className="qb-testimonial-author">Harrison Furman</p>
              <p className="qb-testimonial-role">
                Property Manager, Greenwave Capital
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="qb-faq">
        <div className="qb-container">
          <motion.h2 {...fadeInUp}>Your questions answered</motion.h2>

          <div className="qb-faq-grid">
            <motion.div className="qb-faq-item" {...fadeInUp}>
              <div className="qb-faq-question" onClick={() => toggleFaq(0)}>
                <h4>Is QuickBooks a property management software?</h4>
                <ChevronDown size={20} className={`qb-arrow ${openFaq === 0 ? "open" : ""}`} />
              </div>
              <AnimatePresence>
                {openFaq === 0 && (
                  <motion.p
                    className="qb-faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.28 }}
                  >
                    QuickBooks handles accounting — but it's not built specifically for
                    property operations at scale. HomeNest fills the gaps and syncs to
                    QuickBooks to keep books accurate.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div className="qb-faq-item" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.36, delay: 0.06 }}>
              <div className="qb-faq-question" onClick={() => toggleFaq(1)}>
                <h4>What are the benefits of a QuickBooks integration?</h4>
                <ChevronDown size={20} className={`qb-arrow ${openFaq === 1 ? "open" : ""}`} />
              </div>
              <AnimatePresence>
                {openFaq === 1 && (
                  <motion.p className="qb-faq-answer" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.28 }}>
                    Syncing saves time, reduces errors, and gives accountants easy access
                    to exportable reports and reconciled transactions.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div className="qb-faq-item" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.36, delay: 0.12 }}>
              <div className="qb-faq-question" onClick={() => toggleFaq(2)}>
                <h4>Is it a one-way sync?</h4>
                <ChevronDown size={20} className={`qb-arrow ${openFaq === 2 ? "open" : ""}`} />
              </div>
              <AnimatePresence>
                {openFaq === 2 && (
                  <motion.p className="qb-faq-answer" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.28 }}>
                    Yes — the sync from HomeNest to QuickBooks is one-way per company,
                    ensuring a consistent accounting system in QuickBooks.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div className="qb-faq-item" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.36, delay: 0.18 }}>
              <div className="qb-faq-question" onClick={() => toggleFaq(3)}>
                <h4>How do you avoid duplicate data in QuickBooks?</h4>
                <ChevronDown size={20} className={`qb-arrow ${openFaq === 3 ? "open" : ""}`} />
              </div>
              <AnimatePresence>
                {openFaq === 3 && (
                  <motion.p className="qb-faq-answer" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.28 }}>
                    A start-date prevents the sync of historical data that already exists
                    in QuickBooks, avoiding duplicate entries.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div className="qb-faq-item" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.36, delay: 0.24 }}>
              <div className="qb-faq-question" onClick={() => toggleFaq(4)}>
                <h4>Which QuickBooks version does HomeNest sync with?</h4>
                <ChevronDown size={20} className={`qb-arrow ${openFaq === 4 ? "open" : ""}`} />
              </div>
              <AnimatePresence>
                {openFaq === 4 && (
                  <motion.p className="qb-faq-answer" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.28 }}>
                    HomeNest syncs with QuickBooks Online (QBO).
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div className="qb-faq-item" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.36, delay: 0.30 }}>
              <div className="qb-faq-question" onClick={() => toggleFaq(5)}>
                <h4>Do I need to map fields to QuickBooks?</h4>
                <ChevronDown size={20} className={`qb-arrow ${openFaq === 5 ? "open" : ""}`} />
              </div>
              <AnimatePresence>
                {openFaq === 5 && (
                  <motion.p className="qb-faq-answer" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.28 }}>
                    No — we provide sensible default mappings (properties → customers,
                    leases → jobs/sub-customers) and you can tweak them in settings.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EXPLORE MORE FEATURES */}
      <section className="qb-explore">
        <div className="qb-container">
          <div className="qb-explore-header">
            <motion.h2 {...fadeInUp}>Explore more features</motion.h2>
            <motion.p {...fadeInUp}>
              Discover additional tools and features that can streamline your
              property management workflow.
            </motion.p>
          </div>

          <div className="qb-explore-grid">
            <Link to="/features/accounting" className="qb-explore-card">
              <div className="qb-explore-icon blue">
                <Calculator size={24} />
              </div>
              <span>Accounting</span>
            </Link>

            <Link to="/features/leasing" className="qb-explore-card">
              <div className="qb-explore-icon teal">
                <Home size={24} />
              </div>
              <span>Leasing</span>
            </Link>

            <Link to="/features/resident-experience" className="qb-explore-card">
              <div className="qb-explore-icon purple">
                <FileText size={24} />
              </div>
              <span>Resident Experience</span>
            </Link>

            <Link to="/features/operations" className="qb-explore-card">
              <div className="qb-explore-icon pink">
                <MessageSquare size={24} />
              </div>
              <span>Operations</span>
            </Link>

            <Link to="/features/rent-collection" className="qb-explore-card">
              <div className="qb-explore-icon green">
                <DollarSign size={24} />
              </div>
              <span>Rent Collection</span>
            </Link>

            <Link to="/features/ai-assistant" className="qb-explore-card hot">
              <div className="qb-explore-icon orange">
                <Sparkles size={24} />
              </div>
              <span>AI Assistant</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuickBooksIntegration;