import React, { useRef } from 'react';

export default function LatestStories() {
  const scrollRef = useRef(null);

  const stories = [
    {
      title: "World's top Business program",
      author: 'Aditi Singh',
      date: 'April 1, 2024',
      img: 'https://picsum.photos/200/120?random=1',
    },
    {
      title: 'Top Universities Ireland',
      author: 'Anushka Arora',
      date: 'March 4, 2024',
      img: 'https://picsum.photos/200/120?random=2',
    },
    {
      title: 'Study Abroad Guide – Germany',
      author: 'Aditi Singh',
      date: 'February 26, 2024',
      img: 'https://picsum.photos/200/120?random=3',
    },
    {
      title: 'Tips to build your MBA profile',
      author: 'Aditi Singh',
      date: 'February 25, 2024',
      img: 'https://picsum.photos/200/120?random=4',
    },
    {
      title: 'Best Cities for Students',
      author: 'Rahul Mehta',
      date: 'January 10, 2024',
      img: 'https://picsum.photos/200/120?random=5',
    },
    {
      title: 'How to crack IELTS in 30 days',
      author: 'Neha Kapoor',
      date: 'December 19, 2023',
      img: 'https://picsum.photos/200/120?random=6',
    },
    {
      title: 'What to pack before going abroad',
      author: 'Karan Singh',
      date: 'November 2, 2023',
      img: 'https://picsum.photos/200/120?random=7',
    },
  ];

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -375 : 375, behavior: 'smooth' });
  };

  return (
    <section className="relative px-4 py-6 max-w-5xl mx-auto scale-[1.02] transform origin-top">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-purple-700">Latest Stories</h2>
        <a href="#" className="text-base text-purple-700 hover:underline">View All &gt;</a>
      </div>

      {/* Carousel navigation */}
      <div className="relative">
        {/* Left arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 w-12 h-12 rounded-full shadow flex items-center justify-center z-10 text-xl"
        >
          ‹
        </button>

        {/* Cards container */}
        <div ref={scrollRef} className="flex overflow-x-auto space-x-8 px-2 scrollbar-hide">
          {stories.map((s, i) => (
            <div
              key={i}
              className="min-w-[255px] bg-white shadow rounded-xl overflow-hidden"
            >
              <img
                src={s.img}
                alt="Story"
                className="w-full h-[153px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-purple-700 text-base font-semibold border-b border-purple-400 pb-2">
                  {s.title}
                </h3>
                <p className="mt-2 text-base text-gray-700">{s.author}</p>
                <p className="text-sm text-gray-500">{s.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 w-12 h-12 rounded-full shadow flex items-center justify-center z-10 text-xl"
        >
          ›
        </button>
      </div>
    </section>
  );
}
