import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import "@/styles/CTA.css";


const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-inner">

          <h2 className="cta-title">
            Ready to simplify your property maintenance?
          </h2>

          <p className="cta-subtext">
            Join thousands of property managers who’ve streamlined their 
            maintenance operations with House Sigma.
          </p>

          <div className="cta-input-group">
            <div className="cta-input-wrapper">
              <Mail className="cta-mail-icon" />
              <Input
                type="email"
                placeholder="Enter your email"
                className="cta-input"
              />
            </div>

            <Button variant="accent" size="lg" className="cta-button">
              Get Started
              <ArrowRight className="cta-arrow" />
            </Button>
          </div>

          <p className="cta-footnote">
            Free 14-day trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
