"use client";

import React from "react";
import { studentMockData } from "@/data/studentMockData";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { History } from "lucide-react";

export default function RecentActivity() {
  const { recentActivities } = studentMockData;

  return (
    <Card hoverLift className="bg-white/90 backdrop-blur-md border-[#e2ece6] dark:bg-[#10231b]/90 dark:border-[#1a382b] flex flex-col justify-between">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-black flex items-center gap-2">
          <History size={18} className="text-[#1d6f42]" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {recentActivities.slice(0, 4).map((activity) => (
          <div key={activity.id} className="relative pl-6 pb-2 last:pb-0">
            {/* Timeline Line */}
            <div className="absolute left-0 top-1.5 h-full w-0.5 bg-[#e2ece6] dark:bg-[#1a382b]" />
            {/* Timeline Dot */}
            <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-white bg-[#1d6f42] dark:border-[#10231b]" />
            
            <div className="space-y-0.5">
              <h4 className="text-xs font-black text-[#10231b] dark:text-white">
                {activity.title}
              </h4>
              <p className="text-[10px] font-bold text-[#53685f] dark:text-[#c9ddd1]">
                {activity.details}
              </p>
              <p className="text-[9px] font-black text-[#7a8d84] uppercase">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
