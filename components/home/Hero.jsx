"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, GraduationCap, PlayCircle, ShieldCheck } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "Hybrid coaching" },
  { icon: CalendarCheck, label: "Live progress tracking" },
  { icon: ShieldCheck, label: "Mentor-led batches" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#edf6f0] pt-28 sm:pt-32">
      <div className="absolute inset-x-0 top-0 h-24 bg-white" />
      <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#c7decf] bg-white px-4 py-2 text-sm font-bold text-[#1d6f42] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#f7b733]" />
            Admissions open for foundation and competitive batches
          </div>
          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1.02] tracking-tight text-[#10231b] sm:text-6xl lg:text-7xl">
            Coaching that keeps every learner moving forward.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#53685f] sm:text-xl">
            Digiwell brings expert faculty, structured courses, live class management, study notes, assignments, attendance, and parent-ready progress insights into one premium learning experience.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/demo-class" className="inline-flex items-center justify-center gap-2 rounded-md bg-[#1d6f42] px-6 py-4 text-base font-black text-white shadow-xl shadow-emerald-900/20 transition hover:bg-[#155c36]">
              Book a free demo <ArrowRight size={19} />
            </Link>
            <a href="#courses" className="inline-flex items-center justify-center gap-2 rounded-md border border-[#c9ddd1] bg-white px-6 py-4 text-base font-black text-[#1d6f42] transition hover:border-[#1d6f42]">
              <PlayCircle size={19} /> Explore courses
            </a>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.label} className="flex items-center gap-3 rounded-lg border border-white bg-white/70 px-4 py-3 shadow-sm">
                <item.icon className="h-5 w-5 text-[#1d6f42]" />
                <span className="text-sm font-bold text-[#40554b]">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white shadow-2xl shadow-emerald-950/15">
            <Image
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
              alt="Students studying together in a modern coaching classroom"
              width={1200}
              height={760}
              priority
              className="h-[520px] w-full object-cover"
            />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-white/92 p-5 shadow-xl backdrop-blur">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-[#5d7369]">Today&apos;s class momentum</p>
                  <p className="mt-1 text-2xl font-black text-[#10231b]">94% attendance</p>
                </div>
                <div className="rounded-lg bg-[#f7b733] px-4 py-3 text-sm font-black text-[#10231b]">Live</div>
              </div>
              <div className="mt-4 h-2 rounded-full bg-[#dceae1]">
                <div className="h-2 w-[94%] rounded-full bg-[#1d6f42]" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
