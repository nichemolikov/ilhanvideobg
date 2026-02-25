import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Photo } from '../types';
import { Maximize2, ChevronLeft, ChevronRight, X } from 'lucide-react';

const photos: Photo[] = [
  { id: '1', url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200', category: 'Wedding', title: 'Sunset Vows' },
  { id: '2', url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1200', category: 'Wedding', title: 'The First Dance' },
  { id: '3', url: 'https://images.unsplash.com/photo-1465495910483-0d6749ee997b?auto=format&fit=crop&q=80&w=1200', category: 'Engagement', title: 'City Lights' },
  { id: '4', url: 'https://images.unsplash.com/photo-1522673607200-1648832cee98?auto=format&fit=crop&q=80&w=1200', category: 'Wedding', title: 'Bridal Details' },
  { id: '5', url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1200', category: 'Video', title: 'Cinematic Highlights' },
  { id: '6', url: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=1200', category: 'Engagement', title: 'Forest Walk' },
];

export default function Gallery() {
  const [filter, setFilter] = useState<'All' | 'Wedding' | 'Engagement' | 'Video'>('All');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filteredPhotos = filter === 'All' ? photos : photos.filter(p => p.category === filter);

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
          <h2 className="text-4xl md:text-6xl font-serif mb-4">The Gallery</h2>
          <p className="text-stone-500 max-w-xl mx-auto italic">A curated collection of moments that tell a story of love, laughter, and forever.</p>
        </div>

        <div className="flex justify-center gap-4 md:gap-8 mb-12 text-sm uppercase tracking-widest font-medium overflow-x-auto pb-4 no-scrollbar">
          {['All', 'Wedding', 'Engagement', 'Video'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`pb-2 transition-all border-b-2 whitespace-nowrap ${filter === cat ? 'border-romantic-red text-romantic-red scale-105' : 'border-transparent text-stone-400 hover:text-stone-600'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredPhotos.map((photo) => (
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
