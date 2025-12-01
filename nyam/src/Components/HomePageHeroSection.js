// src/components/HeroSection.js
import React from 'react';
import { ArrowRight, Users, GraduationCap, Calendar } from 'lucide-react';

const HeroSection = () => {
  return (
    // Hero Section - This is a JavaScript comment (outside JSX)
    <div className="relative min-h-screen bg-gradient-to-br from-green-800 via-green-700 to-green-600 pt-20">
      {/* Main Content Container - This is a JSX comment */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[600px]">
          {/* Left Side - Image */}
          <div className="relative">
            {/* Yellow Diagonal Accent */}
            <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-64 h-96 bg-yellow-500 transform rotate-12 -z-0"></div>
            
            {/* Image Container with clip path */}
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop" 
                alt="Youth community group celebrating"
                className="w-full h-[500px] object-cover rounded-tl-[100px] shadow-2xl"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-white relative z-10">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              We're a<br />
              <span className="text-yellow-400">Youth Driven</span><br />
              Community
            </h1>
            
            <p className="text-xl mb-8 text-green-100">
              Empowering Success, One Venture at a Time
            </p>

            <button className="group inline-flex items-center gap-2 bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-green-900 px-8 py-3 rounded-md text-lg font-semibold transition-all">
              Read more
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>

            {/* Yellow button accent for visual interest */}
            <div className="absolute -bottom-20 right-0 w-48 h-24 bg-yellow-400 -z-10"></div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-900 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Stat 1: People trained */}
            <div>
              <p className="text-yellow-400 text-sm font-semibold mb-2 uppercase tracking-wider">People trained</p>
              <h3 className="text-5xl font-bold text-white">1000+</h3>
            </div>

            {/* Stat 2: Students Reached */}
            <div>
              <p className="text-yellow-400 text-sm font-semibold mb-2 uppercase tracking-wider">Students Reached</p>
              <h3 className="text-5xl font-bold text-white">1000+</h3>
            </div>

            {/* Stat 3: Programs Held */}
            <div>
              <p className="text-yellow-400 text-sm font-semibold mb-2 uppercase tracking-wider">Programs Held</p>
              <h3 className="text-5xl font-bold text-white">20+</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;