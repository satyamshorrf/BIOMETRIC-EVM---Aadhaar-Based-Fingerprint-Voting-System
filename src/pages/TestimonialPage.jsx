import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, StarHalf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Amit Verma",
    location: "Delhi, India",
    message:
      "Transparency is the backbone of democracy. A secure digital audit trail can help citizens trust the election process even more.",
    image:
      "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Priya Nair",
    location: "Kerala, India",
    message:
      "India’s voting system is strong, but adding publicly verifiable audit systems would make it future-proof against manipulation.",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    name: "Rahul Bansal",
    location: "Mumbai, India",
    message:
      "Reducing human intervention in vote handling can drastically reduce corruption risks. Technology should ensure fairness.",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    name: "Nisha Rao",
    location: "Bangalore, India",
    message:
      "Digital transparency and tamper-proof logging can rebuild public confidence where people feel uncertain about political processes.",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
  },
  {
    name: "Sanjay Kulkarni",
    location: "Pune, India",
    message:
      "A future-ready, secure election system can reduce doubts, eliminate misinformation, and remove opportunities for corrupt practices.",
    image: "https://randomuser.me/api/portraits/men/72.jpg",
  },
];


const variants = {
  enter: (dir) => ({ x: dir > 0 ? -1000 : 1000, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir < 0 ? -1000 : 1000, opacity: 0 }),
};

const TestimonialPage = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const changeTestimonial = (dir) => {
    setDirection(dir);
    setIndex((prev) =>
      dir === 0
        ? prev === testimonials.length - 1
          ? 0
          : prev + 1
        : prev === 0
        ? testimonials.length - 1
        : prev - 1
    );
  };

  const { name, location, message, image } = testimonials[index];

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center pt-20 bg-gradient-to-r from-[#f9d9c3] via-[#f7b07a] to-[#f7b07a] font-[Poppins] overflow-hidden">
      <motion.div
        className="hidden lg:block absolute -bottom-48 -left-48 w-[450px] h-[550px] rounded-tr-full border border-black"
        style={{
          background:
            "radial-gradient(circle, #fff0cc 0%, #ffb86c 40%, #d18f6a 80%)",
          filter: "drop-shadow(0 0 10px #ffb86c)",
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="hidden lg:block absolute -bottom-48 -right-48 w-[450px] h-[550px] rounded-tl-full border border-black"
        style={{
          background:
            "radial-gradient(circle, #fff0cc 0%, #ffb86c 40%, #d18f6a 80%)",
          filter: "drop-shadow(0 0 10px #ffb86c)",
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <p className="text-sm font-semibold tracking-widest mb-2">
          - TESTIMONIAL -
        </p>
        <h2 className="text-5xl font-semibold">Peoples Observation</h2>
      </motion.div>


<div className="w-full max-w-4xl px-4 mx-auto">
  <motion.div
    key={index}
    variants={variants}
    initial="enter"
    animate="center"
    exit="exit"
    transition={{
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    }}
    className="w-full"
  >
    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
      <img
        src={image}
        alt={name}
        className="rounded-full w-14 h-14 object-cover"
      />
      <div>
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-[10px] text-gray-600">{location}</p>
        <p className="text-[12px] leading-tight mt-2 mb-3">"{message}"</p>
        <div className="flex justify-center md:justify-start space-x-1">
          {[...Array(4)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-green-500" />
          ))}
          <StarHalf className="w-3 h-3 fill-red-500" />
        </div>
      </div>
    </div>
  </motion.div>
</div>



      <button
        onClick={() => changeTestimonial(1)}
        className="absolute left-[calc(50%-180px)] top-1/2 -translate-y-1/2 bg-white w-7 h-7 rounded-full flex items-center justify-center shadow"
      >
        <ChevronLeft className="w-3 h-3" />
      </button>
      <button
        onClick={() => changeTestimonial(0)}
        className="absolute right-[calc(50%-180px)] top-1/2 -translate-y-1/2 bg-white w-7 h-7 rounded-full flex items-center justify-center shadow"
      >
        <ChevronRight className="w-3 h-3" />
      </button>
    </div>
  );
};

export default TestimonialPage;
