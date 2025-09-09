"use client";

import { Button } from "@/components/ui/button";
import { APP_URL } from "@/lib/config";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-gradient-to-r from-slate-900/70 via-slate-800/60 to-slate-900/70 backdrop-blur-md supports-[backdrop-filter]:bg-slate-900/50">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <img
            src="/viziaa.png"
            alt="Viziaa Logo"
            className="w-10 h-10 rounded-full object-cover shadow-md group-hover:scale-110 transition-transform duration-300"
          />
          <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:opacity-90 transition">
            VIZIAA
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="http://localhost:3000/auth/login">
            <Button variant="outline">Login</Button>
          </a>

          <a href="http://localhost:3000/auth/login">
            <Button>Get Started</Button>
          </a>
        </div>

        {/* Mobile (simple) */}
        <div className="md:hidden flex items-center gap-3">
          <a href="http://localhost:3000/auth/login">
            <Button variant="outline" size="sm">
              Login
            </Button>
          </a>
          <a href="http://localhost:3000/auth/register">
            <Button size="sm">Start</Button>
          </a>
        </div>
      </div>
    </nav>
  );
}
