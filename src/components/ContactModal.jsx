import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Instagram, Phone, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ContactModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="modal-content"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-header">
            <h3>{t('nav.contact')}</h3>
            <button className="close-btn" onClick={onClose}>
              <X size={24} />
            </button>
          </div>

          <div className="contact-options">
            <a href="https://www.instagram.com/gofituz/" target="_blank" rel="noopener noreferrer" className="contact-option insta">
              <Instagram size={28} />
              <span>Instagram</span>
              <small>@gofituz</small>
            </a>
            
            <a href="https://t.me/GoFit_uz" target="_blank" rel="noopener noreferrer" className="contact-option tg">
              <Send size={28} />
              <span>Telegram</span>
              <small>@GoFit_uz</small>
            </a>
            
            <a href="tel:+998904999929" className="contact-option phone">
              <Phone size={28} />
              <span>+998 90 499 99 29</span>
            </a>
          </div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
        }

        .modal-content {
          background: #15191C;
          width: 90%;
          max-width: 400px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 2rem;
          box-shadow: 0 25px 50px rgba(0,0,0,0.5);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .modal-header h3 {
          font-size: 1.5rem;
          font-weight: 800;
          color: white;
        }

        .close-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 0.5rem;
          transition: var(--transition);
        }

        .close-btn:hover {
          color: white;
          transform: rotate(90deg);
        }

        .contact-options {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-option {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.2rem;
          border-radius: 12px;
          text-decoration: none;
          color: white;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: var(--transition);
        }

        .contact-option:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateX(5px);
        }

        .contact-option svg {
          opacity: 0.9;
        }

        .contact-option span {
          font-weight: 700;
          font-size: 1.1rem;
          flex-grow: 1;
        }

        .contact-option small {
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .insta:hover { border-color: #E1306C; color: #E1306C; }
        .tg:hover { border-color: #0088cc; color: #0088cc; }
        .phone:hover { border-color: #1AB6B2; color: #1AB6B2; }
      `}</style>
    </AnimatePresence>
  );
};

export default ContactModal;
