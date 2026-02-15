import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Netherlands - 2026 World Cup Betting Odds & Analysis',
  description: 'Complete betting guide for Netherlands (Oranje) at the 2026 World Cup. Dark horse value, key players, odds, and expert predictions.',
};

export default function NetherlandsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-orange-500/20">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-transparent" />
        <div className="container mx-auto px-4 py-12 md:py-20 relative">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-orange-600 rounded-full flex items-center justify-center text-3xl md:text-4xl font-bold border-2 border-orange-400">
                🇳🇱
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500 bg-clip-text text-transparent">
                  Netherlands
                </h1>
                <p className="text-orange-400 text-lg md:text-xl font-semibold mt-1">
                  Oranje • Total Football Legacy
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              The perennial dark horses return with their rich Total Football heritage. 
              After reaching the 2022 World Cup quarter-finals, the Dutch are once again 
              poised to challenge football's elite with their tactical brilliance and 
              world-class talent.
            </p>
          </div>
        </div>
      </section>

      {/* Odds Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Betting Odds
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur border border-orange-500/30 rounded-xl p-6 md:p-8 hover:border-orange-500/50 transition-all">
            <div className="text-orange-400 text-sm font-semibold mb-2 uppercase tracking-wide">
              Tournament Winner
            </div>
            <div className="text-5xl md:text-6xl font-bold text-white mb-2">15.00</div>
            <div className="text-gray-400">
              Solid value for a team with proven knockout pedigree
            </div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur border border-orange-500/30 rounded-xl p-6 md:p-8 hover:border-orange-500/50 transition-all">
            <div className="text-orange-400 text-sm font-semibold mb-2 uppercase tracking-wide">
              Group Winner
            </div>
            <div className="text-5xl md:text-6xl font-bold text-white mb-2">2.20</div>
            <div className="text-gray-400">
              Strong favorites to top their group as usual
            </div>
          </div>
        </div>
      </section>

      {/* Key Players */}
      <section className="bg-gray-800/30 border-y border-orange-500/20 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Key Players
            </span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: 'Virgil van Dijk',
                position: 'Defender',
                club: 'Liverpool',
                description: 'World-class defensive leader and captain',
                icon: '🛡️'
              },
              {
                name: 'Frenkie de Jong',
                position: 'Midfielder',
                club: 'Barcelona',
                description: 'Orchestrator of Dutch midfield brilliance',
                icon: '🎯'
              },
              {
                name: 'Cody Gakpo',
                position: 'Forward',
                club: 'Liverpool',
                description: 'Dynamic attacker with big-game experience',
                icon: '⚡'
              },
              {
                name: 'Matthijs de Ligt',
                position: 'Defender',
                club: 'Bayern Munich',
                description: 'Young defensive powerhouse',
                icon: '🔒'
              }
            ].map((player) => (
              <div
                key={player.name}
                className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-6 hover:border-orange-500/50 transition-all hover:scale-105"
              >
                <div className="text-4xl mb-3">{player.icon}</div>
                <h3 className="text-xl font-bold text-orange-400 mb-1">{player.name}</h3>
                <div className="text-sm text-gray-400 mb-1">{player.position}</div>
                <div className="text-xs text-orange-300 mb-3">{player.club}</div>
                <p className="text-gray-300 text-sm">{player.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Form */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Recent Form & History
          </span>
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-gray-800/50 backdrop-blur border border-orange-500/30 rounded-xl p-6 md:p-8">
            <h3 className="text-2xl font-bold text-orange-400 mb-4 flex items-center gap-3">
              <span className="text-3xl">🏆</span>
              2022 World Cup
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Reached the quarter-finals with a strong campaign, showcasing their trademark 
              tactical discipline and attacking flair. Dominated the group stage before a 
              hard-fought knockout run demonstrated their championship credentials.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-orange-600/20 text-orange-300 px-3 py-1 rounded-full text-sm border border-orange-500/30">
                Quarter-Finalists
              </span>
              <span className="bg-orange-600/20 text-orange-300 px-3 py-1 rounded-full text-sm border border-orange-500/30">
                Group Winners
              </span>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur border border-orange-500/30 rounded-xl p-6 md:p-8">
            <h3 className="text-2xl font-bold text-orange-400 mb-4 flex items-center gap-3">
              <span className="text-3xl">📊</span>
              Qualification Campaign
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Consistent qualifiers who rarely falter when it matters. The Dutch machine 
              rolled through their qualifying group with characteristic efficiency, blending 
              youth and experience while maintaining their Total Football philosophy.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-orange-600/20 text-orange-300 px-3 py-1 rounded-full text-sm border border-orange-500/30">
                Dominant Qualifiers
              </span>
              <span className="bg-orange-600/20 text-orange-300 px-3 py-1 rounded-full text-sm border border-orange-500/30">
                Tactical Excellence
              </span>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur border border-orange-500/30 rounded-xl p-6 md:p-8">
            <h3 className="text-2xl font-bold text-orange-400 mb-4 flex items-center gap-3">
              <span className="text-3xl">⚽</span>
              Total Football Heritage
            </h3>
            <p className="text-gray-300 leading-relaxed">
              The birthplace of Total Football continues to influence world football. 
              While they've come close multiple times (3 World Cup finals), the Oranje 
              remain dangerous opponents with their fluidity, technical excellence, and 
              tactical innovation that keeps evolving generation after generation.
            </p>
          </div>
        </div>
      </section>

      {/* Betting Angles */}
      <section className="bg-gray-800/30 border-y border-orange-500/20 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Betting Angles
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur border border-orange-500/30 rounded-xl p-6 md:p-8 hover:border-orange-500/60 transition-all">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-2xl font-bold text-orange-400 mb-4">Dark Horse Value</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                At 15.00 odds, Netherlands offers exceptional value. They're perennial 
                underestimators despite consistently reaching latter stages. Their tactical 
                discipline and big-game experience make them dangerous in knockouts.
              </p>
              <div className="bg-orange-600/20 border border-orange-500/30 rounded-lg p-3">
                <div className="text-sm text-orange-300 font-semibold">Value Rating</div>
                <div className="text-2xl font-bold text-orange-400">★★★★☆</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur border border-orange-500/30 rounded-xl p-6 md:p-8 hover:border-orange-500/60 transition-all">
              <div className="text-4xl mb-4">🧱</div>
              <h3 className="text-2xl font-bold text-orange-400 mb-4">Clean Sheet Potential</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                With van Dijk and de Ligt marshalling the defense, Netherlands boasts one of 
                the world's most formidable backlines. They're organized, disciplined, and 
                rarely concede soft goals. Strong clean sheet value in group matches.
              </p>
              <div className="bg-orange-600/20 border border-orange-500/30 rounded-lg p-3">
                <div className="text-sm text-orange-300 font-semibold">Defensive Rating</div>
                <div className="text-2xl font-bold text-orange-400">★★★★★</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur border border-orange-500/30 rounded-xl p-6 md:p-8 hover:border-orange-500/60 transition-all">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-orange-400 mb-4">Knockout Stage Reach</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Netherlands rarely fails to escape the group stage and has a proven track 
                record of deep tournament runs. Betting on them to reach the quarter-finals 
                or semi-finals offers safer, value-driven opportunities.
              </p>
              <div className="bg-orange-600/20 border border-orange-500/30 rounded-lg p-3">
                <div className="text-sm text-orange-300 font-semibold">Consistency Rating</div>
                <div className="text-2xl font-bold text-orange-400">★★★★★</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-600/20 to-orange-800/20 backdrop-blur border border-orange-500/30 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-400">
            Ready to Back the Oranje?
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Netherlands offers compelling value as dark horses with championship pedigree. 
            Their Total Football heritage, world-class squad, and tactical excellence make 
            them a smart betting proposition for the 2026 World Cup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-orange-600/30">
              View Best Odds
            </button>
            <button className="bg-gray-700/50 hover:bg-gray-700 text-white font-bold py-4 px-8 rounded-xl transition-all border border-orange-500/30 hover:border-orange-500/50">
              Compare All Teams
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
