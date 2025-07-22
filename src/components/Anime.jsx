import React from 'react';
import { motion } from 'framer-motion';

const regularWallpapers = [
  { name: 'anime', ext: 'png' },
  { name: 'anime2', ext: 'png' },
  { name: 'Anime3', ext: 'jpeg' },
];

const eightKWallpapers = [
  { name: 'anime4', },
  { name: 'anime5', },
  { name: 'anime6',  },
  { name: 'anime7',  },
  { name: 'anime8', },
  { name: 'anime9', },
  { name: 'anime10',  },
  { name: 'anime11', },
  { name: 'anime12', },
  { name: 'anime13', },
  { name: 'anime14',  },
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
        title: 'Check out this Anime wallpaper!',
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

const Anime = () => {
  return (
    <section className="bg-black text-white min-h-screen p-6 md:p-20">
      <h2 className="text-4xl md:text-6xl font-bold mb-10 text-center">ANIME</h2>

      {/* Regular Wallpapers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-14">
        {regularWallpapers.map(({ name, ext }, idx) => {
          const webpPath = `/images/anime/${name}.webp`;
          const downloadPath = `/images/anime/${name}.${ext}`;
          return (
            <div key={idx} className="rounded-xl border border-white/10 overflow-hidden bg-white/5">
              <img
                src={webpPath}
                alt={`anime-${idx}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
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
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center mt-20">8K ANIME WALLPAPERS</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-14">
        {eightKWallpapers.map(({ name, ext }, idx) => {
          const webpPath = `/images/anime/${name}.webp`;
          return (
            <div key={idx} className="rounded-xl border border-white/10 overflow-hidden bg-white/5">
              <img
                src={webpPath}
                alt={`8k-anime-${idx}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          );
        })}
      </div>

      {/* CTA Download Button */}
      <div className="flex justify-center">
        <motion.a
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          href="https://harshared.lemonsqueezy.com/buy/c182c95b-90a4-4967-8e4c-bd1ba3d0ead6"
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

export default Anime;
