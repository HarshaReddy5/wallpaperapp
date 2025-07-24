import React, { useEffect, useRef, useState } from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';

import HeroLanding from '../assets/m6.webp';
import HeroParallax from '../assets/sp1.png';

export const Hero = () => {
  const gradientRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;
      setCoords({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-black">
      {/* Hero Landing Section */}
      <div
        className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden"
        style={{
          backgroundImage: `url(${HeroLanding})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          ref={gradientRef}
          className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
          style={{
            background: `radial-gradient(at ${coords.x}% ${coords.y}%, rgba(255,255,255,0.05), transparent 60%)`,
            transition: 'background 0.1s ease-out',
          }}
        />

        <div className="z-10 text-center px-4">
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.0}
            glareColor="#ffffff"
            glarePosition="bottom"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            transitionSpeed={1500}
            scale={1.02}
          >
            <h1 className="text-white text-4xl md:text-8xl font-bold">
              8K WALLPAPER AREA
            </h1>
            <h2 className="text-white text-base md:text-xl font-light mt-4 max-w-3xl mx-auto">
              Explore handpicked 8K wallpapers for car lovers, anime fans, and gamers alike.
              High-res. No fluff. Pure fire for your setup.
            </h2>
          </Tilt>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-2xl z-20">
          ↓
        </div>
      </div>

      {/* Parallax Section */}
      <div className="bg-black">
        <div className="w-[90%] mx-auto">
          <Parallax
            bgImage={HeroParallax}
            strength={300}
            bgImageStyle={{ objectFit: 'cover' }}
          >
            <div className="h-[90vh] sm:h-[85vh] lg:h-[80vh]" />
          </Parallax>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-10">
        <Link to="/spiderman">
          <button className="relative px-4 py-1.5 bg-white text-black text-sm sm:text-base tracking-wide uppercase group overflow-hidden">
            <span className="relative z-10">Checkout Spiderman Bundle</span>
            <span className="absolute left-0 top-0 h-full w-0 bg-[#ff7300] transition-all duration-500 ease-in-out group-hover:w-full z-0" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
