import React from 'react';
import { motion } from 'framer-motion';
import { LOVE_STORY } from '../constants';
import { Heart } from 'lucide-react';

const Story: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="story">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-wedding-lightPink/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-wedding-lightPink/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-script text-wedding-pink mb-4">Chuyện Tình Yêu</h2>
            <div className="flex items-center justify-center gap-4">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-wedding-gray/50"></div>
                <Heart size={24} className="text-wedding-pink fill-wedding-pink animate-pulse" />
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-wedding-gray/50"></div>
            </div>
          </motion.div>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-wedding-pink/30"></div>

          {LOVE_STORY.map((event, index) => (
            <motion.div 
              key={index}
              className={`relative flex flex-col md:flex-row items-center mb-24 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2 p-4 md:px-12">
                <div className="relative rounded-t-[100px] rounded-b-[10px] overflow-hidden shadow-xl border-4 border-white aspect-[3/4] md:aspect-square">
                   {event.image && (
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                   )}
                   <div className="absolute inset-0 border-white/20 border-8 rounded-t-[90px] rounded-b-[6px] pointer-events-none"></div>
                </div>
              </div>

              {/* Timeline Marker */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white border border-wedding-pink rounded-full flex items-center justify-center z-10 shadow-md">
                <div className="w-3 h-3 bg-wedding-pink rounded-full"></div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 p-6 md:px-12 pl-16 md:pl-12">
                <div className={`text-left ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <h3 className="text-6xl text-wedding-pink/20 font-serif font-bold -mb-6 relative z-0">{event.year}</h3>
                  <h3 className="text-2xl font-serif text-wedding-darkGray mb-4 relative z-10">{event.title}</h3>
                  <p className="text-gray-500 leading-relaxed font-sans text-sm md:text-base">
                    {event.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Story;