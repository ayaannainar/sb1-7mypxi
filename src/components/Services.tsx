import React from 'react';
import { Home, Palette, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    { 
      Icon: Home, 
      title: 'Residential Design', 
      desc: 'Crafting beautiful living spaces that blend modern comfort with Indian traditions.' 
    },
    { 
      Icon: Palette, 
      title: 'Vastu Consultation', 
      desc: 'Expert Vastu-compliant design solutions for harmony and prosperity.' 
    },
    { 
      Icon: Users, 
      title: '3D Visualization', 
      desc: 'Realistic 3D renders to help you visualize your dream space before execution.' 
    }
  ];

  return (
    <section id="services" className="py-24 px-8 bg-orange-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <service.Icon className="h-12 w-12 mb-6 text-orange-600" />
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}