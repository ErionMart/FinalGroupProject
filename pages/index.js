import React from 'react';
import NavBar from '../components/NavigationBar.js';
import HeroSection from '../components/HeroSection';
import StylesSection from '../components/StylesSection';
import SignUpSection from '../components/SignUpSection';
import TestimonialSection from '../components/TestimonialSection';

const Home = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <StylesSection />
      <SignUpSection />
      <TestimonialSection />
      {/* The rest of your page content */}
    </>
  );
};

export default Home;
