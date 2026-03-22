"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [stars, setStars] = useState<any[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 120 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 0.3 + 0.1,
    }));
    setStars(generated);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStars((prev) =>
        prev.map((s) => ({
          ...s,
          y: s.y - s.speed,
          ...(s.y < 0 && {
            y: window.innerHeight,
            x: Math.random() * window.innerWidth,
          }),
        }))
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen bg-black text-green-400 overflow-hidden font-mono">

      {/* MATRIX BACKGROUND */}
      <div className="absolute inset-0 opacity-10 text-green-500 text-xs leading-3 whitespace-pre pointer-events-none">
        {Array(200).fill("1010101010101010101010101010101010101010").join("\n")}
      </div>

      {/* STARS */}
      {stars.map((s, i) => (
        <div
          key={i}
          className="fixed bg-white rounded-full"
          style={{
            left: s.x,
            top: s.y,
            width: s.size,
            height: s.size,
            opacity: 0.8,
          }}
        />
      ))}

      {/* TOP LEFT */}
      <div className="absolute top-6 left-6 space-y-3">
        <button className="bg-green-500 text-black px-4 py-1 rounded-md text-sm">
          🌙 Dark Mode
        </button>

        <button className="bg-green-500 text-black px-4 py-1 rounded-md text-sm">
          ABOUT ME
        </button>
      </div>

      {/* PROFILE */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">

        <h1 className="text-4xl md:text-6xl font-bold tracking-wide drop-shadow-[0_0_10px_#00ff00]">
          Axiom
        </h1>

        <p className="mt-2 text-blue-400">
          discord: axiomkrd
        </p>

        <p className="mt-6 text-2xl text-green-400">
          coder | experimental | builder
        </p>

        {/* BUTTON STACK */}
        <div className="flex flex-col gap-4 mt-10 w-[280px]">

          {/* DISCORD */}
          <a
            href="https://discord.gg/jPsWy2gsRj"
            target="_blank"
            className="bg-indigo-500 hover:scale-105 transition text-white py-3 rounded-md flex items-center justify-center gap-2"
          >
            🎮 Axiom's Discord Server
          </a>

          {/* YOUTUBE */}
          <a
            href="https://www.youtube.com/@EnvAxiom"
            target="_blank"
            className="bg-red-500 hover:scale-105 transition text-white py-3 rounded-md flex items-center justify-center gap-2"
          >
            ▶ Axiom's YouTube Channel
          </a>

          {/* EXTRA */}
          <button className="bg-gray-700 hover:scale-105 transition py-3 rounded-md">
            ◻ Axiom's Projects
          </button>

          <button className="bg-gray-800 hover:scale-105 transition py-3 rounded-md">
            ◉ Axiom's Experiments
          </button>

        </div>

      </div>

      {/* BOTTOM PLAYER MOCK */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-green-900/30 backdrop-blur-md px-6 py-3 rounded-xl flex items-center gap-4 border border-green-500/20">
        <span>▶</span>
        <span className="text-sm">0:00 / 2:42</span>
        <span className="text-sm">50%</span>
      </div>

    </main>
  );
}