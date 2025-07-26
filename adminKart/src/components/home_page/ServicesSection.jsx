

// const FeatureCards = () => {
//   const cards = [
//     {
//       title: "Shortlist Universities",
//       desc: "Find your dream university with our advanced Course Finder",
//       cta: "Find my dream university",
//       bg: "bg-[#FFF1E8]",
//     },
//     {
//       title: "Prepare for IELTS",
//       desc: "Take the personalized assistance of our in-house IELTS experts",
//       cta: "Know more",
//       bg: "bg-[#DDF3ED]",
//     },
//     {
//       title: "Get Education Loan",
//       desc: "Finance your study abroad dreams with AK Finance",
//       cta: "Talk to loan expert",
//       bg: "bg-[#F5ECFF]",
//     },
//     {
//       title: "Apply for Scholarship",
//       desc: "Find the best scholarships available for your profile",
//       cta: "Find scholarship",
//       bg: "bg-[#FFF1E8]",
//     },
//       {
//       title: "Get Education Loan",
//       desc: "Finance your study abroad dreams with AK Finance",
//       cta: "Talk to loan expert",
//       bg: "bg-[#F5ECFF]",
//     },
//     {
//       title: "Apply for Scholarship",
//       desc: "Find the best scholarships available for your profile",
//       cta: "Find scholarship",
//       bg: "bg-[#FFF1E8]",
//     }
//   ];

//   const dummyImage = "/dummy-square.png"; // Upload and place a square dummy image named accordingly

//   return (
//     <div className="px-6 py-12 max-w-7xl mx-auto">
//       <h2 className="text-3xl font-semibold text-gray-800 mb-10">
//         ensuring you get the <span className="text-purple-500">best in</span>
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {cards.map((card, idx) => (
//           <div
//             key={idx}
//             className={`${card.bg} rounded-xl p-4 flex flex-col justify-between items-center text-center h-[300px] w-full`}
//           >
//             {/* Dummy Square Image with matching background */}
//             <div className="w-[80px] h-[80px] rounded-md mb-4" style={{ backgroundColor: card.bg.replace('bg-[', '').replace(']', '') }}>
//               <img
//                 src={dummyImage}
//                 alt="dummy"
//                 className="w-full h-full object-contain rounded-md"
//               />
//             </div>

//             {/* Text Content */}
//             <h3 className="text-md font-semibold text-[#42276B] mb-2">{card.title}</h3>
//             <p className="text-sm text-[#42276B] mb-4">{card.desc}</p>

//             <button className="mt-auto bg-white px-4 py-2 text-sm rounded-full shadow text-[#42276B] font-medium flex items-center gap-2 hover:shadow-md transition">
//               {card.cta}
//               <span className="text-lg">›</span>
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeatureCards;
