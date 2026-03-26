import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md border-b-4 border-iskcon-yellow backdrop-blur-md bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-3xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-iskcon-orange to-iskcon-gold tracking-wider">
                ISKCON <span className="text-iskcon-dark">BUTWAL</span>
              </Link>
            </div>
            <div className="hidden lg:-my-px lg:ml-10 lg:flex lg:space-x-8">
              {['Home', 'About Us', 'Programs', 'Events', 'Gallery', 'Gift Shop', 'Donate', 'Contact'].map((item) => {
                const path = item === 'Home' ? '/' : item === 'About Us' ? '/about' : item === 'Gift Shop' ? '/gifts' : `/${item.toLowerCase().replace(' ', '')}`;
                return (
                  <Link key={item} to={path} className="border-transparent text-gray-600 hover:text-iskcon-orange hover:border-iskcon-orange inline-flex items-center px-1 pt-1 border-b-2 text-sm font-bold uppercase tracking-widest transition-all duration-300">
                    {item}
                  </Link>
                )
              })}
            </div>
          </div>
          <div className="-mr-2 flex items-center lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-iskcon-dark hover:text-iskcon-orange focus:outline-none transition duration-150 ease-in-out">
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute w-full bg-white shadow-xl border-b border-iskcon-gold">
          <div className="pt-2 pb-4 space-y-1">
            {['Home', 'About Us', 'Programs', 'Events', 'Gallery', 'Gift Shop', 'Donate', 'Contact'].map((item) => {
              const path = item === 'Home' ? '/' : item === 'About Us' ? '/about' : item === 'Gift Shop' ? '/gifts' : `/${item.toLowerCase().replace(' ', '')}`;
              return (
                <Link key={item} to={path} onClick={() => setIsOpen(false)} className="block pl-4 pr-4 py-3 border-l-4 border-transparent text-base font-bold text-gray-700 hover:text-iskcon-orange hover:bg-orange-50 hover:border-iskcon-orange transition-colors uppercase tracking-wider">
                  {item}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
