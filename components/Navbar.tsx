"use client";

import { Button } from "@/components/ui/button";
import { APP_URL } from "@/lib/config";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          <img
            src="https://placehold.co/40"
            alt="logo"
            className="rounded-full"
          />
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href={`${APP_URL}/auth/login`}>
            <Button variant="outline">Login</Button>
          </a>
          <a href={`${APP_URL}`}>
            <Button>Get Started</Button>
          </a>
        </div>

        {/* Mobile (simple) */}
        <div className="md:hidden flex items-center gap-3">
          <a href={`${APP_URL}/auth/login`}>
            <Button variant="outline" size="sm">
              Login
            </Button>
          </a>
          <a href={`${APP_URL}/auth/register`}>
            <Button size="sm">Start</Button>
          </a>
        </div>
      </div>
    </nav>
  );
}
