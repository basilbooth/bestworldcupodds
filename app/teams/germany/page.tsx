import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Germany 2026 World Cup Odds & Betting Tips | Die Mannschaft',
  description: 'Expert betting analysis for Germany at the 2026 World Cup. Four-time champions with odds at 9.00. Musiala, Wirtz, and a golden generation ready to shine.',
};

export default function GermanyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-700 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="text-xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors">
            ← Back to All Teams
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <div className="inline-block px-4 py-1 bg-yellow-400/10 border border-yellow-400/30 rounded-full text-yellow-400 text-sm font-semibold mb-4">
              Four-Time World Champions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Germany
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-6">Die Mannschaft</p>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              The four-time world champions return with their most exciting generation since 2014. 
              After hosting Euro 2024, this young, attacking core is ready to reclaim global dominance.
            </p>
          </div>
          
          {/* Flag */}
          <div className="w-48 h-32 md:w-64 md:h-44 rounded-lg overflow-hidden shadow-2xl border-2 border-gray-700">
            <div className="w-full h-1/3 bg-black"></div>
            <div className="w-full h-1/3 bg-red-600"></div>
            <div className="w-full h-1/3 bg-yellow-400"></div>
          </div>
        </div>
      </section>

      {/* Key Odds Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Featured Betting Odds</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/10">
            <div className="text-gray-400 text-sm font-semibold uppercase mb-2">To Win World Cup</div>
            <div className="text-5xl font-bold text-yellow-400 mb-2">9.00</div>
            <div className="text-gray-300 text-sm">Strong value for a proven tournament team</div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/10">
            <div className="text-gray-400 text-sm font-semibold uppercase mb-2">Musiala Breakout Tournament</div>
            <div className="text-5xl font-bold text-yellow-400 mb-2">18.00</div>
            <div className="text-gray-300 text-sm">Golden Ball candidate at excellent odds</div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/10">
            <div className="text-gray-400 text-sm font-semibold uppercase mb-2">To Win Group</div>
            <div className="text-5xl font-bold text-yellow-400 mb-2">1.80</div>
            <div className="text-gray-300 text-sm">Confident start expected from Die Mannschaft</div>
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Tournament Pedigree</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">4</div>
                <div className="text-gray-400 text-sm">World Cups Won</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">2014</div>
                <div className="text-gray-400 text-sm">Last Title</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">20</div>
                <div className="text-gray-400 text-sm">WC Appearances</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">Top 5</div>
                <div className="text-gray-400 text-sm">FIFA Ranking</div>
              </div>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Germany are synonymous with World Cup success. The four-time champions (1954, 1974, 1990, 2014) 
              are the most consistent performers in tournament history, reaching the semi-finals an incredible 
              13 times. Die Mannschaft combine tactical discipline with technical excellence, making them 
              perennial contenders.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              After the disappointment of 2018 and 2022, Germany underwent a generational shift. Hosting 
              Euro 2024 accelerated the development of their young stars, with Jamal Musiala and Florian Wirtz 
              emerging as world-class talents. This exciting attacking core, guided by veteran presence like 
              Manuel Neuer, has restored belief in German football.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              The 2026 World Cup represents the perfect stage for this golden generation. With tournament 
              experience from Euro 2024 and a blend of youth and experience, Germany arrive in North America 
              with genuine title aspirations and odds that may not last long.
            </p>
          </div>
        </div>
      </section>

      {/* Key Players */}
      <section className="container mx-auto px-4 py-12 bg-gray-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Star Players to Watch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Jamal Musiala</h3>
                  <p className="text-yellow-400 font-semibold">Attacking Midfielder</p>
                </div>
                <div className="text-4xl font-bold text-gray-600">10</div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                The Bayern Munich magician is Germany's most exciting talent. At just 23, Musiala combines 
                elite dribbling, vision, and finishing. After dazzling at Euro 2024, he's ready to announce 
                himself on the world stage. Golden Ball dark horse.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Florian Wirtz</h3>
                  <p className="text-yellow-400 font-semibold">Attacking Midfielder</p>
                </div>
                <div className="text-4xl font-bold text-gray-600">7</div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                The Bayer Leverkusen star forms a devastating partnership with Musiala. Wirtz's creativity, 
                passing range, and ability to unlock defenses make Germany unpredictable. Together with Musiala, 
                they create one of world football's most exciting duos.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Kai Havertz</h3>
                  <p className="text-yellow-400 font-semibold">Forward</p>
                </div>
                <div className="text-4xl font-bold text-gray-600">9</div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                The Arsenal forward brings Champions League-winning experience and versatility. Havertz's 
                intelligent movement, aerial ability, and composure in big moments make him the perfect 
                striker for Germany's fluid attacking system.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Manuel Neuer</h3>
                  <p className="text-yellow-400 font-semibold">Goalkeeper</p>
                </div>
                <div className="text-4xl font-bold text-gray-600">1</div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                The legendary captain and 2014 World Cup winner remains world-class. Neuer's shot-stopping, 
                distribution, and sweeper-keeper style provide a solid foundation. His leadership and big-game 
                experience are invaluable for Germany's young stars.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Form */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Recent Form & Momentum</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-3">Euro 2024 Hosts</h3>
                <p className="text-gray-300 leading-relaxed">
                  Hosting the European Championship accelerated Germany's rebuild. The home tournament 
                  provided invaluable experience for their young core and reignited national pride in 
                  Die Mannschaft. The foundation built in 2024 is now paying dividends.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-3">Young Attacking Core</h3>
                <p className="text-gray-300 leading-relaxed">
                  The Musiala-Wirtz partnership has matured into one of Europe's most feared attacking 
                  duos. Supported by Havertz's intelligent movement and emerging talents across the squad, 
                  Germany now possess the attacking firepower to hurt any opponent.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-3">Tactical Evolution</h3>
                <p className="text-gray-300 leading-relaxed">
                  Germany have rediscovered their identity: high pressing, quick transitions, and 
                  dominating possession. The blend of traditional German efficiency with modern 
                  attacking flair makes them a complete team ready to challenge for the title.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Betting Angles */}
      <section className="container mx-auto px-4 py-12 bg-gray-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Expert Betting Angles</h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-l-4 border-yellow-400 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">
                🎯 Value Play: Tournament Winners @ 9.00
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Germany's odds represent exceptional value for a team with their tournament pedigree. 
                Four World Cup titles, 13 semi-final appearances, and the most consistent record in 
                history shouldn't be available at 9.00. This young squad has the talent to go all the way.
              </p>
              <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                <p className="text-sm text-gray-400 mb-2"><strong className="text-yellow-400">Why it wins:</strong></p>
                <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
                  <li>Tournament experience from Euro 2024 hosting</li>
                  <li>Perfect blend of exciting youth and veteran leadership</li>
                  <li>Historical success rate in knockout rounds</li>
                  <li>Tactical versatility and defensive solidity</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-l-4 border-yellow-400 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">
                ⭐ Star Bet: Musiala Breakout Tournament @ 18.00
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                At 23, Jamal Musiala enters his prime World Cup years. The Bayern star has the talent, 
                platform, and supporting cast to dominate the tournament. With Germany expected to progress 
                deep, Musiala could rack up goals, assists, and man-of-the-match performances.
              </p>
              <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                <p className="text-sm text-gray-400 mb-2"><strong className="text-yellow-400">Key indicators:</strong></p>
                <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
                  <li>Central to Germany's attacking play and set-piece routines</li>
                  <li>Form and confidence at all-time high after Euro 2024</li>
                  <li>Golden Ball dark horse with excellent value odds</li>
                  <li>Thrives in big moments and tournament environments</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-l-4 border-yellow-400 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">
                💰 Safe Bet: Group Winners @ 1.80
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Germany rarely stumble in group stages. With their current form, squad depth, and tactical 
                superiority, they should dominate their group. At 1.80, this offers solid returns with 
                minimal risk—perfect for parlays or building tournament betting banks.
              </p>
              <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                <p className="text-sm text-gray-400 mb-2"><strong className="text-yellow-400">Why it's safe:</strong></p>
                <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
                  <li>Strong group stage record across tournaments</li>
                  <li>Squad rotation capability for all three matches</li>
                  <li>Motivation to make statement from game one</li>
                  <li>Quality gap typically evident in opening round</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-yellow-400/10 to-red-600/10 border border-yellow-400/30 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Back Die Mannschaft?</h2>
          <p className="text-gray-300 text-lg mb-6">
            Germany's blend of tournament pedigree and exciting young talent makes them one of 2026's most 
            compelling betting propositions. Don't miss value odds on a proven champion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="px-8 py-3 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors"
            >
              Compare All Teams
            </Link>
            <Link 
              href="/"
              className="px-8 py-3 bg-gray-700 text-white font-bold rounded-lg hover:bg-gray-600 transition-colors"
            >
              View Latest Odds
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-12">
        <div className="container mx-auto px-4 py-8 text-center text-gray-500 text-sm">
          <p>© 2026 Best World Cup Odds. All betting odds are for informational purposes.</p>
          <p className="mt-2">Bet responsibly. 18+ only.</p>
        </div>
      </footer>
    </div>
  );
}
