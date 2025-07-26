import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";

const bundles = [
  {
    category: "Animals",
    previews: ["/images/animals/animal5.webp", "/images/animals/animal7.webp", "/images/animals/animal3.webp","/images/animals/animal4.webp"],
    link: "https://harshared.lemonsqueezy.com/buy/dc61de8e-9eb2-4ee1-858f-2d1f5f443192",
    previewLink: "/animals",
  },
  {
    category: "Anime",
    previews: ["/images/anime/anime6.webp", "/images/anime/anime2.webp", "/images/anime/anime7.webp","/images/anime/anime8.webp"],
    link: "https://harshared.lemonsqueezy.com/buy/c182c95b-90a4-4967-8e4c-bd1ba3d0ead6",
    previewLink: "/anime",
  },
  {
    category: "Cars",
    previews: ["/images/cars/car11.webp","/images/cars/car9.webp","/images/cars/car8.webp","/images/cars/car6.webp",],
    link: "https://harshared.lemonsqueezy.com/buy/5edc2d34-c250-4ccd-891c-0e1f6f5a8128",
    previewLink: "/automotive",
  },
  {
    category: "City",
    previews: ["/images/city/city1.webp","/images/city/city6.webp","/images/city/city3.webp","/images/city/city4.webp"],
    link: "https://harshared.lemonsqueezy.com/buy/985b9ed2-fdcc-4db4-82ef-d2dcb34866ce",
    previewLink: "/city",
  },
    {
    category: "Futuristic",
    previews: ["/images/futuristic/f1.webp","/images/futuristic/f5.webp","/images/futuristic/f9.webp","/images/futuristic/f15.webp"],
    link: "https://harshared.lemonsqueezy.com/buy/02378b9a-5763-4d11-ad01-4aea096bd00e",
    previewLink: "/technology",
  },
  {
    category: "Gaming",
    previews: ["/images/gaming/gaming13.webp","/images/gaming/gaming5.webp","/images/gaming/gaming8.webp","/images/gaming/gaming9.webp"],
    link: "https://harshared.lemonsqueezy.com/buy/a4e2a143-3c25-4a02-a3c8-aa17214bce71",
    previewLink: "/gaming",
  },
    {
    category: "Ninja",
    previews: ["/images/3dninja/ab1.webp","/images/3dninja/ab5.webp","/images/3dninja/ab8.webp","/images/3dninja/ab7.webp"],
    link: "https://harshared.lemonsqueezy.com/buy/6f870a36-1ae9-4b19-a693-2b6717c8f273",
    previewLink: "/ninjas",
  },
  {
    category: "Mountains",
  previews: ["/images/mountain/m3.webp","/images/mountain/m2.webp","/images/mountain/m8.webp","/images/mountain/m6.webp"],
    link: "https://harshared.lemonsqueezy.com/buy/6db61223-9dff-46dd-ab56-76ca4d711468",
    previewLink: "/nature",
  },
  {
    category: "Scifi",
     previews: ["/images/scifi/scifi9.webp","/images/scifi/Scifi5.webp","/images/scifi/scifi11.webp","/images/scifi/scifi14.webp"],
    link: "https://harshared.lemonsqueezy.com/buy/a1783f99-2f36-4373-963c-8a0c47a1aa38",
    previewLink: "/futuristic",
  },
  {
    category: "Spiderman",
   previews: ["/images/spiderman/sp1.webp","/images/spiderman/sp8.webp","/images/spiderman/sp11.webp","/images/spiderman/sp5.webp"],
    link: "https://harshared.lemonsqueezy.com/buy/f60e4012-897e-46d8-8735-7bdf656d4b04",
    previewLink: "/spiderman",
  },
  {
    category: "Sport",
    previews: ["/images/sport/sport9.webp","/images/sport/sport6.webp","/images/sport/sport10.webp","/images/sport/sport14.webp"],
    link: "https://harshared.lemonsqueezy.com/buy/43969516-3d7d-4dd2-a85f-b15516f9098d",
    previewLink: "/sport",
  },
  {
    category: "Full 8K-Includes all",
    previews: ["/images/spiderman/sp11.webp", "/images/sport/sport3.webp","/images/mountain/m7.webp","/images/gaming/gaming8.webp"],
    link: "https://harshared.lemonsqueezy.com/buy/b087bb72-ea00-450a-885f-c8080a3049c8",
    previewLink: "/subscribe",
  },
];

const Bundles = () => {
  const scrollContainerRef = useRef(null);
  const [maxScroll, setMaxScroll] = useState(0);
  const x = useMotionValue(0);
  const spring = useSpring(x, { stiffness: 180, damping: 30 });

  useEffect(() => {
    const updateMaxScroll = () => {
      if (!scrollContainerRef.current) return;
      const scrollWidth = scrollContainerRef.current.scrollWidth;
      const offsetWidth = scrollContainerRef.current.offsetWidth;
      setMaxScroll(scrollWidth - offsetWidth);
    };

    updateMaxScroll();
    window.addEventListener("resize", updateMaxScroll);
    return () => window.removeEventListener("resize", updateMaxScroll);
  }, []);

  useEffect(() => {
  const el = scrollContainerRef.current;
  if (!el) return;

  let startX = 0;
  let currentX = 0;

  const handleWheel = (e) => {
    e.preventDefault();
    let newX = x.get() - e.deltaY * 1.5;
    newX = Math.max(-maxScroll, Math.min(0, newX));
    x.set(newX);
  };

  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
    currentX = x.get();
  };

  const handleTouchMove = (e) => {
    const delta = e.touches[0].clientX - startX;
    let newX = currentX + delta;
    newX = Math.max(-maxScroll, Math.min(0, newX));
    x.set(newX);
  };

  el.addEventListener("wheel", handleWheel, { passive: false });
  el.addEventListener("touchstart", handleTouchStart, { passive: true });
  el.addEventListener("touchmove", handleTouchMove, { passive: false });

  return () => {
    el.removeEventListener("wheel", handleWheel);
    el.removeEventListener("touchstart", handleTouchStart);
    el.removeEventListener("touchmove", handleTouchMove);
  };
}, [x, maxScroll]);


  return (
    <section className="bg-black min-h-screen text-white py-16 px-4 flex flex-col">
      <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center">
        EXPLORE ALL THE 8K BUNDLES
      </h2>

      <div className="overflow-x-hidden">
        <motion.div
          ref={scrollContainerRef}
          className="flex gap-8 px-4"
          style={{ x: spring }}
        >
          {bundles.map((bundle, index) => (
            <motion.div
              key={index}
              className="min-w-[320px] sm:min-w-[400px] bg-white/5  shadow-lg overflow-hidden flex-shrink-0 flex flex-col items-center text-center"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="p-4">
                <h3 className="text-2xl font-bold tracking-wide uppercase mb-4">
                  {bundle.category} Bundle
                </h3>
              </div>

<div className="grid grid-cols-2 gap-2 px-4 w-full max-w-xs mx-auto">
  {bundle.previews.map((img, i) => (
    <div key={i} className="aspect-square overflow-hidden rounded">
      <img
        src={img}
        alt={`${bundle.category} Preview ${i + 1}`}
        className="w-full h-full object-cover"
      />
    </div>
  ))}
</div>



              <div className="p-6 mt-auto flex flex-col gap-3 items-center">
                <div className="flex gap-3 flex-wrap justify-center">
                  {/* Buy Now */}
                  <motion.a
                    href={bundle.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative px-5 py-2 bg-white text-black text-xs tracking-wide uppercase group overflow-hidden w-fit"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="relative z-10">Buy Now</span>
                    <span className="absolute left-0 top-0 h-full w-0 bg-[#ff7300] transition-all duration-500 ease-in-out group-hover:w-full z-0" />
                  </motion.a>

                  {/* Full 8K Previews */}
<Link
  to={bundle.previewLink}
  className="relative px-5 py-2 bg-white text-black text-xs tracking-wide uppercase group overflow-hidden w-fit"
>
  <span className="relative z-10">View Previews</span>
  <span className="absolute left-0 top-0 h-full w-0 bg-[#ff7300] transition-all duration-500 ease-in-out group-hover:w-full z-0" />
</Link>


                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Bundles;
