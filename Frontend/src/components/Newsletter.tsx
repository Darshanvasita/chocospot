import React from 'react';

const Newsletter = () => {
  return (
    <div className="bg-chocolate-50 relative overflow-hidden">
      <div className="absolute inset-0 chocolate-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-chocolate-900 sm:text-4xl">
            Subscribe to our newsletter
          </h2>
          <p className="mt-4 text-lg leading-6 text-chocolate-600">
            Get 20% off your first order when you sign up
          </p>
          <div className="mt-8 sm:mx-auto sm:max-w-lg">
            <form className="sm:flex">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 border border-chocolate-300 shadow-sm placeholder-chocolate-400 focus:ring-1 focus:ring-chocolate-500 focus:border-chocolate-500 sm:max-w-xs rounded-md bg-white"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-chocolate hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-chocolate-500 transition-opacity"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;