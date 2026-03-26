import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Heart, ArrowRight, Sun, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-iskcon-dark text-white py-32 md:py-48 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* ✅ Overlay made lighter */}
        <div className="absolute inset-0 bg-gradient-to-t from-iskcon-dark via-iskcon-dark/40 to-transparent z-10"></div>
        {/* ✅ Image made clearer */}
        <motion.div 
          initial={{ scale: 1.05 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 opacity-100 bg-[url('/src/assets/altar.jpeg')] bg-cover bg-center"
        ></motion.div>
        
        <div className="relative z-20 max-w-7xl mx-auto text-center mt-12">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full border border-iskcon-gold/50 bg-iskcon-dark/40 backdrop-blur-sm text-iskcon-gold text-sm font-bold uppercase tracking-widest mb-6 shadow-xl"
          >
            <Sparkles className="h-4 w-4 mr-2 animate-pulse" />
            Spiritual Capital of Lumbini
          </motion.div>

          {/* ✅ TEXT FIXED TO WHITE */}
          <motion.h1 
            initial="hidden" 
            animate="visible" 
            variants={fadeUp} 
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold tracking-tight mb-6 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
          >
            Experience <span className="text-white">Devotion</span> &<br className="hidden md:block"/> Spiritual Bliss
          </motion.h1>

          <motion.p 
            initial="hidden" 
            animate="visible" 
            variants={fadeUp} 
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-lg sm:text-2xl text-iskcon-cream max-w-3xl mx-auto mb-12 drop-shadow-md font-medium"
          >
            Immerse yourself in ecstatic kirtan, ancient Vedic wisdom, and selfless service at ISKCON Butwal.
          </motion.p>

          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeUp} 
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-iskcon-dark bg-gradient-to-r from-iskcon-yellow to-iskcon-gold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-[0_0_20px_rgba(253,184,19,0.4)] transform hover:-translate-y-1 uppercase tracking-wider">
              Visit Temple
            </Link>

            <Link to="/donate" className="inline-flex items-center justify-center px-8 py-4 border-2 border-iskcon-yellow text-base font-bold rounded-full text-iskcon-yellow hover:bg-iskcon-yellow hover:text-iskcon-dark transition-all duration-300 shadow-lg transform hover:-translate-y-1 uppercase tracking-wider bg-iskcon-dark/30 backdrop-blur-sm">
              Donate <Heart className="ml-2 h-5 w-5 group-hover:text-iskcon-red transition-colors" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="h-3 bg-gradient-to-r from-iskcon-red via-iskcon-orange to-iskcon-yellow"></div>

      {/* Quick Info Section */}
      <section className="py-24 relative overflow-hidden bg-iskcon-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-iskcon-dark mb-4 drop-shadow-sm">Embrace A Life of Joy</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">Engage your senses in the service of the Lord and experience eternal happiness.</p>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {/* Card 1 */}
            <motion.div variants={fadeUp} className="bg-white rounded-[2rem] p-10 shadow-lg border border-iskcon-gold/20 hover:shadow-2xl hover:border-iskcon-orange/50 transition-all duration-500 transform hover:-translate-y-2 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -z-10 transition-transform duration-700 group-hover:scale-125"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl flex justify-center items-center mb-8 shadow-inner border border-white group-hover:rotate-12 transition-transform duration-500">
                <Sun className="h-10 w-10 text-iskcon-orange" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4 text-iskcon-dark">Daily Darshan</h3>
              <p className="text-gray-600 mb-8 leading-relaxed font-light text-lg">Join us for enchanting morning and evening Arati, soul-stirring Kirtan, and profound Bhagavad-Gita discourses.</p>
              <Link to="/programs" className="text-iskcon-orange font-bold inline-flex items-center hover:text-iskcon-red uppercase tracking-widest text-sm transition-colors">
                View Schedule <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
              </Link>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={fadeUp} className="bg-white rounded-[2rem] p-10 shadow-lg border border-iskcon-gold/20 hover:shadow-2xl hover:border-iskcon-orange/50 transition-all duration-500 transform hover:-translate-y-2 group relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-50 rounded-bl-full -z-10 transition-transform duration-700 group-hover:scale-125"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl flex justify-center items-center mb-8 shadow-inner border border-white group-hover:rotate-12 transition-transform duration-500">
                <Calendar className="h-10 w-10 text-iskcon-yellow" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4 text-iskcon-dark">Joyous Festivals</h3>
              <p className="text-gray-600 mb-8 leading-relaxed font-light text-lg">Celebrate ecstatic festivals like Janmashtami, Ratha Yatra, and Gaura Purnima with massive feasts and dancing.</p>
              <Link to="/events" className="text-iskcon-orange font-bold inline-flex items-center hover:text-iskcon-red uppercase tracking-widest text-sm transition-colors">
                View Calendar <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
              </Link>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeUp} className="bg-white rounded-[2rem] p-10 shadow-lg border border-iskcon-gold/20 hover:shadow-2xl hover:border-iskcon-orange/50 transition-all duration-500 transform hover:-translate-y-2 group relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -z-10 transition-transform duration-700 group-hover:scale-125"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl flex justify-center items-center mb-8 shadow-inner border border-white group-hover:rotate-12 transition-transform duration-500">
                <Heart className="h-10 w-10 text-iskcon-red" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4 text-iskcon-dark">Devotional Service</h3>
              <p className="text-gray-600 mb-8 leading-relaxed font-light text-lg">Purify the heart by supporting our Goshala (cow protection) and Food for Life distribution programs.</p>
              <Link to="/donate" className="text-iskcon-orange font-bold inline-flex items-center hover:text-iskcon-red uppercase tracking-widest text-sm transition-colors">
                Support Now <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;