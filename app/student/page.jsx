"use client";

import React from "react";
import ProfileCard from "@/components/student/ProfileCard";
import AttendanceCard from "@/components/student/AttendanceCard";
import FeesCard from "@/components/student/FeesCard";
import UpcomingClasses from "@/components/student/UpcomingClasses";
import AssignmentsSection from "@/components/student/AssignmentsSection";
import LatestNotices from "@/components/student/LatestNotices";
import PerformanceOverview from "@/components/student/PerformanceOverview";
import RecentActivity from "@/components/student/RecentActivity";
import QuickActions from "@/components/student/QuickActions";

export default function StudentDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Quick Actions Row */}
      <QuickActions />

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (Main Content) */}
        <div className="lg:col-span-2 space-y-6">
          <ProfileCard />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AttendanceCard />
            <FeesCard />
          </div>
          <UpcomingClasses />
        </div>

        {/* Right Column (Sidebar Widgets) */}
        <div className="space-y-6">
          <PerformanceOverview />
          <AssignmentsSection />
          <LatestNotices />
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}
