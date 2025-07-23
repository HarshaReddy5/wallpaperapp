import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';

import HeroLanding from '../assets/m6.webp';
import HeroParallax from '../assets/sp1.png';

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

export const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const gradientRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;
      setCoords({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-black">
      {/* Hero Landing Section */}
      <motion.div
        className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden"
        style={{
          backgroundImage: `url(${HeroLanding})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div
          ref={gradientRef}
          className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
          style={{
            background: `radial-gradient(at ${coords.x}% ${coords.y}%, rgba(255,255,255,0.05), transparent 60%)`,
            transition: 'background 0.1s ease-out',
          }}
        />

        <div className="z-10 text-center px-4">
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.0}
            glareColor="#ffffff"
            glarePosition="bottom"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            transitionSpeed={1500}
            scale={1.02}
          >
            <h1 className="text-white text-4xl md:text-8xl font-bold">
              8K WALLPAPER AREA
            </h1>
            <h2 className="text-white text-base md:text-xl font-light mt-4 max-w-3xl mx-auto">
              Explore handpicked 8K wallpapers for car lovers, anime fans, and gamers alike.
              High-res. No fluff. Pure fire for your setup.
            </h2>
          </Tilt>
        </div>

        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-2xl z-20"
        >
          ↓
        </motion.div>
      </motion.div>

      {/* Parallax Section (Fixed Scroll Glitch) ✅ */}
      <div className="bg-black">
        <div className="w-[90%] mx-auto">
          <Parallax
            bgImage={HeroParallax}
            strength={300}
            bgImageStyle={{ objectFit: 'cover' }}
          >
            <div className="h-[90vh] sm:h-[85vh] lg:h-[80vh]" />
          </Parallax>
        </div>
      </div>

      {/* CTA Button */}
      <motion.div
        className="flex justify-center mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <Link to="/spiderman">
          <button className="relative px-4 py-1.5 bg-white text-black text-sm sm:text-base tracking-wide uppercase group overflow-hidden ">
            <span className="relative z-10">Checkout Spiderman Bundle</span>
            <span className="absolute left-0 top-0 h-full w-0 bg-[#ff7300] transition-all duration-500 ease-in-out group-hover:w-full z-0" />
          </button>
        </Link>
      </motion.div>

      {/* Featured Wallpapers */}
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

      {/* Wallpaper Grid */}
      <section className="bg-black py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {imageData.map((item, index) => {
            const path = item.category.toLowerCase().replace(/\s+/g, '');
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
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
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Hero;