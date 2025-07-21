import React from 'react';

const Subscription = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Choose Your Subscription</h1>
        <p className="text-gray-400 text-lg">
          Access stunning 8K wallpapers — either as a one-time bundle or get lifetime access to all future additions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Current Bundle */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold mb-4">Current 8K Bundle</h2>
          <p className="mb-6 text-gray-300">
            Get instant access to all currently available 8K wallpapers in one downloadable bundle.
          </p>
          <p className="text-xl font-semibold mb-4">₹849 One-Time</p>

                {/* Preview Images */}
<div className="flex space-x-2 mb-6">
  <div className="w-40 h-28 sm:w-28 sm:h-20 overflow-hidden rounded">
    <img src="/images/mountain/m4.png" alt="Preview 1" className="w-full h-full object-cover" />
  </div>
  <div className="w-40 h-28 sm:w-28 sm:h-20 overflow-hidden rounded">
    <img src="/images/cars/car5.png" alt="Preview 2" className="w-full h-full object-cover" />
  </div>
  <div className="w-40 h-28 sm:w-28 sm:h-20 overflow-hidden rounded">
    <img src="/images/anime/anime6.webp" alt="Preview 3" className="w-full h-full object-cover" />
  </div>
</div>

          <a
            href="https://your-lemonsqueezy-link-bundle"
            className="relative px-6 py-2 bg-white text-black font-mono text-sm tracking-wide uppercase group overflow-hidden"
            style={{
              clipPath: 'polygon(8% 0, 100% 0, 100% 92%, 92% 100%, 0 100%, 0 8%)',
            }}
          >
            <span className="relative z-10">Get Bundle</span>
            <span className="absolute left-0 top-0 h-full w-0 bg-[#ff7300] transition-all duration-500 ease-in-out group-hover:w-full z-0" />
          </a>
        </div>

        {/* Lifetime Access */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold mb-4">Lifetime Access</h2>
          <p className="mb-6 text-gray-300">
            Unlock access to all current and future 8K wallpapers — forever.
          </p>
          <p className="text-xl font-semibold mb-4">₹1659 One-Time</p>

      
       {/* Preview Images */}
<div className="flex space-x-2 mb-6">
  <div className="w-40 h-28 sm:w-28 sm:h-20 overflow-hidden rounded">
    <img src="/images/mountain/m6.png" alt="Preview 1" className="w-full h-full object-cover" />
  </div>
  <div className="w-40 h-28 sm:w-28 sm:h-20 overflow-hidden rounded">
    <img src="/images/cars/car1.webp" alt="Preview 2" className="w-full h-full object-cover" />
  </div>
  <div className="w-40 h-28 sm:w-28 sm:h-20 overflow-hidden rounded">
    <img src="/images/anime/anime4.webp" alt="Preview 3" className="w-full h-full object-cover" />
  </div>
</div>


          <a
            href="https://your-lemonsqueezy-link-lifetime"
            className="relative px-6 py-2 bg-white text-black font-mono text-sm tracking-wide uppercase group overflow-hidden"
            style={{
              clipPath: 'polygon(8% 0, 100% 0, 100% 92%, 92% 100%, 0 100%, 0 8%)',
            }}
          >
            <span className="relative z-10">Get Lifetime Access</span>
            <span className="absolute left-0 top-0 h-full w-0 bg-[#ff7300] transition-all duration-500 ease-in-out group-hover:w-full z-0" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
