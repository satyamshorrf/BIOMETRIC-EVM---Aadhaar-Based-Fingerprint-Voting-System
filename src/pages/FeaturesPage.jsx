import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Wifi, Lock, Database, CheckCircle2 } from "lucide-react";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#efeeee] via-[#b36f4a] to-[#1a0e0a] text-[#1a0e0a] p-8 font-[Inter]">

   
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-6 text-center drop-shadow-lg"
      >
        Salient Features
      </motion.h1>


      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-[#3a2a20] max-w-3xl mx-auto text-center mb-12"
      >
        These features highlight the innovation, accuracy, and security of the complete system.
      </motion.p>

      {/* FEATURES GRID */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {[
          {
            icon: <ShieldCheck className="w-10 h-10" />,
            title: "Secure Voter Verification",
            desc: "Biometric / RFID / OTP-based verification ensuring one person votes only once.",
            iconColor: "text-[#1a0e0a]",
            borderColor: "border-[#ffb86c]"
          },
          {
            icon: <Cpu className="w-10 h-10" />,
            title: "Smart Microcontroller System",
            desc: "Real-time processing using Arduino/ESP with sensors & displays.",
            iconColor: "text-[#b36f4a]",
            borderColor: "border-[#b36f4a]"
          },
          {
            icon: <Wifi className="w-10 h-10" />,
            title: "Wireless Connectivity",
            desc: "GSM/WiFi secure communication ensures encrypted API transmission.",
            iconColor: "text-[#ffb86c]",
            borderColor: "border-[#ffb86c]"
          },
          {
            icon: <Lock className="w-10 h-10" />,
            title: "Tamper-Proof System",
            desc: "Restricted access + encrypted layer protect all hardware modules.",
            iconColor: "text-[#d18f6a]",
            borderColor: "border-[#d18f6a]"
          },
          {
            icon: <Database className="w-10 h-10" />,
            title: "Real-Time Database Sync",
            desc: "Votes are synced instantly to secure SQL or cloud storage.",
            iconColor: "text-[#ffb86c]",
            borderColor: "border-[#ffb86c]"
          },
          {
            icon: <CheckCircle2 className="w-10 h-10" />,
            title: "One Person One Vote",
            desc: "Auto-blocking of repeated attempts ensures election integrity.",
            iconColor: "text-[#1a0e0a]",
            borderColor: "border-[#b36f4a]"
          }
        ].map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`p-6 rounded-2xl bg-[#fff0cc]/80 backdrop-blur-xl shadow-xl border-t-4 ${f.borderColor} hover:scale-[1.04] transition-all`}
          >
            <div className={`mb-4 flex justify-center ${f.iconColor}`}>
              {f.icon}
            </div>

            <h2 className="text-xl font-semibold mb-2 text-[#1a0e0a] text-center">
              {f.title}
            </h2>

            <p className="text-[#3a2a20] text-center leading-relaxed">
              {f.desc}
            </p>
          </motion.div>
        ))}

      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-center text-[#3a2a20] mt-12"
      >
        Each feature is optimized to provide transparency, security, and trust.
      </motion.div>
    </div>
  );
}
