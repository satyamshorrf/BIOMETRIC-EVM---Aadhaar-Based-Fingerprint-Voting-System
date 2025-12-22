import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react"; // Lucide icon

const GALLERY_ITEMS = [
  { id: 1, type: "jury", src: "/imgs/1.jpeg" },
  { id: 2, type: "jury", src: "/imgs/2.jpeg" },
  { id: 3, type: "jury", src: "/imgs/3.jpeg" },
  { id: 4, type: "jury", src: "/imgs/4.jpeg" },
  { id: 5, type: "jury", src: "/imgs/5.jpeg" },
  { id: 6, type: "jury", src: "/imgs/6.jpeg" },
  { id: 7, type: "jury", src: "/imgs/7.jpeg" },
  { id: 8, type: "jury", src: "/imgs/8.jpeg" },
  { id: 9, type: "jury", src: "/imgs/9.jpeg" },
  { id: 10, type: "jury", src: "/imgs/10.jpeg" },
  { id: 11, type: "jury", src: "/imgs/11.jpeg" },
  { id: 12, type: "jury", src: "/imgs/12.jpeg" },

  { id: 14, type: "prize", src: "/imgs/prize.jpeg" },
  { id: 15, type: "prize", src: "/imgs/prize2.jpeg" },
  { id: 16, type: "prize", src: "/imgs/prize3.jpeg" },
  { id: 17, type: "prize", src: "/imgs/prize4.jpeg" },
  { id: 18, type: "prize", src: "/imgs/prize5.jpeg" },
  { id: 19, type: "prize", src: "/imgs/prize6.jpeg" },
  { id: 20, type: "prize", src: "/imgs/prize7.jpeg" },
  { id: 21, type: "prize", src: "/imgs/prize8.jpeg" },

  { id: 22, type: "traval", src: "/imgs/t6.jpeg" },

  { id: 23, type: "team", src: "/imgs/t1.jpeg" },
  { id: 24, type: "team", src: "/imgs/t2.jpeg" },
  { id: 25, type: "team", src: "/imgs/t3.jpeg" },
  { id: 26, type: "team", src: "/imgs/t4.jpeg" },
  { id: 27, type: "team", src: "/imgs/t5.jpeg" },
  { id: 28, type: "team", src: "/imgs/t6.jpeg" },

  { id: 29, type: "jury", src: "/video/tt1.mp4" },
  { id: 30, type: "jury", src: "/video/tt2.mp4" },
  { id: 31, type: "jury", src: "/video/tt3.mp4" },
  { id: 32, type: "jury", src: "/video/tt4.mp4" },
  { id: 33, type: "jury", src: "/video/tt5.mp4" },
  { id: 34, type: "jury", src: "/video/tt6.mp4" },
  { id: 35, type: "jury", src: "/video/tt7.mp4" },
  { id: 36, type: "jury", src: "/video/tt8.mp4" },
  { id: 37, type: "jury", src: "/video/tt9.mp4" },
  { id: 38, type: "jury", src: "/video/tt10.mp4" },
  { id: 39, type: "jury", src: "/video/tt11.mp4" },
  { id: 40, type: "jury", src: "/video/tt12.mp4" },
  { id: 41, type: "jury", src: "/video/tt13.mp4" },
  { id: 42, type: "jury", src: "/video/tt14.mp4" },
  { id: 43, type: "jury", src: "/video/tt15.mp4" },
  { id: 44, type: "jury", src: "/video/tt16.mp4" },
  { id: 45, type: "jury", src: "/video/tt17.mp4" },

  { id: 46, type: "group", src: "/imgs/trbr1.jpeg" },
  { id: 47, type: "group", src: "/imgs/trbr2.jpeg" },
  { id: 48, type: "group", src: "/imgs/trbr3.jpeg" },
  { id: 49, type: "group", src: "/imgs/trbr4.jpeg" },
  { id: 50, type: "group", src: "/imgs/trbr5.jpeg" },
  { id: 51, type: "group", src: "/imgs/trbr6.jpeg" },
  { id: 52, type: "group", src: "/imgs/trbr7.jpeg" },
  { id: 53, type: "group", src: "/imgs/trbr8.jpeg" },
  { id: 54, type: "group", src: "/imgs/trbr9.jpeg" },
  { id: 55, type: "group", src: "/imgs/trbr10.jpeg" },


  { id: 56, type: "traval", src: "/video/tr1.mp4" },
  { id: 57, type: "traval", src: "/video/tr2.mp4" },
  { id: 58, type: "traval", src: "/video/tr3.mp4" },
  { id: 59, type: "traval", src: "/video/tr4.mp4" },
  { id: 60, type: "traval", src: "/video/tr5.mp4" },
  { id: 61, type: "traval", src: "/video/tr6.mp4" },
  { id: 62, type: "traval", src: "/video/tr7.mp4" },
  { id: 63, type: "traval", src: "/video/tr8.mp4" },
  { id: 64, type: "traval", src: "/video/tr9.mp4" },
  { id: 65, type: "traval", src: "/video/tr10.mp4" },
  { id: 66, type: "traval", src: "/video/tr11.mp4" },
  { id: 67, type: "traval", src: "/video/tr12.mp4" },
  { id: 68, type: "traval", src: "/video/tr13.mp4" },
  { id: 69, type: "traval", src: "/video/tr14.mp4" },
  { id: 70, type: "traval", src: "/video/tr15.mp4" },
  { id: 71, type: "traval", src: "/video/tr16.mp4" },
  { id: 72, type: "traval", src: "/video/tr17.mp4" },
  { id: 73, type: "traval", src: "/video/tr18.mp4" },
  { id: 74, type: "traval", src: "/video/tr19.mp4" },
  { id: 75, type: "traval", src: "/video/tr20.mp4" },
  { id: 76, type: "traval", src: "/video/tr21.mp4" },
  { id: 77, type: "traval", src: "/video/tr22.mp4" },
  { id: 78, type: "traval", src: "/video/tr23.mp4" },
  { id: 79, type: "traval", src: "/video/tr24.mp4" },
  { id: 80, type: "traval", src: "/video/tr25.mp4" },
  { id: 81, type: "traval", src: "/video/tr26.mp4" },
  { id: 82, type: "traval", src: "/video/tr27.mp4" },
  { id: 83, type: "traval", src: "/video/tr28.mp4" },
  { id: 84, type: "traval", src: "/video/tr29.mp4" },
  { id: 85, type: "traval", src: "/video/tr30.mp4" },
  { id: 86, type: "traval", src: "/video/tr31.mp4" },
  { id: 87, type: "traval", src: "/video/tr32.mp4" },
  { id: 88, type: "traval", src: "/video/tr33.mp4" },
  { id: 89, type: "traval", src: "/video/tr34.mp4" },
  { id: 90, type: "traval", src: "/video/tr35.mp4" },

  { id: 97, type: "traval", src: "/video/jj.mp4" },

  { id: 98, type: "group", src: "/imgs/g1.jpeg" },
  { id: 99, type: "group", src: "/imgs/g2.jpeg" },
  { id: 100, type: "group", src: "/imgs/g3.jpeg" },
  { id: 101, type: "group", src: "/imgs/g4.jpeg" },
  { id: 102, type: "group", src: "/imgs/g5.jpeg" },
  { id: 103, type: "group", src: "/imgs/g6.jpeg" },
  { id: 104, type: "group", src: "/imgs/g7.jpeg" },
  { id: 105, type: "group", src: "/imgs/g8.jpeg" },
  { id: 106, type: "group", src: "/imgs/g9.jpeg" },

  { id: 107, type: "video", src: "/imgs/221.mp4" },






    { id: 107, type: "jury", src: "/video/tt1.mp4" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");
  const [active, setActive] = useState(null);

  const filtered =
    filter === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.type === filter);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#efeeee] via-[#b36f4a] to-[#1a0e0a] py-20 px-4 sm:px-6 md:px-12 overflow-hidden">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-[#1a0e0a] mb-12 drop-shadow-xl"
      >
        Media <span className="text-[#fff]">Gallery</span>
      </motion.h1>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-14 cursor-pointer">
        {[
          "all",
          "image",
          "video",
          "jury",
          "prize",
          "group",
          "traval",
          "team",
        ].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 sm:px-6 py-2 rounded-full font-semibold text-sm border transition-all
              ${
                filter === type
                  ? "bg-[#1a0e0a] text-white"
                  : "bg-white/70 text-[#1a0e0a] border-[#b36f4a]"
              }`}
          >
            {type.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
      >
        {filtered.map((item) => (
          <motion.div
            layout
            key={item.id}
            whileHover={{ scale: 1.05 }}
            onClick={() => setActive(item)}
            className="cursor-pointer bg-white/80 backdrop-blur-xl
                       rounded-2xl overflow-hidden shadow-2xl
                       border border-[#b36f4a]/60 hover:shadow-[0_0_25px_#d09a6a] transition"
          >
            {item.src.endsWith(".mp4") ? (
              <video
                src={item.src}
                muted
                className="w-full h-56 object-cover"
              />
            ) : (
              <img src={item.src} alt="" className="w-full h-56 object-cover" />
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Modal Preview */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full p-4 sm:p-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition"
              >
                <X size={24} />
              </button>

              {active.src.endsWith(".mp4") ? (
                <video
                  src={active.src}
                  controls
                  autoPlay
                  className="w-full rounded-2xl shadow-2xl"
                />
              ) : (
                <img
                  src={active.src}
                  className="w-full rounded-2xl shadow-2xl"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
