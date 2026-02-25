import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Мария и Иван',
    text: 'Работата с Илхан беше най-доброто решение за нашата сватба. Те уловиха емоции, за които дори не подозирахме. Снимките са истинска магия.',
    date: 'Октомври 2025'
  },
  {
    id: '2',
    name: 'Елена и Михаил',
    text: 'Видеото ни разплака. Чувствахме се като във филм за собствения ни живот. Професионално, любезно и невероятно талантливо отношение!',
    date: 'Август 2025'
  },
  {
    id: '3',
    name: 'Йоана и Давид',
    text: 'Имат невероятно око за малките детайли, които правят една сватба специална. Всеки път, когато гледаме албума си, се пренасяме обратно в онзи ден.',
    date: 'Юни 2025'
  },
  {
    id: '4',
    name: 'Силвия и Калин',
    text: 'Изключително висока летяща топка! Видеото надмина всичките ни очаквания. Енергията на празника е уловена перфектно.',
    date: 'Май 2025'
  },
  {
    id: '5',
    name: 'Анна и Петър',
    text: 'Благодарим за търпението и професионализма. Снимките са топли, живи и точно това, което си представяхме за нашия ден.',
    date: 'Септември 2025'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif mb-4">Отзиви от нашите клиенти</h2>
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
