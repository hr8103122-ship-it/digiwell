import React from 'react';
import { Search, Bell, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white/70 backdrop-blur-md border-b border-[#e2ece6] p-4 flex items-center justify-between">
      <div className="relative w-64">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5d7369]" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#f7faf8] border border-[#e2ece6] focus:outline-none focus:ring-2 focus:ring-[#10231b]"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-[#e4eee8] text-[#5d7369]">
          <Bell className="w-5 h-5" />
        </button>
        <div className="w-8 h-8 rounded-full bg-[#10231b] text-white flex items-center justify-center font-bold">
          T
        </div>
      </div>
    </header>
  );
}
