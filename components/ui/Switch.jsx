"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Switch({ className, checked = false, onChange, disabled = false, children, ...props }) {
  const handleKeyDown = (e) => {
    if (disabled) return;
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      onChange?.(!checked);
    }
  };

  return (
    <label
      className={cn(
        "inline-flex items-center gap-2.5 cursor-pointer select-none text-sm font-semibold text-[#10231b]",
        disabled && "cursor-not-allowed opacity-50"
      )}
    >
      <div
        role="switch"
        aria-checked={checked}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={handleKeyDown}
        onClick={() => !disabled && onChange?.(!checked)}
        className={cn(
          "relative flex h-6 w-11 shrink-0 rounded-full border border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d6f42] focus-visible:ring-offset-2",
          checked ? "bg-[#1d6f42]" : "bg-[#c9ddd1]",
          disabled ? "bg-[#f1f7f3] border-[#c9ddd1]" : "cursor-pointer",
          className
        )}
        {...props}
      >
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className={cn(
            "h-5 w-5 rounded-full bg-white shadow-md absolute top-[1px]",
            checked ? "right-[1px]" : "left-[1px]"
          )}
        />
      </div>
      {children && <span className="text-[#53685f]">{children}</span>}
    </label>
  );
}
