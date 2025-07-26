import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

// Data (no changes)
const imageData = [
  { title: 'MOUNTAINS', category: 'NATURE', image: '/images/mountain/Mountain3.webp' },
  { title: 'CARS', category: 'AUTOMOTIVE', image: '/images/cars/Red.webp' },
  { title: 'SCI_FI', category: 'FUTURISTIC', image: '/images/scifi/scifi9.webp' },
  { title: 'CITY SPEED', category: 'CITY', image: '/images/cars/City.webp' },
];
const categories = [
  { number: '//1', title: 'ANIMALS', image: '/images/animals/animal7.webp', path: '/animals' },
  { number: '//2', title: 'ANIME', image: '/images/anime/anime.webp', path: '/anime' },
  { number: '//3', title: '3D ABSTRACT', image: '/images/abstract/abstract.webp', path: '/abstract' },
  { number: '//4', title: 'FUTURISTIC', image: '/images/futuristic/tech.webp', path: '/technology' },
  { number: '//5', title: 'GAMING', image: '/images/gaming/gaming2.webp', path: '/gaming' },
  { number: '//6', title: 'SPORT', image: '/images/sport/sport.webp', path: '/sport' },
  { number: '//7', title: 'SPACE', image: '/images/space/space.webp', path: '/space' },
];

// ✨ 1. Animation variants for items and their containers
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // This will apply a 0.1s delay between each child animation
    },
  },
};

// ✨ 2. Reusable hook to reduce repetition
const useAnimateOnView = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Start animation when 10% of the element is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return [ref, controls];
};


const Morec = () => {
  // ✨ 3. Use the custom hook for each section that needs animation
  const [titleRef, titleControls] = useAnimateOnView();
  const [gridRef, gridControls] = useAnimateOnView();
  const [moreCatHeaderRef, moreCatHeaderControls] = useAnimateOnView();
  const [categoryListRef, categoryListControls] = useAnimateOnView();

  return (
    <>
      {/* Featured Wallpapers Title */}
      <div className="bg-black w-full text-center mt-20">
        <motion.h1
          ref={titleRef}
          initial="hidden"
          animate={titleControls}
          variants={fadeInUp}
          className="text-4xl md:text-7xl font-bold text-white"
        >
          FEATURED WALLPAPERS
        </motion.h1>
      </div>

      {/* --- Wallpaper Grid --- */}
      <section className="bg-black py-12 px-4">
        <motion.div
          ref={gridRef}
          initial="hidden"
          animate={gridControls}
          variants={staggerContainer} // Container for staggering children
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {imageData.map((item, index) => {
            const path = item.category.toLowerCase().replace(/\s+/g, '');
            return (
              // Each child is now a motion component with the fadeInUp variant
              <motion.div key={index} variants={fadeInUp}>
                <Link to={`/${path}`}>
                  <div
                    className="relative group overflow-hidden transition-transform duration-300 cursor-pointer"
                    style={{ clipPath: 'polygon(7% 0, 100% 0, 100% 100%, 0 100%, 0 7%)' }}
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
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* More Categories Section */}
      <section className="bg-black text-white py-20 px-4 md:px-20">
        <motion.div
          ref={moreCatHeaderRef}
          initial="hidden"
          animate={moreCatHeaderControls}
          variants={staggerContainer} // Stagger the title and button
          className="flex justify-between items-center mb-16 flex-col md:flex-row gap-6"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl text-center md:text-left md:text-7xl font-bold">
            MORE<br />CATEGORIES
          </motion.h2>
          <motion.button
            variants={fadeInUp}
            className="relative px-6 py-2 bg-white text-black text-sm tracking-wide uppercase group overflow-hidden"
          >
            <span className="relative z-10">Explore More</span>
            <span className="absolute left-0 top-0 h-full w-0 bg-[#ff7300] transition-all duration-500 ease-in-out group-hover:w-full z-0" />
          </motion.button>
        </motion.div>

        {/* Category List */}
        <motion.div
          ref={categoryListRef}
          initial="hidden"
          animate={categoryListControls}
          variants={staggerContainer} // Container for staggering list items
          className="space-y-5"
        >
          {categories.map((cat, index) => (
            // Each child is a motion component that will stagger
            <motion.div key={index} variants={fadeInUp}>
              {index !== 0 && <hr className="my-5 border-t border-white/10" />}
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="w-full md:w-[45%] text-left">
                  <h4 className="text-sm tracking-widest text-gray-400 mb-1">{cat.number}</h4>
                  <h3 className="text-2xl md:text-3xl font-bold">{cat.title}</h3>
                </div>
                <Link
                  to={cat.path}
                  className="relative w-full md:w-[50%] h-40 md:h-48 overflow-hidden"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 96%, 96% 100%, 0 100%)' }}
                >
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className="absolute inset-0 z-10 pointer-events-none opacity-[0.2]"
                    style={{
                      backgroundImage: "repeating-radial-gradient(circle at 0 0, #ffffff 0, #ffffff 1px, transparent 1px, transparent 100%)",
                      backgroundSize: "2px 2px",
                      mixBlendMode: "overlay",
                    }}
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Morec;