"use client";

import React from "react";
import { studentMockData } from "@/data/studentMockData";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Clock, Video, MapPin, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function UpcomingClasses() {
  const { upcomingClasses } = studentMockData;

  return (
    <Card hoverLift className="bg-white/90 backdrop-blur-md border-[#e2ece6] dark:bg-[#10231b]/90 dark:border-[#1a382b] flex flex-col justify-between">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-black flex items-center gap-2">
          <Clock size={18} className="text-[#1d6f42]" />
          Upcoming Classes
        </CardTitle>
        <Link href="/student/live-classes" className="text-xs font-bold text-[#1d6f42] hover:underline dark:text-emerald-400">
          View Schedule
        </Link>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {upcomingClasses.slice(0, 2).map((cls) => (
          <div key={cls.id} className="group rounded-xl border border-[#e2ece6] bg-[#f7faf8] p-4 dark:border-[#1a382b] dark:bg-white/5 transition-all hover:bg-white dark:hover:bg-white/10">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-black uppercase text-[#5d7369] dark:text-[#7a8d84]">
                    {cls.subject}
                  </span>
                  {cls.isLive && (
                    <span className="flex items-center gap-1 rounded bg-red-100 px-1.5 py-0.5 text-[9px] font-black text-red-600 dark:bg-red-900/30 dark:text-red-400">
                      <span className="h-1 w-1 rounded-full bg-red-600 animate-pulse" />
                      LIVE
                    </span>
                  )}
                </div>
                <h4 className="text-sm font-black text-[#10231b] dark:text-white leading-tight group-hover:text-[#1d6f42] transition-colors">
                  {cls.topic}
                </h4>
              </div>
              <Video size={18} className="shrink-0 text-[#1d6f42] opacity-50" />
            </div>
            
            <div className="mt-3 flex items-center justify-between text-[11px] font-bold text-[#5d7369] dark:text-[#c9ddd1]">
              <span className="flex items-center gap-1">
                <MapPin size={12} /> {cls.teacher}
              </span>
              <span className="text-[#10231b] dark:text-white">
                {cls.date}, {cls.time}
              </span>
            </div>
          </div>
        ))}

        <Link href="/student/live-classes" className="flex items-center justify-center gap-2 rounded-xl border border-dashed border-[#c9ddd1] py-2.5 text-xs font-bold text-[#53685f] hover:bg-[#f1f7f3] dark:border-[#1a382b] dark:text-[#c9ddd1] dark:hover:bg-white/5 transition-colors cursor-pointer">
          <span>See all upcoming</span>
          <ChevronRight size={14} />
        </Link>
      </CardContent>
    </Card>
  );
}
