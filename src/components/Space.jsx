import React from 'react';
import { motion } from 'framer-motion';

const regularWallpapers = [
  { name: 'space', ext: 'png' },
  { name: 'space2', ext: 'png' },
  { name: 'space3', ext: 'png' },
  { name: 'space4', ext: 'png' },
  { name: 'space5', ext: 'png' },
  { name: 'space6', ext: 'png' },
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
        title: 'Check out this space wallpaper!',
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

const Space = () => {
  return (
    <section className="bg-black text-white min-h-screen p-6 md:p-20">
      <h2 className="text-4xl md:text-6xl font-bold mb-10 text-center">SPACE</h2>

      {/* Regular Wallpapers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-14">
        {regularWallpapers.map(({ name, ext }, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-white/10 overflow-hidden bg-white/5"
          >
            <img
              src={`/images/space/${name}.webp`}
              alt={name}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="flex flex-col sm:flex-row justify-center gap-4 p-4">
              {/* Download Button */}
              <a
                href={`/images/space/${name}.${ext}`}
                download
                className="relative px-5 py-2 bg-white text-black text-xs uppercase tracking-wide group overflow-hidden text-center"
              >
                <span className="relative z-10 block w-full text-center">Download</span>
                <span className="absolute left-0 top-0 h-full w-0 bg-[#ff7300] transition-all duration-500 ease-in-out group-hover:w-full z-0" />
              </a>

              {/* Share Button */}
              <button
                onClick={() => handleShare(`/images/space/${name}.${ext}`)}
                className="relative px-5 py-2 bg-white text-black text-xs uppercase tracking-wide group overflow-hidden text-center"
              >
                <span className="relative z-10 block w-full text-center">Share</span>
                <span className="absolute left-0 top-0 h-full w-0 bg-[#ff7300] transition-all duration-500 ease-in-out group-hover:w-full z-0" />
              </button>
            </div>
          </div>
        ))}
      </div>

   

     
    </section>
  );
};

export default Space;
