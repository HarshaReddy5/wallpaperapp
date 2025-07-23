import React from 'react';
import { Link } from 'react-router-dom'; // Make sure this import is here

export default function App() {
  return (
    <div className="bg-black">
      <CircularScroll />
    </div>
  );
}

const CircularScroll = () => {
  const outerImageUrls = [
    "/images/mountain/m1.webp", "/images/scifi/scifi14.webp", "/images/city/city3.webp", "/images/sport/sport11.webp",
    "/images/cars/car8.webp", "/images/anime/anime4.webp", "/images/mountain/m5.webp", "/images/city/city4.webp",
  ];

  const innerImageUrls = [
    "/images/cars/car12.webp", "/images/anime/anime2.webp", "/images/scifi/scifi17.webp",
    "/images/animals/animal5.webp", "/images/sport/sport14.webp", "/images/anime/anime8.webp",
  ];

  const [scrollProgress, setScrollProgress] = React.useState(0);
  const containerRef = React.useRef(null);

  const numOuterArms = outerImageUrls.length;
  const numInnerArms = innerImageUrls.length;
  const outerArms = Array.from({ length: numOuterArms });
  const innerArms = Array.from({ length: numInnerArms });

  React.useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { top, height } = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const start = windowHeight;
        const end = -height;
        const progress = (top - start) / (end - start);
        const clampedProgress = Math.max(0, Math.min(1, progress));
        setScrollProgress(clampedProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const formCircleProgress = Math.min(1, scrollProgress / 0.5);
  const expandProgress = Math.max(0, (scrollProgress - 0.5) / 0.5);

  const formCircleScale = Math.pow(formCircleProgress, 2);
  const expandScale = 1 + expandProgress * 13;

  const outerRotation = expandProgress * 90;
  const innerRotation = -expandProgress * 90;
  const textOpacity = expandProgress;
  const textY = (1 - expandProgress) * 50;

  const ImageArm = ({ armArray, numArms, imageUrls, sizeClass }) => {
    return armArray.map((_, i) => {
      const armFinalRotation = (360 / numArms) * i;
      const armCurrentRotation = formCircleProgress * armFinalRotation;
      const imageCounterRotation = -armCurrentRotation;

      return (
        <div
          key={i}
          className="absolute top-0 left-0 w-full h-full"
          style={{
            transform: `rotate(${armCurrentRotation}deg)`,
          }}
        >
          <img
            src={imageUrls[i]}
            alt={`Circular element ${i}`}
            className={`${sizeClass} rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover`}
            style={{
              transform: `rotate(${imageCounterRotation}deg)`,
              opacity: formCircleProgress,
            }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://placehold.co/60x60/cccccc/ffffff?text=Error';
            }}
          />
        </div>
      );
    });
  };

  return (
    <div ref={containerRef} className="h-[400vh] relative">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="relative w-64 h-64 md:w-96 md:h-96">
          {/* Outer rotating ring */}
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              transform: `scale(${formCircleScale * expandScale}) rotate(${outerRotation}deg)`,
            }}
          >
            <ImageArm
              armArray={outerArms}
              numArms={numOuterArms}
              imageUrls={outerImageUrls}
              sizeClass="w-10 h-10 md:w-14 md:h-14"
            />
          </div>

          {/* Inner rotating ring */}
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              transform: `scale(${formCircleScale * expandScale}) rotate(${innerRotation}deg)`,
            }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3">
              <ImageArm
                armArray={innerArms}
                numArms={numInnerArms}
                imageUrls={innerImageUrls}
                sizeClass="w-8 h-8 md:w-12 md:h-12"
              />
            </div>
          </div>
        </div>

        {/* Text + Button */}
        <div
          className="absolute text-center text-white"
          style={{
            opacity: textOpacity,
            transform: `translateY(${textY}px)`,
          }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            EXPLORE OUR WIDE RANGE OF BUNDLES
          </h2>
     <Link
  to="/bundles"
  className="relative px-5 py-2 bg-white text-black text-xs md:text-sm tracking-wide uppercase group overflow-hidden"
>
  <span className="relative z-10">View All Bundles</span>
  <span className="absolute left-0 top-0 h-full w-0 bg-[#ff7300] transition-all duration-500 ease-in-out group-hover:w-full z-0" />
</Link>

        </div>
      </div>
    </div>
  );
};
