import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="bg-iskcon-cream py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-iskcon-dark mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 mb-12 font-light leading-relaxed">We invite you to visit our temple, or reach out to us for any inquiries about programs, donations, or spiritual guidance.</p>
          
          <div className="space-y-8 bg-white p-10 rounded-[2rem] shadow-xl border border-iskcon-gold/20 relative z-10">
            <div className="flex items-start">
              <div className="bg-orange-50 p-4 rounded-full mr-6 text-iskcon-orange border border-orange-100 shadow-sm transition-transform hover:scale-110">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-iskcon-dark text-xl font-heading tracking-wide">Address</h4>
                <p className="text-gray-600 mt-2 text-lg">MFQ7+MXM, Butwal 32907,<br/>Lumbini, Nepal</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-orange-50 p-4 rounded-full mr-6 text-iskcon-orange border border-orange-100 shadow-sm transition-transform hover:scale-110">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-iskcon-dark text-xl font-heading tracking-wide">Phone</h4>
                <p className="text-gray-600 mt-2 text-lg">+977 71 531931</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-orange-50 p-4 rounded-full mr-6 text-iskcon-orange border border-orange-100 shadow-sm transition-transform hover:scale-110">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-iskcon-dark text-xl font-heading tracking-wide">Email</h4>
                <p className="text-gray-600 mt-2 text-lg">info@iskconbutwal.org</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-7 bg-gradient-to-br from-white to-gray-50 p-10 sm:p-14 rounded-[2rem] shadow-2xl border border-iskcon-gold/30">
          <h3 className="text-3xl font-heading font-bold text-iskcon-red mb-8">Send a Message</h3>
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-bold text-iskcon-dark mb-2 uppercase tracking-wide">Name</label>
                <input type="text" required className="w-full px-6 py-4 rounded-xl border border-gray-200 shadow-sm focus:border-iskcon-orange focus:ring-2 focus:ring-iskcon-orange/30 outline-none transition-all bg-white text-lg" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-bold text-iskcon-dark mb-2 uppercase tracking-wide">Email</label>
                <input type="email" required className="w-full px-6 py-4 rounded-xl border border-gray-200 shadow-sm focus:border-iskcon-orange focus:ring-2 focus:ring-iskcon-orange/30 outline-none transition-all bg-white text-lg" placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-iskcon-dark mb-2 uppercase tracking-wide">Message</label>
              <textarea required rows={5} className="w-full px-6 py-4 rounded-xl border border-gray-200 shadow-sm focus:border-iskcon-orange focus:ring-2 focus:ring-iskcon-orange/30 outline-none transition-all bg-white resize-none text-lg" placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="w-full py-5 px-8 flex items-center justify-center rounded-xl shadow-xl text-lg font-bold text-white bg-gradient-to-r from-iskcon-orange to-iskcon-gold hover:from-orange-600 hover:to-yellow-500 focus:outline-none focus:ring-4 focus:ring-iskcon-orange/40 transition-all transform hover:-translate-y-1 uppercase tracking-widest">
              {sent ? 'Message Sent Successfully!' : <><Send className="mr-3 h-6 w-6" /> Send Message</>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
