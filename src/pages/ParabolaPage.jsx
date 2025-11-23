import { motion } from "framer-motion";

const ParabolaPage = () => {
  return (
    <div className="relative bg-black text-white h-[100vh] overflow-hidden">


    
      <motion.div
        className="absolute left-1/2 top-1/2 w-[300px] h-[300px] rounded-full border-2 border-white shadow-2xl"
        style={{
          backgroundImage: `url("parabola.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "drop-shadow(0 0 20px white)",
          transformOrigin: "center center",
        }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default ParabolaPage;
