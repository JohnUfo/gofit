import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const galleryImages = [
  {
    id: 1,
    src: "/gallery1.png",
    title: "Modern Equipment",
    size: "large"
  },
  {
    id: 2,
    src: "/gallery2.png", 
    title: "Cardio Zone",
    size: "small"
  },
  {
    id: 3,
    src: "/gallery3.png",
    title: "Strength Training",
    size: "small"
  },
  {
    id: 4,
    src: "/gallery4.png",
    title: "Free Weights",
    size: "wide"
  }
];

const Gallery = () => {
  const { t } = useTranslation();

  // Temporary translation if not available
  const sectionTitle = t('gallery.title');
  const sectionDesc = t('gallery.description');

  return (
    <section className="gallery section-padding" id="gallery">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="heading text-neon"
          >
            {sectionTitle}
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="subheading"
          >
            {sectionDesc}
          </motion.p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <motion.div 
              key={image.id}
              className={`gallery-item ${image.size}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="gallery-img-wrapper">
                <img src={image.src} alt={image.title} loading="lazy" />
                <div className="overlay">
                  <h3>{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .heading {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .subheading {
          color: var(--text-muted);
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 250px;
          gap: 1.5rem;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 1px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .gallery-item.large {
          grid-column: span 2;
          grid-row: span 2;
        }

        .gallery-item.wide {
          grid-column: span 3;
        }

        .gallery-img-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .gallery-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.05);
        }

        .overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 2rem;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: flex-end;
        }

        .gallery-item:hover .overlay {
          opacity: 1;
        }

        .overlay h3 {
          color: var(--text-white);
          font-size: 1.5rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: 1fr;
            grid-auto-rows: 300px;
          }

          .gallery-item.large,
          .gallery-item.wide {
            grid-column: span 1;
            grid-row: span 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Gallery;
