import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Portugal 2026 World Cup Odds & Betting Tips | Best World Cup Odds',
  description: 'Portugal World Cup 2026 betting odds, squad analysis, and predictions. The Seleção das Quinas brings Golden Generation 2.0 to North America.',
};

export default function PortugalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-green-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="text-xl font-bold text-white hover:text-red-400 transition-colors">
            ← Best World Cup Odds
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-red-600/20 border border-red-500/30 rounded-full text-red-300 text-sm font-semibold mb-4">
              A Seleção das Quinas
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Portugal 🇵🇹
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Euro 2016 Winners | Golden Generation 2.0 | Talented But Inconsistent
          </p>
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-red-600 to-green-600 rounded-lg">
            <p className="text-white font-bold text-lg">Odds to Win: 12.00</p>
          </div>
        </div>
      </section>

      {/* Key Odds */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Markets</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
              <h3 className="text-gray-400 text-sm font-semibold mb-2">TO WIN WORLD CUP</h3>
              <p className="text-4xl font-bold text-white mb-2">12.00</p>
              <p className="text-gray-300 text-sm">Dark horses with quality squad</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
              <h3 className="text-gray-400 text-sm font-semibold mb-2">RONALDO FAREWELL TOUR</h3>
              <p className="text-4xl font-bold text-white mb-2">25.00</p>
              <p className="text-gray-300 text-sm">CR7 to top Portugal scorer</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
              <h3 className="text-gray-400 text-sm font-semibold mb-2">GROUP WINNER</h3>
              <p className="text-4xl font-bold text-white mb-2">2.00</p>
              <p className="text-gray-300 text-sm">Strong group stage performers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-6">Team Overview</h2>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg leading-relaxed">
                The <strong className="text-white">Seleção das Quinas</strong> arrives in North America with a squad 
                that represents what many are calling <strong className="text-red-400">Golden Generation 2.0</strong>. 
                While they shocked Europe by winning Euro 2016, Portugal has been frustratingly inconsistent since, 
                capable of beating anyone on their day but equally prone to unexpected stumbles.
              </p>
              <p className="text-lg leading-relaxed">
                With an abundance of technical talent spread across Europe's elite clubs, Portugal has the firepower 
                to threaten any opponent. The question isn't about quality—it's about whether they can find the 
                consistency and tactical discipline needed to go deep in a World Cup.
              </p>
              <p className="text-lg leading-relaxed">
                The 2026 World Cup may represent a changing of the guard, with Cristiano Ronaldo potentially playing 
                his final tournament while a new generation led by Bernardo Silva and Bruno Fernandes takes center stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Players */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Players</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">Cristiano Ronaldo (If Still Playing)</h3>
              <p className="text-red-400 font-semibold mb-3">Forward | Legend</p>
              <p className="text-gray-300">
                At 41, if CR7 is still in the squad, this will be his farewell tournament. While no longer the explosive 
                force of his prime, his leadership, experience, and goal-scoring instinct in big moments remain invaluable. 
                A proper send-off for the greatest Portuguese player ever.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">Bernardo Silva</h3>
              <p className="text-red-400 font-semibold mb-3">Midfielder | Manchester City</p>
              <p className="text-gray-300">
                The magician who makes everything tick. Bernardo's technical brilliance, work rate, and big-game 
                experience with City make him Portugal's most important player. He's the bridge between defense 
                and attack, the creative spark, and the tactical glue.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">Bruno Fernandes</h3>
              <p className="text-red-400 font-semibold mb-3">Midfielder | Manchester United</p>
              <p className="text-gray-300">
                Portugal's captain and creative heartbeat. Bruno's vision, passing range, and ability to score from 
                distance make him one of the most dangerous playmakers in world football. When he's on form, 
                Portugal can beat anyone.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">Rúben Dias</h3>
              <p className="text-red-400 font-semibold mb-3">Defender | Manchester City</p>
              <p className="text-gray-300">
                The rock at the back. Dias transformed City's defense and brings that same authority to Portugal. 
                His reading of the game, aerial dominance, and composure under pressure make him one of the world's 
                best center-backs. The defensive leader Portugal needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Form */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-6">Recent Form & Qualification</h2>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg leading-relaxed">
                Portugal's qualification campaign showcased both their brilliance and their inconsistency. They 
                dominated weaker opponents with ease, putting four or five past teams without breaking a sweat, 
                but struggled to find rhythm against top-tier competition.
              </p>
              <p className="text-lg leading-relaxed">
                The midfield trio of Bernardo Silva, Bruno Fernandes, and promising youngsters has been electric 
                in patches, while the defense led by Rúben Dias has been generally solid. The attack, however, 
                remains a question mark—especially if Ronaldo's minutes are limited.
              </p>
              <p className="text-lg leading-relaxed">
                <strong className="text-white">Key stat:</strong> Portugal has kept clean sheets against most 
                mid-tier nations but conceded in almost every match against fellow European powerhouses. Their 
                ability to step up against elite opposition will define their 2026 campaign.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Betting Angles */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Three Smart Betting Angles</h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-red-900/20 to-green-900/20 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Group Stage Excellence</h3>
                  <p className="text-gray-300 mb-3">
                    Portugal historically performs well in group stages, topping their group in most major tournaments. 
                    With a favorable draw likely, <strong className="text-white">Portugal to win their group at 2.00</strong> is 
                    solid value. They have the quality to dominate lesser opponents.
                  </p>
                  <p className="text-red-400 font-semibold">Value Rating: ★★★★☆</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-900/20 to-green-900/20 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">The Ronaldo Narrative</h3>
                  <p className="text-gray-300 mb-3">
                    If Ronaldo makes the squad, the <strong className="text-white">"Ronaldo to be Portugal's top scorer" 
                    at 25.00</strong> is a fascinating long shot. Even at 41, CR7's ego and hunger for goals means he'll 
                    demand minutes and penalty duties. If Portugal gets a few pens and Ronaldo starts key matches, this hits.
                  </p>
                  <p className="text-red-400 font-semibold">Value Rating: ★★★☆☆ (High risk, huge reward)</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-900/20 to-green-900/20 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Quarter-Final Exit Pattern</h3>
                  <p className="text-gray-300 mb-3">
                    Portugal often flatter to deceive—good enough to beat most teams, not quite elite enough to win 
                    it all. <strong className="text-white">Portugal to reach quarter-finals but not semis</strong> fits 
                    their pattern perfectly. They'll navigate the group and round of 16, then face a giant and fall short.
                  </p>
                  <p className="text-red-400 font-semibold">Value Rating: ★★★★☆</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Prediction */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-red-600/20 to-green-600/20 backdrop-blur-sm border border-red-500/30 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Realistic Outlook</h2>
            <p className="text-xl text-gray-300 mb-6">
              Portugal has the talent to reach the <strong className="text-white">semi-finals</strong>, but 
              inconsistency and a lack of a world-class striker (post-Ronaldo) will likely see them exit in the 
              <strong className="text-red-400"> quarter-finals</strong> to a more complete team.
            </p>
            <p className="text-lg text-gray-400">
              They're the definition of "dangerous opponent"—capable of beating anyone, but equally capable of 
              losing to anyone. A quarter-final run feels like the sweet spot.
            </p>
          </div>
        </div>
      </section>

      {/* Back to Teams */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <Link 
            href="/"
            className="inline-block px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition-all"
          >
            ← Back to All Teams
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm mt-12">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-gray-400 text-sm">
            © 2026 Best World Cup Odds. All odds are illustrative. Please gamble responsibly.
          </p>
        </div>
      </footer>
    </div>
  );
}
