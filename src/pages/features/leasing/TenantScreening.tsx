import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDown,
  ChevronRight,
  Star,
  Zap,
  Shield,
  TrendingUp,
  Users,
  FileText,
  CreditCard,
  Settings,
  Smartphone,
  Calculator,
  Key,
  Clock,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/styles/TenantScreening.css';

const TenantScreening = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const whyCards = [
    {
      icon: Zap,
      title: 'Surprisingly simple',
      description: 'Run comprehensive tenant screenings in just a few clicks. No complex setup or training required.'
    },
    {
      icon: Shield,
      title: 'Secure & trusted',
      description: 'Bank-level encryption protects all sensitive applicant data. FCRA compliant screening reports.'
    },
    {
      icon: TrendingUp,
      title: 'Built for growth',
      description: 'Whether you manage 10 units or 10,000, our platform scales with your portfolio seamlessly.'
    }
  ];

  const features = [
    {
      title: 'Comprehensive credit reports',
      description: 'Get detailed credit history, payment patterns, and credit scores to make informed decisions about potential tenants.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop'
    },
    {
      title: 'Criminal background checks',
      description: 'Access nationwide criminal records, sex offender registries, and terrorist watch lists for complete peace of mind.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop'
    },
    {
      title: 'Eviction history reports',
      description: 'Review past eviction filings and judgments to identify potential red flags before signing a lease.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop'
    },
    {
      title: 'Income verification',
      description: 'Verify employment status and income levels to ensure applicants can afford the rent comfortably.',
      image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=600&h=400&fit=crop'
    }
  ];

  const stats = [
    { number: '88%', label: 'On-Time Payments' },
    { number: '23hrs', label: 'Time Saved Monthly' },
    { number: '96%', label: 'Increased Occupancy' },
    { number: '50%+', label: 'Requests Automated' }
  ];

  const faqs = [
    {
      question: 'What is included in a tenant screening report?',
      answer: 'Our comprehensive tenant screening includes credit reports, criminal background checks, eviction history, employment verification, and rental history verification. You get all the information you need to make informed leasing decisions.'
    },
    {
      question: 'How long does the screening process take?',
      answer: 'Most screening reports are available within minutes. Credit and criminal checks are typically instant, while employment and rental verification may take 24-48 hours depending on response times.'
    },
    {
      question: 'Is the screening process FCRA compliant?',
      answer: 'Yes, our screening process is fully compliant with the Fair Credit Reporting Act (FCRA). We provide all required disclosures and adverse action notices to ensure legal compliance.'
    },
    {
      question: 'Who pays for the tenant screening?',
      answer: 'You can choose to cover the screening costs yourself or pass them on to applicants. Many landlords have applicants pay the screening fee as part of the application process.'
    },
    {
      question: 'Can I screen tenants on mobile?',
      answer: 'Absolutely! Our mobile app allows you to request and review screening reports from anywhere. Get instant notifications when reports are ready.'
    },
    {
      question: 'What if an applicant disputes their report?',
      answer: 'Applicants have the right to dispute any inaccurate information. We provide a clear dispute process and work with credit bureaus to resolve any discrepancies quickly.'
    }
  ];

  const exploreFeatures = [
    { name: 'Accounting', icon: Calculator, path: '/features/bookkeeping' },
    { name: 'Leasing', icon: Key, path: '/features/leasing/advertise-listings' },
    { name: 'Resident Experience', icon: Users, path: '/features/tenant-management' },
    { name: 'Operations', icon: Settings, path: '/features/maintenance' },
    { name: 'Rent Collection', icon: CreditCard, path: '/features/rent-collection' },
    { name: 'Mobile App', icon: Smartphone, path: '/features/mobile-app' }
  ];

    function setIsAuthModalOpen(arg0: boolean): void {
        throw new Error('Function not implemented.');
    }

  return (
    <div className="tenant-screening-page">
      <Navbar />

      {/* Hero Section */}
      <section className="ts-hero">
        <div className="ts-hero-container">
          <div className="ts-hero-content">
            <div className="ts-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/features">Features</Link>
              <span>/</span>
              <span>Tenant Screening</span>
            </div>
            <h1 className="ts-hero-title">
              Screen tenants smarter & rent units faster
            </h1>
            <p className="ts-hero-subtitle">
              With everything you need to make informed decisions about your next tenants, DoorLoop makes finding good tenants as easy as managing your portfolio
            </p>
            <div className="ts-hero-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="ts-hero-input"
              />
              <button className="ts-hero-btn">See It In Action</button>
            </div>
            <div className="ts-hero-rating">
              <div className="ts-hero-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span>4.8/5 based on 2,000+ reviews</span>
            </div>
          </div>
          <div className="ts-hero-image">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
              alt="Property manager reviewing tenant applications"
            />
          </div>
        </div>
      </section>

      {/* Why Section */}
       {/* WHY HOUSESIGMA */}
<section className="list-why">
  <div className="list-container">
    <h2>
      Why HouseSigma
    </h2>

    <div className="list-why-grid">
      <div className="list-why-card">
        <div className="list-why-icon blue">
          <Zap size={28} />
        </div>
        <h3>Surprisingly simple</h3>
        <p>
          Run comprehensive tenant screenings in just a few clicks.
          No complex setup or training required.
        </p>
      </div>

      <div className="list-why-card">
        <div className="list-why-icon pink">
          <Shield size={28} />
        </div>
        <h3>Secure & trusted</h3>
        <p>
          Bank-level encryption protects all sensitive applicant data.
          FCRA compliant screening reports.
        </p>
      </div>

      <div className="list-why-card">
        <div className="list-why-icon teal">
          <TrendingUp size={28} />
        </div>
        <h3>Built for growth</h3>
        <p>
          Whether you manage 10 units or 10,000,
          our platform scales with your portfolio seamlessly.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Features Section */}
          {/* ORGANIZED FEATURES SECTION */}
<section className="list-features">
  <div className="list-container">

   <h2 className="ts-section-title">
  Every lead,<br />
  tenant, and owner organized together
</h2>

<p className="ts-section-subtitle">
  Your single source of truth for every prospect, tenant, and owner relationship.
</p>


    <div className="list-features-grid">
      {/* CARD 1 */}
      <div className="list-feature-card pink">
        <h3>Store contact information</h3>
        <p>
          Whether a prospect becomes a tenant or not, save every contact’s details
          so you’re always ready to follow up.
        </p>
        <div className="list-feature-img">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop"
            alt="Store contact information"
          />
        </div>
      </div>

      {/* CARD 2 */}
      <div className="list-feature-card blue">
        <h3>Track prospect progress</h3>
        <p>
          See where each lead is in the pipeline — everything from what’s been done
          to what’s next.
        </p>
        <div className="list-feature-img">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop"
            alt="Track prospect progress"
          />
        </div>
      </div>

      {/* CARD 3 */}
      <div className="list-feature-card purple">
        <h3>Build better relationships</h3>
        <p>
          Create tasks to follow up with prospects and keep your properties
          top of their minds.
        </p>
        <div className="list-feature-img">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&h=300&fit=crop"
            alt="Build relationships"
          />
        </div>
      </div>

      {/* CARD 4 */}
      <div className="list-feature-card teal">
        <h3>Get more tenants</h3>
        <p>
          Improve how you communicate with applicants and convert more leads
          into signed leases.
        </p>
        <div className="list-feature-img">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&h=300&fit=crop"
            alt="Get more tenants"
          />
        </div>
      </div>
    </div>

    {/* CTA */}
    <div className="list-cta-center">
      <button className="list-btn">
        See It In Action →
      </button>
    </div>

  </div>
</section>

      {/* Stats Section */}
       {/* STATS – AdvertiseListings UI */}
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
      {/* FAQ Section */}
      {/* FAQ – AdvertiseListings UI */}
<section className="list-faq">
  <div className="list-container">
    <h2>Your questions answered</h2>

    <div className="list-faq-grid">
      {faqs.map((faq, i) => (
        <div className="list-faq-item" key={i}>
          <div
            className="list-faq-question"
            onClick={() => toggleFaq(i)}
          >
            <h4>{faq.question}</h4>
            <span className={`faq-arrow ${openFaq === i ? "open" : ""}`}>⌃</span>
          </div>

          {openFaq === i && (
            <p className="list-faq-answer">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Explore Section */}
      {/* Explore more features */}
        {/* EXPLORE MORE FEATURES – AdvertiseListings UI */}
<section className="list-explore">
  <div className="list-container">
    <div className="list-explore-header">
      <h2>Explore more features</h2>
      <p>
        Discover additional tools and features that can streamline your property
        management workflow.
      </p>
    </div>

    <div className="list-explore-grid">
      <Link to="/features/bookkeeping" className="list-explore-card">
        <div className="list-explore-icon blue"><Calculator size={22} /></div>
        <span>Accounting</span>
      </Link>

      <Link to="/features/leasing/advertise-listings" className="list-explore-card">
        <div className="list-explore-icon teal"><Key size={22} /></div>
        <span>Leasing</span>
      </Link>

      <Link to="/features/tenant-management" className="list-explore-card">
        <div className="list-explore-icon purple"><Users size={22} /></div>
        <span>Resident Experience</span>
      </Link>

      <Link to="/features/maintenance" className="list-explore-card">
        <div className="list-explore-icon orange"><Settings size={22} /></div>
        <span>Operations</span>
      </Link>

      <Link to="/features/rent-collection" className="list-explore-card">
        <div className="list-explore-icon teal"><CreditCard size={22} /></div>
        <span>Rent Collection</span>
      </Link>

      <Link to="/features/ai-assistant" className="list-explore-card highlighted">
        <div className="list-explore-icon purple">✨</div>
        <span>AI Assistant</span>
      </Link>
    </div>
  </div>
</section>


      {/* Bottom CTA Section */}
       {/* FOOTER CTA – SAME AS ADVERTISE LISTINGS */}
<section className="list-footer-cta">
  <div className="list-container">
    <h3>Serious about property management?</h3>
    <p>
      Join thousands of property managers who trust HouseSigma for tenant screening.
    </p>

    <div className="footer-cta-form">
      <input
        type="email"
        placeholder="Your Email"
        className="footer-cta-input"
      />
      <button className="list-btn">
       Set in Action
      </button>
    </div>
  </div>
</section>


      <Footer />
    </div>
  );
};

export default TenantScreening;
