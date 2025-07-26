import { useState } from "react";
import { ChevronDown } from "lucide-react"; // Optional: Use any icon or SVG

const FaqSection = () => {
  const faqs = [
    {
      question: "What is the mission of Dream MBBS?",
      answer:
        "Dream MBBS's mission is to simplify the process of studying medicine abroad by offering personalized guidance, mentorship, and application support for aspiring doctors.",
    },
    {
      question: "How does Dream MBBS help with my medical school application?",
      answer:
        "We help students choose the right NMC-recognized university, prepare for entrance exams like NEET, craft compelling SOPs, and guide them through the visa and admission process.",
    },
    {
      question:
        "Are the universities recommended by Dream MBBS recognized by the NMC?",
      answer:
        "Yes, we prioritize recommending universities that are recognized by the National Medical Commission (NMC) of India, ensuring your degree is valid for practice in India after passing the required screening tests.",
    },
    {
      question: "Does Dream MBBS assist with post-graduation pathways like the NEXT exam?",
      answer:
        "Absolutely! We provide guidance and resources to help you prepare for the National Exit Test (NEXT) and other licensing exams required to practice medicine in India after your degree abroad.",
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="px-6 py-12 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold text-[#42276B] mb-8">Frequently Asked Questions</h2>

      <div className="space-y-3">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-[#F5ECFF] rounded-2xl px-6 py-4 cursor-pointer transition"
            onClick={() => toggle(idx)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-[#42276B] font-medium text-base">
                {faq.question}
              </h3>
              <ChevronDown
                className={`w-5 h-5 text-[#42276B] transform transition-transform ${
                  openIndex === idx ? "rotate-180" : ""
                }`}
              />
            </div>

            {openIndex === idx && (
              <p className="text-sm text-[#42276B] mt-3">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
