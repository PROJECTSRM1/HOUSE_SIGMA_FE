import { useState } from "react";
import {
  ChevronDown,
  Mail,
  Star,
  Wrench,
  Shield,
  Clock,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Bell,
  MessageSquare,
  Users,
  Zap,
  Droplets,
  Thermometer,
  Settings,
  ClipboardList,
  UserCheck,
  BarChart3,
  Calendar,
  DollarSign,
  Camera,
  FileText,
  Phone,
  Home,
} from "lucide-react";
import "@/styles/Maintenance.css";
import "@/styles/TenantManagement.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Maintenance = () => {
  const [email, setEmail] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="maintenance-page">
      <Navbar />

      {/* HERO SECTION */}
      <section className="maintenance-hero">
        <div className="maintenance-container">
          <div className="maintenance-breadcrumb">
            <a href="#">Home</a>
            <span>/</span>
            <a href="#">Features</a>
            <span>/</span>
            <span className="current">Maintenance Management</span>
          </div>

          <div className="maintenance-hero-grid">
            {/* LEFT CONTENT */}
            <div>
              <div className="maintenance-hero-badge">
                <Wrench className="badge-icon" />
                Smart Maintenance System
              </div>

              <h1 className="maintenance-hero-title">
                Streamline property <span className="gradient">maintenance requests</span>
              </h1>

              <p className="maintenance-hero-text">
                From request submission to completion, manage all property maintenance efficiently. 
                Track work orders, coordinate with vendors, and keep tenants informed with real-time updates.
              </p>

              <div className="maintenance-email-form">
                <div className="maintenance-email-input-wrapper">
                  <Mail className="maintenance-email-icon" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>
                <button className="maintenance-email-btn">Start Free Trial</button>
              </div>

              <div className="maintenance-stats-row">
                <div className="maintenance-stat-item">
                  <span className="maintenance-stat-number">85%</span>
                  <span className="maintenance-stat-label">Faster resolution</span>
                </div>
                <div className="maintenance-stat-item">
                  <span className="maintenance-stat-number">50K+</span>
                  <span className="maintenance-stat-label">Requests handled</span>
                </div>
                <div className="maintenance-stat-item">
                  <span className="maintenance-stat-number">4.8/5</span>
                  <span className="maintenance-stat-label">Tenant satisfaction</span>
                </div>
              </div>
            </div>

            {/* RIGHT DASHBOARD PREVIEW */}
            <div className="maintenance-hero-card">
              <div className="maintenance-hero-card-header">
                <h3>Maintenance Dashboard</h3>
                <Wrench className="card-icon" />
              </div>

              <div className="maintenance-summary-grid">
                <div className="maintenance-summary-item">
                  <span className="label">Open Requests</span>
                  <span className="value">24</span>
                </div>
                <div className="maintenance-summary-item">
                  <span className="label">Avg. Resolution</span>
                  <span className="value">1.8 days</span>
                </div>
              </div>

              <div className="maintenance-priority-grid">
                <div className="maintenance-priority-item urgent">
                  <span className="priority-label">Urgent</span>
                  <span className="priority-value">3</span>
                </div>
                <div className="maintenance-priority-item normal">
                  <span className="priority-label">Normal</span>
                  <span className="priority-value">15</span>
                </div>
                <div className="maintenance-priority-item low">
                  <span className="priority-label">Low</span>
                  <span className="priority-value">6</span>
                </div>
              </div>

              <div className="maintenance-recent-list">
                <p className="maintenance-recent-title">Recent Requests</p>
                {[
                  { type: "plumbing", issue: "Bathroom leak - Unit 205", time: "2h ago", status: "In Progress" },
                  { type: "electrical", issue: "Outlet not working - Unit 412", time: "5h ago", status: "Pending" },
                  { type: "hvac", issue: "AC repair needed - Unit 108", time: "1d ago", status: "Completed" },
                ].map((item, i) => (
                  <div key={i} className="maintenance-recent-item">
                    <div className={`maintenance-recent-icon ${item.type}`}>
                      {item.type === "plumbing" && <Droplets />}
                      {item.type === "electrical" && <Zap />}
                      {item.type === "hvac" && <Thermometer />}
                    </div>
                    <div className="maintenance-recent-info">
                      <p className="maintenance-recent-issue">{item.issue}</p>
                      <p className="maintenance-recent-meta">{item.time}</p>
                    </div>
                    <span className={`maintenance-recent-status ${item.status.toLowerCase().replace(' ', '-')}`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="maintenance-why">
        <h2 className="maintenance-section-title">Why Choose HouseSigma Maintenance?</h2>

        <div className="maintenance-why-grid">
          <div className="maintenance-why-card">
            <div className="maintenance-why-icon orange">
              <Clock />
            </div>
            <h3 className="maintenance-why-title">Faster Response Times</h3>
            <p className="maintenance-why-text">
              Automated routing and priority queuing ensures urgent issues get addressed immediately. 
              Reduce average resolution time by up to 85%.
            </p>
          </div>

          <div className="maintenance-why-card">
            <div className="maintenance-why-icon blue">
              <Bell />
            </div>
            <h3 className="maintenance-why-title">Real-Time Updates</h3>
            <p className="maintenance-why-text">
              Keep tenants informed with automatic status updates via email and SMS. 
              No more "when will it be fixed?" calls.
            </p>
          </div>

          <div className="maintenance-why-card">
            <div className="maintenance-why-icon green">
              <DollarSign />
            </div>
            <h3 className="maintenance-why-title">Cost Tracking</h3>
            <p className="maintenance-why-text">
              Track all maintenance expenses by property, category, and vendor. 
              Generate detailed reports for budgeting and tax purposes.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="maintenance-features">
        <div className="maintenance-features-header">
          <h2 className="maintenance-section-title">Complete maintenance toolkit</h2>
          <p className="maintenance-features-subtitle">
            Everything you need to manage property maintenance from request to resolution
          </p>
        </div>

        <div className="maintenance-features-grid">
          {/* REQUEST MANAGEMENT */}
          <div className="maintenance-feature-card white">
            <div className="maintenance-feature-header">
              <div className="maintenance-feature-icon orange">
                <ClipboardList />
              </div>
              <div>
                <h3 className="maintenance-feature-title">Request Management</h3>
                <p className="maintenance-feature-sub">Submit, track, and prioritize</p>
              </div>
            </div>

            <p className="maintenance-feature-text">
              Tenants submit requests through their portal with photos and descriptions. 
              Automatically categorize and prioritize based on urgency and type.
            </p>

            <div className="maintenance-feature-preview">
              <h4 className="preview-title">Active Requests</h4>
              <div className="request-list">
                {[
                  { category: "plumbing", title: "Leaking faucet in kitchen", unit: "Unit 302", priority: "Normal" },
                  { category: "electrical", title: "Flickering lights hallway", unit: "Unit 105", priority: "Urgent" },
                  { category: "appliance", title: "Dishwasher not draining", unit: "Unit 408", priority: "Low" },
                ].map((request, i) => (
                  <div key={i} className="request-item">
                    <div className={`request-category-icon ${request.category}`}>
                      {request.category === "plumbing" && <Droplets />}
                      {request.category === "electrical" && <Zap />}
                      {request.category === "appliance" && <Settings />}
                    </div>
                    <div className="request-info">
                      <p className="request-title">{request.title}</p>
                      <p className="request-meta">{request.unit}</p>
                    </div>
                    <span className={`request-priority ${request.priority.toLowerCase()}`}>
                      {request.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* VENDOR NETWORK */}
          <div className="maintenance-feature-card orange">
            <div className="maintenance-feature-header">
              <div className="maintenance-feature-icon blue">
                <Users />
              </div>
              <div>
                <h3 className="maintenance-feature-title">Vendor Network</h3>
                <p className="maintenance-feature-sub">Trusted professionals on demand</p>
              </div>
            </div>

            <p className="maintenance-feature-text">
              Build and manage your preferred vendor list. Assign jobs, track performance, 
              and get competitive quotes automatically.
            </p>

            <div className="maintenance-feature-preview">
              <h4 className="preview-title">Preferred Vendors</h4>
              <div className="vendor-list">
                {[
                  { name: "Mike's Plumbing Co.", specialty: "Plumbing & Drains", rating: "4.9" },
                  { name: "ElectroPro Services", specialty: "Electrical & Wiring", rating: "4.8" },
                  { name: "Cool Air HVAC", specialty: "Heating & Cooling", rating: "4.7" },
                ].map((vendor, i) => (
                  <div key={i} className="vendor-item">
                    <div className="vendor-avatar">{vendor.name.charAt(0)}</div>
                    <div className="vendor-info">
                      <p className="vendor-name">{vendor.name}</p>
                      <p className="vendor-specialty">{vendor.specialty}</p>
                    </div>
                    <div className="vendor-rating">
                      <Star />
                      <span>{vendor.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SECOND ROW */}
        <div className="maintenance-features-grid">
          {/* WORK ORDER TRACKING */}
          <div className="maintenance-feature-card blue">
            <div className="maintenance-feature-header">
              <div className="maintenance-feature-icon green">
                <CheckCircle />
              </div>
              <div>
                <h3 className="maintenance-feature-title">Work Order Tracking</h3>
                <p className="maintenance-feature-sub">From start to completion</p>
              </div>
            </div>

            <p className="maintenance-feature-text">
              Create work orders with detailed instructions, track progress in real-time, 
              and maintain complete history with photos and timestamps.
            </p>

            <div className="maintenance-feature-preview muted">
              <h4 className="preview-title">Work Order #WO-2847</h4>
              <div className="work-order-timeline">
                {[
                  { step: "1", title: "Request Received", time: "Dec 10, 9:00 AM", status: "completed" },
                  { step: "2", title: "Vendor Assigned", time: "Dec 10, 10:30 AM", status: "completed" },
                  { step: "3", title: "Work In Progress", time: "Dec 11, 2:00 PM", status: "active" },
                  { step: "4", title: "Completion & Review", time: "Pending", status: "pending" },
                ].map((item, i) => (
                  <div key={i} className="work-order-item">
                    <div className={`work-order-step ${item.status}`}>
                      {item.status === "completed" ? <CheckCircle /> : item.step}
                    </div>
                    <div className="work-order-content">
                      <p className="work-order-title">{item.title}</p>
                      <p className="work-order-meta">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* COST & REPORTING */}
          <div className="maintenance-feature-card green">
            <div className="maintenance-feature-header">
              <div className="maintenance-feature-icon purple">
                <BarChart3 />
              </div>
              <div>
                <h3 className="maintenance-feature-title">Cost & Reporting</h3>
                <p className="maintenance-feature-sub">Budget insights at a glance</p>
              </div>
            </div>

            <p className="maintenance-feature-text">
              Track all maintenance costs by property, category, and vendor. Generate reports 
              for budgeting, tax deductions, and expense analysis.
            </p>

            <div className="maintenance-feature-preview muted">
              <h4 className="preview-title">This Month's Expenses</h4>
              <div className="cost-tracking">
                <div className="cost-summary">
                  <div className="cost-item">
                    <p className="cost-label">Total Spent</p>
                    <p className="cost-value">$4,280</p>
                  </div>
                  <div className="cost-item">
                    <p className="cost-label">Vs Budget</p>
                    <p className="cost-value" style={{ color: 'var(--tm-green-icon)' }}>-12%</p>
                  </div>
                  <div className="cost-item">
                    <p className="cost-label">Work Orders</p>
                    <p className="cost-value">18</p>
                  </div>
                  <div className="cost-item">
                    <p className="cost-label">Avg. Cost</p>
                    <p className="cost-value">$238</p>
                  </div>
                </div>
                <div className="cost-chart">
                  {[65, 82, 45, 90, 58, 73, 80].map((h, i) => (
                    <div key={i} className="cost-bar" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="maintenance-center">
          <button className="maintenance-btn-primary">
            See All Features <ArrowRight />
          </button>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="maintenance-stats">
        <div className="maintenance-stats-grid">
          <div>
            <h2 className="maintenance-section-title" style={{ textAlign: 'left' }}>
              Trusted by property managers across Canada
            </h2>
            <p className="maintenance-stats-text">
              Join thousands of landlords and property managers who have streamlined their 
              maintenance operations and improved tenant satisfaction.
            </p>
            <button className="maintenance-btn-primary sm">
              Get Started Today <ArrowRight />
            </button>
          </div>

          <div className="maintenance-stats-cards">
            <div className="maintenance-stat-card orange">
              <Clock className="stat-icon orange" />
              <p className="stat-label">Resolution Time</p>
              <p className="stat-value">1.8 days</p>
              <p className="stat-note">avg. completion</p>
            </div>

            <div className="maintenance-stat-card blue">
              <TrendingUp className="stat-icon blue" />
              <p className="stat-label">Cost Savings</p>
              <p className="stat-value">32%</p>
              <p className="stat-note">on maintenance</p>
            </div>

            <div className="maintenance-stat-card green">
              <MessageSquare className="stat-icon green" />
              <p className="stat-label">Tenant Satisfaction</p>
              <p className="stat-value">96%</p>
              <p className="stat-note">positive feedback</p>
            </div>

            <div className="maintenance-stat-card purple">
              <Home className="stat-icon purple" />
              <p className="stat-label">Properties Served</p>
              <p className="stat-value">38K+</p>
              <p className="stat-note">nationwide</p>
            </div>
          </div>
        </div>
        <p className="maintenance-stats-note">Based on HouseSigma internal data from 2024</p>
      </section>

      {/* HOW IT WORKS */}
      <section className="maintenance-how">
        <h2 className="maintenance-section-title">How it works</h2>
        <p className="maintenance-how-subtitle">Simple 4-step process from request to resolution</p>

        <div className="maintenance-how-grid">
          <div className="maintenance-how-card">
            <div className="maintenance-how-number">1</div>
            <div className="maintenance-how-icon orange">
              <Phone />
            </div>
            <h3 className="maintenance-how-title">Submit Request</h3>
            <p className="maintenance-how-text">
              Tenants submit requests through the portal with photos and descriptions.
            </p>
          </div>

          <div className="maintenance-how-card">
            <div className="maintenance-how-number">2</div>
            <div className="maintenance-how-icon blue">
              <UserCheck />
            </div>
            <h3 className="maintenance-how-title">Assign Vendor</h3>
            <p className="maintenance-how-text">
              Review and assign to your preferred vendor or get competitive quotes.
            </p>
          </div>

          <div className="maintenance-how-card">
            <div className="maintenance-how-number">3</div>
            <div className="maintenance-how-icon green">
              <Wrench />
            </div>
            <h3 className="maintenance-how-title">Track Progress</h3>
            <p className="maintenance-how-text">
              Monitor work order status with real-time updates for all parties.
            </p>
          </div>

          <div className="maintenance-how-card">
            <div className="maintenance-how-number">4</div>
            <div className="maintenance-how-icon purple">
              <CheckCircle />
            </div>
            <h3 className="maintenance-how-title">Complete & Review</h3>
            <p className="maintenance-how-text">
              Mark complete, collect tenant feedback, and update maintenance records.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="maintenance-faq">
        <h2 className="maintenance-section-title">Frequently asked questions</h2>

        <div className="maintenance-faq-grid">
          {[
            {
              q: "How do tenants submit maintenance requests?",
              a: "Tenants can submit requests through their dedicated portal, available on desktop and mobile. They can add photos, descriptions, and select the category of the issue. Requests are automatically prioritized based on urgency.",
            },
            {
              q: "Can I use my own vendors?",
              a: "Absolutely! You can add your preferred vendors to the system, manage their contact information, track their performance, and assign them to work orders directly. You can also request quotes from multiple vendors for comparison.",
            },
            {
              q: "How are emergency requests handled?",
              a: "Emergency requests are flagged immediately and trigger instant notifications via email, SMS, and push notifications. You can set up auto-assignment rules for urgent issues to ensure fast response times.",
            },
            {
              q: "What reports are available?",
              a: "Generate comprehensive reports including maintenance costs by property/category, vendor performance metrics, average resolution times, seasonal trends, and expense summaries for tax purposes.",
            },
            {
              q: "Is there a mobile app for vendors?",
              a: "Yes! Vendors can access their assigned work orders through our mobile app. They can view details, upload completion photos, update status, and communicate with property managers on the go.",
            },
            {
              q: "How do tenants get updates on their requests?",
              a: "Tenants receive automatic notifications at every stage: when the request is received, when a vendor is assigned, when work begins, and when it's completed. They can also check status anytime in their portal.",
            },
          ].map((faq, index) => (
            <div key={index} className="maintenance-faq-item">
              <button className="maintenance-faq-question" onClick={() => toggleFaq(index)}>
                <span className="maintenance-faq-question-text">{faq.q}</span>
                <ChevronDown className={`maintenance-faq-arrow ${openFaq === index ? "open" : ""}`} />
              </button>
              {openFaq === index && <div className="maintenance-faq-answer">{faq.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="maintenance-cta">
        <div className="maintenance-cta-content">
          <h2 className="maintenance-cta-title">Ready to streamline maintenance?</h2>
          <p className="maintenance-cta-text">
            Join 38,000+ properties managing maintenance more efficiently with HouseSigma.
          </p>

          <div className="maintenance-email-form cta">
            <div className="maintenance-email-input-wrapper">
              <Mail className="maintenance-email-icon" />
              <input type="email" placeholder="Enter your email" />
            </div>
            <button className="maintenance-cta-btn">Start Free Trial</button>
          </div>

          <p className="maintenance-cta-note">No credit card required • Free for 30 days</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Maintenance;
