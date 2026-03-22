"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [orbs, setOrbs] = useState<any[]>([]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const generated = Array.from({ length: 50 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 0.4 + 0.1,
    }));
    setOrbs(generated);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrbs((prev) =>
        prev.map((orb) => ({
          ...orb,
          y: orb.y - orb.speed,
          x: orb.x + Math.sin(orb.y * 0.01) * 0.6,
          ...(orb.y < 0 && {
            y: window.innerHeight,
            x: Math.random() * window.innerWidth,
          }),
        }))
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* ORBS */}
      {orbs.map((orb, i) => (
        <div
          key={i}
          className="fixed rounded-full bg-white opacity-30 blur-md pointer-events-none"
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
        className="fixed w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none"
        style={{
          left: mouse.x - 160,
          top: mouse.y - 160,
        }}
      />

      {/* HERO */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 min-h-screen">

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-8xl md:text-[120px] font-bold tracking-tight"
        >
          Axiom
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-xl text-gray-400 max-w-xl"
        >
          I code random things.
        </motion.p>

      </section>

      {/* ABOUT */}
      <section className="relative z-10 flex items-center justify-center px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl text-center max-w-4xl leading-tight"
        >
          I don’t follow templates.  
          <br />
          I build what I want.
        </motion.div>
      </section>

      {/* STYLE */}
      <section className="relative z-10 flex items-center justify-center px-6 py-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-4xl text-center text-gray-400 max-w-3xl"
        >
          Smooth. Fast. Experimental.  
          <br />
          That’s the standard.
        </motion.div>
      </section>

      {/* FINAL */}
      <section className="relative z-10 flex items-center justify-center py-40">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Let’s build something different.
        </motion.h2>
      </section>

    </main>
  );
}