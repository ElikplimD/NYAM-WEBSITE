// src/pages/EventsPage.js   (or src/app/events/page.js)

import React from "react";
import { ArrowRight } from "lucide-react";

// Import your actual event images here
import EventsHero from "../assets/events_hero.png";           // the big football field photo
import EventCard1 from "../assets/anniversary.png";     // 5th anniversary card
import EventCard2 from "../assets/soccer.png";       // Soccer of the Saints card
// Add more if you have them

const EventsPage = () => {
  return (
    <>
      {/* Hero Section - Full Screen with Background Image */}
      <section
        className="relative h-screen min-h-[600px] flex items-end pb-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${EventsHero})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Title */}
        <div className="relative z-10 container mx-auto px-6">
          <h1 className="text-6xl sm:text-7xl lg:text-9xl font-extrabold text-white drop-shadow-2xl leading-none">
            Events & Updates
          </h1>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">

          <h2 className="text-4xl sm:text-5xl font-extrabold text-green-900 mb-4">
            Events
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            Upcoming events organised by the New Youth Action Movement
          </p>

          {/* Event Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={EventCard1}
                alt="5th Anniversary Celebration"
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-green-600 to-transparent" />
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={EventCard2}
                alt="Soccer of the Saints"
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-green-600 to-transparent" />
            </div>

            {/* Placeholder for more events */}
            <div className="bg-gray-100 rounded-3xl border-2 border-dashed border-gray-300 flex items-center justify-center h-96">
              <p className="text-gray-500 text-xl font-medium">More Coming Soon...</p>
            </div>
          </div>

          {/* Call-to-Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Register */}
            <div className="bg-white rounded-3xl shadow-xl p-10 text-center hover:shadow-2xl transition">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Register for an Event
              </h3>
              <p className="text-gray-600 mb-8">
                Join our upcoming programs and workshops
              </p>
              <a
                href="#register"
                className="inline-block px-10 py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-xl transition"
              >
                Register
              </a>
            </div>

            {/* Volunteer */}
            <div className="bg-white rounded-3xl shadow-xl p-10 text-center hover:shadow-2xl transition">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Volunteer to serve
              </h3>
              <p className="text-gray-600 mb-8">
                Be part of the change. Serve with us!
              </p>
              <a
                href="#volunteer"
                className="inline-block px-10 py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-xl transition"
              >
                Volunteer
              </a>
            </div>

            {/* Sponsor */}
            <div className="bg-white rounded-3xl shadow-xl p-10 text-center hover:shadow-2xl transition">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Sponsor a program
              </h3>
              <p className="text-gray-600 mb-8">
                Support youth empowerment initiatives
              </p>
              <a
                href="#sponsor"
                className="inline-block px-10 py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-xl transition"
              >
                Become a Sponsor
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default EventsPage;