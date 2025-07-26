

const StudentJourney = () => {
  const steps = [
    {
      title: "Get eligibility checked for target US university",
      subtitle: "Select from our partner institutions",
    },
    {
      title: "Enroll in IIT PG advanced certification",
      subtitle: "Study online for 3 months and earn US credits",
    },
    {
      title: "Apply and Receive Offer from US university",
      subtitle: "Secure your I20 in 2 Week",
    },
    {
      title: "Complete IIT Certification",
      subtitle: "Earn 9 credits and IITian status",
    },
    {
      title: "Get USA Visa Approved",
      subtitle: "Secure student visa for the US",
    },
    {
      title: "Confirm Credit Transfer & Start your study on Campus",
      subtitle: "Begin the journey to your dream career",
    },
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl text-center font-semibold text-[#42276B] mb-10">
          Student Journey
        </h2>

        <div className="space-y-4 relative">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              {/* Step Circle and Line */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-green-400 text-white flex items-center justify-center font-semibold">
                  {index + 1}
                </div>
                {index !== steps.length - 1 && (
                  <>
                    <div className="w-px h-10 bg-green-400 relative">
                      {/* Down Arrow */}
                      <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-green-400"></div>
                    </div>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="bg-[#f5f5f5] px-6 py-4 rounded-lg w-full">
                <h4 className="font-medium text-gray-800 text-base">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-600 mt-1">{step.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12 text-center">
          <button className="bg-[#42276B] text-white font-medium px-6 py-2.5 rounded-full flex items-center gap-2 mx-auto hover:bg-[#341c5a] transition">
            Talk to expert <span className="text-lg">›</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudentJourney;
