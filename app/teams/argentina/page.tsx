import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Argentina 2026 World Cup Odds & Betting Tips | Best World Cup Odds',
  description: 'Defending champions Argentina head to 2026 World Cup. Get the best odds on Messi\'s final tournament, key players, and expert betting angles.',
};

export default function ArgentinaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      {/* Header */}
      <header className="border-b border-gray-700 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">
            ← Back to Teams
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-start gap-6">
          {/* Flag/Badge Area */}
          <div className="w-full md:w-1/3">
            <div className="bg-gradient-to-br from-blue-600 via-white to-blue-400 rounded-lg aspect-[4/3] flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <div className="text-6xl md:text-8xl mb-2">🇦🇷</div>
                <div className="text-gray-900 font-bold text-xl">ARGENTINA</div>
              </div>
            </div>
          </div>

          {/* Title & Intro */}
          <div className="w-full md:w-2/3">
            <div className="inline-block bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-bold mb-3">
              DEFENDING CHAMPIONS
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
              Argentina 2026 World Cup
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-4 leading-relaxed">
              The reigning world champions return to defend their crown, with Lionel Messi set to grace the World Cup stage one final time. After their dramatic triumph in Qatar 2022, La Albiceleste remain a formidable force and a favorite to go all the way again.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full border border-green-600/30">
                🏆 Qatar 2022 Winners
              </span>
              <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full border border-blue-600/30">
                🏆 Copa América 2024 Champions
              </span>
              <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full border border-purple-600/30">
                ⚡ Messi's Last Dance
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Odds */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 md:p-8 border border-gray-700 shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">📊</span>
            Argentina 2026 Betting Odds
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {/* To Win Tournament */}
            <div className="bg-gray-900/60 rounded-lg p-5 border border-blue-600/30 hover:border-blue-500/50 transition-all">
              <div className="text-gray-400 text-sm mb-2 uppercase tracking-wide">To Win World Cup</div>
              <div className="text-4xl font-bold text-blue-400 mb-2">5.50</div>
              <div className="text-gray-500 text-xs">18.2% implied probability</div>
              <button className="mt-4 w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 rounded-lg transition-colors">
                Bet Now
              </button>
            </div>

            {/* Messi Top Scorer */}
            <div className="bg-gray-900/60 rounded-lg p-5 border border-purple-600/30 hover:border-purple-500/50 transition-all">
              <div className="text-gray-400 text-sm mb-2 uppercase tracking-wide">Messi Top Scorer</div>
              <div className="text-4xl font-bold text-purple-400 mb-2">8.00</div>
              <div className="text-gray-500 text-xs">12.5% implied probability</div>
              <button className="mt-4 w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold py-2 rounded-lg transition-colors">
                Bet Now
              </button>
            </div>

            {/* Group Winner */}
            <div className="bg-gray-900/60 rounded-lg p-5 border border-green-600/30 hover:border-green-500/50 transition-all">
              <div className="text-gray-400 text-sm mb-2 uppercase tracking-wide">Group Winner</div>
              <div className="text-4xl font-bold text-green-400 mb-2">1.60</div>
              <div className="text-gray-500 text-xs">62.5% implied probability</div>
              <button className="mt-4 w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-2 rounded-lg transition-colors">
                Bet Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Players */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
          <span className="text-3xl">⭐</span>
          Key Players to Watch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {/* Messi */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all">
            <div className="flex items-start gap-4">
              <div className="text-5xl">👑</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-blue-400 mb-1">Lionel Messi</h3>
                <div className="text-gray-400 text-sm mb-3">Forward • Captain</div>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  The greatest of all time makes his final World Cup appearance. At 38, Messi remains Argentina's creative heartbeat and will be desperate to sign off with back-to-back titles. His vision, playmaking, and big-game experience are irreplaceable.
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-yellow-600/20 text-yellow-400 px-2 py-1 rounded">World Cup Winner</span>
                  <span className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded">8x Ballon d'Or</span>
                  <span className="bg-purple-600/20 text-purple-400 px-2 py-1 rounded">Final Tournament</span>
                </div>
              </div>
            </div>
          </div>

          {/* Martínez */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all">
            <div className="flex items-start gap-4">
              <div className="text-5xl">🧤</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-green-400 mb-1">Emiliano Martínez</h3>
                <div className="text-gray-400 text-sm mb-3">Goalkeeper</div>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  "Dibu" is the wall behind Argentina's success. The penalty shootout hero from Qatar continues to be one of the world's best keepers. His shot-stopping, commanding presence, and mind games make him a tournament difference-maker.
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-yellow-600/20 text-yellow-400 px-2 py-1 rounded">Golden Glove 2022</span>
                  <span className="bg-green-600/20 text-green-400 px-2 py-1 rounded">Penalty Specialist</span>
                </div>
              </div>
            </div>
          </div>

          {/* Álvarez */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all">
            <div className="flex items-start gap-4">
              <div className="text-5xl">⚡</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-red-400 mb-1">Julián Álvarez</h3>
                <div className="text-gray-400 text-sm mb-3">Forward</div>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  The young striker has matured into Argentina's main goal threat. With blistering pace, intelligent movement, and clinical finishing, Álvarez provides the perfect complement to Messi and could be the tournament's breakout star.
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-red-600/20 text-red-400 px-2 py-1 rounded">Rising Star</span>
                  <span className="bg-orange-600/20 text-orange-400 px-2 py-1 rounded">Clinical Finisher</span>
                </div>
              </div>
            </div>
          </div>

          {/* Di María */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all">
            <div className="flex items-start gap-4">
              <div className="text-5xl">🎯</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-yellow-400 mb-1">Ángel Di María</h3>
                <div className="text-gray-400 text-sm mb-3">Winger</div>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  The veteran winger came out of international retirement for one last dance. Di María's experience, dribbling ability, and clutch gene in finals make him invaluable. His partnership with Messi remains magical.
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-yellow-600/20 text-yellow-400 px-2 py-1 rounded">Big-Game Player</span>
                  <span className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Veteran Leader</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Form */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
          <span className="text-3xl">📈</span>
          Recent Form & Momentum
        </h2>
        
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 md:p-8 border border-gray-700">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <h3 className="text-xl font-bold text-green-400 mb-4">Major Titles</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-gray-900/60 p-4 rounded-lg border border-green-600/30">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <div className="font-semibold text-green-400">2022 FIFA World Cup</div>
                    <div className="text-sm text-gray-400">Champions • Qatar</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-900/60 p-4 rounded-lg border border-blue-600/30">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <div className="font-semibold text-blue-400">2024 Copa América</div>
                    <div className="text-sm text-gray-400">Champions • USA</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-900/60 p-4 rounded-lg border border-yellow-600/30">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <div className="font-semibold text-yellow-400">2021 Copa América</div>
                    <div className="text-sm text-gray-400">Champions • Brazil</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-400 mb-4">Tournament Stats</h3>
              <div className="space-y-4">
                <div className="bg-gray-900/60 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">Unbeaten Run</span>
                    <span className="text-2xl font-bold text-blue-400">36 games</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>

                <div className="bg-gray-900/60 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">Clean Sheets (Last 10)</span>
                    <span className="text-2xl font-bold text-green-400">7</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '70%'}}></div>
                  </div>
                </div>

                <div className="bg-gray-900/60 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">Goals Per Game</span>
                    <span className="text-2xl font-bold text-purple-400">2.4</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-green-900/20 border border-green-600/30 rounded-lg">
            <p className="text-green-400 text-sm md:text-base">
              <strong>🔥 Hot Streak:</strong> Argentina enter the 2026 World Cup on a 36-game unbeaten run dating back to 2019. They've won their last 15 competitive matches and haven't lost a knockout game since 2018. Momentum is firmly on their side.
            </p>
          </div>
        </div>
      </section>

      {/* Betting Angles */}
      <section className="container mx-auto px-4 py-8 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
          <span className="text-3xl">💡</span>
          Expert Betting Angles
        </h2>
        
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {/* Angle 1 */}
          <div className="bg-gradient-to-br from-blue-900/40 to-gray-900 rounded-xl p-6 border border-blue-600/30 hover:border-blue-500 transition-all">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-3xl">🏆</span>
              <div>
                <h3 className="text-lg font-bold text-blue-400 mb-2">Back-to-Back Champions</h3>
                <span className="inline-block bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-xs font-semibold">VALUE BET</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              At 5.50 odds, Argentina offers value for outright victory. The expanded 48-team format actually favors top teams with squad depth. With their winning mentality, defensive solidity, and Messi's final bow narrative, they have all the ingredients to repeat.
            </p>
            <div className="text-xs text-gray-500 border-t border-gray-700 pt-3">
              <strong className="text-gray-400">Historical Note:</strong> Brazil (1958, 1962) were the last back-to-back winners. Argentina have the squad to break that 64-year drought.
            </div>
          </div>

          {/* Angle 2 */}
          <div className="bg-gradient-to-br from-purple-900/40 to-gray-900 rounded-xl p-6 border border-purple-600/30 hover:border-purple-500 transition-all">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-3xl">🥅</span>
              <div>
                <h3 className="text-lg font-bold text-purple-400 mb-2">Clean Sheet Machine</h3>
                <span className="inline-block bg-purple-600/20 text-purple-400 px-2 py-1 rounded text-xs font-semibold">DEFENSIVE ANGLE</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Argentina's defensive record is elite. Martínez, Romero, and Otamendi form an impenetrable wall. Consider betting "Argentina to win to nil" in group stage matches or "Under 2.5 Total Goals" when they face mid-tier opposition.
            </p>
            <div className="text-xs text-gray-500 border-t border-gray-700 pt-3">
              <strong className="text-gray-400">Stat:</strong> 70% clean sheet rate in their last 10 competitive matches. Defense wins tournaments.
            </div>
          </div>

          {/* Angle 3 */}
          <div className="bg-gradient-to-br from-yellow-900/40 to-gray-900 rounded-xl p-6 border border-yellow-600/30 hover:border-yellow-500 transition-all">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-3xl">👴</span>
              <div>
                <h3 className="text-lg font-bold text-yellow-400 mb-2">Messi's Last Dance</h3>
                <span className="inline-block bg-yellow-600/20 text-yellow-400 px-2 py-1 rounded text-xs font-semibold">EMOTIONAL EDGE</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Never underestimate the emotional narrative. The entire team will be motivated to send Messi out on top. Consider bets on "Argentina to reach final" or "Messi to score in final" if they advance. The fairytale ending is a powerful force.
            </p>
            <div className="text-xs text-gray-500 border-t border-gray-700 pt-3">
              <strong className="text-gray-400">Context:</strong> At 38, this is definitively Messi's World Cup swan song. Expect maximum motivation from the entire squad.
            </div>
          </div>
        </div>

        {/* Betting Warning */}
        <div className="mt-6 p-4 bg-red-900/20 border border-red-600/30 rounded-lg">
          <p className="text-red-400 text-xs md:text-sm flex items-start gap-2">
            <span className="text-lg">⚠️</span>
            <span><strong>Responsible Gambling:</strong> These are mock odds for informational purposes only. Always gamble responsibly, never bet more than you can afford to lose, and seek help if gambling becomes a problem.</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-700 bg-gray-900/50 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>&copy; 2026 Best World Cup Odds. All odds are illustrative examples.</p>
          <p className="mt-2">Please gamble responsibly. 18+ only.</p>
        </div>
      </footer>
    </div>
  );
}
