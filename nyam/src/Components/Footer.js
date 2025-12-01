// src/components/Footer.js
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin,Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
   <footer className="bg-green-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Logo & Title */}
            <div>
              <h2 className="text-3xl font-bold mb-6">New Youth Action Movement</h2>
              <div className="flex space-x-4 mt-8">
                <Facebook className="w-6 h-6 hover:text-yellow-400 cursor-pointer" />
                <Twitter className="w-6 h-6 hover:text-yellow-400 cursor-pointer" />
                <Instagram className="w-6 h-6 hover:text-yellow-400 cursor-pointer" />
                <Linkedin className="w-6 h-6 hover:text-yellow-400 cursor-pointer" />
                <Youtube className="w-6 h-6 hover:text-yellow-400 cursor-pointer" />
              </div>
            </div>

            {/* Support Us */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Support Us</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-yellow-400">Sponsor</a></li>
                <li><a href="#" className="hover:text-yellow-400">Partner</a></li>
                <li><a href="#" className="hover:text-yellow-400">Volunteer</a></li>
                <li><a href="#" className="hover:text-yellow-400">Donate</a></li>
              </ul>
            </div>

            {/* Know Us */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Know Us</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-yellow-400">Home</a></li>
                <li><a href="#" className="hover:text-yellow-400">About Us</a></li>
                <li><a href="#" className="hover:text-yellow-400">Events</a></li>
                <li><a href="#" className="hover:text-yellow-400">Contact Us</a></li>
              </ul>
            </div>

            {/* Send Us a Mail */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Send Us a Mail</h4>
              <p className="mb-4">New Youth Action Movement would love to hear from you</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-3 rounded-l bg-white/10 border border-white/20 flex-1 focus:outline-none focus:border-yellow-400"
                />
                <button className="px-6 py-3 bg-yellow-500 text-green-900 font-bold rounded-r hover:bg-yellow-400 transition">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm">
            © Copyright 2025. All Rights Reserved New Youth Action Movement. Website designed by NYAM DevsTechies.
          </div>
        </div>
      </footer>
  );
};

export default Footer;