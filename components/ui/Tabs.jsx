"use client";

import React, { createContext, useContext, useState } from "react";
import { cn } from "@/lib/utils";

const TabsContext = createContext(null);

export function Tabs({ defaultValue, value, onValueChange, children, className, ...props }) {
  const [activeTab, setActiveTab] = useState(defaultValue);
  
  const currentTab = value !== undefined ? value : activeTab;
  const setTab = onValueChange !== undefined ? onValueChange : setActiveTab;

  return (
    <TabsContext.Provider value={{ activeTab: currentTab, setActiveTab: setTab }}>
      <div className={cn("w-full", className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export function TabsList({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "inline-flex h-11 items-center justify-center rounded-lg bg-[#f1f7f3] p-1 text-[#5d7369] border border-[#c9ddd1]/40",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function TabsTrigger({ value, className, children, ...props }) {
  const context = useContext(TabsContext);
  if (!context) throw new Error("TabsTrigger must be used within Tabs");

  const isActive = context.activeTab === value;

  return (
    <button
      type="button"
      onClick={() => context.setActiveTab(value)}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-bold ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d6f42] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none",
        isActive
          ? "bg-[#1d6f42] text-white shadow-sm"
          : "hover:text-[#1d6f42] hover:bg-white/50"
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, className, children, ...props }) {
  const context = useContext(TabsContext);
  if (!context) throw new Error("TabsContent must be used within Tabs");

  const isActive = context.activeTab === value;

  if (!isActive) return null;

  return (
    <div
      className={cn(
        "mt-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d6f42] focus-visible:ring-offset-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
