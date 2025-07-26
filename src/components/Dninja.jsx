import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// DATA: Ninjas array with unique 'bg' properties
const ninjas = [
  {
    id: 1,
    name: 'SHADOW',
    icon: '🌑',
    image: '/images/3dninja/abwb7.webp',
    bg: '/images/3dninja/bg1.webp',
    theme: 'shadow',
  },
  {
    id: 2,
    name: 'FIRE',
    icon: '🔥',
    image: '/images/3dninja/abwb9.webp',
    bg: '/images/3dninja/bg2.webp',
    theme: 'fire',
  },
  {
    id: 3,
    name: 'ICE',
    icon: '❄️',
    image: '/images/3dninja/abwb14.webp',
    bg: '/images/3dninja/bg3.webp',
    theme: 'ice',
  },
  {
    id: 4,
    name: 'STORM',
    icon: '⚡',
    image: '/images/3dninja/abwb2.webp',
    bg: '/images/3dninja/bg4.webp',
    theme: 'storm',
  },
  {
    id: 5,
    name: 'LIGHTNING',
    icon: '⚡',
    image: '/images/3dninja/abwb13.webp',
    bg: '/images/3dninja/bg5.webp',
    theme: 'lightning',
  },
  {
    id: 6,
    name: 'STONE',
    icon: '🪨',
    image: '/images/3dninja/abwb16.webp',
    bg: '/images/3dninja/bg6.webp',
    theme: 'stone',
  },
  {
    id: 7,
    name: 'VENOM',
    icon: '🐍',
    image: '/images/3dninja/abwb1.webp',
    bg: '/images/3dninja/bg7.webp',
    theme: 'venom',
  },
  {
    id: 8,
    name: 'LOVE',
    icon: '💘',
    image: '/images/3dninja/abwb24.webp',
    bg: '/images/3dninja/bg8.webp',
    theme: 'love',
  },
];

// HELPERS: Functions for dynamic styling
const getGlowColor = (theme) => {
  switch (theme) {
    case 'fire': return '#ff6b00';
    case 'ice': return '#00eaff';
    case 'shadow': return '#888888';
    case 'storm': return '#b535ffff';
    case 'lightning': return '#ffda62ff';
    case 'stone': return '#415f2eff';
    case 'love': return '#ffb6f9';
    case 'venom': return '#50fa7b';
    default: return '#ffffff';
  }
};

const getTextGradient = (theme) => {
  switch (theme) {
    case 'fire': return 'bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-transparent bg-clip-text';
    case 'ice': return 'bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 text-transparent bg-clip-text';
    case 'shadow': return 'bg-gradient-to-r from-gray-800 via-gray-900 to-black text-transparent bg-clip-text';
    case 'storm': return 'bg-gradient-to-r from-indigo-600 via-purple-500 to-blue-500 text-transparent bg-clip-text';
    case 'lightning': return 'bg-gradient-to-r from-yellow-800 via-yellow-400 to-yellow-200 text-transparent bg-clip-text';
    case 'stone': return 'bg-gradient-to-r from-brown-600 via-green-400 to-orange-200 text-transparent bg-clip-text';
    case 'venom': return 'bg-gradient-to-r from-green-700 via-lime-500 to-red-500 text-transparent bg-clip-text';
    case 'love': return 'bg-gradient-to-r from-pink-800 via-pink-400 to-pink-200 text-transparent bg-clip-text';
    default: return 'text-white';
  }
};

// CHILD COMPONENT: Triggers background change, has no background itself
const NinjaCard = ({ ninja, onInView }) => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the card is visible
  });

  useEffect(() => {
    if (inView) {
      onInView(ninja.bg);
    }
  }, [inView, ninja.bg, onInView]);

  return (
    <motion.div
      ref={ref}
      className="h-screen flex flex-col justify-center items-center text-center p-4 relative z-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <img
        src={ninja.image}
        alt={ninja.name}
        className="w-[350px] md:w-[420px] object-contain drop-shadow-xl mb-6"
        style={{
          filter: `drop-shadow(0 0 40px ${getGlowColor(ninja.theme)})`,
        }}
      />
      <h3 className={`text-3xl md:text-4xl font-bold uppercase ${getTextGradient(ninja.theme)}`}>
        {ninja.icon} {ninja.name}
      </h3>
    </motion.div>
  );
};


const Dninja = () => {
  const [activeBg, setActiveBg] = useState(ninjas[0].bg);

  return (
    <section className="relative w-full bg-black text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <AnimatePresence>
          <motion.div
            key={activeBg}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${activeBg})`,
             
              backgroundAttachment: 'fixed',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          </motion.div>
        </AnimatePresence>
      </div>

 
      <div className="relative z-10">
 
        <div className="max-w-5xl mx-auto pt-32 pb-16 px-4 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-400 to-red-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            8K 3D NINJA BUNDLE
          </motion.h2>
        </div>

      
        <div>
          {ninjas.map((ninja) => (
            <NinjaCard key={ninja.id} ninja={ninja} onInView={setActiveBg} />
          ))}
        </div>

        {/* ... CTA Button ... */}
        <div className="flex justify-center py-24 px-4 ">
          <a
            href="/ninjas"
            className="px-8 py-4 text-white font-semibold text-lg uppercase bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 hover:scale-105 transition duration-300 shadow-lg shadow-pink-500/30"
          >
            🛍️ CHECKOUT FULL NINJA BUNDLE
          </a>
        </div>
      </div>
    </section>
  );
};

export default Dninja;