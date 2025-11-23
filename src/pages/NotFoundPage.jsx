import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center px-4">
      <motion.h1
        className="text-[160px] font-extrabold text-transparent bg-gradient-to-b from-gray-600 to-black bg-clip-text select-none leading-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.h1>
      <motion.p
        className="text-white text-lg mt-6 max-w-md text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Oops! Something is not right. Let’s get back on track.
      </motion.p>
      <motion.button
        className="mt-8 bg-white text-black font-bold rounded-full px-8 py-3 hover:bg-gray-200 transition"
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        onClick={() => window.location.href = '/'} // Redirect to home page
      >
        <ArrowRight className="inline-block mr-2 text-black" />
        Back To Home
      </motion.button>
    </div>
  );
};

export default NotFoundPage;
