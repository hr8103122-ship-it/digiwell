"use client";

import React from "react";
import { studentMockData } from "@/data/studentMockData";
import { Card, CardContent } from "@/components/ui/Card";
import Progress from "@/components/ui/Progress";
import Badge from "@/components/ui/Badge";
import { User, Award, Shield, Phone, Mail, Calendar } from "lucide-react";

export default function ProfileCard() {
  const { profile } = studentMockData;

  return (
    <Card hoverLift className="bg-white/90 backdrop-blur-md border-[#e2ece6] dark:bg-[#10231b]/90 dark:border-[#1a382b] overflow-hidden">
      {/* Decorative Top Accent Bar */}
      <div className="h-2 w-full bg-gradient-to-r from-[#1d6f42] via-emerald-500 to-[#f7b733]" />
      
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-start gap-5">
          {/* Avatar Area */}
          <div className="relative shrink-0">
            <div className="grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br from-[#1d6f42] to-emerald-800 text-3xl font-black text-white shadow-lg shadow-emerald-950/20">
              RS
            </div>
            <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-emerald-500 border-2 border-white dark:border-[#10231b] flex items-center justify-center shadow" title="Online Status">
              <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
            </div>
          </div>

          {/* Profile Basic Info */}
          <div className="flex-1 space-y-1.5">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <h2 className="text-xl font-black text-[#10231b] dark:text-white leading-none">
                {profile.name}
              </h2>
              <Badge variant="success" className="text-[10px] uppercase font-black px-2 py-0.5">
                {profile.level}
              </Badge>
            </div>
            
            <p className="text-sm font-bold text-[#1d6f42] dark:text-emerald-400">
              {profile.course} — <span className="text-[#53685f] dark:text-[#7a8d84] font-medium">{profile.batch}</span>
            </p>
            
            <p className="text-xs font-bold text-[#7a8d84]">
              Roll No: <span className="font-mono text-[#10231b] dark:text-white">{profile.rollNo}</span>
            </p>
            
            {/* Achievements Row */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-1 text-xs font-semibold text-[#53685f] dark:text-[#c9ddd1]">
              <span className="flex items-center gap-1">
                <Award size={14} className="text-[#f7b733]" />
                <strong>{profile.achievements}</strong> Achievements
              </span>
              <span className="flex items-center gap-1">
                <Shield size={14} className="text-[#1d6f42]" />
                Mentor: <strong className="text-[#10231b] dark:text-white">{profile.mentor.split(" ")[1]}</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Progress Tracker Section */}
        <div className="mt-6 pt-5 border-t border-[#e2ece6] dark:border-[#1a382b] space-y-2">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-[#5d7369] dark:text-[#7a8d84]">Overall Course Syllabus Progress</span>
            <span className="text-[#1d6f42] dark:text-emerald-400">{profile.progress}% Completed</span>
          </div>
          <Progress value={profile.progress} />
        </div>
      </CardContent>
    </Card>
  );
}
