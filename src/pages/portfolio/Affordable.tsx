// File: AffordableHousingPage.tsx
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./Affordable.css";

/* HERO + FEATURE + GALLERY IMAGES */
import img1 from '../../assets/hero-affordable.jpg';
import img2 from  "../../assets/digital.png";
import img3 from '../../assets/tracking.png';
import img4 from '../../assets/waitlist.png';
import img5 from '../../assets/hub.png';
import img6 from '../../assets/subsidy.avif';
import img7 from '../../assets/mantainence.jpg';
import img10 from '../../assets/feature-analytics.jpg';
import img11 from '../../assets/feature-communication.jpg';
import img12 from '../../assets/img13.jpg';

const AffordableHousingPage: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<any>(null);

  const FEATURES = [
    {
      id: 0,
      title: "Income Qualification Tracking",
      cardText:
        "Track household income, eligibility checks, and verification documents with automated reminders and compliance accuracy.",
      popupText:
        "Income Qualification Tracking simplifies monitoring household income and eligibility requirements in one centralized system. \
        It accurately tracks income limits, sources, and compliance thresholds. \
        Automated verification workflows ensure required documents are submitted on time. \
        Smart reminders notify tenants and managers about missing or expiring documents. \
        Built-in validation reduces manual errors and compliance risks. \
        Historical records provide clear audit trails for every applicant.",
      cardImg: img3,
      popupImg: img3
    },
    {
      id: 1,
      title: "Waitlist & Application Management",
      cardText:
        "Organize applicants, maintain prioritized waitlists, track status changes, and ensure fair, transparent placement.",
      popupText:
        "Organize and manage applications with a centralized system that automatically prioritizes applicants based on eligibility, completeness, and approval readiness. Track real-time status changes as applicants move through review, approval, and waitlist stages, ensuring nothing is missed. Maintain fairness and transparency with consistent placement rules, clear audit trails, and full visibility into every decision made across properties.",
      cardImg: img4,
      popupImg: img4
    },
    {
      id: 2,
      title: "Compliance & Regulatory Reporting",
      cardText:
        "Generate required reports, store compliance files, monitor deadlines, and reduce administrative errors.",
      popupText:
        "Generate required reports, store compliance files, monitor deadlines, and reduce administrative errors. Automatically compile accurate regulatory reports using real-time data across properties. Centralize compliance documents for secure access during audits and inspections. Track filing deadlines and renewal requirements with automated reminders to prevent penalties. Standardize reporting workflows to minimize risk and ensure consistent regulatory adherence.",
      cardImg: img11,
      popupImg: img11
    },
    {
      id: 3,
      title: "Resident Communication Hub",
      cardText:
        "Send updates, notices, and reminders while keeping all communication organized in one secure resident portal.",
      popupText:
        "Send updates, notices, and reminders while keeping all communication organized in one secure resident portal. Deliver announcements, policy updates, and urgent alerts instantly to residents and tenants. Maintain a complete communication history for transparency and accountability. Enable two-way messaging to reduce response times and improve engagement. Ensure sensitive information is protected with secure, role-based access controls.",
      cardImg: img5,
      popupImg: img5
    },
    {
      id: 4,
      title: "Subsidy & Rent Calculation Tools",
      cardText:
        "Accurately calculate income-based rent, track subsidy changes, and maintain financial transparency.",
      popupText:
        "Accurately calculate income-based rent, track subsidy changes, and maintain financial transparency. Automatically adjust rent calculations when household income or eligibility factors change. Maintain clear records of subsidies, credits, and adjustments for easy auditing and reporting. Provide real-time visibility into tenant charges and balances to prevent disputes. Ensure compliance with housing regulations through consistent, rule-based financial calculations.",
      cardImg: img6,
      popupImg: img6
    },
    {
      id: 5,
      title: "Maintenance & Inspection Scheduling",
      cardText:
        "Schedule inspections, track unit conditions, assign work orders, and maintain property standards efficiently.",
      popupText:
        "Schedule inspections, track unit conditions, assign work orders, and maintain property standards efficiently. Monitor maintenance requests in real time with clear status updates and accountability. Automate task assignments to maintenance teams based on priority and availability. Keep detailed inspection histories and condition reports for every unit. Improve response times and extend asset life through proactive maintenance planning.",
      cardImg: img7,
      popupImg: img7
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
              Home / Portfolios / Affordable Housing
            </div>

            <h1 className="hero-title">
              Affordable Housing Management <br />
              <span>Made Simple & Transparent</span>
            </h1>

            <p className="hero-subtitle">
              Manage income-restricted units, compliance requirements, waitlists,
              inspections, and resident communication with a unified platform that
              ensures clarity, accuracy, and long-term affordability sustainability.
            </p>

            <div className="hero-input">
              <input type="email" placeholder="Your Email" />
              <button>See It In Action →</button>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-image-card">
              <img src={img1} alt="Affordable Housing Platform" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="intro-section">
        <div className="intro-left">
          <span className="intro-label">AFFORDABLE HOUSING SOFTWARE</span>
          <h2 className="intro-title">
            What is an affordable <br /> housing platform?
          </h2>
        </div>

        <div className="intro-right">
          <p>
            Affordable housing programs require strict tracking of income eligibility,
            recertification, inspections, compliance documents, and unit availability.
            A modern platform brings clarity to complex reporting while improving resident
            communication and operational efficiency.
          </p>

          <p>
            With real-time visibility into occupancy, subsidy levels, compliance deadlines,
            and unit turnover, managers get the decision-making support needed to keep
            communities stable, transparent, and financially sustainable.
          </p>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="features-wrapper">
        <h2 className="features-title">
          Tools built for regulated and income-restricted housing
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
                  <p>Learn more →</p></div>
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
                <li>✔ Built for regulated housing programs</li>
                <li>✔ Compliance-first workflows</li>
                <li>✔ Transparent resident managements</li>
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
          <span className="gallery-label">AFFORDABLE HOUSING VISUALS</span>
          <h2 className="gallery-title">Affordable Housing Visuals</h2>
        </div>

        <div className="gallery-grid">
          <div className="gallery-item big">
            <img src={img1} alt="Community Overview" />
            <span>Community Overview</span>
          </div>

          <div className="gallery-item top1">
            <img src={img3} alt="Eligibility Dashboard" />
            <span>Eligibility Dashboard</span>
          </div>

          <div className="gallery-item top2">
            <img src={img4} alt="Applications & Waitlist" />
            <span>Applications & Waitlist</span>
          </div>

          <div className="gallery-item bottom1">
            <img src={img5} alt="Rent & Subsidy Overview" />
            <span>Rent & Subsidy Overview</span>
          </div>

          <div className="gallery-item bottom2">
            <img src={img6} alt="Inspection Scheduling" />
            <span>Inspection Scheduling</span>
          </div>

          <div className="gallery-item extra1">
            <img src={img11} alt="Resident Portal" />
            <span>Resident Portal</span>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta-section">
        <div className="cta-left">
          <h3>Transform the way you manage affordable housing</h3>
          <p>
            Improve compliance accuracy, simplify resident communication,
            and streamline every step of your housing operations.
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
              Does the platform support income-restricted housing programs?
            </AccordionTrigger>
            <AccordionContent className="faq-answer">
              Yes — the platform is designed to manage income eligibility,
              certifications, subsidy tracking, and compliance requirements.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="2" className="faq-card">
            <AccordionTrigger className="faq-question">
              Can I manage waitlists and applications in one place?
            </AccordionTrigger>
            <AccordionContent className="faq-answer">
              Yes. You can organize applicants, maintain prioritized waitlists,
              and track application status from a single dashboard.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="3" className="faq-card">
            <AccordionTrigger className="faq-question">
              How does it help with compliance and reporting?
            </AccordionTrigger>
            <AccordionContent className="faq-answer">
              The system centralizes compliance documentation, generates reports,
              tracks deadlines, and reduces audit risk.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="4" className="faq-card">
            <AccordionTrigger className="faq-question">
              Is resident data secure?
            </AccordionTrigger>
            <AccordionContent className="faq-answer">
              Yes — all resident and financial data is protected with
              enterprise-grade security and access controls.
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
                item === "Affordable Housing" ? "active" : ""
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

export default AffordableHousingPage;
