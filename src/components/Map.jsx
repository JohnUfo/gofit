import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Map = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2 className="section-title mb-2"><span className="text-teal">GO</span>FIT</h2>
            <p className="text-muted mb-4">{t('nav.contact')}</p>
            
            <ul className="info-list">
              <li>
                <MapPin className="text-teal" size={24} />
                <div>
                  <strong>{t('contact_info.address_label')}</strong>
                  <p>{t('contact_info.address')}</p>
                </div>
              </li>
              <li>
                <Phone className="text-teal" size={24} />
                <div>
                  <strong>{t('nav.contact')}</strong>
                  <p>{t('contact_info.phone')}</p>
                </div>
              </li>
              <li>
                <Clock className="text-teal" size={24} />
                <div>
                  <strong>{t('contact_info.schedule')}</strong>
                  <p>{t('contact_info.working_hours')}</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="map-container">
            {/* Real Yandex Map Link for the location provided */}
            <iframe 
              src="https://yandex.uz/map-widget/v1/?ll=69.253405%2C41.348017&z=19&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjYwOTgxNRJK0KPQt9Cx0LXQutC40YHRgtCw0L0sINCi0LDRiNC60LXQvdGCLCDQrtC90YPRgdCw0LHQsNC00YHQutC40Lkg0YDQsNC50L7QvSIKDe_rJkIV7b8lQg%2C%2C" 
              width="100%" 
              height="450" 
              frameBorder="0"
              style={{ filter: 'invert(90%) hue-rotate(180deg) brightness(0.9)', borderRadius: '8px' }} 
              allowFullScreen={true}
            ></iframe>
            <a 
              href="https://yandex.uz/maps/-/CLd7RE8R" 
              target="_blank" 
              rel="noopener noreferrer"
              className="map-link-btn"
            >
              <MapPin size={18} />
              {t('contact_info.open_map')}
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-wrapper {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
          align-items: center;
        }

        .info-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .info-list li {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .info-list strong {
          display: block;
          font-size: 1rem;
          text-transform: uppercase;
          color: var(--primary-teal);
        }

        .map-container {
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          position: relative;
        }

        .map-link-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          color: var(--primary-teal);
          text-decoration: none;
          border-radius: 4px;
          font-weight: 600;
          transition: var(--transition);
          border: 1px solid rgba(26, 182, 178, 0.2);
        }

        .map-link-btn:hover {
          background: rgba(26, 182, 178, 0.1);
          border-color: var(--primary-teal);
        }

        .mb-2 { margin-bottom: 0.5rem; }
        .mb-4 { margin-bottom: 3rem; }

        @media (max-width: 968px) {
          .contact-wrapper {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .info-list li {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Map;
