import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

const questions = [
  {
    question: "What is the purpose of this Election Transparency System?",
    answer:
      "This system is designed to improve trust in the voting process by allowing verifiable, tamper-proof, transparent audit trails without affecting the existing EVM workflow.",
  },
  {
    question: "Does this system detect or prevent corruption in voting?",
    answer:
      "It cannot detect individuals, but it helps eliminate opportunities for manipulation by creating secure, immutable logs that cannot be changed or erased.",
  },
  {
    question: "Is this compatible with India's current EVM system?",
    answer:
      "Yes. The system is designed to work as an additional transparency layer. It does not replace or modify EVMs, but enhances voter confidence.",
  },
  {
    question: "Can voters verify their vote?",
    answer:
      "Voters cannot see their exact vote for privacy reasons, but they can verify that their vote was recorded, counted, and logged in a secure public ledger.",
  },
  {
    question: "Does this system require internet inside polling booths?",
    answer:
      "No. The transparency layer works offline during voting and syncs encrypted data later, ensuring no network-based tampering is possible.",
  },
  {
    question: "Can this stop fake voting or booth capturing?",
    answer:
      "It helps reduce such risks by creating real-time logs, digital time-stamps, and audit trails that make manipulation traceable and extremely difficult.",
  },
  {
    question: "Is citizen data or voter identity exposed?",
    answer:
      "No. The system uses anonymized and encrypted logging. No personal identity, voting preference, or sensitive information is stored.",
  },
  {
    question: "Is it approved for official elections?",
    answer:
      "This is a prototype meant for research, awareness, and transparency demonstrations. Official implementation requires Election Commission approval.",
  },
];


  return (
    <div className="bg-[#0a0501] text-[#f5f0e9] min-h-screen flex flex-col items-center px-4 py-10">
      <div className="max-w-3xl w-full">
        <p className="text-xs text-[#f5f0e9] text-center mb-2 tracking-widest">
          - FAQ -
        </p>
        <h1 className="text-center text-xl sm:text-2xl font-semibold mb-8">
          Essential Question
          <span className="text-[#f07a3b]"> Answer</span>
        </h1>

        <div className="space-y-3">
          {questions.map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#1a120b] rounded-md p-4 cursor-pointer select-none"
              onClick={() => toggleAccordion(index)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-[9px] sm:text-[10px] font-semibold leading-tight">
                  {item.question}
                </h3>
                {activeIndex === index ? (
                  <ChevronUp className="text-[#f07a3b] text-xs" />
                ) : (
                  <ChevronDown className="text-[#f07a3b] text-xs" />
                )}
              </div>
              <motion.p
                className={`text-[7px] sm:text-[8px] mt-2 leading-tight ${
                  activeIndex === index ? 'block' : 'hidden'
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: activeIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {item.answer}
              </motion.p>
            </motion.div>
          ))}
        </div>

        <p className="text-[6px] sm:text-[7px] text-center text-[#f5f0e9] mt-6 leading-tight">
          Want to know more? You can email us anytime at
          <a href="mailto:support@getfomoat.com" className="text-[#f07a3b] underline">
            support@getfomoat.com
          </a>
        </p>

        <div className="flex justify-center mt-3">
          <button className="bg-white text-[#0a0501] text-[8px] sm:text-[9px] font-semibold rounded-full px-6 py-1.5 hover:bg-[#f07a3b] hover:text-white transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
