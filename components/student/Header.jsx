"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, Search, Bell, ChevronDown, Sparkles, BookOpen } from "lucide-react";
import { studentMockData } from "@/data/studentMockData";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Header({ onMenuToggle }) {
  const pathname = usePathname();
  const { name, course, batch } = studentMockData.profile;
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  // Get current section name for the header title
  const getPageTitle = () => {
    if (pathname === "/student") return "Dashboard";
    if (pathname.includes("/courses")) return "My Courses";
    if (pathname.includes("/attendance")) return "Attendance Tracker";
    if (pathname.includes("/assignments")) return "Assignments";
    if (pathname.includes("/results")) return "Performance & Results";
    if (pathname.includes("/fees")) return "Fee Records";
    if (pathname.includes("/notices")) return "Notice Board";
    if (pathname.includes("/certificates")) return "Certificates";
    if (pathname.includes("/profile")) return "My Profile";
    if (pathname.includes("/settings")) return "Account Settings";
    return "Student Portal";
  };

  const unreadNoticesCount = studentMockData.notices.filter((n) => n.isNew).length;

  return (
    <header className="sticky top-0 z-30 flex h-20 w-full items-center justify-between border-b border-[#e2ece6] bg-white/80 px-6 backdrop-blur-md dark:border-[#1a382b] dark:bg-[#10231b]/80">
      
      {/* Left side: Mobile menu toggle & Title */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuToggle}
          className="p-2 rounded-xl border border-[#d9e7df] text-[#10231b] lg:hidden hover:bg-[#f1f7f3] dark:border-[#1a382b] dark:text-white dark:hover:bg-white/5 transition-all"
          aria-label="Open sidebar"
        >
          <Menu size={20} />
        </button>
        
        <div>
          <h1 className="text-xl font-black tracking-tight text-[#10231b] dark:text-white sm:text-2xl">
            {getPageTitle()}
          </h1>
          <p className="hidden text-xs font-bold text-[#5d7369] dark:text-[#7a8d84] sm:block">
            Welcome back, <span className="text-[#1d6f42] dark:text-emerald-400">{name}</span> | {course} ({batch})
          </p>
        </div>
      </div>

      {/* Right side: Actions & Profile */}
      <div className="flex items-center gap-4">
        
        {/* Search bar - Desktop */}
        <div className="relative hidden max-w-xs md:block">
          <Search size={18} className="absolute top-1/2 left-3.5 -translate-y-1/2 text-[#7a8d84]" />
          <input
            type="text"
            placeholder="Search classes, materials..."
            className="w-64 rounded-xl border border-[#c9ddd1] bg-white py-2.5 pr-4 pl-11 text-sm text-[#10231b] outline-none transition-all focus:border-[#1d6f42] focus:ring-2 focus:ring-[#1d6f42]/10 dark:border-[#1a382b] dark:bg-[#10231b] dark:text-white dark:focus:border-emerald-500"
          />
        </div>

        {/* Notices/Notification Bell */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2.5 rounded-xl border border-[#e2ece6] text-[#53685f] hover:bg-[#f1f7f3] dark:border-[#1a382b] dark:text-[#c9ddd1] dark:hover:bg-white/5 transition-all"
            aria-label="View notifications"
          >
            <Bell size={20} className="transition-transform active:scale-95" />
            {unreadNoticesCount > 0 && (
              <span className="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-black text-white ring-2 ring-white">
                {unreadNoticesCount}
              </span>
            )}
          </button>

          {/* Quick Notifications Dropdown */}
          <AnimatePresence>
            {showNotifications && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setShowNotifications(false)} />
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 z-20 w-80 rounded-2xl border border-[#e2ece6] bg-white p-4 shadow-xl dark:border-[#1a382b] dark:bg-[#10231b]"
                >
                  <div className="flex items-center justify-between border-b border-[#e2ece6] pb-2 mb-2 dark:border-[#1a382b]">
                    <span className="text-sm font-black text-[#10231b] dark:text-white">Recent Notices</span>
                    <Link
                      href="/student/notices"
                      onClick={() => setShowNotifications(false)}
                      className="text-xs font-bold text-[#1d6f42] hover:underline dark:text-emerald-400"
                    >
                      View All
                    </Link>
                  </div>
                  <div className="space-y-2.5 max-h-60 overflow-y-auto">
                    {studentMockData.notices.slice(0, 2).map((notice) => (
                      <div
                        key={notice.id}
                        className="p-2.5 rounded-xl bg-[#f7faf8] hover:bg-[#f1f7f3] dark:bg-white/5 dark:hover:bg-white/10 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-black text-[#10231b] dark:text-white truncate max-w-[150px]">
                            {notice.title}
                          </span>
                          {notice.isNew && (
                            <span className="rounded bg-[#1d6f42]/10 px-1.5 py-0.5 text-[9px] font-black text-[#1d6f42] dark:bg-emerald-500/20 dark:text-emerald-300">
                              New
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-[#53685f] dark:text-[#c9ddd1] line-clamp-2">
                          {notice.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Profile Drodown toggle */}
        <div className="relative">
          <button
            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
            className="flex items-center gap-2 p-1.5 rounded-xl border border-[#e2ece6] hover:bg-[#f1f7f3] dark:border-[#1a382b] dark:hover:bg-white/5 transition-all"
          >
            {/* Fallback Text Avatar */}
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#1d6f42] text-sm font-black text-white shadow shadow-emerald-950/20">
              RS
            </div>
            <span className="hidden text-sm font-bold text-[#10231b] dark:text-white md:block">
              {name.split(" ")[0]}
            </span>
            <ChevronDown size={14} className={`text-[#7a8d84] transition-transform ${showProfileDropdown ? "rotate-180" : ""}`} />
          </button>

          {/* Profile Dropdown Menu */}
          <AnimatePresence>
            {showProfileDropdown && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setShowProfileDropdown(false)} />
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 z-20 w-56 rounded-2xl border border-[#e2ece6] bg-white p-2.5 shadow-xl dark:border-[#1a382b] dark:bg-[#10231b]"
                >
                  <div className="px-3 py-2 border-b border-[#e2ece6] mb-1.5 dark:border-[#1a382b]">
                    <p className="text-sm font-black text-[#10231b] dark:text-white">{name}</p>
                    <p className="text-[10px] font-bold text-[#7a8d84] truncate">{studentMockData.profile.email}</p>
                  </div>
                  
                  <Link href="/student/profile" onClick={() => setShowProfileDropdown(false)}>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-[#53685f] hover:bg-[#f1f7f3] hover:text-[#1d6f42] dark:text-[#c9ddd1] dark:hover:bg-white/5 dark:hover:text-white transition-colors cursor-pointer">
                      <Sparkles size={14} />
                      <span>My Profile</span>
                    </div>
                  </Link>
                  
                  <Link href="/student/settings" onClick={() => setShowProfileDropdown(false)}>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-[#53685f] hover:bg-[#f1f7f3] hover:text-[#1d6f42] dark:text-[#c9ddd1] dark:hover:bg-white/5 dark:hover:text-white transition-colors cursor-pointer">
                      <Settings size={14} />
                      <span>Account Settings</span>
                    </div>
                  </Link>

                  <div className="border-t border-[#e2ece6] my-1.5 dark:border-[#1a382b]" />
                  
                  <button
                    onClick={() => {
                      setShowProfileDropdown(false);
                      window.location.href = "/";
                    }}
                    className="flex w-full items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/20 transition-colors"
                  >
                    <span>Log out</span>
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

      </div>
    </header>
  );
}
