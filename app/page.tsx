"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen overflow-hidden">
      
      {/* HERO */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        
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
          transition={{ delay: 0.6 }}
          className="mt-6 text-gray-400 text-lg"
        >
          Built by EnvAxiom
        </motion.p>

      </section>

      {/* SCROLL TEXT */}
      <section className="h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-semibold text-center"
        >
          I build clean.<br />
          I build smooth.<br />
          I build different.
        </motion.div>
      </section>

      {/* CTA */}
      <section className="h-screen flex items-center justify-center">
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