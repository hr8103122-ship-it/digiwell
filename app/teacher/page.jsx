import React from 'react';
import { TodayClasses, StudentList, AttendancePanel, AssignmentManagement, LatestNotices } from '@/components/teacher/DashboardWidgets1';
import { PerformanceAnalytics, ScheduleCalendar, RecentActivity, ProfileCard, QuickActions } from '@/components/teacher/DashboardWidgets2';

export default function TeacherDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-black text-[#10231b]">Teacher Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TodayClasses />
        <StudentList />
        <AttendancePanel />
        <AssignmentManagement />
        <LatestNotices />
        <PerformanceAnalytics />
        <ScheduleCalendar />
        <RecentActivity />
        <ProfileCard />
        <QuickActions />
      </div>
    </div>
  );
}
