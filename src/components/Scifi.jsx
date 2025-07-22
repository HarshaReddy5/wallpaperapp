import React from 'react';
import { motion } from 'framer-motion';

const scifiImageNames = ['Scifi3', 'Scifi4', 'Scifi7', 'Scifi10'];
const eightKImageNames = [
  'Scifi1', 'Scifi2','Scifi6', 'Scifi5', 'Scifi8', 'scifi9',
  'scifi11', 'scifi12', 'scifi13', 'scifi14',
  'scifi15', 'scifi16', 'scifi17'
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
        title: 'Check out this Sci-Fi wallpaper!',
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

const Scifi = () => {
  return (
    <section className="bg-black text-white min-h-screen p-6 md:p-20">
      <h2 className="text-4xl md:text-6xl font-bold mb-10 text-center">SCI-FI</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-14">
        {scifiImageNames.map((name, idx) => {
          const webpPath = `/images/scifi/${name}.webp`;
          const pngPath = `/images/scifi/${name}.png`;
          return (
            <div key={idx} className="rounded-xl border border-white/10 overflow-hidden bg-white/5">
              <img
                src={webpPath}
                alt={`scifi-${idx}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="flex flex-col sm:flex-row justify-center gap-4 p-4">
                {/* Download PNG */}
                <a
                  href={pngPath}
                  download
                  className="relative px-5 py-2 bg-white text-black text-xs uppercase tracking-wide group overflow-hidden text-center"
                >
                  <span className="relative z-10 block w-full text-center">Download</span>
                  <span className="absolute left-0 top-0 h-full w-0 bg-[#ff7300] transition-all duration-500 ease-in-out group-hover:w-full z-0" />
                </a>

                {/* Share */}
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

      {/* 8K Section */}
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center mt-20">8K SCI-FI APOCALYPTIC WALLPAPERS</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-14">
        {eightKImageNames.map((name, idx) => {
          const webpPath = `/images/scifi/${name}.webp`;
          return (
            <div key={idx} className="rounded-xl border border-white/10 overflow-hidden bg-white/5">
              <img
                src={webpPath}
                alt={`8k-scifi-${idx}`}
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
          href="https://harshared.lemonsqueezy.com/buy/a1783f99-2f36-4373-963c-8a0c47a1aa38"
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

export default Scifi;
