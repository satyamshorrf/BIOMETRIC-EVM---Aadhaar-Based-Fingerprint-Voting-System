import React from "react";
import { motion } from "framer-motion";

const articles = [
  {
    img: "https://pxhere.com/en/photo/747227/download?filename=747227.jpg",
    tag: "Voting",
    date: "Mar 23, 2025",
    title: "How Corruption Affects Multi-Booth Voting System in India",
  },
  {
    img: "https://cdn.pixabay.com/photo/2017/01/31/22/33/election-2028656_1280.jpg",
    tag: "Election Security",
    date: "Mar 22, 2025",
    title: "ECI Rules vs Ground Reality: Are Multi-Votes Possible?",
  },
  {
    img: "https://cdn.pixabay.com/photo/2016/03/09/09/30/ballot-1240740_1280.jpg",
    tag: "Democracy",
    date: "Mar 21, 2025",
    title: "Why Transparent Booth Management Is Needed in India",
  },
];

export default function BlogPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-black text-white">
      <div className="text-center mb-12">
        <p className="text-xs text-orange-600 font-semibold tracking-widest mb-2">
          - BLOG -
        </p>
        <h2 className="text-3xl font-semibold">
          Latest <span className="text-orange-400">Election News</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {articles.map((item, index) => (
          <motion.article
            key={index}
            className="space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }} // ✅ FIXED
          >
            <img
              src={item.img}
              alt={item.title}
              className="rounded-lg w-full h-48 object-cover"
            />

            <div className="flex items-center space-x-2 text-xs text-orange-400 font-semibold">
              <span>{item.tag}</span>
              <span>•</span>
              <span className="text-gray-300">{item.date}</span>
            </div>

            <h3 className="text-sm font-semibold leading-snug">{item.title}</h3>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
