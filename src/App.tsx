/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InstagramFeed from './components/InstagramFeed';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-romantic-red selection:text-white">
      <Navbar />

      <main>
        <Hero />

        {/* Intro Section */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-8 inline-block"
            >
              <div className="w-16 h-16 rounded-full bg-romantic-blush flex items-center justify-center mx-auto">
                <div className="w-2 h-2 rounded-full bg-romantic-red" />
              </div>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
              Улавяме <span className="italic">неизказаните</span> моменти, тихите погледи и големите празненства.
            </h2>
            <p className="text-stone-500 text-lg leading-relaxed max-w-2xl mx-auto">
              Базирани в България и проектиращи за целия свят, ние сме специализирани в създаването на визуално наследство за двойки, които ценят изкуството и автентичността.
              Независимо дали става въпрос за тиха сватбена церемония или за грандиозно балско събитие, ние разказваме вашата история през романтичен и кинематографичен обектив.
            </p>
          </div>
        </section>

        <InstagramFeed />

        <Gallery />

        {/* Services / Video Section */}
        <section id="services" className="py-24 px-4 bg-stone-900 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-romantic-red uppercase tracking-widest text-sm font-semibold mb-4 block">Кинематография</span>
              <h2 className="text-4xl md:text-6xl font-serif mb-8">Движещи се спомени</h2>
              <p className="text-stone-400 text-lg mb-10 leading-relaxed">
                Нашата видеография не е просто запис на вашия ден; това е кинематографично изживяване.
                Използваме висок клас оборудване и артистичен монтаж, за да създадем филм, който ще искате да гледате на всяка годишнина.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-romantic-red" />
                  <span>4K Кинематографични филми</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-romantic-red" />
                  <span>Пълно отразяване на церемонията и речите</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-romantic-red" />
                  <span>Въздушни кадри с дрон</span>
                </li>
              </ul>
              <button className="bg-white text-stone-900 px-8 py-3 rounded-full font-medium hover:bg-romantic-red hover:text-white transition-all">
                Разгледайте видео пакетите
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200"
                alt="Video Preview"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Testimonials />

        {/* Contact CTA */}
        <section id="contact" className="py-24 px-4 bg-romantic-red text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-7xl font-serif mb-8">Да създадем нещо <span className="italic">красиво</span> заедно.</h2>
            <p className="text-white/80 text-xl mb-12 font-light">
              В момента премаме резервации за 2026 и 2027 г. Ограничени свободни дати.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-romantic-red px-12 py-5 rounded-full text-lg font-semibold hover:bg-stone-900 hover:text-white transition-all shadow-xl">
                Запитване за дата
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
