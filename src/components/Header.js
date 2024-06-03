import React, { useState } from 'react';
import { FaSearch, FaTimes, FaBars } from 'react-icons/fa';
import './styles.css';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">Foster + Partners</div>
      <div className="header-icons">
        <FaSearch className="search-icon" onClick={toggleSearch} />
        <FaBars className="menu-icon" onClick={toggleMenu} />
      </div>
      {isSearchOpen && (
        <div className="search-box">
          <FaTimes className="close-icon" onClick={toggleSearch} />
          <input type="text" placeholder="Type here to search" />
          <div className="recommended-searches">
            <h4>Recommended searches</h4>
            <ul>
              <li>Technology and Research</li>
              <li>Industrial Design</li>
              <li>Foster + Partners Industrial Design launches two outdoor furniture collections with ESCOFET</li>
              <li>The Lana and The Lana Residences, Dorchester Collection officially opens in Dubai</li>
              <li>Designs for 350 Park Avenue revealed</li>
              <li>Hines Secures Green Light for 18 Blackfriars Road – An Iconic New Net-Zero, Mixed-Use Destination at Bankside, London</li>
              <li>Designs for Changfeng mixed-use development revealed</li>
              <li>Vacancies</li>
            </ul>
          </div>
        </div>
      )}
      {isMenuOpen && (
        <div className="sidebar">
          <FaTimes className="close-icon" onClick={toggleMenu} />
          <ul className="sidebar-menu">
            <li>Projects</li>
            <li>Expertise</li>
            <li>Studio</li>
            <li>People</li>
            <li>News</li>
            <li>Insights</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
          
        </div>
      )}
    </header>
  );
};

export default Header;
