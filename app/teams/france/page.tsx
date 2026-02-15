import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'France 2026 World Cup Odds & Betting Tips | Best World Cup Odds',
  description: 'Complete betting guide for France at 2026 World Cup. Les Bleus odds, Mbappé props, team analysis, and expert predictions for the defending runners-up.',
};

export default function FrancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
            Best World Cup Odds
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-red-600/20"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full">
              <span className="text-blue-300 font-semibold">🇫🇷 Defending Runners-Up</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              France
              <span className="block text-3xl md:text-4xl text-blue-400 mt-2">Les Bleus</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              World Cup royalty returns. The defending runners-up boast unmatched depth, 
              a generational superstar in Mbappé, and the pedigree to go all the way in 2026.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg px-6 py-3">
                <div className="text-gray-400 text-sm">FIFA Ranking</div>
                <div className="text-2xl font-bold text-white">#2</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg px-6 py-3">
                <div className="text-gray-400 text-sm">World Cup Titles</div>
                <div className="text-2xl font-bold text-white">2</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg px-6 py-3">
                <div className="text-gray-400 text-sm">2022 Finish</div>
                <div className="text-2xl font-bold text-white">Runners-Up</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Odds */}
      <section className="py-12 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Latest France Odds</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-blue-500/30 rounded-xl p-6 hover:border-blue-400/50 transition-all">
                <div className="text-blue-400 text-sm font-semibold mb-2">TO WIN WORLD CUP</div>
                <div className="text-5xl font-bold text-white mb-2">6.00</div>
                <div className="text-gray-400 text-sm">2nd Favorite</div>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 hover:border-blue-400/30 transition-all">
                <div className="text-gray-300 text-sm font-semibold mb-2">MBAPPÉ TOP SCORER</div>
                <div className="text-5xl font-bold text-white mb-2">7.50</div>
                <div className="text-gray-400 text-sm">Joint Favorite</div>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 hover:border-blue-400/30 transition-all">
                <div className="text-gray-300 text-sm font-semibold mb-2">GROUP WINNER</div>
                <div className="text-5xl font-bold text-white mb-2">1.55</div>
                <div className="text-gray-400 text-sm">Strong Favorite</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Analysis */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Team Analysis</h2>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">The Depth of Champions</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                France arrives at the 2026 World Cup as one of the most complete squads in international 
                football. After narrowly losing the 2022 final on penalties to Argentina, Les Bleus have 
                only gotten stronger. Their depth is frightening—Didier Deschamps can field two competitive 
                XIs, and both would contend for the title.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With a perfect blend of experience (Griezmann orchestrating from midfield) and youth 
                (a maturing Mbappé at his peak, Tchouaméni dominating the engine room), France possesses 
                the tools to reclaim the trophy they won in 2018. Add Mike Maignan&apos;s commanding presence 
                in goal, and you have a team built for tournament football.
              </p>
            </div>

            {/* Key Players */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">Key Players</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-900/40 to-gray-800/40 border border-blue-500/30 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-white">Kylian Mbappé</h4>
                      <p className="text-blue-400">Forward</p>
                    </div>
                    <div className="text-4xl">⚡</div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    The most dangerous player on the planet. Already a World Cup winner and Golden Boot 
                    contender in 2022, Mbappé enters 2026 at peak powers. Explosive pace, clinical finishing, 
                    and big-game mentality make him a nightmare for any defense.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-600/30 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-white">Antoine Griezmann</h4>
                      <p className="text-gray-400">Attacking Midfielder</p>
                    </div>
                    <div className="text-4xl">🎯</div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    The creative heartbeat of Les Bleus. Griezmann&apos;s intelligence, work rate, and playmaking 
                    ability make France tick. Operating in the hole, he connects defense to attack and creates 
                    space for Mbappé to exploit.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-600/30 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-white">Aurélien Tchouaméni</h4>
                      <p className="text-gray-400">Defensive Midfielder</p>
                    </div>
                    <div className="text-4xl">🛡️</div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    The anchor in midfield. Tchouaméni&apos;s physical presence, ball-winning ability, and 
                    composure on the ball provide the platform for France&apos;s attacking stars to shine. 
                    A complete modern midfielder.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-600/30 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-white">Mike Maignan</h4>
                      <p className="text-gray-400">Goalkeeper</p>
                    </div>
                    <div className="text-4xl">🧤</div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    A commanding presence between the sticks. Maignan combines shot-stopping excellence with 
                    elite distribution and penalty-saving prowess. His confidence radiates through the entire 
                    defensive unit.
                  </p>
                </div>
              </div>
            </div>

            {/* Recent Form */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-white mb-4">Recent Form & Momentum</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg px-3 py-1 text-blue-300 font-semibold text-sm whitespace-nowrap">
                    2022 WC
                  </div>
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">Runners-Up:</span> Lost final to Argentina on penalties 
                    after a thrilling 3-3 draw. Mbappé scored a hat-trick, proving his elite status. Showed championship 
                    resilience throughout the knockout stages.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gray-700/50 border border-gray-600/30 rounded-lg px-3 py-1 text-gray-300 font-semibold text-sm whitespace-nowrap">
                    Squad
                  </div>
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">New Generation:</span> Young talents like Camavinga, 
                    Fofana, and Saliba have matured into world-class players. Depth in every position means injuries 
                    won&apos;t derail their campaign like in 2022.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-500/20 border border-green-400/30 rounded-lg px-3 py-1 text-green-300 font-semibold text-sm whitespace-nowrap">
                    Qualification
                  </div>
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">Dominant:</span> Cruised through European qualifying, 
                    showcasing attacking firepower and defensive solidity. Deschamps has his system perfected.
                  </p>
                </div>
              </div>
            </div>

            {/* Betting Angles */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">3 Smart Betting Angles</h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-900/30 to-gray-800/30 border-l-4 border-blue-500 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-blue-400 mb-3">1. Mbappé Player Props = Value City</h4>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Mbappé at 7.50 for top scorer is a gift. He&apos;s the focal point of France&apos;s attack and thrives 
                    on the World Cup stage. Also consider anytime goalscorer markets in key matches—his ceiling is 
                    multiple goals per game.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-blue-500/20 border border-blue-400/30 rounded-full px-3 py-1 text-blue-300 text-sm">
                      Top Scorer 7.50
                    </span>
                    <span className="bg-blue-500/20 border border-blue-400/30 rounded-full px-3 py-1 text-blue-300 text-sm">
                      Anytime Goalscorer
                    </span>
                    <span className="bg-blue-500/20 border border-blue-400/30 rounded-full px-3 py-1 text-blue-300 text-sm">
                      Most Goals in Final
                    </span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 border-l-4 border-gray-600 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-white mb-3">2. France Goals Markets</h4>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    With their attacking depth, France will score goals—and plenty of them. Look for Over 2.5 team goals 
                    in group stage matches and To Win Both Halves against weaker opposition. Their first-half dominance 
                    under Deschamps is a pattern worth exploiting.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-gray-600/30 border border-gray-500/30 rounded-full px-3 py-1 text-gray-300 text-sm">
                      Over 2.5 Goals
                    </span>
                    <span className="bg-gray-600/30 border border-gray-500/30 rounded-full px-3 py-1 text-gray-300 text-sm">
                      Win Both Halves
                    </span>
                    <span className="bg-gray-600/30 border border-gray-500/30 rounded-full px-3 py-1 text-gray-300 text-sm">
                      Highest Scoring Team
                    </span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 border-l-4 border-gray-600 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-white mb-3">3. Tournament Winner Value</h4>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    At 6.00, France offers legitimate value despite being second favorite. They have the squad depth, 
                    tournament experience, and tactical flexibility to win it all. Consider backing them outright early, 
                    and use in-play markets to hedge if they reach the final again.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-gray-600/30 border border-gray-500/30 rounded-full px-3 py-1 text-gray-300 text-sm">
                      Outright Winner 6.00
                    </span>
                    <span className="bg-gray-600/30 border border-gray-500/30 rounded-full px-3 py-1 text-gray-300 text-sm">
                      To Reach Final
                    </span>
                    <span className="bg-gray-600/30 border border-gray-500/30 rounded-full px-3 py-1 text-gray-300 text-sm">
                      Each-Way Value
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Strengths & Concerns */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                  <span>✓</span> Strengths
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span><strong>Elite Depth:</strong> Two quality players in every position</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span><strong>Mbappé Factor:</strong> A genuine match-winner on any stage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span><strong>Tournament Pedigree:</strong> Finals in 2018 and 2022</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span><strong>Tactical Flexibility:</strong> Can adapt to any opponent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span><strong>Defensive Solidity:</strong> Maignan and elite CBs</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
                  <span>!</span> Concerns
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">•</span>
                    <span><strong>Complacency Risk:</strong> Favorites can underperform in groups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">•</span>
                    <span><strong>Injuries:</strong> 2022 proved depth can be tested</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">•</span>
                    <span><strong>Mental Scars:</strong> Penalty loss may linger for some players</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">•</span>
                    <span><strong>Expectations:</strong> Pressure to win after 2022 heartbreak</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="bg-gradient-to-r from-blue-900/40 to-gray-800/40 border border-blue-500/30 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">Ready to Back Les Bleus?</h3>
              <p className="text-gray-300 mb-6">
                France has the talent, depth, and experience to win the 2026 World Cup. 
                Find the best odds and maximize your returns.
              </p>
              <Link 
                href="/"
                className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Compare Odds Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p className="mb-2">Best World Cup Odds - 2026 Tournament Guide</p>
          <p className="text-sm">Odds are illustrative. Always gamble responsibly.</p>
        </div>
      </footer>
    </div>
  );
}
