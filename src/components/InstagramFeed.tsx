import { motion } from 'motion/react';
import { Instagram, Heart, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { fetchInstagramPhotos, InstagramPost } from '../services/instagramService';

export default function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      setLoading(true);
      const data = await fetchInstagramPhotos('https://www.instagram.com/ilhanvideobg/');
      setPosts(data);
      setLoading(false);
    }
    loadPosts();
  }, []);

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
          {loading ? (
            // Skeleton Placeholders
            Array.from({ length: 6 }).map((_, i) => (
              <div 
                key={i} 
                className="flex-none w-72 md:w-80 aspect-square bg-stone-100 rounded-2xl animate-pulse"
              />
            ))
          ) : (
            posts.map((post) => (
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
            ))
          )}
        </div>
        
        {/* Decorative background element */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-32 bg-romantic-blush/30 -z-10" />
      </div>
    </section>
  );
}
