import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Calculator,
  Key,
  Settings,
  Users,
  BookOpen,
  Building,
  Landmark,
  Home,
  Heart,
  Info,
  Newspaper,
  HelpCircle,
  Phone,
  Menu,
  X,
  RefreshCw,
  FileText,
  Globe,
  ListPlus,
  FileSignature,
  Search,
  UserCircle,
  Wrench,
  Smartphone,
  Building2,
  Shield,
  CreditCard,
  MessageSquare,
  Umbrella,
  ChevronRight,
  MapPin
} from "lucide-react";

import { Button } from "@/components/ui/button";
import "@/styles/Navbar.css";
import { useAuthModal } from "@/context/AuthModalContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  const { openAuthModal } = useAuthModal();

  const toggleMobileDropdown = (menu: string) => {
    setOpenMobileDropdown(openMobileDropdown === menu ? null : menu);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
    
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [mobileMenuOpen]);

  /* ================= FEATURES MENU ================= */

  const featuresMenu = {
    accounting: [
      {
        name: "Bookkeeping",
        icon: BookOpen,
        path: "/features/bookkeeping"
      },
      {
        name: "Bank Sync",
        icon: RefreshCw,
        path: "/features/bank-sync"
      },
      {
        name: "Financial Reports",
        icon: FileText,
        path: "/features/financial-reports"
      },
      {
        name: "QuickBooks Integration",
        icon: Globe,
        path: "/features/quickbooks-integration"
      }
    ],

    leasing: [
      {
        name: "Listings & Advertising",
        icon: ListPlus,
        path: "/features/leasing/advertise-listings"
      },
      {
        name: "Applications & eSign",
        icon: FileSignature,
        path: "/features/leasing/applications-esign"
      },
      {
        name: "Tenant Screening",
        icon: Search,
        path: "/features/leasing/tenant-screening"
      },
      {
        name: "CRM",
        icon: UserCircle,
        path: "/features/leasing/crm"
      }
    ],

    operations: [
      { name: "Maintenance", icon: Wrench, path: "/features/maintenance" },
      { name: "Mobile App", icon: Smartphone, path: "/features/mobile-app" },
      { name: "Owner Portal", icon: Building2, path: "/features/owner-portal" }
    ],

    resident: [
      { name: "Rent Collection", icon: CreditCard, path: "/features/rent-collection" },
      { name: "Tenant Management", icon: Users, path: "/features/tenant-management" },
      { name: "Communication Tools", icon: MessageSquare, path: "/features/communication" },
      { name: "Renters Insurance", icon: Umbrella, path: "/features/insurance" }
    ]
  };

  /* ================= OTHER MENUS ================= */

  const portfolioMenu = [
    { name: "Residential", icon: Home, path: "/portfolio/residential" },
    { name: "Commercial", icon: Building, path: "/portfolio/commercial" },
    { name: "Community Associations", icon: Landmark, path: "/portfolio/community" },
    { name: "Affordable Housing", icon: Heart, path: "/portfolio/affordable" }
  ];

  const homesMenu = [
    { name: "Ontario", icon: MapPin, path: "/homes/ontario" },
    { name: "Alberta", icon: MapPin, path: "/homes/alberta" },
    { name: "British Columbia", icon: MapPin, path: "/homes/british-columbia" }
  ];

  const whyMenu = [
    { name: "About Us", icon: Info, path: "/about" },
    { name: "Press & Media", icon: Newspaper, path: "/press" },
    { name: "FAQ", icon: HelpCircle, path: "/faq" },
    { name: "Contact Us", icon: Phone, path: "/contact" }
  ];

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">

        {/* LOGO */}
        <Link to="/" className="navbar-logo">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 9.5V22h7v-7h6v7h7V9.5L12 2z" />
          </svg>
          HomeNest
        </Link>

        {/* DESKTOP NAV */}
        <nav className="navbar-menu">

          {/* Homes */}
          <div className="navbar-item">
            <button className="navbar-link">
              Homes <ChevronDown />
            </button>
            <div className="dropdown-menu">
              {homesMenu.map(item => (
                <Link key={item.path} to={item.path} className="dropdown-link">
                  <item.icon /> {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="navbar-item">
            <button className="navbar-link">
              Features <ChevronDown />
            </button>

            <div className="mega-menu">
              <div className="mega-menu-grid">

                <div className="mega-menu-column">
                  <h3><Calculator /> ACCOUNTING</h3>
                  {featuresMenu.accounting.map(item => (
                    <Link key={item.path} to={item.path} className="mega-menu-link">
                      <item.icon /> {item.name}
                    </Link>
                  ))}
                </div>

                <div className="mega-menu-column">
                  <h3><Key /> LEASING</h3>
                  {featuresMenu.leasing.map(item => (
                    <Link key={item.path} to={item.path} className="mega-menu-link">
                      <item.icon /> {item.name}
                    </Link>
                  ))}
                </div>

                <div className="mega-menu-column">
                  <h3><Settings /> OPERATIONS</h3>
                  {featuresMenu.operations.map(item => (
                    <Link key={item.path} to={item.path} className="mega-menu-link">
                      <item.icon /> {item.name}
                    </Link>
                  ))}
                </div>

                <div className="mega-menu-column">
                  <h3><Users /> RESIDENT EXPERIENCE</h3>
                  {featuresMenu.resident.map(item => (
                    <Link key={item.path} to={item.path} className="mega-menu-link">
                      <item.icon /> {item.name}
                    </Link>
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* Portfolio Types */}
          <div className="navbar-item">
            <button className="navbar-link">
              Portfolio Types <ChevronDown />
            </button>
            <div className="dropdown-menu">
              {portfolioMenu.map(item => (
                <Link key={item.path} to={item.path} className="dropdown-link">
                  <item.icon /> {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Why HomeNest */}
          <div className="navbar-item">
            <button className="navbar-link">
              Why HomeNest <ChevronDown />
            </button>
            <div className="dropdown-menu">
              {whyMenu.map(item => (
                <Link key={item.path} to={item.path} className="dropdown-link">
                  <item.icon /> {item.name}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/blog" className="navbar-link">Blog</Link>
          <Link to="/market-trends" className="navbar-link">Market Trends</Link>
        </nav>

        {/* LOGIN */}
        <div className="navbar-actions">
          <Button onClick={openAuthModal} className="login-btn-blue">
            Login
          </Button>
        </div>

        {/* MOBILE ICON */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100vh - 64px)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mobile-menu"
          >
            <div className="mobile-menu-content">
              
              {/* Homes Dropdown */}
              <div className="mobile-dropdown">
                <button
                  className="mobile-dropdown-trigger"
                  onClick={() => toggleMobileDropdown("homes")}
                >
                  Homes
                  <ChevronRight className={`mobile-dropdown-icon ${openMobileDropdown === "homes" ? "open" : ""}`} />
                </button>

                <AnimatePresence>
                  {openMobileDropdown === "homes" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mobile-dropdown-content"
                    >
                      {homesMenu.map(item => (
                        <Link 
                          key={item.path} 
                          to={item.path} 
                          className="mobile-submenu-link"
                          onClick={handleMobileLinkClick}
                        >
                          <item.icon size={18} /> {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Features Dropdown */}
              <div className="mobile-dropdown">
                <button
                  className="mobile-dropdown-trigger"
                  onClick={() => toggleMobileDropdown("features")}
                >
                  Features
                  <ChevronRight className={`mobile-dropdown-icon ${openMobileDropdown === "features" ? "open" : ""}`} />
                </button>
                
                <AnimatePresence>
                  {openMobileDropdown === "features" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mobile-dropdown-content"
                    >
                      {/* Accounting Section */}
                      <h4 className="mobile-submenu-category">
                        <Calculator size={14} /> ACCOUNTING
                      </h4>
                      {featuresMenu.accounting.map((item) => (
                        <Link 
                          key={item.path} 
                          to={item.path} 
                          className="mobile-submenu-link" 
                          onClick={handleMobileLinkClick}
                        >
                          <item.icon size={18} /> {item.name}
                        </Link>
                      ))}

                      {/* Leasing Section */}
                      <h4 className="mobile-submenu-category">
                        <Key size={14} /> LEASING
                      </h4>
                      {featuresMenu.leasing.map((item) => (
                        <Link 
                          key={item.path} 
                          to={item.path} 
                          className="mobile-submenu-link" 
                          onClick={handleMobileLinkClick}
                        >
                          <item.icon size={18} /> {item.name}
                        </Link>
                      ))}

                      {/* Operations Section */}
                      <h4 className="mobile-submenu-category">
                        <Settings size={14} /> OPERATIONS
                      </h4>
                      {featuresMenu.operations.map((item) => (
                        <Link 
                          key={item.path} 
                          to={item.path} 
                          className="mobile-submenu-link" 
                          onClick={handleMobileLinkClick}
                        >
                          <item.icon size={18} /> {item.name}
                        </Link>
                      ))}

                      {/* Resident Experience Section */}
                      <h4 className="mobile-submenu-category">
                        <Users size={14} /> RESIDENT EXPERIENCE
                      </h4>
                      {featuresMenu.resident.map((item) => (
                        <Link 
                          key={item.path} 
                          to={item.path} 
                          className="mobile-submenu-link" 
                          onClick={handleMobileLinkClick}
                        >
                          <item.icon size={18} /> {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Portfolio Types Dropdown */}
              <div className="mobile-dropdown">
                <button 
                  className="mobile-dropdown-trigger"
                  onClick={() => toggleMobileDropdown('portfolio')}
                >
                  Portfolio Types
                  <ChevronRight className={`mobile-dropdown-icon ${openMobileDropdown === 'portfolio' ? 'open' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {openMobileDropdown === 'portfolio' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mobile-dropdown-content"
                    >
                      {portfolioMenu.map((item) => (
                        <Link 
                          key={item.path} 
                          to={item.path} 
                          className="mobile-submenu-link" 
                          onClick={handleMobileLinkClick}
                        >
                          <item.icon size={18} /> {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Why HomeNest Dropdown */}
              <div className="mobile-dropdown">
                <button 
                  className="mobile-dropdown-trigger"
                  onClick={() => toggleMobileDropdown('why')}
                >
                  Why HomeNest
                  <ChevronRight className={`mobile-dropdown-icon ${openMobileDropdown === 'why' ? 'open' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {openMobileDropdown === 'why' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mobile-dropdown-content"
                    >
                      {whyMenu.map((item) => (
                        <Link 
                          key={item.path} 
                          to={item.path} 
                          className="mobile-submenu-link" 
                          onClick={handleMobileLinkClick}
                        >
                          <item.icon size={18} /> {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Direct Links */}
              <Link 
                to="/blog" 
                className="mobile-link" 
                onClick={handleMobileLinkClick}
              >
                Blog
              </Link>
              
              <Link 
                to="/market-trends" 
                className="mobile-link" 
                onClick={handleMobileLinkClick}
              >
                Market Trends
              </Link>
              
              {/* Login Button */}
              <Button 
                onClick={() => {
                  openAuthModal();
                  handleMobileLinkClick();
                }} 
                className="login-btn-blue mobile-login-btn"
              >
                Login
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;