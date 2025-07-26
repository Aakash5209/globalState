




import React, { useRef } from "react";

const students = [
  {
    name: "Tarushi Gupta",
    university: "Astrakhan State Medical University",
    testimonial: "I would highly recommend AdmitKard to any study abroad aspirant.",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    name: "Siddarth Warrier",
    university: "University of Toronto",
    testimonial: "AdmitKard has a great team and a solid work ethic.",
    video: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    name: "Subarna Chakraborty",
    university: "Orel State University",
    testimonial: "Have it not been for AdmitKard, I would not have reached my goal.",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

const TestimonialsSection = () => {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (!containerRef.current) return;
    const scrollAmount = 300;
    containerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="py-8 px-4 max-w-6xl mx-auto">
      <h2 className="text-center text-2xl font-semibold text-purple-700 mb-4">
       Hear From Our Future Doctors
      </h2>

      <div className="relative">
        {/* Slider Arrows */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow p-2"
        >
          ◀
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow p-2"
        >
          ▶
        </button>

        {/* Scrollable Cards */}
        <div
          ref={containerRef}
          className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-10"
        >
          {students.map((student, idx) => (
            <div
              key={idx}
              className="min-w-[260px] rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm"
            >
              {/* Video */}
              <div className="relative w-full h-[280px] group">
                <video
                  src={student.video}
                  muted
                  loop
                  playsInline
                  className="object-cover w-full h-full rounded-t-2xl group-hover:brightness-75"
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                />
                {/* Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-2 rounded-full shadow-md group-hover:scale-105 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-purple-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="px-3 py-2 text-sm">
                <p className="text-gray-800 font-medium line-clamp-3">{student.testimonial}</p>
                <hr className="my-2 border-purple-500" />
                <p className="text-gray-700 font-semibold">{student.name}</p>
                <p className="text-gray-400 text-xs">{student.university}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;


