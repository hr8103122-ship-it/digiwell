"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, LineChart, MessageSquareText, Presentation, ShieldCheck, Sparkles } from "lucide-react";

const reasons = [
  { icon: Presentation, title: "Live class control", text: "Manage batches, schedules, recordings, and teaching resources from one organized flow." },
  { icon: ClipboardCheck, title: "Attendance clarity", text: "Keep student attendance, assignments, exams, and certificates ready for review." },
  { icon: LineChart, title: "Progress intelligence", text: "Turn tests and practice data into clear performance insights for students and parents." },
  { icon: MessageSquareText, title: "Doubt support", text: "Create faster feedback loops between learners, mentors, teachers, and administrators." },
  { icon: ShieldCheck, title: "Role-based access", text: "Prepared for student, teacher, admin, and profile areas without mixing responsibilities." },
  { icon: Sparkles, title: "Premium experience", text: "Clean interfaces, scalable sections, and reusable modules for long-term growth." },
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#1d6f42]">Why Digiwell</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-[#10231b] sm:text-5xl">A coaching platform designed for serious learning operations.</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.05 }}
              className="rounded-xl border border-[#e2ece6] bg-[#fbfdfb] p-6"
            >
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#e8f4ed] text-[#1d6f42]">
                <reason.icon size={22} />
              </div>
              <h3 className="mt-5 text-xl font-black text-[#10231b]">{reason.title}</h3>
              <p className="mt-3 leading-7 text-[#5d7369]">{reason.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
