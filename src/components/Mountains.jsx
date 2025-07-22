import React from 'react';
import { motion } from 'framer-motion';

const regularWallpapers = [
  { name: 'Mountain3', ext: 'png' },
];

const eightKWallpapers = [
  'm1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8',
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
  const fullUrl = window.location.origin + url;
  if (navigator.share) {
    try {
      await navigator.share({ title: 'Check out this mountain wallpaper!', url: fullUrl });
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

const Mountains = () => {
  return (
    <section className="bg-black text-white min-h-screen p-6 md:p-20">
      <h2 className="text-4xl md:text-6xl font-bold mb-10 text-center">MOUNTAINS</h2>

      {/* Regular Wallpapers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-14">
        {regularWallpapers.map(({ name, ext }, idx) => {
          const imageUrl = `/images/mountain/${name}.webp`;
          const downloadUrl = `/images/mountain/${name}.${ext}`;
          return (
            <div key={idx} className="border border-white/10 overflow-hidden bg-white/5">
              <img
                src={imageUrl}
                alt={`mountain-${idx}`}
                loading="lazy"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="flex flex-col sm:flex-row justify-center gap-4 p-4">
                {/* Download */}
                <a
                  href={downloadUrl}
                  download
                  className="relative px-5 py-2 bg-white text-black text-xs uppercase tracking-wide group overflow-hidden text-center"
                >
                  <span className="relative z-10 block w-full">Download</span>
                  <span className="absolute left-0 top-0 h-full w-0 bg-[#ff7300] transition-all duration-500 ease-in-out group-hover:w-full z-0" />
                </a>

                {/* Share */}
                <button
                  onClick={() => handleShare(imageUrl)}
                  className="relative px-5 py-2 bg-white text-black text-xs uppercase tracking-wide group overflow-hidden text-center"
                >
                  <span className="relative z-10 block w-full">Share</span>
                  <span className="absolute left-0 top-0 h-full w-0 bg-[#ff7300] transition-all duration-500 ease-in-out group-hover:w-full z-0" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 8K Wallpapers */}
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center mt-20">8K MOUNTAIN WALLPAPERS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-14">
        {eightKWallpapers.map((file, idx) => (
          <div key={idx} className="border border-white/10 overflow-hidden bg-white/5">
            <img
              src={`/images/mountain/${file}.webp`}
              alt={`8k-mountain-${idx}`}
              loading="lazy"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      {/* Full 8K Bundle CTA */}
      <div className="flex justify-center mt-10">
        <motion.a
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          href="https://harshared.lemonsqueezy.com/buy/6db61223-9dff-46dd-ab56-76ca4d711468"
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

export default Mountains;
