"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [orbs, setOrbs] = useState<any[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 60 }).map(() => ({
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

  return (
    <main className="relative min-h-screen bg-[#05070f] text-white overflow-hidden">

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

      {/* GRADIENT GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(0,150,255,0.15),transparent_60%)]" />

      {/* NAV */}
      <div className="relative z-10 flex justify-between items-center px-8 py-6 max-w-6xl mx-auto">
        <h1 className="font-semibold text-lg tracking-wide">AXIOM</h1>
        <div className="flex gap-6 text-sm text-gray-400">
          <span>Projects</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </div>

      {/* HERO */}
      <section className="relative z-10 max-w-6xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
        <div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            I build things<br />
            <span className="text-cyan-400">that feel right.</span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-md">
            Experimental coding, smooth interfaces, and clean digital experiences.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="https://discord.gg/jPsWy2gsRj"
              target="_blank"
              className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg text-black font-semibold hover:scale-105 transition"
            >
              Join Discord
            </a>

            <a
              href="https://www.youtube.com/@EnvAxiom"
              target="_blank"
              className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/10 transition"
            >
              YouTube
            </a>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4">What I do</h3>

          <ul className="text-gray-400 space-y-2">
            <li>• Web projects</li>
            <li>• UI / UX experiments</li>
            <li>• Automation & tools</li>
            <li>• Random builds</li>
          </ul>
        </div>

      </section>

      {/* SERVICES */}
      <section className="relative z-10 max-w-6xl mx-auto px-8 py-20">

        <h2 className="text-3xl font-semibold mb-10">What I build</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-lg hover:scale-[1.02] transition">
            <h3 className="text-lg font-semibold mb-2">Websites</h3>
            <p className="text-gray-400 text-sm">
              Clean, fast, and modern designs.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-lg hover:scale-[1.02] transition">
            <h3 className="text-lg font-semibold mb-2">Tools</h3>
            <p className="text-gray-400 text-sm">
              Automation and experimental builds.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-lg hover:scale-[1.02] transition">
            <h3 className="text-lg font-semibold mb-2">Experiments</h3>
            <p className="text-gray-400 text-sm">
              Random ideas turned into reality.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}