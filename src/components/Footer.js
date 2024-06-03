import React from 'react';
import './styles.css';

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdKeyboardArrowUp } from 'react-icons/md';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">
        <div className="footer-separator"></div>
      <div className="footer-content">
        <div className="footer-section">
            
          <div className="footer-title">Foster + Partners</div>
          <div className="footer-links">
            <ul>
              <li>Projects</li>
              <li>Expertise</li>
              <li>Studio</li>
              <li>News</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="footer-section right-section">
          <div className="social-media">
            <FaFacebook className="social-icon" />
            <FaTwitter className="social-icon" />
            <FaInstagram className="social-icon" />
          </div>
          <button className="scroll-to-top" onClick={scrollToTop}>
            Go to top <MdKeyboardArrowUp />
          </button>
        </div>
      </div>
      <div className="footer-legal">
        Legal and policies<br />
        © 2024 Foster + Partners. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
