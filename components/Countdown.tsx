import React, { useState, useEffect } from 'react';
import { WEDDING_DATE } from '../constants';
import { motion } from 'framer-motion';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = WEDDING_DATE.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center mx-3 md:mx-8">
      <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-wedding-pink/30 flex items-center justify-center bg-white shadow-sm relative overflow-hidden group">
        <div className="absolute inset-0 bg-wedding-lightPink/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
        <span className="text-3xl md:text-5xl font-serif text-wedding-darkGray relative z-10">
            {value < 10 ? `0${value}` : value}
        </span>
      </div>
      <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-wedding-gray mt-4 font-medium">
        {label}
      </span>
    </div>
  );

  return (
    <section className="py-20 bg-wedding-cream relative">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <p className="font-script text-3xl md:text-4xl text-wedding-pink mb-2">Đếm ngược ngày hạnh phúc</p>
            <p className="text-wedding-gray font-serif italic">Chỉ còn...</p>
        </motion.div>

        <div className="flex justify-center flex-wrap gap-y-8">
            <TimeUnit value={timeLeft.days} label="Ngày" />
            <TimeUnit value={timeLeft.hours} label="Giờ" />
            <TimeUnit value={timeLeft.minutes} label="Phút" />
            <TimeUnit value={timeLeft.seconds} label="Giây" />
        </div>
      </div>
    </section>
  );
};

export default Countdown;