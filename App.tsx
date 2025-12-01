import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Story from './components/Story';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Rsvp from './components/Rsvp';
import { Music, Pause, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Audio play failed", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const navItems = [
    { label: "Trang chủ", href: "#hero" },
    { label: "Chuyện tình", href: "#story" },
    { label: "Sự kiện", href: "#events" },
    { label: "Album", href: "#gallery" },
    { label: "Gửi lời chúc", href: "#rsvp" },
  ];

  return (
    <div className="min-h-screen font-sans text-gray-800">
      <audio ref={audioRef} loop>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mp3" />
      </audio>

      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <a href="#" className={`font-script text-2xl md:text-3xl font-bold ${isScrolled ? 'text-wedding-pink' : 'text-white'} transition-colors`}>
            Bình & Ngọc
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href} 
                  className={`text-sm uppercase tracking-widest font-medium hover:text-wedding-pink transition-colors ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center space-y-8"
          >
            <button 
              className="absolute top-6 right-6 text-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="text-2xl font-serif text-gray-800 hover:text-wedding-pink"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Music Toggle */}
      <button 
        onClick={toggleMusic}
        className="fixed bottom-6 left-6 z-40 w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur rounded-full shadow-lg text-wedding-pink border border-wedding-pink/30 hover:bg-wedding-pink hover:text-white transition-all duration-300"
      >
        {isPlaying ? <Pause size={20} className="animate-spin-slow" /> : <Music size={20} />}
      </button>

      <main>
        <Hero />
        <Countdown />
        <Story />
        <Events />
        <Gallery />
        <Rsvp />
      </main>

      <footer className="bg-wedding-darkGray text-white py-12 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
             <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[40px] w-[calc(100%+1.3px)] fill-wedding-cream">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
            </svg>
        </div>
        <div className="relative z-10 pt-8">
            <h2 className="font-script text-4xl md:text-5xl mb-6">Thank You</h2>
            <p className="text-gray-300 text-sm md:text-base font-serif italic max-w-lg mx-auto px-4">
                "Cảm ơn bạn đã là một phần trong ngày hạnh phúc nhất cuộc đời chúng mình."
            </p>
            <div className="mt-8 text-xs text-gray-500 uppercase tracking-widest">
                Forever & Always
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;