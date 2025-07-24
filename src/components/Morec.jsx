import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

// Featured wallpapers data
const imageData = [
  {
    title: 'MOUNTAINS',
    category: 'NATURE',
    image: '/images/mountain/Mountain3.webp',
  },
  {
    title: 'CARS',
    category: 'AUTOMOTIVE',
    image: '/images/cars/Red.webp',
  },
  {
    title: 'SCI_FI',
    category: 'FUTURISTIC',
    image: '/images/scifi/scifi9.webp',
  },
  {
    title: 'CITY SPEED',
    category: 'CITY',
    image: '/images/cars/City.webp',
  },
];

// More categories data
const categories = [
    { number: '//1', title: 'ANIMALS', image: '/images/animals/animal7.webp', path: '/animals' },
    { number: '//2', title: 'ANIME', image: '/images/anime/anime.webp', path: '/anime' },
    { number: '//3', title: '3D ABSTRACT', image: '/images/abstract/abstract.webp', path: '/abstract' },
    { number: '//4', title: 'TECHNOLOGY', image: '/images/futuristic/tech.webp', path: '/technology' },
    { number: '//5', title: 'GAMING', image: '/images/gaming/gaming2.webp', path: '/gaming' },
    { number: '//6', title: 'SPORT', image: '/images/sport/sport.webp', path: '/sport' },
    { number: '//7', title: 'SPACE', image: '/images/space/space.webp', path: '/space' },
];

// This variant is still used by the H1 title
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Morec = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return (
    <>
      {/* Featured Wallpapers Title */}
      <div className="bg-black w-full text-center mt-20">
        <motion.h1
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="text-4xl md:text-7xl font-bold text-white"
        >
          FEATURED WALLPAPERS
        </motion.h1>
      </div>

      {/* --- Wallpaper Grid (Card Animations Removed) --- */}
      <section className="bg-black py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {imageData.map((item, index) => {
            const path = item.category.toLowerCase().replace(/\s+/g, '');
            return (
              // Changed motion.div to a regular div to remove animation
              <div key={index}>
                <Link to={`/${path}`}>
                  <div
                    className="relative group overflow-hidden transition-transform duration-300 cursor-pointer"
                    style={{
                      clipPath: 'polygon(7% 0, 100% 0, 100% 100%, 0 100%, 0 7%)',
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-72 object-cover brightness-75 group-hover:scale-105 group-hover:brightness-90 transition duration-300"
                    />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-bold">{item.title}</h3>
                      <p className="text-sm tracking-widest font-light text-gray-300">
                        /// {item.category}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* More Categories Section */}
      <section className="bg-black text-white py-20 px-4 md:px-20">
        <div className="flex justify-between items-center mb-16 flex-col md:flex-row gap-6">
          <h2 className="text-4xl text-center md:text-left md:text-7xl font-bold">
            MORE<br />CATEGORIES
          </h2>

          <button
            className="relative px-6 py-2 bg-white text-black text-sm tracking-wide uppercase group overflow-hidden"
          >
            <span className="relative z-10">Explore More</span>
            <span className="absolute left-0 top-0 h-full w-0 bg-[#ff7300] transition-all duration-500 ease-in-out group-hover:w-full z-0" />
          </button>
        </div>

        {/* Category List */}
        <div className="space-y-5">
          {categories.map((cat, index) => (
            <React.Fragment key={index}>
              {index !== 0 && <hr className="my-5 border-t border-white/10" />}
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="w-full md:w-[45%] text-left">
                  <h4 className="text-sm tracking-widest  text-gray-400 mb-1">{cat.number}</h4>
                  <h3 className="text-2xl md:text-3xl font-bold">{cat.title}</h3>
                </div>
                <Link
                  to={cat.path}
                  className="relative w-full md:w-[50%] h-40 md:h-48 overflow-hidden"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 96%, 96% 100%, 0 100%)',
                  }}
                >
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className="absolute inset-0 z-10 pointer-events-none opacity-[0.2]"
                    style={{
                      backgroundImage:
                        "repeating-radial-gradient(circle at 0 0, #ffffff 0, #ffffff 1px, transparent 1px, transparent 100%)",
                      backgroundSize: "2px 2px",
                      mixBlendMode: "overlay",
                    }}
                  />
                </Link>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
};

export default Morec;