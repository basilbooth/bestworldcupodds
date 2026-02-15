import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mexico 2026 World Cup Odds, Predictions & Betting Tips | Best World Cup Odds',
  description: 'Complete betting guide for Mexico at 2026 FIFA World Cup. Co-host nation odds, key players, tournament predictions, and expert betting angles for El Tri.',
};

export default function MexicoTeamPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-900/40 via-slate-900 to-slate-950 border-b border-slate-800">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-green-600 to-red-600 rounded-2xl flex items-center justify-center text-5xl sm:text-6xl shadow-2xl flex-shrink-0">
              🇲🇽
            </div>
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-green-400 via-white to-red-400 bg-clip-text text-transparent">
                Mexico
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-4">
                El Tri • Co-Host Nation • 2026 FIFA World Cup
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-medium border border-green-500/30">
                  Co-Host Advantage
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
                  CONCACAF Power
                </span>
                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium border border-orange-500/30">
                  Attacking Style
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Team Overview */}
            <section className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 sm:p-8 backdrop-blur-sm">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-green-400">
                Team Overview
              </h2>
              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-gray-300 leading-relaxed mb-4">
                  As one of three co-host nations for the 2026 FIFA World Cup, <strong className="text-green-400">Mexico</strong> enters 
                  the tournament with unprecedented home advantage and sky-high expectations from one of the world's most passionate fanbases. 
                  El Tri will play group stage matches on home soil, with the iconic Estadio Azteca in Mexico City set to create an 
                  intimidating fortress atmosphere.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Known for their <strong className="text-blue-400">dynamic attacking style</strong> and technical flair, Mexico combines 
                  European-based talent with domestic Liga MX warriors. Their approach emphasizes quick transitions, creative midfield play, 
                  and exploiting wide areas with pacey wingers. Under the passionate support of millions, El Tri aims to break their 
                  historic "quinto partido" curse and finally advance beyond the Round of 16.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  The co-host advantage cannot be overstated. Mexico's players will sleep in their own beds, face no jet lag, and compete 
                  in stadiums where they've built legendary careers. Combined with their proven pedigree in CONCACAF and recent competitive 
                  form, Mexico enters 2026 as a dark horse capable of shocking traditional powerhouses.
                </p>
              </div>
            </section>

            {/* Key Players */}
            <section className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 sm:p-8 backdrop-blur-sm">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-green-400">
                Key Players to Watch
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Hirving Lozano */}
                <div className="bg-slate-800/50 rounded-lg p-5 border border-slate-700 hover:border-green-500/50 transition-colors">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                      ⚡
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white">Hirving Lozano</h3>
                      <p className="text-sm text-gray-400">Forward • #22</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    "Chucky" Lozano brings explosive pace and clinical finishing. His experience at PSV and Napoli has honed his ability 
                    to deliver in high-pressure moments. Expect him to terrorize defenses on the counter-attack.
                  </p>
                </div>

                {/* Raúl Jiménez */}
                <div className="bg-slate-800/50 rounded-lg p-5 border border-slate-700 hover:border-green-500/50 transition-colors">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                      🎯
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white">Raúl Jiménez</h3>
                      <p className="text-sm text-gray-400">Striker • #9</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    The proven Premier League striker combines strength, aerial prowess, and intelligent movement. Jiménez's hold-up play 
                    and link-up ability make him the perfect target man for Mexico's creative midfielders.
                  </p>
                </div>

                {/* Héctor Herrera */}
                <div className="bg-slate-800/50 rounded-lg p-5 border border-slate-700 hover:border-green-500/50 transition-colors">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                      🧠
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white">Héctor Herrera</h3>
                      <p className="text-sm text-gray-400">Midfielder • #16</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    The heartbeat of Mexico's midfield. Herrera's experience at Porto and Atlético Madrid brings tactical discipline, 
                    leadership, and the ability to control tempo. His presence stabilizes El Tri in crucial moments.
                  </p>
                </div>

                {/* Guillermo Ochoa */}
                <div className="bg-slate-800/50 rounded-lg p-5 border border-slate-700 hover:border-green-500/50 transition-colors">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                      🧤
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white">Guillermo Ochoa</h3>
                      <p className="text-sm text-gray-400">Goalkeeper • #13</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    "Memo" Ochoa is a World Cup legend, famous for heroic performances against Brazil, Germany, and other giants. 
                    His shot-stopping ability and big-game mentality make him invaluable when Mexico faces elite opposition.
                  </p>
                </div>
              </div>
            </section>

            {/* Recent Form */}
            <section className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 sm:p-8 backdrop-blur-sm">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-green-400">
                Recent Form & Tournament History
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-bold text-lg text-white mb-2">Gold Cup Dominance</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Mexico has remained the dominant force in CONCACAF, claiming multiple Gold Cup titles and consistently reaching finals. 
                    Their ability to perform under pressure in front of passionate home crowds has been proven time and again in regional 
                    competition.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-bold text-lg text-white mb-2">Copa América Showings</h3>
                  <p className="text-gray-300 leading-relaxed">
                    As regular invitees to Copa América, Mexico has tested themselves against South American giants. Competitive 
                    performances against Argentina, Brazil, and Uruguay have demonstrated their ability to compete with world-class 
                    opposition, providing valuable tournament experience.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="font-bold text-lg text-white mb-2">World Cup Consistency</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Mexico has reached the Round of 16 in seven consecutive World Cups (1994-2018), a remarkable achievement that 
                    demonstrates consistency and reliability. The 2026 tournament presents their best opportunity yet to break through 
                    to the quarterfinals with home advantage.
                  </p>
                </div>
              </div>
            </section>

            {/* USA Rivalry */}
            <section className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 rounded-xl border border-slate-700 p-6 sm:p-8 backdrop-blur-sm">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-green-400">
                El Clásico: Mexico vs USA Rivalry
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The Mexico-USA rivalry is one of international football's most intense and historic matchups. With both nations co-hosting 
                2026, the possibility of a knockout stage clash has fans dreaming of an epic showdown on home soil.
              </p>
              <div className="bg-slate-800/50 rounded-lg p-5 border border-slate-700">
                <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-xl">⚔️</span>
                  Head-to-Head Betting Context
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">▪</span>
                    <span>Mexico historically dominates in Mexico City (high altitude advantage at Azteca)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">▪</span>
                    <span>Recent matches have been tightly contested with USA closing the competitive gap</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">▪</span>
                    <span>Tournament matches between these sides typically feature defensive tactics and low scoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">▪</span>
                    <span>A potential 2026 knockout meeting would be one of the most-watched matches in tournament history</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Betting Angles */}
            <section className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 sm:p-8 backdrop-blur-sm">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-400">
                Expert Betting Angles
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Smart bettors know where the value lies. Here are three specific markets worth watching for Mexico at the 2026 World Cup:
              </p>
              <div className="space-y-5">
                <div className="bg-gradient-to-r from-green-900/30 to-slate-800/30 rounded-lg p-5 border border-green-800/50">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl">📊</span>
                    <div>
                      <h3 className="font-bold text-lg text-green-400 mb-1">
                        1. Mexico to Win Group
                      </h3>
                      <p className="text-sm text-green-300/80 font-medium mb-2">Value Bet @ 2.80</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    With home advantage and likely favorable group seeding as a co-host, Mexico should dominate their group. 
                    The atmosphere at Azteca will be overwhelming for opponents. Historical data shows home nations perform 
                    exceptionally well in group stages. This represents strong value compared to typical tournament favorites.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-900/30 to-slate-800/30 rounded-lg p-5 border border-blue-800/50">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl">🎯</span>
                    <div>
                      <h3 className="font-bold text-lg text-blue-400 mb-1">
                        2. Mexico to Reach Quarter-Finals
                      </h3>
                      <p className="text-sm text-blue-300/80 font-medium mb-2">Strong Value @ 3.20</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Breaking the Round of 16 curse becomes significantly more probable with home advantage. Mexico's tactical 
                    discipline and tournament experience, combined with the emotional lift from playing at home, makes this their 
                    best chance in decades. The odds don't fully reflect the co-host boost that historically lifts teams 1-2 rounds 
                    beyond expectations.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-900/30 to-slate-800/30 rounded-lg p-5 border border-purple-800/50">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl">⚽</span>
                    <div>
                      <h3 className="font-bold text-lg text-purple-400 mb-1">
                        3. Over 2.5 Goals in Mexico Group Matches
                      </h3>
                      <p className="text-sm text-purple-300/80 font-medium mb-2">Smart Angle</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Mexico's attacking philosophy and the crowd demanding entertainment creates high-scoring potential. 
                    Group stage opponents may adopt open tactics to try and grab results, knowing defensive approaches rarely 
                    work in hostile atmospheres. Mexico's ability to counter-attack against aggressive teams typically produces 
                    goal-filled matches.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Tournament Odds */}
            <div className="bg-gradient-to-br from-green-900/40 to-slate-900 rounded-xl border border-green-800/50 p-6 sticky top-4">
              <h3 className="text-xl font-bold mb-4 text-green-400 flex items-center gap-2">
                <span>🏆</span>
                Tournament Odds
              </h3>
              
              <div className="space-y-4">
                {/* Outright Winner */}
                <div className="bg-slate-800/60 rounded-lg p-4 border border-slate-700">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-gray-300 font-medium">To Win World Cup</span>
                    <span className="text-2xl font-bold text-green-400">25.00</span>
                  </div>
                  <p className="text-xs text-gray-400">Dark horse with home advantage</p>
                </div>

                {/* Quarter-Finals */}
                <div className="bg-slate-800/60 rounded-lg p-4 border border-slate-700">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-gray-300 font-medium">To Reach Quarter-Finals</span>
                    <span className="text-2xl font-bold text-blue-400">3.20</span>
                  </div>
                  <p className="text-xs text-gray-400">Strong value for co-hosts</p>
                </div>

                {/* Group Winner */}
                <div className="bg-slate-800/60 rounded-lg p-4 border border-slate-700">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-gray-300 font-medium">To Win Group</span>
                    <span className="text-2xl font-bold text-orange-400">2.80</span>
                  </div>
                  <p className="text-xs text-gray-400">Home advantage pays off</p>
                </div>

                {/* CTA Button */}
                <Link 
                  href="/bookmakers"
                  className="block w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold py-3 px-4 rounded-lg text-center transition-all transform hover:scale-105 shadow-lg"
                >
                  Compare Best Odds →
                </Link>
              </div>

              <p className="text-xs text-gray-400 mt-4 leading-relaxed">
                Odds are indicative and subject to change. Always gamble responsibly.
              </p>
            </div>

            {/* Top Scorer Market */}
            <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-400 flex items-center gap-2">
                <span>👟</span>
                Top Scorer Market
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                  <div>
                    <p className="font-medium text-white">H. Lozano</p>
                    <p className="text-xs text-gray-400">Forward</p>
                  </div>
                  <span className="font-bold text-green-400">35.00</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                  <div>
                    <p className="font-medium text-white">R. Jiménez</p>
                    <p className="text-xs text-gray-400">Striker</p>
                  </div>
                  <span className="font-bold text-green-400">40.00</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6">
              <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                <span>📈</span>
                Quick Stats
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">FIFA Ranking</span>
                  <span className="font-bold text-white">#12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">World Cups</span>
                  <span className="font-bold text-white">17</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Best Finish</span>
                  <span className="font-bold text-white">Quarter-finals</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Gold Cups Won</span>
                  <span className="font-bold text-white">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Co-Host Advantage</span>
                  <span className="font-bold text-green-400">Yes ✓</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6">
              <h3 className="text-lg font-bold mb-4 text-white">Explore More Teams</h3>
              <div className="space-y-2">
                <Link 
                  href="/teams/usa"
                  className="block p-3 bg-slate-800/50 hover:bg-slate-800 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all text-gray-300 hover:text-white"
                >
                  🇺🇸 United States →
                </Link>
                <Link 
                  href="/teams/argentina"
                  className="block p-3 bg-slate-800/50 hover:bg-slate-800 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all text-gray-300 hover:text-white"
                >
                  🇦🇷 Argentina →
                </Link>
                <Link 
                  href="/teams/brazil"
                  className="block p-3 bg-slate-800/50 hover:bg-slate-800 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all text-gray-300 hover:text-white"
                >
                  🇧🇷 Brazil →
                </Link>
                <Link 
                  href="/teams"
                  className="block p-3 bg-gradient-to-r from-blue-900/50 to-slate-800/50 hover:from-blue-800/50 hover:to-slate-700/50 rounded-lg border border-blue-700/50 transition-all text-blue-300 hover:text-blue-200 font-medium text-center"
                >
                  View All Teams →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-gradient-to-r from-green-900/40 via-slate-900 to-blue-900/40 rounded-xl border border-slate-800 p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Ready to Back El Tri?
          </h2>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Compare odds from top bookmakers and find the best value for Mexico's 2026 World Cup campaign. 
            Don't miss the co-host advantage.
          </p>
          <Link 
            href="/bookmakers"
            className="inline-block bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-xl"
          >
            Compare Bookmaker Odds
          </Link>
        </div>
      </div>
    </div>
  );
}
