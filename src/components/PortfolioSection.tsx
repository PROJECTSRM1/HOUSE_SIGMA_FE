import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Building, Landmark, Heart, Info, Newspaper, TrendingUp, HelpCircle, ChevronRight } from 'lucide-react';
import '@/styles/Portfolio.css';

const portfolioTypes = [
  {
    title: 'Residential',
    icon: Home,
    items: ['Single-Family Homes', 'Multi-Family Units', 'Apartments'],
  },
  {
    title: 'Commercial',
    icon: Building,
    items: ['Office Buildings', 'Retail Spaces', 'Industrial Properties'],
  },
];

const portfolioBottom = [
  { title: 'Community Associations', icon: Landmark },
  { title: 'Affordable Housing', icon: Heart },
];

const whyChooseItems = [
  {
    title: 'About Us',
    icon: Info,
    description: 'Learn more about our mission and values.',
    link: '/about',
  },
  {
    title: 'Press & Media',
    icon: Newspaper,
    description: 'Read the latest news & media coverage.',
    link: '/press',
  },
  {
    title: 'Market Trends',
    icon: TrendingUp,
    description: 'Access insights and analysis on the real estate market.',
    link: '/market-trends',
  },
  {
    title: 'FAQ',
    icon: HelpCircle,
    description: 'Find answers to common property management questions.',
    link: '/faq',
  },
];

const PortfolioSection = () => {
  return (
    <section className="portfolio">
      <div className="portfolio-container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="portfolio-section"
        >
          <h2 className="portfolio-title">Portfolio Types</h2>
          <p className="portfolio-description">
            House Sigma supports a variety of real estate portfolios:
          </p>

          <div className="portfolio-grid">
            {portfolioTypes.map((type, index) => (
              <div key={index} className="portfolio-item">
                <div className="portfolio-item-header">
                  <type.icon />
                  {type.title}
                </div>
                <ul className="portfolio-item-list">
                  {type.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="portfolio-bottom">
            {portfolioBottom.map((item, index) => (
              <div key={index} className="portfolio-bottom-item">
                <item.icon />
                {item.title}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="why-choose"
        >
          <h3 className="why-choose-title">Why Choose House Sigma</h3>
          
          <div className="why-choose-grid">
            {whyChooseItems.map((item, index) => (
              <Link key={index} to={item.link} className="why-choose-item">
                <div className="why-choose-item-header">
                  <item.icon />
                  {item.title}
                </div>
                <p>{item.description}</p>
              </Link>
            ))}
          </div>

          <Link to="/contact" className="why-choose-contact">
            Contact Us <ChevronRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
