import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, BarChart3, PieChart, LineChart, ArrowRight, ChevronDown, 
  MapPin, Home, DollarSign, Calendar, Download, Filter, 
  FileText, Activity, Target, Briefcase, Users, Building2
} from 'lucide-react';
import '@/styles/Financialreports.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FinancialReports = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="financial-reports-page">
      <Navbar/>
      {/* Hero Section */}
      <section className="reports-hero">
        <div className="reports-container">
          <div className="reports-breadcrumb">
            <a href="/">Home</a>
            <span>|</span>
            <a href="/features">Features</a>
            <span>|</span>
            <span>Financial Reports</span>
          </div>
          
          <div className="reports-hero-content">
            <motion.div 
              className="reports-hero-text"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1>Turn market data into actionable insights</h1>
              <p>
                Access comprehensive real estate market reports, property valuation analytics, 
                and investment performance tracking across Canadian markets. Make informed 
                decisions with data-driven intelligence.
              </p>
              
              <div className="reports-email-form">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="reports-email-input"
                />
                <button className="reports-cta-btn">Get Started Free</button>
              </div>
              
              <div className="reports-rating">
                <span className="reports-rating-text">Trusted by 50,000+ Canadian real estate professionals</span>
                <div className="reports-stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <div className="reports-badge">
                  Comprehensive MLS Data Coverage
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="reports-hero-visual"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="reports-preview-card">
                <div className="reports-preview-header">
                  <h3>Market Analytics Dashboard</h3>
                  <span className="reports-preview-badge">Live Data</span>
                </div>
                <div className="reports-preview-stats">
                  <div className="preview-stat">
                    <TrendingUp size={24} className="stat-icon green" />
                    <div>
                      <span className="stat-label">Avg Price Growth</span>
                      <strong className="stat-value">+12.5%</strong>
                    </div>
                  </div>
                  <div className="preview-stat">
                    <Home size={24} className="stat-icon blue" />
                    <div>
                      <span className="stat-label">Active Listings</span>
                      <strong className="stat-value">15,234</strong>
                    </div>
                  </div>
                </div>
                <div className="reports-preview-chart">
                  <BarChart3 size={120} className="chart-placeholder" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why HomeNest Section */}
      <section className="reports-why">
        <div className="reports-container">
          <motion.h2 {...fadeInUp}>Why HomeNest Reports?</motion.h2>
          
          <div className="reports-why-grid">
            <motion.div 
              className="reports-why-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="reports-why-icon blue">
                <BarChart3 size={28} />
              </div>
              <h3>Real-time market intelligence</h3>
              <p>
                Access up-to-the-minute MLS data, price trends, and market analytics 
                across all major Canadian cities. Stay ahead with live updates.
              </p>
            </motion.div>
            
            <motion.div 
              className="reports-why-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="reports-why-icon teal">
                <Target size={28} />
              </div>
              <h3>Hyperlocal insights</h3>
              <p>
                Drill down to neighborhood-level data. Compare properties, analyze 
                school districts, and understand micro-market dynamics.
              </p>
            </motion.div>
            
            <motion.div 
              className="reports-why-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="reports-why-icon purple">
                <Download size={28} />
              </div>
              <h3>Export-ready reports</h3>
              <p>
                Generate professional PDF reports, Excel spreadsheets, and presentation-ready 
                charts for clients and stakeholders in seconds.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="reports-features">
        <div className="reports-container">
          <div className="reports-features-header">
            <motion.h2 {...fadeInUp}>Comprehensive market analysis tools</motion.h2>
            <motion.p {...fadeInUp}>
              Everything you need to analyze the Canadian real estate market, from macro trends to individual property valuations.
            </motion.p>
          </div>
          
          <div className="reports-features-grid">
            <motion.div 
              className="reports-feature-card blue-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="feature-icon-wrapper">
                <LineChart size={32} className="feature-main-icon blue" />
              </div>
              <h3>Price trend analysis</h3>
              <p>
                Track historical price movements, identify appreciation patterns, and forecast 
                future trends using advanced statistical models and MLS historical data.
              </p>
              <div className="reports-feature-image">
                <div className="feature-visual-demo">
                  <LineChart size={60} />
                  <span>Interactive Charts</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="reports-feature-card teal-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="feature-icon-wrapper">
                <MapPin size={32} className="feature-main-icon teal" />
              </div>
              <h3>Neighborhood comparisons</h3>
              <p>
                Compare multiple areas side-by-side. Analyze demographics, school ratings, 
                crime statistics, and market velocities to identify investment opportunities.
              </p>
              <div className="reports-feature-image">
                <div className="feature-visual-demo">
                  <MapPin size={60} />
                  <span>Geographic Analytics</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="reports-feature-card purple-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="feature-icon-wrapper">
                <PieChart size={32} className="feature-main-icon purple" />
              </div>
              <h3>Investment portfolio tracking</h3>
              <p>
                Monitor your property portfolio's performance, calculate ROI, track equity 
                growth, and generate investor reports with detailed financial breakdowns.
              </p>
              <div className="reports-feature-image">
                <div className="feature-visual-demo">
                  <PieChart size={60} />
                  <span>Portfolio Overview</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="reports-feature-card orange-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="feature-icon-wrapper">
                <Activity size={32} className="feature-main-icon orange" />
              </div>
              <h3>Market velocity metrics</h3>
              <p>
                Understand how quickly properties sell, average days on market, list-to-sale 
                price ratios, and seasonal patterns across different property types.
              </p>
              <div className="reports-feature-image">
                <div className="feature-visual-demo">
                  <Activity size={60} />
                  <span>Velocity Tracking</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="reports-cta-center">
            <button className="reports-cta-btn">
              Explore All Reports <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="reports-stats">
        <div className="reports-container">
          <div className="reports-stats-content">
            <motion.div 
              className="reports-stats-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>The HomeNest advantage</h2>
              <p>
                Empowering real estate professionals with the most comprehensive market 
                data and analytics platform in Canada. Make confident decisions backed 
                by real numbers.
              </p>
              <button className="reports-cta-btn">
                Start Free Trial <ArrowRight size={18} />
              </button>
            </motion.div>
            
            <motion.div 
              className="reports-stats-grid"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="reports-stat-card blue">
                <Building2 className="reports-stat-icon blue" size={32} />
                <span>Properties Tracked</span>
                <strong>2.5M+</strong>
              </div>
              
              <div className="reports-stat-card green">
                <TrendingUp className="reports-stat-icon green" size={32} />
                <span>Data Points Analyzed Daily</span>
                <strong>50M+</strong>
              </div>
              
              <div className="reports-stat-card purple">
                <Users className="reports-stat-icon purple" size={32} />
                <span>Active Users</span>
                <strong>50,000+</strong>
              </div>
              
              <div className="reports-stat-card orange">
                <Calendar className="reports-stat-icon orange" size={32} />
                <span>Years of Historical Data</span>
                <strong>15+ Years</strong>
              </div>
              
              <p className="reports-stats-note">
                Real-time data from MLS systems across Canada. Updated continuously.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="reports-testimonial">
        <div className="reports-container">
          <motion.h2 {...fadeInUp}>What professionals are saying</motion.h2>
          
          <motion.div 
            className="reports-testimonial-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="reports-testimonial-image">
              <div className="testimonial-avatar">
                <Briefcase size={40} />
              </div>
            </div>
            
            <div className="reports-testimonial-content">
              <div className="reports-quote-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <blockquote>
                HomeNest's reports have transformed how I analyze the market. I can generate 
                detailed neighborhood comparisons for my clients in minutes, showing them exactly 
                why a property is priced right. The hyperlocal data is unmatched.
              </blockquote>
              <p className="reports-testimonial-author">Jennifer Chen</p>
              <p className="reports-testimonial-role">Real Estate Broker, Toronto</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="reports-faq">
        <div className="reports-container">
          <motion.h2 {...fadeInUp}>Frequently asked questions</motion.h2>
          
          <div className="reports-faq-grid">
            <motion.div 
              className="reports-faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="reports-faq-question" onClick={() => toggleFaq(0)}>
                <h4>What types of reports are available?</h4>
                <ChevronDown size={20} className={`faq-arrow ${openFaq === 0 ? 'open' : ''}`} />
              </div>
              <AnimatePresence>
                {openFaq === 0 && (
                  <motion.p 
                    className="reports-faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    HomeNest offers over 40 different report types including market trend analysis, 
                    comparative market analysis (CMA), neighborhood statistics, price-per-square-foot 
                    reports, investment ROI calculators, days-on-market analysis, and custom portfolio 
                    performance reports.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
            
            <motion.div 
              className="reports-faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="reports-faq-question" onClick={() => toggleFaq(1)}>
                <h4>How current is the data?</h4>
                <ChevronDown size={20} className={`faq-arrow ${openFaq === 1 ? 'open' : ''}`} />
              </div>
              <AnimatePresence>
                {openFaq === 1 && (
                  <motion.p 
                    className="reports-faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Our data is updated in real-time from MLS systems across Canada. New listings, 
                    price changes, and sold data appear within minutes of being posted. Historical 
                    data goes back 15+ years for comprehensive trend analysis.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
            
            <motion.div 
              className="reports-faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="reports-faq-question" onClick={() => toggleFaq(2)}>
                <h4>Can I customize reports for my brand?</h4>
                <ChevronDown size={20} className={`faq-arrow ${openFaq === 2 ? 'open' : ''}`} />
              </div>
              <AnimatePresence>
                {openFaq === 2 && (
                  <motion.p 
                    className="reports-faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Yes! Professional and Enterprise plans include white-label reporting with your 
                    logo, brand colors, and custom messaging. You can also save report templates 
                    for consistent branding across all client communications.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
            
            <motion.div 
              className="reports-faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="reports-faq-question" onClick={() => toggleFaq(3)}>
                <h4>Which markets are covered?</h4>
                <ChevronDown size={20} className={`faq-arrow ${openFaq === 3 ? 'open' : ''}`} />
              </div>
              <AnimatePresence>
                {openFaq === 3 && (
                  <motion.p 
                    className="reports-faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    HomeNest covers all major Canadian markets including Toronto (GTA), Vancouver 
                    (Greater Vancouver), Calgary, Edmonton, Ottawa, Montreal, and many smaller cities. 
                    We integrate with provincial MLS systems for comprehensive coverage.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
            
            <motion.div 
              className="reports-faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <div className="reports-faq-question" onClick={() => toggleFaq(4)}>
                <h4>Can I export data to Excel or CSV?</h4>
                <ChevronDown size={20} className={`faq-arrow ${openFaq === 4 ? 'open' : ''}`} />
              </div>
              <AnimatePresence>
                {openFaq === 4 && (
                  <motion.p 
                    className="reports-faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Absolutely! All reports can be exported to PDF for client presentations, Excel/CSV 
                    for further analysis, or PowerPoint for adding to your own presentations. You can 
                    also schedule automated report delivery via email.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
            
            <motion.div 
              className="reports-faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <div className="reports-faq-question" onClick={() => toggleFaq(5)}>
                <h4>Is there a mobile app for viewing reports?</h4>
                <ChevronDown size={20} className={`faq-arrow ${openFaq === 5 ? 'open' : ''}`} />
              </div>
              <AnimatePresence>
                {openFaq === 5 && (
                  <motion.p 
                    className="reports-faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Yes! The HomeNestobile app (iOS and Android) gives you full access to all 
                    reports, real-time market data, and analytics on the go. Generate and share 
                    reports directly from your phone while showing properties.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Explore More Features */}
      <section className="reports-explore">
        <div className="reports-container">
          <div className="reports-explore-header">
            <motion.h2 {...fadeInUp}>Explore more features</motion.h2>
            <motion.p {...fadeInUp}>
              Discover additional tools that complement your market analysis workflow.
            </motion.p>
          </div>
          
          <div className="reports-explore-grid">
            <a href="/features/property-search" className="reports-explore-card">
              <div className="reports-explore-icon blue">
                <Home size={24} />
              </div>
              <span>Property Search</span>
            </a>
            
            <a href="/features/market-trends" className="reports-explore-card">
              <div className="reports-explore-icon teal">
                <TrendingUp size={24} />
              </div>
              <span>Market Trends</span>
            </a>
            
            <a href="/features/valuation-tools" className="reports-explore-card">
              <div className="reports-explore-icon purple">
                <DollarSign size={24} />
              </div>
              <span>Valuation Tools</span>
            </a>
            
            <a href="/features/neighborhood-insights" className="reports-explore-card">
              <div className="reports-explore-icon orange">
                <MapPin size={24} />
              </div>
              <span>Neighborhood Insights</span>
            </a>
            
            <a href="/features/saved-searches" className="reports-explore-card">
              <div className="reports-explore-icon green">
                <Filter size={24} />
              </div>
              <span>Saved Searches</span>
            </a>
            
            <a href="/features/alerts" className="reports-explore-card highlighted">
              <div className="reports-explore-icon pink">
                <FileText size={24} />
              </div>
              <span>Price Alerts</span>
            </a>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default FinancialReports;