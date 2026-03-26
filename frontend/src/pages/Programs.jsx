import React from 'react';
import { Sun, Moon, BookOpen, Clock, CalendarCheck } from 'lucide-react';

const Programs = () => {
  return (
    <div className="bg-iskcon-cream py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-iskcon-dark mb-6 drop-shadow-sm">Temple Programs & Courses</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">Join us every day for profound spiritual rejuvenation and systematic scriptural education.</p>
          <div className="h-1 w-24 bg-gradient-to-r from-iskcon-orange to-iskcon-gold mx-auto rounded-full mt-8"></div>
        </div>

        {/* Daily Schedule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          <div className="bg-white rounded-[2rem] p-10 md:p-12 shadow-xl border border-iskcon-gold/20 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-50 rounded-full blur-2xl -z-10 group-hover:bg-orange-100 transition-colors"></div>
            <div className="flex items-center mb-8 border-b-2 border-iskcon-gold/30 pb-4">
              <Sun className="h-10 w-10 text-iskcon-orange mr-4" />
              <h2 className="text-3xl font-bold text-iskcon-dark font-heading">Morning Program</h2>
            </div>
            <ul className="space-y-6">
              {[
                { name: 'Mangala Arati', time: '4:30 AM' },
                { name: 'Tulasi Arati', time: '5:00 AM' },
                { name: 'Japa Meditation', time: '5:30 AM' },
                { name: 'Srimad Bhagavatam Class', time: '7:30 AM' },
                { name: 'Darshan Arati', time: '8:00 AM' }
              ].map((prog, i) => (
                <li key={i} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors border border-transparent hover:border-iskcon-orange/20">
                  <span className="font-bold text-gray-800 text-lg">{prog.name}</span>
                  <span className="text-iskcon-orange font-bold px-4 py-1 bg-white rounded-full shadow-sm border border-iskcon-orange/10">{prog.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-[2rem] p-10 md:p-12 shadow-xl border border-iskcon-gold/20 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-50 rounded-full blur-2xl -z-10 group-hover:bg-red-100 transition-colors"></div>
            <div className="flex items-center mb-8 border-b-2 border-iskcon-gold/30 pb-4">
              <Moon className="h-10 w-10 text-iskcon-red mr-4" />
              <h2 className="text-3xl font-bold text-iskcon-dark font-heading">Evening Program</h2>
            </div>
            <ul className="space-y-6">
              {[
                { name: 'Sandhya Arati', time: '6:30 PM' },
                { name: 'Bhagavad Gita Class', time: '7:15 PM' },
                { name: 'Shayana Arati', time: '8:00 PM' },
                { name: 'Temple Closes', time: '8:30 PM' }
              ].map((prog, i) => (
                <li key={i} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-red-50 transition-colors border border-transparent hover:border-iskcon-red/20">
                  <span className="font-bold text-gray-800 text-lg">{prog.name}</span>
                  <span className="text-iskcon-red font-bold px-4 py-1 bg-white rounded-full shadow-sm border border-iskcon-red/10">{prog.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Featured Courses Section */}
        <div className="bg-gradient-to-br from-white to-orange-50 rounded-[3rem] p-10 md:p-16 shadow-2xl border border-iskcon-gold/30 relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(240,90,40,0.15)] transition-all duration-500">
          <div className="absolute top-0 right-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/floral-deco.png')] mix-blend-overlay"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/3 flex justify-center">
              <div className="bg-white p-10 rounded-[3rem] shadow-inner border-[10px] border-iskcon-yellow/30 transform group-hover:rotate-6 transition-transform duration-700">
                <BookOpen className="h-24 w-24 text-iskcon-orange" />
              </div>
            </div>
            
            <div className="lg:w-2/3 text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-iskcon-gold/50 bg-white/80 text-iskcon-red text-sm font-bold uppercase tracking-widest mb-6 shadow-sm backdrop-blur-sm">
                Spiritual Education
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-iskcon-dark font-heading mb-6 tracking-tight">Discover Yourself (DYS)</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-10 font-light">
                A transformative <strong className="font-bold text-iskcon-orange">7-day interactive course</strong> designed to answer the deepest questions of life using logic, science, and the timeless wisdom of the Bhagavad-gita. Perfect for beginners and youth looking for unbreakable clarity, inner peace, and purpose.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <div className="flex items-center bg-white px-6 py-4 rounded-2xl shadow-md border border-gray-100 hover:border-iskcon-orange/30 transition-colors">
                  <Clock className="h-8 w-8 text-iskcon-orange mr-4" />
                  <div className="text-left">
                    <span className="block text-xs text-gray-500 font-bold uppercase tracking-widest">Duration</span>
                    <span className="block text-iskcon-dark font-bold text-lg mt-1">7 Days (2 hrs/day)</span>
                  </div>
                </div>
                
                <div className="flex items-center bg-white px-6 py-4 rounded-2xl shadow-md border border-gray-100 hover:border-iskcon-orange/30 transition-colors">
                  <CalendarCheck className="h-8 w-8 text-iskcon-orange mr-4" />
                  <div className="text-left">
                    <span className="block text-xs text-gray-500 font-bold uppercase tracking-widest">Next Batch</span>
                    <span className="block text-iskcon-dark font-bold text-lg mt-1">Beginning of Every Month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Programs;
