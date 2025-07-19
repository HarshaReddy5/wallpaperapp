import React from 'react';
import { motion } from 'framer-motion';

const carImages = [
  '/images/cars/Car2.jpg',
  '/images/cars/car7.png',
];

const eightKWallpapers = [
  {
    preview: '/images/cars/Car.png',
    download: '/images/cars/cars8k/Car.png',
  },
  {
    preview: '/images/cars/car1.jpeg',
    download: '/images/cars/cars8k/car1.png',
  },
  {
    preview: '/images/cars/car2.jpeg',
    download: '/images/cars/cars8k/car2.png',
  },
  {
    preview: '/images/cars/car5.png',
    download: '/images/cars/cars8k/car5.png',
  },
  {
    preview: '/images/cars/car6.png',
    download: '/images/cars/cars8k/car6.png',
  },
  {
    preview: '/images/cars/car8.png',
    download: '/images/cars/cars8k/car8.png',
    checkout: 'https://harshared.lemonsqueezy.com/checkout',
  },
  {
    preview: '/images/cars/car9.png',
    download: '/images/cars/cars8k/car9.png',
  },
  {
    preview: '/images/cars/car10.png',
    download: '/images/cars/cars8k/car10.png',
  },
  {
    preview: '/images/cars/car11.png',
    download: '/images/cars/cars8k/car11.png',
  },
  {
    preview: '/images/cars/car12.jpeg',
    download: '/images/cars/cars8k/car12.png',
  },
  {
    preview: '/images/cars/Red.jpg',
    download: '/images/cars/cars8k/Red.png',
  },
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
        title: 'Check out this car wallpaper!',
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

const Cars = () => {
  return (
    <section className="bg-black text-white min-h-screen p-6 md:p-20">
      <h2 className="text-4xl md:text-6xl font-bold mb-10 text-center">CARS</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-14">
        {carImages.map((src, idx) => (
          <div key={idx} className="rounded-xl border border-white/10 overflow-hidden bg-white/5">
            <img
              src={src}
              alt={`car-${idx}`}
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

     <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center mt-20">8K CARS WALLPAPERS</h2>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-14">
  {eightKWallpapers.map(({ preview, download, checkout }, idx) => (
    <div key={idx} className="rounded-xl border border-white/10 overflow-hidden bg-white/5">
      <img
        src={preview}
        alt={`8k-preview-${idx}`}
        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
      />
      <div className="flex justify-center p-4">
        {checkout ? (
          <a
            href={checkout}
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-5 py-2 bg-white text-black text-xs font-mono uppercase tracking-wide group overflow-hidden"
            style={{
              clipPath: 'polygon(8% 0, 100% 0, 100% 92%, 92% 100%, 0 100%, 0 8%)',
            }}
          >
            <span className="relative z-10">Download in 8K</span>
            <span className="absolute left-0 top-0 h-full w-0 bg-[#ff7300] transition-all duration-500 ease-in-out group-hover:w-full z-0" />
          </a>
        ) : (
          <a
            href={download}
            download
            className="relative px-5 py-2 bg-white text-black text-xs font-mono uppercase tracking-wide group overflow-hidden"
            style={{
              clipPath: 'polygon(8% 0, 100% 0, 100% 92%, 92% 100%, 0 100%, 0 8%)',
            }}
          >
            <span className="relative z-10">Download in 8K</span>
            <span className="absolute left-0 top-0 h-full w-0 bg-[#ff7300] transition-all duration-500 ease-in-out group-hover:w-full z-0" />
          </a>
        )}
      </div>
    </div>
  ))}
</div>


      <div className="flex justify-center">
        <motion.button
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative px-6 py-2 bg-white text-black font-mono text-sm tracking-wide uppercase group overflow-hidden"
          style={{
            clipPath: 'polygon(8% 0, 100% 0, 100% 92%, 92% 100%, 0 100%, 0 8%)',
          }}
        >
          <span className="relative z-10">Explore More</span>
          <span className="absolute left-0 top-0 h-full w-0 bg-[#ff7300] transition-all duration-500 ease-in-out group-hover:w-full z-0" />
        </motion.button>
      </div>
    </section>
  );
};

export default Cars;
