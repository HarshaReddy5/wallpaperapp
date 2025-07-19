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
     checkout: 'https://harshared.lemonsqueezy.com/buy/337002ec-2185-4c3e-9187-f56bfce2150a',
  },
  {
    preview: '/images/cars/car1.jpeg',
    download: '/images/cars/cars8k/car1.png',
    checkout: 'https://harshared.lemonsqueezy.com/buy/328a6d92-ed67-4653-9d24-3ac09b36e793',
  },
  {
    preview: '/images/cars/car2.jpeg',
    download: '/images/cars/cars8k/car2.png',
    checkout: 'https://harshared.lemonsqueezy.com/buy/1491ea87-fb6b-46ca-8e77-31ffc3350dc1',
  },
  {
    preview: '/images/cars/car5.png',
    download: '/images/cars/cars8k/car5.png',
       checkout: 'https://harshared.lemonsqueezy.com/buy/b594cd63-e2f7-4f03-871d-ff0d627438e9',
  },
  {
    preview: '/images/cars/car6.png',
    download: '/images/cars/cars8k/car6.png',
    checkout: 'https://harshared.lemonsqueezy.com/buy/2b25c749-39eb-4b9f-b8f9-deb48b688682',
  },
  {
    preview: '/images/cars/car8.png',
    download: '/images/cars/cars8k/car8.png',
    checkout: 'https://harshared.lemonsqueezy.com/buy/45f847ad-667b-460b-ae59-176015de417d',
  },
  {
    preview: '/images/cars/car9.png',
    download: '/images/cars/cars8k/car9.png',
    checkout: 'https://harshared.lemonsqueezy.com/buy/393a5f43-97ad-4ecb-846e-fb1565bf5340',
  },
  {
    preview: '/images/cars/car10.png',
    download: '/images/cars/cars8k/car10.png',
     checkout: 'https://harshared.lemonsqueezy.com/buy/2e4d35f2-b69f-4583-8d5b-a75df3df59f4',
  },
  {
    preview: '/images/cars/car11.png',
    download: '/images/cars/cars8k/car11.png',
    checkout: 'https://harshared.lemonsqueezy.com/buy/64dab50e-6712-4f80-b96f-fbff2fba3596',
  },
  {
    preview: '/images/cars/car12.jpeg',
    download: '/images/cars/cars8k/car12.png',
    checkout: 'https://harshared.lemonsqueezy.com/buy/6b38ebf6-c642-4d51-9879-24b39a5c7712',
  },
  {
    preview: '/images/cars/Red.jpg',
    download: '/images/cars/cars8k/Red.png',
    checkout: 'https://harshared.lemonsqueezy.com/buy/8cd61df6-bfa5-4b4e-8214-54a706f1c876',
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
