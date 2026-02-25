import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Photo } from '../types';
import { Maximize2, ChevronLeft, ChevronRight, X } from 'lucide-react';

const photos: Photo[] = [
  { id: 'w1', url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200', category: 'Wedding', title: 'Романтичен детайл' },
  { id: 'w2', url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200', category: 'Wedding', title: 'Обети по залез' },
  { id: 'w3', url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1200', category: 'Engagement', title: 'Първият танц' },
  { id: 'w4', url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=1200', category: 'Video', title: 'До олтара' },
  { id: 'w5', url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200', category: 'Wedding', title: 'Любов в планината' },
  { id: 'w6', url: 'https://images.unsplash.com/photo-1465495910483-0d6749ee997b?auto=format&fit=crop&q=80&w=1200', category: 'Engagement', title: 'Чиста радост' },
  { id: 'w7', url: 'https://images.unsplash.com/photo-1522673607200-1648832cee98?auto=format&fit=crop&q=80&w=1200', category: 'Video', title: 'Сватбени детайли' },
  { id: 'w8', url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200', category: 'Wedding', title: 'След церемонията' },
  { id: 'w9', url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1200', category: 'Engagement', title: 'Лятна приказка' },
  { id: 'w10', url: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&q=80&w=1200', category: 'Video', title: 'Тост за младите' },
  { id: 'w11', url: 'https://images.unsplash.com/photo-1546190255-451a91afc548?auto=format&fit=crop&q=80&w=1200', category: 'Wedding', title: 'Емоционален момент' },
  { id: 'w12', url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1200', category: 'Engagement', title: 'Кинематографичен кадър' },
  { id: 'w13', url: 'https://images.unsplash.com/photo-1439534020304-2eb74a6ec53d?auto=format&fit=crop&q=80&w=1200', category: 'Video', title: 'Пръстените' },
  { id: 'w14', url: 'https://images.unsplash.com/photo-1425421664466-3d7de30efb6b?auto=format&fit=crop&q=80&w=1200', category: 'Wedding', title: 'Подготовката' },
  { id: 'w15', url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=1200', category: 'Engagement', title: 'Щастие' },
  { id: 'w16', url: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=1200', category: 'Engagement', title: 'Предложение' },
  { id: 'w17', url: 'https://images.unsplash.com/photo-1513271916198-48884842e857?auto=format&fit=crop&q=80&w=1200', category: 'Engagement', title: 'Разходка в гората' },
  { id: 'w18', url: 'https://images.unsplash.com/photo-1517832207067-4db24a2ae07c?auto=format&fit=crop&q=80&w=1200', category: 'Engagement', title: 'Любовен поглед' },
  { id: 'w19', url: 'https://images.unsplash.com/photo-1512132411229-c30391241dd8?auto=format&fit=crop&q=80&w=1200', category: 'Video', title: 'Сватбен тост' },
  { id: 'w20', url: 'https://images.unsplash.com/photo-1518151820524-a71991206606?auto=format&fit=crop&q=80&w=1200', category: 'Wedding', title: 'Първа целувка' },
  { id: 'w21', url: 'https://images.unsplash.com/photo-1475714622030-d0884893c10e?auto=format&fit=crop&q=80&w=1200', category: 'Video', title: 'Празнична вечер' },
  { id: 'w22', url: 'https://images.unsplash.com/photo-1504933350103-e840ede978d4?auto=format&fit=crop&q=80&w=1200', category: 'Engagement', title: 'Ръка за ръка' },
  { id: 'w23', url: 'https://images.unsplash.com/photo-1524824267900-2fa9cbf7a506?auto=format&fit=crop&q=80&w=1200', category: 'Wedding', title: 'Стилни младоженци' },
  { id: 'w24', url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200', category: 'Video', title: 'Светлината на любовта' },
  { id: 'w25', url: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=1200', category: 'Engagement', title: 'Магията на момента' },
  { id: 'w26', url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200', category: 'Wedding', title: 'Сватбено пътешествие' },
  { id: 'w27', url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200', category: 'Video', title: 'Празничен декор' },
  { id: 'w28', url: 'https://images.unsplash.com/photo-1522673607200-1648832cee98?auto=format&fit=crop&q=80&w=1200', category: 'Wedding', title: 'Нежност' },
  { id: 'w29', url: 'https://images.unsplash.com/photo-1546190255-451a91afc548?auto=format&fit=crop&q=80&w=1200', category: 'Engagement', title: 'Заедно' },
  { id: 'w30', url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1200', category: 'Video', title: 'Лятна вечер' }
];

export default function Gallery() {
  const [filter, setFilter] = useState<'All' | 'Wedding' | 'Engagement' | 'Video'>('All');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const filteredPhotos = filter === 'All' ? photos : photos.filter(p => p.category === filter);
  const visiblePhotos = isExpanded ? filteredPhotos : filteredPhotos.slice(0, 9);

  const openLightbox = (id: string) => {
    const index = photos.findIndex(p => p.id === id);
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => setSelectedPhotoIndex(null);

  const nextPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % photos.length);
    }
  };

  const prevPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + photos.length) % photos.length);
    }
  };

  return (
    <section id="gallery" className="py-24 px-4 bg-romantic-blush">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif mb-4">Галерия</h2>
          <p className="text-stone-500 max-w-xl mx-auto italic">Колекция от моменти, които разказват историята на вашата любов, смях и вечност.</p>
        </div>

        <div className="flex justify-center gap-4 md:gap-8 mb-12 text-sm uppercase tracking-widest font-medium overflow-x-auto pb-4 no-scrollbar">
          {[
            { id: 'All', label: 'Всички' },
            { id: 'Wedding', label: 'Сватби' },
            { id: 'Engagement', label: 'Фотосесии' },
            { id: 'Video', label: 'Видео' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setFilter(cat.id as any);
                setIsExpanded(false); // Reset expansion on filter change
              }}
              className={`pb-2 transition-all border-b-2 whitespace-nowrap ${filter === cat.id ? 'border-romantic-red text-romantic-red scale-105' : 'border-transparent text-stone-400 hover:text-stone-600'}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {visiblePhotos.map((photo) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                key={photo.id}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-stone-200 cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500"
                onClick={() => openLightbox(photo.id)}
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md p-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Maximize2 className="text-white w-5 h-5" />
                  </div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <p className="text-white/70 text-xs uppercase tracking-widest mb-1">{photo.category}</p>
                    <h3 className="text-white text-2xl font-serif">{photo.title}</h3>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {!isExpanded && filteredPhotos.length > 9 && (
          <div className="mt-16 text-center">
            <button
              onClick={() => setIsExpanded(true)}
              className="bg-romantic-red text-white px-10 py-4 rounded-full font-medium hover:bg-stone-900 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Виж повече снимки
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Carousel */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110]"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>

            <button
              className="absolute left-4 md:left-10 text-white/50 hover:text-white transition-colors z-[110] bg-white/5 p-3 rounded-full backdrop-blur-sm"
              onClick={prevPhoto}
            >
              <ChevronLeft size={32} />
            </button>

            <button
              className="absolute right-4 md:right-10 text-white/50 hover:text-white transition-colors z-[110] bg-white/5 p-3 rounded-full backdrop-blur-sm"
              onClick={nextPhoto}
            >
              <ChevronRight size={32} />
            </button>

            <motion.div
              key={selectedPhotoIndex}
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[selectedPhotoIndex].url}
                alt={photos[selectedPhotoIndex].title}
                className="max-h-[80vh] w-auto object-contain rounded-lg shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="mt-8 text-center">
                <p className="text-romantic-red uppercase tracking-[0.2em] text-xs font-semibold mb-2">
                  {photos[selectedPhotoIndex].category}
                </p>
                <h3 className="text-white text-3xl md:text-4xl font-serif">
                  {photos[selectedPhotoIndex].title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
