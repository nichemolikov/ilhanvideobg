import { Heart, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <Heart className="text-romantic-red w-6 h-6 fill-romantic-red" />
            <span className="font-serif text-3xl tracking-tight font-semibold uppercase">ILHAN VIDEO & PHOTO</span>
          </div>
          <p className="text-stone-400 max-w-md leading-relaxed mb-8">
            Специализираме в романтична, кинематографична сватбена фотография и видеография.
            Вярваме, че всяка любовна история заслужава да бъде разказана с елегантност и автентичност.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-6">Бързи връзки</h4>
          <ul className="space-y-4 text-stone-400">
            <li><a href="#home" className="hover:text-white transition-colors">Начало</a></li>
            <li><a href="#gallery" className="hover:text-white transition-colors">Галерия</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Услуги</a></li>
            <li><a href="#testimonials" className="hover:text-white transition-colors">Отзиви</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-6">Контакти</h4>
          <ul className="space-y-4 text-stone-400">
            <li>hello@ilhanvideo.bg</li>
            <li>+359 888 123 456</li>
            <li>България, София</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 text-center text-stone-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Ilhan Video & Photo. Всички права запазени.</p>
      </div>
    </footer>
  );
}
