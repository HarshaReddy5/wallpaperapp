import React from 'react';
import { motion } from 'framer-motion';

const gamingImages = [
  '/images/gaming/gaming.png',
  '/images/gaming/gaming2.png',
  '/images/gaming/gaming3.png',
  '/images/gaming/gaming4.png',
  '/images/gaming/gaming6.png',
  '/images/gaming/gaming7.jpeg',
  '/images/gaming/gaming12.jpeg',
];

const eightKWallpapers = [
  { preview: '/images/gaming/gaming13.jpg' },
  { preview: '/images/gaming/gaming14.jpg' },
  { preview: '/images/gaming/gaming8.jpeg' },
  { preview: '/images/gaming/gaming9.jpeg' },
  { preview: '/images/gaming/gaming10.jpeg' },
  { preview: '/images/gaming/gaming11.jpeg' },
  { preview: '/images/gaming/gaming5.png' },
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
        title: 'Check out this wallpaper!',
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-14">
        {gamingImages.map((src, idx) => (
          <div key={idx} className="border border-white/10 overflow-hidden bg-white/5">
            <img
              src={src}
              alt={`gaming-${idx}`}
              loading="lazy"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="flex flex-col sm:flex-row justify-center gap-4 p-4">
              <a
                href={src}
                download
                className="relative px-5 py-2 bg-white text-black text-xs font-mono uppercase tracking-wide group overflow-hidden"
                style={{
                  clipPath: 'polygon(8% 0, 100% 0, 100% 92%, 92% 100%, 0 100%, 0 8%)',
                }}
              >
                <span className="relative z-10">Download</span>
                <span className="absolute left-0 top-0 h-full w-0 bg-[#ff7300] transition-all duration-500 ease-in-out group-hover:w-full z-0" />
              </a>
              <button
                onClick={() => handleShare(src)}
                className="relative px-5 py-2 bg-white text-black text-xs font-mono uppercase tracking-wide group overflow-hidden"
                style={{
                  clipPath: 'polygon(8% 0, 100% 0, 100% 92%, 92% 100%, 0 100%, 0 8%)',
                }}
              >
                <span className="relative z-10">Share</span>
                <span className="absolute left-0 top-0 h-full w-0 bg-[#ff7300] transition-all duration-500 ease-in-out group-hover:w-full z-0" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center mt-20">8K GAMING WALLPAPERS</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-14">
        {eightKWallpapers.map(({ preview }, idx) => (
          <div key={idx} className="border border-white/10 overflow-hidden bg-white/5">
            <img
              src={preview}
              alt={`8k-preview-${idx}`}
              loading="lazy"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      {/* ✅ Full 8K Bundle Download Button */}
      <div className="flex justify-center mt-10">
        <motion.a
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          href="https://harshared.lemonsqueezy.com/buy/a4e2a143-3c25-4a02-a3c8-aa17214bce71" // Replace with actual Lemon Squeezy bundle link
          target="_blank"
          rel="noopener noreferrer"
          className="relative px-6 py-2 bg-white text-black font-mono text-sm tracking-wide uppercase group overflow-hidden"
          style={{
            clipPath: 'polygon(8% 0, 100% 0, 100% 92%, 92% 100%, 0 100%, 0 8%)',
          }}
        >
          <span className="relative z-10">Download Full 8K Bundle</span>
          <span className="absolute left-0 top-0 h-full w-0 bg-[#ff7300] transition-all duration-500 ease-in-out group-hover:w-full z-0" />
        </motion.a>
      </div>
    </section>
  );
};

export default Gaming;
