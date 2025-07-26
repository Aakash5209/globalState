const CostAdvantageProgram = () => {
  return (
    <section className="bg-[#FFF8F3] py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left Content */}
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#42276B] leading-snug">
            Pursue your<br />
            MS in US with<br />
            <span className="font-bold">Cost Advantage Program</span>
          </h2>

          <p className="mt-6 text-[#42276B] text-xl font-medium">
            & save <span className="text-orange-500 text-3xl font-bold">INR 25 lakhs</span>
          </p>

          <button className="mt-8 bg-[#42276B] text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-[#321e58] transition text-base">
            Enroll now <span className="text-xl">›</span>
          </button>
        </div>

        {/* Right Grid Content */}
        <div className="grid grid-cols-2 gap-6 w-full max-w-md">
          {/* Save block */}
          <div className="col-span-2 bg-[#C7ACFF] text-white rounded-2xl p-6">
            <h3 className="text-2xl font-medium mb-4">Save</h3>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="text-xl">💸</span>
                <p className="text-lg">40% on<br />total cost</p>
              </div>
              <div className="h-10 w-px bg-white"></div>
              <div className="flex items-center gap-3">
                <span className="text-xl">📅</span>
                <p className="text-lg">6 months<br />on course duration</p>
              </div>
            </div>
          </div>

          {/* IIT Certificate */}
          <div className="bg-[#D5C6FF] rounded-2xl p-6 text-[#42276B] flex flex-col justify-between min-h-[140px]">
            <div className="text-base leading-snug">
              Earn advanced<br />
              certification<br />
              from <span className="font-bold">IIT</span>
            </div>
            <div className="mt-3 text-xl">🎓</div>
          </div>

          {/* Work Visa */}
          <div className="bg-[#FCEEDC] rounded-2xl p-6 text-[#42276B] min-h-[140px]">
            <h4 className="text-3xl font-bold mb-2">3</h4>
            <p className="text-base">year work visa guaranteed</p>
          </div>

          {/* GRE/GMAT */}
          <div className="bg-[#FCEEDC] rounded-2xl p-6 text-[#42276B] text-center text-base flex items-center justify-center min-h-[100px]">
            GRE/GMAT<br />
            <span className="text-gray-500 text-sm">not required</span>
          </div>

          {/* Visa Success Rate */}
          <div className="bg-[#E1D2FF] rounded-2xl p-6 text-[#42276B] min-h-[100px]">
            <h4 className="text-3xl font-bold mb-2">45%</h4>
            <p className="text-base leading-tight">higher visa<br />success rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostAdvantageProgram;










