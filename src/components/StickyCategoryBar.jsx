import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

const allCategories = [
  "Animals", "Anime", "Abstract", "Cars", "City",
  "Mountains", "Scifi", "Space",
  "Sport", "Technology"
];

// Mapping each category to your route pattern
const categoryRoutes = {
  Animals: "/animals",
  Anime: "/anime",
  Abstract: "/abstract",
  Cars: "/automotive",
  City: "/city",
  Mountains: "/nature",


  Scifi: "/futuristic",
  Space: "/space",
  Sport: "/sport",
  Technology: "/technology"
};

const StickyCategoryBar = () => {
  const [showMore, setShowMore] = useState(false);
  const location = useLocation();

  if (location.pathname !== "/") return null;

  const visibleCategories = showMore ? allCategories : allCategories.slice(0, 3);

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-[600px] px-4 py-3 shadow-xl backdrop-blur-lg bg-black/50 rounded-md">
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
    </div>
  );
};

export default StickyCategoryBar;
