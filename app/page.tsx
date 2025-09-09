"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { APP_URL } from "@/lib/config";
import { motion } from "framer-motion";

export default function LandingPage() {
  const circles = [
    { size: 150, color: "bg-blue-500/70", duration: 6, x: 60, y: -40 },
    { size: 130, color: "bg-pink-500/70", duration: 5, x: -50, y: 60 },
    { size: 170, color: "bg-purple-500/70", duration: 7, x: 70, y: 80 },
    { size: 110, color: "bg-teal-400/70", duration: 4, x: -60, y: -70 },

    { size: 140, color: "bg-yellow-400/60", duration: 8, x: 90, y: -90 },
  ];

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />

        <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-10 items-center text-white">
          {/* Text Content */}
          <div className="space-y-6">
            <span className="inline-block text-xs md:text-sm px-3 py-1 rounded-full bg-white/10">
              Buat Resume Kamu Dengan Mudah
            </span>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              CV Builder & Platform Persiapan Karier
            </h1>

            <p className="text-white/80 text-base md:text-lg">
              Buat resume profesional dengan cepat. Pilih template modern, edit
              konten, dan ekspor ke PDF. Semuanya langsung di browser.
            </p>

            <div className="flex gap-4">
              <a href={`${APP_URL}`}>
                <Button size="lg">Get Started</Button>
              </a>
              <a href={`${APP_URL}/auth/login`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-black hover:opacity-80"
                >
                  Login
                </Button>
              </a>
            </div>
          </div>

          {/* Animated Circles */}
          <div className="relative w-full h-[400px] flex items-center justify-center">
            {circles.map((c, i) => (
              <motion.div
                key={i}
                className={`absolute rounded-full blur-xs ${c.color}`}
                style={{ width: c.size, height: c.size }}
                animate={{
                  x: [0, c.x, -c.x, 0],
                  y: [0, c.y, -c.y, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  repeat: Infinity,
                  duration: c.duration,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Kenapa Memilih Kami?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kami menyediakan tools yang memudahkan kamu membuat resume
            profesional, cepat, dan sesuai standar industri.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Editor Mudah",
              desc: "Atur setiap bagian resume dengan drag & drop sederhana. Tidak perlu keahlian desain.",
              icon: "📝",
            },
            {
              title: "Template Modern",
              desc: "Pilih dari berbagai template minimalis dan ATS-friendly agar resume kamu lolos sistem penyaringan otomatis.",
              icon: "🎨",
            },
            {
              title: "Export PDF Instan",
              desc: "Hanya dengan satu klik, hasil resume bisa langsung kamu download dalam format PDF berkualitas tinggi.",
              icon: "📄",
            },
            {
              title: "100% Online",
              desc: "Akses langsung melalui browser tanpa install aplikasi tambahan. Data tersimpan dengan aman.",
              icon: "☁️",
            },
            {
              title: "Kustomisasi Fleksibel",
              desc: "Ubah warna, font, tata letak sesuai preferensi kamu untuk hasil yang unik.",
              icon: "⚙️",
            },
            {
              title: "Gratis & Efisien",
              desc: "Nikmati layanan gratis dengan opsi premium untuk fitur tambahan yang lebih lengkap.",
              icon: "💡",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border bg-white/5 backdrop-blur-sm p-6 hover:shadow-xl transition"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-10 md:p-16 text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-6">Tentang Viziaa</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            Viziaa adalah platform{" "}
            <span className="font-semibold">CV Builder</span>
            modern yang dirancang untuk membantu para profesional, pelajar, dan
            fresh graduate membuat resume berkualitas tinggi dengan mudah.
          </p>
          <p className="text-white/80 leading-relaxed mb-4">
            Dengan antarmuka yang intuitif, template yang elegan, serta dukungan
            ekspor instan, Viziaa hadir sebagai solusi lengkap untuk
            mempersiapkan kariermu lebih cepat dan efektif.
          </p>
          <p className="text-white/80 leading-relaxed">
            Tidak hanya itu, kamu juga akan mendapatkan tips karier, panduan
            menulis CV, dan fitur tambahan yang mempermudah perjalananmu menuju
            dunia kerja.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-400 grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-white mb-3">Viziaa</h3>
            <p className="text-slate-400">
              Platform CV Builder & persiapan karier modern untuk masa depan
              yang lebih baik.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-3">Navigasi</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-white transition">
                  Fitur
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">
                  Tentang
                </a>
              </li>
              <li>
                <a
                  href={`${APP_URL}/auth/login`}
                  className="hover:text-white transition"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href={`${APP_URL}/auth/register`}
                  className="hover:text-white transition"
                >
                  Register
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-3">Kontak</h4>
            <ul className="space-y-2">
              <li>
                Email:{" "}
                <a
                  href="mailto:support@viziaa.com"
                  className="hover:text-white transition"
                >
                  support@viziaa.com
                </a>
              </li>
              <li>
                LinkedIn:{" "}
                <a href="#" className="hover:text-white transition">
                  linkedin.com/company/viziaa
                </a>
              </li>
              <li>
                Twitter:{" "}
                <a href="#" className="hover:text-white transition">
                  @viziaa
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 py-6 text-center text-slate-500 text-xs">
          © {new Date().getFullYear()} Viziaa. All rights reserved.
        </div>
      </footer>
    </>
  );
}
