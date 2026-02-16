"use client";

import { useState } from "react";
import ProfessionalBackground from "./ProfessionalBackground";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Do you take insurance?",
      answer:
        "I do not accept insurance directly. However, I can provide documentation if you plan to seek out of network reimbursement through your insurance provider. I’m happy to answer questions about this process during a consultation.",
    },
    {
      question: "What are your rates?",
      answer:
        "Session fees vary depending on the type of service. I’m happy to discuss current rates and answer any questions during an initial consultation so you can decide if this feels like a good fit.",
    },
    {
      question: "Do you have any openings?",
      answer:
        "Availability can change. Please reach out to inquire about current openings, and I’ll get back to you as soon as possible.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 pt-16 pb-0 bg-secondary text-primary">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <div className="max-w-[120px] sm:max-w-[150px] lg:max-w-[180px] mx-auto rounded-t-[999px] overflow-hidden bg-white">
            <img src="/faq.jpg" alt="FAQ" className="w-full h-auto block" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:gap-12 items-start">
          <div>
            <h2 className="text-4xl sm:text-5xl font-semibold mb-6">FAQs</h2>
          </div>

          <div className="border-t border-primary">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-primary">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-5 flex items-center gap-4 text-left"
                >
                  <span className="text-lg font-semibold">{item.question}</span>
                  <span className="text-2xl ml-auto shrink-0">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="pb-5 pl-10 pr-2">
                    <p className="text-base sm:text-lg leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProfessionalBackground />
    </section>
  );
};

export default Faq;
