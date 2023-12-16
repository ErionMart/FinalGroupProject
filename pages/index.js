import React from 'react';
import NavBar from '../components/NavigationBar.js';
import HeroSection from '../components/HeroSection';
import StylesSection from '../components/StylesSection';

const Home = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <StylesSection />
      {/* The rest of your page content */}
    </>
  );
};

export default Home;
