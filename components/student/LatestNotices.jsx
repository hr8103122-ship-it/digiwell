"use client";

import React from "react";
import { studentMockData } from "@/data/studentMockData";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Bell, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function LatestNotices() {
  const { notices } = studentMockData;

  return (
    <Card hoverLift className="bg-white/90 backdrop-blur-md border-[#e2ece6] dark:bg-[#10231b]/90 dark:border-[#1a382b] flex flex-col justify-between">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-black flex items-center gap-2">
          <Bell size={18} className="text-[#1d6f42]" />
          Latest Notices
        </CardTitle>
        <Link href="/student/notices" className="text-xs font-bold text-[#1d6f42] hover:underline dark:text-emerald-400">
          View All
        </Link>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {notices.slice(0, 2).map((notice) => (
          <div key={notice.id} className="relative pl-4 border-l-2 border-[#e2ece6] dark:border-[#1a382b] hover:border-[#1d6f42] dark:hover:border-emerald-500 transition-colors">
            <span className="text-[10px] font-black text-[#5d7369] dark:text-[#7a8d84] uppercase">
              {notice.tag} • {notice.date}
            </span>
            <h4 className="text-xs font-black text-[#10231b] dark:text-white mt-0.5">
              {notice.title}
            </h4>
            <p className="text-[10px] text-[#53685f] dark:text-[#c9ddd1] mt-1 line-clamp-2">
              {notice.content}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
