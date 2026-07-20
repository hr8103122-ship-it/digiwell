"use client";

import { motion } from "framer-motion";
import { Bell, CalendarClock, FileText } from "lucide-react";

const announcements = [
  { icon: Bell, date: "Aug 02", title: "New foundation batch orientation", text: "Meet faculty, review course plans, and complete batch onboarding." },
  { icon: CalendarClock, date: "Aug 08", title: "Monthly test schedule released", text: "Students can view upcoming exam slots and syllabus details." },
  { icon: FileText, date: "Aug 12", title: "Scholarship assessment opens", text: "Register for the aptitude-based Digiwell scholarship test." },
];

export default function Announcements() {
  return (
    <section className="bg-[#f7faf8] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#1d6f42]">Announcements</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-[#10231b] sm:text-5xl">Stay aligned with every academic update.</h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {announcements.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.07 }}
              className="rounded-xl border border-[#e2ece6] bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#e8f4ed] text-[#1d6f42]">
                  <item.icon size={22} />
                </div>
                <span className="rounded-full bg-[#fff4dc] px-3 py-1 text-xs font-black text-[#8b5a00]">{item.date}</span>
              </div>
              <h3 className="mt-5 text-xl font-black text-[#10231b]">{item.title}</h3>
              <p className="mt-3 leading-7 text-[#5d7369]">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
