"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck, BookMarked } from "lucide-react";

const faculty = [
  {
    name: "Dr. Kavita Rao",
    subject: "Physics Mentor",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=700&q=80",
    badge: "15 yrs",
  },
  {
    name: "Arjun Mehta",
    subject: "Mathematics Lead",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=80",
    badge: "IIT alumni",
  },
  {
    name: "Nisha Bansal",
    subject: "Accounts Faculty",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80",
    badge: "CA mentor",
  },
];

export default function Faculty() {
  return (
    <section id="faculty" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#1d6f42]">Faculty</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-[#10231b] sm:text-5xl">Expert teachers with a mentor-first approach.</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {faculty.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.08 }}
              className="overflow-hidden rounded-xl border border-[#e2ece6] bg-[#fbfdfb] shadow-sm"
            >
              <Image src={member.image} alt={member.name} width={700} height={520} className="h-80 w-full object-cover" />
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-black text-[#10231b]">{member.name}</h3>
                    <p className="mt-2 flex items-center gap-2 font-bold text-[#5d7369]">
                      <BookMarked size={17} className="text-[#1d6f42]" /> {member.subject}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#e8f4ed] px-3 py-1 text-xs font-black text-[#1d6f42]">
                    <BadgeCheck size={14} /> {member.badge}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
