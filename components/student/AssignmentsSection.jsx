"use client";

import React from "react";
import { studentMockData } from "@/data/studentMockData";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { FileText, AlertCircle, CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function AssignmentsSection() {
  const { assignments } = studentMockData;

  return (
    <Card hoverLift className="bg-white/90 backdrop-blur-md border-[#e2ece6] dark:bg-[#10231b]/90 dark:border-[#1a382b] flex flex-col justify-between">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-black flex items-center gap-2">
          <FileText size={18} className="text-[#1d6f42]" />
          Assignments
        </CardTitle>
        <Link href="/student/assignments" className="text-xs font-bold text-[#1d6f42] hover:underline dark:text-emerald-400">
          View All
        </Link>
      </CardHeader>
      
      <CardContent className="space-y-3">
        {assignments.slice(0, 3).map((asg) => (
          <div key={asg.id} className="flex items-center gap-3 rounded-xl p-3 bg-[#f7faf8] dark:bg-white/5 border border-[#e2ece6] dark:border-[#1a382b] transition-all hover:bg-white dark:hover:bg-white/10">
            {/* Status Icon */}
            <div className={`shrink-0 grid h-10 w-10 place-items-center rounded-lg ${asg.status === "Pending" ? "bg-amber-100 dark:bg-amber-900/30 text-amber-600" : "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600"}`}>
              {asg.status === "Pending" ? <AlertCircle size={20} /> : <CheckCircle2 size={20} />}
            </div>
            
            {/* Details */}
            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-black text-[#10231b] dark:text-white truncate">
                {asg.title}
              </h4>
              <p className="text-[10px] font-bold text-[#7a8d84]">
                {asg.subject} • {asg.dueDate}
              </p>
            </div>

            {/* Badge */}
            <Badge 
              variant={asg.isUrgent ? "warning" : "success"}
              className="text-[9px] font-black uppercase shrink-0"
            >
              {asg.status}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
