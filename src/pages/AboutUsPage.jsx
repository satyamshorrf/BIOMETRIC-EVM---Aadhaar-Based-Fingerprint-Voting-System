import React from "react";
import { motion } from "framer-motion";
import { Users, Target, ShieldCheck, Award } from "lucide-react";

const AboutUsPage = () => {
  return (
    <div className="bg-[#0a0501] text-[#f5f0e9] min-h-screen px-6 py-12 font-[Inter]">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="text-xs tracking-widest text-[#f07a3b]">- ABOUT US -</p>
        <h1 className="text-xl sm:text-2xl font-semibold mt-2">
          Who <span className="text-[#f07a3b]">We Are</span>
        </h1>
      </motion.div>

  
      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#1a120b] p-6 rounded-xl shadow"
        >
          <Target className="w-8 h-8 text-[#f07a3b] mb-3" />
          <h3 className="text-sm font-semibold mb-2">Our Mission</h3>
          <p className="text-[9px] leading-relaxed text-[#e5d8c8]">
            Our mission is to build secure, scalable, and intelligent systems 
            that empower users and organizations with trust, transparency, and 
            seamless technological experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#1a120b] p-6 rounded-xl shadow"
        >
          <ShieldCheck className="w-8 h-8 text-[#10B981] mb-3" />
          <h3 className="text-sm font-semibold mb-2">Our Vision</h3>
          <p className="text-[9px] leading-relaxed text-[#e5d8c8]">
            We envision a future where secure identity, governance tools, and 
            decentralized technology are accessible to everyone, enhancing trust 
            and boosting innovation globally.
          </p>
        </motion.div>
      </div>


      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <Users className="w-10 h-10 text-[#f07a3b] mx-auto mb-3" />
        <h2 className="text-lg sm:text-xl font-semibold mb-3">Who We Are</h2>
        <p className="text-[9px] text-[#e5d8c8] leading-relaxed">
          We are a dedicated team of developers, designers, and innovators working 
          together to create intelligent digital systems integrated with modern 
          security, identity verification, and multi-domain applications. Our work 
          focuses on high reliability, strong architecture, and scalability.
        </p>
      </motion.div>

  
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-lg sm:text-xl font-semibold text-center mb-6">
          Our <span className="text-[#f07a3b]">Achievements</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-[#1a120b] p-5 rounded-xl shadow flex items-start gap-3">
            <Award className="w-6 h-6 text-[#f07a3b] mt-1" />
            <p className="text-[9px] leading-relaxed text-[#e5d8c8]">
              Recognized for excellence in secure data architecture and modern 
              identity systems.
            </p>
          </div>

          <div className="bg-[#1a120b] p-5 rounded-xl shadow flex items-start gap-3">
            <Award className="w-6 h-6 text-[#10B981] mt-1" />
            <p className="text-[9px] leading-relaxed text-[#e5d8c8]">
              Trusted by multiple organizations for implementing scalable and 
              reliable digital frameworks.
            </p>
          </div>
        </div>
      </motion.div>

 
      <div className="text-center mt-12">
        <button className="bg-white text-[#0a0501] text-[9px] font-semibold rounded-full px-8 py-2 hover:bg-[#f07a3b] hover:text-white transition-colors">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default AboutUsPage;