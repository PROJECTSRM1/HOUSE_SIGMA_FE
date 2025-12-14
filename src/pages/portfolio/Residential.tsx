// File: ResidentialPage.tsx
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./Residential.css";
import img1 from '../../assets/hero-residential.jpg';
import img2 from  "../../assets/digital.png";
import img3 from '../../assets/lease1.png';
import img4 from '../../assets/smart.png';
import img5 from '../../assets/ai2.png';
import img6 from '../../assets/hero-residential.jpg';
import img7 from '../../assets/feature-listings.jpg';
import img8 from '../../assets/feature-ai.jpg';
import img9 from '../../assets/digital.png';
import img17 from '../../assets/digital1.jpg';
import img10 from '../../assets/feature-analytics.jpg';
import img11 from '../../assets/feature-communication.jpg';
import img12 from '../../assets/img13.jpg';
import list from '../../assets/listing1.png';
import tent from '../../assets/tent.png';
import aipowd from '../../assets/aipowered.png';
import analystics from '../../assets/analystics.png';
import after from '../../assets/after.png';
import tentmessage from '../../assets/tentmessaging.png';
import real from '../../assets/real.jpeg';
import img13 from '../../assets/portal.png';
import make from '../../assets/make.webp';
const ResidentialPage: React.FC = () => {
  // ---------------------- POPUP FEATURE LOGIC ----------------------
  const [activeFeature, setActiveFeature] = useState<any>(null);

  const FEATURES = [
  {
    id: 0,
    title: "Smart Listings & Market Visibility",

    cardText:
      "Publish listings and track market performance instantly.",

    popupText:
      "Get real-time visibility into pricing trends, local demand, tenant interest, and property performance. Compare neighborhoods, study price history, and optimize using intelligent analytics.",

    cardImg: img4,
    popupImg: list
  },

  {
    id: 1,
    title: "Digital Lease & Workflow Automation",

    cardText:
      "Create leases, renewals, and approvals effortlessly.",

    popupText:
      "Automate every stage of leasing—from digital templates to e-signatures and renewal workflows. Reduce errors and save time with centralized automation. Streamline approvals, document generation, and version control in one unified system. Track lease statuses in real time and receive alerts for expirations and renewals. Ensure compliance and consistency across all leases with standardized, audit-ready processes.",

    cardImg: img2,
    popupImg: img3
  },

  {
    id: 2,
    title: "AI-Powered Property Assistant",

    cardText:
      "Let AI handle responses, predictions, and workflows.",

    popupText:
      "Use advanced AI to predict pricing, detect risks, respond to tenants, and triage maintenance requests. This reduces workload and improves efficiency.",

    cardImg: img5,
    popupImg: aipowd
  },

  {
    id: 3,
    title: "Built-in Accounting & Rent Automation",

    cardText:
      "Automate payments and financial tracking with ease.",

    popupText:
      "Track rent, automate reminders, sync bank accounts, reconcile transactions, and generate financial statements—all in one place.",

    cardImg: img12,
    popupImg: after 
  },

  {
    id: 4,
    title: "Effective Tenant Communication",

    cardText:
      "Message tenants and track communication history.",

    popupText:
      "Share documents, send announcements, automate tenant reminders, and keep complete communication logs securely.",

    cardImg: tent,
    popupImg: tentmessage
  },

  {
    id: 5,
    title: "Real-Time Market Analytics",

    cardText:
      "Get insights from market history and demand metrics.",

    popupText:
      "Analyze neighborhood trends, pricing history, demand patterns, vacancy forecasts, and comparable sales using smart analytics tools.",

    cardImg: real,
    popupImg: analystics
  }
];

  // --------------------------- RETURN ------------------------------
  return (
    <div className="res-page">
      <Navbar />

      {/* ---------------- HERO SECTION ---------------- */}
    {/* ================= HERO SECTION ================= */}
<section className="hero-exact">
  <div className="hero-container">

    {/* LEFT */}
    <div className="hero-left">
      <div className="hero-breadcrumbs">
        Home / Portfolios / Residential
      </div>

      <h1 className="hero-title">
        Residential Property <br />
        <span>Management Platform</span>
      </h1>

      <p className="hero-subtitle">
        Manage residential properties effortlessly with smart automation,
        insights, and centralized tools built to support modern property
        operations.
      </p>

      <div className="hero-input">
        <input type="email" placeholder="Enter your email" />
        <button>Get Demo →</button>
      </div>
    </div>

    {/* RIGHT */}
    <div className="hero-right">
      <div className="hero-image-card">
        <img src={img1} alt="Dashboard Preview" />

        {/* Rating badge */}
        <div className="hero-badge top">
          <strong>4.9★</strong>
          <span>Rating</span>
        </div>

        {/* Satisfaction badge */}
        <div className="hero-badge bottom">
          <strong>98%</strong>
          <span>Satisfaction</span>
        </div>
      </div>
    </div>

  </div>
</section>
      {/* ---------------- INTRO SECTION ---------------- */}
      <section className="intro-section">
        <div className="intro-left">
          <span className="intro-label">THE ALL-IN-ONE SOFTWARE</span>

          <h2 className="intro-title">
            What is a residential <br /> property management software?
          </h2>

          <button className="intro-btn">Get Started →</button>
        </div>

        <div className="intro-right">
          <p>
            If you manage residential properties — such as single-family,
            multi-family, condos, or apartments — you need an organized workflow
            to track tenants, payments, documents, and maintenance.
          </p>

          <p>
            Our platform helps you publish vacancies, screen tenants, collect
            rent automatically, monitor property performance, and manage all
            operations through one dashboard.
          </p>
        </div>
      </section>

      {/* ---------------- MODERN FEATURES SECTION ---------------- */}
<section className="features-wrapper">
  <h2 className="features-title">
    Every feature you need — integrated intelligently
  </h2>

  <div className="features-grid-modern">
    {FEATURES.map((f, index) => (
      <div
        key={f.id}
        className="feature-modern-card"
        style={{ animationDelay: `${index * 0.1}s` }}
        onClick={() => setActiveFeature(f)}
      >
        <div className="feature-image-wrap">
          <img src={f.cardImg} alt={f.title} />
        </div>

        <div className="feature-modern-content">
          <h4>{f.title}</h4>
          <p>{f.cardText}</p>

          <div className="feature-more">
            Learn more →
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

{/* ---------------- MODERN FEATURE MODAL ---------------- */}
{activeFeature && (
  <div className="feature-modal-overlay" onClick={() => setActiveFeature(null)}>
    <div
      className="feature-modal"
      onClick={(e) => e.stopPropagation()}
    >
      <button className="modal-close" onClick={() => setActiveFeature(null)}>
        ✕
      </button>

      <div className="modal-left">
        <span className="modal-badge">Feature</span>
        <h2>{activeFeature.title}</h2>
        <p>{activeFeature.popupText}</p>

        <ul className="modal-points">
          <li>✔ Automated workflows save hours</li>
          <li>✔ Real-time analytics and insights</li>
          <li>✔ Enterprise-grade security</li>
        </ul>
      </div>

      <div className="modal-right">
        <img src={activeFeature.popupImg} alt="feature" />
      </div>
    </div>
  </div>
)}

{/* ================= GALLERY SECTION ================= */}
<section className="gallery-modern-section">
  <div className="gallery-header">
    <span className="gallery-label">VISUAL GALLERY</span>
    <h2 className="gallery-title">Visuals & Feature Images</h2>
  </div>

  <div className="gallery-grid">
    {/* BIG IMAGE */}
    <div className="gallery-item big">
      <img src={img6} alt="Modern Property Dashboard" />
      <span>Modern Property Dashboard</span>
    </div>

    {/* RIGHT TOP */}
    <div className="gallery-item top1">
      <img src={img7} alt="Listing Management" />
      <span>Listing Management</span>
    </div>

    <div className="gallery-item top2">
      <img src={img8} alt="AI Assistant" />
      <span>AI Assistant</span>
    </div>

    {/* RIGHT MIDDLE */}
    <div className="gallery-item bottom1">
      <img src={img17} alt="Digital Documents" />
      <span>Digital Documents</span>
    </div>

    <div className="gallery-item bottom2">
      <img src={make} alt="Market Analytics" />
      <span>Market Analytics</span>
    </div>
    <div className="gallery-item extra1">
            <img src={img13} alt="Request Processing" />
        <span>Request Processing</span>
      </div>
  </div>
</section>

      {/* ---------------- CTA SECTION ---------------- */}
    {/* ================= CTA WRAPPER ================= */}
<section className="cta-wrapper">
  <div className="cta-section">
    <div className="cta-left">
      <h3>Ready to upgrade your residential management?</h3>
      <p>
        Discover a smarter way to analyze, manage, and scale your
        properties with automation and powerful insights.
      </p>
    </div>

    <div className="cta-right">
      <input type="email" placeholder="Your Email" />
      <button>See It In Action</button>
    </div>
  </div>
</section>


     {/* ---------------- FAQ SECTION (DoorLoop Style Accordion) ---------------- */}
<section className="doorloop-faq-section">
  <div className="faq-header">
    <span className="faq-label">COMMON QUESTIONS</span>
    <h2 className="faq-title">Your Questions Answered</h2>
  </div>

  <Accordion type="single" collapsible className="faq-accordion">

    <AccordionItem value="item-1" className="faq-card">
      <AccordionTrigger className="faq-question">
        Can I customize dashboards for tenants?
      </AccordionTrigger>
      <AccordionContent className="faq-answer">
        Yes — configure the information tenants see, such as documents, reminders,
        payments, and more.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2" className="faq-card">
      <AccordionTrigger className="faq-question">
        How do autopayments work?
      </AccordionTrigger>
      <AccordionContent className="faq-answer">
        Tenants can securely enable automated payments with full visibility and control.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3" className="faq-card">
      <AccordionTrigger className="faq-question">
        Is my data secure?
      </AccordionTrigger>
      <AccordionContent className="faq-answer">
        All data is encrypted with enterprise-grade protections.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-4" className="faq-card">
      <AccordionTrigger className="faq-question">
        What can users do in the portal?
      </AccordionTrigger>
      <AccordionContent className="faq-answer">
        Submit maintenance requests, access documents, view payments, update profiles,
        and communicate easily.
      </AccordionContent>
    </AccordionItem>

  </Accordion>
</section>

{/* ---------------- PORTFOLIOS ---------------- */}
<section className="portfolio-section">
  <span className="portfolio-label">EXPLORE MORE</span>
  <h2 className="portfolio-title">Other Portfolios</h2>

  <div className="portfolio-grid">
    {[
      "Residential",
      "Multifamily",
      "Commercial",
      "Community Association",
      "Affordable Housing"
    ].map((item) => (
      <button
        key={item}
        className={`portfolio-pill ${
          item === "Commercial" ? "active" : ""
        }`}
      >
        {item}
      </button>
    ))}
  </div>
</section>
      <Footer />
    </div>
  );
};

export default ResidentialPage;
