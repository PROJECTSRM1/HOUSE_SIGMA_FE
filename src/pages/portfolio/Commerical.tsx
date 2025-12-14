// File: CommercialPage.tsx
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import './Commerical.css';

/* HERO + GALLERY IMAGES */
import img1 from '/assets/hero-commercial.jpg';
import img2 from  '/assets/por.png';
import img4 from '/assets/img4.svg';
import img5 from '/assets/leaseland.png';
import operation from '/assets/Operational.png';
import img6 from '/assets/img1.png';
import tentintel from '/assets/tenentintelligence.png';
import data from '/assets/Demand.png';
import centeral from '/assets/Centralized.png';
import img10 from '/assets/feature-analytics.jpg';
import img11 from '/assets/market.jpg';
import img7 from '/assets/financial.webp';
import img8 from '/assets/advanced.webp';
import img9 from '/assets/account.jpg';


// /* FEATURE CARD IMAGES */


const CommercialPage: React.FC = () => {
  /* ---------------- FEATURE MODAL STATE ---------------- */
  const [activeFeature, setActiveFeature] = useState<any>(null);

  /* ---------------- FEATURES DATA ---------------- */
  const FEATURES = [
    {
      id: 0,
      title: "Portfolio-Wide Revenue Insights",
      cardText: "Track income, recoveries, and vacancies.",
      popupText:
        "Analyze rental income, CAM recoveries, vacancy exposure, and portfolio-wide financial performance with real-time dashboards. Gain instant visibility into cash flow trends and property-level profitability. Compare performance across assets to identify risks and opportunities quickly. Drill down into detailed reports for informed budgeting and forecasting. Make data-driven decisions with accurate, up-to-date financial insights across your entire portfolio.",
      cardImg: img2,
      popupImg: img10
    },
    {
      id: 1,
      title: "Advanced Lease Management",
      cardText: "Handle long-term commercial leases.",
      popupText:
        "Manage multi-year leases, escalations, renewals, amendments, and compliance with automated workflows. Track critical lease milestones and escalation schedules without manual effort. Streamline approvals and document updates with centralized version control. Receive proactive alerts for renewals, expirations, and compliance deadlines. Maintain accuracy and consistency across complex lease portfolios with ease.",
      cardImg: img8,
      popupImg: img5
    },
    {
      id: 2,
      title: "Operational Workflow Automation",
      cardText: "Automate approvals and reporting.",
      popupText:
        "Track payment behavior, engagements analytics, communication history, and tenant risk indicators. Identify trends in reliability and responsiveness with data-driven insights. Monitor potential risks early using behavioral patterns and historical activity. Maintain a complete tenant profile to support informed decision-making. Improve retention and reduce defaults through proactive, intelligence-led management.",
        cardImg:img4,      
        popupImg: operation,
    },
    {
      id: 3,
      title: "Tenant Performance Intelligence",
      cardText: "Understand tenant reliability.",
      popupText:
       " Track payment behavior, engagement analytics, communication history, and tenant risk indicators. Gain a holistic view of tenant reliability and activity in one unified profile. Detect early warning signs through behavioral trends and historical data. Support smarter decisions with clear, actionable insights. Strengthen retention and reduce risk through proactive tenant management.",
      cardImg: img6,
      popupImg: tentintel
    },
    {
      id: 4,
      title: "Centralized Financial Accounting",
      cardText: "Enterprise-grade accounting.",
      popupText:
        "Reconcile transactions, sync payments, maintain audit-ready books, and generate financial reports. Automate reconciliations to reduce errors and save time. Keep all financial records accurate, transparent, and compliant. Access real-time reports for cash flow, balances, and performance insights. Support confident decision-making with reliable, up-to-date accounting data.",
      cardImg: img7,
      popupImg: centeral
    },
    {
      id: 5,
      title: "Market & Demand Analytics",
      cardText: "Benchmark market performance.",
      popupText:
        "Compare rental benchmarks, demand trends, asset valuations, and competitor performance. Gain market-level insights to understand positioning and pricing opportunities. Track shifts in demand and valuation changes over time. Identify competitive gaps and growth opportunities across regions. Make informed investment and pricing decisions with data-backed market intelligence.",
      cardImg: img11,
      popupImg: data
    }
  ];

  return (
    <div className="res-page">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="hero-exact">
        <div className="hero-container">
          <div className="hero-left">
            <div className="hero-breadcrumbs">
              Home / Portfolios / Commercial
            </div>

            <h1 className="hero-title">
              Commercial Property <br />
              <span>Management Platform</span>
            </h1>

            <p className="hero-subtitle">
              Optimize office, retail, industrial, and mixed-use portfolios with
              advanced analytics, lease automation, and centralized operations.
            </p>

            <div className="hero-input">
              <input type="email" placeholder="Enter your email" />
              <button>Get Demo →</button>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-image-card">
              <img src={img1} alt="Commercial Dashboard" />

              <div className="hero-badge top">
                <strong>Enterprise</strong>
                <span>Grade</span>
              </div>

              <div className="hero-badge bottom">
                <strong>99.9%</strong>
                <span>Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="intro-section">
        <div className="intro-left">
          <span className="intro-label">COMMERCIAL SOFTWARE</span>
          <h2 className="intro-title">
            What is a commercial <br /> property platform?
          </h2>
          <button className="intro-btn">Get Started →</button>
        </div>

        <div className="intro-right">
          <p>
            Commercial portfolios demand precision — from lease negotiations and
            CAM tracking to occupancy planning and revenue forecasting.
          </p>
          <p>
            This platform centralizes operations, financials, analytics, and
            tenant engagement into a single scalable system.
          </p>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="features-wrapper">
        <h2 className="features-title">
          Commercial-grade features — engineered for scale
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
                <div className="feature-more">Learn more →</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FEATURE MODAL ================= */}
      {activeFeature && (
        <div
          className="feature-modal-overlay"
          onClick={() => setActiveFeature(null)}
        >
          <div
            className="feature-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setActiveFeature(null)}
            >
              ✕
            </button>

            <div className="modal-left">
              <span className="modal-badge">Feature</span>
              <h2>{activeFeature.title}</h2>
              <p>{activeFeature.popupText}</p>

              <ul className="modal-points">
                <li>✔ Built for enterprise portfolios</li>
                <li>✔ Real-time operational insights</li>
                <li>✔ Secure & scalable architecture</li>
              </ul>
            </div>

            <div className="modal-right">
              <img src={activeFeature.popupImg} alt="feature" />
            </div>
          </div>
        </div>
      )}

      {/* ================= GALLERY ================= */}
      <section className="gallery-modern-section">
        <div className="gallery-header">
          <span className="gallery-label">COMMERCIAL VISUALS</span>
          <h2 className="gallery-title">Portfolio Highlights</h2>
        </div>

        <div className="gallery-grid">
          <div className="gallery-item big">
            <img src={img1} alt="Commercial Complex" />
            <span>Commercial Complex</span>
          </div>

          <div className="gallery-item top1">
            <img src={img8} alt="Analytics Dashboard" />
            <span>Analytics Dashboard</span>
          </div>

          <div className="gallery-item top2">
            <img src={img2} alt="Lease Management" />
            <span>Lease Management</span>
          </div>

          <div className="gallery-item bottom1">
            <img src={img7} alt="Operations" />
            <span>Operations</span>
          </div>

          <div className="gallery-item bottom2">
            <img src={img9} alt="Accounting" />
            <span>Accounting</span>
          </div>

          <div className="gallery-item extra1">
            <img src={tentintel} alt="Tenant Portal" />
            <span>Tenant Portal</span>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta-section">
        <div className="cta-left">
          <h3>Ready to modernize your commercial operations?</h3>
          <p>
            Gain clarity, improve profitability, and scale confidently with
            commercial-first tools.
          </p>
        </div>

        <div className="cta-right">
          <input type="email" placeholder="Your Email" />
          <button>See It In Action</button>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="doorloop-faq-section">
        <div className="faq-header">
          <span className="faq-label">COMMON QUESTIONS</span>
          <h2 className="faq-title">Your Questions Answered</h2>
        </div>

        <Accordion type="single" collapsible className="faq-accordion">
          <AccordionItem value="1" className="faq-card">
            <AccordionTrigger className="faq-question">
              Can it manage large commercial portfolios?
            </AccordionTrigger>
            <AccordionContent className="faq-answer">
              Yes — office parks, retail centers, industrial campuses, and
              mixed-use assets are fully supported.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="2" className="faq-card">
            <AccordionTrigger className="faq-question">
              Does it support complex lease structures?
            </AccordionTrigger>
            <AccordionContent className="faq-answer">
              Multi-year leases, escalations, CAM, renewals, and amendments are
              handled natively.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="3" className="faq-card">
            <AccordionTrigger className="faq-question">
              Is financial data secure?
            </AccordionTrigger>
            <AccordionContent className="faq-answer">
              All data is encrypted with enterprise-grade security controls.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="4" className="faq-card">
            <AccordionTrigger className="faq-question">
              Can I see real-time performance?
            </AccordionTrigger>
            <AccordionContent className="faq-answer">
              Dashboards update instantly for revenue, occupancy, and expenses.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* ================= PORTFOLIOS ================= */}
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

export default CommercialPage;
