import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-stone-900">
      {/* Background Image with subtle zoom */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=85&w=2000"
          alt="Wedding Hero"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Multi-layered overlay for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-romantic-red uppercase tracking-[0.4em] text-xs md:text-sm font-bold mb-6 block drop-shadow-md"
        >
          Улавяме вечната любов
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-8xl lg:text-9xl text-white font-serif mb-8 leading-[1.1] drop-shadow-2xl"
        >
          Вашата сватба е <br />
          <span className="italic relative inline-block">
            важна
            <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-2 md:h-4 text-romantic-red/40" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0 10 Q 50 0 100 10" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </span> за нас.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-white/90 text-lg md:text-2xl max-w-3xl mx-auto mb-12 font-light leading-relaxed drop-shadow-lg"
        >
          Ние не просто правим снимки. Ние съхраняваме Вашата история точно така, както я преживявате –
          с цялото вълнение, сълзи от щастие и незабравими емоции.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a href="#gallery" className="group relative bg-white text-stone-900 px-12 py-5 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:text-white shadow-2xl">
            <span className="relative z-10 uppercase tracking-widest text-sm">Вижте нашето портфолио</span>
            <div className="absolute inset-0 bg-romantic-red translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a href="#contact" className="px-12 py-5 rounded-full font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm uppercase tracking-widest text-sm">
            Провери наличност
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
