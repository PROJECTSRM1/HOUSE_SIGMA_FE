import { useState } from "react";
import {
  ChevronDown,
  Mail,
  Star,
  Shield,
  Home,
  Zap,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  AlertCircle,
  FileCheck,
  Smartphone,
  Flame,
  Droplet,
  Wind,
  ShieldCheck,
  Users,
  HeartHandshake,
  BadgeCheck,
  Phone,
  MessageSquare,
  Calculator,
} from "lucide-react";
import "@/styles/RentersInsurance.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RentersInsurance = () => {
  const [email, setEmail] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [coverageAmount, setCoverageAmount] = useState(30000);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const monthlyPremium = Math.round((coverageAmount / 30000) * 15);

  return (
    <div className="insurance-page">
      <Navbar />

      {/* HERO */}
      <section className="insurance-hero">
        <div className="insurance-container">
          <div className="insurance-breadcrumb">
            <a href="#">Home</a>
            <span>/</span>
            <a href="#">Insurance</a>
            <span>/</span>
            <span className="current">Renters Insurance</span>
          </div>

          <div className="insurance-hero-grid">
            {/* LEFT */}
            <div>
              <div className="insurance-hero-badge">
                <Shield className="badge-icon" />
                Comprehensive Coverage
              </div>

              <h1 className="insurance-hero-title">
                Protect your home with <span className="gradient">renters insurance</span>
              </h1>

              <p className="insurance-hero-text">
                Affordable coverage starting at $15/month. Protect your belongings, liability, and temporary living expenses with instant quotes and 24/7 claims support.
              </p>

              <div className="insurance-email-form">
                <div className="insurance-email-input-wrapper">
                  <Mail className="insurance-email-icon" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email for instant quote"
                  />
                </div>
                <button className="insurance-email-btn">Get Free Quote</button>
              </div>

              <div className="insurance-rating">
                <div>
                  <div className="insurance-rating-stars">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="star" />
                    ))}
                  </div>
                  <p className="insurance-rating-text">
                    <span className="strong">4.8/5</span> from 12,000+ renters
                  </p>
                </div>
                <div className="insurance-rating-divider"></div>
                <div>
                  <p className="insurance-rating-number">$850M+</p>
                  <p className="insurance-rating-sub">Claims paid</p>
                </div>
              </div>
            </div>

            {/* RIGHT Coverage Calculator */}
            <div className="insurance-hero-card">
              <div className="insurance-hero-card-header">
                <h3>Coverage Calculator</h3>
                <Calculator className="card-icon" />
              </div>

              <div className="insurance-calculator">
                <div className="calculator-section">
                  <label className="calculator-label">Personal Property Coverage</label>
                  <div className="calculator-slider">
                    <input
                      type="range"
                      min="10000"
                      max="100000"
                      step="5000"
                      value={coverageAmount}
                      onChange={(e) => setCoverageAmount(Number(e.target.value))}
                    />
                    <div className="slider-value">${coverageAmount.toLocaleString()}</div>
                  </div>
                </div>

                <div className="calculator-divider"></div>

                <div className="calculator-includes">
                  <h4 className="includes-title">What's Included</h4>
                  <div className="includes-list">
                    <div className="include-item">
                      <CheckCircle className="include-icon" />
                      <span>Personal property protection</span>
                    </div>
                    <div className="include-item">
                      <CheckCircle className="include-icon" />
                      <span>Liability coverage ($100K)</span>
                    </div>
                    <div className="include-item">
                      <CheckCircle className="include-icon" />
                      <span>Medical payments ($5K)</span>
                    </div>
                    <div className="include-item">
                      <CheckCircle className="include-icon" />
                      <span>Temporary living expenses</span>
                    </div>
                  </div>
                </div>

                <div className="calculator-result">
                  <div className="result-row">
                    <span className="result-label">Estimated monthly premium</span>
                    <span className="result-value">${monthlyPremium}/mo</span>
                  </div>
                  <button className="calculator-btn">Get Detailed Quote</button>
                  <p className="result-note">Actual rates may vary based on location and coverage options</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COVERAGE OVERVIEW */}
      <section className="insurance-coverage">
        <h2 className="insurance-section-title">What does renters insurance cover?</h2>

        <div className="insurance-coverage-grid">
          <div className="insurance-coverage-card">
            <div className="insurance-coverage-icon blue">
              <Home />
            </div>
            <h3 className="insurance-coverage-title">Personal Property</h3>
            <p className="insurance-coverage-text">
              Protection for furniture, electronics, clothing, and valuables from theft, fire, vandalism, and other covered perils.
            </p>
            <ul className="insurance-coverage-list">
              <li>Electronics & appliances</li>
              <li>Furniture & decor</li>
              <li>Clothing & jewelry</li>
              <li>Sports equipment</li>
            </ul>
          </div>

          <div className="insurance-coverage-card">
            <div className="insurance-coverage-icon green">
              <ShieldCheck />
            </div>
            <h3 className="insurance-coverage-title">Liability Protection</h3>
            <p className="insurance-coverage-text">
              Coverage for legal and medical expenses if someone is injured in your rental or you accidentally damage property.
            </p>
            <ul className="insurance-coverage-list">
              <li>Bodily injury claims</li>
              <li>Property damage liability</li>
              <li>Legal defense costs</li>
              <li>Medical payments</li>
            </ul>
          </div>

          <div className="insurance-coverage-card">
            <div className="insurance-coverage-icon purple">
              <HeartHandshake />
            </div>
            <h3 className="insurance-coverage-title">Additional Living Expenses</h3>
            <p className="insurance-coverage-text">
              If your rental becomes uninhabitable due to a covered loss, we'll pay for temporary housing, meals, and more.
            </p>
            <ul className="insurance-coverage-list">
              <li>Hotel or rental costs</li>
              <li>Restaurant meals</li>
              <li>Storage fees</li>
              <li>Moving expenses</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PERILS COVERED */}
      <section className="insurance-perils">
        <div className="insurance-perils-header">
          <h2 className="insurance-section-title">Protected against common risks</h2>
          <p className="insurance-perils-subtitle">
            Comprehensive coverage for the unexpected
          </p>
        </div>

        <div className="insurance-perils-grid">
          <div className="insurance-peril-card">
            <div className="peril-icon red">
              <Flame />
            </div>
            <h3 className="peril-title">Fire & Smoke</h3>
            <p className="peril-text">
              Full coverage for damage from fires, lightning strikes, and smoke damage to your belongings.
            </p>
          </div>

          <div className="insurance-peril-card">
            <div className="peril-icon blue">
              <Droplet />
            </div>
            <h3 className="peril-title">Water Damage</h3>
            <p className="peril-text">
              Protection from burst pipes, plumbing issues, and sudden water damage incidents.
            </p>
          </div>

          <div className="insurance-peril-card">
            <div className="peril-icon gray">
              <Wind />
            </div>
            <h3 className="peril-title">Weather Events</h3>
            <p className="peril-text">
              Coverage for windstorms, hail, snow damage, and other severe weather conditions.
            </p>
          </div>

          <div className="insurance-peril-card">
            <div className="peril-icon orange">
              <AlertCircle />
            </div>
            <h3 className="peril-title">Theft & Vandalism</h3>
            <p className="peril-text">
              Protection if your property is stolen or damaged due to break-ins or vandalism.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="insurance-why">
        <h2 className="insurance-section-title">Why choose HouseSigma Insurance?</h2>

        <div className="insurance-why-grid">
          <div className="insurance-why-card">
            <div className="insurance-why-icon blue">
              <DollarSign />
            </div>
            <h3 className="insurance-why-title">Affordable Rates</h3>
            <p className="insurance-why-text">
              Starting at just $15/month with flexible payment options. Bundle with other policies for additional savings up to 20%.
            </p>
          </div>

          <div className="insurance-why-card">
            <div className="insurance-why-icon green">
              <Zap />
            </div>
            <h3 className="insurance-why-title">Instant Coverage</h3>
            <p className="insurance-why-text">
              Get a quote in 60 seconds and activate coverage immediately. No waiting periods or lengthy applications required.
            </p>
          </div>

          <div className="insurance-why-card">
            <div className="insurance-why-icon purple">
              <Phone />
            </div>
            <h3 className="insurance-why-title">24/7 Support</h3>
            <p className="insurance-why-text">
              Round-the-clock claims assistance and customer support. File claims anytime via phone, app, or online portal.
            </p>
          </div>
        </div>
      </section>

      {/* CLAIMS PROCESS */}
      <section className="insurance-claims">
        <div className="insurance-claims-content">
          <div className="insurance-claims-text">
            <h2 className="insurance-section-title left">Filing a claim is simple</h2>
            <p className="insurance-claims-subtitle">
              Fast, transparent claims processing with dedicated support every step of the way.
            </p>

            <div className="insurance-claims-steps">
              <div className="claim-step">
                <div className="claim-step-number">1</div>
                <div className="claim-step-content">
                  <h4 className="claim-step-title">Report Your Claim</h4>
                  <p className="claim-step-text">
                    Submit via phone, app, or online portal. Available 24/7 with immediate confirmation.
                  </p>
                </div>
              </div>

              <div className="claim-step">
                <div className="claim-step-number">2</div>
                <div className="claim-step-content">
                  <h4 className="claim-step-title">Document the Damage</h4>
                  <p className="claim-step-text">
                    Take photos, provide receipts, and upload documentation through our secure portal.
                  </p>
                </div>
              </div>

              <div className="claim-step">
                <div className="claim-step-number">3</div>
                <div className="claim-step-content">
                  <h4 className="claim-step-title">Get Your Payment</h4>
                  <p className="claim-step-text">
                    Most claims processed within 48 hours with direct deposit to your account.
                  </p>
                </div>
              </div>
            </div>

            <div className="insurance-claims-stats">
              <div className="claim-stat">
                <Clock className="claim-stat-icon" />
                <div>
                  <p className="claim-stat-value">48hrs</p>
                  <p className="claim-stat-label">Avg. claim time</p>
                </div>
              </div>
              <div className="claim-stat">
                <BadgeCheck className="claim-stat-icon" />
                <div>
                  <p className="claim-stat-value">96%</p>
                  <p className="claim-stat-label">Approval rate</p>
                </div>
              </div>
              <div className="claim-stat">
                <MessageSquare className="claim-stat-icon" />
                <div>
                  <p className="claim-stat-value">4.8/5</p>
                  <p className="claim-stat-label">Support rating</p>
                </div>
              </div>
            </div>
          </div>

          <div className="insurance-claims-visual">
            <div className="claims-card">
              <div className="claims-card-header">
                <FileCheck className="claims-card-icon" />
                <span className="claims-card-badge">In Progress</span>
              </div>
              <h3 className="claims-card-title">Claim #CR-2024-8291</h3>
              <p className="claims-card-type">Water Damage - Kitchen</p>

              <div className="claims-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "75%" }}></div>
                </div>
                <p className="progress-text">75% Complete</p>
              </div>

              <div className="claims-timeline">
                <div className="timeline-step complete">
                  <div className="timeline-dot"></div>
                  <div className="timeline-info">
                    <p className="timeline-title">Claim Submitted</p>
                    <p className="timeline-date">Dec 10, 9:15 AM</p>
                  </div>
                </div>
                <div className="timeline-step complete">
                  <div className="timeline-dot"></div>
                  <div className="timeline-info">
                    <p className="timeline-title">Under Review</p>
                    <p className="timeline-date">Dec 10, 11:30 AM</p>
                  </div>
                </div>
                <div className="timeline-step active">
                  <div className="timeline-dot"></div>
                  <div className="timeline-info">
                    <p className="timeline-title">Adjuster Assigned</p>
                    <p className="timeline-date">Dec 11, 2:00 PM</p>
                  </div>
                </div>
                <div className="timeline-step">
                  <div className="timeline-dot"></div>
                  <div className="timeline-info">
                    <p className="timeline-title">Payment Processing</p>
                    <p className="timeline-date">Pending</p>
                  </div>
                </div>
              </div>

              <div className="claims-amount">
                <span className="amount-label">Estimated Payout</span>
                <span className="amount-value">$3,420</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="insurance-stats">
        <h2 className="insurance-section-title">Trusted by renters nationwide</h2>
        <p className="insurance-stats-text">
          Protecting over 150,000 renters and their belongings
        </p>

        <div className="insurance-stats-grid">
          <div className="insurance-stat-card blue">
            <Users className="stat-icon" />
            <p className="stat-value">150K+</p>
            <p className="stat-label">Active Policies</p>
          </div>

          <div className="insurance-stat-card green">
            <DollarSign className="stat-icon" />
            <p className="stat-value">$850M+</p>
            <p className="stat-label">Claims Paid</p>
          </div>

          <div className="insurance-stat-card purple">
            <Clock className="stat-icon" />
            <p className="stat-value">48hrs</p>
            <p className="stat-label">Avg. Claim Time</p>
          </div>

          <div className="insurance-stat-card orange">
            <Star className="stat-icon" />
            <p className="stat-value">4.8/5</p>
            <p className="stat-label">Customer Rating</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="insurance-faq">
        <h2 className="insurance-section-title center">Frequently asked questions</h2>

        <div className="insurance-faq-grid">
          {[
            {
              q: "How much renters insurance do I need?",
              a: "Most renters need between $20,000-$50,000 in personal property coverage. Take inventory of your belongings and add up their replacement costs. Consider electronics, furniture, clothing, and valuables. We recommend $100,000 in liability coverage for most renters.",
            },
            {
              q: "Does renters insurance cover roommates?",
              a: "Standard policies only cover the named insured. Roommates should purchase separate policies to protect their belongings. Some insurers offer shared policies, but individual coverage typically provides better protection and clarity during claims.",
            },
            {
              q: "What isn't covered by renters insurance?",
              a: "Standard policies don't cover floods, earthquakes, pest damage, or normal wear and tear. Damage caused by your pets may also be excluded. High-value items like jewelry may have coverage limits. Additional riders are available for these items.",
            },
            {
              q: "Can I cancel my policy anytime?",
              a: "Yes, you can cancel anytime with no penalties. You'll receive a prorated refund for unused premium. We recommend maintaining continuous coverage to avoid gaps that could affect future rates or claims eligibility.",
            },
            {
              q: "Does my landlord's insurance cover my belongings?",
              a: "No. Your landlord's insurance only covers the building structure and their liability. It doesn't protect your personal property, liability, or additional living expenses. Renters insurance is essential for protecting your belongings.",
            },
            {
              q: "How quickly can I get coverage?",
              a: "Coverage can start immediately after purchase. Get a quote in 60 seconds, customize your coverage, and activate your policy instantly. Digital ID cards are available immediately via email and our mobile app.",
            },
          ].map((faq, index) => (
            <div key={index} className="insurance-faq-item">
              <button className="insurance-faq-question" onClick={() => toggleFaq(index)}>
                <span className="insurance-faq-question-text">{faq.q}</span>
                <ChevronDown className={`insurance-faq-arrow ${openFaq === index ? "open" : ""}`} />
              </button>
              {openFaq === index && <div className="insurance-faq-answer">{faq.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="insurance-cta">
        <div className="insurance-cta-content">
          <Shield className="insurance-cta-icon" />
          <h2 className="insurance-cta-title">Get protected in minutes</h2>
          <p className="insurance-cta-text">
            Join 150,000+ renters who trust HouseSigma for affordable, comprehensive coverage.
          </p>

          <div className="insurance-email-form cta">
            <div className="insurance-email-input-wrapper">
              <Mail className="insurance-email-icon" />
              <input type="email" placeholder="Enter your email for instant quote" />
            </div>
            <button className="insurance-cta-btn">Get Free Quote</button>
          </div>

          <p className="insurance-cta-note">
            Instant quotes • No credit card required • Coverage starts today
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RentersInsurance;
