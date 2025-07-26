// src/components/NavBar.js

import { useEffect, useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // ✨ 1. Import motion

// ✨ 2. Define the animation variant for the navbar
const slideInFromTop = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [time, setTime] = useState('');
  const navigate = useNavigate();

  // Clock logic (no changes)
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString('en-GB', {
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZoneName: 'short',
      });
      setTime(formatted);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    // ✨ 3. Make the nav element a motion component and apply animations
    <motion.nav
      className="bg-black/10 backdrop-blur-md shadow-md sticky top-0 z-50"
      variants={slideInFromTop}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo + Clock */}
          <div className="flex items-center space-x-4">
            <img src="/Logo.png" alt="Logo" className="h-10 w-auto" />
            <div className="text-white font-mono text-sm hidden md:block">{time}</div>
          </div>

          {/* Search + Button Container */}
          <div className="flex items-center space-x-4 ml-auto">
       
         

            {/* Subscribe Button */}
            <button onClick={() => navigate('/subscribe')} className="relative px-5 py-2 bg-white text-black text-xs tracking-wide uppercase group overflow-hidden">
              <span className="relative z-10">Full 8k Bundle</span>
              <span className="absolute left-0 top-0 h-full w-0 bg-[#ff7300] transition-all duration-500 ease-in-out group-hover:w-full z-0" />
            </button>

          </div>
        </div>
      </div>

  
     
      
     
    </motion.nav>
  );
};

export default NavBar;