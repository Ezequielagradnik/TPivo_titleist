import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img
                src="/assets/titan-logo.png"
                alt="TITAN"
                width={120}
                height={40}
                className="h-10 w-auto mb-4 filter brightness-0 invert"
              />
              <p className="text-gray-400">Every great swing starts with Titan</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Drivers</a></li>
                <li><a href="#" className="hover:text-white">Hierros</a></li>
                <li><a href="#" className="hover:text-white">Putters</a></li>
                <li><a href="#" className="hover:text-white">Accesories</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Soporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white" aria-label="Facebook">
                  <Facebook size={24} />
                </a>
                <a href="#" className="hover:text-white" aria-label="Instagram">
                  <Instagram size={24} />
                </a>
                <a href="#" className="hover:text-white" aria-label="Twitter">
                  <Twitter size={24} />
                </a>
                <a href="#" className="hover:text-white" aria-label="YouTube">
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 TITAN Golf. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
}
export default Footer;