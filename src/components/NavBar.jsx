import { useEffect, useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import Logo from '../assets/Logo.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [time, setTime] = useState('');

  // Clock logic (updates every second)
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZoneName: 'short',
      });
      setTime(formatted);
    };

    updateClock(); // set immediately
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="bg-black/50 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Clock */}
          <div className="text-white font-mono text-sm hidden md:block">{time}</div>

          {/* Search + Button Container (Right side) */}
          <div className="flex items-center space-x-4 ml-auto">
            {/* Search Toggle (Desktop) */}
            <div className="hidden md:flex items-center space-x-4">
              <div
                className={`relative flex items-center transition-all duration-300 ease-in-out ${
                  showSearch ? 'max-w-md opacity-100 scale-100' : 'max-w-0 opacity-0 scale-95'
                } overflow-hidden`}
              >
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 border border-[#ff7300] rounded-full focus:outline-none focus:ring-1 focus:ring-[#ff7300] transition-all duration-300"
                />
                <Search
                  size={18}
                  className="absolute right-3 top-2.5 text-[#707070] cursor-pointer"
                  onClick={() => setShowSearch(false)}
                />
              </div>

              {!showSearch && (
                <Search
                  size={22}
                  className="text-white hover:text-[#ff7300] cursor-pointer transition-all duration-300"
                  onClick={() => setShowSearch(true)}
                />
              )}
            </div>

            {/* Call to Action Button */}
          <button className="relative px-6 py-2 bg-white text-black font-mono text-xs tracking-wide uppercase group overflow-hidden"
  style={{
    clipPath: 'polygon(8% 0, 100% 0, 100% 92%, 92% 100%, 0 100%, 0 8%)',
  }}
>
  <span className="relative z-10">Download App</span>
  <span className="absolute left-0 top-0 h-full w-0 bg-[#ff7300] transition-all duration-500 ease-in-out group-hover:w-full z-0" />
</button>


            {/* Mobile menu icon */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-200 hover:text-[#ff7300] focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu (search + button) */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4 space-y-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border border-[#ff7300] rounded-full focus:outline-none focus:ring-1 focus:ring-[#ff7300]"
          />
          <button className="w-full py-2 bg-black text-white font-mono text-sm uppercase rounded-full hover:bg-[#ff7300] transition">
            Download App
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
