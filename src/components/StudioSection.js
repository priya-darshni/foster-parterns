import React from 'react';
import './styles.css';

import aboutImage from './image1.jpg';
import lifeAtFostersImage from './image2.jpg';
import diversityImage from './image3.jpg';
import csrImage from './image4.jpg';
import vacanciesImage from './image5.jpg';

const studioData = [
  { title: "About", image: aboutImage },
  { title: "Life at Foster + Partners", image: lifeAtFostersImage },
  { title: "Diversity and Inclusion", image: diversityImage },
  { title: "Corporate Social Responsibility", image: csrImage },
  { title: "Vacancies", image: vacanciesImage }
];

const StudioSection = () => {
  return (
    <section className="studio">
      <div className="studio-title">Studio</div>
      <div className="studio-cards">
        {studioData.map((studio, index) => (
          <div key={index} className="studio-card">
            <img src={studio.image} alt={studio.title} />
            <div className="studio-card-title">{studio.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StudioSection;
