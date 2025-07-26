import React from 'react';

export default function FounderVideo() {
  return (
    <div className="flex flex-col items-center px-4 py-12 bg-white">
      <div className="transform scale-[0.85] origin-top">
        <h2 className="text-xl md:text-2xl font-medium text-purple-800 mb-6 text-center">
          Hear from our founder
        </h2>

        <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-md">
          <div className="relative">
            <img
              src="https://assets.admitkard.com/videos/piyush_CTP.webp"
              alt="Video preview"
              className="w-full object-cover"
            />
            {/* Play Button */}
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:scale-105 transition duration-300">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
          <div className="bg-white py-4 px-6 text-center text-lg font-semibold text-black">
            <span className="text-2xl font-bold">•</span> Save 40% on Your USA Masters! No GRE/GMAT. <span className="text-2xl font-bold">•</span>
          </div>
        </div>
      </div>
    </div>
  );
}
