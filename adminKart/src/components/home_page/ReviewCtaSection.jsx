
const ReviewCtaSection = () => {
  const reviews = [
    { platform: "Google", rating: "4.8" },
    { platform: "Facebook", rating: "4.9" },
  ];

  return (
    <div className="w-full flex justify-center px-4 py-12">
      <div className="bg-[#F5ECFF] rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 w-full max-w-4xl">
        {/* Review Boxes */}
        <div className="flex flex-col sm:flex-row gap-4">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl px-6 py-8 text-center shadow-sm w-[160px]"
            >
              <h3 className="text-3xl font-semibold text-[#42276B]">
                {review.rating}
              </h3>
              <p className="text-[#42276B] mt-1">
                {review.platform}
                <br />
                Review
              </p>
              <div className="mt-3 flex justify-center gap-1 text-[#A259FF] text-lg">
                {Array(5)
                  .fill("★")
                  .map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center md:text-left">
          <p className="text-[#42276B] font-medium leading-snug mb-4">
          Trusted by over 10,000+
            <br />
           aspiring doctors
            <br />
            globally
          </p>
          <button className="bg-[#42276B] text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#351f59] transition">
           Start Your Journey <span className="text-lg">›</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCtaSection;
