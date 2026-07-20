import React from "react";
import { cn } from "@/lib/utils";

export default function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn("animate-pulse rounded bg-[#5d7369]/10", className)}
      {...props}
    />
  );
}
