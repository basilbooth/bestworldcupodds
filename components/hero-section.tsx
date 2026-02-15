"use client";

import { motion } from "framer-motion";
import { AnimatedGradientText } from "./animated-gradient-text";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-green-500/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-sm"
        >
          ⚽ FIFA World Cup 2026 • USA • Canada • Mexico
        </motion.div>

        <AnimatedGradientText className="mb-6 text-5xl font-bold tracking-tight sm:text-7xl">
          Best World Cup Odds
        </AnimatedGradientText>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-10 text-lg leading-8 text-white/70 sm:text-xl"
        >
          Compare odds from top bookmakers in real-time. Find the best value for every match
          of the 2026 FIFA World Cup.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#odds"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-green-500 to-blue-600 px-8 font-medium text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/50"
          >
            <span className="relative z-10">View Odds Comparison</span>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-600 to-blue-700 opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
          <a
            href="#matches"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 font-medium text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
          >
            Upcoming Matches
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 flex items-center justify-center gap-8 text-sm text-white/50"
        >
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span>64 Matches</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-blue-500" />
            <span>32 Teams</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-purple-500" />
            <span>Live Odds</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
