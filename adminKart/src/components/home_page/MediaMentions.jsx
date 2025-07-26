const MediaMentions = () => {
  const media = [
    { name: "NDTV", color: "#666666", icon: "https://placehold.co/120x60/FFFFFF/000000?text=NDTV" },
    { name: "The Hindu", color: "#ECECEC",icon: "https://placehold.co/120x60/FFFFFF/000000?text=The Hindu" },
    { name: "Entrepreneur", color: "#ECECEC",icon:"https://placehold.co/120x60/FFFFFF/000000?text=Entrepreneur" },
    { name: "Inc42", color: "#FFC2C2",icon:"https://placehold.co/120x60/FFFFFF/000000?text=Inc42" },
    { name: "The Telegraph", color: "#A8C6FF",icon:"https://placehold.co/120x60/FFFFFF/000000?text=The Telegraph" },
    { name: "The Financial Express", color: "#A8C6FF",icon:"https://placehold.co/120x60/FFFFFF/000000?text=The Financial Express"  },
    { name: "India Today", color: "#FF6666" ,icon:"https://placehold.co/120x60/FFFFFF/000000?text=India Today"},
    { name: "The Times of India", color: "#ECECEC",icon:"https://placehold.co/120x60/FFFFFF/000000?text=The Times of India" },
    { name: "YourStory", color: "#FFE3E3" ,icon:"https://placehold.co/120x60/FFFFFF/000000?text=YourStory"},
    { name: "Business Standard", color: "#ECECEC" ,icon:"https://placehold.co/120x60/FFFFFF/000000?text=Business Standard"},
    { name: "Mint", color: "#FFE2B8",icon:"https://placehold.co/120x60/FFFFFF/000000?text=Mint" },
    { name: "ET", color: "#FFE2B8",icon:"https://placehold.co/120x60/FFFFFF/000000?text=ET" },
  ];

  // const dummyIcon = "https://placehold.co/120x60/FFFFFF/000000?text=NDTV"; // Replace with your uploaded dummy image path
   

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl font-semibold text-[#42276B] mb-10">
      Dream MBBS in Media
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1">
        {media.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center rounded-2xl w-full h-[150px]"
            style={{ backgroundColor: item.color }}
          >
            <img
              src={item.icon}
              alt={item.name}
              className="max-h-[70%] max-w-[80%] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaMentions;
