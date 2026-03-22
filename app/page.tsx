"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [orbs, setOrbs] = useState<any[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 80 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.25 + 0.05,
      opacity: Math.random() * 0.5 + 0.2,
    }));
    setOrbs(generated);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrbs((prev) =>
        prev.map((orb) => ({
          ...orb,
          y: orb.y - orb.speed,
          x: orb.x + Math.sin(orb.y * 0.01) * 0.4,
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
    <main className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center">

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

      {/* CONTENT */}
      <div className="relative z-10 text-center flex flex-col items-center">

        {/* NAME */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-wide">
          Axiom
        </h1>

        <p className="mt-2 text-gray-400">
          discord: axiomkrd
        </p>

        <p className="mt-6 text-xl text-gray-300">
          coder | experimental | builder
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col gap-4 mt-10 w-[280px]">

          {/* DISCORD */}
          <a
            href="https://discord.gg/jPsWy2gsRj"
            target="_blank"
            className="bg-indigo-500 hover:scale-105 transition text-white py-3 rounded-md flex items-center justify-center gap-2 shadow-lg"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.369A19.791 19.791 0 0 0 16.885 3c-.161.29-.349.676-.478.978a18.27 18.27 0 0 0-5.814 0 9.955 9.955 0 0 0-.485-.978 19.736 19.736 0 0 0-3.436 1.369C3.773 9.045 2.98 13.579 3.36 18.049a19.9 19.9 0 0 0 5.993 3.03Z"/>
            </svg>
            Discord Server
          </a>

          {/* YOUTUBE */}
          <a
            href="https://www.youtube.com/@EnvAxiom"
            target="_blank"
            className="bg-red-500 hover:scale-105 transition text-white py-3 rounded-md flex items-center justify-center gap-2 shadow-lg"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.5 6.2a2.9 2.9 0 0 0-2-2.05C19.8 3.6 12 3.6 12 3.6s-7.8 0-9.5.55a2.9 2.9 0 0 0-2 2.05A30.4 30.4 0 0 0 0 12a30.4 30.4 0 0 0 .5 5.8 2.9 2.9 0 0 0 2 2.05Z"/>
            </svg>
            YouTube Channel
          </a>

          {/* EXTRA BUTTONS */}
          <button className="bg-white/10 hover:bg-white/20 transition py-3 rounded-md">
            Projects
          </button>

          <button className="bg-white/10 hover:bg-white/20 transition py-3 rounded-md">
            Experiments
          </button>

        </div>

      </div>

    </main>
  );
}