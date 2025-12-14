import { useState } from "react";
import {
  ChevronDown,
  Mail,
  Star,
  Users,
  Shield,
  FileText,
  Search,
  Clock,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Bell,
  MessageSquare,
  Wrench,
  Key,
  UserCheck,
  FolderOpen,
  BarChart3,
  Calendar,
  Settings,
  Home,
} from "lucide-react";
import "@/styles/TenantManagement.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TenantManagement = () => {
  const [email, setEmail] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="tenant-page">
      <Navbar />

      {/* HERO */}
      <section className="tenant-hero">
        <div className="tenant-container">
          <div className="tenant-breadcrumb">
            <a href="#">Home</a>
            <span>/</span>
            <a href="#">Features</a>
            <span>/</span>
            <span className="current">Tenant Management</span>
          </div>

          <div className="tenant-hero-grid">
            {/* LEFT */}
            <div>
              <div className="tenant-hero-badge">
                <Users className="badge-icon" />
                Complete Tenant Management
              </div>

              <h1 className="tenant-hero-title">
                Manage tenants from <span className="gradient">one dashboard</span>
              </h1>

              <p className="tenant-hero-text">
                Streamline tenant screening, lease tracking, maintenance requests, and communications. Everything you need to manage your properties efficiently in one powerful platform.
              </p>

              <div className="tenant-email-form">
                <div className="tenant-email-input-wrapper">
                  <Mail className="tenant-email-icon" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>
                <button className="tenant-email-btn">Start Free Trial</button>
              </div>

              <div className="tenant-rating">
                <div>
                  <div className="tenant-rating-stars">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="star" />
                    ))}
                  </div>
                  <p className="tenant-rating-text">
                    <span className="strong">4.9/5</span> from 2,800+ property managers
                  </p>
                </div>
                <div className="tenant-rating-divider"></div>
                <div>
                  <p className="tenant-rating-number">125K+</p>
                  <p className="tenant-rating-sub">Active tenants</p>
                </div>
              </div>
            </div>

            {/* RIGHT Dashboard Preview */}
            <div className="tenant-hero-card">
              <div className="tenant-hero-card-header">
                <h3>Tenant Overview</h3>
                <Users className="card-icon" />
              </div>

              <div className="tenant-hero-card-info">
                <div className="info-item">
                  <span className="label">Active Tenants</span>
                  <span className="value">248</span>
                </div>
                <div className="info-item">
                  <span className="label">Occupancy Rate</span>
                  <span className="value">96.5%</span>
                </div>
              </div>

              <div className="tenant-hero-card-details">
                <div>
                  <span className="detail-label">Current</span>
                  <span className="detail-value success">238</span>
                </div>
                <div>
                  <span className="detail-label">Expiring Soon</span>
                  <span className="detail-value warning">7</span>
                </div>
                <div>
                  <span className="detail-label">Applicants</span>
                  <span className="detail-value info">15</span>
                </div>
              </div>

              <div className="tenant-hero-chart">
                <div className="chart-header">
                  <span className="chart-label">Lease Status</span>
                  <span className="chart-value">This Month</span>
                </div>
                <div className="chart-bars">
                  {[85, 92, 78, 88, 95, 90, 94].map((h, i) => (
                    <div key={i} className="bar">
                      <div style={{ height: `${h}%` }}></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="tenant-why">
        <h2 className="tenant-section-title">Why Choose HomeNestenant Management?</h2>

        <div className="tenant-why-grid">
          <div className="tenant-why-card">
            <div className="tenant-why-icon green">
              <UserCheck />
            </div>
            <h3 className="tenant-why-title">Faster Tenant Screening</h3>
            <p className="tenant-why-text">
              Automated background checks, credit reports, and rental history verification. Screen qualified tenants in minutes, not days.
            </p>
          </div>

          <div className="tenant-why-card">
            <div className="tenant-why-icon blue">
              <Shield />
            </div>
            <h3 className="tenant-why-title">Secure & Compliant</h3>
            <p className="tenant-why-text">
              Built-in compliance with fair housing laws. All data encrypted and stored securely with bank-level protection.
            </p>
          </div>

          <div className="tenant-why-card">
            <div className="tenant-why-icon purple">
              <MessageSquare />
            </div>
            <h3 className="tenant-why-title">Seamless Communication</h3>
            <p className="tenant-why-text">
              Centralized messaging, automated notifications, and maintenance tracking. Keep all tenant interactions in one place.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="tenant-features">
        <div className="tenant-features-header">
          <h2 className="tenant-section-title">Complete tenant management toolkit</h2>
          <p className="tenant-features-subtitle">
            Everything you need to manage tenants from application to move-out
          </p>
        </div>

        <div className="tenant-features-grid">
          {/* TENANT SCREENING */}
          <div className="tenant-feature-card white">
            <div className="tenant-feature-header">
              <div className="tenant-feature-icon green">
                <Search />
              </div>
              <div>
                <h3 className="tenant-feature-title">Smart Tenant Screening</h3>
                <p className="tenant-feature-sub">Find quality tenants faster</p>
              </div>
            </div>

            <p className="tenant-feature-text">
              Comprehensive background checks, credit scores, eviction history, and employment verification. Make confident decisions with detailed reports.
            </p>

            <div className="tenant-feature-preview">
              <h4 className="preview-title">Recent Applications</h4>
              <div className="preview-list">
                {[
                  { name: "Jennifer Smith", unit: "Unit 405", score: "782", status: "Approved" },
                  { name: "Robert Johnson", unit: "Unit 210", score: "715", status: "Under Review" },
                  { name: "Maria Garcia", unit: "Unit 308", score: "695", status: "Pending" },
                ].map((applicant, i) => (
                  <div key={i} className="preview-applicant">
                    <div className="applicant-avatar">{applicant.name.charAt(0)}</div>
                    <div className="applicant-info">
                      <p className="applicant-name">{applicant.name}</p>
                      <p className="applicant-unit">{applicant.unit}</p>
                    </div>
                    <div className="applicant-score">
                      <span className="score-label">Credit</span>
                      <span className="score-value">{applicant.score}</span>
                    </div>
                    <span className={`applicant-status ${applicant.status.toLowerCase().replace(' ', '-')}`}>
                      {applicant.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* LEASE MANAGEMENT */}
          <div className="tenant-feature-card blue">
            <div className="tenant-feature-header">
              <div className="tenant-feature-icon blue">
                <FileText />
              </div>
              <div>
                <h3 className="tenant-feature-title">Digital Lease Management</h3>
                <p className="tenant-feature-sub">E-signatures & automatic renewals</p>
              </div>
            </div>

            <p className="tenant-feature-text">
              Create, send, and sign leases electronically. Track renewal dates, send automated reminders, and manage lease terms all in one place.
            </p>

            <div className="tenant-feature-preview">
              <h4 className="preview-title">Active Leases</h4>
              <div className="lease-stats">
                <div className="lease-stat">
                  <div className="lease-stat-icon active">
                    <CheckCircle />
                  </div>
                  <div>
                    <p className="lease-stat-value">186</p>
                    <p className="lease-stat-label">Active Leases</p>
                  </div>
                </div>
                <div className="lease-stat">
                  <div className="lease-stat-icon expiring">
                    <Clock />
                  </div>
                  <div>
                    <p className="lease-stat-value">12</p>
                    <p className="lease-stat-label">Expiring (30 days)</p>
                  </div>
                </div>
                <div className="lease-stat">
                  <div className="lease-stat-icon pending">
                    <FileText />
                  </div>
                  <div>
                    <p className="lease-stat-value">8</p>
                    <p className="lease-stat-label">Pending Signature</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NEXT FEATURE ROW */}
        <div className="tenant-features-grid">
          {/* MAINTENANCE REQUESTS */}
          <div className="tenant-feature-card purple">
            <div className="tenant-feature-header">
              <div className="tenant-feature-icon purple">
                <Wrench />
              </div>
              <div>
                <h3 className="tenant-feature-title">Maintenance Tracking</h3>
                <p className="tenant-feature-sub">From request to completion</p>
              </div>
            </div>

            <p className="tenant-feature-text">
              Tenants submit requests through their portal. Assign tasks, track progress, and maintain complete work history with photos and timestamps.
            </p>

            <div className="tenant-feature-preview muted">
              <div className="maintenance-timeline">
                {[
                  { type: "Urgent", issue: "Water leak in bathroom", unit: "Unit 205", time: "2h ago" },
                  { type: "Normal", issue: "AC not cooling properly", unit: "Unit 412", time: "5h ago" },
                  { type: "Low", issue: "Lightbulb replacement", unit: "Unit 108", time: "1d ago" },
                ].map((item, i) => (
                  <div key={i} className="maintenance-item">
                    <span className={`priority-badge ${item.type.toLowerCase()}`}>
                      {item.type}
                    </span>
                    <div className="maintenance-content">
                      <p className="maintenance-issue">{item.issue}</p>
                      <p className="maintenance-meta">
                        {item.unit} • {item.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* DOCUMENT STORAGE */}
          <div className="tenant-feature-card green">
            <div className="tenant-feature-header">
              <div className="tenant-feature-icon green">
                <FolderOpen />
              </div>
              <div>
                <h3 className="tenant-feature-title">Document Storage</h3>
                <p className="tenant-feature-sub">Organized & searchable</p>
              </div>
            </div>

            <p className="tenant-feature-text">
              Store leases, applications, inspection reports, and tenant communications. Search by property, tenant, or date. Never lose an important document.
            </p>

            <div className="tenant-feature-preview muted">
              <div className="document-list">
                {[
                  { name: "Lease Agreement", tenant: "Sarah Johnson", date: "Dec 15", type: "PDF" },
                  { name: "Move-in Inspection", tenant: "Mike Chen", date: "Dec 12", type: "PDF" },
                  { name: "Rental Application", tenant: "Emma Davis", date: "Dec 10", type: "PDF" },
                  { name: "ID Verification", tenant: "John Smith", date: "Dec 8", type: "JPG" },
                ].map((doc, i) => (
                  <div key={i} className="document-item">
                    <div className="document-icon">
                      <FileText />
                    </div>
                    <div className="document-info">
                      <p className="document-name">{doc.name}</p>
                      <p className="document-meta">
                        {doc.tenant} • {doc.date}
                      </p>
                    </div>
                    <span className="document-type">{doc.type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="tenant-center">
          <button className="tenant-btn-primary">
            See All Features <ArrowRight />
          </button>
        </div>
      </section>

      {/* STATS */}
      <section className="tenant-stats">
        <div className="tenant-stats-grid">
          <div>
            <h2 className="tenant-section-title">Trusted by landlords across Canada</h2>
            <p className="tenant-stats-text">
              Join property managers who simplified their workflow and improved tenant satisfaction.
            </p>
            <button className="tenant-btn-primary sm">
              Get Started Today <ArrowRight />
            </button>
          </div>

          <div className="tenant-stats-cards">
            <div className="tenant-stat-card blue">
              <Clock className="stat-icon blue" />
              <p className="stat-label">Time Saved Weekly</p>
              <p className="stat-value">20hrs</p>
              <p className="stat-note">on admin tasks</p>
            </div>

            <div className="tenant-stat-card green">
              <TrendingUp className="stat-icon green" />
              <p className="stat-label">Faster Applications</p>
              <p className="stat-value">65%</p>
              <p className="stat-note">quicker processing</p>
            </div>

            <div className="tenant-stat-card purple">
              <MessageSquare className="stat-icon purple" />
              <p className="stat-label">Response Rate</p>
              <p className="stat-value">94%</p>
              <p className="stat-note">within 24 hours</p>
            </div>

            <div className="tenant-stat-card orange">
              <Home className="stat-icon orange" />
              <p className="stat-label">Properties Managed</p>
              <p className="stat-value">42K+</p>
              <p className="stat-note">nationwide</p>
            </div>
          </div>
        </div>
        <p className="tenant-stats-note">Based on HomeNest internal data from 2024</p>
      </section>

      {/* HOW IT WORKS */}
      <section className="tenant-how">
        <h2 className="tenant-section-title">How it works</h2>
        <p className="tenant-how-subtitle">Get started in 3 simple steps</p>

        <div className="tenant-how-grid">
          <div className="tenant-how-card">
            <div className="tenant-how-number">1</div>
            <div className="tenant-how-icon green">
              <Key />
            </div>
            <h3 className="tenant-how-title">List Your Property</h3>
            <p className="tenant-how-text">
              Add property details, set rent amount, and create screening criteria. Your listing goes live instantly.
            </p>
          </div>

          <div className="tenant-how-card">
            <div className="tenant-how-number">2</div>
            <div className="tenant-how-icon blue">
              <UserCheck />
            </div>
            <h3 className="tenant-how-title">Screen Applicants</h3>
            <p className="tenant-how-text">
              Review applications with comprehensive background checks. Compare candidates side-by-side and select the best fit.
            </p>
          </div>

          <div className="tenant-how-card">
            <div className="tenant-how-number">3</div>
            <div className="tenant-how-icon purple">
              <Settings />
            </div>
            <h3 className="tenant-how-title">Manage Everything</h3>
            <p className="tenant-how-text">
              Track leases, handle maintenance, collect rent, and communicate with tenants all from one dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="tenant-faq">
        <h2 className="tenant-section-title center">Frequently asked questions</h2>

        <div className="tenant-faq-grid">
          {[
            {
              q: "How does tenant screening work?",
              a: "Applicants submit their information online. We run comprehensive background checks including credit history, criminal records, eviction history, and employment verification. You receive a detailed report within minutes to make informed decisions.",
            },
            {
              q: "Can tenants access their own portal?",
              a: "Yes! Each tenant gets a secure portal where they can pay rent, submit maintenance requests, view lease documents, and communicate with you. It's mobile-friendly and available 24/7.",
            },
            {
              q: "How are maintenance requests handled?",
              a: "Tenants submit requests through their portal with photos and descriptions. You receive instant notifications, can assign tasks to vendors, track progress, and maintain a complete history of all work performed.",
            },
            {
              q: "What documents can I store?",
              a: "Store unlimited documents including leases, applications, inspection reports, receipts, photos, insurance certificates, and tenant communications. Everything is encrypted, backed up, and searchable.",
            },
            {
              q: "Can I manage multiple properties?",
              a: "Absolutely! Manage unlimited properties and units from a single dashboard. Filter by property, track metrics separately, and generate reports for each location.",
            },
            {
              q: "How do lease renewals work?",
              a: "The system automatically tracks lease expiration dates and sends renewal reminders to both you and your tenants. You can create and send renewal agreements digitally with e-signature support.",
            },
          ].map((faq, index) => (
            <div key={index} className="tenant-faq-item">
              <button className="tenant-faq-question" onClick={() => toggleFaq(index)}>
                <span className="tenant-faq-question-text">{faq.q}</span>
                <ChevronDown className={`tenant-faq-arrow ${openFaq === index ? "open" : ""}`} />
              </button>
              {openFaq === index && <div className="tenant-faq-answer">{faq.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="tenant-cta">
        <div className="tenant-cta-content">
          <h2 className="tenant-cta-title">Ready to simplify tenant management?</h2>
          <p className="tenant-cta-text">
            Join 42,000+ properties managing tenants more efficiently.
          </p>

          <div className="tenant-email-form cta">
            <div className="tenant-email-input-wrapper">
              <Mail className="tenant-email-icon" />
              <input type="email" placeholder="Enter your email" />
            </div>
            <button className="tenant-cta-btn">Start Free Trial</button>
          </div>

          <p className="tenant-cta-note">No credit card required • Free for 30 days</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TenantManagement;
