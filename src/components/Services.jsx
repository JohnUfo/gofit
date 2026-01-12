import React from 'react';
import { Dumbbell, Users, Swords, Flame, Coffee } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Services = () => {
  const { t } = useTranslation();

  const servicesList = [
    { icon: <Dumbbell />, title: 'features.gym', desc: 'services.gym_desc' },
    { icon: <Users />, title: 'features.group', desc: 'services.group_desc' },
    { icon: <Swords />, title: 'features.fight', desc: 'services.fight_desc' },
    { icon: <Flame />, title: 'features.sauna', desc: 'services.sauna_desc' },
    { icon: <Coffee />, title: 'features.bar', desc: 'services.bar_desc' },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="section-header">
            <span className="subtitle">GOFIT</span>
            <h2 className="section-title">{t('services.title_part1')} <span className="text-teal">{t('services.title_part2')}</span></h2>
        </div>

        <div className="services-grid">
           {servicesList.map((service, i) => (
             <motion.div 
                key={i} 
                className="service-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
             >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{t(service.title)}</h3>
                <p className="service-desc">{t(service.desc)}</p>
             </motion.div>
           ))}
        </div>
      </div>

      <style jsx>{`
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2.5rem;
        }

        .service-card {
            background: var(--card-bg);
            padding: 3rem 2rem;
            border: 1px solid rgba(255, 255, 255, 0.05);
            transition: var(--transition);
        }

        .service-card:hover {
            border-color: var(--primary-teal);
            transform: translateY(-5px);
        }

        .service-icon {
            color: var(--primary-teal);
            margin-bottom: 2rem;
        }

        .service-icon :global(svg) {
            width: 40px;
            height: 40px;
        }

        .service-title {
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
            color: var(--text-white);
            font-weight: 800;
        }

        .service-desc {
            color: var(--text-muted);
            line-height: 1.8;
            font-size: 0.95rem;
        }

        @media (max-width: 768px) {
            .section-title { font-size: 2.5rem; }
        }
      `}</style>
    </section>
  );
};

export default Services;
