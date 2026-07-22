"use client";

import React from "react";
import { studentMockData } from "@/data/studentMockData";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { CalendarCheck, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function AttendanceCard() {
  const { overall, totalClasses, attended, absent, status } = studentMockData.attendance;

  // Circular progress math
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (overall / 100) * circumference;

  return (
    <Card hoverLift className="bg-white/90 backdrop-blur-md border-[#e2ece6] dark:bg-[#10231b]/90 dark:border-[#1a382b] flex flex-col justify-between">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-black flex items-center gap-2">
          <CalendarCheck size={18} className="text-[#1d6f42]" />
          Attendance Overview
        </CardTitle>
        <Badge variant="success" className="text-[10px] px-2 py-0.5 font-bold uppercase">{status}</Badge>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          {/* SVG Radial Chart */}
          <div className="relative h-20 w-20 shrink-0">
            <svg className="h-full w-full -rotate-90">
              <circle
                cx="40"
                cy="40"
                r={radius}
                className="stroke-[#edf6f0] dark:stroke-white/5"
                strokeWidth="7"
                fill="transparent"
              />
              <circle
                cx="40"
                cy="40"
                r={radius}
                className="stroke-[#1d6f42] transition-all duration-1000 ease-out"
                strokeWidth="7"
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-base font-black text-[#10231b] dark:text-white leading-none">
                {overall}%
              </span>
            </div>
          </div>

          {/* Quick Stats list */}
          <div className="flex-1 grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
            <div>
              <p className="text-[#7a8d84] font-bold">Total Lectures</p>
              <p className="text-sm font-black text-[#10231b] dark:text-white">{totalClasses}</p>
            </div>
            <div>
              <p className="text-emerald-600 font-bold">Attended</p>
              <p className="text-sm font-black text-emerald-700 dark:text-emerald-400">{Math.floor(attended)}</p>
            </div>
            <div>
              <p className="text-red-500 font-bold">Absents</p>
              <p className="text-sm font-black text-red-600 dark:text-red-400">{absent}</p>
            </div>
            <div>
              <p className="text-[#7a8d84] font-bold">Target</p>
              <p className="text-sm font-black text-[#10231b] dark:text-white">85%+</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <Link href="/student/attendance" className="group flex items-center justify-between rounded-xl bg-[#f7faf8] px-4 py-2.5 text-xs font-bold text-[#1d6f42] hover:bg-[#e8f4ed] dark:bg-white/5 dark:text-emerald-400 dark:hover:bg-white/10 transition-colors cursor-pointer">
          <span>View Subject-wise Tracker</span>
          <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </CardContent>
    </Card>
  );
}
