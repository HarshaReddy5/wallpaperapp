import React from 'react';

const ninjas = [
  {
    id: 1,
    name: 'SHADOW NINJA',
    icon: '🌑',
    image: '/images/3dninja/abwb7.png',
    theme: 'shadow',
  },
  {
    id: 2,
    name: 'FIRE NINJA',
    icon: '🔥',
    image: '/images/3dninja/abwb9.png',
    theme: 'fire',
  },
  {
    id: 3,
    name: 'ICE NINJA',
    icon: '❄️',
    image: '/images/3dninja/abwb14.png',
    theme: 'ice',
  },
  {
    id: 4,
    name: 'STORM NINJA',
    icon: '⚡',
    image: '/images/3dninja/abwb2.png',
    theme: 'storm',
  },
  {
    id: 5,
    name: 'LIGHTNING NINJA',
    icon: '⚡',
    image: '/images/3dninja/abwb13.png',
    theme: 'lightning',
  },
  {
    id: 6,
    name: 'STONE NINJA',
    icon: '🪨',
    image: '/images/3dninja/abwb16.png',
    theme: 'stone',
  },
  {
    id: 7,
    name: 'VENOM NINJA',
    icon: '🧪',
    image: '/images/3dninja/abwb1.png',
    theme: 'venom',
  },
  {
    id: 8,
    name: 'LOVE NINJA',
    icon: '💘',
    image: '/images/3dninja/abwb24.png',
    theme: 'love',
  },
];

const getGlowColor = (theme) => {
  switch (theme) {
    case 'fire':
      return '#ff6b00';
    case 'ice':
      return '#00eaff';
    case 'shadow':
      return '#888888';
    case 'storm':
      return '#7f5fff';
    case 'lightning':
      return '#faff00';
    case 'stone':
      return '#ff7300';
    case 'love':
      return '#ffb6f9';
    case 'venom':
      return '#50fa7b';
    default:
      return '#ffffff';
  }
};

const getTextGradient = (theme) => {
  switch (theme) {
    case 'fire':
      return 'bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-transparent bg-clip-text';
    case 'ice':
      return 'bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 text-transparent bg-clip-text';
    case 'shadow':
      return 'bg-gradient-to-r from-gray-800 via-gray-900 to-black text-transparent bg-clip-text';
    case 'storm':
      return 'bg-gradient-to-r from-indigo-600 via-purple-500 to-blue-500 text-transparent bg-clip-text';
    case 'lightning':
      return 'bg-gradient-to-r from-black via-yellow-400 to-yellow-200 text-transparent bg-clip-text';
    case 'stone':
      return 'bg-gradient-to-r from-gray-600 via-green-400 to-green-200 text-transparent bg-clip-text';
    case 'venom':
      return 'bg-gradient-to-r from-green-700 via-lime-500 to-red-500 text-transparent bg-clip-text';
    case 'love':
      return 'bg-gradient-to-r from-white via-pink-400 to-pink-600 text-transparent bg-clip-text';
    default:
      return 'text-white';
  }
};

const Dninja = () => {
  return (
    <section
      className="relative w-full mt-20 min-h-screen bg-fixed bg-cover bg-center bg-no-repeat text-white py-32 px-4"
      style={{
        backgroundImage: `url('/images/3dninja/ab26.webp')`,
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0 backdrop-blur-sm" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center uppercase mb-24 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-400 to-red-500">
          8K 3D NINJA BUNDLE
        </h2>

        <div className="space-y-32">
          {ninjas.map((ninja, index) => (
            <div
              key={ninja.id}
              className={`relative group overflow-visible bg-transparent p-6 w-full max-w-md ${
                index % 2 === 0 ? 'ml-auto' : 'mr-auto'
              }`}
            >
              <div className="flex flex-col items-center space-y-4">
                <img
                  src={ninja.image}
                  alt={ninja.name}
                  className="w-84 h-64 object-contain group-hover:scale-105 group-hover:brightness-125 transition"
                  style={{
                    filter: `drop-shadow(0 0 40px ${getGlowColor(ninja.theme)})`,
                  }}
                />
                <h3
                  className={`text-2xl md:text-3xl font-bold uppercase ${getTextGradient(ninja.theme)}`}
                >
                  {ninja.icon} {ninja.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-24">
          <a
            href="/ninjas"
            className="px-8 py-4 text-white font-semibold text-lg uppercase bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 hover:scale-105 transition duration-300 shadow-lg shadow-pink-500/30"
            style={{ borderRadius: 0 }}
          >
            🛍️ CHECKOUT FULL NINJA BUNDLE
          </a>
        </div>
      </div>
    </section>
  );
};

export default Dninja;
