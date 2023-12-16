// pages/index.js
import React from 'react';
import NavBar from '../components/NavigationBar';
import HeroSection from '../components/HeroSection';
import StylesSection from '../components/StylesSection';
import SignUpSection from '../components/SignUpSection';
import TestimonialSection from '../components/TestimonialSection';
import Footer from '../components/Footer'; // Import the new component

const Home = () => {
  return (
    <>
      <NavBar/>
      <HeroSection/>
      <StylesSection/>
      <SignUpSection/>
      <TestimonialSection />
      <Footer /> {/* Include the Footer component */}
    </>
  );
};

export default Home;
