import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000" 
          alt="Wedding Hero" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/90 uppercase tracking-[0.3em] text-sm font-medium mb-4 block"
        >
          Capturing Timeless Love
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-8xl text-white font-serif mb-8 leading-tight"
        >
          Your wedding is <br />
          <span className="italic">important</span> to us.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          Are your guests like this? Joyful, teary-eyed, and dancing like nobody's watching. 
          We don't just take photos; we preserve the soul of your celebration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#gallery" className="bg-white text-stone-900 px-10 py-4 rounded-full font-medium hover:bg-romantic-red hover:text-white transition-all duration-300">
            View Our Work
          </a>
          <a href="#contact" className="border border-white text-white px-10 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300">
            Check Availability
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-[1px] h-12 bg-white/30 mx-auto" />
      </motion.div>
    </section>
  );
}
