import React from 'react';

const featuredPosts = [
  {
    title: 'RRB Exam 2024 – 2025 – Category, Eligibility, Selection Process, Post Offered',
    author: 'Piyush Bhartiya',
    initials: 'PB',
    date: 'January 2, 2024',
    img: 'https://picsum.photos/seed/rrb/400/200',
  },
  {
    title: '5 Best Government Education Loan For Study Abroad (Updated 2024)',
    author: 'Vishesh Chogtu',
    initials: 'VC',
    date: 'January 16, 2024',
    img: 'https://picsum.photos/seed/loan/400/200',
  },
  {
    title: 'UPSEE Exam 2024 – 2025 (Updated)',
    author: 'Rachit Agrawal',
    initials: 'RA',
    date: 'January 9, 2024',
    img: 'https://picsum.photos/seed/upsee/400/200',
  },
];

export default function FeaturedPosts() {
  return (
    <section className="px-4 py-8 max-w-5xl mx-auto transform scale-[1.05]">
      <h2 className="text-2xl font-semibold text-purple-700 mb-6">
        In Case You Missed It
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {featuredPosts.map((post, idx) => (
          <article
            key={idx}
            className="flex flex-col bg-white rounded-lg overflow-hidden shadow-md"
          >
            {/* Image */}
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-44 object-cover"
            />

            {/* Content */}
            <div className="p-3 flex flex-col flex-grow">
              <h3 className="text-base font-medium text-purple-800">
                {post.title}
              </h3>
              <div className="mt-2 flex items-center space-x-2">
                <div className="w-7 h-7 rounded-full bg-green-200 flex items-center justify-center">
                  <span className="text-xs text-green-800 font-semibold">
                    {post.initials}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    {post.author}
                  </p>
                  <p className="text-xs text-gray-500">
                    Updated: {post.date}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
