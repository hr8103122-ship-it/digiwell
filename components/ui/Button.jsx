import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

const Button = forwardRef(
  ({ className, variant = "default", size = "default", type = "button", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 rounded-md font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d6f42] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none";

    const variants = {
      default:
        "bg-[#1d6f42] text-white shadow-xl shadow-emerald-900/10 hover:bg-[#155c36] active:scale-[0.98]",
      secondary:
        "border border-[#c9ddd1] bg-white text-[#1d6f42] hover:border-[#1d6f42] hover:bg-[#f1f7f3] active:scale-[0.98]",
      outline:
        "border border-[#c7decf] bg-transparent text-[#1d6f42] hover:bg-[#e8f4ed] hover:border-[#1d6f42] active:scale-[0.98]",
      ghost: "text-[#1d6f42] hover:bg-[#e8f4ed] bg-transparent active:scale-[0.98]",
      link: "text-[#1d6f42] hover:underline bg-transparent p-0 h-auto font-semibold",
      destructive: "bg-red-600 text-white hover:bg-red-700 shadow-sm active:scale-[0.98]",
    };

    const sizes = {
      default: "px-5 py-2.5 text-sm",
      sm: "px-3 py-1.5 text-xs rounded-[4px]",
      lg: "px-6 py-4 text-base font-black",
      icon: "h-10 w-10 p-0 shrink-0",
    };

    return (
      <button
        type={type}
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
