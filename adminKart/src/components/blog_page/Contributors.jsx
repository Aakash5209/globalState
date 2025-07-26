


import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const contributors = [
  {
    name: "Akansha Bhadula",
    degree: "MBA - Marketing and HR",
    experience: "8+ Years",
    description:
      "With 8+ years of experience in Overseas Admission, Akansha has helped many students achieve their dreams.",
    img: "https://via.placeholder.com/",
    socials: [<FaLinkedinIn />],
  },
  {
    name: "Geetika Arora",
    degree: "MBA",
    experience: "13+ Years",
    description:
      "Geetika Arora is the Sales Manager at AdmitKard. Born and brought up in Delhi.",
    img: "https://via.placeholder.com/",
    socials: [<FaLinkedinIn />],
  },
  {
    name: "Harminder Singh",
    degree: "MBA",
    experience: "10+ Years",
    description:
      "Harminder Singh is the Assistant Manager - Visa at AdmitKard.",
    img: "https://via.placeholder.com/64",
    socials: [<FaLinkedinIn />],
  },
  {
    name: "Harsha Sachdeva",
    degree: "B.Com",
    experience: "8+ Years",
    description:
      "Harsha Sachdeva is working as a manager in the Admission Team at AdmitKard.",
    img: "https://via.placeholder.com/64",
    socials: [<FaLinkedinIn />],
  },
  {
    name: "Piyush Bhartiya",
    degree: "MBA",
    experience: "20 Years",
    description:
      "Piyush values education and has studied from the top institutions around the world.",
    img: "https://via.placeholder.com/64",
    socials: [<FaFacebookF />, <FaLinkedinIn />],
  },
  {
    name: "Rachit Agrawal",
    degree: "MBA",
    experience: "20 Years",
    description:
      "Rachit believes in the power of education and has helped thousands of students globally.",
    img: "https://via.placeholder.com/64",
    socials: [<FaFacebookF />, <FaTwitter />, <FaLinkedinIn />],
  },
];

const Contributors = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-semibold text-purple-800 mb-8">
        Our Contributors
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contributors.map((contributor, index) => (
          <div
            key={index}
            className="bg-purple-50 p-6 rounded-xl flex justify-between items-start"
          >
            <div className="flex gap-4">
              <img
                src={contributor.img}
                alt={contributor.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold text-purple-800">
                  {contributor.name}
                </h3>
                <p className="text-gray-700 text-sm">
                  {contributor.degree} • {contributor.experience}
                </p>
                <p className="text-gray-700 text-sm mt-2 line-clamp-2">
                  {contributor.description}{" "}
                  <span className="text-purple-600 cursor-pointer">
                    See more
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-purple-400 text-xl">
              {contributor.socials.map((icon, idx) => (
                <div key={idx}>{icon}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contributors;
