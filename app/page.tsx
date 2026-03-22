"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [orbs, setOrbs] = useState<any[]>([]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // ORBS
  useEffect(() => {
    const generated = Array.from({ length: 70 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.2 + 0.05,
      opacity: Math.random() * 0.4 + 0.1,
    }));
    setOrbs(generated);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrbs((prev) =>
        prev.map((orb) => ({
          ...orb,
          y: orb.y - orb.speed,
          x: orb.x + Math.sin(orb.y * 0.01) * 0.3,
          ...(orb.y < 0 && {
            y: window.innerHeight,
            x: Math.random() * window.innerWidth,
          }),
        }))
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  // MOUSE TRACK
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#04060d] text-white overflow-hidden">

      {/* NOISE OVERLAY (cinematic grain) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* ORBS */}
      {orbs.map((orb, i) => (
        <div
          key={i}
          className="fixed rounded-full bg-white blur-[6px] pointer-events-none"
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            opacity: orb.opacity,
          }}
        />
      ))}

      {/* CURSOR LIGHT */}
      <div
        className="fixed w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none"
        style={{
          left: mouse.x - 250,
          top: mouse.y - 250,
        }}
      />

      {/* NAV */}
      <div className="relative z-10 flex justify-between items-center px-8 py-6 max-w-6xl mx-auto">
        <h1 className="font-semibold text-lg tracking-wide">AXIOM</h1>
        <div className="flex gap-6 text-sm text-gray-400">
          <span className="hover:text-white transition cursor-pointer">Projects</span>
          <span className="hover:text-white transition cursor-pointer">About</span>
          <span className="hover:text-white transition cursor-pointer">Contact</span>
        </div>
      </div>

      {/* HERO */}
      <section className="relative z-10 max-w-6xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-16 items-center">

        <div>
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            I build things <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              that feel alive.
            </span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-md">
            Experimental coding, smooth interfaces, and clean digital experiences.
          </p>

          {/* PREMIUM BUTTONS */}
          <div className="flex gap-4 mt-10">

            <a
              href="https://discord.gg/jPsWy2gsRj"
              target="_blank"
              className="relative group px-8 py-3 rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-80 group-hover:opacity-100 transition" />
              <div className="relative z-10 text-black font-semibold">
                Join Discord
              </div>
            </a>

            <a
              href="https://www.youtube.com/@EnvAxiom"
              target="_blank"
              className="relative group px-8 py-3 rounded-lg border border-white/20 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition" />
              <div className="relative z-10 font-medium">
                YouTube
              </div>
            </a>

          </div>
        </div>

        {/* HERO CARD */}
        <div className="relative group">

          {/* glow border */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl blur opacity-40 group-hover:opacity-80 transition" />

          <div className="relative bg-[#0a0d18]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4">What I do</h3>

            <ul className="text-gray-400 space-y-2">
              <li>• Web projects</li>
              <li>• UI / UX experiments</li>
              <li>• Automation tools</li>
              <li>• Random builds</li>
            </ul>
          </div>
        </div>

      </section>

      {/* GRID */}
      <section className="relative z-10 max-w-6xl mx-auto px-8 py-20">

        <h2 className="text-3xl font-semibold mb-12">Capabilities</h2>

        <div className="grid md:grid-cols-3 gap-8">

          {["Websites", "Tools", "Experiments"].map((title, i) => (
            <div key={i} className="relative group">

              {/* glow border */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-70 transition" />

              <div className="relative bg-[#0a0d18]/80 border border-white/10 backdrop-blur-xl rounded-xl p-6 transition group-hover:scale-[1.03]">
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-400 text-sm">
                  High-quality builds with smooth performance and modern design.
                </p>
              </div>

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}