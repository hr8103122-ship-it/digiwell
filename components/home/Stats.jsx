"use client";

import { motion } from "framer-motion";
import { Award, BookOpenCheck, Users, Video } from "lucide-react";

const stats = [
  { icon: Users, value: "12K+", label: "students guided" },
  { icon: Award, value: "96%", label: "result-focused success" },
  { icon: BookOpenCheck, value: "42", label: "structured courses" },
  { icon: Video, value: "1.8K", label: "recorded lessons" },
];

export default function Stats() {
  return (
    <section id="stats" className="bg-white py-10">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.06 }}
            className="rounded-xl border border-[#e1ece5] bg-[#fbfdfb] p-6 shadow-sm"
          >
            <stat.icon className="h-7 w-7 text-[#1d6f42]" />
            <p className="mt-5 text-4xl font-black tracking-tight text-[#10231b]">{stat.value}</p>
            <p className="mt-2 text-sm font-bold uppercase text-[#6c8076]">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
