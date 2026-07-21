"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-bold text-[#53685f]">Email or Mobile Number</label>
        <div className="relative">
          <Mail className="absolute left-3 top-3.5 h-4 w-4 text-[#5d7369]" />
          <Input type="text" placeholder="Enter your email or mobile" className="pl-10" required />
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-sm font-bold text-[#53685f]">Password</label>
          <Link href="/forgot-password" className="text-sm font-semibold text-[#1d6f42] hover:underline">
            Forgot password?
          </Link>
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-3.5 h-4 w-4 text-[#5d7369]" />
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
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
      <div className="flex items-center gap-2">
        <input type="checkbox" id="remember" className="rounded border-[#c9ddd1] text-[#1d6f42] focus:ring-[#1d6f42]" />
        <label htmlFor="remember" className="text-sm text-[#53685f]">Remember me</label>
      </div>
      <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
        {isLoading ? "Signing in..." : "Login"}
      </Button>
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#c9ddd1]"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-[#5d7369]">Or continue with</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" size="default">Google</Button>
        <Button variant="outline" size="default">Microsoft</Button>
      </div>
      <p className="text-center text-sm text-[#53685f]">
        Don't have an account?{" "}
        <Link href="/signup" className="font-bold text-[#1d6f42] hover:underline">Sign up</Link>
      </p>
    </form>
  );
}
