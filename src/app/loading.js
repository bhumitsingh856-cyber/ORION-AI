 
"use client";
import { motion } from "framer-motion";

export default function GlobalLoading() {
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] flex items-center justify-center">
      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Logo with simple spin */}
        <div className="relative">
          <motion.div
            className="w-20 h-20 border-4 border-gray-700 border-t-blue-500 rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">O</span>
          </div>
        </div>

        {/* Simple text */}
        <p className="text-gray-400 text-sm">Loading...</p>
      </motion.div>
    </div>
  );
}