"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Avatar({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-[#f1f7f3] border border-[#c9ddd1]/40",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function AvatarImage({ src, alt = "avatar", className, ...props }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!src) return;
    const img = typeof window !== "undefined" ? new window.Image() : null;
    if (!img) return;
    img.src = src;
    img.onload = () => setIsLoaded(true);
  }, [src]);

  if (!src) return null;

  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        "h-full w-full object-cover transition-opacity duration-300",
        isLoaded ? "opacity-100" : "opacity-0",
        className
      )}
      {...props}
    />
  );
}

export function AvatarFallback({ children, className, ...props }) {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-[#e8f4ed] text-sm font-black text-[#1d6f42] uppercase select-none",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
