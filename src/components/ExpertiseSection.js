import React from 'react';
import './styles.css';

import engineeringImage from './engineeringImage.jpg';
import industrialDesignImage from './industrialDesignImage.jpg';
import interiorsImage from './interiorsImage.jpg';
import techResearchImage from './techResearchImage.jpg';
import urbanLandscapeImage from './urbanLandscapeImage.jpg';
import workplaceConsultancyImage from './workplaceConsultancyImage.jpg';

const expertiseData = [
  { title: "Engineering", image: engineeringImage },
  { title: "Industrial Design", image: industrialDesignImage },
  { title: "Interiors", image: interiorsImage },
  { title: "Technology and Research", image: techResearchImage },
  { title: "Urban and Landscape Design", image: urbanLandscapeImage },
  { title: "Workplace Consultancy", image: workplaceConsultancyImage }
];

const ExpertiseSection = () => {
  return (
    <section className="expertise">
      <div className="expertise-title">Expertise</div>
      <div className="expertise-grid">
        {expertiseData.map((expertise, index) => (
          <div key={index} className="expertise-card">
            <div className="expertise-card-title">{expertise.title}</div>
            <img src={expertise.image} alt={expertise.title} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertiseSection;
