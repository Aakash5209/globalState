

import CircularFlagsAnimation from "./CircularFlagsAnimation.jsx";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-transparent to-purple-50 min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-transparent to-purple-100/30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                <span>Your MBBS
</span>
                <br />
                <span>Journey Starts </span>
                <br />
                <span>Here.</span>
                <br />
                <span className="text-blue-600">Guidance from the experts.</span>
              </h1>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/80 backdrop-blur rounded-2xl p-6 shadow">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-500">Medical Universities</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">1000+</div>
                <div className="text-sm text-gray-500">Medical Mentors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">25+</div>
                <div className="text-sm text-gray-500">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">10,000+</div>
                <div className="text-sm text-gray-500">MBBS Success Stories</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-6 py-3 rounded-xl transition-all duration-200">
                Find Your Dream Medical College
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column - Circular Animation */}
          <div className="relative flex items-center justify-center">
            <CircularFlagsAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
