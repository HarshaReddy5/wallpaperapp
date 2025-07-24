import React from 'react';
import { motion } from 'framer-motion';

const regularGamingWallpapers = [
  { name: 'gaming2', ext: 'png' },
  { name: 'gaming3', ext: 'png' },
  { name: 'gaming4', ext: 'png' },
  { name: 'gaming6', ext: 'png' },
  { name: 'gaming7', ext: 'jpeg' },
  { name: 'gaming12', ext: 'jpeg' },
];

const eightKGamingWallpapers = [
  'gaming13', 'gaming14', 'gaming8', 'gaming9',
  'gaming10', 'gaming11', 'gaming5','gaming16','gaming17','gaming18','gaming19','gaming20','gaming21','gaming22','gaming123','gaming24','gaming25','gaming26','gaming27'
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const handleShare = async (url) => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Check out this Gaming wallpaper!',
        url: window.location.origin + url,
      });
    } catch (err) {
      console.error('Sharing failed:', err);
    }
  } else {
    try {
      await navigator.clipboard.writeText(window.location.origin + url);
      alert('Link copied to clipboard!');
    } catch (err) {
      alert('Failed to copy link.');
    }
  }
};

const Gaming = () => {
  return (
    <section className="bg-black text-white min-h-screen p-6 md:p-20">
      <h2 className="text-4xl md:text-6xl font-bold mb-10 text-center">GAMING</h2>

      {/* Regular Wallpapers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-14">
        {regularGamingWallpapers.map(({ name, ext }, idx) => {
          const webpPath = `/images/gaming/${name}.webp`;
          const downloadPath = `/images/gaming/${name}.${ext}`;

          return (
            <div key={idx} className="border border-white/10 overflow-hidden bg-white/5">
              <img
                src={webpPath}
                alt={`gaming-${idx}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="flex flex-col sm:flex-row justify-center gap-4 p-4">
                <a
                  href={downloadPath}
                  download
                  className="relative px-5 py-2 bg-white text-black text-xs uppercase tracking-wide group overflow-hidden text-center"
                >
                  <span className="relative z-10 block w-full text-center">Download</span>
                  <span className="absolute left-0 top-0 h-full w-0 bg-[#ff7300] transition-all duration-500 ease-in-out group-hover:w-full z-0" />
                </a>
                <button
                  onClick={() => handleShare(downloadPath)}
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

      {/* 8K Wallpapers */}
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center mt-20">8K GAMING WALLPAPERS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-14">
        {eightKGamingWallpapers.map((name, idx) => {
          const webpPath = `/images/gaming/${name}.webp`;

          return (
            <div key={idx} className="border border-white/10 overflow-hidden bg-white/5">
              <img
                src={webpPath}
                alt={`8k-gaming-${idx}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>

      {/* Full 8K Bundle CTA */}
      <div className="flex justify-center mt-10">
        <motion.a
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          href="https://harshared.lemonsqueezy.com/buy/a4e2a143-3c25-4a02-a3c8-aa17214bce71"
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

export default Gaming;
