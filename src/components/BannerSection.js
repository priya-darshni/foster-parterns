import React, { useState, useEffect } from 'react';
import './styles.css';

import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
import image5 from './image5.jpg';

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
];

const BannerSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: document.querySelector('.architecture').offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <section className="banner">
      <div className="image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`banner-image ${currentImageIndex === index ? 'active' : ''}`}
            alt={`banner ${index + 1}`}
          />
        ))}
      </div>
      <div className="image-navigation">
        {images.map((_, index) => (
          <div
            key={index}
            className={`nav-circle ${currentImageIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentImageIndex(index)}
          ></div>
        ))}
      </div>
      <div className="scroll-arrow" onClick={scrollToNextSection}>⬇</div>
    </section>
  );
};

export default BannerSection;
