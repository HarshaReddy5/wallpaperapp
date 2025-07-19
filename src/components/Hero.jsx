import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Parallax } from 'react-parallax';
import HeroImage from '../assets/Scifi1.png';
import { Link } from 'react-router-dom';

const imageData = [
  {
    title: 'MOUNTAINS',
    category: 'NATURE',
    image: '/images/nature/Mountain3.png',
  },
  {
    title: 'CARS',
    category: 'AUTOMOTIVE',
    image: '/images/cars/Red.jpg',
  },
  {
    title: 'SCI_FI',
    category: 'FUTURISTIC',
    image: '/images/scifi/scifi9.png',
  },
  {
    title: 'CITY SPEED',
    category: 'CITY',
    image: '/images/cars/City.jpg',
  },
];

export const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div>
      <div className="bg-black">
        {/* Top Banner */}
        <div className="relative h-220 w-full overflow-hidden">
          <img
            src="/images/scifi/Scifi6.png"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-6xl md:text-9xl font-extrabold mix-blend-overlay text-white">
              WALLPAPER AREA
            </h1>
          </div>
        </div>

        {/* Parallax */}
        <div className="bg-black">
          <div className="w-[80%] mx-auto">
            <Parallax bgImage={HeroImage} strength={400}>
              <div className="h-screen flex items-center justify-center rounded-xl overflow-hidden" />
            </Parallax>
          </div>
        </div>

        {/* Scroll-triggered Title Section */}
        <div className="bg-black w-full text-center mt-[100px]">
          <motion.h1
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1 },
              },
            }}
            className="text-4xl md:text-7xl font-bold text-white"
          >
            FEATURED WALLPAPERS
          </motion.h1>

          {/* Button */}
          <div className="mt-10 flex justify-center">
            <button
              className="relative px-6 py-2 bg-white text-black font-mono text-sm tracking-wide uppercase group overflow-hidden"
              style={{
                clipPath: 'polygon(8% 0, 100% 0, 100% 92%, 92% 100%, 0 100%, 0 8%)',
              }}
            >
              <span className="relative z-10">View more</span>
              <span className="absolute left-0 top-0 h-full w-0 bg-[#ff7300] transition-all duration-500 ease-in-out group-hover:w-full z-0" />
              <style jsx>{`
                button:hover span:first-child {
                  color: white;
                }
              `}</style>
            </button>
          </div>
        </div>

        {/* Grid Section */}
        <section className="bg-black py-12 px-4">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
    {imageData.map((item, index) => {
      // Convert category to lowercase and handle special cases if needed
      const path = item.category.toLowerCase().replace(/\s+/g, '');

      return (
        <Link to={`/${path}`} key={index}>
          <div
            className="relative group overflow-hidden transition-transform duration-300 cursor-pointer"
            style={{
              clipPath: 'polygon(7% 0, 100% 0, 100% 100%, 0 100%, 0 7%)',
            }}
          >
            <img
              src={item.image}
              alt={item.title}
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
      );
    })}
  </div>
</section>
      </div>
    </div>
  );
};

export default Hero;
