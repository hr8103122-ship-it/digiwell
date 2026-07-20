"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const gallery = [
  {
    title: "Smart classroom",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
    span: "md:col-span-2",
  },
  {
    title: "Focused study",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80",
    span: "",
  },
  {
    title: "Lab learning",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80",
    span: "",
  },
  {
    title: "Mentor review",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    span: "md:col-span-2",
  },
];

export default function Gallery() {
  return (
    <section className="bg-[#f7faf8] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#1d6f42]">Gallery</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-tight text-[#10231b] sm:text-5xl">A learning environment that feels focused and modern.</h2>
          </div>
        </div>

        <div className="mt-10 grid auto-rows-[260px] gap-5 md:grid-cols-3">
          {gallery.map((item, index) => (
            <motion.figure
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.06 }}
              className={`group relative overflow-hidden rounded-xl bg-[#dfece4] shadow-sm ${item.span}`}
            >
              <Image src={item.image} alt={item.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#10231b]/80 to-transparent p-5 text-lg font-black text-white">
                {item.title}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
