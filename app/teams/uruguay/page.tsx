import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uruguay 2026 World Cup Odds & Betting Tips | La Celeste',
  description: 'Complete Uruguay betting guide for 2026 World Cup. Two-time champions with Darwin Núñez, Valverde. Best odds, predictions, and betting angles.',
};

export default function UruguayPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-sky-900 via-blue-900 to-sky-800 border-b-4 border-sky-400">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,255,255,.03) 50px, rgba(255,255,255,.03) 100px)',
          }} />
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-sky-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-4xl md:text-5xl">🇺🇾</span>
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
                  Uruguay
                </h1>
                <p className="text-xl md:text-2xl text-sky-200 font-semibold">
                  La Celeste
                </p>
              </div>
            </div>
            <p className="text-lg md:text-xl text-sky-100 leading-relaxed">
              Two-time world champions (1930, 1950) and fierce South American competitors. 
              Uruguay brings a warrior mentality and tactical discipline to every tournament.
            </p>
          </div>
        </div>
      </div>

      {/* Main Odds Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Key Odds */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-sky-400">📊</span>
              2026 World Cup Odds
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 hover:border-sky-500 transition-all">
                <div className="text-sky-400 text-sm font-semibold mb-2">TO WIN WORLD CUP</div>
                <div className="text-5xl font-bold text-white mb-2">30.00</div>
                <div className="text-gray-400 text-sm">Long-shot value pick</div>
              </div>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 hover:border-sky-500 transition-all">
                <div className="text-sky-400 text-sm font-semibold mb-2">TO REACH QUARTER-FINALS</div>
                <div className="text-5xl font-bold text-white mb-2">3.50</div>
                <div className="text-gray-400 text-sm">Strong knockout potential</div>
              </div>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 hover:border-sky-500 transition-all">
                <div className="text-sky-400 text-sm font-semibold mb-2">TO WIN GROUP</div>
                <div className="text-5xl font-bold text-white mb-2">3.20</div>
                <div className="text-gray-400 text-sm">Competitive group stage</div>
              </div>
            </div>
          </div>

          {/* Team Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Key Players */}
            <div className="bg-slate-800 rounded-xl p-6 md:p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-sky-400">⭐</span>
                Key Players
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-slate-900 rounded-lg border border-slate-700">
                  <div className="text-3xl">⚡</div>
                  <div>
                    <div className="font-bold text-white text-lg">Darwin Núñez</div>
                    <div className="text-sky-400 text-sm mb-1">Forward</div>
                    <div className="text-gray-400 text-sm">Electric pace and clinical finishing. Liverpool's powerhouse striker.</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-slate-900 rounded-lg border border-slate-700">
                  <div className="text-3xl">🎯</div>
                  <div>
                    <div className="font-bold text-white text-lg">Federico Valverde</div>
                    <div className="text-sky-400 text-sm mb-1">Midfielder</div>
                    <div className="text-gray-400 text-sm">Dynamic box-to-box midfielder. Real Madrid's engine room.</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-slate-900 rounded-lg border border-slate-700">
                  <div className="text-3xl">🧠</div>
                  <div>
                    <div className="font-bold text-white text-lg">Rodrigo Bentancur</div>
                    <div className="text-sky-400 text-sm mb-1">Midfielder</div>
                    <div className="text-gray-400 text-sm">Tactical intelligence and composure. Tottenham's midfield anchor.</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-slate-900 rounded-lg border border-slate-700">
                  <div className="text-3xl">🛡️</div>
                  <div>
                    <div className="font-bold text-white text-lg">José María Giménez</div>
                    <div className="text-sky-400 text-sm mb-1">Defender</div>
                    <div className="text-gray-400 text-sm">Defensive warrior and leader. Atlético Madrid's rock at the back.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Form */}
            <div className="bg-slate-800 rounded-xl p-6 md:p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-sky-400">📈</span>
                Recent Form
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-white">2022 World Cup</h4>
                    <span className="text-yellow-500 text-sm font-semibold">Group Stage Exit</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    Disappointed with group stage elimination despite competitive performances. 
                    Drew with South Korea, beat Ghana 2-0, but lost to Portugal 2-0 to finish third in Group H.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-slate-900 text-yellow-400 rounded text-xs font-semibold border border-slate-700">D</span>
                    <span className="px-2 py-1 bg-slate-900 text-green-400 rounded text-xs font-semibold border border-slate-700">W</span>
                    <span className="px-2 py-1 bg-slate-900 text-red-400 rounded text-xs font-semibold border border-slate-700">L</span>
                  </div>
                </div>
                <div className="border-t border-slate-700 pt-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-white">Copa América</h4>
                    <span className="text-sky-400 text-sm font-semibold">Consistent Contenders</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    Always dangerous in South American competition. 2024 Copa América saw them reach the semifinals, 
                    showcasing their trademark resilience and defensive organization against top CONMEBOL opposition.
                  </p>
                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-700">
                    <div className="text-xs text-sky-400 font-semibold mb-1">TOURNAMENT PEDIGREE</div>
                    <div className="text-white text-sm">15 Copa América titles - Record holders</div>
                  </div>
                </div>
                <div className="border-t border-slate-700 pt-6">
                  <div className="bg-gradient-to-r from-sky-900/30 to-blue-900/30 p-4 rounded-lg border border-sky-800">
                    <div className="text-sky-400 font-semibold mb-2">2026 Outlook</div>
                    <p className="text-gray-300 text-sm">
                      Hungry to prove doubters wrong. Blend of experienced warriors and emerging talent 
                      makes them a genuine dark horse threat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Betting Angles */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-sky-400">💡</span>
              Smart Betting Angles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Angle 1 */}
              <div className="bg-gradient-to-br from-slate-800 via-slate-800 to-sky-900/20 rounded-xl p-6 border border-slate-700 hover:border-sky-500 transition-all">
                <div className="text-4xl mb-4">🌙</div>
                <h3 className="text-xl font-bold text-white mb-3">Dark Horse Semifinal Value</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  At 30.00 to win it all, Uruguay offers exceptional value for a team with World Cup-winning 
                  pedigree. Their defensive solidity and knockout experience make them dangerous underdog semifinal material.
                </p>
                <div className="bg-slate-900 p-3 rounded-lg border border-slate-700">
                  <div className="text-xs text-sky-400 mb-1 font-semibold">BETTING STRATEGY</div>
                  <div className="text-white text-sm">Small stake on outright + to reach semis hedge</div>
                </div>
              </div>

              {/* Angle 2 */}
              <div className="bg-gradient-to-br from-slate-800 via-slate-800 to-sky-900/20 rounded-xl p-6 border border-slate-700 hover:border-sky-500 transition-all">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-white mb-3">Defensive Solidity Clean Sheets</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Uruguay's defense-first mentality with Giménez marshaling the backline makes clean sheet props 
                  attractive. Look for under 2.5 goals in group matches and clean sheet specials.
                </p>
                <div className="bg-slate-900 p-3 rounded-lg border border-slate-700">
                  <div className="text-xs text-sky-400 mb-1 font-semibold">BETTING STRATEGY</div>
                  <div className="text-white text-sm">Target clean sheet props + low-scoring matches</div>
                </div>
              </div>

              {/* Angle 3 */}
              <div className="bg-gradient-to-br from-slate-800 via-slate-800 to-sky-900/20 rounded-xl p-6 border border-slate-700 hover:border-sky-500 transition-all">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3">Darwin Núñez Props</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Núñez is Uruguay's primary goal threat and will be heavily involved. Anytime goalscorer, 
                  shots on target, and total goals markets offer value given his explosive potential.
                </p>
                <div className="bg-slate-900 p-3 rounded-lg border border-slate-700">
                  <div className="text-xs text-sky-400 mb-1 font-semibold">BETTING STRATEGY</div>
                  <div className="text-white text-sm">Núñez anytime scorer + shots on target combos</div>
                </div>
              </div>
            </div>
          </div>

          {/* Historical Context */}
          <div className="bg-gradient-to-br from-sky-900/20 to-blue-900/20 rounded-xl p-6 md:p-8 border border-sky-800 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-sky-400">🏆</span>
              World Cup Legacy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sky-400 font-semibold mb-2">Championship Glory</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-white">1930:</strong> First-ever World Cup champions on home soil in Montevideo. 
                  <br /><strong className="text-white">1950:</strong> Shocked Brazil in the Maracanã to claim their second title.
                </p>
              </div>
              <div>
                <h3 className="text-sky-400 font-semibold mb-2">Recent Success</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-white">2010:</strong> Fourth place with Forlán's Golden Ball performance.
                  <br /><strong className="text-white">2018:</strong> Quarter-finals, eliminated by eventual champions France.
                </p>
              </div>
            </div>
          </div>

          {/* Strengths & Weaknesses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Strengths
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span className="text-gray-300 text-sm">World-class defensive organization and tactical discipline</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span className="text-gray-300 text-sm">Elite talent across all positions (Núñez, Valverde, Giménez)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span className="text-gray-300 text-sm">Fierce competitive mentality and never-say-die attitude</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span className="text-gray-300 text-sm">Proven ability to grind out results in tight knockout matches</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-red-400">✗</span>
                Weaknesses
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span className="text-gray-300 text-sm">Can lack creativity in breaking down deep-lying defenses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span className="text-gray-300 text-sm">Discipline issues - tendency to pick up cards in heated matches</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span className="text-gray-300 text-sm">Reliance on Núñez for goals - lack of scoring depth</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span className="text-gray-300 text-sm">Recent group stage disappointment in Qatar 2022</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-r from-sky-800 to-blue-800 rounded-xl p-8 text-center border border-sky-600">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Bet on La Celeste?
            </h3>
            <p className="text-sky-100 mb-6 max-w-2xl mx-auto">
              Uruguay's blend of defensive steel and attacking talent makes them a compelling dark horse pick. 
              Don't underestimate the two-time champions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-white text-sky-900 px-8 py-3 rounded-lg font-bold hover:bg-sky-50 transition-colors">
                Compare Odds
              </button>
              <button className="bg-sky-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-sky-600 transition-colors border border-sky-500">
                View All Teams
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
