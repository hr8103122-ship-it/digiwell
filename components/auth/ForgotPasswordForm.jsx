"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function ForgotPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-sm text-[#53685f] text-center">
        Enter your email or mobile number and we'll send you a link to reset your password.
      </p>
      <div className="space-y-2">
        <label className="text-sm font-bold text-[#53685f]">Email or Mobile Number</label>
        <div className="relative">
          <Mail className="absolute left-3 top-3.5 h-4 w-4 text-[#5d7369]" />
          <Input type="text" placeholder="Enter your email or mobile" className="pl-10" required />
        </div>
      </div>
      <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
        {isLoading ? "Sending link..." : "Send Reset Link"}
      </Button>
      <p className="text-center text-sm text-[#53685f]">
        Remember your password?{" "}
        <Link href="/login" className="font-bold text-[#1d6f42] hover:underline">Login</Link>
      </p>
    </form>
  );
}
