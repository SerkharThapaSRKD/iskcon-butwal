import React from 'react';
import { Camera } from 'lucide-react';

// Dynamically import all locally uploaded images from the assets folder using Vite
const assetImages = import.meta.glob('../assets/*.{jpeg,jpg,png}', { eager: true });
const images = Object.values(assetImages).map((module) => module.default);

// Fallback images if the assets folder is empty
const fallbackImages = [
  'https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1598885511440-218a568ce3d1?auto=format&fit=crop&w=800&q=80'
];

const displayImages = images.length > 0 ? images : fallbackImages;

const Gallery = () => {
  return (
    <div className="bg-iskcon-cream py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto text-center">
        <Camera className="h-10 w-10 text-iskcon-orange mx-auto mb-6" />
        <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-iskcon-dark mb-6 drop-shadow-sm">Temple Gallery</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-16 font-light">Glimpses of our exquisite deity darshans, vibrant festivals, and joyful community directly from ISKCON Butwal.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {displayImages.map((src, i) => (
            <div key={i} className="group relative rounded-3xl overflow-hidden shadow-xl border-4 border-white hover:border-iskcon-gold transition-all duration-300 transform hover:-translate-y-2 bg-gray-100 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-iskcon-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <img src={src} alt={`ISKCON Devotion ${i}`} className="object-cover w-full h-72 lg:h-80 group-hover:scale-110 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Gallery;
