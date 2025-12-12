import { Home, Facebook, Twitter, Linkedin, Smartphone } from "lucide-react";
import "../styles/Footer.css";
import appStoreImg from "/assets/apple-appstore.png";
import googlePlayImg from "/assets/google-play.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content">

          {/* Brand Column */}
          <div className="brandColumn">
            <div className="logo">

              <span className="brandName">HouseSigma</span>
            </div>

            <p className="brandDescription">
              HouseSigma is a leading technology platform that utilizes artificial
              intelligence technology to estimate Canadian home values in real time.
            </p>

            <div className="socialIcons">
              <button className="socialIcon">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="socialIcon">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="socialIcon">
                <Linkedin className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Sitemap Column */}
          <div className="linkColumn">
            <h3>Sitemaps</h3>
            <div className="linkList">
              <a href="#" className="link">Ontario Sitemap</a>
              <a href="#" className="link">Alberta Sitemap</a>
              <a href="#" className="link">BC Sitemap</a>
            </div>
          </div>

          {/* Company Column */}
          <div className="linkColumn">
            <h3>Company</h3>
            <div className="linkList">
              <a href="#" className="link">About Us</a>
              <a href="#" className="link">Recently Sold Listings</a>
              <a href="#" className="link">Market Trends</a>
              <a href="#" className="link">Careers</a>
            </div>
          </div>

          {/* Support Column */}
          <div className="linkColumn">
            <h3>Support</h3>
            <div className="linkList">
              <a href="#" className="link">FAQs</a>
              <a href="#" className="link">Feedback</a>
              <a href="#" className="link">Privacy & Security</a>
              <a href="#" className="link">Terms & Conditions</a>
            </div>
          </div>

          {/* Language + App Store Column */}
          <div className="languageColumn">
            <div className="languageToggle">
              <button className="langButton">English</button>
              <button className="langButton">中文</button>
            </div>

            <div className="appButtons">
              <img
                src={appStoreImg}
                alt="Download on the App Store"
                className="storeImg"
              />
              <img
                src={googlePlayImg}
                alt="Get it on Google Play"
                className="storeImg"
              />
            </div>
          </div>
        </div>

        <div className="copyright">
          © COPYRIGHT 2025 BY RM1 Coders Hub INC. BROKERAGE ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
};

export default Footer;
