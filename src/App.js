import React from 'react';
import Header from './components/Header';
import BannerSection from './components/BannerSection';
import ArchitectureSection from './components/ArchitectureSection';
import ExpertiseSection from './components/ExpertiseSection';
import NewsSection from './components/NewsSection';
import ClimateSection from './components/ClimateSection';
import StudioSection from './components/StudioSection';
import Footer from './components/Footer';
import './components/styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <BannerSection />
      <ArchitectureSection />
      <ExpertiseSection />
      <NewsSection />
      <ClimateSection />
      <StudioSection />
      <Footer />
    </div>
  );
}

export default App;
