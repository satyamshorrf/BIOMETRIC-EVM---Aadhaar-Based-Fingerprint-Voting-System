import { motion } from "framer-motion";
import { Lightbulb, Rocket, Cpu, Network, Bot } from "lucide-react";

export default function FutureDevelopmentPage() {
  const items = [
    {
      icon: <Rocket className="w-10 h-10 text-[#1a73e8]" />, // UIDAI Blue
      title: "Advanced Automation",
      color: "border-[#1a73e8]/50",
      desc: "Deploy next-gen automated workflows for real-time decision making.",
    },
    {
      icon: <Network className="w-10 h-10 text-[#16a34a]" />, // Trust Green
      title: "Cloud & Edge Integration",
      color: "border-[#16a34a]/50",
      desc: "Enable device-to-cloud architecture with secure, scalable pipelines.",
    },
    {
      icon: <Cpu className="w-10 h-10 text-[#f6c90e]" />, // ECI Yellow
      title: "AI-Driven Optimization",
      color: "border-[#f6c90e]/50",
      desc: "ML-based performance tuning, anomaly detection, and predictive control.",
    },
    {
      icon: <Bot className="w-10 h-10 text-[#1a73e8]" />,
      title: "Autonomous Intelligence Upgrade",
      color: "border-[#1a73e8]/50",
      desc: "Improve system independence with self-learning capabilities.",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-[#f6c90e]" />,
      title: "Scalability Enhancements",
      color: "border-[#f6c90e]/50",
      desc: "Expand modular architecture for enterprise-level deployment.",
    },
  ];

  return (
    <div className="relative min-h-screen p-12 font-[Inter] overflow-hidden 
    bg-gradient-to-br from-[#efeeee] via-[#b36f4a] to-[#1a0e0a] text-white">

    
      <motion.div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(255,216,145,0.8), rgba(179,111,74,0))",
          filter: "blur(45px)",
        }}
        animate={{ opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(255,196,120,0.75), rgba(179,111,74,0))",
          filter: "blur(45px)",
        }}
        animate={{ opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-extrabold text-center text-[#1a0e0a]"
      >
        Future Developments & Scalability
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center text-[#2d1c16] max-w-3xl mx-auto mt-4 mb-14 font-medium"
      >
        Next-phase enhancements that transform the system into a fully scalable,
        intelligent, and enterprise-ready platform.
      </motion.p>

    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border ${item.color}
            hover:shadow-[0_0_20px_#d09a6a] hover:scale-[1.03] transition-all`}
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold text-center text-[#1a0e0a] mb-2">
              {item.title}
            </h3>
            <p className="text-[#3b2a26] text-center">{item.desc}</p>
          </motion.div>
        ))}
      </div>

  
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mt-20 p-8 bg-white/80 backdrop-blur-xl rounded-2xl 
        shadow-xl border border-[#d09a6a]/50"
      >
        <h2 className="text-2xl font-bold text-[#1a0e0a] mb-4">Scalability Roadmap</h2>
        <ul className="space-y-3 text-[#3b2a26]">
          <li>• Multi-node distributed architecture</li>
          <li>• Integration with modern protocols (MQTT, LoRa, Modbus)</li>
          <li>• Nationwide hybrid cloud deployment</li>
          <li>• Plug-and-play modular expansions</li>
          <li>• Hardware-free AI upgrades</li>
        </ul>
      </motion.div>

      <motion.div
        className="max-w-5xl mx-auto mt-12 p-8 bg-white/80 backdrop-blur-xl rounded-2xl 
        shadow-xl border border-[#b36f4a]/50"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-bold text-[#1a0e0a] mb-4">
          Advanced Future Developments
        </h2>

        <p className="text-[#3b2a26] mb-6">
          Under Digital India, UIDAI, and ECI modernization initiatives, this upgraded
          Biometric EVM can integrate with national-scale secure systems.
        </p>

        <ul className="space-y-2 text-[#3b2a26]">
          <li><strong>AI:</strong> Spoof detection, turnout prediction.</li>
          <li><strong>Machine Learning:</strong> Fraud accuracy improvement.</li>
          <li><strong>Deep Learning:</strong> Multi-modal biometric recognition.</li>
          <li><strong>OpenCV:</strong> Liveness detection + anti-spoofing.</li>
          <li><strong>NLP:</strong> Multilingual voice assistance.</li>
          <li><strong>Blockchain:</strong> Immutable voting ledger.</li>
          <li><strong>IoT:</strong> GSM/GPS tamper alerts.</li>
          <li><strong>Cryptography:</strong> AES/RSA/SHA-256 multi-layer security.</li>
          <li><strong>AI Cybersecurity:</strong> Predictive threat blocking.</li>
          <li><strong>Cloud / Mobile Voting:</strong> Aadhaar-biometric remote voting.</li>
        </ul>
      </motion.div>

      <p className="text-center text-xs text-[#1a0e0a] mt-10">
        नोट: यह प्रोटोटाइप बिना चुनाव आयोग की लिखित अनुमति के आधिकारिक EVM पर लागू न करें।
      </p>
    </div>
  );
}
