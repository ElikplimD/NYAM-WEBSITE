// src/pages/AboutPage.js
import React from "react";
import {
  ArrowRight,
  Users,
  Heart,
  Globe,
  Lightbulb,
  Target,
  Award,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import NYAMLOGO  from '../assets/NYAMLogo.png'
import MindbuildersAfricaLogo from '../assets/MindBuildersAfrica.png'
import RindaelAtRadioStation from '../assets/RindaelAtRadioStation.png'

const AboutPage = () => {
  return (
    <>
      {/* Hero Section - Light Green Background */}
<section className="relative h-screen min-h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop')`, // Replace with your actual image
  }}
>
  {/* Dark Overlay for Text Readability */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
      Who we Are.
    </h1>
    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-yellow-400 mt-4">
      Easy To Develop
    </h2>

    <p className="mt-8 text-lg sm:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
      and some additional text here. Sub heading goes here and some additional text
    </p>

    {/* Optional CTA Button */}
    <div className="mt-12">
      <a
        href="#our-story"
        className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-green-900 font-bold px-8 py-4 rounded-full text-lg transition-all shadow-xl hover:shadow-2xl hover:scale-105"
      >
        Explore Our Journey
        <ArrowRight className="w-6 h-6" />
      </a>
    </div>
  </div>

  {/* Optional Gallery Button - Bottom Right */}
  <div className="absolute bottom-8 right-8">
    <a
      href="/gallery"
      className="bg-green-800 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all hover:scale-105"
    >
      Gallery
    </a>
  </div>
</section>

{/* Legacy & Impact Section - Matches Design Exactly */}
<section className="py-16 sm:py-24 bg-white">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-start">
      
      {/* Left Column: Title + Big Quote Card with Image */}
      <div className="space-y-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-green-900">
          Legacy & Impact
        </h2>

        {/* Main Quote Card with Embedded Image */}
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Image at top */}
          <div className="relative">
            <img
              src={RindaelAtRadioStation}
              alt="Youth speaking on radio"
              className="w-full h-96 object-cover"
            />
            {/* Numbered overlay on image */}
            <div className="absolute left-8 top-10 space-y-6 text-white font-medium">
              {["01", "02", "03", "04"].map((num) => (
                <div key={num} className="flex items-center gap-4">
                  <span className="text-3xl font-bold">{num}</span>
                  <div className="w-20 h-px bg-white/50"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Content */}
          <div className="relative px-10 py-12 bg-gray-50">
            {/* Big opening quote mark */}
            <span className="absolute -top-8 left-8 text-9xl font-bold text-green-600 opacity-20 leading-none">
              “
            </span>

            <blockquote className="relative z-10 max-w-2xl mx-auto text-center">
              <p className="text-xl sm:text-2xl font-medium text-gray-800 italic leading-relaxed mb-6">
                Ante facilisi ipsum sit eget dolor maecenas sed. Fringilla laoreet tincidunt nec nulla ullamcorper.
                Convallis viverra risus, facilisis erat gravida justo, urna ultrices.
              </p>
              <footer className="mt-8">
                <p className="font-bold text-green-700 text-lg">Kyle Merwin</p>
                <p className="text-gray-600">Co-founder at LionEnergy</p>
              </footer>
            </blockquote>

            {/* Counter + Button Row */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-6">
              <a
                href="/impact-stories"
                className="inline-flex items-center gap-3 bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl"
              >
                Impact Stories
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Purpose, Commitment, Values + Logo */}
      <div className="space-y-12 lg:pt-20">
        {/* Purpose */}
        <div>
          <h3 className="text-2xl font-bold text-green-900 mb-4">Our Purpose</h3>
          <p className="text-gray-700 leading-relaxed">
            Ignite innovation and entrepreneurship. Develop future leaders through mentorship and coaching. 
            Provide career pathways guidance for young talent. Enhance digital literacy and technological adoption. 
            Deliver expert business advisory, development, and financial management services. Craft compelling marketing 
            and branding strategies.
          </p>
        </div>

        {/* Commitment */}
        <div>
          <h3 className="text-2xl font-bold text-green-900 mb-4">Our Commitment</h3>
          <p className="text-gray-700 leading-relaxed">
            Deliver exceptional client experiences. Foster collaborative and inclusive relationships. 
            Drive economic growth and community development. Stay at the forefront of industry trends and best practices.
          </p>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-2xl font-bold text-green-900 mb-5">Our Core Values</h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-gray-700 font-medium">
            <div>1. Expertise</div>
            <div>2. Innovation</div>
            <div>3. Empowerment</div>
            <div>4. Collaboration </div>
            <div>5. Integrity</div>
            <div>7. Sustainability</div>
          </div>
        </div>

        {/* Tree Logo - Bottom Right */}
        <div className="flex justify-center lg:justify-end -mr-10">
          <img
            src={NYAMLOGO}
            alt="New Youth Action Movement"
            className="h-64 w-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Team & Leadership */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-green-900 mb-12">
            Team & Leadership
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { name: "John Doe", role: "Founder & Executive Director" },
              { name: "Jane Smith", role: "Programs Director" },
              { name: "Michael Brown", role: "Youth Pastor & Mentor" },
            ].map((member, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden text-center">
                <div className="p-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-green-600 mb-4">
                    <img
                      src="/api/placeholder/200/200"
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-green-700 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact + Partners + Testimonials Section – Matches Image 100% */}
<section className="py-20 lg:py-28 bg-lime-50">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

      {/* Left Column – Our Impact */}
      <div className="max-w-2xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-8">
          Our Impact
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          Over the past five years, NYAM has equipped more than <strong>1,000 individuals</strong> with life-changing skills in entrepreneurship, social media marketing, digital literacy, and hands-on trades including pastries, makeup artistry, tie-dye, and liquid soap production. Through career fairs and mentorship programs we’ve provided SHS and JHS graduates with the tools they need to secure jobs, start businesses, and improve their livelihoods, paving the way for brighter futures.
        </p>
      </div>

      {/* Right Column – Partners */}
      <div className="flex flex-col items-center lg:items-start">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-10 text-center lg:text-left w-full">
          Partners
        </h2>

        {/* Partner Logo + Name */}
        <div className="text-center lg:text-left mb-12">
          <img
            src={MindbuildersAfricaLogo}
            alt="Mind Builders Africa"
            className="h-32 mx-auto lg:mx-0 mb-6 drop-shadow-md"
          />
          <p className="text-3xl font-bold text-gray-900">Mind Builders Africa</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md">
          <a
            href="#sponsor"
            className="px-8 py-4 bg-green-700 hover:bg-green-800 text-white font-bold text-lg rounded-full transition-all shadow-lg hover:shadow-xl text-center"
          >
            Become a Sponsor
          </a>
          <a
            href="#partner"
            className="px-8 py-4 bg-gray-800 hover:bg-gray-900 text-white font-bold text-lg rounded-full transition-all shadow-lg hover:shadow-xl text-center"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </div>

    {/* Testimonials Heading (content can be added later) */}
    <div className="mt-20 lg:mt-32">
      <h2 className="text-3xl sm:text-4xl font-bold text-green-900 text-center lg:text-left">
        Testimonials
      </h2>
      {/* You can add carousel/slider here later */}
      <p className="mt-6 text-gray-600 text-center lg:text-left max-w-4xl mx-auto">
        {/* Placeholder or real testimonials will go here */}
        Chaque programme que nous menons est pensé pour répondre aux besoins spécifiques des communautés, en mettant l'accent sur la durabilité et l'autonomisation.
      </p>
    </div>
  </div>
</section>

      {/* Gallery / Events / Impact Preview */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-xl shadow-xl">
              <img src="/api/placeholder/400/300" alt="Gallery" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">View Gallery</h3>
                  <button className="mt-3 text-yellow-400 font-medium inline-flex items-center hover:underline">
                    Transformations de boue en énergie <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-xl">
              <img src="/api/placeholder/400/300" alt="Events" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Upcoming Events</h3>
                  <button className="mt-3 text-yellow-400 font-medium inline-flex items-center hover:underline">
                    Novembre 2024 <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-xl">
              <img src="/api/placeholder/400/300" alt="Impact" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Impact Stories</h3>
                  <button className="mt-3 text-yellow-400 font-medium inline-flex items-center hover:underline">
                    Transformations de boue en énergie <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;