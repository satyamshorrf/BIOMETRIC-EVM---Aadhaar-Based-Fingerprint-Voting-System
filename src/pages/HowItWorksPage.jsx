import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Install',
    highlight: 'the Smart Device',
    description:
      'A trained technician installs the compact IoT module behind your existing switchboard. No wiring changes, no wall damage — fully compatible with Indian homes.',
    number: '1️⃣',
  },
  {
    title: 'Connect',
    highlight: 'with the App',
    description:
      'Open our mobile or web app → create your account → pair the device instantly using WiFi/Bluetooth. Setup takes less than 2 minutes.',
    number: '2️⃣',
  },
  {
    title: 'Control',
    highlight: 'From Anywhere',
    description:
      'Operate your appliances through the app, voice assistants, or your regular switches. Works online, offline, and even during low-network conditions.',
    number: '3️⃣',
  },
];

export default function HowItWorks() {
  return (
    <div className="relative overflow-hidden bg-[#0a0401] py-20 px-6">
      <div className="max-w-7xl mx-auto relative z-10">
        <p className="text-[10px] text-[#ff7a2a] font-semibold text-center tracking-widest mb-3">
          - SETUP PROCESS -
        </p>

        <h2 className="text-center text-white text-3xl sm:text-4xl font-semibold mb-12">
          How Your <span className="text-[#ff7a2a]">Smart Home</span> Comes Alive
        </h2>

        <div className="flex flex-col sm:flex-row justify-center gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#1a120d] rounded-xl p-6 relative flex-1 min-w-[280px]"
            >
              <span className="absolute top-3 left-3 w-3 h-3 rounded-full bg-[#3f2a1f]" />

              <h3 className="text-white font-semibold mb-2 text-sm">
                {step.title} <span className="text-[#ff7a2a]">{step.highlight}</span>
              </h3>

              <p className="text-[10px] text-[#d9d9d9] leading-tight">
                {step.description}
              </p>

              <span className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-[#3f2a1f] text-[#ff7a2a] text-xs flex items-center justify-center font-semibold select-none">
                {step.number}
              </span>

              <span className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-[#3f2a1f]" />
            </motion.div>
          ))}
        </div>
      </div>

      <img
        src="https://storage.googleapis.com/a1aa/image/1d9f8928-5ffe-4634-9c81-647ca5d4f4fa.jpg"
        alt="Glowing orange light effect"
        className="absolute bottom-0 right-0 w-48 sm:w-72 opacity-90 pointer-events-none select-none"
      />
    </div>
  );
}
