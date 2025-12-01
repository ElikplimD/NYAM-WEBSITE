// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import NYAMLOGO  from '../assets/NYAMLogo.png'

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/events', label: 'Events & Updates' },
    { path: '/get-involved', label: 'Get Involved' },
    { path: '/contact', label: 'Contact Us' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-green-800 shadow-lg">
      {/* Top Bar - Full Width Safe Area */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <img 
              src={NYAMLOGO} 
              alt="NYAM" 
              className="h-9 sm:h-11 w-auto"
            />
            <span className="text-base sm:text-lg font-bold text-white hidden xs:block whitespace-nowrap">
              New Youth Action
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-base font-medium transition-all duration-200 pb-1 ${
                  location.pathname === item.path
                    ? 'text-yellow-400 border-b-2 border-yellow-400'
                    : 'text-white hover:text-yellow-300'
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/donate"
              className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-green-900 font-bold px-6 py-3 rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Heart size={20} className="fill-current" />
              DONATE
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 rounded-md hover:bg-green-700 transition"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full Width, No Overflow */}
      <div className={`
        lg:hidden fixed inset-x-0 top-16 sm:top-20 
        bg-green-800 border-t border-green-700 shadow-2xl
        transition-all duration-300 ease-in-out overflow-hidden
        ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <div className="px-4 py-6 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`
                block w-full text-left py-4 px-3 rounded-lg text-lg font-medium
                transition-colors border-b border-green-700/30 last:border-0
                ${location.pathname === item.path
                  ? 'text-yellow-400 bg-green-700/50'
                  : 'text-white hover:bg-green-700/30 hover:text-yellow-300'
                }
              `}
            >
              {item.label}
            </Link>
          ))}

          <div className="pt-4 mt-4 border-t border-green-700">
            <Link
              to="/donate"
              onClick={() => setIsOpen(false)}
              className="block w-full"
            >
              <button className="w-full flex justify-center items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-green-900 font-bold px-8 py-5 rounded-full transition-all shadow-lg text-lg">
                <Heart size={24} className="fill-current" />
                DONATE
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;