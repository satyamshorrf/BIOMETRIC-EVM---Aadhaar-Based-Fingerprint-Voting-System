import { motion } from "framer-motion";
import { Linkedin, Github, Twitter,  } from "lucide-react";

const teamMembers = [
  {
    name: "Cadet Satyam Kumar",
    role: "Team Leader | BR2024SDIA1030009",
    image: "/imgs/profile3.jpeg",
    bio: "Lead developer, system architect and innovation head responsible for biometric verification and EVM workflow integration.",
    linkedin: "https://www.linkedin.com/in/satyamshorrf",
    github: "https://github.com/satyamshorrf",
    Twitter: "https://twitter.com/satyamshorrf",

  },
  {
    name: "Cadet Deepak Kumar",
    role: "Team Member | BR2025SDIA1030007",
    image: "/imgs/deepak.jpeg",
    bio: "Presentation and documentation coordinator responsible for designing the project PPT and assisting the Team Leader with presentation delivery.",
    linkedin: "/https://www.linkedin.com/in/deepak-kumar-5b7245234/",
    github: "/https://github.com/deepak-kumar-1",
    Twitter: "/https://twitter.com/deepak_kumar_1",

  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white py-16 px-6 font-[Inter]">

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12"
      >
        Meet Our Team
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-[#1a1a1a] border border-[#3f3f3f] shadow-lg rounded-2xl p-6 text-center 
            hover:shadow-blue-500/20 hover:border-blue-500 hover:scale-[1.02] transition-all"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-40 object-cover rounded-full mx-auto mb-6 shadow-xl border border-[#3f3f3f]"
            />

            <h2 className="text-2xl font-bold text-white">
              {member.name}
            </h2>

            <p className="text-blue-400 font-medium mb-3">
              {member.role}
            </p>

            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {member.bio}
            </p>

            <div className="flex justify-center gap-4">
              <a
                href={member.linkedin}
                className="p-2 bg-[#262626] border border-[#3f3f3f] rounded-full 
                hover:bg-blue-600 hover:border-blue-600 transition"
              >
                <Linkedin size={20} />
              </a>

              <a
                href={member.github}
                className="p-2 bg-[#262626] border border-[#3f3f3f] rounded-full 
                hover:bg-purple-600 hover:border-purple-600 transition"
              >
                <Github size={20} />
              </a>

              <a
                href={member.github}
                className="p-2 bg-[#262626] border border-[#3f3f3f] rounded-full 
                hover:bg-purple-600 hover:border-purple-600 transition"
              >
                <Twitter size={20} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
