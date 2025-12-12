import { motion } from 'framer-motion';
import { Calculator, Key, Settings, Users } from 'lucide-react';
import '@/styles/Features.css';

const features = [
  {
    id: 'accounting',
    title: 'Accounting',
    icon: Calculator,
    iconColor: 'teal',
    items: ['Bookkeeping', 'Bank Sync', 'Financial Reports', 'QuickBooks Integration'],
    link: '/features/accounting',
  },
  {
    id: 'leasing',
    title: 'Leasing',
    icon: Key,
    iconColor: 'orange',
    items: ['Listings & Advertising', 'Applications & eSign', 'Tenant Screening', 'CRM'],
    link: '/features/leasing',
  },
  {
    id: 'operations',
    title: 'Operations',
    icon: Settings,
    iconColor: 'teal',
    items: ['Maintenance', 'Mobile App', 'Owner Portal', 'Security'],
    link: '/features/operations',
  },
  {
    id: 'resident',
    title: 'Resident Experience',
    icon: Users,
    iconColor: 'orange',
    items: ['Rent Collection', 'Tenant Management', 'Communication Tools', 'Renters Insurance'],
    link: '/features/resident',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

const FeaturesSection = () => {
  return (
    <section className="features">
      <div className="features-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="features-header"
        >
          <span className="features-label">
            <span>⊏</span> OUR FEATURES <span>⊐</span>
          </span>
          <h2 className="features-title">Manage Your Properties With Ease</h2>
          <p className="features-subtitle">
            Explore all the tools you need for efficient and streamlined property management.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="features-grid"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              className="feature-card"
            >
              <div className="feature-card-header">
                <div className={`feature-card-icon ${feature.iconColor}`}>
                  <feature.icon />
                </div>
                <h3 className="feature-card-title">{feature.title}</h3>
              </div>
              <ul className="feature-card-list">
                {feature.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
