import React from 'react';
import { motion } from 'framer-motion';

const regularWallpapers = [
  { name: 'sp2', ext: 'png' },
];

const eightKWallpapers = [
  { preview: '/images/spiderman/sp1.webp' },
  { preview: '/images/spiderman/sp3.webp' },
  { preview: '/images/spiderman/sp4.webp' },
  { preview: '/images/spiderman/sp5.webp' },
  { preview: '/images/spiderman/sp6.webp' },
  { preview: '/images/spiderman/sp7.webp' },
  { preview: '/images/spiderman/sp8.webp' },
  { preview: '/images/spiderman/sp9.webp' },
  { preview: '/images/spiderman/sp10.webp' },
  { preview: '/images/spiderman/sp11.webp' },
  { preview: '/images/spiderman/sp12.webp' },
  { preview: '/images/spiderman/sp13.webp' },
  { preview: '/images/spiderman/sp14.webp' },
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

const Spiderman = () => {
  return (
    <section className="bg-black text-white min-h-screen p-6 md:p-20">
      <h2 className="text-4xl md:text-6xl font-bold mb-10 text-center">SPIDERMAN</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-14">
        {regularWallpapers.map(({ name, ext }, idx) => {
          const src = `/images/spiderman/${name}.webp`;
          const downloadUrl = `/images/spiderman/${name}.${ext}`;
          return (
            <div key={idx} className="border border-white/10 overflow-hidden bg-white/5">
              <img
                src={src}
                alt={`spiderman-${idx}`}
                loading="lazy"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="flex flex-col sm:flex-row justify-center gap-4 p-4">
                {/* Download Button */}
                <a
                  href={downloadUrl}
                  download
                  className="relative px-5 py-2 bg-white text-black text-xs uppercase tracking-wide group overflow-hidden text-center"
                >
                  <span className="relative z-10 block w-full text-center">Download</span>
                  <span className="absolute left-0 top-0 h-full w-0 bg-[#ff7300] transition-all duration-500 ease-in-out group-hover:w-full z-0" />
                </a>

                {/* Share Button */}
                <button
                  onClick={() => handleShare(downloadUrl)}
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

      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center mt-20">8K SPIDERMAN WALLPAPERS</h2>

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

      <div className="flex justify-center mt-10">
        <motion.a
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          href="https://harshared.lemonsqueezy.com/buy/f60e4012-897e-46d8-8735-7bdf656d4b04"
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

export default Spiderman;
