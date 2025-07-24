import React from 'react';

const Subscription = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">CHOOSE YOUR BUNDLE</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Current Bundle */}
        <div className="bg-white/5 p-8 flex flex-col items-center text-center rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Current 8K Bundle</h2>
          <p className="mb-6 text-gray-300">
            Get instant access to all 8K wallpapers in downloadable bundle
          </p>
          <p className="text-xl font-semibold mb-4">$8 One-Time</p>

          {/* Preview Images */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <div className="w-28 h-20 sm:w-32 sm:h-24 overflow-hidden rounded">
              <img
                src="/images/mountain/m4.webp"
                alt="Preview 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-28 h-20 sm:w-32 sm:h-24 overflow-hidden rounded">
              <img
                src="/images/cars/car5.webp"
                alt="Preview 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-28 h-20 sm:w-32 sm:h-24 overflow-hidden rounded">
              <img
                src="/images/anime/anime6.webp"
                alt="Preview 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <a
            href="https://harshared.lemonsqueezy.com/buy/b087bb72-ea00-450a-885f-c8080a3049c8"
            className="relative px-6 py-2 bg-white text-black text-sm tracking-wide uppercase group overflow-hidden"
          >
            <span className="relative z-10">Get Bundle</span>
            <span className="absolute left-0 top-0 h-full w-0 bg-[#ff7300] transition-all duration-500 ease-in-out group-hover:w-full z-0" />
          </a>
        </div>

        {/* Coming Soon Bundle */}
        <div className="bg-white/5 p-8 flex flex-col items-center text-center rounded-lg">
          <h2 className="text-2xl font-bold mb-4">8K Bundle V2</h2>
          <p className="mb-6 text-gray-300">
            Get instant access to all 8K wallpapers in downloadable bundle V2. Coming soon...
          </p>
          <p className="text-xl font-semibold mb-4">$8 One-Time</p>

          {/* Preview Images */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <div className="w-28 h-20 sm:w-32 sm:h-24 overflow-hidden rounded">
              <img
                src="/images/mountain/m6.webp"
                alt="Preview 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-28 h-20 sm:w-32 sm:h-24 overflow-hidden rounded">
              <img
                src="/images/cars/car1.webp"
                alt="Preview 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-28 h-20 sm:w-32 sm:h-24 overflow-hidden rounded">
              <img
                src="/images/anime/anime4.webp"
                alt="Preview 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <a
            href="#"
            className="relative px-6 py-2 bg-white text-black text-sm tracking-wide uppercase group overflow-hidden cursor-not-allowed opacity-60"
            onClick={(e) => e.preventDefault()}
          >
            <span className="relative z-10">Coming Soon</span>
            <span className="absolute left-0 top-0 h-full w-0 bg-[#ff7300] transition-all duration-500 ease-in-out group-hover:w-full z-0" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
