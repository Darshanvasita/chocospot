import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-2xl font-bold">FOREVER<span className="text-pink-500">.</span></h3>
            <p className="mt-4 text-gray-500">
              Premium chocolate for every occasion. Made with love and the finest ingredients.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-gray-900">About</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Terms of Service</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Shipping Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li className="text-gray-500">123 Chocolate Street</li>
              <li className="text-gray-500">Sweet City, SC 12345</li>
              <li className="text-gray-500">+1 (555) 123-4567</li>
              <li className="text-gray-500">info@forever.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-gray-400">&copy; 2024 Forever. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;