import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Belgium World Cup 2026 Odds & Betting Tips | Best World Cup Odds',
  description: 'Belgium World Cup 2026 betting odds, predictions, and analysis. Red Devils golden generation faces final dance. De Bruyne, Lukaku odds and betting angles.',
  keywords: 'Belgium World Cup 2026, Belgium betting odds, Red Devils, De Bruyne, Lukaku, World Cup predictions',
};

export default function BelgiumPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-900 via-neutral-900 to-black text-gray-100">
      {/* Header with Belgian flag colors accent */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-yellow-600/10 to-black/40" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-black via-yellow-500 to-red-600" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            href="/"
            className="inline-flex items-center text-yellow-500 hover:text-yellow-400 transition-colors mb-6 group"
          >
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all teams
          </Link>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-red-600 via-yellow-500 to-black rounded-lg flex items-center justify-center text-3xl md:text-4xl font-bold shadow-xl border border-yellow-600/30">
                  🇧🇪
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-red-600">
                    Belgium
                  </h1>
                  <p className="text-lg md:text-xl text-yellow-500 font-semibold mt-1">Red Devils</p>
                </div>
              </div>
              <p className="text-gray-400 text-lg max-w-2xl">
                Golden generation's final chapter - transition period looms for the Red Devils
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-950/50 to-black/50 border border-red-800/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-sm text-gray-400 mb-2">FIFA Ranking</div>
              <div className="text-4xl font-bold text-yellow-500">#5</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Odds Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Win Tournament */}
          <div className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 border border-red-800/30 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-300">To Win Tournament</h3>
              <span className="text-2xl">🏆</span>
            </div>
            <div className="text-5xl font-black text-yellow-500 mb-2">20.00</div>
            <p className="text-sm text-gray-400">Long odds for aging squad</p>
          </div>

          {/* Reach Quarter-Finals */}
          <div className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 border border-red-800/30 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-300">Reach Quarter-Finals</h3>
              <span className="text-2xl">🎯</span>
            </div>
            <div className="text-5xl font-black text-yellow-500 mb-2">2.80</div>
            <p className="text-sm text-gray-400">Realistic target for squad</p>
          </div>

          {/* Group Winner */}
          <div className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 border border-red-800/30 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-300">Group Winner</h3>
              <span className="text-2xl">👑</span>
            </div>
            <div className="text-5xl font-black text-yellow-500 mb-2">2.50</div>
            <p className="text-sm text-gray-400">Strong group stage pedigree</p>
          </div>
        </div>

        {/* Tournament Overview */}
        <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-yellow-600/20 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500">
            2026 World Cup Outlook
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              The 2026 World Cup represents the <span className="text-yellow-500 font-semibold">final opportunity</span> for Belgium's 
              fabled golden generation to capture international glory. With key stars entering their mid-30s, this tournament marks a 
              critical <span className="text-red-400 font-semibold">transition period</span> for the Red Devils.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Despite aging concerns, Belgium still possesses world-class talent in Kevin De Bruyne, Romelu Lukaku, and Thibaut Courtois. 
              The question remains: can this experienced core overcome physical limitations and finally deliver on their immense potential, 
              or will 2026 serve as a bittersweet farewell?
            </p>
          </div>
        </div>

        {/* Key Players */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500">
            Key Players
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* De Bruyne */}
            <div className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 border border-red-800/30 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-xl font-bold text-yellow-500 mb-2">Kevin De Bruyne</h3>
              <p className="text-sm text-gray-400 mb-3">Midfielder • Man City</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                The heartbeat of Belgium. World's best playmaker when fit, but injury concerns and age (35 in 2026) create uncertainty.
              </p>
            </div>

            {/* Lukaku */}
            <div className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 border border-red-800/30 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300">
              <div className="text-4xl mb-3">⚽</div>
              <h3 className="text-xl font-bold text-yellow-500 mb-2">Romelu Lukaku</h3>
              <p className="text-sm text-gray-400 mb-3">Forward • Napoli</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                All-time leading scorer (86+ goals). Physical presence remains formidable, but tournament finishing has been inconsistent.
              </p>
            </div>

            {/* Courtois */}
            <div className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 border border-red-800/30 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300">
              <div className="text-4xl mb-3">🧤</div>
              <h3 className="text-xl font-bold text-yellow-500 mb-2">Thibaut Courtois</h3>
              <p className="text-sm text-gray-400 mb-3">Goalkeeper • Real Madrid</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                World-class shot-stopper and Belgium's defensive anchor. Returning from ACL injury but pedigree undeniable.
              </p>
            </div>

            {/* Trossard */}
            <div className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 border border-red-800/30 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-bold text-yellow-500 mb-2">Leandro Trossard</h3>
              <p className="text-sm text-gray-400 mb-3">Forward • Arsenal</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Versatile attacker providing crucial depth. Premier League proven and entering prime years at 31.
              </p>
            </div>
          </div>
        </div>

        {/* Recent Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* 2022 World Cup */}
          <div className="bg-gradient-to-br from-red-950/30 to-zinc-900/50 border border-red-800/40 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🇶🇦</span>
              <div>
                <h3 className="text-2xl font-bold text-red-400">2022 World Cup</h3>
                <p className="text-gray-400">Group Stage Exit</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-black/30 rounded-lg p-3">
                <span className="text-gray-300">vs Canada</span>
                <span className="text-green-400 font-semibold">W 1-0</span>
              </div>
              <div className="flex items-center justify-between bg-black/30 rounded-lg p-3">
                <span className="text-gray-300">vs Morocco</span>
                <span className="text-red-400 font-semibold">L 0-2</span>
              </div>
              <div className="flex items-center justify-between bg-black/30 rounded-lg p-3">
                <span className="text-gray-300">vs Croatia</span>
                <span className="text-red-400 font-semibold">L 0-0 (4th)</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-4 leading-relaxed">
              Shocking elimination in group stage marked beginning of the end for golden generation. Morocco defeat particularly damaging.
            </p>
          </div>

          {/* Euro 2024 */}
          <div className="bg-gradient-to-br from-yellow-900/20 to-zinc-900/50 border border-yellow-700/40 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🇩🇪</span>
              <div>
                <h3 className="text-2xl font-bold text-yellow-400">Euro 2024</h3>
                <p className="text-gray-400">Round of 16</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-black/30 rounded-lg p-3">
                <span className="text-gray-300">Group E</span>
                <span className="text-yellow-400 font-semibold">2nd place</span>
              </div>
              <div className="flex items-center justify-between bg-black/30 rounded-lg p-3">
                <span className="text-gray-300">vs France</span>
                <span className="text-red-400 font-semibold">L 0-1 (R16)</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-4 leading-relaxed">
              Respectable performance but fell short against top opposition. De Bruyne showed flashes but squad depth concerns emerged.
            </p>
          </div>
        </div>

        {/* Betting Angles */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500">
            Smart Betting Angles
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Angle 1 */}
            <div className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 border border-yellow-600/30 rounded-xl p-8 hover:border-yellow-500/60 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🎭</span>
                <h3 className="text-xl font-bold text-yellow-500">Last Dance Value</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                The <span className="text-yellow-500 font-semibold">"one last run"</span> narrative could motivate this experienced squad. 
                At <span className="text-yellow-500 font-bold">20.00 to win</span>, Belgium offers lottery-ticket value if the stars align.
              </p>
              <div className="bg-black/40 rounded-lg p-4 border border-yellow-600/20">
                <p className="text-sm text-gray-400 mb-2">Best Bet:</p>
                <p className="text-yellow-400 font-semibold">Small stake on outright win (20.00)</p>
              </div>
            </div>

            {/* Angle 2 */}
            <div className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 border border-yellow-600/30 rounded-xl p-8 hover:border-yellow-500/60 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🎯</span>
                <h3 className="text-xl font-bold text-yellow-500">De Bruyne Props</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                When healthy, KDB is unstoppable. Look for <span className="text-yellow-500 font-semibold">assist markets, player of the match</span> props, 
                and <span className="text-yellow-500 font-semibold">creative playmaker specials</span> in group matches.
              </p>
              <div className="bg-black/40 rounded-lg p-4 border border-yellow-600/20">
                <p className="text-sm text-gray-400 mb-2">Best Bet:</p>
                <p className="text-yellow-400 font-semibold">De Bruyne 3+ assists in tournament</p>
              </div>
            </div>

            {/* Angle 3 */}
            <div className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 border border-yellow-600/30 rounded-xl p-8 hover:border-yellow-500/60 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">👑</span>
                <h3 className="text-xl font-bold text-yellow-500">Group Stage Dominance</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Belgium's <span className="text-yellow-500 font-semibold">group stage record is historically strong</span>. At <span className="text-yellow-500 font-bold">2.50 to win group</span>, 
                this offers solid value before knockout pressure builds.
              </p>
              <div className="bg-black/40 rounded-lg p-4 border border-yellow-600/20">
                <p className="text-sm text-gray-400 mb-2">Best Bet:</p>
                <p className="text-yellow-400 font-semibold">Belgium to win their group (2.50)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Expert Analysis */}
        <div className="bg-gradient-to-br from-red-950/30 via-zinc-900/50 to-black/50 border border-red-700/30 rounded-xl p-8">
          <div className="flex items-start gap-4">
            <div className="text-4xl">💭</div>
            <div>
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">Expert Analysis</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  <span className="text-yellow-500 font-semibold">The Reality:</span> Belgium's golden generation has consistently 
                  underperformed at major tournaments despite world-class talent. The 2022 World Cup group stage exit was a devastating 
                  blow to their legacy.
                </p>
                <p>
                  <span className="text-yellow-500 font-semibold">Age Concerns:</span> By 2026, De Bruyne will be 35, Lukaku 33, 
                  and Courtois 34. While experience matters, physical decline in a tournament played across North America's vast 
                  distances could be decisive.
                </p>
                <p>
                  <span className="text-yellow-500 font-semibold">Transition Challenge:</span> Belgium must balance loyalty to veterans 
                  with integrating younger talent. Coach selection and tactical evolution will be critical in this awkward transition period.
                </p>
                <p className="text-yellow-400 font-semibold">
                  Verdict: Belgium remains dangerous but long odds reflect harsh realities. Group stage success likely, but deep run 
                  requires near-perfect conditions. Bet the group, fade the outright.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-red-900/30 via-yellow-900/30 to-black/50 border border-yellow-600/30 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500">
            Ready to Bet on Belgium?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Compare odds from top bookmakers and find the best value for Red Devils bets
          </p>
          <Link 
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-red-600 text-white font-bold px-8 py-4 rounded-xl hover:from-yellow-500 hover:to-red-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-yellow-500/30 text-lg"
          >
            Compare Bookmakers
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
