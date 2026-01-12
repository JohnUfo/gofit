import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const trainers = [
  { id: 'trainer1', exp: 6, image: "/aziz.png" },
  { id: 'trainer2', exp: 5, image: "/islomjon.png" },
  { id: 'trainer3', exp: 15, image: "/eleonora.png" },
  { id: 'trainer4', exp: 9, image: "/akmal.png" },
  { id: 'trainer5', exp: 15, image: "/olga.png", plus: true },
  { id: 'trainer6', exp: 1, image: "/anzhelika.png" }
];

const Trainers = () => {
  const { t } = useTranslation();

  return (
    <section id="trainers" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">{t('nav.trainers')}</span>
          <h2 className="section-title">{t('trainers.title')} <span className="text-teal">GOFIT</span></h2>
        </div>

        <div className="trainers-grid">
          {trainers.map((trainer, index) => {
            const name = t(`trainers.${trainer.id}.name`);
            const specialty = t(`trainers.${trainer.id}.specialty`);
            // t returns an array if the key points to an array in the resource file
            const tags = t(`trainers.${trainer.id}.tags`, { returnObjects: true });
            
            // Logic for "year" vs "years" based on the number
            const yearLabel = trainer.exp === 1 ? t('trainers.year') : t('trainers.years');
            const expDisplay = `${trainer.exp}${trainer.plus ? '+' : ''}`;

            return (
              <motion.div 
                key={trainer.id}
                className="trainer-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="card-image-wrapper">
                   <img src={trainer.image} alt={name} className="trainer-img" />
                   <div className="placeholder-overlay">
                      <span className="exp-badge">{expDisplay} {yearLabel} {t('trainers.experience')}</span>
                   </div>
                </div>
                <div className="card-content">
                  <h3 className="trainer-name">{name}</h3>
                  <p className="trainer-specialty">{specialty}</p>
                  <div className="trainer-tags">
                    {Array.isArray(tags) && tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .section-header {
          margin-bottom: 4rem;
          text-align: center;
        }

        .subtitle {
          color: var(--primary-teal);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          display: block;
          margin-bottom: 0.5rem;
        }

        .section-title {
          font-size: 3.5rem;
          font-weight: 900;
        }

        .trainers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 3rem;
        }

        .trainer-card {
          background: var(--card-bg);
          border: 1px solid rgba(255, 255, 255, 0.05);
          overflow: hidden;
          transition: var(--transition);
        }

        .trainer-card:hover {
          transform: translateY(-10px);
          border-color: var(--primary-teal);
        }

        .card-image-wrapper {
          height: 450px;
          position: relative;
          overflow: hidden;
        }

        .trainer-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition);
        }

        .trainer-card:hover .trainer-img {
          transform: scale(1.05);
        }

        .placeholder-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 1.5rem;
          background: linear-gradient(to top, rgba(15, 18, 20, 0.9), transparent);
          z-index: 20;
        }

        .exp-badge {
          background: var(--primary-teal);
          color: var(--bg-color);
          padding: 0.4rem 1rem;
          font-size: 0.8rem;
          font-weight: 800;
          text-transform: uppercase;
        }

        .card-content {
          padding: 2.5rem;
        }

        .trainer-name {
          font-size: 1.6rem;
          margin-bottom: 0.6rem;
          font-weight: 800;
        }

        .trainer-specialty {
          color: var(--primary-teal);
          font-weight: 700;
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
        }

        .trainer-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .tag {
          background: rgba(26, 182, 178, 0.1);
          color: var(--text-muted);
          padding: 0.3rem 0.8rem;
          font-size: 0.75rem;
          font-weight: 600;
          border-radius: 2px;
        }

        @media (max-width: 768px) {
          .section-title { font-size: 2.5rem; }
          .trainers-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Trainers;
