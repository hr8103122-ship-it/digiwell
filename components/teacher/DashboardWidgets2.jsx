"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { motion } from "framer-motion";

export function PerformanceAnalytics() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
      <Card hoverLift>
        <CardHeader><CardTitle>Performance Analytics</CardTitle></CardHeader>
        <CardContent><p className="text-sm text-[#5d7369]">Performance overview graph.</p></CardContent>
      </Card>
    </motion.div>
  );
}

export function ScheduleCalendar() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
      <Card hoverLift>
        <CardHeader><CardTitle>Schedule Calendar</CardTitle></CardHeader>
        <CardContent><p className="text-sm text-[#5d7369]">Calendar view of classes.</p></CardContent>
      </Card>
    </motion.div>
  );
}

export function RecentActivity() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
      <Card hoverLift>
        <CardHeader><CardTitle>Recent Activity</CardTitle></CardHeader>
        <CardContent><p className="text-sm text-[#5d7369]">Latest teacher actions.</p></CardContent>
      </Card>
    </motion.div>
  );
}

export function ProfileCard() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
      <Card hoverLift>
        <CardHeader><CardTitle>Teacher Profile</CardTitle></CardHeader>
        <CardContent><p className="text-sm text-[#5d7369]">Teacher details.</p></CardContent>
      </Card>
    </motion.div>
  );
}

export function QuickActions() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
      <Card hoverLift>
        <CardHeader><CardTitle>Quick Actions</CardTitle></CardHeader>
        <CardContent className="flex gap-2">
            <button className="px-3 py-1 bg-[#10231b] text-white rounded text-xs">New Class</button>
            <button className="px-3 py-1 bg-[#10231b] text-white rounded text-xs">Add Assignment</button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
