import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trainers from './components/Trainers'
import Pricing from './components/Pricing'
import Map from './components/Map'
import Services from './components/Services'

import Logo from './components/Logo'

import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <div className="app">
      <Navbar />
      <Hero />

      <Services />
      <Trainers />
      <Pricing />
      <Map />
      
      <footer className="footer section-padding">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
               <Logo className="footer-logo-component" />
            </div>
            <p className="copyright">{t('footer.copyright')}</p>
          </div>
        </div>
        
        <style jsx>{`
          .footer {
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            background: #080a0c;
            text-align: center;
          }
          
          .footer-logo {
            font-size: 2rem;
            font-weight: 800;
            margin-bottom: 2rem;
          }
          
          .copyright {
            color: var(--text-muted);
            font-size: 0.9rem;
          }
        `}</style>
      </footer>
    </div>
  )
}

export default App
