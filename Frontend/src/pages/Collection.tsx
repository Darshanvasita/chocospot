import React from 'react';
import ProductGrid from '../components/ProductGrid';

const Collection = () => {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Collection</h1>
        <ProductGrid />
      </div>
    </div>
  );
};

export default Collection;