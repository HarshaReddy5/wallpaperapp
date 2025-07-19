import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
  { number: '//1', title: 'ANIMALS', image: '/images/animals/Animals.png', path: '/animals' },
  { number: '//2', title: 'ANIME', image: '/images/anime/anime.png', path: '/anime' },
  { number: '//3', title: '3D ABSTRACT', image: '/images/abstract/abstract.png', path: '/abstract' },
  { number: '//4', title: 'TECHNOLOGY', image: '/images/futuristic/tech.png', path: '/technology' },
  { number: '//5', title: 'GAMING', image: '/images/gaming/gaming.png', path: '/gaming' },
  { number: '//6', title: 'SPORT', image: '/images/sport/sport.png', path: '/sport' },
  { number: '//7', title: 'SPACE', image: '/images/space/space.png', path: '/space' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const Morec = () => {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-20">
      {/* Heading and Button */}
      <div className="flex justify-between items-center mb-16 flex-col md:flex-row gap-6">
        <motion.h2
          className="text-4xl md:text-7xl font-bold"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          MORE<br />CATEGORIES
        </motion.h2>

        <motion.button
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative px-6 py-2 bg-white text-black font-mono text-sm tracking-wide uppercase group overflow-hidden"
          style={{
            clipPath: 'polygon(8% 0, 100% 0, 100% 92%, 92% 100%, 0 100%, 0 8%)',
          }}
        >
          <span className="relative z-10">Explore More</span>
          <span className="absolute left-0 top-0 h-full w-0 bg-[#ff7300] transition-all duration-500 ease-in-out group-hover:w-full z-0" />
        </motion.button>
      </div>

      {/* Category List */}
      <div className="space-y-5">
        {categories.map((cat, index) => (
          <React.Fragment key={index}>
            {index !== 0 && <hr className="my-5 border-t border-white/10" />}

            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Text */}
              <div className="w-full md:w-[45%] text-left">
                <h4 className="text-sm tracking-widest font-mono text-gray-400 mb-1">{cat.number}</h4>
                <h3 className="text-2xl md:text-3xl font-bold">{cat.title}</h3>
              </div>

              {/* Animated Image with Link */}
              <Link
                to={cat.path}
                className="w-full md:w-[50%] h-40 md:h-48 overflow-hidden"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 96%, 96% 100%, 0 100%)',
                }}
              >
                <motion.img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </Link>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Morec;
