import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const Request = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView]);

  return (
    <section ref={ref} className="bg-black text-white py-24 px-6 text-center">
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-7xl font-bold mb-6"
        variants={fadeUp}
        initial="hidden"
        animate={controls}
      >
        HAVE REQUESTS?
      </motion.h2>

      {/* Button */}
      <motion.button
        className="relative px-6 py-2 bg-white text-black font-mono text-sm tracking-wide uppercase group overflow-hidden mb-14"
        style={{
          clipPath: 'polygon(8% 0, 100% 0, 100% 92%, 92% 100%, 0 100%, 0 8%)',
        }}
        variants={fadeUp}
        initial="hidden"
        animate={controls}
      >
        <span className="relative z-10">Contact Now*</span>
        <span className="absolute left-0 top-0 h-full w-0 bg-[#ff7300] transition-all duration-500 ease-in-out group-hover:w-full z-0" />
      </motion.button>

      {/* Image */}
      <motion.div
        className="mx-auto mb-10 w-[320px] md:w-[400px] h-[450px] overflow-hidden"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 92%, 92% 100%, 0 100%)',
        }}
        variants={fadeUp}
        initial="hidden"
        animate={controls}
      >
        <img
          src="/images/scifi/bts.png"
          alt="Request Illustration"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Description */}
      <motion.p
        className="max-w-3xl mx-auto text-sm md:text-base font-semibold leading-relaxed text-white tracking-wide uppercase"
        variants={fadeUp}
        initial="hidden"
        animate={controls}
      >
        About Me
      </motion.p>

      {/* Socials */}
      <motion.div
        className="mt-8 space-x-6 font-mono text-xs tracking-wider uppercase text-white"
        variants={fadeUp}
        initial="hidden"
        animate={controls}
      >
        <a href="#" className="hover:text-[#ff7300] transition">Instagram ↗</a>
        <a href="#" className="hover:text-[#ff7300] transition">Dribbble ↗</a>
        <a href="#" className="hover:text-[#ff7300] transition">Twitter ↗</a>
      </motion.div>

      {/* Footer */}
      <motion.div
        className="mt-10 font-bold"
        variants={fadeUp}
        initial="hidden"
        animate={controls}
      >
        <h1>©2025 WALLPAPER AREA</h1>
      </motion.div>
    </section>
  );
};

export default Request;
