"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock, User, Phone, BookOpen } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";

const courseOptions = [
  { value: "foundation", label: "Foundation (Classes 6-10)" },
  { value: "science", label: "Science (Classes 11-12)" },
  { value: "commerce", label: "Commerce (Classes 11-12)" },
  { value: "competitive", label: "Competitive Exams (JEE/NEET)" },
];

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [course, setCourse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-bold text-[#53685f]">Full Name</label>
          <div className="relative">
            <User className="absolute left-3 top-3.5 h-4 w-4 text-[#5d7369]" />
            <Input type="text" placeholder="John Doe" className="pl-10" required />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-[#53685f]">Mobile</label>
          <div className="relative">
            <Phone className="absolute left-3 top-3.5 h-4 w-4 text-[#5d7369]" />
            <Input type="tel" placeholder="+1 234 567 890" className="pl-10" required />
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-bold text-[#53685f]">Email</label>
        <div className="relative">
          <Mail className="absolute left-3 top-3.5 h-4 w-4 text-[#5d7369]" />
          <Input type="email" placeholder="john@example.com" className="pl-10" required />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-bold text-[#53685f]">Course</label>
        <div className="relative">
          <BookOpen className="absolute left-3 top-3.5 h-4 w-4 text-[#5d7369] z-10" />
          <Select
            options={courseOptions}
            value={course}
            onChange={setCourse}
            placeholder="Select a course"
            className="pl-10"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-bold text-[#53685f]">Password</label>
        <div className="relative">
          <Lock className="absolute left-3 top-3.5 h-4 w-4 text-[#5d7369]" />
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Create password"
            className="pl-10 pr-10"
            required
          />
          <button
            type="button"
            className="absolute right-3 top-3.5 text-[#5d7369]"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-bold text-[#53685f]">Confirm Password</label>
        <div className="relative">
          <Lock className="absolute left-3 top-3.5 h-4 w-4 text-[#5d7369]" />
          <Input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm password"
            className="pl-10 pr-10"
            required
          />
          <button
            type="button"
            className="absolute right-3 top-3.5 text-[#5d7369]"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </div>
      <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
        {isLoading ? "Creating account..." : "Create Account"}
      </Button>
      <p className="text-center text-sm text-[#53685f]">
        Already have an account?{" "}
        <Link href="/login" className="font-bold text-[#1d6f42] hover:underline">Login</Link>
      </p>
    </form>
  );
}
