"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Select({
  options = [],
  value,
  onChange,
  placeholder = "Select an option",
  disabled = false,
  className,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  const handleSelect = (val) => {
    onChange?.(val);
    setIsOpen(false);
  };

  const handleKeyDown = (e) => {
    if (disabled) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div ref={selectRef} className={cn("relative w-full select-none", className)}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        className={cn(
          "flex h-11 w-full items-center justify-between rounded-md border border-[#c9ddd1] bg-white px-3.5 py-2 text-sm text-[#10231b] placeholder-[#5d7369]/70 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:border-[#1d6f42] focus-visible:ring-[#1d6f42] disabled:cursor-not-allowed disabled:bg-[#f7faf8] disabled:text-[#5d7369]/60",
          isOpen && "border-[#1d6f42] ring-2 ring-offset-1 ring-[#1d6f42]"
        )}
      >
        <span className={cn(!selectedOption && "text-[#5d7369]/70")}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown size={18} className={cn("text-[#53685f] transition-transform duration-200", isOpen && "rotate-180")} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: 5, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 mt-1.5 max-h-60 w-full overflow-auto rounded-md border border-[#c9ddd1] bg-white p-1 shadow-lg focus:outline-none"
          >
            {options.length === 0 ? (
              <li className="px-3.5 py-2 text-sm text-[#5d7369]/60">No options available</li>
            ) : (
              options.map((opt) => (
                <li
                  key={opt.value}
                  onClick={() => handleSelect(opt.value)}
                  className={cn(
                    "relative flex cursor-pointer select-none items-center justify-between rounded-sm px-3.5 py-2 text-sm text-[#10231b] hover:bg-[#e8f4ed] hover:text-[#1d6f42] transition-colors",
                    opt.value === value && "bg-[#e8f4ed] text-[#1d6f42] font-bold"
                  )}
                >
                  <span>{opt.label}</span>
                  {opt.value === value && <Check size={16} className="text-[#1d6f42]" />}
                </li>
              ))
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
