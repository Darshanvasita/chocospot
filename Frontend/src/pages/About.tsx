import React from 'react';

const About = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-6">
              Forever was founded with a passion for creating the finest chocolates using traditional methods
              and the highest quality ingredients. Our journey began in a small kitchen and has grown into
              a beloved brand known for exceptional taste and quality.
            </p>
            <p className="text-gray-600 mb-6">
              Every piece of chocolate we create is handcrafted with attention to detail and care,
              ensuring that each bite delivers an unforgettable experience. We source our ingredients
              from sustainable farms and work closely with our suppliers to maintain the highest standards.
            </p>
            <p className="text-gray-600">
              Our commitment to excellence extends beyond our products to our customer service,
              environmental responsibility, and community involvement. We believe in creating not just
              great chocolates, but also lasting relationships with our customers and partners.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;