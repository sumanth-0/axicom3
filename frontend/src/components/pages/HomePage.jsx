import React from 'react';
import Hero from './section/Hero';
import Features from './section/Features';
import HowItWorks from './section/HowItWorks';
import Categories from './section/Categories';
import Testimonials from './section/Testimonials';
import Statistics from './section/Statistics';
import FeaturedStartups from './section/FeaturedStartups';
import Blog from './section/Blog';
import Footer from './section/Footer';
import InputDesign from './InputDesign';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Features />
      <HowItWorks />
      <Categories />
      <Statistics />
      <FeaturedStartups />
      <Testimonials />
      <Blog />
      <InputDesign />
      <Footer />
    </div>
  );
};

export default HomePage; 