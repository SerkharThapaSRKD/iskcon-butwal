import React, { useState } from 'react';
import { ShoppingBag, Heart, AlertCircle, Phone } from 'lucide-react';

const allProducts = [
  // Books (Major)
  { name: "Bhagavad-gītā As It Is", category: "Books", price: "Rs. 250", desc: "The definitive commentary on the ancient science of yoga.", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400" },
  { name: "Śrīmad-Bhāgavatam", category: "Books", price: "Rs. 4500", desc: "A sweeping narration of devotional pastimes.", image: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&q=80&w=400" },
  { name: "Śrī Caitanya-caritāmṛta", category: "Books", price: "Rs. 3200", desc: "The ultimate life and teachings of Lord Caitanya.", image: "https://images.unsplash.com/photo-1608678854045-84e5a95f87b8?auto=format&fit=crop&q=80&w=400" },
  { name: "Kṛṣṇa Book", category: "Books", price: "Rs. 400", desc: "A beautiful, nectarine summary of Lord Krishna’s pastimes.", image: "https://images.unsplash.com/photo-1598885511440-218a568ce3d1?auto=format&fit=crop&q=80&w=400" },
  { name: "Teachings of Lord Caitanya", category: "Books", price: "Rs. 150", desc: "Core philosophical teachings revealed to His eternal associates.", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400" },
  { name: "The Nectar of Devotion", category: "Books", price: "Rs. 200", desc: "The complete, systematic science of Bhakti Yoga.", image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400" },
  { name: "Sri Isopanishad", category: "Books", price: "Rs. 50", desc: "Direct spiritual knowledge from the oldest Vedic literature.", image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=400" },
  { name: "The Science of Self-Realization", category: "Books", price: "Rs. 150", desc: "Essays and interviews explaining the universal science of devotion.", image: "https://images.unsplash.com/photo-1542871793-fd7e2b3ce8fb?auto=format&fit=crop&q=80&w=400" },
  { name: "Beyond Birth and Death", category: "Books", price: "Rs. 40", desc: "Understand reincarnation and how to escape the cycle completely.", image: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?auto=format&fit=crop&q=80&w=400" },
  
  // Devotional Gifts
  { name: "Tulasi Japa Mala", category: "Meditation", price: "Rs. 250", desc: "108 sacred Tulasi beads for deep and focused daily chanting.", image: "https://images.unsplash.com/photo-1629814552912-25de07b66a87?auto=format&fit=crop&q=80&w=400" },
  { name: "Chanting Bag (Gomukhi)", category: "Meditation", price: "Rs. 150", desc: "Vibrantly embroidered bag to keep your Japa Mala pure and clean.", image: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&q=80&w=400" },
  { name: "Sakshi Mala", category: "Meditation", price: "Rs. 50", desc: "Small colored counter beads used securely track your daily rounds.", image: "https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=400" },
  { name: "Digital Japa Counter", category: "Meditation", price: "Rs. 100", desc: "Compact finger counters for keeping track of chanting everywhere.", image: "https://images.unsplash.com/photo-1517420704952-d9f390d40af0?auto=format&fit=crop&q=80&w=400" },

  // Apparel
  { name: "Traditional Kurta Dhoti", category: "Apparel", price: "Rs. 1200", desc: "Elegant, comfortable cotton dhoti-kurta sets for temple wear.", image: "https://images.unsplash.com/photo-1583391733958-d25e07fac044?auto=format&fit=crop&q=80&w=400" },
  { name: "Tulasi Kanthi Mala", category: "Apparel", price: "Rs. 100", desc: "Sacred 3-round or 2-round Tulasi neck beads worn by devotees.", image: "https://images.unsplash.com/photo-1611078564243-70fc1ccb8b20?auto=format&fit=crop&q=80&w=400" },
  { name: "Hare Krishna Dupatta", category: "Apparel", price: "Rs. 250", desc: "Beautiful cotton scarves printed with the Holy Mahamantra.", image: "https://images.unsplash.com/photo-1606555198428-ec2f2052fcb0?auto=format&fit=crop&q=80&w=400" },
  
  // Altar
  { name: "Deity Picture Frame", category: "Altar", price: "Rs. 500", desc: "Gorgeous gold-framed portraits of Sri Sri Radha Madhava.", image: "https://images.unsplash.com/photo-1598885511440-218a568ce3d1?auto=format&fit=crop&q=80&w=400" },
  { name: "Spiritual Perfume (Attar)", category: "Altar", price: "Rs. 300", desc: "100% pure alcohol-free Sandalwood and Rose essential oils.", image: "https://images.unsplash.com/photo-1611078174526-9b16550f2249?auto=format&fit=crop&q=80&w=400" },
  { name: "Pure Agarbatti (Incense)", category: "Altar", price: "Rs. 150", desc: "Hand-rolled aroma incense perfect for pleasing the deities.", image: "https://images.unsplash.com/photo-1608678854045-84e5a95f87b8?auto=format&fit=crop&q=80&w=400" },
  { name: "Brass Arati Setup", category: "Altar", price: "Rs. 1500", desc: "Complete 5-item brass arati offering set for home worship.", image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&q=80&w=400" },
  
  // Mixed
  { name: "Spiritual Key Chains", category: "Gifts", price: "Rs. 80", desc: "Premium keychains featuring Lord Krishna and Srila Prabhupada.", image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=400" },
  { name: "Cow & Calf Toys", category: "Gifts", price: "Rs. 450", desc: "Super soft and beautifully made plush toys for children.", image: "https://images.unsplash.com/photo-1541689592655-f5f52825a3b8?auto=format&fit=crop&q=80&w=400" },
];

const giftCategories = ['All', 'Books', 'Meditation', 'Apparel', 'Altar', 'Gifts'];

const GiftShop = () => {
  const [filter, setFilter] = useState('All');
  
  const displayProducts = filter === 'All' ? allProducts : allProducts.filter(p => p.category === filter);

  return (
    <div className="bg-iskcon-cream py-20 px-4 sm:px-6 lg:px-8 relative min-h-screen">
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-iskcon-yellow/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <ShoppingBag className="h-12 w-12 text-iskcon-orange mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-iskcon-dark mb-6 drop-shadow-sm">All Devotional Products</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Browse our entire collection. Bring joy into your spiritual life with Prabhupada's foundational books, meditation gear, and gorgeous altar accessories.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-iskcon-orange to-iskcon-gold mx-auto rounded-full mt-8"></div>
        </div>

        {/* Filter Row */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {giftCategories.map((cat) => (
            <button 
              key={cat} 
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-sm ${filter === cat ? 'bg-gradient-to-r from-iskcon-orange to-iskcon-gold text-white shadow-md transform -translate-y-1' : 'bg-white text-gray-600 hover:text-iskcon-orange border border-gray-100'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-24">
          {displayProducts.map((item, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-iskcon-gold/20 hover:shadow-2xl hover:border-iskcon-orange/40 transition-all duration-300 group flex flex-col transform hover:-translate-y-2">
              <div className="relative overflow-hidden h-56">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-500"></div>
                {/* Fallback pattern */}
                <div className="w-full h-full bg-orange-50 absolute inset-0 -z-10"></div>
                <img src={item.image} alt={item.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold text-iskcon-red shadow-md border border-iskcon-gold/30 uppercase tracking-widest">
                  {item.category}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-heading text-iskcon-dark mb-3 leading-tight tracking-wide">{item.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light">{item.desc}</p>
                </div>
                
                <div className="flex items-center justify-between border-t border-gray-100 pt-5 mt-auto">
                  <span className="text-xl font-black text-gray-800 tracking-wide">{item.price}</span>
                  <button className="flex items-center justify-center text-sm font-bold text-white bg-iskcon-red hover:bg-iskcon-orange hover:shadow-md px-5 py-2.5 rounded-xl transition-all uppercase tracking-wider">
                    <Heart className="h-4 w-4 mr-2" /> Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Contact/Info Banner */}
        <div className="bg-gradient-to-br from-iskcon-dark to-iskcon-red rounded-[3rem] p-10 md:p-14 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/floral-deco.png')] mix-blend-overlay"></div>
          <div className="relative z-10 md:w-2/3 text-center md:text-left mb-8 md:mb-0 md:pr-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-iskcon-yellow drop-shadow-md">Have questions or making a bulk order?</h2>
            <p className="text-lg text-iskcon-cream/90 font-light leading-relaxed">
              We directly pack and ship all items from ISKCON Butwal. For immediate orders, international shipping, or bulk discounts on Prabhupada's books, please reach out to our service team.
            </p>
          </div>
          <div className="relative z-10 md:w-1/3 flex justify-center md:justify-end">
            <a href="/contact" className="inline-flex items-center px-8 py-5 bg-gradient-to-r from-iskcon-gold to-yellow-500 text-iskcon-dark font-black uppercase tracking-widest rounded-full hover:from-yellow-400 hover:to-yellow-400 transition-all shadow-[0_0_20px_rgba(253,184,19,0.3)] transform hover:-translate-y-1">
              <Phone className="h-5 w-5 mr-3" /> Contact Shop
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftShop;
