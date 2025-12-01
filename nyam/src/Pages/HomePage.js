// src/pages/HomePage.js
import React from "react";
import {
  ArrowRight,
  Users,
  GraduationCap,
  Calendar,
  Heart,
  TreePine,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import HeroSection from "../Components/HomePageHeroSection";
import Navbar from '../Components/Navbar'
import groupPhoto from '../assets/GroupPhoto.png'
import YouthGroupPhoto from '../assets/YouthGroupPhoto.png'
import TreeGraphic from '../assets/TreePhoto.png'
const StatCard = ({ icon: Icon, value, label }) => (
  <div className="text-center px-4">
    <div className="flex justify-center mb-3">
      <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-500" />
    </div>
    <h3 className="text-3xl sm:text-4xl font-bold text-white">{value}</h3>
    <p className="text-sm sm:text-base text-white/80 mt-1">{label}</p>
  </div>
);

const HomePage = () => {
  return (
    <>
    <Navbar/>
      <HeroSection />

      {/* Stats Bar - Fully Responsive 
      <section className="bg-gradient-to-r from-green-900 to-green-800 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <StatCard icon={Users} value="1000+" label="People trained" />
            <StatCard icon={GraduationCap} value="1000+" label="Students Reached" />
            <StatCard icon={Calendar} value="20+" label="Programs Held" />
          </div>
        </div>
      </section>*/}

      {/* Vision + Mission + Tree Section – 100% Matches Your Design */}
{/* Vision + Mission with Logo Overlay – FINAL PERFECT MATCH */}
<section className="relative py-24 lg:py-40 bg-gray-50 overflow-hidden">
  <div className="container mx-auto px-6">

    {/* VISION – Top Left */}
    <div className="max-w-lg text-left mb-20 lg:mb-0">
      <p className="text-sm font-bold text-green-700 uppercase tracking-wider mb-3">
        Youth Driven
      </p>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-green-900 leading-tight">
        VISION
      </h2>
      <p className="mt-6 text-lg text-gray-700 leading-relaxed">
        To become the trusted partner of choice for individuals, entrepreneurs, and organizations seeking to unlock their potential, drive growth, and achieve success.
      </p>
      <a
        href="#partner"
        className="mt-8 inline-block px-10 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full shadow-xl transition transform hover:scale-105"
      >
        Partner
      </a>
    </div>

    {/* Floating Youth Photo – Top Right */}
    <div className="absolute top-10 right-0 lg:right-10 w-80 lg:w-96 xl:w-[500px] z-20 pointer-events-none">
      <img
        src={YouthGroupPhoto}
        alt="Youth in training"
        className="rounded-2xl shadow-2xl border-8 border-white"
      />
    </div>

    {/* CENTRE PIECE: Tree Logo with Mission Text ON the Green Band */}
    <div className="relative flex justify-center items-center mt-20 lg:mt-32">
      {/* Full Circular Tree Logo */}
      <img
        src={TreeGraphic} // your full circular logo with green band and tree
        alt="New Youth Action Movement"
        className="w-80 lg:w-96 xl:w-[480px] drop-shadow-2xl"
      />

      {/* MISSION Text Overlay – Perfectly Centered on the Green Stripe */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-16 lg:px-24">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-green-900 mb-4">
          MISSION
        </h2>
        <p className="text-gray-700 font-medium text-base sm:text-lg lg:text-xl leading-relaxed text-center max-w-3xl">
          Our mission is to empower individuals, entrepreneurs, and organizations to achieve their full potential through expert consultancy, mentorship, and coaching. We foster a culture of innovation, creativity, and digital excellence, delivering comprehensive business solutions that drive growth, sustainability, and prosperity.
        </p>
      </div>
    </div>

    {/* Motto inside the bottom green circle (already in your logo) */}
    

    {/* Buttons Below */}
    <div className="flex flex-col sm:flex-row justify-center gap-8 mt-16 lg:mt-20">
      <a
        href="#donate"
        className="px-12 py-5 bg-green-600 hover:bg-green-700 text-white font-bold text-xl rounded-full shadow-2xl transition transform hover:scale-105 flex items-center justify-center gap-3"
      >
        Donate <Heart className="w-6 h-6" />
      </a>
      <a
        href="#impact"
        className="px-12 py-5 bg-green-600 hover:bg-green-700 text-white font-bold text-xl rounded-full shadow-2xl transition transform hover:scale-105"
      >
        Our Impact
      </a>
    </div>

  </div>
</section>
      {/* Events & Programs Section - Stacks beautifully on mobile */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4">Events</h2>
          <p className="text-center text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mb-10 sm:mb-12 px-4">
            We organise Skill training events, sports activities, Praise and Worship Concerts
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            {/* Image - Full width on mobile */}
            <div className="order-2 lg:order-1">
              <img
                src={groupPhoto} 
                alt="Youth community group celebrating"
                className="w-full h-[500px] object-cover rounded-tl-[100px] shadow-2xl"
              />
            </div>

            {/* Program Cards */}
            <div className="space-y-6 order-1 lg:order-2">
              {[
                {
                  title: "Accès à l’eau potable",
                  desc: "Nous construisons des infrastructures pour fournir un accès fiable et durable à l’eau potable dans les zones vulnérables.",
                },
                {
                  title: "Hygiène et Assainissement",
                  desc: "Nous développons des initiatives pour sensibiliser les communautés et installer des équipements sanitaires essentiels.",
                },
                {
                  title: "Gestion de l’environnement",
                  desc: "Nous agissons pour protéger les écosystèmes en sensibilisant les populations locales à la préservation durable.",
                },
              ].map((prog, i) => (
                <div key={i} className="bg-green-50 p-5 sm:p-6 rounded-lg border-l-4 border-green-600">
                  <h4 className="text-lg sm:text-xl font-bold text-green-800 mb-2">{prog.title}</h4>
                  <p className="text-gray-700 text-sm sm:text-base">{prog.desc}</p>
                  <a href="#" className="text-green-600 font-medium inline-flex items-center mt-3 hover:underline text-sm sm:text-base">
                    En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <button className="px-6 sm:px-8 py-3 bg-green-600 text-white font-medium rounded hover:bg-green-700 transition inline-flex items-center gap-2 text-sm sm:text-base">
              Join a Program <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-10 sm:mb-12">Testimonials</h2>
          <p className="text-center text-gray-600 text-sm sm:text-base max-w-3xl mx-auto mb-12 px-4">
            Chaque programme que nous menons est pensé pour répondre aux besoins spécifiques des communautés, en mettant l’accent sur la durabilité et l’autonomisation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 sm:p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gray-200 border-2 border-dashed rounded-full" />
                <blockquote className="text-sm sm:text-base text-gray-700 italic leading-relaxed">
                  “This program changed my life and gave me hope for a better future.”
                </blockquote>
                <p className="mt-4 font-bold text-green-700 text-sm sm:text-base">— Participant {i}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery / Events / Impact Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {["View Gallery", "Upcoming Events", "Impact Stories"].map((text, i) => (
              <div key={i} className="relative group overflow-hidden rounded-lg shadow-lg h-80 sm:h-96">
                <img
                  src="/api/placeholder/400/600"
                  alt={text}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    Transformations de boue en énergie
                  </h3>
                  <button className="text-yellow-400 font-medium inline-flex items-center hover:underline text-sm sm:text-base">
                    {text} <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;