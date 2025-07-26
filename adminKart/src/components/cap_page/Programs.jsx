

import React, { useRef } from "react";

const programs = [
  {
    title: "MS in Computer Science",
    school: "Clark University, Massachusetts",
    credits: 40,
    duration: "18 months",
    mode: "On Campus",
    imageUrl:
      "https://assets.admitkard.com/images/cap/clark-university-pics.png",
    logoUrl:
      "https://assets.admitkard.com/images/cap/clark-university-logo2.png",
  },
  {
    title: "MS in IT",
    school: "Clark University, Massachusetts",
    credits: 40,
    duration: "18 months",
    mode: "On Campus",
    imageUrl:
      "https://assets.admitkard.com/images/cap/clark-university-pics.png",
    logoUrl:
      "https://assets.admitkard.com/images/cap/clark-university-logo2.png",
  },
  {
    title: "MS in Computer Science",
    school: "City University of Seattle, Seattle",
    credits: 27,
    duration: "24 months",
    mode: "On Campus",
    imageUrl:
      "https://assets.admitkard.com/images/cap/city-university-of-seattle-pics.png",
    logoUrl:
      "https://assets.admitkard.com/images/cap/city-university-of-seattle-logo2.png",
  },
  {
    title: "MS in Data Science",
    school: "City University of Seattle, Seattle",
    credits: 27,
    duration: "24 months",
    mode: "On Campus",
    imageUrl:
      "https://assets.admitkard.com/images/cap/city-university-of-seattle-pics.png",
    logoUrl:
      "https://assets.admitkard.com/images/cap/city-university-of-seattle-logo2.png",
  },
  {
    title: "MS in Computer Science (Blend)",
    school: "Long Island University, Brooklyn",
    credits: 24,
    duration: "18 months",
    mode: "On Campus",
    imageUrl:
      "https://assets.admitkard.com/images/cap/long-island-university-pics.png",
    logoUrl:
      "https://assets.admitkard.com/images/cap/long-island-university-logo2.png",
  },
];

export default function Programs() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full flex justify-center pt-4 pb-8">
      <div className="relative w-full max-w-6xl transform scale-[0.90]">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border shadow-md rounded-full p-2"
        >
          ←
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border shadow-md rounded-full p-2"
        >
          →
        </button>

        {/* Scrollable Card Row */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth px-8 scrollbar-hide"
        >
         
          {programs.map((p, idx) => (
            <div
              key={idx}
              className="flex-none w-[290px] bg-white rounded-xl border border-purple-200 overflow-hidden shadow"
            >
              <div className="relative">
                <img
                  src={p.imageUrl}
                  alt={p.title}
                  className="w-full h-44 object-cover"
                />
                <img
                  src={p.logoUrl}
                  alt="Logo"
                  className="absolute top-2 left-2 w-11 h-11 rounded-full bg-white p-1"
                />
              </div>
              <div className="p-5 flex flex-col space-y-2">
                <h3 className="text-xl font-semibold text-purple-800">
                  {p.title}
                </h3>
                <p className="text-base text-gray-600">{p.school}</p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full">
                    ⭐ {p.credits}
                  </span>
                  <span className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full">
                    ⏱ {p.duration}
                  </span>
                  <span className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full">
                    🏫 {p.mode}
                  </span>
                </div>
                <button className="mt-2 bg-purple-700 hover:bg-purple-800 text-white text-base font-medium py-2 rounded-full flex justify-center items-center">
                  Know more <span className="ml-1">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
