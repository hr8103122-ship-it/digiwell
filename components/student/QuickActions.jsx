"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Sparkles, BookOpenText, Target, HelpCircle } from "lucide-react";
import Link from "next/link";

const actions = [
  { title: "Book Demo", icon: Sparkles, color: "text-amber-500", href: "/demo-class" },
  { title: "View Results", icon: BookOpenText, color: "text-blue-500", href: "/student/results" },
  { title: "Mock Tests", icon: Target, color: "text-red-500", href: "/student/exams" },
  { title: "Support", icon: HelpCircle, color: "text-purple-500", href: "/faq" },
];

export default function QuickActions() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {actions.map((action, index) => (
        <Link key={index} href={action.href}>
          <Card hoverLift className="bg-white/90 backdrop-blur-md border-[#e2ece6] dark:bg-[#10231b]/90 dark:border-[#1a382b] p-4 flex flex-col items-center justify-center gap-3 cursor-pointer">
            <action.icon size={24} className={action.color} />
            <span className="text-xs font-black text-[#10231b] dark:text-white">
              {action.title}
            </span>
          </Card>
        </Link>
      ))}
    </div>
  );
}
