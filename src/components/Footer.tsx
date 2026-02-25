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
            Specializing in romantic, cinematic wedding photography and videography. 
            We believe every love story deserves to be told with elegance and authenticity.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-6">Quick Links</h4>
          <ul className="space-y-4 text-stone-400">
            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#testimonials" className="hover:text-white transition-colors">Kind Words</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-6">Contact</h4>
          <ul className="space-y-4 text-stone-400">
            <li>hello@etherealmoments.com</li>
            <li>+1 (555) 123-4567</li>
            <li>Studio 42, Creative District<br />New York, NY 10001</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 text-center text-stone-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Ethereal Moments Photography. All rights reserved.</p>
      </div>
    </footer>
  );
}
