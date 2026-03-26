import React from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import prabhupadaImg from '../assets/WhatsApp Image 2026-03-26 at 12.02.44 PM.jpeg';

const About = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-iskcon-cream py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-iskcon-yellow/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-iskcon-orange/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Sparkles className="h-10 w-10 text-iskcon-gold mx-auto mb-4 animate-[bounce_3s_ease-in-out_infinite]" />
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-iskcon-dark mb-4 drop-shadow-sm">About ISKCON Butwal</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-iskcon-orange to-iskcon-gold mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="space-y-16 text-lg text-gray-700 leading-relaxed font-light">
          <motion.section 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} transition={{ duration: 0.6 }}
            className="bg-white p-10 md:p-12 rounded-[2rem] shadow-xl border border-iskcon-gold/20 hover:shadow-2xl transition-shadow duration-300 flex flex-col md:flex-row gap-10 items-center"
          >
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-iskcon-red font-heading mb-6 flex items-center">
                <span className="text-iskcon-gold mr-3">❖</span> The ISKCON Movement
              </h2>
              <p className="mb-6 text-gray-600 leading-relaxed">
                The International Society for Krishna Consciousness (ISKCON) was officially founded in New York City in 1966 by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada. In just over half a century, ISKCON has grown globally with hundreds of temples, rural communities, educational institutions, and vegetarian restaurants.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We belong to the Gaudiya-Vaishnava sampradaya, a monotheistic tradition within Vedic culture. Philosophically, it is based on the ancient Sanskrit texts the Bhagavad-gita and Srimad-Bhagavatam.
              </p>
            </div>
            <div className="md:w-1/3 w-full flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-iskcon-gold/40 transform hover:scale-105 transition-transform duration-500">
                <img src={prabhupadaImg} alt="Srila Prabhupada" className="w-full h-auto object-cover max-h-72" />
              </div>
            </div>
          </motion.section>

          <motion.section 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-10 md:p-12 rounded-[2rem] shadow-xl border border-iskcon-gold/20 hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-3xl font-bold text-iskcon-orange font-heading mb-6 flex items-center">
              <span className="text-iskcon-gold mr-3">❖</span> Spiritual Oasis
            </h2>
            <p className="mb-6 text-gray-600">
              Established as a spiritual haven in the heart of Lumbini province, <strong className="text-iskcon-dark font-bold">ISKCON Butwal</strong> serves the local community by providing a welcoming environment for spiritual education, joyful congregational chanting (Kirtan), and dedicated devotional service. 
            </p>
            <p className="text-gray-600">
              Our temple acts as a vibrant cultural and spiritual center, hosting daily morning and evening programs, massive Sunday feasts, and grand celebrations of major Vedic festivals that bring the entire community together.
            </p>
          </motion.section>

          <motion.section 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-iskcon-dark to-iskcon-red p-10 md:p-14 rounded-[2rem] shadow-2xl text-iskcon-cream relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/floral-deco.png')] mix-blend-overlay"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-iskcon-gold font-heading mb-10 text-center drop-shadow-md">Mission & Vision</h2>
              
              <div className="mb-10 bg-white/5 p-8 rounded-2xl border border-iskcon-gold/20 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <h3 className="text-2xl font-bold text-iskcon-yellow mb-4 font-heading tracking-wide">Our Mission</h3>
                <p className="text-iskcon-cream/90 text-lg leading-relaxed">To systematically propagate spiritual knowledge to society at large and to educate all people in the techniques of spiritual life. Specifically, to serve the local Butwal community through dynamic devotional service, scriptural education, and the distribution of sanctified food (Prasadam).</p>
              </div>
              
              <div className="bg-white/5 p-8 rounded-2xl border border-iskcon-gold/20 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <h3 className="text-2xl font-bold text-iskcon-yellow mb-4 font-heading tracking-wide">Our Vision</h3>
                <p className="text-iskcon-cream/90 text-lg leading-relaxed">To cultivate a spiritually vibrant and deeply connected community in Butwal, focusing on deep devotion to Lord Krishna, the preservation of timeless Vedic culture, youth empowerment, and sustainable living such as dedicated cow protection (Goshala).</p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default About;
