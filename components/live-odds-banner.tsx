"use client";

import { motion } from "framer-motion";

export function LiveOddsBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="border-b border-green-500/20 bg-gradient-to-r from-green-500/10 to-blue-500/10 px-6 py-3"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-center gap-3 text-center">
          <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-green-400" />
          <p className="text-sm font-medium text-white">
            🚀 <strong>Live odds launching February 18, 2026</strong> — Real-time updates from
            DraftKings, FanDuel, Bet365, Cloudbet & more
          </p>
          <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-green-400" />
        </div>
      </div>
    </motion.div>
  );
}
