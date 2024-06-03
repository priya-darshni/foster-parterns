import React from 'react';
import './styles.css';
import climateImage from './climateImage.jpg';

const ClimateSection = () => {
  return (
    <section className="climate">
      <div className="climate-title">Climate and Sustainable Design</div>
      <div className="climate-content">
        <div className="climate-image">
          <img src={climateImage} alt="Climate and Sustainable Design" />
          <div className="image-text">Climate and Sustainable</div>
        </div>
        <div className="climate-description">
          Sustainability has been a central theme of our work for more than five decades. We work closely with our clients to develop bespoke design solutions that are optimized for their operations and the planet.
          <p>
            <strong>Foster + Partners</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClimateSection;
