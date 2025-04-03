import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-chocolate-600' : 'text-chocolate-900 hover:text-chocolate-600';
  };

  return (
    <nav className="bg-chocolate-50 border-b border-chocolate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold">
              FOREVER<span className="text-chocolate-600">.</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${isActive('/')} transition-colors duration-200`}>
              HOME
            </Link>
            <Link to="/collection" className={`${isActive('/collection')} transition-colors duration-200`}>
              COLLECTION
            </Link>
            <Link to="/about" className={`${isActive('/about')} transition-colors duration-200`}>
              ABOUT
            </Link>
            <Link to="/contact" className={`${isActive('/contact')} transition-colors duration-200`}>
              CONTACT
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-chocolate-900 hover:text-chocolate-600 transition-colors duration-200">
              <Search size={20} />
            </button>
            <Link to={'/login'} className="text-chocolate-900 hover:text-chocolate-600 transition-colors duration-200">
              <User size={20} />
            </Link>
            <button className="text-chocolate-900 hover:text-chocolate-600 transition-colors duration-200 relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-chocolate-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;