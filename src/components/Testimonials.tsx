import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah & James',
    text: 'Working with Ethereal Moments was the best decision we made for our wedding. They captured emotions we didn\'t even know we were showing. The photos are pure magic.',
    date: 'October 2025'
  },
  {
    id: '2',
    name: 'Emily & Michael',
    text: 'The video brought us to tears. It felt like a movie of our own lives. Professional, kind, and incredibly talented. We can\'t thank you enough!',
    date: 'August 2025'
  },
  {
    id: '3',
    name: 'Jessica & David',
    text: 'They have an eye for the small details that make a wedding special. Every time we look at our album, we are transported back to that day.',
    date: 'June 2025'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif mb-4">Kind Words</h2>
          <div className="w-24 h-[1px] bg-romantic-red mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              key={t.id}
              className="relative p-8 rounded-3xl border border-stone-100 bg-romantic-blush/30"
            >
              <Quote className="text-romantic-red/20 w-12 h-12 absolute top-6 right-6" />
              <p className="text-stone-700 leading-relaxed mb-8 italic font-serif text-lg">
                "{t.text}"
              </p>
              <div>
                <h4 className="font-semibold text-stone-900">{t.name}</h4>
                <p className="text-stone-400 text-sm">{t.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
