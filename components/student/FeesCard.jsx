"use client";

import React from "react";
import { studentMockData } from "@/data/studentMockData";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { CreditCard, IndianRupee, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function FeesCard() {
  const { status, amountPending, amountPaid, totalAmount, dueDate } = studentMockData.fees;

  return (
    <Card hoverLift className="bg-white/90 backdrop-blur-md border-[#e2ece6] dark:bg-[#10231b]/90 dark:border-[#1a382b] flex flex-col justify-between">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-black flex items-center gap-2">
          <CreditCard size={18} className="text-amber-500" />
          Fees Status
        </CardTitle>
        <Badge variant={status === "Pending" ? "warning" : "success"} className="text-[10px] px-2 py-0.5 font-bold uppercase">
          {status}
        </Badge>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Main Pending Section */}
        <div className="flex items-baseline justify-between">
          <div>
            <p className="text-xs font-bold text-[#7a8d84]">Pending Installment</p>
            <p className="text-2xl font-black text-amber-600 dark:text-amber-400 flex items-center mt-1">
              ₹{amountPending.toLocaleString("en-IN")}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold text-[#7a8d84]">Due Date</p>
            <p className="text-xs font-black text-red-500 mt-1">{dueDate}</p>
          </div>
        </div>

        {/* Breakdown bar */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[11px] font-bold">
            <span className="text-emerald-600">Paid: ₹{amountPaid.toLocaleString("en-IN")}</span>
            <span className="text-[#7a8d84]">Total: ₹{totalAmount.toLocaleString("en-IN")}</span>
          </div>
          {/* Custom Multi-bar */}
          <div className="h-2 w-full rounded-full bg-[#dceae1] overflow-hidden flex">
            <div 
              style={{ width: `${(amountPaid / totalAmount) * 100}%` }} 
              className="h-full bg-[#1d6f42]" 
              title="Paid"
            />
            <div 
              style={{ width: `${(amountPending / totalAmount) * 100}%` }} 
              className="h-full bg-amber-500" 
              title="Pending"
            />
          </div>
        </div>

        {/* View Invoice/Pay CTA */}
        <Link href="/student/fees" className="group flex items-center justify-between rounded-xl bg-[#fff4dc] px-4 py-2.5 text-xs font-bold text-[#9a5f00] hover:bg-[#ffecc4] transition-colors cursor-pointer">
          <span className="flex items-center gap-1.5">
            Pay Instantly
          </span>
          <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </CardContent>
    </Card>
  );
}
