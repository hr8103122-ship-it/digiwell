"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Faculty", href: "/faculty" },
  { label: "Results", href: "/results" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/40 bg-white/88 shadow-sm backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" aria-label="Digiwell home">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#1d6f42] text-lg font-black text-white shadow-lg shadow-emerald-900/20">
            D
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tight text-[#10231b]">Digiwell</span>
            <span className="mt-1 text-[11px] font-semibold uppercase text-[#5d7369]">Coaching Platform</span>
          </span>
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-semibold transition duration-200 hover:text-[#1d6f42] ${
                  isActive ? "text-[#1d6f42] font-bold" : "text-[#53685f]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTAs using Design System Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/login" passHref>
            <Button variant="ghost" size="default">
              Login
            </Button>
          </Link>
          <Link href="/demo-class" passHref>
            <Button variant="default" size="default" className="shadow-lg shadow-emerald-900/15">
              Book Demo
            </Button>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-md border border-[#d9e7df] text-[#10231b] lg:hidden hover:bg-[#f1f7f3] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1d6f42]"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Smooth AnimatePresence Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="border-t border-[#e4eee8] bg-white overflow-hidden lg:hidden shadow-xl"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-md px-3 py-3 text-sm font-semibold transition-colors hover:bg-[#f1f7f3] hover:text-[#1d6f42] ${
                      isActive ? "bg-[#f1f7f3] text-[#1d6f42] font-bold" : "text-[#53685f]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="mt-4 grid grid-cols-2 gap-3 pt-4 border-t border-[#e4eee8]">
                <Link href="/login" passHref onClick={() => setIsOpen(false)}>
                  <Button variant="outline" size="default" className="w-full">
                    Login
                  </Button>
                </Link>
                <Link href="/demo-class" passHref onClick={() => setIsOpen(false)}>
                  <Button variant="default" size="default" className="w-full">
                    Book Demo
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
