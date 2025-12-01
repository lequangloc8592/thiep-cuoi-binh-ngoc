import React from 'react';
import { GALLERY_IMAGES } from '../constants';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="gallery">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-script text-4xl text-wedding-pink mb-2">Khoảnh Khắc</p>
          <h2 className="text-3xl md:text-4xl font-serif text-wedding-darkGray">Album Hình Cưới</h2>
        </div>

        {/* Masonry-like CSS columns layout */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {GALLERY_IMAGES.map((img, index) => (
            <motion.div 
              key={index}
              className="break-inside-avoid relative rounded-xl overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <img 
                src={img.url} 
                alt={`Wedding Photo ${index + 1}`} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-serif italic tracking-wider">View</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;