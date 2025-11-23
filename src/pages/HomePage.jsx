import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-[#efeeee] via-[#b36f4a] to-[#1a0e0a] overflow-hidden font-[Poppins]">
      <motion.div
        className="hidden lg:block absolute -bottom-48 -left-48 w-[650px] h-[650px] rounded-tr-full border border-black"
        style={{
          background:
            "radial-gradient(circle at center, #fff0cc 0%, #ffb86c 40%, #d18f6a 80%)",
          filter: "drop-shadow(0 0 10px #ffb86c)",
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className="hidden lg:block absolute -bottom-48 -right-48 w-[650px] h-[650px] rounded-tl-full border border-black"
        style={{
          background:
            "radial-gradient(circle at center, #fff0cc 0%, #ffb86c 40%, #d18f6a 80%)",
          filter: "drop-shadow(0 0 10px #ffb86c)",
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      <main className="max-w-4xl mx-auto px-6 pt-40 text-center relative z-10">
        <motion.h1
          className="font-extrabold text-black text-[2.75rem] sm:text-[3.5rem] md:text-[4rem] leading-[1.1]"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Biometric EVM 
        </motion.h1>
        <motion.p
          className="mt-4 max-w-xl mx-auto text-black text-xs sm:text-sm font-normal leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Proud to secure 15th Rank All-India in the All India Idea & Innovation
          Competition (AP&T DTE) from 85 national projects.  
          Special thanks to my team — Satyam Kumar and Deepak Kumar — for their
          dedication.  
          Honoured by Air Commodore Narsing Sailani, DDG AP&T, with a medal, ₹2000 cash prize, certificate, and commemorative key ring.
        </motion.p>
        <motion.button
          className="mt-8 bg-white text-black font-bold text-sm rounded-full px-6 py-2 hover:brightness-90 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Project
        </motion.button>
      </main>

      <motion.div
        className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[300px] h-[300px] rounded-full border-2 border-white shadow-2xl z-0 "
        style={{
          backgroundImage: `url("parabola.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "drop-shadow(0 0 20px white)",
          transformOrigin: "center center",
        }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      />
      
    </div>
  );
};

export default HomePage;
