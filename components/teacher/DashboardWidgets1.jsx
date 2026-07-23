"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { motion } from "framer-motion";

export function TodayClasses() {
  const classes = [
    { id: 1, name: 'Mathematics 101', time: '09:00 AM' },
    { id: 2, name: 'Physics 202', time: '11:00 AM' },
  ];
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
      <Card hoverLift>
        <CardHeader><CardTitle>Today's Classes</CardTitle></CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {classes.map(c => <li key={c.id} className="text-sm p-2 bg-[#f7faf8] rounded">{c.name} - {c.time}</li>)}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function StudentList() {
    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <Card hoverLift>
          <CardHeader><CardTitle>Student List</CardTitle></CardHeader>
          <CardContent><p className="text-sm text-[#5d7369]">List of 25 students enrolled.</p></CardContent>
        </Card>
      </motion.div>
    );
  }

export function AttendancePanel() {
    return (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <Card hoverLift>
            <CardHeader><CardTitle>Attendance</CardTitle></CardHeader>
            <CardContent><p className="text-sm text-[#5d7369]">Attendance record for today.</p></CardContent>
          </Card>
        </motion.div>
      );
}

export function AssignmentManagement() {
    return (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <Card hoverLift>
            <CardHeader><CardTitle>Assignments</CardTitle></CardHeader>
            <CardContent><p className="text-sm text-[#5d7369]">Manage pending assignments.</p></CardContent>
          </Card>
        </motion.div>
      );
}

export function LatestNotices() {
    return (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <Card hoverLift>
            <CardHeader><CardTitle>Latest Notices</CardTitle></CardHeader>
            <CardContent><p className="text-sm text-[#5d7369]">No new notices.</p></CardContent>
          </Card>
        </motion.div>
      );
}
