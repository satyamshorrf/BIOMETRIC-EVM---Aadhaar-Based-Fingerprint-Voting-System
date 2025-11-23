import { motion } from "framer-motion";
import { Award, Medal, Stamp } from "lucide-react";

const recognitions = [
  {
    title: "15th Rank – All India Idea & Innovation Competition (AP&T DTE)",
    desc: "Selected among top innovations across India, presented before Armed Forces jury.",
    icon: <Medal size={40} />,
    color: "text-[#1a73e8]", 
  },
  {
    title: "Medal, Certificate & ₹2000 Cash Prize",
    desc: "Awarded for excellence in innovation and prototype development.",
    icon: <Award size={40} />,
    color: "text-[#f6c90e]",
  },
  {
    title: "Recognition by Air Commodore Narsing Sailani",
    desc: "Honoured with a medal, certificate and key ring for exemplary innovation.",
    icon: <Stamp size={40} />,
    color: "text-[#16a34a]", 
  },
];

const mentors = [
  {
    name: "Colonel B. Satyanarayan",
    role: "Project Guide & Senior Mentor",
    image: "https://via.placeholder.com/300",
    msg: "Provided consistent guidance, motivation and strategic direction throughout the project journey.",
  }
];

export default function RecognitionPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#efeeee] via-[#b36f4a] to-[#1a0e0a] py-20 px-6 font-[Inter] overflow-hidden">

   
      <motion.div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(255,216,145,0.8), rgba(179,111,74,0))",
          filter: "blur(40px)",
        }}
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.div
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(255,196,120,0.7), rgba(179,111,74,0))",
          filter: "blur(40px)",
        }}
        animate={{ opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

 
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-[#1a0e0a] drop-shadow-xl mb-14"
      >
        Recognition & Achievements
      </motion.h1>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mb-20">
        {recognitions.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-2xl p-8 text-center border border-[#b36f4a]/50 hover:scale-[1.03] hover:shadow-[0_0_20px_#d09a6a] transition-all"
          >
            <div className={`flex justify-center mb-4 ${item.color}`}>
              {item.icon}
            </div>

            <h2 className="text-xl font-bold text-[#1a0e0a] mb-2">
              {item.title}
            </h2>

            <p className="text-[#3b2a26] text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

   
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center text-[#1a0e0a] mb-10"
      >
        Mentors & Guidance
      </motion.h2>

      <div className="max-w-3xl mx-auto">
        {mentors.map((mentor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8 flex flex-col md:flex-row gap-8 items-center border border-[#d09a6a]/60 hover:shadow-[0_0_20px_#c38758] transition-all"
          >
            <img
              src={mentor.image}
              alt={mentor.name}
              className="w-40 h-40 rounded-full object-cover shadow-xl"
            />

            <div>
              <h3 className="text-2xl font-extrabold text-[#1a0e0a] mb-1">
                {mentor.name}
              </h3>

              <p className="text-[#1a73e8] font-medium mb-3">
                {mentor.role}
              </p>

              <p className="text-[#3b2a26] text-sm leading-relaxed">
                {mentor.msg}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
