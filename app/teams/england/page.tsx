import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'England 2026 World Cup Odds & Betting Tips | Best World Cup Odds',
  description: 'England World Cup 2026 betting odds, predictions, and analysis. The Three Lions seek redemption after Euro 2024 heartbreak with Kane, Bellingham, and Foden leading the charge.',
};

export default function EnglandPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-gray-900 to-red-900 border-b border-gray-800">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block text-6xl md:text-8xl mb-4">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
              England
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              The Three Lions | Tournament Heartbreak Specialists
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <span className="px-4 py-2 bg-gray-800 rounded-full border border-gray-700">
                🏆 1 World Cup (1966)
              </span>
              <span className="px-4 py-2 bg-gray-800 rounded-full border border-gray-700">
                ⭐ FIFA Ranking: #4
              </span>
              <span className="px-4 py-2 bg-gray-800 rounded-full border border-gray-700">
                👔 Manager: Gareth Southgate
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Odds Section */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Featured Odds */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">
            <div className="bg-gradient-to-br from-yellow-900/20 to-gray-800 p-6 rounded-xl border border-yellow-700/30">
              <div className="text-sm text-gray-400 mb-2">🏆 TO WIN WORLD CUP</div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">7.00</div>
              <div className="text-sm text-gray-300">3rd Favorite</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/20 to-gray-800 p-6 rounded-xl border border-blue-700/30">
              <div className="text-sm text-gray-400 mb-2">⚽ KANE TOP SCORER</div>
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">9.00</div>
              <div className="text-sm text-gray-300">Golden Boot Contender</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-900/20 to-gray-800 p-6 rounded-xl border border-green-700/30">
              <div className="text-sm text-gray-400 mb-2">📊 GROUP WINNER</div>
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">1.70</div>
              <div className="text-sm text-gray-300">Strong Favorites</div>
            </div>
          </div>

          {/* Team Overview */}
          <div className="bg-gray-800 rounded-xl p-6 md:p-8 mb-8 border border-gray-700">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              <span>🦁</span> The Three Lions: So Much Talent, So Much Heartbreak
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                England arrive at the 2026 World Cup carrying the weight of a nation's expectations and a growing collection of near-misses. With one of the most talented squads in international football, the Three Lions have mastered the art of the "brave defeat" – reaching finals, breaking penalty curse records, and producing moments of pure brilliance, only to fall just short when it matters most.
              </p>
              <p>
                After the heartbreak of the Euro 2024 final loss and a World Cup 2022 quarterfinal exit to France, Gareth Southgate's men have the experience, the quality, and the motivation. The question remains the same: can this golden generation finally convert their abundance of attacking talent into silverware?
              </p>
              <p className="text-lg font-semibold text-blue-400">
                With Harry Kane hunting records, Jude Bellingham orchestrating from midfield, and Phil Foden providing creative spark, England have the firepower to trouble any defense. The talent is undeniable – it's the mentality in crunch moments that will define this tournament.
              </p>
            </div>
          </div>

          {/* Key Players */}
          <div className="bg-gray-800 rounded-xl p-6 md:p-8 mb-8 border border-gray-700">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <span>⭐</span> Key Players
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Harry Kane */}
              <div className="bg-gray-900 rounded-lg p-5 border border-gray-700 hover:border-blue-500 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-blue-400">Harry Kane</h3>
                    <p className="text-sm text-gray-400">Forward • Bayern Munich</p>
                  </div>
                  <span className="text-3xl">🎯</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  England's captain and all-time leading scorer. Clinical finisher who finally won his first major trophy with Bayern. His movement, hold-up play, and ruthless finishing make him one of the world's deadliest strikers. At 32, this may be his last best chance at international glory.
                </p>
              </div>

              {/* Jude Bellingham */}
              <div className="bg-gray-900 rounded-lg p-5 border border-gray-700 hover:border-blue-500 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-blue-400">Jude Bellingham</h3>
                    <p className="text-sm text-gray-400">Midfielder • Real Madrid</p>
                  </div>
                  <span className="text-3xl">💎</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  The crown jewel of English football. Already a Ballon d'Or contender at 23, Bellingham combines technical brilliance with goal-scoring instinct and leadership beyond his years. His performances at Real Madrid prove he thrives on the biggest stages – exactly what England need.
                </p>
              </div>

              {/* Phil Foden */}
              <div className="bg-gray-900 rounded-lg p-5 border border-gray-700 hover:border-blue-500 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-blue-400">Phil Foden</h3>
                    <p className="text-sm text-gray-400">Midfielder • Manchester City</p>
                  </div>
                  <span className="text-3xl">🎨</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  The Stockport Iniesta brings elite-level creativity and unpredictability. His close control, vision, and ability to unlock defenses in tight spaces provide England with a different dimension. In Pep's system, he's become one of Europe's most devastating attacking midfielders.
                </p>
              </div>

              {/* Jordan Pickford */}
              <div className="bg-gray-900 rounded-lg p-5 border border-gray-700 hover:border-blue-500 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-blue-400">Jordan Pickford</h3>
                    <p className="text-sm text-gray-400">Goalkeeper • Everton</p>
                  </div>
                  <span className="text-3xl">🧤</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  England's tournament goalkeeper. Pickford transforms into a superhero at major competitions, producing crucial saves and winning the penalty shootout mental battle. His distribution starts attacks and his shot-stopping has saved England time and again when it matters most.
                </p>
              </div>

            </div>
          </div>

          {/* Recent Form */}
          <div className="bg-gray-800 rounded-xl p-6 md:p-8 mb-8 border border-gray-700">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <span>📊</span> Recent Tournament Form
            </h2>
            <div className="space-y-4">
              
              <div className="bg-gray-900 rounded-lg p-5 border-l-4 border-red-500">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-gray-100">Euro 2024 Final</h3>
                  <span className="px-3 py-1 bg-red-900/40 text-red-400 rounded-full text-sm font-semibold">
                    Runners-up
                  </span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Another agonizing near-miss. England reached their second consecutive European Championship final, showing resilience and character throughout the tournament, only to fall short in the final once again. The talent is there, the experience is building, but the curse continues.
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-5 border-l-4 border-yellow-500">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-gray-100">World Cup 2022 Quarterfinal</h3>
                  <span className="px-3 py-1 bg-yellow-900/40 text-yellow-400 rounded-full text-sm font-semibold">
                    Last 8
                  </span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  A narrow 2-1 defeat to defending champions France ended England's Qatar campaign. Kane's missed penalty proved costly, but England showed they could compete with the world's best. The performance suggested they were close – frustratingly close – to breaking through.
                </p>
              </div>

              <div className="bg-gradient-to-r from-gray-900 to-blue-900/20 rounded-lg p-5 border border-blue-700/30">
                <p className="text-gray-300 leading-relaxed">
                  <span className="font-bold text-blue-400">The Pattern:</span> England consistently reach the latter stages of major tournaments, play attractive football, showcase world-class talent, and then exit with heads held high and hearts broken. 2026 offers another chance to rewrite the narrative – but this time on North American soil, far from Wembley's false hope.
                </p>
              </div>

            </div>
          </div>

          {/* Betting Angles */}
          <div className="bg-gradient-to-br from-yellow-900/10 via-gray-800 to-gray-800 rounded-xl p-6 md:p-8 mb-8 border border-yellow-700/30">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <span>💰</span> Three Betting Angles
            </h2>
            <div className="space-y-6">
              
              {/* Angle 1 */}
              <div className="bg-gray-900/80 rounded-lg p-6 border border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-yellow-400">
                      England to Reach the Final @ 3.50+
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      England's biggest strength isn't winning tournaments – it's reaching the big games. They've made two of the last three major tournament finals (Euro 2020, Euro 2024) and consistently navigate knockout rounds. With their talent and tournament experience, backing them to reach the final offers better value than outright winner odds.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-xs font-semibold">
                        ✓ Proven tournament pedigree
                      </span>
                      <span className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-xs font-semibold">
                        ✓ Favorable draw expected
                      </span>
                      <span className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-xs font-semibold">
                        ✓ Peak squad age
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Angle 2 */}
              <div className="bg-gray-900/80 rounded-lg p-6 border border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-yellow-400">
                      Harry Kane Top Tournament Scorer @ 9.00
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      Kane is a goal-scoring machine who thrives in tournaments. He won the Golden Boot at World Cup 2018 and remains England's primary penalty taker. With England expected to progress deep and Kane in his prime at Bayern, he'll get plenty of opportunities. At 9.00, there's excellent value on a proven tournament performer.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-xs font-semibold">
                        ✓ Previous Golden Boot winner
                      </span>
                      <span className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-xs font-semibold">
                        ✓ Penalty taker
                      </span>
                      <span className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-xs font-semibold">
                        ✓ Elite finishing
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Angle 3 */}
              <div className="bg-gray-900/80 rounded-lg p-6 border border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-yellow-400">
                      England Clean Sheets in Group Stage: Over 1.5 @ 2.20
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      England's defense is often overlooked but remains one of their strongest assets. Pickford is elite in tournaments, and the defensive unit is experienced and organized. In group stage play, where England typically dominate weaker opponents, expect them to keep multiple clean sheets while managing games conservatively.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-xs font-semibold">
                        ✓ Solid defensive record
                      </span>
                      <span className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-xs font-semibold">
                        ✓ Pickford tournament form
                      </span>
                      <span className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-xs font-semibold">
                        ✓ Group stage control
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Additional Odds Table */}
          <div className="bg-gray-800 rounded-xl p-6 md:p-8 mb-8 border border-gray-700 overflow-x-auto">
            <h2 className="text-2xl font-bold mb-6">More England Betting Markets</h2>
            <div className="space-y-3 min-w-[300px]">
              
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-300">To Win Group</span>
                <span className="text-xl font-bold text-green-400">1.70</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-300">To Reach Semifinals</span>
                <span className="text-xl font-bold text-blue-400">2.50</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-300">To Reach Final</span>
                <span className="text-xl font-bold text-blue-400">3.75</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-300">To Win Tournament</span>
                <span className="text-xl font-bold text-yellow-400">7.00</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-300">Eliminated in Group Stage</span>
                <span className="text-xl font-bold text-gray-400">15.00</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-300">Bellingham to Score 3+ Goals</span>
                <span className="text-xl font-bold text-blue-400">4.50</span>
              </div>
              
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-300">England vs France Final</span>
                <span className="text-xl font-bold text-purple-400">12.00</span>
              </div>

            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-r from-blue-900 to-red-900 rounded-xl p-8 text-center border border-blue-700">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Will England Finally End the Wait?
            </h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              60 years of hurt, countless near-misses, and a golden generation hungry for glory. 2026 could be the year the Three Lions roar again – or another chapter in tournament heartbreak history.
            </p>
            <Link 
              href="/"
              className="inline-block px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold rounded-lg transition-colors text-lg"
            >
              Compare All World Cup Odds
            </Link>
          </div>

        </div>
      </div>

      {/* Footer Navigation */}
      <div className="border-t border-gray-800 bg-gray-950 py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-500 text-sm mb-4">
              Explore more World Cup 2026 teams
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/teams/brazil" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors">
                🇧🇷 Brazil
              </Link>
              <Link href="/teams/argentina" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors">
                🇦🇷 Argentina
              </Link>
              <Link href="/teams/france" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors">
                🇫🇷 France
              </Link>
              <Link href="/teams/spain" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors">
                🇪🇸 Spain
              </Link>
              <Link href="/teams/germany" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors">
                🇩🇪 Germany
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
