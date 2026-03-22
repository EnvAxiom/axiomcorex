"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [orbs, setOrbs] = useState<any[]>([]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Generate orbs
  useEffect(() => {
    const generated = Array.from({ length: 30 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 5 + 2,
      speed: Math.random() * 0.3 + 0.1,
    }));
    setOrbs(generated);
  }, []);

  // Animate orbs
  useEffect(() => {
    const interval = setInterval(() => {
      setOrbs((prev) =>
        prev.map((orb) => ({
          ...orb,
          y: orb.y - orb.speed,
          x: orb.x + Math.sin(orb.y * 0.01) * 0.5,
          ...(orb.y < 0 && {
            y: window.innerHeight,
            x: Math.random() * window.innerWidth,
          }),
        }))
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  // Mouse glow
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* FLOATING ORBS */}
      {orbs.map((orb, i) => (
        <div
          key={i}
          className="fixed rounded-full bg-white opacity-40 blur-md pointer-events-none"
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
          }}
        />
      ))}

      {/* CURSOR GLOW */}
      <div
        className="fixed w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"
        style={{
          left: mouse.x - 120,
          top: mouse.y - 120,
        }}
      />

      {/* HERO */}
      <section className="relative z-10 h-screen flex flex-col items-center justify-center text-center px-6">
        
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-bold tracking-tight"
        >
          AxiomCorex
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-gray-400 text-lg max-w-xl"
        >
          Built by EnvAxiom. I design smooth, fast, and clean digital experiences.
        </motion.p>

      </section>

      {/* SECTION */}
      <section className="relative z-10 h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl text-center max-w-3xl"
        >
          I focus on performance, simplicity, and making things feel right.
        </motion.div>
      </section>

      {/* FINAL */}
      <section className="relative z-10 h-screen flex items-center justify-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Let’s build something.
        </motion.h2>
      </section>

    </main>
  );
}