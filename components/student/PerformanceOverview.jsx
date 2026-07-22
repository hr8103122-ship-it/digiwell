"use client";

import React from "react";
import { studentMockData } from "@/data/studentMockData";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

export default function PerformanceOverview() {
  const { performance } = studentMockData;

  return (
    <Card hoverLift className="bg-white/90 backdrop-blur-md border-[#e2ece6] dark:bg-[#10231b]/90 dark:border-[#1a382b]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-black flex items-center gap-2">
          <BarChart3 size={18} className="text-[#1d6f42]" />
          Performance Overview
        </CardTitle>
        <div className="text-right">
          <p className="text-xl font-black text-[#10231b] dark:text-white leading-none">
            {performance.overall}%
          </p>
          <p className="text-[10px] font-bold text-[#7a8d84]">Overall Score</p>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4 pt-4">
          {performance.subjectProgress.map((sub, index) => (
            <div key={index} className="space-y-1">
              <div className="flex justify-between text-[11px] font-bold">
                <span className="text-[#53685f] dark:text-[#c9ddd1]">{sub.subject}</span>
                <span className="text-[#10231b] dark:text-white">{sub.score}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-[#f1f7f3] dark:bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${sub.score}%` }}
                  transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: sub.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
