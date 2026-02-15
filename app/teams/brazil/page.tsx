import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Brazil World Cup 2026 Odds & Betting Tips | Best World Cup Odds',
  description: 'Brazil World Cup 2026 betting odds, analysis, and predictions. Five-time champions looking to end their title drought with Vinicius Jr, Rodrygo, and star-studded squad.',
};

export default function BrazilTeamPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-900 via-yellow-700 to-blue-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-6xl">🇧🇷</span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                  Brazil
                </h1>
              </div>
              <p className="text-xl sm:text-2xl text-yellow-300 font-semibold mb-2">
                Seleção • Five-Time Champions
              </p>
              <p className="text-lg text-gray-200 max-w-2xl">
                The most successful nation in World Cup history returns to reclaim their throne after a 24-year title drought.
              </p>
            </div>
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
              <div className="text-sm text-gray-400 uppercase tracking-wide mb-2">Featured Odds</div>
              <div className="text-3xl font-bold text-yellow-400 mb-1">6.50</div>
              <div className="text-sm text-gray-300">To Win World Cup 2026</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Team Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-yellow-400">Team Overview</h2>
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                Brazil arrives at the 2026 World Cup carrying the weight of history and expectation. As the only nation to win five World Cup titles (1958, 1962, 1970, 1994, 2002), the Seleção are synonymous with beautiful, attacking football. However, the golden trophy has eluded them since 2002, their longest drought in the modern era.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                The current generation represents perhaps their most complete squad since the Ronaldo-Ronaldinho-Rivaldo era. Led by Real Madrid superstars Vinicius Jr and Rodrygo, combined with Premier League stalwarts Casemiro and Alisson, Brazil blends electrifying attack with defensive solidity.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Their attacking tradition remains intact—Brazil still plays with flair, creativity, and the joga bonito philosophy that has captivated football fans for generations. With home advantage across North America and a squad in their prime, the stars may finally align for a sixth title.
              </p>
            </div>
          </div>
        </section>

        {/* Key Players */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-yellow-400">Key Players</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vinicius Jr */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-yellow-500 transition-colors">
              <div className="flex items-start gap-4">
                <div className="text-4xl">⚡</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Vinicius Jr</h3>
                  <p className="text-sm text-yellow-400 mb-3">Forward • Real Madrid</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    The explosive winger has evolved into one of the world&apos;s most devastating attackers. His pace, dribbling, and end product make him Brazil&apos;s primary offensive weapon. A leading contender for the Golden Boot.
                  </p>
                </div>
              </div>
            </div>

            {/* Rodrygo */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-yellow-500 transition-colors">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🎯</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Rodrygo</h3>
                  <p className="text-sm text-yellow-400 mb-3">Forward • Real Madrid</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Rodrygo&apos;s versatility and clutch gene make him invaluable. Capable of playing across the front three, he provides goals, assists, and big-game mentality honed at the Santiago Bernabéu.
                  </p>
                </div>
              </div>
            </div>

            {/* Casemiro */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-yellow-500 transition-colors">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🛡️</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Casemiro</h3>
                  <p className="text-sm text-yellow-400 mb-3">Midfielder • Manchester United</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    The defensive midfield anchor. Five-time Champions League winner brings leadership, tactical intelligence, and winning mentality. His ball-winning and distribution are crucial to Brazil&apos;s balance.
                  </p>
                </div>
              </div>
            </div>

            {/* Alisson */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-yellow-500 transition-colors">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🧤</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Alisson Becker</h3>
                  <p className="text-sm text-yellow-400 mb-3">Goalkeeper • Liverpool</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Arguably the world&apos;s best goalkeeper. Alisson&apos;s shot-stopping, distribution, and composure provide Brazil with elite-level security between the posts. A true difference-maker in knockout football.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Form & Pedigree */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-yellow-400">Recent Form & Pedigree</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>📊</span> CONMEBOL Qualifying
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Brazil topped the South American qualifiers with dominant displays, showcasing both attacking prowess and defensive resilience. Their qualifying campaign featured several statement victories against Argentina and Uruguay, signaling their readiness for the world stage.
              </p>
              <div className="flex gap-2 text-sm">
                <span className="px-3 py-1 bg-green-900/50 text-green-400 rounded-full border border-green-700">18 Wins</span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full border border-gray-600">3 Draws</span>
                <span className="px-3 py-1 bg-red-900/50 text-red-400 rounded-full border border-red-700">1 Loss</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>🏆</span> World Cup Pedigree
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">▪</span>
                  <span><strong className="text-white">5 World Cup titles:</strong> 1958, 1962, 1970, 1994, 2002</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">▪</span>
                  <span><strong className="text-white">22 World Cup appearances:</strong> Only nation to qualify for every tournament</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">▪</span>
                  <span><strong className="text-white">Recent performances:</strong> Quarter-finals 2022, Semi-finals 2014</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Betting Odds */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-yellow-400">Betting Odds</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-yellow-900/20 to-green-900/20 rounded-lg p-6 border border-yellow-600/40">
              <div className="text-sm text-gray-400 uppercase tracking-wide mb-2">Tournament Winner</div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">6.50</div>
              <div className="text-sm text-gray-300">Brazil to Win 2026 World Cup</div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-yellow-900/20 rounded-lg p-6 border border-blue-600/40">
              <div className="text-sm text-gray-400 uppercase tracking-wide mb-2">Group Winner</div>
              <div className="text-4xl font-bold text-blue-400 mb-2">1.50</div>
              <div className="text-sm text-gray-300">Brazil to Win Group</div>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-yellow-900/20 rounded-lg p-6 border border-green-600/40">
              <div className="text-sm text-gray-400 uppercase tracking-wide mb-2">Top Scorer</div>
              <div className="text-4xl font-bold text-green-400 mb-2">12.00</div>
              <div className="text-sm text-gray-300">Vinicius Jr Golden Boot</div>
            </div>
          </div>
        </section>

        {/* Betting Angles */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-yellow-400">Three Smart Betting Angles</h2>
          <div className="space-y-6">
            {/* Angle 1 */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-yellow-500 transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-900/30 text-yellow-400 rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Outright Value: Brazil to Win at 6.50</h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    While favorites, Brazil&apos;s odds offer value considering their squad depth, tournament pedigree, and hunger to end their 24-year drought. They possess the perfect blend of youthful exuberance (Vinicius, Rodrygo) and experienced winners (Casemiro, Alisson).
                  </p>
                  <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                    <p className="text-sm text-gray-400 mb-2"><strong className="text-yellow-400">Why it works:</strong></p>
                    <p className="text-sm text-gray-300">
                      The 2026 tournament format with expanded teams favors elite squads with depth. Brazil can rotate and manage their stars through the group stage, arriving fresh for knockouts where their quality shines.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Angle 2 */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-yellow-500 transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-blue-900/30 text-blue-400 rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Goals Markets: Brazil Over 2.5 Goals per Match</h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    Brazil&apos;s attacking DNA and firepower make goals markets attractive. Expect the Seleção to dominate possession and create chances in volume, especially in group stages. Their front line is the most potent they&apos;ve had in years.
                  </p>
                  <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                    <p className="text-sm text-gray-400 mb-2"><strong className="text-blue-400">Strategy:</strong></p>
                    <p className="text-sm text-gray-300">
                      Target Brazil team totals for group stage matches. With Vinicius, Rodrygo, and supporting attackers, they should comfortably exceed 2.5 goals against weaker opposition. Consider same-game parlays combining Brazil win + over goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Angle 3 */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-yellow-500 transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-green-900/30 text-green-400 rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Player Props: Vinicius Jr Anytime Scorer & Golden Boot</h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    Vinicius Jr is entering his prime and will be Brazil&apos;s focal point in attack. At 12.00 for the Golden Boot, he offers exceptional value. His ability to score and create makes him a must-bet for player props throughout the tournament.
                  </p>
                  <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                    <p className="text-sm text-gray-400 mb-2"><strong className="text-green-400">Betting approach:</strong></p>
                    <p className="text-sm text-gray-300">
                      Bet Vinicius anytime scorer in group matches (likely short odds but reliable). Add a small stake on Golden Boot at 12.00 for high upside. Also consider Vinicius 2+ goals in favorable matchups—his pace and finishing make braces likely.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-green-900 to-yellow-900 rounded-xl p-8 text-center border border-yellow-600/40">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Back Brazil?</h2>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            The Seleção are hunting their sixth World Cup title. Find the best odds and latest markets for Brazil at top sportsbooks.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors">
            Compare Brazil Odds
          </button>
        </section>
      </div>
    </div>
  );
}
