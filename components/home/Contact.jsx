import Link from "next/link";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const contactItems = [
  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { icon: Mail, label: "Email", value: "hello@digiwell.in" },
  { icon: MapPin, label: "Campus", value: "Main Coaching Centre, India" },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-[#f7faf8] py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#1d6f42]">Contact</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-[#10231b] sm:text-5xl">Start with the right batch, mentor, and plan.</h2>
          <p className="mt-5 leading-8 text-[#5d7369]">Connect with the Digiwell team for admissions, demo classes, batch details, or platform onboarding.</p>
          <div className="mt-8 space-y-4">
            {contactItems.map((item) => (
              <div key={item.label} className="flex items-center gap-4 rounded-xl border border-[#e2ece6] bg-white p-4">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#e8f4ed] text-[#1d6f42]">
                  <item.icon size={21} />
                </div>
                <div>
                  <p className="text-sm font-black uppercase text-[#7a8d84]">{item.label}</p>
                  <p className="font-bold text-[#10231b]">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form className="rounded-2xl border border-[#e2ece6] bg-white p-6 shadow-xl shadow-emerald-950/8 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-black text-[#40554b]">Name</span>
              <input className="mt-2 h-12 w-full rounded-md border border-[#d9e7df] bg-white px-4 outline-none ring-[#1d6f42] transition focus:ring-2" placeholder="Student name" />
            </label>
            <label className="block">
              <span className="text-sm font-black text-[#40554b]">Phone</span>
              <input className="mt-2 h-12 w-full rounded-md border border-[#d9e7df] bg-white px-4 outline-none ring-[#1d6f42] transition focus:ring-2" placeholder="Mobile number" />
            </label>
          </div>
          <label className="mt-4 block">
            <span className="text-sm font-black text-[#40554b]">Course Interest</span>
            <select className="mt-2 h-12 w-full rounded-md border border-[#d9e7df] bg-white px-4 outline-none ring-[#1d6f42] transition focus:ring-2">
              <option>Foundation Program</option>
              <option>Science Stream</option>
              <option>Commerce Stream</option>
              <option>Competitive Prep</option>
            </select>
          </label>
          <label className="mt-4 block">
            <span className="text-sm font-black text-[#40554b]">Message</span>
            <textarea className="mt-2 min-h-32 w-full resize-none rounded-md border border-[#d9e7df] bg-white px-4 py-3 outline-none ring-[#1d6f42] transition focus:ring-2" placeholder="Tell us what you need" />
          </label>
          <Link href="/contact" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#1d6f42] px-6 py-4 text-base font-black text-white transition hover:bg-[#155c36]">
            Send enquiry <Send size={18} />
          </Link>
        </form>
      </div>
    </section>
  );
}
