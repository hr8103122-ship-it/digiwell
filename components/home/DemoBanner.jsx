import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

export default function DemoBanner() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 rounded-2xl bg-[#1d6f42] p-8 text-white shadow-2xl shadow-emerald-950/20 sm:p-10 lg:flex-row lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-sm font-black">
              <CalendarDays size={18} /> Free demo class
            </div>
            <h2 className="mt-5 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">See how Digiwell turns coaching into a managed learning journey.</h2>
          </div>
          <Link href="/demo-class" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-white px-6 py-4 text-base font-black text-[#1d6f42] transition hover:bg-[#f1f7f3]">
            Schedule now <ArrowRight size={19} />
          </Link>
        </div>
      </div>
    </section>
  );
}
