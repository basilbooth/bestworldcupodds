"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">⚽</span>
            <span className="text-xl font-bold text-white">
              Best<span className="text-green-400">WorldCup</span>Odds
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/#odds"
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              Odds
            </Link>
            <div className="group relative">
              <button className="text-sm font-medium text-white/70 transition-colors hover:text-white">
                Teams ▾
              </button>
              <div className="absolute left-0 top-full hidden pt-2 group-hover:block">
                <div className="w-48 rounded-lg border border-white/10 bg-slate-900 p-2 shadow-xl">
                  <Link
                    href="/teams/usa"
                    className="block rounded px-4 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    🇺🇸 USA
                  </Link>
                  <Link
                    href="/teams/mexico"
                    className="block rounded px-4 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    🇲🇽 Mexico
                  </Link>
                  <Link
                    href="/teams/argentina"
                    className="block rounded px-4 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    🇦🇷 Argentina
                  </Link>
                  <Link
                    href="/teams/brazil"
                    className="block rounded px-4 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    🇧🇷 Brazil
                  </Link>
                  <Link
                    href="/teams/england"
                    className="block rounded px-4 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    🏴󠁧󠁢󠁥󠁮󠁧󠁿 England
                  </Link>
                  <Link
                    href="/teams/france"
                    className="block rounded px-4 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    🇫🇷 France
                  </Link>
                  <Link
                    href="/teams/spain"
                    className="block rounded px-4 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    🇪🇸 Spain
                  </Link>
                </div>
              </div>
            </div>
            <div className="group relative">
              <button className="text-sm font-medium text-white/70 transition-colors hover:text-white">
                Guides ▾
              </button>
              <div className="absolute left-0 top-full hidden pt-2 group-hover:block">
                <div className="w-56 rounded-lg border border-white/10 bg-slate-900 p-2 shadow-xl">
                  <Link
                    href="/guides/how-to-bet"
                    className="block rounded px-4 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    How to Bet on World Cup
                  </Link>
                  <Link
                    href="/guides/best-betting-sites"
                    className="block rounded px-4 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    Best Betting Sites
                  </Link>
                  <Link
                    href="/guides/top-scorer-betting"
                    className="block rounded px-4 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    Top Scorer Betting
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href="/#matches"
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              Matches
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/#odds"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-green-500 to-blue-600 px-4 py-2 text-sm font-medium text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/30"
            >
              Compare Odds
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden md:hidden"
            >
              <div className="space-y-1 pb-4">
                <Link
                  href="/#odds"
                  className="block rounded px-4 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Odds
                </Link>
                <div className="px-4 py-2 text-xs font-semibold uppercase text-white/50">
                  Teams
                </div>
                <Link
                  href="/teams/usa"
                  className="block rounded px-4 py-2 pl-8 text-sm text-white/70 hover:bg-white/5 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  🇺🇸 USA
                </Link>
                <Link
                  href="/teams/mexico"
                  className="block rounded px-4 py-2 pl-8 text-sm text-white/70 hover:bg-white/5 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  🇲🇽 Mexico
                </Link>
                <Link
                  href="/teams/argentina"
                  className="block rounded px-4 py-2 pl-8 text-sm text-white/70 hover:bg-white/5 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  🇦🇷 Argentina
                </Link>
                <Link
                  href="/teams/brazil"
                  className="block rounded px-4 py-2 pl-8 text-sm text-white/70 hover:bg-white/5 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  🇧🇷 Brazil
                </Link>
                <Link
                  href="/teams/england"
                  className="block rounded px-4 py-2 pl-8 text-sm text-white/70 hover:bg-white/5 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  🏴󠁧󠁢󠁥󠁮󠁧󠁿 England
                </Link>
                <Link
                  href="/teams/france"
                  className="block rounded px-4 py-2 pl-8 text-sm text-white/70 hover:bg-white/5 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  🇫🇷 France
                </Link>
                <Link
                  href="/teams/spain"
                  className="block rounded px-4 py-2 pl-8 text-sm text-white/70 hover:bg-white/5 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  🇪🇸 Spain
                </Link>
                <div className="px-4 py-2 text-xs font-semibold uppercase text-white/50">
                  Guides
                </div>
                <Link
                  href="/guides/how-to-bet"
                  className="block rounded px-4 py-2 pl-8 text-sm text-white/70 hover:bg-white/5 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  How to Bet
                </Link>
                <Link
                  href="/guides/best-betting-sites"
                  className="block rounded px-4 py-2 pl-8 text-sm text-white/70 hover:bg-white/5 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Best Sites
                </Link>
                <Link
                  href="/guides/top-scorer-betting"
                  className="block rounded px-4 py-2 pl-8 text-sm text-white/70 hover:bg-white/5 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Top Scorer
                </Link>
                <Link
                  href="/#matches"
                  className="block rounded px-4 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Matches
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
