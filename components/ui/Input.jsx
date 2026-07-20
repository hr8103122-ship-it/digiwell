import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

const Input = forwardRef(({ className, type = "text", error, ...props }, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md border border-[#c9ddd1] bg-white px-3.5 py-2 text-sm text-[#10231b] placeholder-[#5d7369]/70 transition-all file:border-0 file:bg-transparent file:text-sm file:font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:border-[#1d6f42] focus-visible:ring-[#1d6f42] disabled:cursor-not-allowed disabled:bg-[#f7faf8] disabled:text-[#5d7369]/60",
        error && "border-red-500 focus-visible:ring-red-500 focus-visible:border-red-500",
        className
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";

export default Input;
