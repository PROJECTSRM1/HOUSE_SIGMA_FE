// File: CommunityAssociationPage.tsx
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion";
import React, { useState,useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./CommunityAssociation.css";
import { useNavigate } from "react-router-dom";

/* HERO + FEATURE + GALLERY IMAGES */
import img1 from '/assets/hero-community.jpg';
import img2 from '/assets/vender.webp'
import img3 from '/assets/communication.webp';
import img4 from '/assets/Img_3.svg';
import img5 from '/assets/board.webp';
import img8 from '/assets/feature-ai.jpg';
import img9 from '/assets/digital.png';
import img10 from '/assets/feature-analytics.jpg';
import img11 from '/assets/Events.webp';
import img12 from '/assets/dashboard.webp';
import img13 from '/assets/loan.webp';

const CommunityAssociationPage: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<any>(null);
  const navigate = useNavigate();

    useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, []);
  

  const FEATURES = [
    {
      id: 0,
      title: "Dues & Assessment Automation",
      cardText:
        "Collect HOA fees, automate reminders, track payments, and maintain financial accuracy with ease.",
      popupText:
        "Collect HOA fees, automate reminders, track payments, and maintain financial accuracy with ease.",
      cardImg: img4,
      popupImg: img4
    },
    {
      id: 1,
      title: "Board Document Management",
      cardText:
        "Store meeting minutes, policies, budgets, and governing documents in a secure digital library.",
      popupText:
        "Store meeting minutes, policies, budgets, and governing documents in a secure digital library.",
      cardImg: img5,
      popupImg: img5
    },
    {
      id: 2,
      title: "Architectural Request Workflow",
      cardText:
        "Receive, review, and approve ARC submissions with a clean and traceable workflow.",
      popupText:
        "Receive, review, and approve ARC submissions with a clean and traceable workflow.",
      cardImg: img9,
      popupImg: img9
    },
    {
      id: 3,
      title: "Community-Wide Communication",
      cardText:
        "Send updates, announcements, alerts, and newsletters to residents instantly.",
      popupText:
        "Send updates, announcements, alerts, and newsletters to residents instantly.",
      cardImg: img3,
      popupImg: img3
    },
    {
      id: 4,
      title: "Financial Overview & Reporting",
      cardText:
        "View dues projections, spending categories, reserve fund status, and financial statements.",
      popupText:
        "View dues projections, spending categories, reserve fund status, and financial statements.",
      cardImg: img8,
      popupImg: img8
    },
    {
      id: 5,
      title: "Maintenance & Vendor Coordination",
      cardText:
        "Track work orders, manage vendor activities, and ensure maintenance issues are resolved quickly.",
      popupText:
        "Track work orders, manage vendor activities, and ensure maintenance issues are resolved quickly.",
      cardImg: img2,
      popupImg: img2
    }
  ];

  return (
    <div className="res-page">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="hero-exact">
        <div className="hero-container">
          <div className="hero-left">
            <div className="hero-breadcrumbs">
              Home / Portfolios / Community Association
            </div>

            <h1 className="hero-title">
              A Smarter Way to Manage <br />
              <span>Community Associations</span>
            </h1>

            <p className="hero-subtitle">
              Manage HOAs, condo boards, and community associations with automated workflows,
              financial clarity, maintenance coordination, resident communication, and real-time
              insights that strengthen every community.
            </p>

            <div className="hero-input">
              <input type="email" placeholder="Your Email" />
              <button>See It In Action →</button>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-image-card">
              <img src={img1} alt="Community Association Platform" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="intro-section">
        <div className="intro-left">
          <span className="intro-label">COMMUNITY ASSOCIATION SOFTWARE</span>
          <h2 className="intro-title">
            What is a community <br /> association management platform?
          </h2>
        </div>

        <div className="intro-right">
          <p>
            Community associations depend on transparency, organization, and consistency. 
            A unified platform helps streamline dues collection, document sharing, compliance tasks,
            architectural requests, and board communication — ensuring smoother community operations.
          </p>

          <p>
            With clear financial reporting, automated reminders, maintenance coordination,
            resident engagement tools, and data-driven insights, communities gain the structure
            needed for long-term health and resident satisfaction.
          </p>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="features-wrapper">
        <h2 className="features-title">
          Tools designed to simplify community operations
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
                <li>✔ Board-friendly workflows</li>
                <li>✔ Resident-first communication</li>
                <li>✔ Financial clarity & transparency</li>
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
          <span className="gallery-label">COMMUNITY VISUALS</span>
          <h2 className="gallery-title">Community Management Visuals</h2>
        </div>

        <div className="gallery-grid">
          <div className="gallery-item big">
            <img src={img1} alt="Community Overview" />
            <span>Community Overview</span>
          </div>

          <div className="gallery-item top1">
            <img src={img3} alt="Board Management Dashboard" />
            <span>Board Management Dashboard</span>
          </div>

          <div className="gallery-item top2">
            <img src={img10} alt="Resident Portal View" />
            <span>Resident Portal View</span>
          </div>

          <div className="gallery-item bottom1">
            <img src={img11} alt="Community Events" />
            <span>Community Events</span>
          </div>

          <div className="gallery-item bottom2">
            <img src={img12} alt="Financial Dashboard" />
            <span>Financial Dashboard</span>
          </div>

          <div className="gallery-item extra1">
            <img src={img13} alt="Request Processing" />
            <span>Request Processing</span>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta-section">
        <div className="cta-left">
          <h3>Ready to elevate your community operations?</h3>
          <p>
            Engage residents, streamline board tasks, and improve clarity across your entire association.
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
              Can board members access reports and documents?
            </AccordionTrigger>
            <AccordionContent className="faq-answer">
              Yes — board members can securely access financial reports,
              meeting documents, and governance records.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="2" className="faq-card">
            <AccordionTrigger className="faq-question">
              Does it support architectural review requests?
            </AccordionTrigger>
            <AccordionContent className="faq-answer">
              Absolutely. ARC submissions can be reviewed, approved,
              and tracked with a transparent workflow.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="3" className="faq-card">
            <AccordionTrigger className="faq-question">
              Is resident communication centralized?
            </AccordionTrigger>
            <AccordionContent className="faq-answer">
              Yes — all announcements, alerts, and messages are
              managed from one secure communication hub.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="4" className="faq-card">
            <AccordionTrigger className="faq-question">
              Is financial data secure?
            </AccordionTrigger>
            <AccordionContent className="faq-answer">
              All financial and resident data is protected with
              enterprise-grade security and encryption.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* ================= PORTFOLIOS ================= */}
     <section className="portfolio-section">
  <span className="portfolio-label">EXPLORE MORE</span>
  <h2 className="portfolio-title">Other Portfolios</h2>

  <div className="portfolio-grid">
    <button
      className="portfolio-pill"
      onClick={() => navigate("/portfolio/residential")}
    >
      Residential
    </button>
    <button
      className="portfolio-pill"
      onClick={() => navigate("/portfolio/commercial")}
    >
      Commercial
    </button>

    <button
      className="portfolio-pill active"
      onClick={() => navigate("/portfolio/community")}
    >
      Community Association
    </button>

    <button
      className="portfolio-pill"
      onClick={() => navigate("/portfolio/affordable")}
    >
      Affordable Housing
    </button>
  </div>
</section>
      <Footer />
    </div>
  );
};

export default CommunityAssociationPage;
