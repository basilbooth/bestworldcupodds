"use client";

import { motion } from "framer-motion";

type UpcomingMatch = {
  id: string;
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
  venue: string;
  bestHomeOdds: number;
  bestDrawOdds: number;
  bestAwayOdds: number;
};

const mockMatches: UpcomingMatch[] = [
  {
    id: "1",
    homeTeam: "USA",
    awayTeam: "Mexico",
    date: "Jun 11",
    time: "20:00 ET",
    venue: "SoFi Stadium, Los Angeles",
    bestHomeOdds: 2.15,
    bestDrawOdds: 3.45,
    bestAwayOdds: 3.85,
  },
  {
    id: "2",
    homeTeam: "Canada",
    awayTeam: "Netherlands",
    date: "Jun 12",
    time: "17:00 ET",
    venue: "BMO Field, Toronto",
    bestHomeOdds: 4.20,
    bestDrawOdds: 3.60,
    bestAwayOdds: 1.85,
  },
  {
    id: "3",
    homeTeam: "Argentina",
    awayTeam: "Saudi Arabia",
    date: "Jun 12",
    time: "14:00 ET",
    venue: "MetLife Stadium, New York",
    bestHomeOdds: 1.25,
    bestDrawOdds: 6.50,
    bestAwayOdds: 12.00,
  },
  {
    id: "4",
    homeTeam: "Brazil",
    awayTeam: "Serbia",
    date: "Jun 13",
    time: "20:00 ET",
    venue: "Lumen Field, Seattle",
    bestHomeOdds: 1.45,
    bestDrawOdds: 4.80,
    bestAwayOdds: 7.50,
  },
];

export function UpcomingMatches() {
  return (
    <section id="matches" className="px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white">
            Upcoming Matches
          </h2>
          <p className="text-lg text-white/70">
            Group Stage • First Round
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {mockMatches.map((match, index) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-800/50 p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:shadow-2xl"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-green-500/0 to-blue-500/0 opacity-0 transition-opacity group-hover:from-green-500/10 group-hover:to-blue-500/10 group-hover:opacity-100" />

              <div className="mb-4 flex items-center justify-between">
                <div className="text-sm text-white/50">
                  {match.date} • {match.time}
                </div>
                <div className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-400">
                  Group Stage
                </div>
              </div>

              <div className="mb-4 flex items-center justify-between">
                <div className="flex-1 text-center">
                  <div className="mb-2 text-2xl font-bold text-white">
                    {match.homeTeam}
                  </div>
                  <div className="text-sm text-white/50">Home</div>
                </div>
                <div className="px-4 text-2xl font-bold text-white/30">vs</div>
                <div className="flex-1 text-center">
                  <div className="mb-2 text-2xl font-bold text-white">
                    {match.awayTeam}
                  </div>
                  <div className="text-sm text-white/50">Away</div>
                </div>
              </div>

              <div className="mb-4 text-center text-sm text-white/50">
                📍 {match.venue}
              </div>

              <div className="mb-4 grid grid-cols-3 gap-2">
                <div className="rounded-lg bg-white/5 p-3 text-center">
                  <div className="mb-1 text-xs text-white/50">Home</div>
                  <div className="font-mono text-lg font-semibold text-white">
                    {match.bestHomeOdds.toFixed(2)}
                  </div>
                </div>
                <div className="rounded-lg bg-white/5 p-3 text-center">
                  <div className="mb-1 text-xs text-white/50">Draw</div>
                  <div className="font-mono text-lg font-semibold text-white">
                    {match.bestDrawOdds.toFixed(2)}
                  </div>
                </div>
                <div className="rounded-lg bg-white/5 p-3 text-center">
                  <div className="mb-1 text-xs text-white/50">Away</div>
                  <div className="font-mono text-lg font-semibold text-white">
                    {match.bestAwayOdds.toFixed(2)}
                  </div>
                </div>
              </div>

              <a
                href={`/match/${match.id}`}
                className="block w-full rounded-lg bg-gradient-to-r from-green-500/10 to-blue-600/10 px-4 py-3 text-center font-medium text-white ring-1 ring-white/10 transition-all hover:from-green-500/20 hover:to-blue-600/20 hover:ring-white/20"
              >
                View All Odds →
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="/matches"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3 font-medium text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
          >
            View All 64 Matches
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
