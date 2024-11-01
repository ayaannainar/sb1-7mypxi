import React from 'react';
import { Compass, ArrowRight, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="relative h-screen">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80"
          alt="Modern Indian interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      
      <nav className="relative z-10 flex justify-between items-center px-8 py-6">
        <div className="text-white text-2xl font-bold flex items-center gap-2">
          <Compass className="h-8 w-8" />
          DZYNUS
        </div>
        <div className="hidden md:flex space-x-8 text-white">
          <a href="#" className="hover:text-orange-300 transition">Home</a>
          <a href="#projects" className="hover:text-orange-300 transition">Projects</a>
          <a href="#services" className="hover:text-orange-300 transition">Services</a>
          <a href="#contact" className="hover:text-orange-300 transition">Contact</a>
        </div>
      </nav>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col justify-center h-full px-8 max-w-6xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Transform Your Space<br />Into a Masterpiece
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl">
          Experience the perfect blend of traditional Indian aesthetics and modern design.
          Let us create your dream space that reflects your personality and culture.
        </p>
        <div className="flex gap-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="bg-orange-600 text-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-orange-700 transition"
          >
            Get Free Consultation
            <ArrowRight className="h-5 w-5" />
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://wa.me/918147538353"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-green-600 transition"
          >
            <MessageSquare className="h-5 w-5" />
            Chat on WhatsApp
          </motion.a>
        </div>
      </motion.div>
    </header>
  );
}