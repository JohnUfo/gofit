import React, { useState } from 'react';
import { Check, Snowflake } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ContactModal from './ContactModal';

const plansData = [
  {
    category: "vip",
    times: "07:00 - 23:00",
    options: [
      { months: 12, price: "7 300 000" },
      { months: 6, price: "5 000 000" },
      { months: 3, price: "3 120 000" },
      { months: 1, price: "1 200 000" }
    ],

  },
  {
    category: "active",
    times: "07:00 - 17:00",
    options: [
      { months: 12, price: "4 680 000" },
      { months: 6, price: "3 640 000" }
    ]
  },
  {
    category: "morning",
    times: "07:00 – 13:00",
    options: [
      { months: 12, price: "4 500 000" },
      { months: 6, price: "3 150 000" }
    ]
  },
  {
    category: "day",
    times: "12:00 - 17:00",
    options: [
      { months: 12, price: "3 700 000" },
      { months: 6, price: "2 860 000" }
    ]
  }
];

const personalTraining = [
  { qty: 1, price: "130 000" },
  { qty: 5, price: "630 500" },
  { qty: 10, price: "1 235 000" }
];

const Pricing = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="pricing" className="section-padding bg-darker">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">{t('nav.pricing')}</span>
          <h2 className="section-title">{t('pricing.title')}</h2>
        </div>

        <div className="pricing-grid">
          {plansData.map((plan, index) => (
            <motion.div 
              key={plan.category}
              className={`pricing-card ${plan.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="card-header">
                <div>
                  <h3 className="plan-name">{t(`pricing.${plan.category}`)}</h3>
                </div>

              </div>
              
              <div className="price-options">
                {plan.options.map((opt) => (
                  <div key={opt.months} className="price-item">
                     <div className="month-group">
                        <span className="price-months">{opt.months} {t('pricing.months')}</span>
                     </div>
                     <div className="price-value-wrapper">
                        <span className="price-currency">UZS</span>
                        <span className="price-value">{opt.price}</span>
                     </div>
                  </div>
                ))}
              </div>



              <button 
                className={`btn-pricing ${plan.featured ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setIsModalOpen(true)}
              >
                {t('nav.join')}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div 
            className="promo-banner"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >

            <span>{t('pricing.fight_promo')}</span>
        </motion.div>

        {/* Personal Training Section */}
        <div className="personal-training-row">
            <h3 className="section-subtitle-small">{t('pricing.personal')}</h3>
            <div className="personal-grid">
                {personalTraining.map((item, i) => (
                    <motion.div 
                        key={i} 
                        className="personal-card"
                        whileHover={{ y: -5 }}
                        onClick={() => setIsModalOpen(true)}
                    >
                        <div className="p-card-content">
                            <span className="personal-qty">{item.qty} {t('pricing.session')}</span>
                            <span className="personal-price">{item.price} <small>UZS</small></span>
                        </div>
                        <button className="p-card-action">→</button>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <style jsx>{`
        .bg-darker { background-color: #0b0d0f; }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .promo-banner {
           background: rgba(26, 182, 178, 0.1);
           border: 1px solid rgba(26, 182, 178, 0.3);
           padding: 1.5rem;
           border-radius: 12px;
           text-align: center;
           color: var(--primary-teal);
           font-weight: 700;
           font-size: 1.1rem;
           margin-bottom: 5rem;
           display: flex;
           align-items: center;
           justify-content: center;
           gap: 1rem;
           box-shadow: 0 0 20px rgba(26, 182, 178, 0.05);
        }

        .pricing-card {
          background: #14171A;
          border-radius: 20px;
          padding: 2.5rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        .pricing-card.featured {
          background: linear-gradient(145deg, #14171A 0%, #1A2024 100%);
          border-color: rgba(26, 182, 178, 0.5);
          box-shadow: 0 20px 50px rgba(26, 182, 178, 0.1);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .plan-name {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
          color: white;
          font-weight: 800;
          text-transform: uppercase;
        }

        .badge-vip {
          background: var(--primary-teal);
          color: black;
          font-weight: 800;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.75rem;
        }

        .price-options {
          flex-grow: 1;
          margin-bottom: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .price-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.8rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 12px;
          border: 1px solid transparent;
          transition: var(--transition);
        }

        .price-item:hover {
          border-color: rgba(26, 182, 178, 0.3);
          background: rgba(255, 255, 255, 0.04);
        }

        .month-group {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .price-months {
          color: white;
          font-weight: 700;
          font-size: 1.1rem;
        }

        .freezing-detail {
          color: var(--text-muted);
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .price-value-wrapper {
          text-align: right;
        }

        .price-currency {
          display: block;
          font-size: 0.7rem;
          color: var(--text-muted);
          margin-bottom: -2px;
        }

        .price-value {
          font-weight: 800;
          color: white;
          font-size: 1.3rem;
          letter-spacing: -0.5px;
        }

        .plan-features {
          margin-bottom: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 1.5rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 0.95rem;
          color: #e0e0e0;
        }

        .feature-item svg {
          color: var(--primary-teal);
          min-width: 18px; 
        }

        .btn-pricing {
          width: 100%;
          padding: 1.2rem;
          font-weight: 800;
          border-radius: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .personal-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
        }

        .personal-card {
            background: linear-gradient(145deg, #181C20 0%, #111315 100%);
            padding: 2rem;
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.05);
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            transition: var(--transition);
        }

        .personal-card:hover {
            border-color: var(--primary-teal);
            transform: translateY(-5px);
        }

        .p-card-content {
            text-align: left;
        }

        .personal-qty {
            display: block;
            color: var(--primary-teal);
            font-weight: 800;
            font-size: 1.1rem;
            text-transform: uppercase;
            margin-bottom: 0.3rem;
            white-space: normal; /* Fix text truncation */
        }

        .personal-price {
            font-weight: 700;
            font-size: 1.4rem;
            color: white;
        }

        .personal-price small {
            font-size: 0.8rem;
            color: var(--text-muted);
            font-weight: 500;
            margin-left: 5px;
        }

        .p-card-action {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: none;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: var(--transition);
        }

        .personal-card:hover .p-card-action {
            background: var(--primary-teal);
            border-color: var(--primary-teal);
            color: black;
        }

        @media (max-width: 968px) {
          .pricing-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};
export default Pricing;
