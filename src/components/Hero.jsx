import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Parallax } from 'react-parallax';
import HeroImage from '../assets/sp1.png';
import HeroVideo from '../assets/Video.mp4';
import { Link } from 'react-router-dom';

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

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div>
      <div className="bg-black">
        {/* Video Hero Section */}
        <motion.div
          className="relative h-220 w-full overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={HeroVideo} type="video/mp4" />
          </video>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 z-10" />

          {/* Hero Text */}
          {/* <div className="absolute inset-0 flex items-center justify-center z-20">
            <motion.h1
              className="text-6xl xs:text-4xl text-center md:text-9xl font-extrabold mix-blend-overlay text-white"
              variants={fadeInUp}
            >
              WALLPAPER AREA
            </motion.h1>
          </div> */}

          {/* Scroll Arrow */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-2xl z-20"
          >
            ↓
          </motion.div>
        </motion.div>

        {/* Parallax Section */}
        <motion.div
          className="bg-black"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="w-[80%] h-[100vh] mx-auto">
            <Parallax bgImage={HeroImage} strength={400}>
              <div className="h-screen flex items-center justify-center rounded-xl overflow-hidden" />
            </Parallax>
          </div>
        </motion.div>

        {/* Spiderman Bundle Button */}
        <motion.div
          className="flex justify-center mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Link to="/spiderman">
            <button
              className="relative px-6 py-2 bg-white text-black text-sm tracking-wide uppercase group overflow-hidden"
              style={{
                clipPath: 'polygon(8% 0, 100% 0, 100% 92%, 92% 100%, 0 100%, 0 8%)',
              }}
            >
              <span className="relative z-10">Checkout Spiderman Bundle</span>
              <span className="absolute left-0 top-0 h-full w-0 bg-[#ff7300] transition-all duration-500 ease-in-out group-hover:w-full z-0" />
            </button>
          </Link>
        </motion.div>

        {/* Featured Wallpapers Title */}
        <div className="bg-black w-full text-center mt-[100px]">
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

        {/* Image Grid Section */}
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
    </div>
  );
};

export default Hero;
