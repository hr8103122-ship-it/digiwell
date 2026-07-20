import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

const Textarea = forwardRef(({ className, error, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-[#c9ddd1] bg-white px-3.5 py-2.5 text-sm text-[#10231b] placeholder-[#5d7369]/70 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:border-[#1d6f42] focus-visible:ring-[#1d6f42] disabled:cursor-not-allowed disabled:bg-[#f7faf8] disabled:text-[#5d7369]/60 resize-y",
        error && "border-red-500 focus-visible:ring-red-500 focus-visible:border-red-500",
        className
      )}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";

export default Textarea;
