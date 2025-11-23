import { motion } from "framer-motion";
import {
  ShieldCheck,
  Fingerprint,
  Database,
  Server,
  Cpu,
  BellRing,
} from "lucide-react";

const features = [
  {
    icon: <Fingerprint className="text-[#fca34d] w-4 h-4" />,
    title: "Aadhaar-Based Biometric Verification",
    description:
      "Ensures One Person, One Vote through secure fingerprint authentication.",
  },
  {
    icon: <ShieldCheck className="text-[#fca34d] w-4 h-4" />,
    title: "High Security & Anti-Tampering",
    description:
      "Encrypted data flow with built-in tamper detection and instant alerts.",
  },
  {
    icon: <Database className="text-[#fca34d] w-4 h-4" />,
    title: "Secure PHP–MySQL Backend",
    description:
      "Real-time vote storage using server-side authentication and logs.",
  },
  {
    icon: <Cpu className="text-[#fca34d] w-4 h-4" />,
    title: "Smart Hardware Integration",
    description:
      "Arduino UNO R4 WiFi + R307 Optical Sensor ensures accurate verification.",
  },
  {
    icon: <Server className="text-[#fca34d] w-4 h-4" />,
    title: "Cloud & Mobile Ready",
    description:
      "Scalable architecture supporting cloud, IoT, and mobile-based extensions.",
  },
  {
    icon: <BellRing className="text-[#fca34d] w-4 h-4" />,
    title: "Real-Time Monitoring",
    description:
      "Admin dashboard shows verified voters, alerts, and voting logs instantly.",
  },
];

export default function WhyChooseEVM() {
  return (
    <div className="bg-[#0a0a0a] text-[#f9f4f4] min-h-screen flex flex-col items-center px-4 py-10">
      <div className="max-w-6xl w-full">
        <p className="text-[10px] text-[#fca34d] font-semibold text-center mb-2 tracking-widest">
          - WHY THIS SYSTEM? -
        </p>

        <h1 className="text-3xl sm:text-4xl font-semibold text-center mb-2">
          Secure, Scalable &  
          <span className="text-[#fca34d]"> Future-Ready Voting System</span>
        </h1>

        <p className="text-xs text-center text-[#c9c9c9] mb-10">
          Designed to support Digital India, ECI modernization, and cyber-aware democracy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="flex border border-[#3f1f0f] rounded-lg p-4 gap-4 items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#3f1f0f] flex items-center justify-center">
                {feature.icon}
              </div>

              <div>
                <h3 className="text-xs font-bold mb-1">{feature.title}</h3>
                <p className="text-[9px] leading-[12px] text-[#c9c9c9]">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
