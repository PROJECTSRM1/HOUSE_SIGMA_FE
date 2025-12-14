import { useState } from "react";
import {
  Home,
  ChevronDown,
  Mail,
  Star,
  Building2,
  Shield,
  Zap,
  DollarSign,
  Clock,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Eye,
  FileText,
  BarChart3,
} from "lucide-react";
import "@/styles/OwnerPortal.css";
import "@/components/Navbar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


const OwnerPortal = () => {
  const [email, setEmail] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="owner-page">

      {/* NAVIGATION */}
      <Navbar />

      {/* HERO */}
      <section className="owner-hero">
        <div className="owner-container">

          {/* Breadcrumb */}
          <div className="owner-breadcrumb">
            <a href="#">Home</a>
            <span>/</span>
            <a href="#">Features</a>
            <span>/</span>
            <span className="current">Owner Portal</span>
          </div>

          <div className="owner-hero-grid">
            {/* LEFT */}
            <div>
              <div className="owner-hero-badge">
                <Zap className="badge-icon" />
                Real Estate Intelligence Platform
              </div>

              <h1 className="owner-hero-title">
                Empower property owners with <span className="gradient">complete transparency</span>
              </h1>

              <p className="owner-hero-text">
                Provide real-time portfolio insights, automated reporting, and instant access to property data. HomeNest's Owner Portal delivers professional-grade analytics at scale.
              </p>

              <div className="owner-email-form">
                <div className="owner-email-input-wrapper">
                  <Mail className="owner-email-icon" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>
                <button className="owner-email-btn">Request Demo</button>
              </div>

              <div className="owner-rating">
                <div>
                  <div className="owner-rating-stars">
                    {[1,2,3,4,5].map(i => <Star key={i} className="star" />)}
                  </div>
                  <p className="owner-rating-text">
                    <span className="strong">4.9/5</span> from 1,200+ property managers
                  </p>
                </div>
                <div className="owner-rating-divider"></div>
                <div>
                  <p className="owner-rating-number">50K+</p>
                  <p className="owner-rating-sub">Properties managed</p>
                </div>
              </div>
            </div>

            {/* RIGHT Dashboard Preview */}
            <div className="owner-hero-card">
              <div className="owner-hero-card-header">
                <h3>Portfolio Overview</h3>
                <Eye className="card-eye" />
              </div>

              <div className="owner-hero-card-info">
                <div className="info-item">
                  <span className="label">Total Value</span>
                  <span className="value">$8.4M</span>
                </div>
                <div className="info-item">
                  <span className="label">ROI</span>
                  <span className="value">12.8%</span>
                </div>
              </div>

              <div className="owner-hero-card-details">
                <div>
                  <span className="detail-label">Monthly Revenue</span>
                  <span className="detail-value">$42,500</span>
                </div>
                <div>
                  <span className="detail-label">Occupancy Rate</span>
                  <span className="detail-value accent">96%</span>
                </div>
                <div>
                  <span className="detail-label">Active Properties</span>
                  <span className="detail-value">24</span>
                </div>
              </div>

              <div className="owner-hero-bars">
                {[65,78,52,88,75,92,85,70,95,88,82,90].map((h,i) => (
                  <div key={i} className="bar"><div style={{height:`${h}%`}}></div></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="owner-why">
        <h2 className="owner-section-title">Why HomeNestwner Portal?</h2>

        <div className="owner-why-grid">
          <div className="owner-why-card">
            <div className="owner-why-icon mint"><Building2 /></div>
            <h3 className="owner-why-title">Enterprise-Grade Platform</h3>
            <p className="owner-why-text">
              Institutional-quality data management with granular access controls. Designed to scale from 10 to 10,000 properties.
            </p>
          </div>

          <div className="owner-why-card">
            <div className="owner-why-icon blue"><Shield /></div>
            <h3 className="owner-why-title">Bank-Level Security</h3>
            <p className="owner-why-text">
              256-bit encryption, two-factor authentication, and SOC 2 compliance keep your property data secure.
            </p>
          </div>

          <div className="owner-why-card">
            <div className="owner-why-icon pink"><BarChart3 /></div>
            <h3 className="owner-why-title">Advanced Analytics</h3>
            <p className="owner-why-text">
              Real-time comparisons, predictive insights, and custom reporting for smarter decisions.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="owner-features">
        <div className="owner-features-header">
          <h2 className="owner-section-title">Complete visibility, zero friction</h2>
          <p className="owner-features-subtitle">
            Give property owners the insights they need, when they need them
          </p>
        </div>

        <div className="owner-features-grid">
          {/* LIVE DASHBOARDS */}
          <div className="owner-feature-card white">
            <div className="owner-feature-header">
              <div className="owner-feature-icon mint"><BarChart3 /></div>
              <div>
                <h3 className="owner-feature-title">Live Dashboards</h3>
                <p className="owner-feature-sub">Updated in real-time</p>
              </div>
            </div>

            <p className="owner-feature-text">
              Instant visibility into occupancy, rental income, maintenance, and valuations.
            </p>

            <div className="owner-feature-preview">
              <h4 className="preview-title">Property Performance</h4>
              <div className="preview-grid">
                {[
                  {label:"Rent Collected",value:"$32,450",change:"+8%"},
                  {label:"Occupancy",value:"94%",change:"+3%"},
                  {label:"Net Income",value:"$18,200",change:"+12%"},
                  {label:"Properties",value:"18",change:"+2"}
                ].map((s,i)=>(
                  <div key={i} className="preview-card">
                    <span className="label">{s.label}</span>
                    <span className="val">{s.value}</span>
                    <span className="change">{s.change}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AUTOMATED REPORTS */}
          <div className="owner-feature-card blue">
            <div className="owner-feature-header">
              <div className="owner-feature-icon blue"><FileText /></div>
              <div>
                <h3 className="owner-feature-title">Automated Reports</h3>
                <p className="owner-feature-sub">No manual work</p>
              </div>
            </div>

            <p className="owner-feature-text">
              Generate financial statements, taxes, performance reports — instantly exportable.
            </p>

            <div className="owner-feature-preview">
              <div className="preview-header">
                <h4 className="preview-title">Monthly Report</h4>
                <button className="preview-link">Download PDF</button>
              </div>

              <div className="preview-list">
                {[
                  {label:"Revenue Summary",icon:DollarSign,color:"mint"},
                  {label:"Expense Breakdown",icon:BarChart3,color:"blue"},
                  {label:"Cash Flow Analysis",icon:TrendingUp,color:"mint"},
                  {label:"Market Comparison",icon:BarChart3,color:"slate"},
                ].map((item,i)=>(
                  <div key={i} className="preview-row">
                    <item.icon className={`row-icon ${item.color}`} />
                    <span>{item.label}</span>
                    <CheckCircle className="row-check" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* NEXT FEATURE ROW */}
        <div className="owner-features-grid">
          {/* MESSAGING */}
          <div className="owner-feature-card purple">
            <div className="owner-feature-header">
              <div className="owner-feature-icon purple"><MessageSquare /></div>
              <div>
                <h3 className="owner-feature-title">Direct Communication</h3>
                <p className="owner-feature-sub">Built-in messaging</p>
              </div>
            </div>

            <p className="owner-feature-text">
              Secure messaging between managers and owners — organized and searchable.
            </p>

            <div className="owner-feature-preview muted">
              <div className="chat-list">
                {[
                  {sender:"Property Manager",msg:"Q3 report is ready",time:"2m ago"},
                  {sender:"Owner Request",msg:"Can we review maintenance costs?",time:"1h ago"},
                  {sender:"System Alert",msg:"Rent payment received",time:"3h ago"},
                ].map((c,i)=>(
                  <div key={i} className="chat-item">
                    <div className="chat-head">
                      <span className="sender">{c.sender}</span>
                      <span className="time">{c.time}</span>
                    </div>
                    <p className="chat-msg">{c.msg}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* DOCUMENT VAULT */}
          <div className="owner-feature-card green">
            <div className="owner-feature-header">
              <div className="owner-feature-icon green"><FileText /></div>
              <div>
                <h3 className="owner-feature-title">Document Vault</h3>
                <p className="owner-feature-sub">Secure storage</p>
              </div>
            </div>

            <p className="owner-feature-text">
              Store and share leases, insurance, tax docs, and reports with permissions.
            </p>

            <div className="owner-feature-preview muted">
              <div className="doc-list">
                {[
                  {name:"2024 Tax Documents",size:"2.4 MB",type:"PDF"},
                  {name:"Property Insurance",size:"1.8 MB",type:"PDF"},
                  {name:"Lease Agreements",size:"3.2 MB",type:"ZIP"},
                  {name:"Inspection Reports",size:"5.1 MB",type:"PDF"},
                ].map((d,i)=>(
                  <div key={i} className="doc-item">
                    <div className="doc-icon"><FileText /></div>
                    <div className="doc-info">
                      <p className="doc-name">{d.name}</p>
                      <p className="doc-meta">{d.size} • {d.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="owner-center">
          <button className="owner-btn-primary">
            Explore All Features <ArrowRight />
          </button>
        </div>
      </section>

      {/* STATS */}
      <section className="owner-stats">
        <div className="owner-stats-grid">
          <div>
            <h2 className="owner-section-title">Trusted by leading property managers</h2>
            <p className="owner-stats-text">
              Join thousands of real estate professionals who transformed their owner relationships.
            </p>
            <button className="owner-btn-primary sm">
              Schedule Your Demo <ArrowRight />
            </button>
          </div>

          <div className="owner-stats-cards">
            <div className="owner-stat-card blue">
              <DollarSign className="stat-icon blue" />
              <p className="stat-label">Avg. Time Saved</p>
              <p className="stat-value">28hrs</p>
              <p className="stat-note">per month</p>
            </div>

            <div className="owner-stat-card pink">
              <Clock className="stat-icon pink" />
              <p className="stat-label">Response Time</p>
              <p className="stat-value">&lt;5min</p>
              <p className="stat-note">average</p>
            </div>

            <div className="owner-stat-card green">
              <TrendingUp className="stat-icon green" />
              <p className="stat-label">Owner Satisfaction</p>
              <p className="stat-value">98%</p>
              <p className="stat-note">rating</p>
            </div>

            <div className="owner-stat-card purple">
              <Users className="stat-icon purple" />
              <p className="stat-label">Active Users</p>
              <p className="stat-value">12K+</p>
              <p className="stat-note">nationwide</p>
            </div>
          </div>
        </div>
        <p className="owner-stats-note">Based on HomeNest customer surveys conducted in 2024</p>
      </section>

      {/* FAQ */}
      <section className="owner-faq">
        <h2 className="owner-section-title center">Frequently asked questions</h2>

        <div className="owner-faq-grid">
          {[
            {
              q:"What is the HomeNest Owner Portal?",
              a:"The Owner Portal is a professional-grade platform that provides property owners with real-time access to their portfolio data, financial reports, and communication tools."
            },
            {
              q:"How secure is the Owner Portal?",
              a:"HomeNest employs bank-level security including 256-bit encryption, two-factor authentication, and SOC 2 compliance to protect all data."
            },
            {
              q:"Can owners access the portal on mobile?",
              a:"Yes, the portal is fully responsive and works seamlessly on smartphones, tablets, and desktop computers."
            },
            {
              q:"What types of reports are available?",
              a:"Monthly statements, tax summaries, cash flow analysis, market comparisons, and custom reports tailored to your needs."
            },
            {
              q:"How do permissions work?",
              a:"Granular access control lets you configure visibility per owner, property, or document type for maximum flexibility."
            },
            {
              q:"Is there a limit to properties or owners?",
              a:"No, the platform scales from 10 to 10,000+ properties with no performance degradation."
            },
          ].map((faq,index)=>(
            <div key={index} className="owner-faq-item">
              <button className="owner-faq-question" onClick={() => toggleFaq(index)}>
                <span className="owner-faq-question-text">{faq.q}</span>
                <ChevronDown className={`owner-faq-arrow ${openFaq === index ? "open" : ""}`} />
              </button>
              {openFaq === index && (
                <div className="owner-faq-answer">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="owner-cta">
        <div className="owner-cta-content">
          <h2 className="owner-cta-title">
            Ready to transform your owner experience?
          </h2>
          <p className="owner-cta-text">
            Join leading property managers who trust HomeNest.
          </p>

          <div className="owner-email-form cta">
            <div className="owner-email-input-wrapper">
              <Mail className="owner-email-icon" />
              <input type="email" placeholder="Enter your email" />
            </div>
            <button className="owner-cta-btn">Get Started Free</button>
          </div>

          <p className="owner-cta-note">No credit card required • 14-day free trial</p>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  );
};

export default OwnerPortal;
