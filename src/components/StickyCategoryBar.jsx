// src/components/StickyCategoryBar.js

import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion"; // ✨ 1. Import motion

const allCategories = [
  "Animals", "Anime", "Abstract", "Cars", "City","Gaming", "Ninjas",
  "Mountains", "Scifi", "Space", "Sport", "Futuristic"
];

const categoryRoutes = {
  Animals: "/animals", Anime: "/anime", Abstract: "/abstract",
  Cars: "/automotive", City: "/city", Gaming: "/Gaming", Ninjas: "/ninjas",
  Mountains: "/nature", Scifi: "/futuristic", Space: "/space",
  Sport: "/sport", Futuristic: "/technology"
};

// ✨ 2. Define the animation variant for the bar
const slideInFromBottom = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.8, // Delay to make it appear after the main hero animation
    },
  },
};

const StickyCategoryBar = () => {
  const [showMore, setShowMore] = useState(false);
  const location = useLocation();

  if (location.pathname !== "/") return null;

  const visibleCategories = showMore ? allCategories : allCategories.slice(0, 3);

  return (
    // ✨ 3. Convert the root div to a motion.div and apply the animation
    <motion.div
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-[600px] px-4 py-3 shadow-xl backdrop-blur-lg bg-black/10 rounded-md"
      variants={slideInFromBottom}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-wrap justify-center items-center gap-3 max-h-[300px] overflow-y-auto">
        
        {/* Non-interactive Title */}
        <div className="px-5 py-2 bg-black text-white text-xs tracking-wide uppercase font-bold font-[Space Grotesk]">
          Categories
        </div>

        {/* Linked Category Buttons */}
        {visibleCategories.map((cat, idx) => (
          <Link
            key={idx}
            to={categoryRoutes[cat] || "#"}
            className="relative px-5 py-2 bg-white text-black text-xs tracking-wide uppercase group overflow-hidden font-[Space Grotesk]"
          >
            <span className="relative z-10 group-hover:text-white">{cat}</span>
            <span className="absolute left-0 top-0 h-full w-0 bg-[#ff7300] transition-all duration-500 ease-in-out group-hover:w-full z-0" />
          </Link>
        ))}

        {/* View More / Show Less Button */}
        <button
          onClick={() => setShowMore(!showMore)}
          className="relative px-5 py-2 bg-white text-black text-xs tracking-wide uppercase group overflow-hidden font-[Space Grotesk]"
        >
          <span className="relative z-10 text-[#ff7300] group-hover:text-white">
            {showMore ? "Show Less" : "View More"}
          </span>
          <span className="absolute left-0 top-0 h-full w-0 bg-[#ff7300] transition-all duration-500 ease-in-out group-hover:w-full z-0" />
        </button>
      </div>
    </motion.div>
  );
};

export default StickyCategoryBar;