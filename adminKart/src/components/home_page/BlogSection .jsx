const BlogSection = () => {
  const blogs = [
    {
      readTime: "15 min read min read",
      title: "How to Write a Strong SOP",
      subtitle: "for Medical School",
      bgColor: "#F5ECFF",
      image: "https://placehold.co/200x200/E9D5FF/3730A3?text=SOP+Guide",
    },
    {
      readTime: "12 min read",
      title: "Top 5 Countries for MBBS",
      subtitle: "Abroad in 2025",
      bgColor: "#FFF1E8",
      image: "https://placehold.co/200x200/FFE3E3/B91C1C?text=MBBS+Abroad",
    },
    {
      readTime: "10 min read",
      title: "NEET vs. MCAT",
      subtitle: "Which Exam Do You Need?",
      bgColor: "#DDF3ED",
      image: "https://placehold.co/200x200/D1FAE5/047857?text=Exams",
    },
    {
      readTime: "18 min read",
      title: "Student's Guide to Living",
      subtitle: "in the Philippines for MBBS",
      bgColor: "#F5ECFF",
      image: "https://placehold.co/200x200/E9D5FF/3730A3?text=Student+Life",
    },
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#42276B]">
     MBBS Guides & Articles
        </h2>
        <button className="bg-[#F5ECFF] text-[#42276B] px-4 py-1.5 rounded-full text-sm font-medium hover:shadow-md transition">
          View All
        </button>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {blogs.map((blog, idx) => (
          <div
            key={idx}
            className="rounded-3xl p-6 flex justify-between items-start relative overflow-hidden"
            style={{ backgroundColor: blog.bgColor }}
          >
            {/* Left Text */}
            <div className="z-10 max-w-[60%]">
              <span className="bg-white text-sm px-3 py-1 rounded-full font-medium inline-block mb-4">
                {blog.readTime}
              </span>
              <h3 className="text-lg font-semibold text-[#42276B] leading-snug">
                {blog.title}
              </h3>
              <p className="text-sm text-[#42276B] mt-1">{blog.subtitle}</p>
            </div>

            {/* Right Image */}
            <div className="w-[40%] z-0 flex justify-end items-end">
              <img
                src={blog.image}
                alt="blog visual"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Right Arrow Button */}
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow">
              <span className="text-lg text-[#42276B]">›</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
