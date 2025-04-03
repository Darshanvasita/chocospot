import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import Features from '../components/Features';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <>
      <Hero />
      <ProductGrid />
      <Features />
      <Newsletter />
    </>
  );
};

export default Home;