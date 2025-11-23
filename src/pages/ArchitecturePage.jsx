import { motion } from "framer-motion";
import { Layers, Network, Cpu } from "lucide-react";

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-[#120c07] text-white p-8 font-[Inter]">
      

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-[#ff9966] to-[#ff5e62] bg-clip-text text-transparent"
      >
        System Architecture
      </motion.h1>

  
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-gray-300 max-w-3xl mx-auto text-center mb-12"
      >
        This architecture explains how data flows securely through each layer —
        from device-level inputs to encrypted communication, backend servers, and
        final results processing.
      </motion.p>

     
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#1a0f0d] p-6 rounded-2xl border border-[#ff7a3e55] shadow-[0_0_12px_#ff7a3e33]"
        >
          <div className="flex items-center gap-3 mb-4">
            <Cpu className="w-8 h-8 text-[#ff7a3e]" />
            <h2 className="text-xl font-semibold text-[#ffb899]">Hardware Layer</h2>
          </div>
          <ul className="text-gray-300 space-y-2">
            <li>• Microcontroller (Arduino / ESP)</li>
            <li>• Biometric / RFID Sensor</li>
            <li>• LCD/Touch Display</li>
            <li>• Power & Signal Control</li>
          </ul>
        </motion.div>

     
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#071412] p-6 rounded-2xl border border-[#2affc455] shadow-[0_0_12px_#2affc433]"
        >
          <div className="flex items-center gap-3 mb-4">
            <Network className="w-8 h-8 text-[#2affc4]" />
            <h2 className="text-xl font-semibold text-[#67ffe0]">Communication Layer</h2>
          </div>
          <ul className="text-gray-300 space-y-2">
            <li>• GSM / WiFi / IoT Communication</li>
            <li>• Encrypted Transfer (AES / RSA)</li>
            <li>• RESTful API Requests</li>
            <li>• Secure Sync to Server</li>
          </ul>
        </motion.div>

    
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-[#130d17] p-6 rounded-2xl border border-[#b06fff55] shadow-[0_0_12px_#b06fff44]"
        >
          <div className="flex items-center gap-3 mb-4">
            <Layers className="w-8 h-8 text-[#b06fff]" />
            <h2 className="text-xl font-semibold text-[#d8b6ff]">
              Server & Database Layer
            </h2>
          </div>
          <ul className="text-gray-300 space-y-2">
            <li>• Node.js / PHP Backend</li>
            <li>• MySQL / Firebase DB</li>
            <li>• Identity Verification Engine</li>
            <li>• Vote Logs & Secure Storage</li>
          </ul>
        </motion.div>
      </div>


      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mt-16 bg-[#1c1510] p-8 rounded-2xl border border-[#ff7a3e33] shadow-[0_0_15px_#ff7a3e22]"
      >
        <h3 className="text-2xl font-semibold mb-4 text-center text-[#f7b89e]">
          End-to-End Data Flow
        </h3>

        <div className="text-gray-300 space-y-3 text-center">
          <p className="text-sm tracking-wide">
            <span className="text-[#ff7a3e] font-semibold">Hardware Input</span> →
            <span className="text-[#2affc4] font-semibold"> Identification</span> →
            <span className="text-[#2affc4] font-semibold"> Verification</span> →
            <span className="text-[#b06fff] font-semibold"> Server API</span> →
            <span className="text-[#b06fff] font-semibold"> Database</span> →
            <span className="text-[#f7b89e] font-semibold"> Results Dashboard</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
