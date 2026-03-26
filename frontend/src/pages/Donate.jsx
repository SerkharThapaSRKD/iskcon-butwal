import React from 'react';
import { Heart } from 'lucide-react';

const Donate = () => {
  return (
    <div className="bg-iskcon-cream py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex justify-center items-center p-6 bg-red-50 rounded-full border border-red-100 mb-8 shadow-inner">
          <Heart className="h-12 w-12 text-iskcon-red" />
        </div>
        <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-iskcon-dark mb-6 drop-shadow-sm">Support Our Mission</h1>
        <p className="text-xl text-gray-700 mb-16 leading-relaxed max-w-3xl mx-auto font-light">
          Your generous contributions help us maintain the temple, feed the needy, protect cows at our Goshala, and distribute spiritual wisdom. Every donation is an eternal service.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          <div className="bg-white border border-iskcon-gold/20 p-10 rounded-[2rem] shadow-xl hover:shadow-2xl transition-shadow relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-50 rounded-full blur-2xl -z-10 group-hover:bg-yellow-100 transition-colors"></div>
            <h3 className="text-2xl font-bold font-heading text-iskcon-red mb-6 border-b-2 border-iskcon-yellow/30 pb-3">Bank Transfer (Nepal)</h3>
            <div className="space-y-5 text-gray-700 text-lg">
              <p className="flex flex-col"><span className="text-sm font-bold text-iskcon-orange uppercase tracking-wider mb-1">Bank Name</span> <span className="font-medium text-iskcon-dark">Nepal Bank Limited</span></p>
              <p className="flex flex-col"><span className="text-sm font-bold text-iskcon-orange uppercase tracking-wider mb-1">Account Name</span> <span className="font-medium text-iskcon-dark">ISKCON Butwal</span></p>
              <p className="flex flex-col"><span className="text-sm font-bold text-iskcon-orange uppercase tracking-wider mb-1">Account Number</span> <span className="font-medium text-iskcon-dark font-mono text-xl tracking-wider">123456789012345</span></p>
              <p className="flex flex-col"><span className="text-sm font-bold text-iskcon-orange uppercase tracking-wider mb-1">Branch</span> <span className="font-medium text-iskcon-dark">Butwal Main Branch</span></p>
            </div>
          </div>
          
          <div className="bg-white border border-iskcon-gold/20 p-10 rounded-[2rem] shadow-xl hover:shadow-2xl transition-shadow relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-50 rounded-full blur-2xl -z-10 group-hover:bg-green-100 transition-colors"></div>
             <h3 className="text-2xl font-bold font-heading text-iskcon-red mb-6 border-b-2 border-iskcon-yellow/30 pb-3">Digital Wallets</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center p-6 bg-gray-50 rounded-2xl shadow-sm border border-gray-100 hover:border-green-300 transition-colors">
                <div className="text-xl font-bold text-green-600 tracking-wide uppercase">eSewa</div>
                <div className="text-iskcon-dark font-mono font-bold text-xl tracking-wider">98XXXXXXXX</div>
              </div>
              <div className="flex justify-between items-center p-6 bg-gray-50 rounded-2xl shadow-sm border border-gray-100 hover:border-purple-300 transition-colors">
                <div className="text-xl font-bold text-purple-600 tracking-wide uppercase">Khalti</div>
                <div className="text-iskcon-dark font-mono font-bold text-xl tracking-wider">98XXXXXXXX</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Donate;
