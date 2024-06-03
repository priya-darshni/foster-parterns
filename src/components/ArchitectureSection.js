import React from 'react';
import './styles.css';
import architectureImage from './architectureImage.jpg';

const ArchitectureSection = () => {
  return (
    <section className="architecture">
      <div className="architecture-title">Architecture</div>
      <div className="architecture-content">
        <div className="architecture-image">
          <img src={architectureImage} alt="Architecture" />
        </div>
        <div className="architecture-description">
          <p>
            From the very beginning our practice was founded on a philosophy of innovation, sustainability, and design. We continue to learn from the past and creatively embrace the challenges of the future, with a firm belief that good design makes a difference.
          </p>
          <p>
            <strong>Norman Foster</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
