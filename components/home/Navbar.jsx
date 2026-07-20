"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Courses", href: "#courses" },
  { label: "Faculty", href: "#faculty" },
  { label: "Results", href: "#stats" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/40 bg-white/88 shadow-sm backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Digiwell home">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#1d6f42] text-lg font-black text-white shadow-lg shadow-emerald-900/20">
            D
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tight text-[#10231b]">Digiwell</span>
            <span className="mt-1 text-[11px] font-semibold uppercase text-[#5d7369]">Coaching Platform</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-semibold text-[#53685f] transition hover:text-[#1d6f42]">
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/login" className="rounded-md px-4 py-2 text-sm font-bold text-[#1d6f42] transition hover:bg-[#e8f4ed]">
            Login
          </Link>
          <Link href="/demo-class" className="rounded-md bg-[#1d6f42] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-900/15 transition hover:bg-[#155c36]">
            Book Demo
          </Link>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-md border border-[#d9e7df] text-[#10231b] lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-[#e4eee8] bg-white px-4 py-4 shadow-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-md px-3 py-3 text-sm font-semibold text-[#53685f] hover:bg-[#f1f7f3]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-3">
              <Link href="/login" className="rounded-md border border-[#cfe0d6] px-4 py-3 text-center text-sm font-bold text-[#1d6f42]">
                Login
              </Link>
              <Link href="/demo-class" className="rounded-md bg-[#1d6f42] px-4 py-3 text-center text-sm font-bold text-white">
                Book Demo
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
