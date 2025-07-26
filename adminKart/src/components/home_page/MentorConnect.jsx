import React, { useEffect, useState } from 'react';

const messages = [
  { sender: 'student', text: "What's the clinical exposure like?"},
  { sender: 'mentor', text: 'You get hands-on experience from the 3rd year.' },
  { sender: 'student', text: 'Is NEET score mandatory for all countries?' },
  { sender: 'mentor', text: 'Mostly yes, but some countries have alternatives.' },
  { sender: 'student', text: 'How difficult is the FMGE/NEXT exam?' },
  { sender: 'mentor', text: "It's challenging but our mentors guide you through it." },
  { sender: 'student', text: 'What about accommodation?' },
  { sender: 'mentor', text: 'Most universities have dedicated hostels for Indian students.' },
];

const MentorConnect = () => {
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev < messages.length) return prev + 1;
        clearInterval(interval); // stop when all messages are shown
        return prev;
      });
    }, 2000); // 2 seconds between each message

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10">
        
        {/* Left: Video Call UI */}
        <div className="relative w-[300px] h-[400px] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
            alt="Student"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 w-20 h-20 rounded-lg overflow-hidden border-2 border-white shadow-md">
            <img
              src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
              alt="Mentor"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full overflow-hidden border-2 border-white">
            <img
              src="https://flagcdn.com/w40/in.png"
              alt="India Flag"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Middle: Chat UI */}
        <div className="bg-purple-100 p-4 rounded-2xl max-w-[300px] w-full h-[400px] overflow-hidden relative flex flex-col justify-end">
          <div className="flex flex-col gap-2 overflow-y-auto max-h-full pr-2">
            {messages.slice(0, visibleCount).map((msg, index) => (
              <div
                key={index}
                className={`${
                  msg.sender === 'student'
                    ? 'bg-purple-400 text-white ml-auto'
                    : 'bg-white text-gray-800 mr-auto'
                } p-3 rounded-xl w-fit max-w-[90%] text-sm transition-all duration-500`}
              >
                {msg.text}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Text and CTA */}
        <div className="max-w-lg text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2D1B58] leading-snug">
            Get <span className="text-purple-500">real guidance</span> from <br />
            <span className="text-purple-500">real medical students</span> through MBBS Mentors
          </h2>
          <p className="text-[#2D1B58] mt-6 text-base sm:text-lg">
           Talk to students who are already at your dream medical university pursuing their MBBS.
          </p>
          <button className="mt-8 bg-[#42276B] text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-[#341c5a] transition text-base">
           Connect with a mentor<span className="text-xl">›</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MentorConnect;
