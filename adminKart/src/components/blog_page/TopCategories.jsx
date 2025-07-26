import React from "react";

const TopCategories = () => {
  const rightCards = [
    {
      title: "Admission Application",
      text: "From essay writing to recommendation letters, our blog provides expert advice on...",
      img: "https://picsum.photos/seed/admission/64/64",
    },
    {
      title: "Country",
      text: "Discover the best universities, scholarships, and cultural experiences in your study abroad...",
      img: "https://picsum.photos/seed/country/64/64",
    },
    {
      title: "Area Of Study",
      text: "Our blog offers insights and resources on various areas of study to help you make an informed choice...",
      img: "https://picsum.photos/seed/study/64/64",
    },
    {
      title: "Visa & Immigration",
      text: "Understand visa processes and immigration rules to smoothly transition abroad...",
      img: "https://picsum.photos/seed/visa/64/64",
    },
    {
      title: "Living Abroad",
      text: "Learn how to settle and thrive while living abroad as a student...",
      img: "https://picsum.photos/seed/living/64/64",
    },
    {
      title: "Career Guidance",
      text: "Explore post-study career options, internships, and future job strategies...",
      img: "https://picsum.photos/seed/career/64/64",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 ">
      <h2 className="text-3xl font-semibold text-purple-700 mb-8">
        Top Categories
      </h2>

      <div className="flex items-center flex-col md:flex-row gap-8">
        {/* Left Section */}
        <div className="flex-1">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://blog-res.admitkard.com/blog/wp-content/uploads/2019/12/29174831/Toughest-Exam-.jpg"
              alt="Exam Preparation"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold mt-4 text-gray-800">
            Exam Preparation
          </h3>
        </div>

        <div className="flex-1 flex flex-col gap-[4%]">
          {rightCards.map((card, idx) => (
            <div
              key={idx}
              className="flex gap-4 items-start border-b border-gray-300 pb-4 min-h-[110px]"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div className="flex flex-col justify-center">
                <h4 className="text-lg font-semibold text-gray-900">
                  {card.title}
                </h4>
                <p className="text-gray-600 text-sm">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
