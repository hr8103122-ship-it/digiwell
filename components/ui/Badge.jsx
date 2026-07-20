import React from "react";
import { cn } from "@/lib/utils";

export default function Badge({ className, variant = "default", ...props }) {
  const baseStyles =
    "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold transition-colors select-none";

  const variants = {
    default: "bg-[#1d6f42] text-white",
    secondary: "bg-[#f1f7f3] text-[#1d6f42] border border-[#c9ddd1]",
    outline: "border border-[#c7decf] text-[#53685f] bg-transparent",
    destructive: "bg-red-50 text-red-600 border border-red-200",
    success: "bg-[#e8f4ed] text-[#1d6f42] border border-[#c7decf]",
    warning: "bg-[#fff4dc] text-[#9a5f00] border border-[#f7b733]/30",
    info: "bg-blue-50 text-blue-600 border border-blue-200",
    foundation: "bg-[#e8f4ed] text-[#1d6f42]",
    science: "bg-[#fff4dc] text-[#9a5f00]",
    commerce: "bg-[#edf2ff] text-[#3154a3]",
    competitive: "bg-[#f4eefc] text-[#6844a8]",
  };

  return (
    <span
      className={cn(baseStyles, variants[variant] || variants.default, className)}
      {...props}
    />
  );
}
