import React from 'react';
import Link from 'next/link';
import { LayoutDashboard, BookOpen, Users, CheckSquare, FileText, BarChart3, Bell, Calendar, User, Settings, LogOut } from 'lucide-react';

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/teacher' },
  { name: 'My Classes', icon: BookOpen, href: '/teacher/classes' },
  { name: 'Students', icon: Users, href: '/teacher/students' },
  { name: 'Attendance', icon: CheckSquare, href: '/teacher/attendance' },
  { name: 'Assignments', icon: FileText, href: '/teacher/assignments' },
  { name: 'Results', icon: BarChart3, href: '/teacher/results' },
  { name: 'Notices', icon: Bell, href: '/teacher/notices' },
  { name: 'Schedule', icon: Calendar, href: '/teacher/schedule' },
  { name: 'Profile', icon: User, href: '/teacher/profile' },
  { name: 'Settings', icon: Settings, href: '/teacher/settings' },
  { name: 'Logout', icon: LogOut, href: '/login' },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white/70 backdrop-blur-md border-r border-[#e2ece6] p-6 flex flex-col gap-6">
      <div className="text-2xl font-black text-[#10231b]">Digiwell</div>
      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-[#5d7369] hover:bg-[#e4eee8] hover:text-[#10231b] transition-colors"
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
