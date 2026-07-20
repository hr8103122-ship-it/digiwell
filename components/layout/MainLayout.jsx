"use client";

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7faf8] text-[#10231b]">
      {/* Global Header Navigation */}
      <Navbar />

      {/* Primary Page Canvas (offsets fixed header height) */}
      <main className="flex-grow pt-16">
        {children}
      </main>

      {/* Global Brand Footer */}
      <Footer />
    </div>
  );
}
