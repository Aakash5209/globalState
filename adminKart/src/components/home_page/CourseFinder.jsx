const CourseFinder = () => {
  return (
    <section className="bg-[#F7ECFF] py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 flex flex-col-reverse md:flex-row items-center justify-center gap-12 shadow-md">
        {/* Left Content */}
        <div className="max-w-md text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#42276B] mb-4">
         Medical College Finder
          </h2>
          <p className="text-[#42276B] text-lg leading-relaxed mb-2">
           Know your chances of admission <br />
            to top medical universities with <br />
            <span className="text-[#A64EF5] font-medium">our advanced finder tool.</span>
          </p>

          <button className="mt-6 bg-[#42276B] text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-[#321e58] transition text-base mx-auto md:mx-0">
           Check Admission Chances<span className="text-xl">›</span>
          </button>
        </div>

        {/* Right Side Image */}
        <div className="w-full max-w-sm">
          <img
            src="https://placehold.co/400x300/F7ECFF/42276B?text=College+Finder"
            alt="Course Finder Preview"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default CourseFinder;
