"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Class 12 Science",
    text: "The weekly tests and detailed review sessions helped me understand exactly where I was losing marks.",
  },
  {
    name: "Rohit Verma",
    role: "Foundation Batch Parent",
    text: "Attendance, homework, and progress updates are easy to follow. The coaching feels personal and structured.",
  },
  {
    name: "Meera Kapoor",
    role: "Commerce Student",
    text: "The faculty explains concepts clearly and gives enough practice to build confidence before exams.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#10231b] py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f7b733]">Testimonials</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">Trusted by learners who want disciplined progress.</h2>
          </div>
          <div className="flex gap-1 text-[#f7b733]" aria-label="Five star rating">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} size={22} fill="currentColor" />
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.08 }}
              className="rounded-xl border border-white/10 bg-white/8 p-6 backdrop-blur"
            >
              <Quote className="h-8 w-8 text-[#f7b733]" />
              <p className="mt-6 min-h-[112px] text-lg leading-8 text-white/84">{testimonial.text}</p>
              <div className="mt-6 border-t border-white/10 pt-5">
                <h3 className="font-black">{testimonial.name}</h3>
                <p className="mt-1 text-sm font-semibold text-white/58">{testimonial.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
