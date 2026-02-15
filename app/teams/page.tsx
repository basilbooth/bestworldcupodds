import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Teams - 2026 World Cup Betting Odds & Analysis",
  description: "Complete betting analysis for all 32 teams in the 2026 FIFA World Cup. Tournament odds, key players, betting angles, and expert predictions.",
  keywords: ["world cup teams", "world cup odds by team", "team betting analysis"],
};

const teams = [
  { name: "USA", flag: "🇺🇸", slug: "usa", odds: "18.00", region: "CONCACAF" },
  { name: "Mexico", flag: "🇲🇽", slug: "mexico", odds: "25.00", region: "CONCACAF" },
  { name: "Canada", flag: "🇨🇦", slug: "canada", odds: "100.00", region: "CONCACAF" },
  { name: "Argentina", flag: "🇦🇷", slug: "argentina", odds: "5.50", region: "CONMEBOL" },
  { name: "Brazil", flag: "🇧🇷", slug: "brazil", odds: "6.50", region: "CONMEBOL" },
  { name: "Uruguay", flag: "🇺🇾", slug: "uruguay", odds: "30.00", region: "CONMEBOL" },
  { name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", slug: "england", odds: "7.00", region: "UEFA" },
  { name: "France", flag: "🇫🇷", slug: "france", odds: "6.00", region: "UEFA" },
  { name: "Spain", flag: "🇪🇸", slug: "spain", odds: "8.00", region: "UEFA" },
  { name: "Germany", flag: "🇩🇪", slug: "germany", odds: "9.00", region: "UEFA" },
  { name: "Portugal", flag: "🇵🇹", slug: "portugal", odds: "12.00", region: "UEFA" },
  { name: "Netherlands", flag: "🇳🇱", slug: "netherlands", odds: "15.00", region: "UEFA" },
  { name: "Belgium", flag: "🇧🇪", slug: "belgium", odds: "20.00", region: "UEFA" },
];

const regions = {
  CONCACAF: teams.filter(t => t.region === "CONCACAF"),
  CONMEBOL: teams.filter(t => t.region === "CONMEBOL"),
  UEFA: teams.filter(t => t.region === "UEFA"),
};

export default function TeamsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            2026 World Cup Teams
          </h1>
          <p className="text-lg text-white/70">
            Detailed betting analysis, odds, and key players for all teams
          </p>
        </div>

        {/* Favorites Section */}
        <div className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-white">Tournament Favorites</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {teams
              .filter(t => parseFloat(t.odds) <= 10)
              .sort((a, b) => parseFloat(a.odds) - parseFloat(b.odds))
              .map((team) => (
                <Link
                  key={team.slug}
                  href={`/teams/${team.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-800/50 p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:shadow-2xl"
                >
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-green-500/0 to-blue-500/0 opacity-0 transition-opacity group-hover:from-green-500/10 group-hover:to-blue-500/10 group-hover:opacity-100" />
                  
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{team.flag}</span>
                      <span className="text-2xl font-bold text-white">{team.name}</span>
                    </div>
                    <span className="text-sm text-white/50">{team.region}</span>
                  </div>

                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-sm text-white/50">To Win Tournament</div>
                      <div className="text-3xl font-bold text-green-400">{team.odds}</div>
                    </div>
                    <div className="text-sm font-medium text-white/70 group-hover:text-white">
                      View Analysis →
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* All Teams by Region */}
        <div className="space-y-12">
          {Object.entries(regions).map(([region, regionTeams]) => (
            <div key={region}>
              <h2 className="mb-6 text-2xl font-bold text-white">
                {region === "CONCACAF" && "North & Central America"}
                {region === "CONMEBOL" && "South America"}
                {region === "UEFA" && "Europe"}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {regionTeams.map((team) => (
                  <Link
                    key={team.slug}
                    href={`/teams/${team.slug}`}
                    className="group rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-white/20 hover:bg-white/10"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-3xl">{team.flag}</span>
                      <span className="text-lg font-semibold text-white">{team.name}</span>
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-xs text-white/50">Outright Odds</div>
                        <div className="text-xl font-bold text-green-400">{team.odds}</div>
                      </div>
                      <div className="text-sm text-white/50 group-hover:text-white">→</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-br from-green-500/10 to-blue-500/10 p-8 text-center">
          <h3 className="mb-4 text-2xl font-bold text-white">
            Compare Odds for All Teams
          </h3>
          <p className="mb-6 text-lg text-white/70">
            Find the best odds across 8+ bookmakers for every match
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
