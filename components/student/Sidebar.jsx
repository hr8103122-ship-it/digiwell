"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  Calendar,
  FileText,
  Award,
  CreditCard,
  Bell,
  ShieldCheck,
  User,
  Settings,
  LogOut,
  X
} from "lucide-react";
import { motion } from "framer-motion";

export const menuItems = [
  { label: "Dashboard", href: "/student", icon: LayoutDashboard },
  { label: "My Courses", href: "/student/courses", icon: BookOpen },
  { label: "Attendance", href: "/student/attendance", icon: Calendar },
  { label: "Assignments", href: "/student/assignments", icon: FileText },
  { label: "Results", href: "/student/results", icon: Award },
  { label: "Fees", href: "/student/fees", icon: CreditCard },
  { label: "Notices", href: "/student/notices", icon: Bell },
  { label: "Certificates", href: "/student/certificates", icon: ShieldCheck },
  { label: "Profile", href: "/student/profile", icon: User },
  { label: "Settings", href: "/student/settings", icon: Settings },
];

export default function Sidebar({ isOpen, onClose }) {
  const pathname = usePathname();

  const handleLogout = () => {
    // Navigate back to home on logout
    window.location.href = "/";
  };

  const SidebarContent = () => (
    <div className="flex h-full flex-col justify-between bg-white/95 border-r border-[#e2ece6] py-6 px-4 backdrop-blur-md dark:bg-[#10231b]/95 dark:border-[#1a382b]">
      <div>
        {/* Logo Section */}
        <div className="flex items-center justify-between px-2 mb-8">
          <Link href="/student" className="flex items-center gap-3" aria-label="Digiwell home">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#1d6f42] text-lg font-black text-white shadow-lg shadow-emerald-900/20">
              D
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-xl font-black tracking-tight text-[#10231b] dark:text-white">Digiwell</span>
              <span className="mt-1 text-[11px] font-semibold uppercase text-[#5d7369] dark:text-[#7a8d84]">
                Student Portal
              </span>
            </span>
          </Link>
          
          {/* Close Button for Mobile */}
          {onClose && (
            <button
              onClick={onClose}
              className="lg:hidden p-1.5 rounded-md text-[#53685f] hover:bg-[#f1f7f3] dark:text-white/80 dark:hover:bg-white/10"
              aria-label="Close sidebar"
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* Navigation Items */}
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            // Exact match for dashboard home, startswith for subroutes
            const isActive =
              item.href === "/student"
                ? pathname === "/student"
                : pathname.startsWith(item.href);

            return (
              <Link key={item.label} href={item.href} onClick={onClose}>
                <div
                  className={`group relative flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 select-none cursor-pointer ${
                    isActive
                      ? "bg-[#1d6f42] text-white shadow-md shadow-emerald-900/10"
                      : "text-[#53685f] hover:bg-[#f1f7f3] hover:text-[#1d6f42] dark:text-[#c9ddd1] dark:hover:bg-white/5 dark:hover:text-white"
                  }`}
                >
                  <Icon size={18} className="shrink-0 transition-transform duration-200 group-hover:scale-110" />
                  <span>{item.label}</span>
                  
                  {/* Small dot for active item in desktop */}
                  {isActive && (
                    <motion.div
                      layoutId="sidebarActiveIndicator"
                      className="absolute right-3 h-1.5 w-1.5 rounded-full bg-white"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </div>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Logout Action */}
      <div className="pt-4 border-t border-[#e2ece6] dark:border-[#1a382b] px-2">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-bold text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/20 transition-all duration-200"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar (Permanent) */}
      <aside className="hidden lg:block fixed inset-y-0 left-0 z-40 w-64 shadow-sm">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar (Slide over Drawer) */}
      <div className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        {/* Backdrop overlay */}
        <div
          className="absolute inset-0 bg-[#10231b]/30 backdrop-blur-sm"
          onClick={onClose}
        />
        
        {/* Drawer content */}
        <div className={`absolute top-0 bottom-0 left-0 w-64 shadow-xl transform transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <SidebarContent />
        </div>
      </div>
    </>
  );
}
