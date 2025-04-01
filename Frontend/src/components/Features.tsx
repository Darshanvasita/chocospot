import React from 'react';
import { Truck, RefreshCw, Headphones } from 'lucide-react';

const Features = () => {
  return (
    <div className="bg-chocolate-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="text-center group">
            <div className="flex justify-center">
              <Truck className="h-12 w-12 text-chocolate-600 group-hover:animate-wave" />
            </div>
            <h3 className="mt-6 text-lg font-medium text-chocolate-900">Free Shipping</h3>
            <p className="mt-2 text-base text-chocolate-600">Free shipping on all orders over $50</p>
          </div>

          <div className="text-center group">
            <div className="flex justify-center">
              <RefreshCw className="h-12 w-12 text-chocolate-600 group-hover:animate-wave" />
            </div>
            <h3 className="mt-6 text-lg font-medium text-chocolate-900">Easy Returns</h3>
            <p className="mt-2 text-base text-chocolate-600">30-day return policy</p>
          </div>

          <div className="text-center group">
            <div className="flex justify-center">
              <Headphones className="h-12 w-12 text-chocolate-600 group-hover:animate-wave" />
            </div>
            <h3 className="mt-6 text-lg font-medium text-chocolate-900">24/7 Support</h3>
            <p className="mt-2 text-base text-chocolate-600">Round-the-clock customer service</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;