import React from 'react';
import { motion } from 'framer-motion';

const regularWallpapers = [
  { name: 'ab5', ext: 'png' },
  { name: 'ab3', ext: 'png' },
];

const eightKWallpapers = [
  { name: 'ab1' }, { name: 'ab2' }, { name: 'ab3' }, { name: 'ab4' }, { name: 'ab5' },
  { name: 'ab6' }, { name: 'ab7' }, { name: 'ab8' }, { name: 'ab9' }, { name: 'ab10' },
  { name: 'ab11' }, { name: 'ab12' }, { name: 'ab13' }, { name: 'ab14' }, { name: 'ab15' },
  { name: 'ab16' },  { name: 'ab18' }, { name: 'ab19' }, { name: 'ab21' },
  { name: 'ab22' }, { name: 'ab23' }, { name: 'ab24' }, { name: 'ab25' }, { name: 'ab26' },
  { name: 'ab28' },
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
        title: 'Check out this Ninja wallpaper!',
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

const Ninjas = () => {
  return (
    <section className="bg-black text-white min-h-screen p-6 md:p-20">
      <h2 className="text-4xl md:text-6xl font-bold mb-10 text-center">NINJA</h2>

      {/* Regular Wallpapers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-14">
        {regularWallpapers.map(({ name, ext }, idx) => {
          const webpPath = `/images/3dninja/${name}.webp`;
          const downloadPath = `/images/3dninja/${name}.${ext}`;
          return (
            <div key={idx} className="overflow-hidden bg-white/5">
              <img
                src={webpPath}
                alt={`ninja-${idx}`}
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
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
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center mt-20">8K NINJA WALLPAPERS</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-14">
        {eightKWallpapers.map(({ name }, idx) => {
          const webpPath = `/images/3dninja/${name}.webp`;
          return (
            <div key={idx} className="overflow-hidden bg-white/5">
         <img
  src={webpPath}
  alt={`8k-ninja-${idx}`}
  className="w-full h-64 object-contain bg-black p-2 transition-transform duration-500 hover:scale-105"
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
          href="https://harshared.lemonsqueezy.com/buy/6f870a36-1ae9-4b19-a693-2b6717c8f273"
          target="_blank"
          rel="noopener noreferrer"
          className="relative px-6 py-2 bg-white text-black text-sm tracking-wide uppercase group overflow-hidden"
        >
          <span className="relative z-10">Download Full 8K Ninja Bundle</span>
          <span className="absolute left-0 top-0 h-full w-0 bg-[#ff7300] transition-all duration-500 ease-in-out group-hover:w-full z-0" />
        </motion.a>
      </div>
    </section>
  );
};

export default Ninjas;
