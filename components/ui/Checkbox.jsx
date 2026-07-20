"use client";

import React, { forwardRef } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const Checkbox = forwardRef(({ className, checked, defaultChecked, onChange, disabled, children, ...props }, ref) => {
  return (
    <label
      className={cn(
        "inline-flex items-center gap-2.5 cursor-pointer select-none text-sm font-semibold text-[#10231b]",
        disabled && "cursor-not-allowed opacity-50"
      )}
    >
      <div className="relative flex items-center">
        <input
          type="checkbox"
          ref={ref}
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={onChange}
          disabled={disabled}
          className="peer sr-only"
          {...props}
        />
        <div
          className={cn(
            "flex h-5 w-5 items-center justify-center rounded border border-[#c9ddd1] bg-white text-white transition-all duration-200 peer-checked:border-[#1d6f42] peer-checked:bg-[#1d6f42] peer-focus-visible:ring-2 peer-focus-visible:ring-[#1d6f42] peer-focus-visible:ring-offset-2 peer-disabled:bg-[#f7faf8] peer-disabled:border-[#c9ddd1] peer-checked:[&_svg]:scale-100",
            className
          )}
        >
          <Check
            size={14}
            strokeWidth={3}
            className="scale-0 transition-transform duration-200"
          />
        </div>
      </div>
      {children && <span className="text-[#53685f]">{children}</span>}
    </label>
  );
});

Checkbox.displayName = "Checkbox";

export default Checkbox;
