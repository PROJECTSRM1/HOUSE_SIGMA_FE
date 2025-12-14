import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Star,
  Zap,
  Shield,
  TrendingUp,
  ChevronRight,
  Calculator,
  Users,
  Settings,
  CreditCard,
  Key,
  CheckCircle,
  ArrowRight,
  Clock
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/Crm.css";

const Crm = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
   
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const crmFeatureCards = [
  {
    title: "Store contact information",
    text: "Whether a prospect becomes a tenant or not, save every contact’s details so you’re always ready to follow up.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&fit=crop",
    color: "pink",
  },
  {
    title: "Track prospect progress",
    text: "See where each lead is in the pipeline — everything from what’s been done to what’s next.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&fit=crop",
    color: "blue",
  },
  {
    title: "Build better relationships",
    text: "Create tasks and reminders to follow up with prospects and keep your properties top of mind.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&fit=crop",
    color: "purple",
  },
  {
    title: "Get more tenants",
    text: "Convert more leads into signed leases with better communication and organized follow-ups.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&fit=crop",
    color: "green",
  },
];

const faqData = [
  {
    q: "What is a property management CRM software?",
    a: "A property management CRM helps you track prospects, tenants, owners, and vendors in one place, keeping all communication and follow-ups organized."
  },
  {
    q: "Why use a property management CRM software?",
    a: "Never lose track of a great prospective tenant again. Track leads from first contact to lease signing and convert more prospects."
  },
  {
    q: "Does a past prospect’s information storage ever expire?",
    a: "You can store past prospects' information for as long as you want. You can also delete it anytime."
  },
  {
    q: "Do I have to pay more for CRM functionality?",
    a: "No. All plans include CRM functionality so you can track prospects and grow your business."
  },
  {
    q: "What if I already use a different CRM?",
    a: "You can either continue using that other software alongside DoorLoop, or migrate everything over to DoorLoop. Either way, our team will be more than happy to walk you through both options."
  },
  {
    q: "Do I have to pay for tenant applications and screening?",
    a: "Not at all. You can charge your tenants an application fee to cover all background check costs (a total of $39.99) right from DoorLoop. You can even choose to upcharge and make a profit if you want (but check your local and state laws about this first)."
  }
];



    function setIsAuthModalOpen(arg0: boolean): void {
        throw new Error("Function not implemented.");
    }

  return (
    <div className="tenant-screening-page">
      <Navbar />

      {/* HERO (CRM ONLY IMAGE DIFFERENT) */}
      <section className="ts-hero">
        <div className="ts-hero-container">
          <div>
            <div className="ts-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/features">Features</Link>
              <span>/</span>
              <span>CRM</span>
            </div>

            <h1 className="ts-hero-title">
              A CRM that moves tenant prospects forward
            </h1>

            <p className="ts-hero-subtitle">
              Always have the clarity and organization you need to nurture
              relationships that grow your business.
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
              <span>4.8/5 based on 700+ reviews</span>
            </div>
          </div>

          <div className="ts-hero-image">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
              alt="CRM dashboard"
            />
          </div>
        </div>
      </section>

      {/* WHY (SAME UI AS TENANT SCREENING) */}
       <section className="es-why">
  <div className="es-container">

    {/* TITLE – SAME STYLE AS "Why DoorLoop?" */}
    <h2 className="es-section-title center">
      Why HomeNest?
    </h2>

    <div className="es-why-grid">
      {/* CARD 1 */}
      <div className="es-why-card">
        <div className="es-why-icon blue">
          <Zap size={28} />
        </div>
        <h3>Surprisingly simple</h3>
        <p>
           From first contact to lease signed, it’s a clear, fast process. No manual tracking or added CRMs.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="es-why-card">
        <div className="es-why-icon pink">
          <Shield size={28} />
        </div>
        <h3>Secure & trusted</h3>
        <p>
          Store all prospect data in one secure, centralized place—fully permissioned, always accessibl
        </p>
      </div>

      {/* CARD 3 */}
      <div className="es-why-card">
        <div className="es-why-icon green">
          <TrendingUp size={28} />
        </div>
        <h3>Built for growth</h3>
        <p>
          Scale your portfolio without losing track
          of prospects.
        </p>
      </div>
    </div>

  </div>
</section>



      {/* ORGANIZED SECTION (SAME GRID AS TENANT SCREENING) */}
      <section className="es-features">
  <div className="es-container">

    {/* SECTION HEADER */}
    <h2 className="es-section-title">
      Every lead, tenant, and owner organized together
    </h2>
    <p className="es-section-subtitle">
      Your single source of truth for every prospect, tenant, and owner relationship.
    </p>

    {/* FEATURES GRID */}
    <div className="es-features-grid">
      {crmFeatureCards.map((card, i) => (
        <div className={`es-feature-card ${card.color}`} key={i}>
          <div className="es-feature-content">
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>

          <div className="es-feature-image">
            <img src={card.image} alt={card.title} />
          </div>
        </div>
      ))}
    </div>

    {/* ✅ CTA BUTTON (THIS WAS MISSING) */}
     <div className="es-features-cta">
  <button className="list-btn">
    See It In Action
    <span className="list-btn-arrow">→</span>
  </button>
</div>


  </div>
</section>


      {/* STATS (SAME UI) */}
       {/* CRM STATS SECTION – SAME UI AS ADVERTISE LISTINGS */}
     <section className="list-stats-section">
        <div className="list-container">
          <div className="list-stats-content">
            <div className="list-stats-text">
              <h2>The HomeNest effect</h2>
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

      {/* FAQ (SAME UI) */}
      
<section className="list-faq">
  <div className="list-container">
    <h2 className="list-section-title">Your questions answered</h2>

    <div className="list-faq-grid">
      {faqData.map((faq, i) => (
        <div className="list-faq-item" key={i}>
          <div
            className="list-faq-question"
            onClick={() => toggleFaq(i)}
          >
            <h4>{faq.q}</h4>
            <span className={`faq-arrow ${openFaq === i ? "open" : ""}`}>
              ⌃
            </span>
          </div>

          {openFaq === i && (
            <p className="list-faq-answer">{faq.a}</p>
          )}
        </div>
      ))}
    </div>
  </div>
</section>


      {/* EXPLORE (SAME UI) */}
   
     {/* EXPLORE MORE FEATURES */}
<section className="crm-explore">
  <div className="crm-container">
    <h2 className="crm-explore-title">Explore more features</h2>
    <p className="crm-explore-subtitle">
      Discover additional tools and features that can streamline your property
      management workflow.
    </p>

    <div className="crm-explore-grid">
      <Link to="/features/accounting" className="crm-explore-card">
        <div className="crm-explore-icon blue">
          <Calculator size={22} />
        </div>
        <span>Accounting</span>
      </Link>

      <Link to="/features/leasing/advertise-listings" className="crm-explore-card">
        <div className="crm-explore-icon teal">
          <Key size={22} />
        </div>
        <span>Leasing</span>
      </Link>

      <Link to="/features/tenant-management" className="crm-explore-card">
        <div className="crm-explore-icon purple">
          <Users size={22} />
        </div>
        <span>Resident Experience</span>
      </Link>

      <Link to="/features/maintenance" className="crm-explore-card">
        <div className="crm-explore-icon orange">
          <Settings size={22} />
        </div>
        <span>Operations</span>
      </Link>

      <Link to="/features/rent-collection" className="crm-explore-card">
        <div className="crm-explore-icon blue">
          <CreditCard size={22} />
        </div>
        <span>Rent Collection</span>
      </Link>

      <Link to="/features/ai-assistant" className="crm-explore-card highlight">
        <div className="crm-explore-icon gradient">
          ✨
        </div>
        <span>AI Assistant</span>
      </Link>
    </div>
  </div>
</section>


      {/* FOOTER CTA (SAME UI) */}
         {/* FOOTER CTA */}
      <section className="es-footer-cta">
        <h2>Serious about property management?</h2>
        <p>Save more time. Manage more units. Unlock more growth.</p>
        <div className="es-footer-form">
          <input type="email" placeholder="Your Email" />
          <button>See It In Action</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Crm;
