import React from 'react';
import { motion } from 'framer-motion';


const eightKWallpapers = [
  { name: 'f1' },
    { name: 'f2' },
      { name: 'f3' },
        { name: 'f4' },
          { name: 'f5' },
            { name: 'f6' },
              { name: 'f7' },
                { name: 'f8' },
                  { name: 'f9' },
                    { name: 'f10' },
                      { name: 'f11' },
                        { name: 'f12' },
                         { name: 'f13' },
                          { name: 'f14' },
                            { name: 'f15' },
  { name: 'f17' },
    { name: 'f16' },
  { name: 'f18' },
    { name: 'f19' },
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
        title: 'Check out this futuristic wallpaper!',
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

const Technology = () => {
  return (
    <section className="bg-black text-white min-h-screen p-6 md:p-20">
    

     

      {/* 8K Wallpapers */}
      <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center mt-20">8K FUTURISTIC WALLPAPERS</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-14">
        {eightKWallpapers.map(({ name }, idx) => {
          const webpPath = `/images/futuristic/${name}.webp`;
          return (
            <div key={idx} className="overflow-hidden bg-white/5">
              <img
                src={webpPath}
                alt={`8k-tech-${idx}`}
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
          href="https://harshared.lemonsqueezy.com/buy/02378b9a-5763-4d11-ad01-4aea096bd00e"
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

export default Technology;
