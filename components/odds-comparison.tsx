"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Bookmaker = {
  name: string;
  logo: string;
  homeOdds: number;
  drawOdds: number;
  awayOdds: number;
  affiliateLink: string;
};

type Match = {
  id: string;
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
  bookmakers: Bookmaker[];
};

// Mock data - will be replaced with real API data
const mockMatch: Match = {
  id: "usa-mex-opening",
  homeTeam: "USA",
  awayTeam: "Mexico",
  date: "Jun 11, 2026",
  time: "20:00 ET",
  bookmakers: [
    {
      name: "DraftKings",
      logo: "DK",
      homeOdds: 2.10,
      drawOdds: 3.40,
      awayOdds: 3.75,
      affiliateLink: "#",
    },
    {
      name: "FanDuel",
      logo: "FD",
      homeOdds: 2.15,
      drawOdds: 3.30,
      awayOdds: 3.60,
      affiliateLink: "#",
    },
    {
      name: "BetMGM",
      logo: "BM",
      homeOdds: 2.05,
      drawOdds: 3.45,
      awayOdds: 3.80,
      affiliateLink: "#",
    },
    {
      name: "Cloudbet",
      logo: "CB",
      homeOdds: 2.12,
      drawOdds: 3.35,
      awayOdds: 3.70,
      affiliateLink: "#",
    },
    {
      name: "Stake",
      logo: "ST",
      homeOdds: 2.08,
      drawOdds: 3.38,
      awayOdds: 3.85,
      affiliateLink: "#",
    },
  ],
};

function getBestOdds(bookmakers: Bookmaker[]): { home: number; draw: number; away: number } {
  return {
    home: Math.max(...bookmakers.map((b) => b.homeOdds)),
    draw: Math.max(...bookmakers.map((b) => b.drawOdds)),
    away: Math.max(...bookmakers.map((b) => b.awayOdds)),
  };
}

export function OddsComparison() {
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);
  const bestOdds = getBestOdds(mockMatch.bookmakers);

  return (
    <section id="odds" className="px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white">
            Live Odds Comparison
          </h2>
          <p className="text-lg text-white/70">
            Best odds highlighted in green • Updated every 15 minutes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm"
        >
          {/* Match Header */}
          <div className="border-b border-white/10 bg-white/5 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-white">
                  {mockMatch.homeTeam} vs {mockMatch.awayTeam}
                </span>
                <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm font-medium text-green-400">
                  Opening Match
                </span>
              </div>
              <div className="text-right">
                <div className="text-sm text-white/50">{mockMatch.date}</div>
                <div className="text-lg font-semibold text-white">{mockMatch.time}</div>
              </div>
            </div>
          </div>

          {/* Odds Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 text-left">
                  <th className="px-6 py-4 text-sm font-semibold text-white/70">
                    Bookmaker
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-white/70">
                    {mockMatch.homeTeam}
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-white/70">
                    Draw
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-white/70">
                    {mockMatch.awayTeam}
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-white/70">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {mockMatch.bookmakers.map((bookmaker, index) => (
                  <motion.tr
                    key={bookmaker.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredRow(bookmaker.name)}
                    onMouseLeave={() => setHoveredRow(null)}
                    className={`border-b border-white/5 transition-colors ${
                      hoveredRow === bookmaker.name ? "bg-white/5" : ""
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 font-bold text-white">
                          {bookmaker.logo}
                        </div>
                        <span className="font-medium text-white">
                          {bookmaker.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span
                        className={`inline-block rounded-lg px-4 py-2 font-mono text-lg font-semibold ${
                          bookmaker.homeOdds === bestOdds.home
                            ? "bg-green-500/20 text-green-400 ring-1 ring-green-500/30"
                            : "bg-white/5 text-white"
                        }`}
                      >
                        {bookmaker.homeOdds.toFixed(2)}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span
                        className={`inline-block rounded-lg px-4 py-2 font-mono text-lg font-semibold ${
                          bookmaker.drawOdds === bestOdds.draw
                            ? "bg-green-500/20 text-green-400 ring-1 ring-green-500/30"
                            : "bg-white/5 text-white"
                        }`}
                      >
                        {bookmaker.drawOdds.toFixed(2)}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span
                        className={`inline-block rounded-lg px-4 py-2 font-mono text-lg font-semibold ${
                          bookmaker.awayOdds === bestOdds.away
                            ? "bg-green-500/20 text-green-400 ring-1 ring-green-500/30"
                            : "bg-white/5 text-white"
                        }`}
                      >
                        {bookmaker.awayOdds.toFixed(2)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <a
                        href={bookmaker.affiliateLink}
                        className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-green-500 to-blue-600 px-4 py-2 text-sm font-medium text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/30"
                      >
                        Bet Now →
                      </a>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="border-t border-white/10 bg-white/5 px-6 py-3 text-center text-sm text-white/50">
            Last updated: 2 minutes ago • Odds subject to change
          </div>
        </motion.div>
      </div>
    </section>
  );
}
