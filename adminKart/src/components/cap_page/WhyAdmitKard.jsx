const WhyAdmitKard = () => {
  const features = [
    {
      icon: "/icons/airc.png",
      title: "AIRC",
      subtitle: "certified",
    },
    {
      icon: "/icons/iit.png",
      title: "IIT BBS",
      subtitle: "program partner",
    },
    {
      icon: "/icons/experience.png",
      title: "8 years",
      subtitle: "experience",
    },
    {
      icon: "/icons/mentor.png",
      title: "3 K",
      subtitle: "mentors",
    },
    {
      icon: "/icons/success.png",
      title: "90 K",
      subtitle: "success stories",
    },
    {
      icon: "/icons/gsv.png",
      title: "GSV",
      subtitle: "backed",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto bg-[#F7EFFF] rounded-2xl py-12 px-6">
        <h2 className="text-2xl sm:text-3xl text-center font-semibold text-[#42276B] mb-10">
          Why AdmitKard?
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-10 gap-x-6 text-center sm:text-left">
          {features.map((item, index) => (
            <div key={index} className="flex items-center sm:items-start gap-4">
              <img
                src={item.icon}
                alt={item.title}
                className="w-12 h-12 rounded-xl bg-white p-2 shadow-sm"
              />
              <div className="text-[#42276B]">
                <p className="text-lg font-medium">{item.title}</p>
                <p className="text-sm">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAdmitKard;
