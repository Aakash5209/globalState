const FeatureCards = () => {
  const cards = [
    {
      title: "Find Top Medical Colleges",
      desc: "Find the best medical colleges for your profile and budget.",
      cta: "Search Colleges",
      bg: "#FFF1E8",
    },
    {
      title: "NEET & Exam Prep",
      desc: "Get personalized coaching for NEET and other entrance exams.",
      cta: "Start Prep",
      bg: "#DDF3ED",
    },
    {
      title: "Medical Education Financing",
      desc: "Finance your MBBS abroad with exclusive loan partners.",
      cta: "Apply for Loan",
      bg: "#F5ECFF",
    },
    {
      title: "Find MBBS Scholarships",
      desc: "Discover scholarships specifically for medical students.",
      cta: "Find scholarship",
      bg: "#FFF1E8",
    },
  ];

  const dummyImage = "data:image/png;base64,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"; // Replace this with your uploaded dummy image if needed

  return (
    <div className="px-6 py-12 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold text-gray-800 mb-10 text-center">
        Ensuring you get the <span className="text-purple-500">best in</span>
      </h2>

      <div className="flex flex-wrap justify-center -m-1">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="m-1"
            style={{
              backgroundColor: card.bg,
              width: "calc(50% - 8px)", // two cards per row, accounting for 4px margin each side
              height: "300px", // square shape
              borderRadius: "16px",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxSizing: "border-box",
            }}
          >
            {/* Dummy image with matching background */}
            <div
              className="w-[60px] h-[60px] mx-auto rounded"
              style={{
                backgroundColor: card.bg,
              }}
            >
              <img
                src={dummyImage}
                alt="icon"
                className="w-full h-full object-contain rounded"
              />
            </div>

            <div className="text-center">
              <h3 className="text-md font-semibold text-[#42276B] mt-4 mb-1">
                {card.title}
              </h3>
              <p className="text-sm text-[#42276B]">{card.desc}</p>
            </div>

            <button className="bg-white mt-4 px-4 py-2 text-sm rounded-full shadow text-[#42276B] font-medium flex items-center justify-center gap-1 hover:shadow-md transition">
              {card.cta}
              <span className="text-lg">›</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
