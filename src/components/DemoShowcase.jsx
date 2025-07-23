import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import styled from 'styled-components';

const AnimationContainer = styled.div`
  height: 300vh;
  position: relative;
`;

const StickyContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const DemoButton = styled(motion.a)`
  position: absolute;
  z-index: 10;
  padding: 0.5rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: black;
  background: white;
  overflow: hidden;
  text-align: center;
  text-decoration: none;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0%;
    background-color: #ff7300;
    transition: width 0.5s ease-in-out;
    z-index: 0;
  }

  span {
    position: relative;
    z-index: 10;
  }

  &:hover::before {
    width: 100%;
  }

  &:hover {
    color: white;
  }

  @media (max-width: 768px) {
    padding: 0.3rem 0.8rem;
    font-size: 0.7rem;
  }

  @media (max-width: 480px) {
    padding: 0.25rem 0.6rem;
    font-size: 0.65rem;
  }
`;

const MotionImage = styled(motion.img)`
  position: absolute;
  width: 200px;
  height: 150px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100px;
    height: 70px;
  }
`;

const DemoShowcase = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const [radius, setRadius] = useState(300);

  // Handle screen size for responsive radius
  useEffect(() => {
    const updateRadius = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 480) {
        setRadius(160);
      } else if (screenWidth < 768) {
        setRadius(220);
      } else {
        setRadius(300);
      }
    };

    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  const myImages = [
    '/images/anime/anime6.webp',
    '/images/cars/car6.webp',
    '/images/mountain/m3.webp',
    '/images/sport/sport9.webp',
    '/images/spiderman/sp1.webp',
    '/images/scifi/Scifi6.webp',
  ];

  const numImages = myImages.length;

  // Tilt effect values
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  return (
    <AnimationContainer ref={containerRef}>
      <StickyContainer
        onMouseMove={(e) => {
          const { clientX, clientY } = e;
          const { innerWidth, innerHeight } = window;
          const x = (clientX / innerWidth - 0.5) * 30;
          const y = (clientY / innerHeight - 0.5) * 30;
          tiltX.set(y);
          tiltY.set(-x);
        }}
        onMouseLeave={() => {
          tiltX.set(0);
          tiltY.set(0);
        }}
      >
       <DemoButton href="https://drive.google.com/drive/folders/18RsjYbgwmmjiH58Nu5BQIxGjF4dPRBX4?usp=drive_link" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }}>
  <span>DOWNLOAD 8K DEMO</span>
</DemoButton>


        {myImages.map((imageUrl, i) => {
          const sectionStart = i / numImages;
          const sectionEnd = (i + 1) / numImages;

          const angle = useTransform(
            scrollYProgress,
            [sectionStart, sectionEnd],
            [0, (2 * Math.PI) / numImages]
          );

          const x = useTransform(angle, (a) =>
            radius * Math.cos(a + (i * 2 * Math.PI) / numImages)
          );
          const y = useTransform(angle, (a) =>
            radius * Math.sin(a + (i * 2 * Math.PI) / numImages)
          );

          const opacity = useTransform(scrollYProgress, [sectionStart, sectionEnd], [0, 1]);

          return (
            <MotionImage
              key={i}
              src={imageUrl}
              alt={`Wallpaper ${i + 1}`}
              style={{
                x,
                y,
                opacity,
                rotateX: tiltX,
                rotateY: tiltY,
                transformPerspective: 800,
              }}
            />
          );
        })}
      </StickyContainer>
    </AnimationContainer>
  );
};

export default DemoShowcase;
