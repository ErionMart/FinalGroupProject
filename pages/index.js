import React from 'react';
import NavBar from '../components/NavigationBar.js';
import HeroSection from '../components/HeroSection';
import StylesSection from '../components/StylesSection';
import SignUpSection from '../components/SignUpSection';

const Home = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <StylesSection />
      <SignUpSection />
      {/* The rest of your page content */}
    </>
  );
};

export default Home;
