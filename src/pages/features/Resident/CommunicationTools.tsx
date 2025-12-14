import { useState } from "react";
import {
  ChevronDown,
  Mail,
  Star,
  MessageSquare,
  Send,
  Phone,
  Video,
  FileText,
  Users,
  Zap,
  Clock,
  CheckCircle,
  ArrowRight,
  Bell,
  Smartphone,
  BarChart3,
  Inbox,
  Calendar,
  Shield,
  TrendingUp,
  MessageCircle,
  AtSign,
  Hash,
} from "lucide-react";
import "@/styles/CommunicationTools.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CommunicationTools = () => {
  const [email, setEmail] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="comm-page">
      <Navbar />

      {/* HERO */}
      <section className="comm-hero">
        <div className="comm-container">
          <div className="comm-breadcrumb">
            <a href="#">Home</a>
            <span>/</span>
            <a href="#">Features</a>
            <span>/</span>
            <span className="current">Communication Tools</span>
          </div>

          <div className="comm-hero-grid">
            {/* LEFT */}
            <div>
              <div className="comm-hero-badge">
                <MessageSquare className="badge-icon" />
                Unified Communication Platform
              </div>

              <h1 className="comm-hero-title">
                Connect with clients <span className="gradient">instantly</span>
              </h1>

              <p className="comm-hero-text">
                Streamline all client communications in one place. From automated SMS reminders to team chat and video calls—manage every conversation seamlessly.
              </p>

              <div className="comm-email-form">
                <div className="comm-email-input-wrapper">
                  <Mail className="comm-email-icon" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>
                <button className="comm-email-btn">Get Started Free</button>
              </div>

              <div className="comm-rating">
                <div>
                  <div className="comm-rating-stars">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="star" />
                    ))}
                  </div>
                  <p className="comm-rating-text">
                    <span className="strong">4.8/5</span> from 4,200+ agents
                  </p>
                </div>
                <div className="comm-rating-divider"></div>
                <div>
                  <p className="comm-rating-number">850K+</p>
                  <p className="comm-rating-sub">Messages sent</p>
                </div>
              </div>
            </div>

            {/* RIGHT Message Dashboard */}
            <div className="comm-hero-card">
              <div className="comm-hero-card-header">
                <h3>Message Center</h3>
                <MessageCircle className="card-icon" />
              </div>

              <div className="comm-message-list">
                {[
                  { name: "Sarah Mitchell", message: "Are showings available this weekend?", time: "2m ago", unread: true, avatar: "SM" },
                  { name: "Team: Westside", message: "New listing just added to MLS", time: "15m ago", unread: true, avatar: "TW" },
                  { name: "David Chen", message: "Offer accepted! Next steps?", time: "1h ago", unread: false, avatar: "DC" },
                  { name: "Lisa Rodriguez", message: "Thank you for the virtual tour", time: "3h ago", unread: false, avatar: "LR" },
                ].map((msg, i) => (
                  <div key={i} className={`comm-message-item ${msg.unread ? 'unread' : ''}`}>
                    <div className="msg-avatar">{msg.avatar}</div>
                    <div className="msg-content">
                      <div className="msg-header">
                        <span className="msg-name">{msg.name}</span>
                        <span className="msg-time">{msg.time}</span>
                      </div>
                      <p className="msg-preview">{msg.message}</p>
                    </div>
                    {msg.unread && <div className="msg-dot"></div>}
                  </div>
                ))}
              </div>

              <div className="comm-hero-card-stats">
                <div className="stat-item">
                  <Send className="stat-icon" />
                  <div>
                    <p className="stat-value">247</p>
                    <p className="stat-label">Sent today</p>
                  </div>
                </div>
                <div className="stat-item">
                  <Clock className="stat-icon" />
                  <div>
                    <p className="stat-value">1.2m</p>
                    <p className="stat-label">Avg response</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="comm-why">
        <h2 className="comm-section-title">Why Agents Choose HomeNest</h2>

        <div className="comm-why-grid">
          <div className="comm-why-card">
            <div className="comm-why-icon blue">
              <MessageSquare />
            </div>
            <h3 className="comm-why-title">All Channels, One Inbox</h3>
            <p className="comm-why-text">
              SMS, email, team chat, and client messages unified. Never miss a conversation or switch between apps again.
            </p>
          </div>

          <div className="comm-why-card">
            <div className="comm-why-icon green">
              <Zap />
            </div>
            <h3 className="comm-why-title">Instant Automation</h3>
            <p className="comm-why-text">
              Smart templates, scheduled messages, and automated follow-ups. Respond faster while staying personal.
            </p>
          </div>

          <div className="comm-why-card">
            <div className="comm-why-icon orange">
              <BarChart3 />
            </div>
            <h3 className="comm-why-title">Real-Time Insights</h3>
            <p className="comm-why-text">
              Track response times, engagement rates, and team performance. Know what's working with detailed analytics.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="comm-features">
        <div className="comm-features-header">
          <h2 className="comm-section-title">Every tool you need to communicate</h2>
          <p className="comm-features-subtitle">
            Professional-grade features built for real estate teams
          </p>
        </div>

        {/* FEATURE ROW 1 */}
        <div className="comm-features-grid">
          {/* UNIFIED INBOX */}
          <div className="comm-feature-card primary">
            <div className="comm-feature-header">
              <div className="comm-feature-icon blue">
                <Inbox />
              </div>
              <div>
                <h3 className="comm-feature-title">Unified Inbox</h3>
                <p className="comm-feature-sub">Everything in one place</p>
              </div>
            </div>

            <p className="comm-feature-text">
              All client messages, team chats, and notifications in a single, organized inbox. Filter by client, property, or priority.
            </p>

            <div className="comm-feature-preview">
              <div className="inbox-filters">
                {["All Messages", "Clients", "Team", "Showings"].map((filter, i) => (
                  <button key={i} className={i === 0 ? "active" : ""}>{filter}</button>
                ))}
              </div>
              <div className="inbox-stats">
                <div className="inbox-stat">
                  <span className="stat-number">28</span>
                  <span className="stat-text">Unread</span>
                </div>
                <div className="inbox-stat">
                  <span className="stat-number">156</span>
                  <span className="stat-text">Today</span>
                </div>
                <div className="inbox-stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-text">Response rate</span>
                </div>
              </div>
            </div>
          </div>

          {/* SMS & EMAIL */}
          <div className="comm-feature-card secondary">
            <div className="comm-feature-header">
              <div className="comm-feature-icon green">
                <Smartphone />
              </div>
              <div>
                <h3 className="comm-feature-title">SMS & Email Automation</h3>
                <p className="comm-feature-sub">Reach clients instantly</p>
              </div>
            </div>

            <p className="comm-feature-text">
              Send personalized SMS and email campaigns. Schedule showing reminders, open house invites, and follow-ups automatically.
            </p>

            <div className="comm-feature-preview">
              <h4 className="preview-title">Message Templates</h4>
              <div className="template-list">
                {[
                  { name: "Showing Reminder", type: "SMS", usage: "342 sent" },
                  { name: "Open House Invite", type: "Email", usage: "189 sent" },
                  { name: "Follow-up", type: "SMS", usage: "567 sent" },
                ].map((template, i) => (
                  <div key={i} className="template-item">
                    <div className="template-info">
                      <MessageSquare className="template-icon" />
                      <div>
                        <p className="template-name">{template.name}</p>
                        <p className="template-meta">{template.type} • {template.usage}</p>
                      </div>
                    </div>
                    <button className="template-use">Use</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FEATURE ROW 2 */}
        <div className="comm-features-grid">
          {/* TEAM COLLABORATION */}
          <div className="comm-feature-card accent">
            <div className="comm-feature-header">
              <div className="comm-feature-icon orange">
                <Users />
              </div>
              <div>
                <h3 className="comm-feature-title">Team Collaboration</h3>
                <p className="comm-feature-sub">Work together seamlessly</p>
              </div>
            </div>

            <p className="comm-feature-text">
              Create team channels, assign conversations, and share updates instantly. Keep everyone aligned on deals and showings.
            </p>

            <div className="comm-feature-preview">
              <div className="team-channels">
                {[
                  { name: "Westside Listings", members: 8, active: true, icon: Hash },
                  { name: "Buyer Leads Q1", members: 5, active: false, icon: Hash },
                  { name: "Weekend Showings", members: 12, active: true, icon: Hash },
                ].map((channel, i) => (
                  <div key={i} className="channel-item">
                    <channel.icon className="channel-icon" />
                    <div className="channel-info">
                      <p className="channel-name">{channel.name}</p>
                      <p className="channel-members">{channel.members} members</p>
                    </div>
                    {channel.active && <span className="channel-badge">Active</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* VIDEO & VOICE */}
          <div className="comm-feature-card tertiary">
            <div className="comm-feature-header">
              <div className="comm-feature-icon purple">
                <Video />
              </div>
              <div>
                <h3 className="comm-feature-title">Video & Voice Calls</h3>
                <p className="comm-feature-sub">Connect face-to-face</p>
              </div>
            </div>

            <p className="comm-feature-text">
              Start video tours, voice calls, or screen sharing with one click. Record calls and share property walkthroughs with clients.
            </p>

            <div className="comm-feature-preview">
              <div className="call-history">
                {[
                  { name: "Sarah Mitchell", type: "Video", duration: "24:15", status: "Completed" },
                  { name: "Mike Johnson", type: "Voice", duration: "08:42", status: "Completed" },
                  { name: "Emma Davis", type: "Video", duration: "15:30", status: "Missed" },
                ].map((call, i) => (
                  <div key={i} className="call-item">
                    <div className="call-avatar">{call.name.charAt(0)}</div>
                    <div className="call-info">
                      <p className="call-name">{call.name}</p>
                      <p className="call-meta">{call.type} • {call.duration}</p>
                    </div>
                    <span className={`call-status ${call.status.toLowerCase()}`}>{call.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FEATURE ROW 3 - FULL WIDTH CARDS */}
        <div className="comm-features-grid">
          {/* SMART NOTIFICATIONS */}
          <div className="comm-feature-card wide">
            <div className="comm-feature-header">
              <div className="comm-feature-icon blue">
                <Bell />
              </div>
              <div>
                <h3 className="comm-feature-title">Smart Notifications</h3>
                <p className="comm-feature-sub">Never miss important updates</p>
              </div>
            </div>

            <p className="comm-feature-text">
              Customizable alerts for urgent messages, showing confirmations, and deal updates. Desktop, mobile, and email notifications.
            </p>

            <div className="comm-feature-preview">
              <div className="notification-settings">
                {[
                  { type: "New Client Message", desktop: true, mobile: true, email: false },
                  { type: "Showing Confirmed", desktop: true, mobile: true, email: true },
                  { type: "Team Mention", desktop: true, mobile: false, email: false },
                  { type: "Deal Update", desktop: true, mobile: true, email: true },
                ].map((setting, i) => (
                  <div key={i} className="notification-row">
                    <span className="notification-type">{setting.type}</span>
                    <div className="notification-toggles">
                      <div className={`toggle ${setting.desktop ? 'active' : ''}`}>
                        <Smartphone className="toggle-icon" />
                      </div>
                      <div className={`toggle ${setting.mobile ? 'active' : ''}`}>
                        <Bell className="toggle-icon" />
                      </div>
                      <div className={`toggle ${setting.email ? 'active' : ''}`}>
                        <Mail className="toggle-icon" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* DOCUMENT SHARING */}
          <div className="comm-feature-card wide">
            <div className="comm-feature-header">
              <div className="comm-feature-icon green">
                <FileText />
              </div>
              <div>
                <h3 className="comm-feature-title">Secure Document Sharing</h3>
                <p className="comm-feature-sub">Share files instantly</p>
              </div>
            </div>

            <p className="comm-feature-text">
              Send contracts, disclosures, and property documents directly in conversations. Track opens and get instant signatures.
            </p>

            <div className="comm-feature-preview">
              <div className="document-list">
                {[
                  { name: "Purchase Agreement.pdf", size: "2.4 MB", status: "Signed", date: "Today" },
                  { name: "Property Disclosure.pdf", size: "1.8 MB", status: "Viewed", date: "Yesterday" },
                  { name: "Inspection Report.pdf", size: "5.2 MB", status: "Pending", date: "2 days ago" },
                ].map((doc, i) => (
                  <div key={i} className="document-item">
                    <FileText className="document-icon" />
                    <div className="document-info">
                      <p className="document-name">{doc.name}</p>
                      <p className="document-meta">{doc.size} • {doc.date}</p>
                    </div>
                    <span className={`document-status ${doc.status.toLowerCase()}`}>{doc.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="comm-center">
          <button className="comm-btn-primary">
            Explore All Features <ArrowRight />
          </button>
        </div>
      </section>

      {/* STATS */}
      <section className="comm-stats">
        <div className="comm-stats-grid">
          <div>
            <h2 className="comm-section-title">Trusted by top real estate teams</h2>
            <p className="comm-stats-text">
              Join thousands of agents who closed more deals with better communication.
            </p>
            <button className="comm-btn-primary sm">
              Start Free Trial <ArrowRight />
            </button>
          </div>

          <div className="comm-stats-cards">
            <div className="comm-stat-card blue">
              <Clock className="stat-icon blue" />
              <p className="stat-label">Average Response Time</p>
              <p className="stat-value">1.2min</p>
              <p className="stat-note">vs 2.5hrs industry avg</p>
            </div>

            <div className="comm-stat-card green">
              <TrendingUp className="stat-icon green" />
              <p className="stat-label">Client Satisfaction</p>
              <p className="stat-value">96%</p>
              <p className="stat-note">with instant replies</p>
            </div>

            <div className="comm-stat-card orange">
              <MessageSquare className="stat-icon orange" />
              <p className="stat-label">Daily Messages</p>
              <p className="stat-value">850K+</p>
              <p className="stat-note">across platform</p>
            </div>

            <div className="comm-stat-card purple">
              <CheckCircle className="stat-icon purple" />
              <p className="stat-label">Deals Closed Faster</p>
              <p className="stat-value">34%</p>
              <p className="stat-note">with our tools</p>
            </div>
          </div>
        </div>
        <p className="comm-stats-note">Based on HomeNest user data from 2024</p>
      </section>

      {/* HOW IT WORKS */}
      <section className="comm-how">
        <h2 className="comm-section-title">How it works</h2>
        <p className="comm-how-subtitle">Get started in minutes, not hours</p>

        <div className="comm-how-grid">
          <div className="comm-how-card">
            <div className="comm-how-number">1</div>
            <div className="comm-how-icon blue">
              <AtSign />
            </div>
            <h3 className="comm-how-title">Connect Your Channels</h3>
            <p className="comm-how-text">
              Link your business phone, email, and create team channels. Everything syncs automatically in one unified inbox.
            </p>
          </div>

          <div className="comm-how-card">
            <div className="comm-how-number">2</div>
            <div className="comm-how-icon green">
              <MessageSquare />
            </div>
            <h3 className="comm-how-title">Set Up Automation</h3>
            <p className="comm-how-text">
              Create message templates, schedule reminders, and configure smart notifications. Let the system handle routine tasks.
            </p>
          </div>

          <div className="comm-how-card">
            <div className="comm-how-number">3</div>
            <div className="comm-how-icon orange">
              <TrendingUp />
            </div>
            <h3 className="comm-how-title">Communicate & Close</h3>
            <p className="comm-how-text">
              Start conversations, share documents, and track engagement. Watch your response times drop and deals close faster.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="comm-faq">
        <h2 className="comm-section-title center">Frequently asked questions</h2>

        <div className="comm-faq-grid">
          {[
            {
              q: "Can I use my existing phone number?",
              a: "Yes! You can port your existing business number or get a new local/toll-free number. All calls and texts route through the platform while keeping your number.",
            },
            {
              q: "How does team collaboration work?",
              a: "Create unlimited team channels, assign conversations to team members, and share updates instantly. Everyone stays in sync with real-time notifications and shared inboxes.",
            },
            {
              q: "Is client data secure?",
              a: "Absolutely. We use bank-level encryption, comply with real estate data regulations, and never share your client information. All messages are stored securely with automatic backups.",
            },
            {
              q: "Can I send automated messages?",
              a: "Yes! Create custom templates for showing reminders, follow-ups, and marketing campaigns. Schedule messages in advance and set up automated responses for common questions.",
            },
            {
              q: "What about video calls and screen sharing?",
              a: "Built-in HD video calling with screen sharing lets you conduct virtual tours and consultations. No additional software needed—works directly in your browser and mobile app.",
            },
            {
              q: "How much does it cost?",
              a: "Plans start at $29/month per user with unlimited messaging. Volume discounts available for teams. No setup fees, and you can cancel anytime.",
            },
          ].map((faq, index) => (
            <div key={index} className="comm-faq-item">
              <button className="comm-faq-question" onClick={() => toggleFaq(index)}>
                <span className="comm-faq-question-text">{faq.q}</span>
                <ChevronDown className={`comm-faq-arrow ${openFaq === index ? "open" : ""}`} />
              </button>
              {openFaq === index && <div className="comm-faq-answer">{faq.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="comm-cta">
        <div className="comm-cta-content">
          <h2 className="comm-cta-title">Ready to transform your communication?</h2>
          <p className="comm-cta-text">
            Join 4,200+ agents communicating better and closing more deals.
          </p>

          <div className="comm-email-form cta">
            <div className="comm-email-input-wrapper">
              <Mail className="comm-email-icon" />
              <input type="email" placeholder="Enter your email" />
            </div>
            <button className="comm-cta-btn">Get Started Free</button>
          </div>

          <p className="comm-cta-note">14-day free trial • No credit card required • Cancel anytime</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommunicationTools;
