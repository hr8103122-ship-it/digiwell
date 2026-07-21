"use client";

import { motion } from "framer-motion";

export default function AuthLayout({ children, title, subtitle }) {
  return (
    <div className="min-h-screen bg-[#f7faf8] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-white/70 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-xl shadow-emerald-900/5">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-[#10231b]">{title}</h2>
            {subtitle && <p className="mt-2 text-[#53685f]">{subtitle}</p>}
          </div>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
