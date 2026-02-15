import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Canada 2026 World Cup Odds & Betting Guide | Best World Cup Odds',
  description: 'Complete betting guide for Canada at the 2026 FIFA World Cup. Co-hosts return after 36 years with exciting young squad led by Alphonso Davies.',
};

export default function CanadaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-950 to-gray-900">
      {/* Header */}
      <header className="border-b border-red-900/30 bg-gray-900/50 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="text-red-500 hover:text-red-400 transition-colors">
            ← Back to All Teams
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Hero Section */}
        <div className="mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center shadow-2xl shadow-red-900/50">
              <span className="text-5xl md:text-6xl">🇨🇦</span>
            </div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
                Canada
              </h1>
              <p className="text-xl md:text-2xl text-red-400 font-semibold mb-2">
                The Co-Hosts Return
              </p>
              <p className="text-gray-300 text-lg max-w-3xl">
                Canada returns to the World Cup stage for the first time since 1986, this time as co-hosts alongside the USA and Mexico. With an exciting young squad led by Bayern Munich&apos;s Alphonso Davies, Les Rouges are ready to make noise on home soil.
              </p>
            </div>
          </div>

          {/* Key Stats Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-800/50 backdrop-blur rounded-lg p-6 border border-red-900/30">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500">2026</div>
              <div className="text-sm text-gray-400 mt-1">Co-Host Nation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500">1986</div>
              <div className="text-sm text-gray-400 mt-1">Last World Cup</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500">40</div>
              <div className="text-sm text-gray-400 mt-1">Years Between</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500">Top 50</div>
              <div className="text-sm text-gray-400 mt-1">FIFA Ranking</div>
            </div>
          </div>
        </div>

        {/* Current Odds */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-red-500">📊</span> Current Odds
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border-2 border-red-900/50 hover:border-red-700/50 transition-all shadow-lg">
              <div className="text-gray-400 text-sm font-medium mb-2">TO WIN WORLD CUP</div>
              <div className="text-4xl font-bold text-white mb-1">+10000</div>
              <div className="text-red-400 font-semibold">100.00 (Decimal)</div>
              <div className="text-gray-500 text-sm mt-2">Long-shot dark horse</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border-2 border-red-900/50 hover:border-red-700/50 transition-all shadow-lg">
              <div className="text-gray-400 text-sm font-medium mb-2">TO REACH KNOCKOUT STAGE</div>
              <div className="text-4xl font-bold text-white mb-1">+350</div>
              <div className="text-red-400 font-semibold">4.50 (Decimal)</div>
              <div className="text-gray-500 text-sm mt-2">Realistic target</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border-2 border-red-900/50 hover:border-red-700/50 transition-all shadow-lg">
              <div className="text-gray-400 text-sm font-medium mb-2">TO WIN GROUP</div>
              <div className="text-4xl font-bold text-white mb-1">+400</div>
              <div className="text-red-400 font-semibold">5.00 (Decimal)</div>
              <div className="text-gray-500 text-sm mt-2">Home advantage play</div>
            </div>
          </div>
        </section>

        {/* Key Players */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-red-500">⭐</span> Key Players
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gray-800/50 backdrop-blur rounded-lg p-6 border border-red-900/30 hover:border-red-700/50 transition-all">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-xl font-bold text-white mb-1">Alphonso Davies</h3>
              <div className="text-red-400 font-medium mb-2">Left Back / Winger</div>
              <div className="text-gray-400 text-sm">Bayern Munich superstar. Lightning pace and attacking threat down the left flank.</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur rounded-lg p-6 border border-red-900/30 hover:border-red-700/50 transition-all">
              <div className="text-4xl mb-3">⚽</div>
              <h3 className="text-xl font-bold text-white mb-1">Jonathan David</h3>
              <div className="text-red-400 font-medium mb-2">Striker</div>
              <div className="text-gray-400 text-sm">Clinical finisher from Lille. Canada&apos;s main goal threat with proven European pedigree.</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur rounded-lg p-6 border border-red-900/30 hover:border-red-700/50 transition-all">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-bold text-white mb-1">Tajon Buchanan</h3>
              <div className="text-red-400 font-medium mb-2">Winger</div>
              <div className="text-gray-400 text-sm">Dynamic winger with pace to burn. Key creative outlet in Canada&apos;s attack.</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur rounded-lg p-6 border border-red-900/30 hover:border-red-700/50 transition-all">
              <div className="text-4xl mb-3">🧤</div>
              <h3 className="text-xl font-bold text-white mb-1">Milan Borjan</h3>
              <div className="text-red-400 font-medium mb-2">Goalkeeper</div>
              <div className="text-gray-400 text-sm">Experienced shot-stopper. Veteran presence who was instrumental in qualifying campaign.</div>
            </div>
          </div>
        </section>

        {/* Recent Form */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-red-500">📈</span> Recent Form & History
          </h2>
          <div className="bg-gray-800/50 backdrop-blur rounded-lg p-6 md:p-8 border border-red-900/30 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-red-400 mb-3">2022 FIFA World Cup</h3>
              <p className="text-gray-300 mb-3">
                Canada&apos;s return to the World Cup after 36 years ended in the group stage, but the team showed promise and fighting spirit. Despite finishing with zero points, they competed hard against Belgium, Croatia, and Morocco, gaining valuable tournament experience.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-red-900/30 text-red-400 rounded-full text-sm">Group Stage Exit</span>
                <span className="px-3 py-1 bg-red-900/30 text-red-400 rounded-full text-sm">0 Points</span>
                <span className="px-3 py-1 bg-red-900/30 text-red-400 rounded-full text-sm">Valuable Experience</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-400 mb-3">CONCACAF Dominance</h3>
              <p className="text-gray-300 mb-3">
                Canada topped the CONCACAF qualifying table for 2022, finishing ahead of Mexico and the USA. Strong performances in the Gold Cup and Nations League have shown steady progress under current management.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-sm">CONCACAF Leaders</span>
                <span className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-sm">Consistent Results</span>
                <span className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-sm">Regional Power</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-400 mb-3">2026 Outlook</h3>
              <p className="text-gray-300">
                As co-hosts with automatic qualification, Canada has had extensive preparation time. The young squad has matured, with several players now established in top European leagues. Home advantage across multiple venues gives Les Rouges their best-ever chance to advance deep into a World Cup.
              </p>
            </div>
          </div>
        </section>

        {/* Betting Angles */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-red-500">💡</span> Top 3 Betting Angles
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Angle 1 */}
            <div className="bg-gradient-to-br from-gray-800 via-gray-800 to-red-950 rounded-lg p-6 border border-red-900/30 hover:shadow-xl hover:shadow-red-900/20 transition-all">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0 text-xl">
                  🐴
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Dark Horse Knockout Run</h3>
                  <div className="text-red-400 text-sm font-medium">BEST VALUE</div>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                At 4.50 odds to reach the knockout stage, Canada offers excellent value. Home advantage, passionate crowds, and a talented squad make them dangerous. A favorable group draw could see them surprise many.
              </p>
              <div className="bg-gray-900/50 rounded p-3 border border-red-900/20">
                <div className="text-sm text-gray-400 mb-1">Recommended Bet</div>
                <div className="text-white font-semibold">Canada to Reach Round of 16 @ 4.50</div>
              </div>
            </div>

            {/* Angle 2 */}
            <div className="bg-gradient-to-br from-gray-800 via-gray-800 to-red-950 rounded-lg p-6 border border-red-900/30 hover:shadow-xl hover:shadow-red-900/20 transition-all">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0 text-xl">
                  ⚡
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Alphonso Davies Props</h3>
                  <div className="text-red-400 text-sm font-medium">STAR POWER</div>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Davies is Canada&apos;s most dynamic player. Look for assists, shots on target, and even goal-scoring opportunities as he bombs forward. His pace makes him a constant threat, especially against slower defenses.
              </p>
              <div className="bg-gray-900/50 rounded p-3 border border-red-900/20">
                <div className="text-sm text-gray-400 mb-1">Recommended Props</div>
                <div className="text-white font-semibold">Davies Assist / Goal in Tournament</div>
              </div>
            </div>

            {/* Angle 3 */}
            <div className="bg-gradient-to-br from-gray-800 via-gray-800 to-red-950 rounded-lg p-6 border border-red-900/30 hover:shadow-xl hover:shadow-red-900/20 transition-all">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0 text-xl">
                  🏠
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Home Advantage Group Value</h3>
                  <div className="text-red-400 text-sm font-medium">GROUP STAGE SPECIAL</div>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Playing on home soil across passionate Canadian venues gives Les Rouges a massive boost. At 5.00 to win their group, they could capitalize on crowd energy and familiar conditions to pull off an upset.
              </p>
              <div className="bg-gray-900/50 rounded p-3 border border-red-900/20">
                <div className="text-sm text-gray-400 mb-1">Recommended Bet</div>
                <div className="text-white font-semibold">Canada Group Winner @ 5.00</div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="border-t border-red-900/30 pt-8">
          <div className="bg-gray-800/30 backdrop-blur rounded-lg p-6 border border-red-900/20">
            <p className="text-gray-400 text-sm leading-relaxed">
              <strong className="text-red-400">Disclaimer:</strong> All odds are for illustrative purposes and may not reflect current market values. Always gamble responsibly and only bet what you can afford to lose. Odds are subject to change. Please verify current odds with licensed bookmakers before placing any bets.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-red-900/30 bg-gray-900/50 backdrop-blur mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-gray-400 text-sm">
          <p>© 2026 Best World Cup Odds. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
