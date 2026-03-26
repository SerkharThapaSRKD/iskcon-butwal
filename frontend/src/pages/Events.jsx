import React from 'react';
import { Calendar as CalendarIcon, MapPin, Clock } from 'lucide-react';

const Events = () => {
  const events = [
    { name: "Janmashtami", date: "August 18, 2026", time: "5:00 PM – Midnight", location: "Temple Premises", desc: "Celebrate the majestic appearance of Lord Krishna with immersive Kirtan, Abhishek, drama, and a grand feast." },
    { name: "Ratha Yatra", date: "July 5, 2026", time: "6:00 AM – 9:00 PM", location: "Butwal City Center", desc: "The grand chariot festival of Lord Jagannath. Pull the chariot, chant the holy names, and dance in ecstasy down the streets." }
  ];

  return (
    <div className="bg-iskcon-cream py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-iskcon-yellow/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <CalendarIcon className="h-8 w-8 text-iskcon-orange mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-iskcon-dark mb-4 drop-shadow-sm">Upcoming Festivals</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">Mark your calendars for our grand celebrations filled with joy and devotion.</p>
          <div className="h-1 w-24 bg-gradient-to-r from-iskcon-orange to-iskcon-gold mx-auto rounded-full mt-6"></div>
        </div>
        
        <div className="space-y-10">
          {events.map((event, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row gap-8 shadow-xl border border-iskcon-gold/20 hover:shadow-2xl hover:border-iskcon-orange/40 transition-all duration-300 group">
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 flex flex-col items-center justify-center min-w-[180px] text-center border-t-4 border-iskcon-orange shadow-inner group-hover:scale-105 transition-transform duration-300">
                <CalendarIcon className="h-10 w-10 text-iskcon-orange mb-3" />
                <span className="text-3xl font-black font-heading text-iskcon-dark">{event.date.split(',')[0]}</span>
                <span className="text-lg font-bold text-iskcon-gold mt-1 uppercase tracking-wider">{event.date.split(',')[1]}</span>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-3xl font-bold font-heading text-iskcon-red mb-4">{event.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg font-light">{event.desc}</p>
                <div className="flex flex-wrap gap-6 text-sm font-bold text-gray-700">
                  <div className="flex items-center px-4 py-2 bg-gray-50 rounded-full border border-gray-100"><Clock className="h-5 w-5 mr-2 text-iskcon-orange" /> {event.time}</div>
                  <div className="flex items-center px-4 py-2 bg-gray-50 rounded-full border border-gray-100"><MapPin className="h-5 w-5 mr-2 text-iskcon-orange" /> {event.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Events;
