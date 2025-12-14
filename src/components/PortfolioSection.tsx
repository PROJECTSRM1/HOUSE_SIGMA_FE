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
  {
    title: 'Community Associations',
    icon: Landmark,
    items: ['HOA Management', 'Condo Associations', 'Property Oversight'],
  },
  {
    title: 'Affordable Housing',
    icon: Heart,
    items: ['Low-Income Housing', 'Subsidized Units', 'Social Housing'],
  },
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
        {/* Left Section - Portfolio Types */}
        <div className="portfolio-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="portfolio-title">Portfolio Types</h2>
          </motion.div>

          <motion.p
            className="portfolio-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Home Nest supports a variety of real estate portfolios:
          </motion.p>

          {/* Portfolio Type Cards - 2 per row, 4 total */}
          <div className="portfolio-cards-grid">
            {portfolioTypes.map((type, index) => (
              <motion.div
                key={index}
                className="portfolio-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="portfolio-card-header">
                  <type.icon />
                  <span>{type.title}</span>
                </div>

                <ul className="portfolio-card-list">
                  {type.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Section - Why Choose */}
        <motion.div
          className="why-choose"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="why-choose-title">Why Choose Home Nest</h2>
          
          <div className="why-choose-grid">
            {whyChooseItems.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="why-choose-item"
              >
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