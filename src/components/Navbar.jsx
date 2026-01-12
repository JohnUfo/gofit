import React from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const navLinks = [
    { name: t('nav.trainers'), href: '#trainers' },
    { name: t('nav.pricing'), href: '#pricing' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo">
          <Logo />
        </div>

        <div className="desktop-menu">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          
          <div className="lang-switcher">
            <Globe size={18} className="text-teal" />
            <span onClick={() => i18n.changeLanguage('ru')} className={i18n.language === 'ru' ? 'active' : ''}>RU</span>
            <span onClick={() => i18n.changeLanguage('uz')} className={i18n.language === 'uz' ? 'active' : ''}>UZ</span>
            <span onClick={() => i18n.changeLanguage('en')} className={i18n.language === 'en' ? 'active' : ''}>EN</span>
          </div>

          {/* Join button removed */}
        </div>

        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="mobile-nav-link" onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            ))}
            
            <div className="mobile-lang-switcher">
               <span onClick={() => changeLanguage('ru')}>RU</span>
               <span onClick={() => changeLanguage('uz')}>UZ</span>
               <span onClick={() => changeLanguage('en')}>EN</span>
            </div>
            
            {/* Join button removed as requested */}
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 80px;
          background: rgba(5, 6, 7, 0.7);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          z-index: 1000;
          border-bottom: 1px solid var(--glass-border);
        }

        .nav-content {
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          height: 40px;
          display: flex;
          align-items: center;
        }

        .logo-img {
          height: 100%;
          width: auto;
          object-fit: contain;
        }

        .desktop-menu {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          font-weight: 600;
          font-size: 0.85rem;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .nav-link:hover { color: var(--primary-teal); }

        .lang-switcher {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--text-muted);
        }

        .lang-switcher span { cursor: pointer; transition: 0.2s; }
        .lang-switcher span.active { color: var(--primary-teal); }

        .mobile-toggle {
          display: none;
          cursor: pointer;
          color: var(--primary-teal);
        }

        .mobile-menu {
          position: fixed;
          top: 80px;
          right: 0;
          width: 80%;
          height: calc(100vh - 80px);
          background: var(--bg-color);
          padding: 3rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .mobile-nav-link {
          font-size: 1.2rem;
          font-weight: 800;
          text-transform: uppercase;
        }

        .mobile-lang-switcher {
           display: flex;
           gap: 1.5rem;
           font-weight: 800;
           color: var(--primary-teal);
        }

        @media (max-width: 968px) {
          .desktop-menu { display: none; }
          .mobile-toggle { display: block; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
