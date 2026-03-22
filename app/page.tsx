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
    <main className="relative min-h-screen bg-black overflow-hidden text-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent opacity-40" />

      {/* FLOATING ORBS */}
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

      {/* VIGNETTE */}
      <div className="pointer-events-none absolute inset-0 bg-black/50" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center px-6">

        {/* HERO */}
        <section className="flex flex-col items-center justify-center min-h-screen text-center">
          <h1 className="text-[90px] md:text-[130px] font-semibold tracking-tight">
            Axiom
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            I code random things.
          </p>
        </section>

        {/* INFO GRID */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full py-20">

          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">About Me</h3>
            <p className="text-gray-400 mt-2">
              I build experimental projects, explore ideas, and create smooth digital experiences.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">Focus</h3>
            <p className="text-gray-400 mt-2">
              Performance, simplicity, and making things feel right.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">Style</h3>
            <p className="text-gray-400 mt-2">
              Smooth. Fast. Experimental. Always improving.
            </p>
          </div>

        </section>

        {/* BUTTONS */}
        <section className="flex gap-6 pb-32 flex-wrap justify-center">

          <a
            href="https://discord.gg/jPsWy2gsRj"
            target="_blank"
            className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition"
          >
            Join Discord
          </a>

          <a
            href="https://www.youtube.com/@EnvAxiom"
            target="_blank"
            className="px-8 py-3 border border-white/20 rounded-full hover:bg-white/10 transition"
          >
            YouTube
          </a>

        </section>

      </div>

    </main>
  );
}