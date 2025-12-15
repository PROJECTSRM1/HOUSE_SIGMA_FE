import React, { useState } from "react";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { Link } from "react-router-dom";
import {
  Play,
  ChevronDown,
  Building2,
  ShieldCheck,
  Zap,
  FileSignature,
  CreditCard,
  Calculator,
  Home,
  Settings,
  Wallet,
  Sparkles,
  Clock,
  CheckCircle,
  TrendingUp,
  FileCheck,
  Users,
  ArrowRight,
  Wrench,
  ListPlus,
  Shield
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/ApplicationsEsign.css";
import { AnimatePresence, motion } from "framer-motion";

const ApplicationsEsign = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const whyCards = [
    {
      icon: <Building2 size={28} />,
      iconClass: "green",
      title: "Surprisingly simple",
      text: "Everything from applying to signing happens in one flow. No switching between tools or chasing paperwork."
    },
    {
      icon: <ShieldCheck size={28} />,
      iconClass: "blue",
      title: "Secure & trusted",
      text: "Collect legally binding eSignatures and payments securely. Your data is encrypted and protected."
    },
    {
      icon: <Zap size={28} />,
      iconClass: "purple",
      title: "Built for growth",
      text: "Whether you manage 5 or 500 units, handle applications at scale with zero bottlenecks."
    }
  ];

  const featureCards = [
    {
      color: "pink",
      title: "eSignatures & templates",
      text: "Upload your lease templates and get them signed digitally. No printing, scanning, or mailing required.",
      image: "/assets/feature-esign.png"
    },
    {
      color: "blue",
      title: "Application fees",
      text: "Set and collect application fees easily with secure online payments. Funds go directly to your account.",
      image: "/assets/feature-fees.png"
    },
    {
      color: "blue",
      title: "Full visibility",
      text: "Track every applicant from start to finish. Know exactly where each application stands at all times.",
      image: "/assets/feature-visibility.png"
    },
    {
      color: "green",
      title: "Avoid human error",
      text: "Remove manual data entry and paperwork. Keep everything digital, organized, and error-free.",
      image: "/assets/feature-automation.png"
    }
  ];

  const faqData = [
  {
    q: "What are eSignatures and online rental applications?",
    a: "Online rental applications allow landlords and property managers to collect tenant information digitally. Prospective tenants can complete applications, sign documents electronically, and submit fees securely from any device."
  },
  {
    q: "What are the benefits of using online rental applications?",
    a: "Online applications speed up the leasing process, reduce paperwork, and improve the applicant experience. They help landlords quickly review, compare, and approve qualified tenants."
  },
  {
    q: "Do tenants need to complete applications in one sitting?",
    a: "No. Tenants can save their progress and return later to complete their application, making the process more flexible and convenient."
  },
  {
    q: "How do I track where applicants are in the process?",
    a: "You get full visibility into each application’s status, allowing you to see who has started, submitted, or completed required steps in real time."
  },
  {
    q: "Are eSignatures legally binding?",
    a: "Yes. eSignatures collected through the platform are legally binding and comply with industry-standard security and authentication practices."
  },
  {
    q: "Can I collect application fees online?",
    a: "Yes. You can securely collect application fees online, and payments are processed safely without requiring manual handling or follow-ups."
  }
];


  const exploreLinks = [
    { icon: <Calculator size={20} />, label: "Accounting", href: "/features/accounting", highlighted: false },
    { icon: <Home size={20} />, label: "Leasing", href: "/features/leasing", highlighted: false },
    { icon: <FileSignature size={20} />, label: "Applications & eSign", href: "/features/leasing/applications-esign", highlighted: true },
    { icon: <Settings size={20} />, label: "Operations", href: "/features/operations", highlighted: false },
    { icon: <Wallet size={20} />, label: "Rent Collection", href: "/features/rent-collection", highlighted: false },
    { icon: <Sparkles size={20} />, label: "AI Assistant", href: "/features/ai-assistant", highlighted: false }
  ];

  const resources = [
    {
      image: "/assets/resource-1.png",
      tag: "Guide",
      title: "Maintenance Law: Keeping Your Rental Property Safe"
    },
    {
      image: "/assets/resource-2.png",
      tag: "Blog",
      title: "The Complete Lease Agreement Writing and Signing Process"
    },
    {
      image: "/assets/resource-3.png",
      tag: "Ebook",
      title: "Rental Application Essentials for Landlords"
    }
  ];

  const testimonials = [
    {
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop",
      quote: "We can charge application fees and see them come through in our bottom line.",
      author: "Andrew Comeens",
      role: "Property Manager"
    }
  ];

  function setIsAuthModalOpen(arg0: boolean): void {
    throw new Error("Function not implemented.");
  }
  const toggleFaq = (index: number) => {
  setOpenFaq(prev => (prev === index ? null : index));
};


  return (
    <div className="es-page">
      <Navbar />

      {/* HERO */}
      <section className="es-hero">
        <div className="es-container">
          <div className="es-hero-grid">
            <div className="es-hero-content">
              <h1>Turn applications into signed leases fast</h1>
              <p>
                From accepting applications to approving tenants and sending leases for
                eSignature — it all happens in one place.
              </p>

              <div className="es-email-form">
                <input type="email" placeholder="Your Email" />
                <button>See It In Action</button>
              </div>

              <div className="list-rating">
  <span className="list-rating-text">Rated 4.8+ out of 5</span>

  <div className="list-stars" aria-hidden>
    <span>★</span>
    <span>★</span>
    <span>★</span>
    <span>★</span>
    <span>☆</span>
  </div>

  <div className="list-capterra">
    Based on 700+ reviews on <strong>Capterra</strong>
  </div>
</div>

            </div>

            <div className="es-hero-image">
              <img src="/assets/hero-dashboard.png" alt="Dashboard" />
              <div className="es-play-btn">
                <Play size={28} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
       <section className="list-why">
  <div className="list-container">
    <h2>
      Why HomeNest
    </h2>

    <div className="list-why-grid">
      <div className="list-why-card">
        <div className="list-why-icon blue">
          <Zap size={28} />
        </div>
        <h3>Surprisingly simple</h3>
        <p>
          Run comprehensive tenant screenings in just a few clicks.
          No complex setup or training required.
        </p>
      </div>

      <div className="list-why-card">
        <div className="list-why-icon pink">
          <Shield size={28} />
        </div>
        <h3>Secure & trusted</h3>
        <p>
          Bank-level encryption protects all sensitive applicant data.
          FCRA compliant screening reports.
        </p>
      </div>

      <div className="list-why-card">
        <div className="list-why-icon teal">
          <TrendingUp size={28} />
        </div>
        <h3>Built for growth</h3>
        <p>
          Whether you manage 10 units or 10,000,
          our platform scales with your portfolio seamlessly.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* FEATURES */}
       {/* FEATURES */}
    {/* FEATURES */}
<section className="es-features">
  <div className="es-container">

    {/* HEADER */}
    <div className="es-features-header">
      <h2>Move faster from application to leasing</h2>
      <p>Accelerate your leasing cycle and reduce friction for prospects, leading to higher conversion rates.</p>
    </div>

    {/* GRID */}
    <div className="es-features-grid">
      {featureCards.map((card, i) => (
        <div className={`es-feature-card ${card.color}`} key={i}>
          <img src={card.image} alt={card.title} />

          <h3>{card.title}</h3>
          <p>{card.text}</p>
        </div>
      ))}
    </div>

    {/* CTA */}
    <div className="es-features-cta">
      <button className="list-btn">
        See It In Action <ArrowRight size={16} />
      </button>
    </div>
       
  </div>
</section>

      {/* STATS */}
         <section className="list-stats-section">
                <div className="list-container">
                  <div className="list-stats-content">
                    <div className="list-stats-text">
                      <h2>The HomeNest effect</h2>
                      <p>Delivering the features you need with the results you've been waiting for. Now that's smarter property management.</p>
                      <button className="list-btn" onClick={() => setIsAuthModalOpen(true)}>
                        See It In Action <ArrowRight size={16} />
                      </button>
                    </div>
        
                    <div className="list-stats-grid">
                      <div className="list-stat-card blue">
                        <CheckCircle size={28} color="#2f82ff" />
                        <span>On-Time Payments</span>
                        <strong>88%</strong>
                      </div>
                      <div className="list-stat-card orange">
                        <Clock size={28} color="#ff8a30" />
                        <span>Time Saved</span>
                        <strong>23hrs/mo</strong>
                      </div>
                      <div className="list-stat-card green">
                        <TrendingUp size={28} color="#0fa783" />
                        <span>Increased Occupancy</span>
                        <strong>96%</strong>
                      </div>
                      <div className="list-stat-card purple">
                        <Users size={28} color="#8d4cff" />
                        <span>Tenant Requests Handled</span>
                        <strong>Over 50%</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

      {/* TESTIMONIAL */}
      <section className="list-testimonial">
        <div className="list-container">
          <h2>Hear from our customers</h2>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* FAQ */}
       <section className="list-faq">
        <div className="list-container">
          <h2>Your questions answered</h2>

          <div className="list-faq-grid">
            {faqData.map((faq, i) => (
              <div className="list-faq-item" key={i}>
                <div className="list-faq-question" onClick={() => toggleFaq(i)}>
                  <h4>{faq.q}</h4>
                  <span className={`faq-arrow ${openFaq === i ? "open" : ""}`}>⌃</span>
                </div>

                <AnimatePresence>
                  {openFaq === i && (
                    <motion.p
                      className="list-faq-answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      {faq.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLORE */}
       <section className="list-explore">
        <div className="list-container">
          <div className="list-explore-header">
            <h2>Explore more features</h2>
            <p>Discover additional tools and features that can streamline your property management workflow.</p>
          </div>

          <div className="list-explore-grid">
            <Link to="/features/accounting" className="list-explore-card">
              <div className="list-explore-icon blue"><CheckCircle size={22} /></div>
              <span>Accounting</span>
            </Link>

            <Link to="/features/leasing" className="list-explore-card">
              <div className="list-explore-icon teal"><ListPlus size={22} /></div>
              <span>Leasing</span>
            </Link>

            <Link to="/features/resident-experience" className="list-explore-card">
              <div className="list-explore-icon purple"><FileSignature size={22} /></div>
              <span>Resident Experience</span>
            </Link>

            <Link to="/features/operations" className="list-explore-card">
              <div className="list-explore-icon orange"><Wrench size={22} /></div>
              <span>Operations</span>
            </Link>

            <Link to="/features/rent-collection" className="list-explore-card">
              <div className="list-explore-icon teal"><CreditCard size={22} /></div>
              <span>Rent Collection</span>
            </Link>

            <Link to="/features/ai-assistant" className="list-explore-card highlighted">
              <div className="list-explore-icon purple"><Sparkles size={22} /></div>
              <span>AI Assistant</span>
            </Link>
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      {/* RESOURCES */}
    {/* RESOURCES */}
<section className="es-resources">
  <div className="es-container">

    <div className="es-resources-header">
      <h2>Resources & learning materials</h2>
      <p>
        Bring your entire rental portfolio under one roof so you can move faster and manage
        every property with the support you need to stay organized and grow.
      </p>
    </div>

    <div className="es-resources-grid">
      {resources.map((r, i) => (
        <div className="es-resource-card" key={i}>
          <img src={r.image} alt={r.title} />

          <div className="es-resource-body">
            <span className="es-resource-tag">{r.tag}</span>
            <h3>{r.title}</h3>
            
          </div>
        </div>
      ))}
    </div>

  </div>
</section>


      {/* FOOTER CTA */}
        <section className="list-footer-cta">
        <div className="list-container">
          <h3>Serious about property management?</h3>
          <p>
            Save more time. Manage more units. Unlock more growth.
            <br />
            Choose HomeNest's property management software.
          </p>

          <div className="footer-cta-form">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="footer-cta-input"
            />
            <button className="list-btn" onClick={() => setIsAuthModalOpen(true)}>
              See It In Action
            </button>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default ApplicationsEsign;
