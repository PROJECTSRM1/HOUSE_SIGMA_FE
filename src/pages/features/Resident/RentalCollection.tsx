import { useState } from "react";
import {
  ChevronDown,
  Mail,
  Star,
  CreditCard,
  Shield,
  Zap,
  DollarSign,
  Clock,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Bell,
  Calendar,
  Smartphone,
  BarChart3,
  FileText,
  Users,
  Wallet,
  RefreshCw,
} from "lucide-react";
import "@/styles/RentalCollection.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RentalCollection = () => {
  const [email, setEmail] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="rental-page">
      <Navbar />

      {/* HERO */}
      <section className="rental-hero">
        <div className="rental-container">
          <div className="rental-breadcrumb">
            <a href="#">Home</a>
            <span>/</span>
            <a href="#">Features</a>
            <span>/</span>
            <span className="current">Rental Collection</span>
          </div>

          <div className="rental-hero-grid">
            {/* LEFT */}
            <div>
              <div className="rental-hero-badge">
                <Zap className="badge-icon" />
                Automated Payment Platform
              </div>

              <h1 className="rental-hero-title">
                Collect rent on <span className="gradient">autopilot</span>
              </h1>

              <p className="rental-hero-text">
                Automate rent collection with instant ACH transfers, flexible payment options, and built-in late fee management. Get paid faster while reducing admin work by 90%.
              </p>

              <div className="rental-email-form">
                <div className="rental-email-input-wrapper">
                  <Mail className="rental-email-icon" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>
                <button className="rental-email-btn">Start Free Trial</button>
              </div>

              <div className="rental-rating">
                <div>
                  <div className="rental-rating-stars">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="star" />
                    ))}
                  </div>
                  <p className="rental-rating-text">
                    <span className="strong">4.9/5</span> from 3,500+ landlords
                  </p>
                </div>
                <div className="rental-rating-divider"></div>
                <div>
                  <p className="rental-rating-number">$2.8B+</p>
                  <p className="rental-rating-sub">Rent collected</p>
                </div>
              </div>
            </div>

            {/* RIGHT Dashboard Preview */}
            <div className="rental-hero-card">
              <div className="rental-hero-card-header">
                <h3>Payment Dashboard</h3>
                <Wallet className="card-icon" />
              </div>

              <div className="rental-hero-card-info">
                <div className="info-item">
                  <span className="label">Collected This Month</span>
                  <span className="value">$127,400</span>
                </div>
                <div className="info-item">
                  <span className="label">Collection Rate</span>
                  <span className="value">98.5%</span>
                </div>
              </div>

              <div className="rental-hero-card-details">
                <div>
                  <span className="detail-label">On-Time</span>
                  <span className="detail-value success">156</span>
                </div>
                <div>
                  <span className="detail-label">Pending</span>
                  <span className="detail-value warning">8</span>
                </div>
                <div>
                  <span className="detail-label">Overdue</span>
                  <span className="detail-value error">3</span>
                </div>
              </div>

              <div className="rental-hero-chart">
                <div className="chart-header">
                  <span className="chart-label">Collection Trend</span>
                  <span className="chart-value">+12%</span>
                </div>
                <div className="chart-bars">
                  {[72, 78, 65, 88, 82, 95, 92].map((h, i) => (
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
      <section className="rental-why">
        <h2 className="rental-section-title">Why Choose HomeNest Payments?</h2>

        <div className="rental-why-grid">
          <div className="rental-why-card">
            <div className="rental-why-icon green">
              <DollarSign />
            </div>
            <h3 className="rental-why-title">Get Paid Faster</h3>
            <p className="rental-why-text">
              Automatic ACH transfers mean rent hits your account on the 1st. No more chasing payments or waiting for checks to clear.
            </p>
          </div>

          <div className="rental-why-card">
            <div className="rental-why-icon blue">
              <Shield />
            </div>
            <h3 className="rental-why-title">Bank-Grade Security</h3>
            <p className="rental-why-text">
              PCI-DSS compliant with 256-bit encryption. All transactions are verified and protected against fraud.
            </p>
          </div>

          <div className="rental-why-card">
            <div className="rental-why-icon purple">
              <BarChart3 />
            </div>
            <h3 className="rental-why-title">Complete Transparency</h3>
            <p className="rental-why-text">
              Real-time tracking, automated receipts, and detailed reporting. Know exactly who paid and when.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="rental-features">
        <div className="rental-features-header">
          <h2 className="rental-section-title">Everything you need to collect rent</h2>
          <p className="rental-features-subtitle">
            Powerful automation that works behind the scenes
          </p>
        </div>

        <div className="rental-features-grid">
          {/* AUTOPAY */}
          <div className="rental-feature-card white">
            <div className="rental-feature-header">
              <div className="rental-feature-icon green">
                <RefreshCw />
              </div>
              <div>
                <h3 className="rental-feature-title">AutoPay</h3>
                <p className="rental-feature-sub">Set it and forget it</p>
              </div>
            </div>

            <p className="rental-feature-text">
              Tenants enroll once, rent is automatically collected every month. 98% on-time payment rate.
            </p>

            <div className="rental-feature-preview">
              <h4 className="preview-title">Active AutoPay Tenants</h4>
              <div className="preview-list">
                {[
                  { name: "Sarah Johnson", unit: "Unit 205", amount: "$2,400", status: "Active" },
                  { name: "Mike Chen", unit: "Unit 312", amount: "$2,850", status: "Active" },
                  { name: "Emma Davis", unit: "Unit 108", amount: "$2,200", status: "Active" },
                ].map((tenant, i) => (
                  <div key={i} className="preview-tenant">
                    <div className="tenant-avatar">{tenant.name.charAt(0)}</div>
                    <div className="tenant-info">
                      <p className="tenant-name">{tenant.name}</p>
                      <p className="tenant-unit">{tenant.unit}</p>
                    </div>
                    <div className="tenant-amount">{tenant.amount}</div>
                    <span className="tenant-status active">{tenant.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MULTIPLE PAYMENT METHODS */}
          <div className="rental-feature-card blue">
            <div className="rental-feature-header">
              <div className="rental-feature-icon blue">
                <CreditCard />
              </div>
              <div>
                <h3 className="rental-feature-title">Flexible Payment Methods</h3>
                <p className="rental-feature-sub">Accept all major options</p>
              </div>
            </div>

            <p className="rental-feature-text">
              ACH, credit cards, debit cards, and digital wallets. Tenants choose what works for them.
            </p>

            <div className="rental-feature-preview">
              <h4 className="preview-title">Payment Methods</h4>
              <div className="payment-methods">
                {[
                  { type: "ACH Transfer", fee: "Free", popular: true },
                  { type: "Debit Card", fee: "$2.95", popular: false },
                  { type: "Credit Card", fee: "2.9%", popular: false },
                  { type: "Digital Wallet", fee: "$1.95", popular: false },
                ].map((method, i) => (
                  <div key={i} className="payment-method">
                    <div className="method-info">
                      <CreditCard className="method-icon" />
                      <div>
                        <p className="method-type">{method.type}</p>
                        <p className="method-fee">Fee: {method.fee}</p>
                      </div>
                    </div>
                    {method.popular && <span className="method-badge">Most Popular</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* NEXT FEATURE ROW */}
        <div className="rental-features-grid">
          {/* AUTOMATED REMINDERS */}
          <div className="rental-feature-card purple">
            <div className="rental-feature-header">
              <div className="rental-feature-icon purple">
                <Bell />
              </div>
              <div>
                <h3 className="rental-feature-title">Smart Reminders</h3>
                <p className="rental-feature-sub">Never chase rent again</p>
              </div>
            </div>

            <p className="rental-feature-text">
              Automated reminders via email and SMS. Late fees apply automatically based on your lease terms.
            </p>

            <div className="rental-feature-preview muted">
              <div className="reminder-timeline">
                {[
                  { day: "3 days before", message: "Friendly payment reminder", icon: Calendar },
                  { day: "Due date", message: "Payment due today", icon: Clock },
                  { day: "3 days late", message: "Late notice + fee applied", icon: Bell },
                ].map((item, i) => (
                  <div key={i} className="timeline-item">
                    <div className="timeline-icon">
                      <item.icon />
                    </div>
                    <div className="timeline-content">
                      <p className="timeline-day">{item.day}</p>
                      <p className="timeline-message">{item.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* INSTANT REPORTS */}
          <div className="rental-feature-card green">
            <div className="rental-feature-header">
              <div className="rental-feature-icon green">
                <FileText />
              </div>
              <div>
                <h3 className="rental-feature-title">Instant Reporting</h3>
                <p className="rental-feature-sub">Tax-ready statements</p>
              </div>
            </div>

            <p className="rental-feature-text">
              Generate income reports, tenant payment history, and tax documents in seconds. Export to Excel or PDF.
            </p>

            <div className="rental-feature-preview muted">
              <div className="report-list">
                {[
                  { name: "Monthly Income Report", date: "Dec 2024", size: "124 KB" },
                  { name: "Tenant Payment History", date: "Q4 2024", size: "89 KB" },
                  { name: "Late Fee Summary", date: "2024", size: "45 KB" },
                  { name: "Tax Statement (1099)", date: "2024", size: "201 KB" },
                ].map((report, i) => (
                  <div key={i} className="report-item">
                    <div className="report-icon">
                      <FileText />
                    </div>
                    <div className="report-info">
                      <p className="report-name">{report.name}</p>
                      <p className="report-meta">
                        {report.date} • {report.size}
                      </p>
                    </div>
                    <button className="report-download">
                      <ArrowRight />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="rental-center">
          <button className="rental-btn-primary">
            See All Features <ArrowRight />
          </button>
        </div>
      </section>

      {/* STATS */}
      <section className="rental-stats">
        <div className="rental-stats-grid">
          <div>
            <h2 className="rental-section-title">Trusted by property managers nationwide</h2>
            <p className="rental-stats-text">
              Join thousands who automated their rent collection and never looked back.
            </p>
            <button className="rental-btn-primary sm">
              Start Collecting Today <ArrowRight />
            </button>
          </div>

          <div className="rental-stats-cards">
            <div className="rental-stat-card blue">
              <DollarSign className="stat-icon blue" />
              <p className="stat-label">Average Collection Rate</p>
              <p className="stat-value">98.5%</p>
              <p className="stat-note">vs 87% manual</p>
            </div>

            <div className="rental-stat-card green">
              <Clock className="stat-icon green" />
              <p className="stat-label">Time Saved</p>
              <p className="stat-value">15hrs</p>
              <p className="stat-note">per month</p>
            </div>

            <div className="rental-stat-card purple">
              <TrendingUp className="stat-icon purple" />
              <p className="stat-label">Faster Payments</p>
              <p className="stat-value">3 days</p>
              <p className="stat-note">average</p>
            </div>

            <div className="rental-stat-card orange">
              <Users className="stat-icon orange" />
              <p className="stat-label">Active Properties</p>
              <p className="stat-value">85K+</p>
              <p className="stat-note">nationwide</p>
            </div>
          </div>
        </div>
        <p className="rental-stats-note">Based on HomeNest internal data from 2024</p>
      </section>

      {/* HOW IT WORKS */}
      <section className="rental-how">
        <h2 className="rental-section-title">How it works</h2>
        <p className="rental-how-subtitle">Start collecting rent in 3 simple steps</p>

        <div className="rental-how-grid">
          <div className="rental-how-card">
            <div className="rental-how-number">1</div>
            <div className="rental-how-icon green">
              <Users />
            </div>
            <h3 className="rental-how-title">Invite Tenants</h3>
            <p className="rental-how-text">
              Send secure payment invitations via email or SMS. Tenants create their account in under 2 minutes.
            </p>
          </div>

          <div className="rental-how-card">
            <div className="rental-how-number">2</div>
            <div className="rental-how-icon blue">
              <CreditCard />
            </div>
            <h3 className="rental-how-title">Setup AutoPay</h3>
            <p className="rental-how-text">
              Tenants connect their bank or card once. Rent is automatically collected on the date you choose.
            </p>
          </div>

          <div className="rental-how-card">
            <div className="rental-how-number">3</div>
            <div className="rental-how-icon purple">
              <CheckCircle />
            </div>
            <h3 className="rental-how-title">Get Paid</h3>
            <p className="rental-how-text">
              Funds hit your account automatically. Track everything in real-time from your dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="rental-faq">
        <h2 className="rental-section-title center">Frequently asked questions</h2>

        <div className="rental-faq-grid">
          {[
            {
              q: "How much does it cost?",
              a: "ACH transfers are completely free for landlords. Tenants can pay via ACH for free, or choose credit/debit cards with a small convenience fee. No monthly fees or hidden charges.",
            },
            {
              q: "How fast do I receive payments?",
              a: "ACH transfers typically take 2-3 business days. Funds are deposited directly to your bank account with full tracking and instant receipts.",
            },
            {
              q: "What if a tenant misses a payment?",
              a: "Automated reminders are sent before and after the due date. Late fees are automatically applied based on your lease terms. You can also pause AutoPay or manually retry payments.",
            },
            {
              q: "Is my banking information secure?",
              a: "Absolutely. We use bank-level 256-bit encryption and are PCI-DSS Level 1 certified. Your financial data is never stored on our servers and all transactions are verified.",
            },
            {
              q: "Can I use this for multiple properties?",
              a: "Yes! Manage unlimited properties and tenants from a single dashboard. Each property can have different payment schedules and late fee policies.",
            },
            {
              q: "What payment methods are accepted?",
              a: "ACH bank transfers (free), debit cards, credit cards, Apple Pay, and Google Pay. Tenants can switch between methods anytime.",
            },
          ].map((faq, index) => (
            <div key={index} className="rental-faq-item">
              <button className="rental-faq-question" onClick={() => toggleFaq(index)}>
                <span className="rental-faq-question-text">{faq.q}</span>
                <ChevronDown className={`rental-faq-arrow ${openFaq === index ? "open" : ""}`} />
              </button>
              {openFaq === index && <div className="rental-faq-answer">{faq.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rental-cta">
        <div className="rental-cta-content">
          <h2 className="rental-cta-title">Ready to automate rent collection?</h2>
          <p className="rental-cta-text">
            Join 85,000+ properties collecting rent on autopilot.
          </p>

          <div className="rental-email-form cta">
            <div className="rental-email-input-wrapper">
              <Mail className="rental-email-icon" />
              <input type="email" placeholder="Enter your email" />
            </div>
            <button className="rental-cta-btn">Start Free Trial</button>
          </div>

          <p className="rental-cta-note">No credit card required • Free ACH transfers forever</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RentalCollection;
