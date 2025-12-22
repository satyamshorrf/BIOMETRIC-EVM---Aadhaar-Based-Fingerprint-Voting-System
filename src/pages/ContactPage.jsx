import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-[#120c07] text-white px-6 py-16">


      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Contact <span className="text-[#f7b89e]">Us</span>
      </motion.h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

       
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-[#1a0f0f] p-8 rounded-2xl shadow-[0_0_10px_#ff7a3e33] border border-[#ff7a3e33]"
        >
          <h2 className="text-2xl font-semibold mb-6">
            Get in <span className="text-[#f7b89e]">Touch</span>
          </h2>

          <p className="text-sm text-gray-300 mb-8">
            Have questions or need help? Reach out anytime — our team will respond within 24 hours.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Phone className="text-[#f7b89e]" size={24} />
              <p className="text-sm">+91 123 456 789</p>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-[#f7b89e]" size={24} />
              <p className="text-sm">support@example.in</p>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-[#f7b89e]" size={24} />
              <p className="text-sm">New Delhi, India</p>
            </div>
          </div>
        </motion.div>

  
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-[#1a0f0f] p-8 rounded-2xl shadow-[0_0_10px_#ff7a3e33] border border-[#ff7a3e33] grid grid-cols-1 gap-6"
        >
       
          <div className="flex flex-col">
            <label className="text-xs font-semibold mb-1">Full Name *</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your name"
              value={formData.fullName}
              onChange={handleChange}
              className="bg-[#1a120d] border border-[#3a2a23] rounded-full py-2 px-4 text-xs placeholder:text-[#5a4a42] focus:outline-none focus:ring-1 focus:ring-[#f7b89e]"
            />
          </div>

      
          <div className="flex flex-col">
            <label className="text-xs font-semibold mb-1">Email Address *</label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              className="bg-[#1a120d] border border-[#3a2a23] rounded-full py-2 px-4 text-xs placeholder:text-[#5a4a42] focus:outline-none focus:ring-1 focus:ring-[#f7b89e]"
            />
          </div>

        
          <div className="flex flex-col">
            <label className="text-xs font-semibold mb-1">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              placeholder="+91 12345 67890"
              value={formData.phone}
              onChange={handleChange}
              className="bg-[#1a120d] border border-[#3a2a23] rounded-full py-2 px-4 text-xs placeholder:text-[#5a4a42] focus:outline-none focus:ring-1 focus:ring-[#f7b89e]"
            />
          </div>

     
          <div className="flex flex-col">
            <label className="text-xs font-semibold mb-1">Message *</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              className="bg-[#1a120d] border border-[#3a2a23] rounded-lg py-2 px-4 text-xs placeholder:text-[#5a4a42] resize-none focus:outline-none focus:ring-1 focus:ring-[#f7b89e]"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="flex items-center justify-center gap-2 bg-[#f7b89e] text-black font-semibold rounded-full py-2 mt-2"
          >
            Send Message <Send size={16} />
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}
