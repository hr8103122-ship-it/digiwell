import Link from "next/link";
import { Globe2, MessageCircle, Send, Video } from "lucide-react";

const links = [
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Faculty", href: "/faculty" },
  { label: "Results", href: "/results" },
  { label: "Contact", href: "/contact" },
];

const portals = [
  { label: "Student", href: "/student" },
  { label: "Teacher", href: "/teacher" },
  { label: "Admin", href: "/admin" },
  { label: "Settings", href: "/settings" },
];

export default function Footer() {
  return (
    <footer className="bg-[#10231b] py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-white text-xl font-black text-[#1d6f42]">D</span>
            <span className="text-2xl font-black">Digiwell</span>
          </Link>
          <p className="mt-5 max-w-md leading-7 text-white/65">A modern coaching management platform for courses, live classes, results, attendance, assignments, notes, exams, and learner progress.</p>
          <div className="mt-6 flex gap-3">
            {[Globe2, MessageCircle, Send, Video].map((Icon, index) => (
              <a key={index} href="#" className="grid h-10 w-10 place-items-center rounded-md bg-white/10 text-white transition hover:bg-white hover:text-[#1d6f42]" aria-label="Social link">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#f7b733]">Explore</h3>
          <div className="mt-5 flex flex-col gap-3">
            {links.map((link) => (
              <Link key={link.label} href={link.href} className="text-white/65 transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#f7b733]">Portals</h3>
          <div className="mt-5 flex flex-col gap-3">
            {portals.map((link) => (
              <Link key={link.label} href={link.href} className="text-white/65 transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-3 border-t border-white/10 px-4 pt-6 text-sm text-white/50 sm:flex-row sm:px-6 lg:px-8">
        <p>© 2026 Digiwell. All rights reserved.</p>
        <p>Built for scalable coaching operations.</p>
      </div>
    </footer>
  );
}
