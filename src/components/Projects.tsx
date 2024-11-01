import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    { 
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", 
      title: "Modern Indian Villa",
      location: "Bangalore"
    },
    { 
      img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea", 
      title: "Contemporary Apartment",
      location: "Mumbai"
    },
    { 
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c", 
      title: "Luxury Penthouse",
      location: "Delhi"
    },
    { 
      img: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4", 
      title: "Traditional Modern Fusion",
      location: "Chennai"
    }
  ];

  return (
    <section id="projects" className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <img 
                src={project.img} 
                alt={project.title}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-orange-300 mb-4">{project.location}</p>
                  <button className="text-white flex items-center gap-2">
                    View Project <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}