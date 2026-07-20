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
  { label: "Student Dashboard", href: "/student" },
  { label: "Teacher Dashboard", href: "/teacher" },
  { label: "Admin Operations", href: "/admin" },
  { label: "Platform Settings", href: "/settings" },
];

export default function Footer() {
  return (
    <footer className="bg-[#10231b] py-16 text-white border-t border-white/5 select-none">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          {/* Brand Wordmark */}
          <Link href="/" className="flex items-center gap-3" aria-label="Digiwell home">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-white text-xl font-black text-[#1d6f42]">
              D
            </span>
            <span className="text-2xl font-black tracking-tight">Digiwell</span>
          </Link>
          <p className="mt-5 max-w-md leading-8 text-white/65 text-sm">
            A premium, unified coaching management platform designed to deliver world-class hybrid learning. From class discovery to dynamic attendance, exams, grading, and digital certification.
          </p>
          {/* Social Icons */}
          <div className="mt-6 flex gap-3">
            {[Globe2, MessageCircle, Send, Video].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="grid h-10 w-10 place-items-center rounded-md bg-white/10 text-white transition-colors duration-200 hover:bg-white hover:text-[#1d6f42]"
                aria-label="Social link"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        
        {/* Explore Links */}
        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#f7b733]">Explore</h3>
          <div className="mt-6 flex flex-col gap-3.5">
            {links.map((link) => (
              <Link key={link.label} href={link.href} className="text-sm text-white/65 transition-colors duration-200 hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Portal Links */}
        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#f7b733]">Portals</h3>
          <div className="mt-6 flex flex-col gap-3.5">
            {portals.map((link) => (
              <Link key={link.label} href={link.href} className="text-sm text-white/65 transition-colors duration-200 hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* Copyright Footer */}
      <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 px-4 pt-6 text-sm text-white/50 sm:flex-row sm:px-6 lg:px-8">
        <p>© 2026 Digiwell Coaching Platform. All rights reserved.</p>
        <p className="font-semibold text-white/40">Built for scalable academic excellence.</p>
      </div>
    </footer>
  );
}
