

const articles = [
  {
    title: 'Post–Study Work Opportunities in the UK: Your Complete Guide',
    author: 'Tawqeer Ali',
    initials: 'TA',
    date: 'July 22, 2025',
  },
  {
    title: 'IELTS Preparation Guide For UK',
    author: 'Piyush Bhartiya',
    initials: 'PB',
    date: 'July 17, 2025',
  },
  {
    title: 'US Visa: Types, Eligibility, Fees, Application Process (2024–2025)',
    author: 'Vishesh Chogtu',
    initials: 'VC',
    date: 'January 17, 2024',
  },
];

export default function LatestArticles() {
  return (
    <section className="px-6 py-8 max-w-6xl mx-auto transform scale-[1.07]">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-purple-700">Latest Articles</h2>
        <a href="#" className="text-lg text-purple-700 hover:underline">
          View All &gt;
        </a>
      </div>

      {/* Article items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((a, i) => (
          <article
            key={i}
            className="overflow-hidden bg-transparent shadow-md rounded-xl p-4 transform transition duration-300 hover:scale-105"
          >
            <div className="h-52 bg-purple-200 rounded-md"></div>
            <div className="px-1 pt-4 pb-5">
              <p className="text-lg font-semibold text-purple-800 mb-2 leading-snug">
                {a.title}
              </p>
              <div className="flex items-center space-x-4 mb-2">
                <div className="w-9 h-9 rounded-full bg-purple-300 flex items-center justify-center">
                  <span className="text-base font-bold text-purple-800">
                    {a.initials}
                  </span>
                </div>
                <p className="text-lg font-medium text-gray-800">{a.author}</p>
              </div>
              <p className="text-sm text-gray-600">Updated: {a.date}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}












