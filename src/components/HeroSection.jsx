import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="bg-[#FFF3F3] py-20 px-6">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-[90px] font-bold text-[#060403] mb-6 leading-tight">
          Innovate, Build, and<br />
          Scale in the Web3 Era.
        </h1>
        <p className="text-[24px] text-[#15100C] mb-8">
          Experience the next evolution of Web3 with cutting-edge blockchain
          technology, built for speed, security, and scalability
        </p>
        <button className="bg-[#FB7D5D] text-white px-8 py-3 rounded-md text-lg hover:bg-[#e06d50] transition-colors">
          Get Started
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;