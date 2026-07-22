"use client";

import React, { useState } from "react";
import Sidebar from "@/components/student/Sidebar";
import Header from "@/components/student/Header";
import { motion, AnimatePresence } from "framer-motion";

export default function StudentLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7faf8] text-[#53685f] dark:bg-[#10231b] dark:text-[#c9ddd1]">
      {/* Sidebar Navigation */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content Area */}
      <div className="flex flex-col min-h-screen lg:pl-64">
        {/* Top Header */}
        <Header onMenuToggle={() => setSidebarOpen(true)} />

        {/* Page Canvas */}
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="mx-auto max-w-7xl"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
