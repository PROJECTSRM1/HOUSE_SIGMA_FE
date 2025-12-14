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
import AuthModals from "@/components/AuthModals";

const QuickBooksIntegration = () => {

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

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
    <div className="bank-sync-page">
      <Navbar />

      {/* HERO */}
      <section className="bank-sync-hero">
        <div className="bank-sync-container">
          <div className="bank-sync-breadcrumb">
            <Link to="/">Home</Link>
            <span>|</span>
            <Link to="/features">Features</Link>
            <span>|</span>
            <span>Accounting</span>
          </div>

          <div className="bank-sync-hero-content">
            <motion.div
              className="bank-sync-hero-text"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1>Bookkeeping your way with YourBrand + QuickBooks</h1>
              <p>
                Connect YourBrand with QuickBooks Online for financial
                visibility, weekly time savings, and the flexibility to make
                smarter decisions for your rental business.
              </p>

              <div className="bank-sync-email-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bank-sync-email-input"
                />
                <button
                  className="bank-sync-cta-btn"
                
                  >
                  See It In Action
                </button>
              </div>

              <div className="bank-sync-rating">
                <span className="bank-sync-rating-text">Rated 4.8+ out of 5</span>
                <div className="bank-sync-stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <div className="bank-sync-capterra">
                  Based on 700+ reviews on <strong>Capterra</strong>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bank-sync-hero-video"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bank-sync-video-placeholder">
                <h3>QuickBooks Sync</h3>
                <p>One-click sync with QuickBooks Online</p>

                <div className="bank-sync-play-btn" title="Play demo">
                  <Play size={28} fill="white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="bank-sync-why">
        <div className="bank-sync-container">
          <motion.h2 {...fadeInUp}>Why HomeNest</motion.h2>

          <div className="bank-sync-why-grid">
            <motion.div
              className="bank-sync-why-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <div className="bank-sync-why-icon blue">
                <Calculator size={28} />
              </div>
              <h3>Surprisingly simple</h3>
              <p>
                Enjoy a painless QuickBooks integration — few clicks to connect
                and automatic syncing thereafter.
              </p>
            </motion.div>

            <motion.div
              className="bank-sync-why-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 }}
            >
              <div className="bank-sync-why-icon pink">
                <FileText size={28} />
              </div>
              <h3>Secure & trusted</h3>
              <p>
                Bank-grade security and PCI standards ensure your financial
                data is protected across the sync.
              </p>
            </motion.div>

            <motion.div
              className="bank-sync-why-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.16 }}
            >
              <div className="bank-sync-why-icon teal">
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
      <section className="bank-sync-features">
        <div className="bank-sync-container">
          <div className="bank-sync-features-header">
            <motion.h2 {...fadeInUp}>
              The accounting integration property managers love
            </motion.h2>
            <motion.p {...fadeInUp}>
              Best-in-class property management with the accounting power of
              QuickBooks, easily synced.
            </motion.p>
          </div>

          <div className="bank-sync-features-grid">
            <motion.div
              className="bank-sync-feature-card pink-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <h3>One-click sync</h3>
              <p>
                Instantly connect bookkeeping data between YourBrand and
                QuickBooks Online — no spreadsheets, no double entry.
              </p>
              <div className="bank-sync-feature-image">
                [One-click sync mockup]
              </div>
            </motion.div>

            <motion.div
              className="bank-sync-feature-card blue-border"
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
              <div className="bank-sync-feature-image">
                [Tax & reports mockup]
              </div>
            </motion.div>

            <motion.div
              className="bank-sync-feature-card blue-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.16 }}
            >
              <h3>Faster data entry</h3>
              <p>
                Transactions, payments, and adjustments flow between QuickBooks
                and YourBrand automatically — less manual work.
              </p>
              <div className="bank-sync-feature-image">[Faster entry mockup]</div>
            </motion.div>

            <motion.div
              className="bank-sync-feature-card teal-border"
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
              <div className="bank-sync-feature-image">[Bank sync mockup]</div>
            </motion.div>
          </div>

          <div className="bank-sync-cta-center" style={{ marginTop: 24 }}>
            <button
              className="bank-sync-cta-btn"
           
            >
              See It In Action <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* EFFECT */}
      <section className="bank-sync-effect">
        <div className="bank-sync-container">
          <div className="bank-sync-effect-content">
            <motion.div
              className="bank-sync-effect-text"
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
              <button
                className="bank-sync-cta-btn"
            
              >
                See It In Action <ArrowRight size={18} />
              </button>
            </motion.div>

            <motion.div
              className="bank-sync-stats-grid"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.12 }}
            >
              <div className="bank-sync-stat-card blue">
                <CheckCircle className="bank-sync-stat-icon blue" size={32} />
                <span>On-Time Payments</span>
                <strong>88%</strong>
              </div>

              <div className="bank-sync-stat-card orange">
                <Clock className="bank-sync-stat-icon orange" size={32} />
                <span>Time Saved</span>
                <strong>23hrs/mo</strong>
              </div>

              <div className="bank-sync-stat-card green">
                <TrendingUp className="bank-sync-stat-icon green" size={32} />
                <span>Increased Occupancy</span>
                <strong>96%</strong>
              </div>

              <div className="bank-sync-stat-card purple">
                <Users className="bank-sync-stat-icon purple" size={32} />
                <span>Tenant Requests Automatically Handled</span>
                <strong>Over 50%</strong>
              </div>

              <p className="bank-sync-stats-note">
                Based on YourBrand user surveys. Results may vary.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bank-sync-testimonial">
        <div className="bank-sync-container">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            Hear from our customers
          </motion.h2>

          <motion.div
            className="bank-sync-testimonial-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.06 }}
          >
            <div className="bank-sync-testimonial-image">
              {/* replace with real thumbnail if available */}
              <div className="bank-sync-testimonial-play">
                <Play size={20} fill="white" />
              </div>
            </div>

            <div className="bank-sync-testimonial-content">
              <div className="bank-sync-quote-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <blockquote>
                I used QuickBooks with YourBrand and found syncing to be painless —
                the bookkeeping was simpler and the monthly close faster.
              </blockquote>
              <p className="bank-sync-testimonial-author">Harrison Furman</p>
              <p className="bank-sync-testimonial-role">
                Property Manager, Greenwave Capital
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bank-sync-faq">
        <div className="bank-sync-container">
          <motion.h2 {...fadeInUp}>Your questions answered</motion.h2>

          <div className="bank-sync-faq-grid">
            {/* FAQ item 0 */}
            <motion.div
              className="bank-sync-faq-item"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.36 }}
            >
              <div
                className="bank-sync-faq-question"
                onClick={() => toggleFaq(0)}
                role="button"
              >
                <h4>Is QuickBooks a property management software?</h4>
                <ChevronDown size={20} className={`faq-arrow ${openFaq === 0 ? "open" : ""}`} />
              </div>

              <AnimatePresence>
                {openFaq === 0 && (
                  <motion.p
                    className="bank-sync-faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.28 }}
                  >
                    QuickBooks handles accounting — but it's not built specifically for
                    property operations at scale. YourBrand fills the gaps and syncs to
                    QuickBooks to keep books accurate.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            {/* FAQ item 1 */}
            <motion.div
              className="bank-sync-faq-item"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.36, delay: 0.06 }}
            >
              <div
                className="bank-sync-faq-question"
                onClick={() => toggleFaq(1)}
                role="button"
              >
                <h4>What are the benefits of a QuickBooks integration?</h4>
                <ChevronDown size={20} className={`faq-arrow ${openFaq === 1 ? "open" : ""}`} />
              </div>

              <AnimatePresence>
                {openFaq === 1 && (
                  <motion.p
                    className="bank-sync-faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.28 }}
                  >
                    Syncing saves time, reduces errors, and gives accountants easy access
                    to exportable reports and reconciled transactions.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            {/* FAQ item 2 */}
            <motion.div
              className="bank-sync-faq-item"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.36, delay: 0.12 }}
            >
              <div
                className="bank-sync-faq-question"
                onClick={() => toggleFaq(2)}
                role="button"
              >
                <h4>Is it a one-way sync?</h4>
                <ChevronDown size={20} className={`faq-arrow ${openFaq === 2 ? "open" : ""}`} />
              </div>

              <AnimatePresence>
                {openFaq === 2 && (
                  <motion.p
                    className="bank-sync-faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.28 }}
                  >
                    Yes — the sync from YourBrand to QuickBooks is one-way per company,
                    ensuring a consistent accounting system in QuickBooks.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            {/* FAQ item 3 */}
            <motion.div
              className="bank-sync-faq-item"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.36, delay: 0.18 }}
            >
              <div
                className="bank-sync-faq-question"
                onClick={() => toggleFaq(3)}
                role="button"
              >
                <h4>How do you avoid duplicate data in QuickBooks?</h4>
                <ChevronDown size={20} className={`faq-arrow ${openFaq === 3 ? "open" : ""}`} />
              </div>

              <AnimatePresence>
                {openFaq === 3 && (
                  <motion.p
                    className="bank-sync-faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.28 }}
                  >
                    A start-date prevents the sync of historical data that already exists
                    in QuickBooks, avoiding duplicate entries.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            {/* FAQ item 4 */}
            <motion.div
              className="bank-sync-faq-item"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.36, delay: 0.24 }}
            >
              <div
                className="bank-sync-faq-question"
                onClick={() => toggleFaq(4)}
                role="button"
              >
                <h4>Which QuickBooks version does YourBrand sync with?</h4>
                <ChevronDown size={20} className={`faq-arrow ${openFaq === 4 ? "open" : ""}`} />
              </div>

              <AnimatePresence>
                {openFaq === 4 && (
                  <motion.p
                    className="bank-sync-faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.28 }}
                  >
                    YourBrand syncs with QuickBooks Online (QBO).
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            {/* FAQ item 5 */}
            <motion.div
              className="bank-sync-faq-item"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.36, delay: 0.30 }}
            >
              <div
                className="bank-sync-faq-question"
                onClick={() => toggleFaq(5)}
                role="button"
              >
                <h4>Do I need to map fields to QuickBooks?</h4>
                <ChevronDown size={20} className={`faq-arrow ${openFaq === 5 ? "open" : ""}`} />
              </div>

              <AnimatePresence>
                {openFaq === 5 && (
                  <motion.p
                    className="bank-sync-faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.28 }}
                  >
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
      <section className="bank-sync-explore">
        <div className="bank-sync-container">
          <div className="bank-sync-explore-header">
            <motion.h2 {...fadeInUp}>Explore more features</motion.h2>
            <motion.p {...fadeInUp}>
              Discover additional tools and features that can streamline your
              property management workflow.
            </motion.p>
          </div>

          <div className="bank-sync-explore-grid">
            <Link to="/features/accounting" className="bank-sync-explore-card">
              <div className="bank-sync-explore-icon blue">
                <Calculator size={24} />
              </div>
              <span>Accounting</span>
            </Link>

            <Link to="/features/leasing" className="bank-sync-explore-card">
              <div className="bank-sync-explore-icon teal">
                <Home size={24} />
              </div>
              <span>Leasing</span>
            </Link>

            <Link to="/features/resident-experience" className="bank-sync-explore-card">
              <div className="bank-sync-explore-icon purple">
                <FileText size={24} />
              </div>
              <span>Resident Experience</span>
            </Link>

            <Link to="/features/operations" className="bank-sync-explore-card">
              <div className="bank-sync-explore-icon pink">
                <MessageSquare size={24} />
              </div>
              <span>Operations</span>
            </Link>

            <Link to="/features/rent-collection" className="bank-sync-explore-card">
              <div className="bank-sync-explore-icon green">
                <DollarSign size={24} />
              </div>
              <span>Rent Collection</span>
            </Link>

            <Link to="/features/ai-assistant" className="bank-sync-explore-card highlighted">
              <div className="bank-sync-explore-icon orange">
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
