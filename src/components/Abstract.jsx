import React from 'react';
import { motion } from 'framer-motion';

const abstractImageNames = ['abstract', 'abstract2', 'abstract3', 'abstract4', 'abstract5', 'abstract7', 'abstract8', 'abstract9'];
const abstract8KImageNames = [];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const handleShare = async (url) => {
  const fullUrl = window.location.origin + url;
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Check out this Abstract wallpaper!',
        url: fullUrl,
      });
    } catch (err) {
      console.error('Sharing failed:', err);
    }
  } else {
    try {
      await navigator.clipboard.writeText(fullUrl);
      alert('Link copied to clipboard!');
    } catch (err) {
      alert('Failed to copy link.');
    }
  }
};

const Abstract = () => {
  return (
    <section className="bg-black text-white min-h-screen p-6 md:p-20">
      <h2 className="text-4xl md:text-6xl font-bold mb-10 text-center">ABSTRACT</h2>

      {/* Regular Abstract Wallpapers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-14">
        {abstractImageNames.map((name, idx) => {
          const webpPath = `/images/abstract/${name}.webp`;
          const pngPath = `/images/abstract/${name}.png`;
          return (
            <div key={idx} className="rounded-xl border border-white/10 overflow-hidden bg-white/5">
              <img
                src={webpPath}
                alt={`abstract-${idx}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="flex flex-col sm:flex-row justify-center gap-4 p-4">
                <a
                  href={pngPath}
                  download
                  className="relative px-5 py-2 bg-white text-black text-xs uppercase tracking-wide group overflow-hidden text-center"
                >
                  <span className="relative z-10 block w-full text-center">Download</span>
                  <span className="absolute left-0 top-0 h-full w-0 bg-[#ff7300] transition-all duration-500 ease-in-out group-hover:w-full z-0" />
                </a>

                <button
                  onClick={() => handleShare(pngPath)}
                  className="relative px-5 py-2 bg-white text-black text-xs uppercase tracking-wide group overflow-hidden text-center"
                >
                  <span className="relative z-10 block w-full text-center">Share</span>
                  <span className="absolute left-0 top-0 h-full w-0 bg-[#ff7300] transition-all duration-500 ease-in-out group-hover:w-full z-0" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 8K Abstract Wallpapers */}
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center mt-20">8K ABSTRACT WALLPAPERS</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-14">
        {abstract8KImageNames.map((name, idx) => {
          const webpPath = `/images/abstract/${name}.webp`;
          return (
            <div key={idx} className="rounded-xl border border-white/10 overflow-hidden bg-white/5">
              <img
                src={webpPath}
                alt={`8k-abstract-${idx}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          );
        })}
      </div>

      {/* Full 8K Bundle Download */}
      <div className="flex justify-center">
        <motion.a
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="relative px-6 py-2 bg-white text-black text-sm tracking-wide uppercase group overflow-hidden"
        >
          <span className="relative z-10">Download Full 8K Bundle</span>
          <span className="absolute left-0 top-0 h-full w-0 bg-[#ff7300] transition-all duration-500 ease-in-out group-hover:w-full z-0" />
        </motion.a>
      </div>
    </section>
  );
};

export default Abstract;
