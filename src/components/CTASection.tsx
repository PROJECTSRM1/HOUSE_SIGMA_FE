import { useState } from "react";
import { ArrowRight, Mail, X, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import "@/styles/CTA.css";

const CTASection = () => {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleGetStarted = () => {
    if (email.trim()) {
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setEmail("");
  };

  return (
    <>
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">
            Ready to simplify your property maintenance?
          </h2>

          <p className="cta-subtext">
            Join thousands of property managers who've streamlined their 
            maintenance operations with House Sigma.
          </p>

          <div className="cta-input-group">
            <div className="cta-input-wrapper">
              <Mail className="cta-mail-icon" />
              <Input
                type="email"
                placeholder="Enter your email"
                className="cta-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <Button 
              variant="accent" 
              size="lg" 
              className="cta-button"
              onClick={handleGetStarted}
            >
              Get Started
              <ArrowRight className="cta-arrow" />
            </Button>
          </div>

          <p className="cta-footnote">
            Free 14-day trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-card" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>
              <X />
            </button>
            
            <div className="popup-content">
              <div className="popup-icon">
                <CheckCircle />
              </div>
              
              <h3 className="popup-title">Welcome to HomeNest!</h3>
              
              <p className="popup-message">
                Thank you for joining us.  <strong>{email}</strong>
              </p>
              
              <p className="popup-subtitle">
                Get ready to streamline your property management with our powerful tools.
              </p>
              
              <Button 
                className="popup-button"
                onClick={closePopup}
              >
                Get Started
                <ArrowRight className="cta-arrow" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CTASection;