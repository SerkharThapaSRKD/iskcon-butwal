import React from 'react';
import { MessageCircle, Video, Camera, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-iskcon-red text-iskcon-cream pt-16 pb-8 border-t-[6px] border-iskcon-gold relative overflow-hidden">
      {/* Decorative background overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] mix-blend-overlay"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand & Intro */}
          <div className="md:col-span-5">
            <h3 className="text-3xl font-heading font-bold text-iskcon-gold mb-6 tracking-wide drop-shadow-sm">ISKCON Butwal</h3>
            <p className="text-iskcon-cream/90 text-sm leading-relaxed mb-8 pr-4">
              Join our community in ecstatic devotion to Lord Krishna. Celebrate vibrant festivals, relish sanctified food (Prasadam), and engage in joyous, meaningful service.
            </p>
            <div className="flex space-x-5">
              <a href="https://www.facebook.com/iskconbutwalofficial" target="_blank" rel="noopener noreferrer" className="bg-iskcon-dark/40 p-3 rounded-full text-iskcon-gold hover:bg-iskcon-gold hover:text-iskcon-red transition-all duration-300 shadow-md">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="bg-iskcon-dark/40 p-3 rounded-full text-iskcon-gold hover:bg-iskcon-gold hover:text-iskcon-red transition-all duration-300 shadow-md">
                <Video className="h-5 w-5" />
              </a>
              <a href="#" className="bg-iskcon-dark/40 p-3 rounded-full text-iskcon-gold hover:bg-iskcon-gold hover:text-iskcon-red transition-all duration-300 shadow-md">
                <Camera className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="text-xl font-heading font-bold text-white mb-6 border-b border-iskcon-gold/30 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3 text-sm text-iskcon-cream/90">
              <li><a href="/about" className="hover:text-iskcon-yellow transition-colors flex items-center"><span className="text-iskcon-gold mr-2">❖</span> About Us</a></li>
              <li><a href="/programs" className="hover:text-iskcon-yellow transition-colors flex items-center"><span className="text-iskcon-gold mr-2">❖</span> Daily Darshan</a></li>
              <li><a href="/events" className="hover:text-iskcon-yellow transition-colors flex items-center"><span className="text-iskcon-gold mr-2">❖</span> Festivals</a></li>
              <li><a href="/donate" className="hover:text-iskcon-yellow transition-colors flex items-center"><span className="text-iskcon-gold mr-2">❖</span> Support the Goshala</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="md:col-span-4 lg:col-span-4">
            <h3 className="text-xl font-heading font-bold text-white mb-6 border-b border-iskcon-gold/30 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-4 text-sm text-iskcon-cream/90">
              <li className="flex items-start bg-iskcon-dark/20 p-3 rounded-lg border border-iskcon-gold/20">
                <MapPin className="h-5 w-5 text-iskcon-gold mr-3 flex-shrink-0 mt-0.5" />
                <span className="leading-snug">MFQ7+MXM, Butwal 32907,<br/>Lumbini, Nepal</span>
              </li>
              <li className="flex items-center bg-iskcon-dark/20 p-3 rounded-lg border border-iskcon-gold/20">
                <Phone className="h-5 w-5 text-iskcon-gold mr-3 flex-shrink-0" />
                <span>+977 71 531931</span>
              </li>
              <li className="flex items-center bg-iskcon-dark/20 p-3 rounded-lg border border-iskcon-gold/20">
                <Mail className="h-5 w-5 text-iskcon-gold mr-3 flex-shrink-0" />
                <span>info@iskconbutwal.org</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-iskcon-gold/30 text-center text-sm text-iskcon-cream/70 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} ISKCON Butwal. All rights reserved.</p>
          <p className="font-heading tracking-widest text-iskcon-gold/80">HARE KRISHNA HARE RAMA</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
