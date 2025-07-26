import React from 'react';

export default function PromoBanner() {
  return (
    <div className="w-full flex justify-center py-6">
      <div className="transform scale-[0.75] origin-top-center">
        <div className="flex flex-col md:flex-row gap-6 p-6">
          
          {/* LEFT CARD */}
          <div className="relative flex-1 bg-purple-400 rounded-2xl overflow-hidden flex items-center">
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-purple-500 rounded-full opacity-30 transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute right-20 bottom-0 w-[100px] h-[200px] bg-purple-500 rounded-full opacity-20" />

            <div className="flex-1 p-8 text-white">
              <h2 className="text-3xl font-normal leading-snug">
                Pay for credit transfer only after<br />
                <span className="font-bold">visa approval</span>
              </h2>
              <button className="mt-6 bg-purple-700 hover:bg-purple-800 text-white font-medium py-3 px-6 rounded-full inline-flex items-center">
                Talk to expert <span className="ml-2">→</span>
              </button>
            </div>

            <img
              src="https://via.placeholder.com/300x400?text=Person"
              alt="Person holding passport"
              className="h-64 md:h-80 object-cover"
            />
          </div>

          {/* RIGHT CARD */}
          <div className="relative flex-1 bg-amber-200 rounded-2xl overflow-hidden p-8 flex flex-col justify-between">
            <div className="absolute inset-y-0 right-0 w-1 bg-white opacity-20 space-y-6" />

            <div>
              <p className="uppercase text-sm font-medium text-gray-700 mb-4">
                Early bird offer!
              </p>

              <div className="mb-4">
                <img
                  src="https://via.placeholder.com/200x100?text=Certification+Badge"
                  alt="Certification Badge"
                  className="w-full max-w-xs h-auto rounded-md shadow"
                />
              </div>

              <div className="bg-white inline-flex items-center py-3 px-4 rounded-lg shadow mb-4">
                <img
                  src="https://via.placeholder.com/40?text=IIT"
                  alt="IIT Logo"
                  className="w-8 h-8 mr-3"
                />
                <span className="text-lg font-semibold text-gray-800">
                  Start advanced certification from IIT
                </span>
              </div>
            </div>

            <div>
              <p className="text-gray-500 line-through">INR 1,00,000</p>
              <p className="text-3xl font-bold text-gray-900">INR 70,800</p>

              <button className="mt-4 bg-purple-700 hover:bg-purple-800 text-white font-medium py-3 px-8 rounded-full flex items-center">
                Enroll now <span className="ml-2">→</span>
              </button>
            </div>

            <div className="absolute bottom-0 right-0 flex flex-wrap opacity-60">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className={`p-2 transform ${
                    i % 2 === 0 ? 'translate-x-4 translate-y-4' : ''
                  }`}
                >
                  <svg
                    className="w-8 h-8 text-yellow-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <text
                      x="50%"
                      y="55%"
                      textAnchor="middle"
                      fontSize="14"
                      fill="#fff"
                    >
                      ₹
                    </text>
                  </svg>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
