import React from 'react';
import { Compass, Instagram, Facebook, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Compass className="h-8 w-8" />
            <span className="text-2xl font-bold">DZYNUS</span>
          </div>
          <p className="text-gray-400">Creating exceptional spaces that blend modern design with Indian heritage.</p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Contact</h4>
          <p className="text-gray-400">
            123 Design Street<br />
            Bangalore, Karnataka<br />
            +91 814 753 8353<br />
            info@dzynus.com
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Quick Links</h4>
          <div className="flex flex-col space-y-2 text-gray-400">
            <a href="#" className="hover:text-orange-400 transition">Home</a>
            <a href="#projects" className="hover:text-orange-400 transition">Projects</a>
            <a href="#services" className="hover:text-orange-400 transition">Services</a>
            <a href="#contact" className="hover:text-orange-400 transition">Contact</a>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <Instagram className="h-6 w-6 hover:text-orange-400 cursor-pointer" />
            <Facebook className="h-6 w-6 hover:text-orange-400 cursor-pointer" />
            <MessageSquare className="h-6 w-6 hover:text-orange-400 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}