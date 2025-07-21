import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const allCategories = [
  "Animals", "Anime", "Abstract", "Cars", "City",
  "Mountains", "Minimal", "Nature", "Scifi", "Space",
  "Sport", "Technology"
];

const StickyCategoryBar = () => {
  const [showMore, setShowMore] = useState(false);
  const location = useLocation();

  // Only show on homepage
  if (location.pathname !== "/") return null;

  const visibleCategories = showMore ? allCategories : allCategories.slice(0, 3);

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-auto max-w-[95%] px-4 py-3 shadow-xl backdrop-blur-lg bg-black/50">
      <div
        className={`flex flex-wrap justify-center items-center gap-3 overflow-hidden transition-all duration-700 ease ${
          showMore ? "max-h-[300px]" : "max-h-[80px]"
        }`}
      >
        {/* Highlighted "Categories" Button */}
        <button
          className="relative px-5 py-2 bg-black text-white rounded-[2px] text-xs tracking-wide uppercase group overflow-hidden font-[Space Grotesk]"
        >
          <span className="relative z-10 font-bold">Categories</span>
          <span className="absolute left-0 top-0 h-full w-full bg-black z-0" />
        </button>

        {/* Category Buttons */}
        {visibleCategories.map((cat, idx) => (
          <button
            key={idx}
            className="relative px-5 py-2 bg-white text-black text-xs tracking-wide uppercase group overflow-hidden font-[Space Grotesk]"
          >
            <span className="relative z-10 group-hover:text-white">{cat}</span>
            <span className="absolute left-0 top-0 h-full w-0 bg-[#ff7300] transition-all duration-500 ease-in-out group-hover:w-full z-0" />
          </button>
        ))}

        {/* View More / Show Less */}
        <button
          onClick={() => setShowMore(!showMore)}
          className="relative px-5 py-2 bg-white text-black text-xs tracking-wide uppercase group overflow-hidden ml-2 font-[Space Grotesk]"
        >
          <span className="relative z-10 text-[#ff7300] group-hover:text-white">
            {showMore ? "Show Less" : "View More"}
          </span>
          <span className="absolute left-0 top-0 h-full w-0 bg-[#ff7300] transition-all duration-500 ease-in-out group-hover:w-full z-0" />
        </button>
      </div>
    </div>
  );
};

export default StickyCategoryBar;
