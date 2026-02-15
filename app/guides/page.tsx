import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "World Cup Betting Guides 2026 - Expert Strategies & Tips",
  description: "Comprehensive betting guides for the 2026 FIFA World Cup. Learn strategies, understand markets, and maximize your betting value.",
  keywords: ["world cup betting guide", "betting strategies", "how to bet world cup"],
};

const guides = [
  {
    title: "How to Bet on the World Cup",
    slug: "how-to-bet",
    description: "Complete beginner's guide covering odds formats, bet types, bankroll management, and when to place your bets.",
    emoji: "📚",
    difficulty: "Beginner",
    readTime: "10 min",
  },
  {
    title: "Best World Cup Betting Sites 2026",
    slug: "best-betting-sites",
    description: "In-depth comparison of 8 bookmakers including DraftKings, FanDuel, Bet365, and crypto options like Cloudbet and Stake.",
    emoji: "⭐",
    difficulty: "Beginner",
    readTime: "15 min",
  },
  {
    title: "Top Scorer Betting Guide",
    slug: "top-scorer-betting",
    description: "How to bet on the Golden Boot market. Analysis of favorites, dark horses, each-way betting, and common mistakes to avoid.",
    emoji: "⚽",
    difficulty: "Intermediate",
    readTime: "12 min",
  },
  {
    title: "Accumulator Betting Strategy",
    slug: "accumulator-betting",
    description: "Build winning accumulators (parlays) for the World Cup. Smart stacking strategies, risk management, and acca insurance.",
    emoji: "📊",
    difficulty: "Intermediate",
    readTime: "12 min",
  },
  {
    title: "In-Play (Live) Betting Guide",
    slug: "in-play-betting",
    description: "Master live betting during matches. When to bet, how to read momentum, cash-out strategies, and best live markets.",
    emoji: "⚡",
    difficulty: "Advanced",
    readTime: "10 min",
  },
];

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            World Cup Betting Guides
          </h1>
          <p className="text-lg text-white/70">
            Expert strategies, tips, and analysis to help you bet smarter
          </p>
        </div>

        {/* Featured Guide */}
        <div className="mb-12">
          <div className="rounded-2xl border border-green-500/20 bg-gradient-to-br from-green-500/10 to-blue-500/10 p-8">
            <div className="mb-4 flex items-center gap-2">
              <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm font-medium text-green-400">
                Featured
              </span>
              <span className="text-sm text-white/50">Start Here</span>
            </div>
            <Link
              href="/guides/how-to-bet"
              className="group"
            >
              <h2 className="mb-4 text-3xl font-bold text-white group-hover:text-green-400 transition-colors">
                📚 How to Bet on the 2026 World Cup
              </h2>
              <p className="mb-6 text-lg text-white/70">
                New to World Cup betting? Start with our comprehensive beginner's guide covering
                everything from odds formats to bankroll management.
              </p>
              <div className="inline-flex items-center gap-2 text-green-400 font-medium group-hover:gap-3 transition-all">
                Read Guide →
              </div>
            </Link>
          </div>
        </div>

        {/* All Guides */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-white">All Betting Guides</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-800/50 p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:shadow-2xl"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-green-500/0 to-blue-500/0 opacity-0 transition-opacity group-hover:from-green-500/10 group-hover:to-blue-500/10 group-hover:opacity-100" />
                
                <div className="mb-4 text-5xl">{guide.emoji}</div>
                
                <h3 className="mb-3 text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                  {guide.title}
                </h3>
                
                <p className="mb-4 text-sm text-white/70">
                  {guide.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-white/50">
                    <span className="rounded-full bg-white/5 px-2 py-1">
                      {guide.difficulty}
                    </span>
                    <span>{guide.readTime} read</span>
                  </div>
                  <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                    Read →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Strategy Tips */}
        <div className="mb-12 rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-2xl font-bold text-white">
            Quick Betting Tips for World Cup 2026
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex gap-3">
              <span className="text-2xl">💡</span>
              <div>
                <h3 className="mb-1 font-semibold text-white">Shop for Lines</h3>
                <p className="text-sm text-white/70">
                  Compare odds across multiple books. A 0.10 difference adds up over 64 matches.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <h3 className="mb-1 font-semibold text-white">Specialize Early</h3>
                <p className="text-sm text-white/70">
                  Focus on specific markets or teams. Depth beats breadth in tournament betting.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <h3 className="mb-1 font-semibold text-white">Bankroll Discipline</h3>
                <p className="text-sm text-white/70">
                  Never bet more than 2-5% of your bankroll on a single match. Protect your capital.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">⏰</span>
              <div>
                <h3 className="mb-1 font-semibold text-white">Timing Matters</h3>
                <p className="text-sm text-white/70">
                  Early odds often offer value. Late bettors pay the juice on public favorites.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-green-500/10 to-blue-500/10 p-8 text-center">
          <h3 className="mb-4 text-2xl font-bold text-white">
            Ready to Start Betting?
          </h3>
          <p className="mb-6 text-lg text-white/70">
            Compare odds across all bookmakers and find the best value
          </p>
          <Link
            href="/#odds"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-green-500 to-blue-600 px-8 py-3 font-medium text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/30"
          >
            View Odds Comparison
          </Link>
        </div>
      </div>
    </div>
  );
}
