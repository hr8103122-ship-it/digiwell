import React from 'react';
import Sidebar from '@/components/teacher/Sidebar';
import Header from '@/components/teacher/Header';

export default function TeacherLayout({ children }) {
  return (
    <div className="flex h-screen bg-[#f7faf8] text-[#10231b]">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
