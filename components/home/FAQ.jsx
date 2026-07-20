"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Which classes does Digiwell support?",
    answer: "The platform is prepared for foundation, senior secondary, competitive preparation, live classes, recorded classes, exams, notes, assignments, and attendance workflows.",
  },
  {
    question: "Can students and teachers have separate dashboards?",
    answer: "Yes. The architecture already separates student, teacher, admin, profile, attendance, assignment, exam, notes, and class modules for future development.",
  },
  {
    question: "Does the homepage connect to backend data yet?",
    answer: "No. This phase builds a polished frontend home page only. Backend logic can be connected module by module later.",
  },
  {
    question: "Is it responsive on mobile?",
    answer: "Yes. The layout uses responsive grids, mobile navigation, scalable spacing, and section-by-section stacking for smaller screens.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#1d6f42]">FAQ</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-[#10231b] sm:text-5xl">Questions before the next module?</h2>
          <p className="mt-5 leading-8 text-[#5d7369]">The homepage is built to be extended cleanly as courses, dashboards, auth, and admin workflows come online.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="rounded-xl border border-[#e2ece6] bg-[#fbfdfb]">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-lg font-black text-[#10231b]"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  {faq.question}
                  <ChevronDown className={`h-5 w-5 shrink-0 text-[#1d6f42] transition ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen ? <p className="px-5 pb-5 leading-7 text-[#5d7369]">{faq.answer}</p> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
