import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0 flex items-center gap-4">
          <img
            src="/assets/titan-logo.png"
            alt="Titan Logo"
            className="h-10 w-auto filter brightness-0 invert"
          />
          <span className="text-lg font-bold tracking-wide">TITAN</span>
        </div>
        <div className="flex space-x-6">
          <a href="#" aria-label="Facebook" className="hover:text-blue-400 transition-colors">
            <Facebook size={28} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-pink-400 transition-colors">
            <Instagram size={28} />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-sky-400 transition-colors">
            <Twitter size={28} />
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-red-500 transition-colors">
            <Youtube size={28} />
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} TITAN Golf. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;