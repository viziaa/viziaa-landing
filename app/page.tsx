import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { APP_URL } from "@/lib/config";

export default function LandingPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />
        <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-10 items-center text-white">
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

          <div className="relative">
            <div className="rounded-2xl border shadow-2xl overflow-hidden">
              <img
                src="https://placehold.co/600x400"
                alt="Resume preview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-primary/30 blur-2xl" />
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-blue-500/30 blur-2xl" />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Why choose us</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Editor Mudah",
              desc: "Tulis dan atur bagian resume tanpa ribet.",
            },
            {
              title: "Template Modern",
              desc: "Desain bersih dan ATS-friendly.",
            },
            {
              title: "Export PDF",
              desc: "Download hasil akhir dalam satu klik.",
            },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border p-6">
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-2xl border p-8 md:p-10">
          <h2 className="text-2xl font-bold mb-4">Tentang Produk</h2>
          <p className="text-muted-foreground">
            Landing Page ini adalah gerbang ke aplikasi Viziaa. Klik tombol di
            atas untuk mulai membuat akun dan membangun resume kamu.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-muted-foreground flex items-center justify-between">
          <p>© {new Date().getFullYear()} Viziaa</p>
          <div className="flex gap-4">
            <a href={`${APP_URL}/auth/login`} className="hover:underline">
              Login
            </a>
            <a href={`${APP_URL}/auth/register`} className="hover:underline">
              Register
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
