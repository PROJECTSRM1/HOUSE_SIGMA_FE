import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, Shield, Zap, Play, ArrowRight, ChevronDown, 
  Clock, TrendingUp, Users, CheckCircle, Calculator, 
  Home, FileText, MessageSquare, DollarSign, Sparkles,
  Landmark, CreditCard, Receipt, CheckSquare
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/styles/BankSync.css';
import AuthModals from '@/components/AuthModals';

const BankSync = () => {
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
    <div className="bank-sync-page">
      <Navbar />
      {/* Hero Section */}
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
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1>Securely connect your bank accounts</h1>
              <p>
                Keep your ledgers up-to-date by connecting your accounts, 
                matching transactions automatically, and closing your books 
                hassle-free.
              </p>
              
              <div className="bank-sync-email-form">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bank-sync-email-input"
                />
                <button className="bank-sync-cta-btn">See It In Action</button>
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
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bank-sync-video-placeholder">
                <h3>Bank Sync</h3>
                <p>With HouseSigma</p>
                <div className="bank-sync-play-btn">
                  <Play size={28} fill="white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why HouseSigma Section */}
      <section className="bank-sync-why">
        <div className="bank-sync-container">
          <motion.h2 {...fadeInUp}>Why HouseSigma?</motion.h2>
          
          <div className="bank-sync-why-grid">
            <motion.div 
              className="bank-sync-why-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bank-sync-why-icon blue">
                <Building2 size={28} />
              </div>
              <h3>Surprisingly simple</h3>
              <p>
                Connect your accounts with a few clicks. HouseSigma does the rest—matching, 
                categorizing, and reconciling automatically.
              </p>
            </motion.div>
            
            <motion.div 
              className="bank-sync-why-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bank-sync-why-icon pink">
                <Shield size={28} />
              </div>
              <h3>Secure & trusted</h3>
              <p>
                Built on bank-grade security. PCI-compliant, encrypted, and verified 
                so you can manage with confidence.
              </p>
            </motion.div>
            
            <motion.div 
              className="bank-sync-why-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bank-sync-why-icon teal">
                <Zap size={28} />
              </div>
              <h3>Built for growth</h3>
              <p>
                Sync every account as you grow and add properties—we'll keep up.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="bank-sync-features">
        <div className="bank-sync-container">
          <div className="bank-sync-features-header">
            <motion.h2 {...fadeInUp}>Every property's accounts always in sync</motion.h2>
            <motion.p {...fadeInUp}>
              The secure bridge between your bank and your books, ensuring every dollar is counted.
            </motion.p>
          </div>
          
          <div className="bank-sync-features-grid">
            <motion.div 
              className="bank-sync-feature-card blue-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3>Connect any bank account</h3>
              <p>
                Pull, categorize, and reconcile your transactions in seconds by 
                connecting your bank account or credit card to HouseSigma through Plaid.
              </p>
              <div className="bank-sync-feature-image">
                <Landmark size={64} className="feature-icon blue" />
              </div>
            </motion.div>
            
            <motion.div 
              className="bank-sync-feature-card pink-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3>Auto-match transactions</h3>
              <p>
                Stop guessing. HouseSigma automatically matches payments and deposits 
                in real-time, keeping your books accurate without manual work.
              </p>
              <div className="bank-sync-feature-image">
                <CheckSquare size={64} className="feature-icon pink" />
              </div>
            </motion.div>
            
            <motion.div 
              className="bank-sync-feature-card teal-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3>Smart categorization</h3>
              <p>
                Make reports easier than ever by automatically sorting all transactions 
                into their correct categories.
              </p>
              <div className="bank-sync-feature-image">
                <Receipt size={64} className="feature-icon teal" />
              </div>
            </motion.div>
            
            <motion.div 
              className="bank-sync-feature-card blue-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3>Cut errors and close faster</h3>
              <p>
                Reconcile transactions automatically and get a clear view of 
                every dollar with fewer mistakes and typos.
              </p>
              <div className="bank-sync-feature-image">
                <CreditCard size={64} className="feature-icon blue" />
              </div>
            </motion.div>
          </div>
          
          <div className="bank-sync-cta-center">
            <button className="bank-sync-cta-btn">
              See It In Action <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Effect Section */}
      <section className="bank-sync-effect">
        <div className="bank-sync-container">
          <div className="bank-sync-effect-content">
            <motion.div 
              className="bank-sync-effect-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>The HouseSigma effect</h2>
              <p>
                Delivering the features you need with the results you've been waiting for. 
                Now that's smarter property management.
              </p>
              <button className="bank-sync-cta-btn bank-sync-effect-btn">
                See It In Action <ArrowRight size={18} />
              </button>
            </motion.div>
            
            <motion.div 
              className="bank-sync-stats-grid"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
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
                Based on HouseSigma user surveys. Results may vary.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bank-sync-testimonial">
        <div className="bank-sync-container">
          <motion.h2 {...fadeInUp}>Hear from our customers</motion.h2>
          
          <motion.div 
            className="bank-sync-testimonial-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bank-sync-testimonial-image">
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
                I have a minimal amount of work to do uploading rent. 
                Payments are done automatically. My accounts get 
                reconciled, and, at the end of the month, my reporting is 
                fairly simple.
              </blockquote>
              <p className="bank-sync-testimonial-author">Manny Meneses</p>
              <p className="bank-sync-testimonial-role">Realtor, Park Regency Realty</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bank-sync-faq">
        <div className="bank-sync-container">
          <motion.h2 {...fadeInUp}>Your questions answered</motion.h2>
          
          <div className="bank-sync-faq-grid">
            <motion.div 
              className="bank-sync-faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="bank-sync-faq-question" onClick={() => toggleFaq(0)}>
                <h4>What is bank sync?</h4>
                <ChevronDown size={20} className={`faq-arrow ${openFaq === 0 ? 'open' : ''}`} />
              </div>
              <AnimatePresence>
                {openFaq === 0 && (
                  <motion.p 
                    className="bank-sync-faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Powered by Plaid, bank sync allows you to integrate your bank account, 
                    credit card, or debit card with HouseSigma so that you can easily categorize 
                    and reconcile transactions for your properties.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
            
            <motion.div 
              className="bank-sync-faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="bank-sync-faq-question" onClick={() => toggleFaq(1)}>
                <h4>What are the benefits of Bank Sync?</h4>
                <ChevronDown size={20} className={`faq-arrow ${openFaq === 1 ? 'open' : ''}`} />
              </div>
              <AnimatePresence>
                {openFaq === 1 && (
                  <motion.p 
                    className="bank-sync-faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Make keeping up with your income and expenses easier than ever by 
                    automatically pulling, categorizing, and reconciling all of your transactions 
                    within seconds.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
            
            <motion.div 
              className="bank-sync-faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="bank-sync-faq-question" onClick={() => toggleFaq(2)}>
                <h4>Is every bank supported by Plaid?</h4>
                <ChevronDown size={20} className={`faq-arrow ${openFaq === 2 ? 'open' : ''}`} />
              </div>
              <AnimatePresence>
                {openFaq === 2 && (
                  <motion.p 
                    className="bank-sync-faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Plaid supports most major banks like Chase, Wells Fargo, and Bank of 
                    America, as well as many smaller banks and credit unions.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
            
            <motion.div 
              className="bank-sync-faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="bank-sync-faq-question" onClick={() => toggleFaq(3)}>
                <h4>What if I make a mistake?</h4>
                <ChevronDown size={20} className={`faq-arrow ${openFaq === 3 ? 'open' : ''}`} />
              </div>
              <AnimatePresence>
                {openFaq === 3 && (
                  <motion.p 
                    className="bank-sync-faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    You can always undo transactions you've reviewed by visiting the 
                    "Categorized" page, then clicking "Undo" on the transaction you want to 
                    edit.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
            
            <motion.div 
              className="bank-sync-faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <div className="bank-sync-faq-question" onClick={() => toggleFaq(4)}>
                <h4>What if there's a transaction I don't want to keep in HouseSigma?</h4>
                <ChevronDown size={20} className={`faq-arrow ${openFaq === 4 ? 'open' : ''}`} />
              </div>
              <AnimatePresence>
                {openFaq === 4 && (
                  <motion.p 
                    className="bank-sync-faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Each transaction that syncs over from your bank to HouseSigma has an 
                    "Exclude" option. Simply click this option next to the transaction you want 
                    to remove, and it will be excluded.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
            
            <motion.div 
              className="bank-sync-faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <div className="bank-sync-faq-question" onClick={() => toggleFaq(5)}>
                <h4>How do I transfer transactions from my bank to HouseSigma?</h4>
                <ChevronDown size={20} className={`faq-arrow ${openFaq === 5 ? 'open' : ''}`} />
              </div>
              <AnimatePresence>
                {openFaq === 5 && (
                  <motion.p 
                    className="bank-sync-faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Once your bank account is synced to HouseSigma, any new transactions from 
                    your bank account will be automatically available to be reviewed in 
                    HouseSigma. This process makes the process easy for you by ensuring 
                    accurate categorization and automating much of a previously manual task.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Explore More Features */}
      <section className="bank-sync-explore">
        <div className="bank-sync-container">
          <div className="bank-sync-explore-header">
            <motion.h2 {...fadeInUp}>Explore more features</motion.h2>
            <motion.p {...fadeInUp}>
              Discover additional tools and features that can streamline your property 
              management workflow.
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

export default BankSync;