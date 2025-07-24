import React from 'react';
import { motion } from 'framer-motion';

const animalImageNames = ['animal1', 'animal2', 'animal7'];
const animal8KImageNames = ['animal3', 'animal4', 'animal5', 'animal6', 'animal8', 'a9', 'a10', 'a11', 'a12', 'a13'
 , 'a14', 'a15', 'a16', 'a17', 'a18'  , 'a19', 'a20', 'a21', 'a22', 'a23', 'a24', 'a25', 'a26',
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
      await navigator.share({
        title: 'Check out this animal wallpaper!',
        url: fullUrl,
      });
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

const Animals = () => {
  return (
    <section className="bg-black text-white min-h-screen p-6 md:p-20">
      <h2 className="text-4xl md:text-6xl font-bold mb-10 text-center">ANIMALS</h2>

      {/* Regular Wallpapers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-14">
        {animalImageNames.map((name, idx) => {
          const webpPath = `/images/animals/${name}.webp`;
          const pngPath = `/images/animals/${name}.png`;
          return (
            <div key={idx} className=" overflow-hidden bg-white/5">
              <img
                src={webpPath}
                alt={`animal-${idx}`}
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
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center mt-20">8K ANIMAL WALLPAPERS</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-14">
        {animal8KImageNames.map((name, idx) => {
          const webpPath = `/images/animals/${name}.webp`;
          return (
            <div key={idx} className=" overflow-hidden bg-white/5">
              <img
                src={webpPath}
                alt={`8k-animal-${idx}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          );
        })}
      </div>

      {/* Download 8K Bundle Button */}
      <div className="flex justify-center">
        <motion.a
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          href="https://harshared.lemonsqueezy.com/buy/dc61de8e-9eb2-4ee1-858f-2d1f5f443192"
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

export default Animals;
