import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-video-wrapper">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="hero-video"
          poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-content">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="hero-subtitle text-neon">{t('hero.subtitle')}</span>
          <h1 className="hero-title">
            <span className="text-white">{t('hero.title_part1')} </span>
            <span className="text-gradient">{t('hero.title_part2')}</span>
          </h1>
          <p className="hero-description glass-panel">
            {t('hero.description')}
          </p>
          
          <div className="hero-btns">
            <a href="#pricing" className="btn-primary glow-effect">
              {t('nav.pricing')}
            </a>
            <a href="#trainers" className="btn-outline glass-btn">
              {t('nav.trainers')}
            </a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero {
          height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-video-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .hero-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(5,6,7,0.3) 0%, rgba(5,6,7,0.8) 100%);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          padding-top: 4rem;
        }

        .hero-subtitle {
          color: var(--primary-teal);
          font-weight: 800;
          letter-spacing: 6px;
          font-size: 1rem;
          margin-bottom: 1.5rem;
          display: block;
          text-transform: uppercase;
        }

        .hero-title {
          font-size: clamp(3.5rem, 8vw, 6.5rem);
          line-height: 0.9;
          font-weight: 900;
          margin-bottom: 2rem;
          max-width: 1000px;
          text-transform: uppercase;
          letter-spacing: -2px;
        }

        .hero-description {
          font-size: 1.2rem;
          color: var(--text-white);
          max-width: 600px;
          margin-bottom: 3rem;
          padding: 1.5rem;
          border-radius: 12px;
          line-height: 1.6;
        }

        .hero-btns {
          display: flex;
          gap: 1.5rem;
        }
        
        .glow-effect {
          box-shadow: var(--glow-teal);
        }
        
        .glass-btn {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255,255,255,0.2);
          color: #fff;
        }
        
        .glass-btn:hover {
          background: var(--primary-teal);
          color: #000;
          border-color: var(--primary-teal);
          box-shadow: var(--glow-teal);
        }

        @media (max-width: 768px) {
          .hero-btns {
            flex-direction: column;
          }
          
          .hero-title {
             font-size: clamp(2.5rem, 10vw, 4rem);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
