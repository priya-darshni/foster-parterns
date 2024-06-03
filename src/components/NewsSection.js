import React from 'react';
import './styles.css';
import newsImage from './newsImage.jpg';

const NewsSection = () => {
  return (
    <section className="news">
      <div className="news-title">News</div>
      <div className="news-content">
        <div className="news-image">
          <img src={newsImage} alt="Latest News" />
          <div className="image-text">Latest News</div>
        </div>
        <div className="news-description">
          Stay up to date with the latest Foster + Partners projects and news.
          <div className="news-subscribe">
        <input type="email" placeholder="Enter your email address" />
        <button>Subscribe</button>
      </div>
        </div>
      </div>
      
    </section>
  );
};

export default NewsSection;
