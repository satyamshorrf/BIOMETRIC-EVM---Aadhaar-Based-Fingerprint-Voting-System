import { motion } from "framer-motion";


const biometricFeatures = [
  {
    title: "Project Rank",
    description: "15th All-India Rank among 85 national projects",

  },
  {
    title: "Team Members",
    description: "Satyam Kumar & Deepak Kumar",

  },
  {
    title: "Award Received",
    description: "Medal, ₹2000 cash prize, certificate, key ring",

  },
  {
    title: "Honoured By",
    description: "Air Commodore Narsing Sailani, DDG AP&T",
   
  },
];

const FeatureCard = ({ title, description, icon }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="relative group bg-[#1a0f0f] rounded-xl p-6 shadow-[0_0_10px_#ff7a3e22] border border-[#ff7a3e33] flex flex-col justify-between overflow-hidden"
  >
    <div>
      <h3 className="text-white font-semibold text-lg mb-2">
        {title.split(" ").slice(0, -1).join(" ")}{" "}
        <span className="text-[#ff7a3e]">{title.split(" ").slice(-1)}</span>
      </h3>
      <p className="text-[#cbd5e1] text-sm leading-relaxed">{description}</p>
    </div>
    <div className="absolute top-3 left-3 w-2.5 h-2.5 rounded-full bg-[#3a241f]"></div>
    <motion.div
      initial={{ backgroundColor: "#4a2a2a" }}
      whileHover={{ backgroundColor: "#dc2626" }}
      className=""
    >
      {icon}
    </motion.div>
    <div className="absolute top-3 left-3 w-2.5 h-2.5 rounded-full bg-[#3a241f]"></div>
    <div className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-[#3a241f]"></div>
    <div className="absolute bottom-3 left-3 w-2.5 h-2.5 rounded-full bg-[#3a241f]"></div>
    <div className="absolute bottom-3 right-3 w-2.5 h-2.5 rounded-full bg-[#3a241f]"></div>
  </motion.div>
);

export default function BiometricEVMSection() {
  return (
    <div className="bg-[#130a0a] relative min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-12 py-12">
      {/* Glows */}
      <div
        aria-hidden="true"
        className="absolute rounded-full filter blur-3xl opacity-40"
        style={{
          width: "120px",
          height: "120px",
          background: "radial-gradient(circle, #f9d99c 0%, transparent 70%)",
          top: "50%",
          left: "2%",
          transform: "translateY(-50%)",
          zIndex: 0,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute rounded-full filter blur-3xl opacity-30"
        style={{
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, #4a1a0a 0%, transparent 70%)",
          top: "20%",
          left: "10%",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 max-w-5xl w-full text-center">
        <p className="text-[#ff7a3e] text-[10px] font-semibold tracking-widest mb-3">
          - BIOMETRIC EVM -
        </p>
        <h2 className="text-white font-semibold text-3xl sm:text-4xl max-w-xl mx-auto leading-tight">
          Biometric EVM <br />
          Project Highlights
        </h2>
        <p className="mt-4 text-[#cbd5e1] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Proud to secure 15th All-India Rank in the All India Idea & Innovation
          Competition (AP&T DTE) among 85 national projects. Special thanks to
          our team — Satyam Kumar and Deepak Kumar — for their dedication. Honoured
          by Air Commodore Narsing Sailani, DDG AP&T, with a medal, ₹2000 cash
          prize, certificate, and commemorative key ring.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {biometricFeatures.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-80 bg-black"></div>
    </div>
  );
}
