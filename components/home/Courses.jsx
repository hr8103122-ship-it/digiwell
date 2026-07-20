"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, BookOpen, Calculator, Microscope } from "lucide-react";

const courses = [
  {
    icon: Calculator,
    title: "Foundation Programs",
    level: "Classes 6-10",
    description: "Concept-first coaching for Maths, Science, English, and Olympiad readiness.",
    tone: "bg-[#e8f4ed] text-[#1d6f42]",
  },
  {
    icon: Microscope,
    title: "Science Stream",
    level: "Classes 11-12",
    description: "Physics, Chemistry, Biology, and Mathematics with test analytics and doubt support.",
    tone: "bg-[#fff4dc] text-[#9a5f00]",
  },
  {
    icon: BarChart3,
    title: "Commerce Stream",
    level: "Classes 11-12",
    description: "Accounts, Economics, Business Studies, and applied problem-solving labs.",
    tone: "bg-[#edf2ff] text-[#3154a3]",
  },
  {
    icon: BookOpen,
    title: "Competitive Prep",
    level: "Entrance exams",
    description: "Targeted batches with practice papers, ranking dashboards, and mentor reviews.",
    tone: "bg-[#f4eefc] text-[#6844a8]",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="bg-[#f7faf8] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#1d6f42]">Courses</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-tight text-[#10231b] sm:text-5xl">Programs built for measurable academic growth.</h2>
          </div>
          <Link href="/courses" className="inline-flex items-center gap-2 text-base font-black text-[#1d6f42]">
            View all courses <ArrowRight size={18} />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {courses.map((course, index) => (
            <motion.article
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.08 }}
              className="group flex min-h-[300px] flex-col rounded-xl border border-[#dfece4] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/10"
            >
              <div className={`grid h-12 w-12 place-items-center rounded-lg ${course.tone}`}>
                <course.icon size={24} />
              </div>
              <p className="mt-6 text-sm font-black uppercase text-[#7a8d84]">{course.level}</p>
              <h3 className="mt-2 text-2xl font-black text-[#10231b]">{course.title}</h3>
              <p className="mt-4 flex-1 leading-7 text-[#5d7369]">{course.description}</p>
              <Link href="/courses" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#1d6f42]">
                Learn more <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
