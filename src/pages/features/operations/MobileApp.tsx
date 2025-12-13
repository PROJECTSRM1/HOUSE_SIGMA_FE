import { useState } from "react";
import {
  ChevronDown,
  Mail,
  Star,
  Smartphone,
  Search,
  MapPin,
  Bell,
  TrendingUp,
  Heart,
  Camera,
  ArrowRight,
  Zap,
  Shield,
  BarChart3,
  Home,
  Filter,
  Download,
  MessageSquare,
  Eye,
  Clock,
  DollarSign,
  Navigation,
  Sparkles,
  Globe,
  CheckCircle,
} from "lucide-react";
import "@/styles/MobileApp.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MobileApp = () => {
  const [email, setEmail] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="mobile-page">
      <Navbar />

      {/* HERO */}
      <section className="mobile-hero">
        <div className="mobile-container">
          <div className="mobile-breadcrumb">
            <a href="#">Home</a>
            <span>/</span>
            <a href="#">Products</a>
            <span>/</span>
            <span className="current">Mobile App</span>
          </div>

          <div className="mobile-hero-grid">
            {/* LEFT */}
            <div>
              <div className="mobile-hero-badge">
                <Smartphone className="badge-icon" />
                Available on iOS & Android
              </div>

              <h1 className="mobile-hero-title">
                Your real estate journey, <span className="gradient">in your pocket</span>
              </h1>

              <p className="mobile-hero-text">
                Search properties, analyze market trends, and get instant alerts on new listings. The most powerful real estate app for buyers, sellers, and investors in Canada.
              </p>

              <div className="mobile-download-buttons">
                <button className="mobile-download-btn apple">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div>
                    <span className="download-label">Download on the</span>
                    <span className="download-store">App Store</span>
                  </div>
                </button>

                <button className="mobile-download-btn google">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a1.966 1.966 0 01-.068-2.617V4.43c-.004-.89.37-1.748 1.033-2.366l.034-.032.034-.032c.282-.249.632-.4 1.002-.45l-.034.032a1.89 1.89 0 01-.001 0zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1.954 1.954 0 010 3.426l-2.808 1.626-2.524-2.524 2.525-2.524zM3.609 1.814L14.546 8.147 12.244 10.45 3.609 1.814z"/>
                  </svg>
                  <div>
                    <span className="download-label">GET IT ON</span>
                    <span className="download-store">Google Play</span>
                  </div>
                </button>
              </div>

              <div className="mobile-rating">
                <div>
                  <div className="mobile-rating-stars">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="star" />
                    ))}
                  </div>
                  <p className="mobile-rating-text">
                    <span className="strong">4.8/5</span> from 185K+ users
                  </p>
                </div>
                <div className="mobile-rating-divider"></div>
                <div>
                  <p className="mobile-rating-number">2.5M+</p>
                  <p className="mobile-rating-sub">Downloads</p>
                </div>
              </div>
            </div>

            {/* RIGHT Phone Preview */}
            <div className="mobile-hero-phone">
              <div className="phone-frame">
                <div className="phone-notch"></div>
                <div className="phone-screen">
                  <div className="screen-header">
                    <div className="screen-location">
                      <MapPin />
                      <span>Toronto, ON</span>
                    </div>
                    <Bell />
                  </div>

                  <div className="screen-search">
                    <Search className="search-icon" />
                    <span>Search properties...</span>
                  </div>

                  <div className="screen-filters">
                    <span className="filter-chip active">For Sale</span>
                    <span className="filter-chip">For Rent</span>
                    <span className="filter-chip">Sold</span>
                  </div>

                  <div className="screen-card">
                    <div className="card-image">
                      <div className="card-badge">New</div>
                      <Heart className="card-heart" />
                    </div>
                    <div className="card-content">
                      <div className="card-price">$1,248,000</div>
                      <div className="card-address">123 King Street West</div>
                      <div className="card-details">3 bd • 2 ba • 1,850 sqft</div>
                      <div className="card-meta">
                        <Eye /> 324 views
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="mobile-why">
        <h2 className="mobile-section-title">Why HouseSigma Mobile App?</h2>

        <div className="mobile-why-grid">
          <div className="mobile-why-card">
            <div className="mobile-why-icon blue">
              <Zap />
            </div>
            <h3 className="mobile-why-title">Lightning Fast Search</h3>
            <p className="mobile-why-text">
              Find your dream home in seconds. Advanced filters, map view, and instant results powered by real-time MLS data.
            </p>
          </div>

          <div className="mobile-why-card">
            <div className="mobile-why-icon green">
              <Bell />
            </div>
            <h3 className="mobile-why-title">Smart Alerts</h3>
            <p className="mobile-why-text">
              Never miss an opportunity. Get instant notifications when new properties match your criteria or prices change.
            </p>
          </div>

          <div className="mobile-why-card">
            <div className="mobile-why-icon purple">
              <BarChart3 />
            </div>
            <h3 className="mobile-why-title">Market Analytics</h3>
            <p className="mobile-why-text">
              Make data-driven decisions with comprehensive market trends, price history, and neighborhood insights.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="mobile-features">
        <div className="mobile-features-header">
          <h2 className="mobile-section-title">Everything you need to find your home</h2>
          <p className="mobile-features-subtitle">
            Powerful tools and insights in a beautifully designed mobile experience
          </p>
        </div>

        <div className="mobile-features-grid">
          {/* PROPERTY SEARCH */}
          <div className="mobile-feature-card white">
            <div className="mobile-feature-header">
              <div className="mobile-feature-icon blue">
                <Search />
              </div>
              <div>
                <h3 className="mobile-feature-title">Advanced Property Search</h3>
                <p className="mobile-feature-sub">Find exactly what you're looking for</p>
              </div>
            </div>

            <p className="mobile-feature-text">
              Search by location, price, bedrooms, bathrooms, and dozens of other filters. Save your searches and get notified when new properties match.
            </p>

            <div className="mobile-feature-preview">
              <h4 className="preview-title">Search Filters</h4>
              <div className="feature-tags">
                <span className="feature-tag"><Filter /> Price Range</span>
                <span className="feature-tag"><Home /> Property Type</span>
                <span className="feature-tag"><MapPin /> Location</span>
                <span className="feature-tag"><DollarSign /> Price/sqft</span>
                <span className="feature-tag"><Clock /> Days on Market</span>
                <span className="feature-tag"><Navigation /> Walk Score</span>
              </div>
            </div>
          </div>

          {/* MARKET INSIGHTS */}
          <div className="mobile-feature-card green">
            <div className="mobile-feature-header">
              <div className="mobile-feature-icon green">
                <TrendingUp />
              </div>
              <div>
                <h3 className="mobile-feature-title">Real-Time Market Data</h3>
                <p className="mobile-feature-sub">Stay ahead of market trends</p>
              </div>
            </div>

            <p className="mobile-feature-text">
              Access comprehensive market statistics, price trends, and neighborhood analytics. See sold prices, days on market, and competition levels.
            </p>

            <div className="mobile-feature-preview muted">
              <h4 className="preview-title">Market Overview</h4>
              <div className="market-stats">
                <div className="market-stat">
                  <span className="stat-label">Avg. Price</span>
                  <span className="stat-value green">$1.2M</span>
                  <span className="stat-change positive">↑ 5.2%</span>
                </div>
                <div className="market-stat">
                  <span className="stat-label">Days on Market</span>
                  <span className="stat-value blue">18</span>
                  <span className="stat-change neutral">→ 0%</span>
                </div>
                <div className="market-stat">
                  <span className="stat-label">Inventory</span>
                  <span className="stat-value purple">2,847</span>
                  <span className="stat-change negative">↓ 3.1%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NEXT FEATURE ROW */}
        <div className="mobile-features-grid">
          {/* MAP VIEW */}
          <div className="mobile-feature-card purple">
            <div className="mobile-feature-header">
              <div className="mobile-feature-icon purple">
                <MapPin />
              </div>
              <div>
                <h3 className="mobile-feature-title">Interactive Map View</h3>
                <p className="mobile-feature-sub">Explore neighborhoods visually</p>
              </div>
            </div>

            <p className="mobile-feature-text">
              Browse properties on an interactive map. See schools, transit, amenities, and crime statistics. Draw custom search boundaries.
            </p>

            <div className="mobile-feature-preview muted">
              <div className="map-features">
                {[
                  { icon: <Home />, label: "Property Markers", color: "blue" },
                  { icon: <Globe />, label: "Neighborhood Data", color: "green" },
                  { icon: <Navigation />, label: "Transit Routes", color: "purple" },
                  { icon: <Sparkles />, label: "Points of Interest", color: "orange" },
                ].map((item, i) => (
                  <div key={i} className="map-feature-item">
                    <div className={`map-icon ${item.color}`}>
                      {item.icon}
                    </div>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SAVED & ALERTS */}
          <div className="mobile-feature-card blue">
            <div className="mobile-feature-header">
              <div className="mobile-feature-icon blue">
                <Heart />
              </div>
              <div>
                <h3 className="mobile-feature-title">Favorites & Alerts</h3>
                <p className="mobile-feature-sub">Track properties you love</p>
              </div>
            </div>

            <p className="mobile-feature-text">
              Save favorite properties, create custom alerts, and get notified about price changes, open houses, and new listings instantly.
            </p>

            <div className="mobile-feature-preview muted">
              <div className="alert-list">
                {[
                  { type: "New Listing", desc: "3 new properties in Downtown Toronto", time: "5m ago", color: "green" },
                  { type: "Price Drop", desc: "123 King St W reduced by $50K", time: "2h ago", color: "blue" },
                  { type: "Open House", desc: "456 Queen St E - This Saturday", time: "1d ago", color: "purple" },
                ].map((alert, i) => (
                  <div key={i} className="alert-item">
                    <div className={`alert-dot ${alert.color}`}></div>
                    <div className="alert-content">
                      <p className="alert-type">{alert.type}</p>
                      <p className="alert-desc">{alert.desc}</p>
                      <p className="alert-time">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-center">
          <button className="mobile-btn-primary">
            Download Now <Download />
          </button>
        </div>
      </section>

      {/* STATS */}
      <section className="mobile-stats">
        <div className="mobile-stats-grid">
          <div>
            <h2 className="mobile-section-title">Trusted by home buyers across Canada</h2>
            <p className="mobile-stats-text">
              Join millions of Canadians using HouseSigma to find their perfect home and make smarter real estate decisions.
            </p>
            <button className="mobile-btn-primary sm">
              Get Started <ArrowRight />
            </button>
          </div>

          <div className="mobile-stats-cards">
            <div className="mobile-stat-card blue">
              <Download className="stat-icon blue" />
              <p className="stat-label">Total Downloads</p>
              <p className="stat-value">2.5M+</p>
              <p className="stat-note">and growing</p>
            </div>

            <div className="mobile-stat-card green">
              <Home className="stat-icon green" />
              <p className="stat-label">Active Listings</p>
              <p className="stat-value">485K+</p>
              <p className="stat-note">updated daily</p>
            </div>

            <div className="mobile-stat-card purple">
              <Star className="stat-icon purple" />
              <p className="stat-label">App Rating</p>
              <p className="stat-value">4.8/5</p>
              <p className="stat-note">from 185K reviews</p>
            </div>

            <div className="mobile-stat-card orange">
              <Eye className="stat-icon orange" />
              <p className="stat-label">Daily Active Users</p>
              <p className="stat-value">650K+</p>
              <p className="stat-note">searching daily</p>
            </div>
          </div>
        </div>
        <p className="mobile-stats-note">Based on App Store and Google Play data as of December 2024</p>
      </section>

      {/* HOW IT WORKS */}
      <section className="mobile-how">
        <h2 className="mobile-section-title">How it works</h2>
        <p className="mobile-how-subtitle">Start your home search in 3 easy steps</p>

        <div className="mobile-how-grid">
          <div className="mobile-how-card">
            <div className="mobile-how-number">1</div>
            <div className="mobile-how-icon green">
              <Download />
            </div>
            <h3 className="mobile-how-title">Download the App</h3>
            <p className="mobile-how-text">
              Available free on iOS and Android. No credit card required. Create your account in seconds and start exploring.
            </p>
          </div>

          <div className="mobile-how-card">
            <div className="mobile-how-number">2</div>
            <div className="mobile-how-icon blue">
              <Search />
            </div>
            <h3 className="mobile-how-title">Set Your Preferences</h3>
            <p className="mobile-how-text">
              Tell us what you're looking for. Location, budget, property type, and features. Save searches and enable smart alerts.
            </p>
          </div>

          <div className="mobile-how-card">
            <div className="mobile-how-number">3</div>
            <div className="mobile-how-icon purple">
              <Home />
            </div>
            <h3 className="mobile-how-title">Find Your Home</h3>
            <p className="mobile-how-text">
              Browse properties, analyze market data, schedule viewings, and connect with agents. Everything you need in one app.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mobile-faq">
        <h2 className="mobile-section-title center">Frequently asked questions</h2>

        <div className="mobile-faq-grid">
          {[
            {
              q: "Is the HouseSigma app free to use?",
              a: "Yes! The app is completely free to download and use. You get full access to all property listings, market data, and features without any subscription or hidden fees.",
            },
            {
              q: "How often is property data updated?",
              a: "Our data is updated in real-time from MLS feeds across Canada. New listings typically appear within minutes, and price changes, status updates, and sold information are reflected immediately.",
            },
            {
              q: "Can I save properties and searches?",
              a: "Absolutely! Save unlimited properties to your favorites, create custom searches with specific criteria, and set up alerts to get notified when new properties match your preferences.",
            },
            {
              q: "Does the app work across Canada?",
              a: "Yes! HouseSigma covers all major Canadian cities and regions including Toronto, Vancouver, Calgary, Ottawa, Montreal, and many more markets across the country.",
            },
            {
              q: "Can I access sold property data?",
              a: "Yes! View comprehensive sold data including sale prices, days on market, price history, and market trends. This helps you make informed decisions about property values.",
            },
            {
              q: "How do I contact agents through the app?",
              a: "Each property listing includes agent contact information. You can message agents directly through the app, request showings, or ask questions about specific properties.",
            },
          ].map((faq, index) => (
            <div key={index} className="mobile-faq-item">
              <button className="mobile-faq-question" onClick={() => toggleFaq(index)}>
                <span className="mobile-faq-question-text">{faq.q}</span>
                <ChevronDown className={`mobile-faq-arrow ${openFaq === index ? "open" : ""}`} />
              </button>
              {openFaq === index && <div className="mobile-faq-answer">{faq.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mobile-cta">
        <div className="mobile-cta-content">
          <Smartphone className="cta-phone-icon" />
          <h2 className="mobile-cta-title">Ready to find your dream home?</h2>
          <p className="mobile-cta-text">
            Download the HouseSigma app today and join 2.5M+ users searching smarter.
          </p>

          <div className="mobile-download-buttons">
            <button className="mobile-download-btn apple">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <div>
                <span className="download-label">Download on the</span>
                <span className="download-store">App Store</span>
              </div>
            </button>

            <button className="mobile-download-btn google">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a1.966 1.966 0 01-.068-2.617V4.43c-.004-.89.37-1.748 1.033-2.366l.034-.032.034-.032c.282-.249.632-.4 1.002-.45l-.034.032a1.89 1.89 0 01-.001 0zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1.954 1.954 0 010 3.426l-2.808 1.626-2.524-2.524 2.525-2.524zM3.609 1.814L14.546 8.147 12.244 10.45 3.609 1.814z"/>
              </svg>
              <div>
                <span className="download-label">GET IT ON</span>
                <span className="download-store">Google Play</span>
              </div>
            </button>
          </div>

          <p className="mobile-cta-note">Available on iOS 13+ and Android 8+</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MobileApp;
