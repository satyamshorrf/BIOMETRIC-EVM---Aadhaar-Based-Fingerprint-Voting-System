import { motion } from "framer-motion";
import { Fingerprint, Server, Cpu, ShieldCheck } from "lucide-react";

export default function ProjectOverviewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#efeeee] via-[#b36f4a] to-[#1a0e0a] py-16 px-6 font-[Inter]">

 
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-[#1a0e0a] drop-shadow-md mb-14"
      >
        Project Overview
      </motion.h1>

   
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-[#fff0cc]/80 shadow-xl backdrop-blur-xl rounded-2xl border border-[#ffb86c] p-8 mb-16"
      >
        <h2 className="text-2xl font-bold mb-4 text-[#1a0e0a]">
          About the Project
        </h2>
        <p className="text-[#3a2a20] leading-relaxed text-sm md:text-base">
          The Biometric EVM – Aadhaar-Based Fingerprint Voting System integrates
          biometric fingerprint verification, Aadhaar authentication, Arduino control,
          and a secure PHP–MySQL backend to deliver transparent and tamper-proof voting.
        </p>
      </motion.div>

  
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center text-[#1a0e0a] mb-10"
      >
        Key Components of the System
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20">

        {[
          {
            icon: <Fingerprint size={40} />,
            title: "Biometric Verification",
            desc: "Fingerprint authentication via R307 linked with Aadhaar.",
            top: "border-[#ffb86c]",
            iconColor: "text-[#1a0e0a]"
          },
          {
            icon: <Cpu size={40} />,
            title: "Arduino Control",
            desc: "Arduino UNO R4 WiFi handles capture, logic & transmission.",
            top: "border-[#b36f4a]",
            iconColor: "text-[#b36f4a]"
          },
          {
            icon: <Server size={40} />,
            title: "Backend Server",
            desc: "Secure PHP–MySQL server manages verification and results.",
            top: "border-[#ffb86c]",
            iconColor: "text-[#ffb86c]"
          },
          {
            icon: <ShieldCheck size={40} />,
            title: "Security Layer",
            desc: "Aadhaar API ensures one-person-one-vote integrity.",
            top: "border-[#d18f6a]",
            iconColor: "text-[#d18f6a]"
          }
        ].map((box, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className={`bg-[#fff0cc]/70 backdrop-blur-lg shadow-xl rounded-2xl p-6 text-center border-t-[6px] ${box.top} hover:scale-[1.04] transition-all`}
          >
            <div className={`flex justify-center mb-4 ${box.iconColor}`}>
              {box.icon}
            </div>
            <h3 className="font-bold text-xl text-[#1a0e0a] mb-2">
              {box.title}
            </h3>
            <p className="text-[#3a2a20] text-sm leading-relaxed">
              {box.desc}
            </p>
          </motion.div>
        ))}

      </div>

 
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-[#fff0cc]/85 backdrop-blur-xl shadow-xl rounded-2xl p-8 border-l-[6px] border-[#b36f4a]"
      >
        <h2 className="text-2xl font-bold mb-4 text-[#1a0e0a]">
          Vision & Impact
        </h2>
        <p className="text-[#3a2a20] leading-relaxed text-sm md:text-base mb-4">
          A secure, Aadhaar-enabled, technology-driven voting mechanism that supports
          digital governance in India, ensuring transparency and trust.
        </p>
        <p className="text-[#1a0e0a] italic">
          "Empowering Democracy with Technology – One Fingerprint at a Time."
        </p>
      </motion.div>
    </div>
  );
}
