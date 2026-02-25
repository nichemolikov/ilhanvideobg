import { motion } from 'motion/react';
import { Instagram, Heart, MessageCircle } from 'lucide-react';

const instagramPosts = [
  { id: '1', url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=600', likes: '1.2k', comments: '45' },
  { id: '2', url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=600', likes: '850', comments: '32' },
  { id: '3', url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=600', likes: '2.1k', comments: '89' },
  { id: '4', url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600', likes: '1.5k', comments: '56' },
  { id: '5', url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=600', likes: '920', comments: '28' },
  { id: '6', url: 'https://images.unsplash.com/photo-1465495910483-0d6749ee997b?auto=format&fit=crop&q=80&w=600', likes: '1.8k', comments: '64' },
];

export default function InstagramFeed() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-romantic-red mb-4">
            <Instagram size={20} />
            <span className="uppercase tracking-[0.2em] text-xs font-bold">Follow Our Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif">On Instagram</h2>
        </div>
        <a 
          href="https://www.instagram.com/ilhanvideobg/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-stone-400 hover:text-romantic-red transition-colors flex items-center gap-2 group"
        >
          <span className="font-medium tracking-widest text-sm uppercase">@ilhanvideobg</span>
          <div className="w-8 h-[1px] bg-stone-200 group-hover:bg-romantic-red transition-colors" />
        </a>
      </div>

      <div className="relative">
        <div className="flex gap-4 overflow-x-auto pb-8 px-4 md:px-[calc((100vw-1280px)/2)] no-scrollbar snap-x">
          {instagramPosts.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ y: -10 }}
              className="flex-none w-72 md:w-80 aspect-square relative group rounded-2xl overflow-hidden snap-center shadow-sm"
            >
              <img 
                src={post.url} 
                alt="Instagram Post" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <Heart size={20} fill="white" />
                  <span className="font-semibold">{post.likes}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle size={20} fill="white" />
                  <span className="font-semibold">{post.comments}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Decorative background element */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-32 bg-romantic-blush/30 -z-10" />
      </div>
    </section>
  );
}
