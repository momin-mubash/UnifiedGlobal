import React from 'react';
import './Footer.css'; // Import any styling you want for the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} UnifiedGlobal. All rights reserved.</p>
        
      </div>
    </footer>
  );
};

export default Footer;
