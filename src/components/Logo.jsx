import React from 'react';


const Logo = ({ className = "" }) => {
  return (
    <div className={`logo-container ${className}`}>

      <div className="logo-text">
        <span className="text-white">GO</span>
        <span className="text-teal">FIT</span>
      </div>
      
      <style jsx>{`
        .logo-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-style: italic;
          letter-spacing: -0.05em;
          font-size: 1.8rem;
          cursor: pointer;
          user-select: none;
        }



        .text-white { color: #fff; }
        .text-teal { color: var(--primary-teal); }
        
        .logo-text {
          line-height: 1;
          display: flex;
        }

        /* Hover effect */
        .logo-container:hover .icon-wrapper {
           border-color: var(--primary-teal);
           box-shadow: 0 0 15px rgba(0, 242, 234, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Logo;
