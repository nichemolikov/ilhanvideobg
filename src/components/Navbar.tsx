import { motion } from 'framer-motion';
import { Camera, Video, Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <Heart className="text-romantic-red w-6 h-6 fill-romantic-red" />
            <span className="font-serif text-2xl tracking-tight font-semibold uppercase">ILHAN VIDEO & PHOTO</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest font-medium">
            <a href="#home" className="hover:text-romantic-red transition-colors">Home</a>
            <a href="#gallery" className="hover:text-romantic-red transition-colors">Gallery</a>
            <a href="#services" className="hover:text-romantic-red transition-colors">Services</a>
            <a href="#testimonials" className="hover:text-romantic-red transition-colors">Kind Words</a>
            <a href="#contact" className="bg-romantic-red text-white px-6 py-2 rounded-full hover:bg-stone-900 transition-all">Book Now</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-stone-100 px-4 py-6 space-y-4 flex flex-col items-center text-center"
        >
          <a href="#home" onClick={() => setIsOpen(false)} className="text-lg font-serif">Home</a>
          <a href="#gallery" onClick={() => setIsOpen(false)} className="text-lg font-serif">Gallery</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="text-lg font-serif">Services</a>
          <a href="#testimonials" onClick={() => setIsOpen(false)} className="text-lg font-serif">Kind Words</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="bg-romantic-red text-white px-8 py-3 rounded-full w-full">Book Now</a>
        </motion.div>
      )}
    </nav>
  );
}
