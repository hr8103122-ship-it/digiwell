"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Progress({ value = 0, max = 100, className, ...props }) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={value}
      className={cn(
        "relative h-3 w-full overflow-hidden rounded-full bg-[#dceae1] border border-[#c7decf]/20 select-none",
        className
      )}
      {...props}
    >
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="h-full rounded-full bg-[#1d6f42]"
      />
    </div>
  );
}
