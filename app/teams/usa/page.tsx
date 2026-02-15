import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'USA World Cup 2026 Odds, Squad & Betting Tips | Best World Cup Odds',
  description: 'Complete USA team guide for 2026 World Cup. Analyze odds, key players like Pulisic & McKennie, betting angles, and host nation advantage. Expert predictions inside.',
};

export default function USATeamPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-slate-800 rounded-full flex items-center justify-center border-4 border-blue-600">
                <span className="text-5xl sm:text-6xl">🇺🇸</span>
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
                United States
              </h1>
              <p className="text-xl sm:text-2xl text-blue-400 font-semibold mb-2">
                2026 FIFA World Cup - Co-Host Nation
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm font-medium border border-green-600/30">
                  Host Advantage
                </span>
                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium border border-blue-600/30">
                  CONCACAF Champions
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Tournament Odds - Featured */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-green-950/50 to-blue-950/50 rounded-xl border-2 border-green-600/30 p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">🎯</span>
              USA 2026 World Cup Odds
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-slate-900/80 rounded-lg p-5 border border-slate-700 hover:border-green-500 transition-all">
                <div className="text-slate-400 text-sm mb-1">Outright Winner</div>
                <div className="text-3xl font-bold text-green-400 mb-1">18.00</div>
                <div className="text-slate-500 text-xs">5.9% implied probability</div>
              </div>
              <div className="bg-slate-900/80 rounded-lg p-5 border border-slate-700 hover:border-blue-500 transition-all">
                <div className="text-slate-400 text-sm mb-1">Reach Final</div>
                <div className="text-3xl font-bold text-blue-400 mb-1">8.50</div>
                <div className="text-slate-500 text-xs">11.8% implied probability</div>
              </div>
              <div className="bg-slate-900/80 rounded-lg p-5 border border-slate-700 hover:border-green-500 transition-all">
                <div className="text-slate-400 text-sm mb-1">Group Winner</div>
                <div className="text-3xl font-bold text-green-400 mb-1">2.10</div>
                <div className="text-slate-500 text-xs">47.6% implied probability</div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-slate-900/60 rounded-lg border border-blue-600/30">
              <p className="text-sm text-slate-300">
                <span className="text-green-400 font-semibold">💡 Betting Insight:</span> USA's odds have shortened considerably with home advantage. 
                The group winner market at 2.10 offers strong value given their CONCACAF dominance and passionate home crowds expected across venues.
              </p>
            </div>
          </div>
        </div>

        {/* Team Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 border-b border-slate-800 pb-3">
            Team Overview
          </h2>
          <div className="prose prose-invert prose-slate max-w-none">
            <div className="bg-slate-900 rounded-lg p-6 border border-slate-800">
              <p className="text-slate-300 text-lg leading-relaxed mb-4">
                The United States men's national team heads into the 2026 World Cup with unprecedented momentum and a once-in-a-generation 
                opportunity. As co-hosts alongside Canada and Mexico, the USMNT will benefit from raucous home support, familiar venues, 
                and the weight of a nation's expectations driving them forward.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed mb-4">
                Under their tactical framework, the USA has evolved into a squad brimming with European-based talent. The core features 
                technically gifted midfielders, explosive wingers, and a defense anchored by seasoned professionals competing at the highest 
                club levels. With players like Christian Pulisic leading from the front and Weston McKennie providing engine-room dominance, 
                this is arguably the most talented American squad ever assembled.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                <span className="text-green-400 font-semibold">Host Nation Factor:</span> History shows host nations consistently 
                overperform—since 1990, every host has reached at least the quarterfinals. The USA's 1994 Round of 16 finish came when 
                the program was far less developed. With world-class facilities, zero travel fatigue, and potentially 80,000+ fans per match, 
                the intangible advantages cannot be overstated. This isn't just a tournament—it's a statement opportunity for American soccer.
              </p>
            </div>
          </div>
        </section>

        {/* Key Players */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 border-b border-slate-800 pb-3">
            Key Players to Watch
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Christian Pulisic */}
            <div className="bg-slate-900 rounded-lg p-6 border border-slate-800 hover:border-green-500 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold">
                  CP
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white">Christian Pulisic</h3>
                  <p className="text-blue-400 font-semibold">Forward/Winger • AC Milan</p>
                </div>
              </div>
              <p className="text-slate-300 mb-3">
                Captain America carries the nation's hopes on his shoulders. Pulisic's blistering pace, clinical finishing, and big-game 
                mentality make him the USA's most dangerous weapon. After starring in Serie A, he enters 2026 at his peak—expect him to 
                terrorize defenses on home soil.
              </p>
              <div className="flex gap-4 text-sm">
                <div className="bg-slate-800 px-3 py-1 rounded">
                  <span className="text-slate-400">Top Scorer:</span> <span className="text-white font-semibold">26.00</span>
                </div>
                <div className="bg-slate-800 px-3 py-1 rounded">
                  <span className="text-slate-400">Most Assists:</span> <span className="text-white font-semibold">19.00</span>
                </div>
              </div>
            </div>

            {/* Weston McKennie */}
            <div className="bg-slate-900 rounded-lg p-6 border border-slate-800 hover:border-green-500 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-2xl font-bold">
                  WM
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white">Weston McKennie</h3>
                  <p className="text-blue-400 font-semibold">Midfielder • Juventus</p>
                </div>
              </div>
              <p className="text-slate-300 mb-3">
                The engine of the USMNT midfield. McKennie's box-to-box energy, aerial prowess, and tactical intelligence have made him 
                indispensable at Juventus. His ability to win physical battles, break up play, and surge forward with late runs gives 
                the USA balance and bite in the middle of the park.
              </p>
              <div className="flex gap-4 text-sm">
                <div className="bg-slate-800 px-3 py-1 rounded">
                  <span className="text-slate-400">Tackles + Int:</span> <span className="text-white font-semibold">Elite</span>
                </div>
                <div className="bg-slate-800 px-3 py-1 rounded">
                  <span className="text-slate-400">Work Rate:</span> <span className="text-white font-semibold">H/H</span>
                </div>
              </div>
            </div>

            {/* Gio Reyna */}
            <div className="bg-slate-900 rounded-lg p-6 border border-slate-800 hover:border-green-500 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-2xl font-bold">
                  GR
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white">Gio Reyna</h3>
                  <p className="text-blue-400 font-semibold">Attacking Midfielder • Borussia Dortmund</p>
                </div>
              </div>
              <p className="text-slate-300 mb-3">
                The creative spark. Reyna's vision, technical ability, and eye for defense-splitting passes make him the USA's chief 
                playmaker. When fit, he unlocks defenses with his dribbling and can score spectacular goals. His chemistry with Pulisic 
                will be crucial to breaking down deep-lying opponents.
              </p>
              <div className="flex gap-4 text-sm">
                <div className="bg-slate-800 px-3 py-1 rounded">
                  <span className="text-slate-400">Key Passes:</span> <span className="text-white font-semibold">3.2/90</span>
                </div>
                <div className="bg-slate-800 px-3 py-1 rounded">
                  <span className="text-slate-400">Dribbles:</span> <span className="text-white font-semibold">2.8/90</span>
                </div>
              </div>
            </div>

            {/* Matt Turner */}
            <div className="bg-slate-900 rounded-lg p-6 border border-slate-800 hover:border-green-500 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center text-2xl font-bold">
                  MT
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white">Matt Turner</h3>
                  <p className="text-blue-400 font-semibold">Goalkeeper • Crystal Palace</p>
                </div>
              </div>
              <p className="text-slate-300 mb-3">
                The last line of defense. Turner's shot-stopping ability, command of the penalty area, and composure under pressure 
                have earned him the #1 jersey. His reflexes and positioning are world-class, and in knockout scenarios where margins 
                are razor-thin, a reliable goalkeeper can be the difference.
              </p>
              <div className="flex gap-4 text-sm">
                <div className="bg-slate-800 px-3 py-1 rounded">
                  <span className="text-slate-400">Save %:</span> <span className="text-white font-semibold">73.4%</span>
                </div>
                <div className="bg-slate-800 px-3 py-1 rounded">
                  <span className="text-slate-400">Clean Sheets:</span> <span className="text-white font-semibold">42%</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Recent Form */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 border-b border-slate-800 pb-3">
            Recent Form & Notable Results
          </h2>
          <div className="bg-slate-900 rounded-lg p-6 border border-slate-800">
            <div className="space-y-4">
              <div className="flex items-center gap-4 pb-4 border-b border-slate-800">
                <div className="flex-shrink-0 w-16 text-center">
                  <div className="bg-green-600 text-white text-xs font-bold py-1 px-2 rounded">WIN</div>
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold">USA 2-0 Mexico</p>
                  <p className="text-slate-400 text-sm">Nations League Final • Dominant performance in hostile environment</p>
                </div>
                <div className="text-slate-400 text-sm">Jun 2025</div>
              </div>
              
              <div className="flex items-center gap-4 pb-4 border-b border-slate-800">
                <div className="flex-shrink-0 w-16 text-center">
                  <div className="bg-green-600 text-white text-xs font-bold py-1 px-2 rounded">WIN</div>
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold">Brazil 1-2 USA</p>
                  <p className="text-slate-400 text-sm">International Friendly • Statement victory over South American giants</p>
                </div>
                <div className="text-slate-400 text-sm">Mar 2025</div>
              </div>

              <div className="flex items-center gap-4 pb-4 border-b border-slate-800">
                <div className="flex-shrink-0 w-16 text-center">
                  <div className="bg-yellow-600 text-white text-xs font-bold py-1 px-2 rounded">DRAW</div>
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold">USA 1-1 Argentina</p>
                  <p className="text-slate-400 text-sm">Copa América Semi • Narrow penalty loss to eventual champions</p>
                </div>
                <div className="text-slate-400 text-sm">Jul 2024</div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-16 text-center">
                  <div className="bg-green-600 text-white text-xs font-bold py-1 px-2 rounded">WIN</div>
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold">USA 3-0 Canada</p>
                  <p className="text-slate-400 text-sm">World Cup Qualifying • Clinical display secures automatic qualification</p>
                </div>
                <div className="text-slate-400 text-sm">Nov 2024</div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-950/30 rounded-lg border border-blue-600/30">
              <p className="text-slate-300">
                <span className="font-semibold text-blue-400">Form Analysis:</span> The USMNT enters 2026 with serious momentum. 
                Victories over Brazil and Mexico demonstrate they can compete with elite opposition, while their Copa América run 
                showed resilience against the world's best. Unbeaten in their last 12 competitive matches at home.
              </p>
            </div>
          </div>
        </section>

        {/* Betting Angles */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 border-b border-slate-800 pb-3">
            💰 Three Betting Angles Worth Watching
          </h2>
          <div className="space-y-6">
            
            {/* Angle 1 */}
            <div className="bg-gradient-to-r from-green-950/50 to-slate-900 rounded-lg p-6 border border-green-600/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">USA to Top Group Stage</h3>
                  <p className="text-slate-300 mb-3">
                    At 2.10, this represents exceptional value. The USA topped their Copa América group and has been imperious at home. 
                    With CONCACAF qualifying dominance (7-1-0 record), they routinely dispatch regional opponents. The crowd factor at 
                    American stadiums—potentially 70,000+ passionate fans—creates an atmosphere few teams can handle. Every match is 
                    effectively a home game with zero travel between fixtures.
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-green-600/20 text-green-400 text-sm font-semibold rounded border border-green-600/30">
                      Recommended Stake: Medium-High
                    </span>
                    <span className="text-slate-400 text-sm">• Expected Value: Strong</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Angle 2 */}
            <div className="bg-gradient-to-r from-blue-950/50 to-slate-900 rounded-lg p-6 border border-blue-600/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Christian Pulisic Anytime Goalscorer (Each Match)</h3>
                  <p className="text-slate-300 mb-3">
                    Pulisic has been electric for AC Milan, and his shot volume in international fixtures is consistently high (4+ per match). 
                    As the focal point of USA's attack playing as a free-roaming forward, he'll be presented with numerous goal-scoring opportunities. 
                    Group stage matches against perceived weaker opponents offer particularly strong value—his anytime scorer odds typically range 
                    from 2.80-3.50, but his conversion rate suggests the true probability is closer to 35-40%.
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm font-semibold rounded border border-blue-600/30">
                      Recommended Stake: Medium (Per Match)
                    </span>
                    <span className="text-slate-400 text-sm">• High Shot Volume</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Angle 3 */}
            <div className="bg-gradient-to-r from-purple-950/50 to-slate-900 rounded-lg p-6 border border-purple-600/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">USA to Reach Quarter-Finals or Better</h3>
                  <p className="text-slate-300 mb-3">
                    This market typically prices around 2.20-2.50, offering solid value when you factor in historical host performance. 
                    Since 1990, EVERY host nation has reached the quarterfinals minimum—that's 9 consecutive tournaments. The USA's path 
                    through the Round of 16 likely avoids the absolute top tier (think England, Belgium, or second-placed European teams). 
                    Combined with the fact that knockout matches may be played in front of 80,000+ home fans, this bet essentially asks: 
                    "Will history repeat itself?" The answer is overwhelmingly yes.
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-purple-600/20 text-purple-400 text-sm font-semibold rounded border border-purple-600/30">
                      Recommended Stake: High
                    </span>
                    <span className="text-slate-400 text-sm">• Historical Precedent</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Head-to-Head */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 border-b border-slate-800 pb-3">
            Head-to-Head vs Group Opponents
          </h2>
          <div className="bg-slate-900 rounded-lg border border-slate-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-800">
                  <tr>
                    <th className="text-left px-6 py-4 text-slate-300 font-semibold">Opponent</th>
                    <th className="text-center px-4 py-4 text-slate-300 font-semibold">Overall Record</th>
                    <th className="text-center px-4 py-4 text-slate-300 font-semibold">Last Meeting</th>
                    <th className="text-center px-4 py-4 text-slate-300 font-semibold">USA Win Odds</th>
                    <th className="text-left px-6 py-4 text-slate-300 font-semibold">Key Insight</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">🏴</span>
                        <span className="text-white font-semibold">Wales</span>
                      </div>
                    </td>
                    <td className="text-center px-4 py-4 text-slate-300">
                      <span className="text-green-400 font-semibold">W2</span>-D1-L1
                    </td>
                    <td className="text-center px-4 py-4 text-slate-400 text-sm">
                      2022 WC: 0-1
                    </td>
                    <td className="text-center px-4 py-4">
                      <span className="text-green-400 font-bold text-lg">1.85</span>
                    </td>
                    <td className="px-6 py-4 text-slate-300 text-sm">
                      Revenge factor after 2022 disappointment. Wales' golden generation aging.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">🇮🇷</span>
                        <span className="text-white font-semibold">Iran</span>
                      </div>
                    </td>
                    <td className="text-center px-4 py-4 text-slate-300">
                      <span className="text-green-400 font-semibold">W2</span>-D0-L1
                    </td>
                    <td className="text-center px-4 py-4 text-slate-400 text-sm">
                      2022 WC: 1-0
                    </td>
                    <td className="text-center px-4 py-4">
                      <span className="text-green-400 font-bold text-lg">1.65</span>
                    </td>
                    <td className="px-6 py-4 text-slate-300 text-sm">
                      USA dominated possession (65%) in Qatar. Home advantage decisive.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">🇪🇨</span>
                        <span className="text-white font-semibold">Ecuador</span>
                      </div>
                    </td>
                    <td className="text-center px-4 py-4 text-slate-300">
                      <span className="text-green-400 font-semibold">W3</span>-D2-L2
                    </td>
                    <td className="text-center px-4 py-4 text-slate-400 text-sm">
                      Friendly 2024: 3-1
                    </td>
                    <td className="text-center px-4 py-4">
                      <span className="text-green-400 font-bold text-lg">1.95</span>
                    </td>
                    <td className="px-6 py-4 text-slate-300 text-sm">
                      Ecuador struggles at altitude outside South America. USA clinical in recent meetings.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-slate-800/50 border-t border-slate-700">
              <p className="text-slate-300 text-sm">
                <span className="text-green-400 font-semibold">Group Stage Outlook:</span> USA enters as clear favorites to win the group. 
                Recent form against these opponents is positive, and the home crowd will be deafening. Expect them to secure 7+ points, 
                potentially winning all three matches if Pulisic and McKennie hit form early.
              </p>
            </div>
          </div>
        </section>

        {/* Additional Betting Markets */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 border-b border-slate-800 pb-3">
            More USA Betting Markets
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-slate-900 rounded-lg p-5 border border-slate-800">
              <div className="text-slate-400 text-sm mb-2">Reach Semi-Finals</div>
              <div className="text-2xl font-bold text-white mb-1">13.00</div>
              <div className="text-slate-500 text-xs">Ambitious but possible with favorable draw</div>
            </div>
            <div className="bg-slate-900 rounded-lg p-5 border border-slate-800">
              <div className="text-slate-400 text-sm mb-2">Top CONCACAF Team</div>
              <div className="text-2xl font-bold text-white mb-1">1.55</div>
              <div className="text-slate-500 text-xs">Strong value vs Mexico/Canada</div>
            </div>
            <div className="bg-slate-900 rounded-lg p-5 border border-slate-800">
              <div className="text-slate-400 text-sm mb-2">Pulisic Golden Boot</div>
              <div className="text-2xl font-bold text-white mb-1">26.00</div>
              <div className="text-slate-500 text-xs">Needs deep run + 6+ goals</div>
            </div>
            <div className="bg-slate-900 rounded-lg p-5 border border-slate-800">
              <div className="text-slate-400 text-sm mb-2">Clean Sheet vs Wales</div>
              <div className="text-2xl font-bold text-white mb-1">2.35</div>
              <div className="text-slate-500 text-xs">Turner's reliability key</div>
            </div>
          </div>
        </section>

        {/* Final Verdict */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-slate-900 via-green-950/30 to-slate-900 rounded-xl p-8 border-2 border-green-600/30">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-3xl">⚖️</span>
              Final Verdict: USA 2026 Betting Value
            </h2>
            <div className="prose prose-invert prose-slate max-w-none">
              <p className="text-slate-300 text-lg leading-relaxed mb-4">
                The United States enters this tournament as one of the most compelling betting propositions. While they're not favorites 
                to lift the trophy, the combination of home advantage, a talented young core hitting their prime, and historically 
                unprecedented host-nation performance makes several markets extremely attractive.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-slate-900/80 rounded-lg p-4 border border-green-600/30">
                  <div className="text-green-400 font-bold mb-1">✅ Best Bets</div>
                  <ul className="text-slate-300 text-sm space-y-1 list-disc list-inside">
                    <li>Group Winner (2.10)</li>
                    <li>Reach Quarter-Finals</li>
                    <li>Pulisic Anytime Scorer</li>
                  </ul>
                </div>
                <div className="bg-slate-900/80 rounded-lg p-4 border border-blue-600/30">
                  <div className="text-blue-400 font-bold mb-1">⚠️ Proceed Carefully</div>
                  <ul className="text-slate-300 text-sm space-y-1 list-disc list-inside">
                    <li>Outright Winner (18.00)</li>
                    <li>Golden Boot markets</li>
                    <li>Exact score predictions</li>
                  </ul>
                </div>
                <div className="bg-slate-900/80 rounded-lg p-4 border border-red-600/30">
                  <div className="text-red-400 font-bold mb-1">❌ Avoid</div>
                  <ul className="text-slate-300 text-sm space-y-1 list-disc list-inside">
                    <li>First goal scorer odds</li>
                    <li>Penalties/red cards</li>
                    <li>High-risk parlays</li>
                  </ul>
                </div>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed">
                <span className="font-bold text-green-400">Bottom Line:</span> Bet with your head, not your heart—but the numbers back 
                the USA for a deep run. The host advantage is real, the squad is talented, and the markets are undervaluing their 
                ceiling. Smart money is on the group winner and quarter-final progression bets.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to Back Team USA?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Compare the best odds from top bookmakers and maximize your returns. Don't miss out on value before the lines move.
          </p>
          <Link 
            href="/"
            className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Compare USA Odds Now →
          </Link>
        </div>

      </div>
    </div>
  );
}
