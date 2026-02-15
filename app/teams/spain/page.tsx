import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spain - 2026 World Cup Odds & Betting Tips | Best World Cup Odds',
  description: 'Spain (La Roja) 2026 World Cup odds, predictions, and betting analysis. Euro 2024 champions return with Yamal, Rodri, and Williams leading a golden generation.',
};

export default function SpainPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-red-900 via-yellow-700 to-red-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="text-6xl">🇪🇸</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
                Spain
              </h1>
            </div>
            <p className="text-xl sm:text-2xl text-yellow-100 font-semibold mb-2">
              La Roja • Euro 2024 Champions
            </p>
            <p className="text-lg text-yellow-50 max-w-2xl mx-auto">
              The beautiful game personified — possession masters with a dazzling new generation
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Key Odds Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-yellow-600 shadow-lg hover:shadow-yellow-600/20 transition-all">
            <div className="text-yellow-400 text-sm font-semibold uppercase tracking-wide mb-2">
              To Win World Cup
            </div>
            <div className="text-4xl font-bold text-white mb-1">8.00</div>
            <div className="text-gray-400 text-sm">Third favorites behind Brazil & France</div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 shadow-lg hover:shadow-yellow-600/20 transition-all">
            <div className="text-yellow-400 text-sm font-semibold uppercase tracking-wide mb-2">
              Yamal Breakout Star
            </div>
            <div className="text-4xl font-bold text-white mb-1">15.00</div>
            <div className="text-gray-400 text-sm">Top scorer or Player of Tournament</div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 shadow-lg hover:shadow-yellow-600/20 transition-all">
            <div className="text-yellow-400 text-sm font-semibold uppercase tracking-wide mb-2">
              Group Winner
            </div>
            <div className="text-4xl font-bold text-white mb-1">1.75</div>
            <div className="text-gray-400 text-sm">Heavy favorites to top their group</div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="bg-gray-800 rounded-xl p-6 sm:p-8 mb-8 border border-gray-700">
          <h2 className="text-3xl font-bold mb-4 text-yellow-400">Tournament Overview</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p className="text-lg">
              <span className="font-bold text-white">La Roja</span> arrive at the 2026 World Cup as reigning European champions, 
              having dominated Euro 2024 with a mesmerizing blend of their trademark possession football and electrifying youth talent. 
              Spain's golden generation 2.0 has announced itself on the world stage.
            </p>
            <p>
              After years of transitional uncertainty following their 2010-2012 dynasty, Spain has rediscovered its identity. 
              The tiki-taka philosophy remains, but now turbocharged with pace, directness, and fearless teenagers who play 
              like seasoned veterans. Luis de la Fuente has built a squad that respects its heritage while embracing modern dynamism.
            </p>
            <p>
              With <span className="font-semibold text-yellow-300">Lamine Yamal</span> terrorizing defenses from the right, 
              <span className="font-semibold text-yellow-300"> Nico Williams</span> flying down the left, 
              <span className="font-semibold text-yellow-300"> Rodri</span> orchestrating from midfield, and 
              <span className="font-semibold text-yellow-300"> Unai Simón</span> providing stability in goal, 
              Spain have all the ingredients to challenge for their second World Cup title.
            </p>
          </div>
        </div>

        {/* Key Players Grid */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6 text-yellow-400">Key Players</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Lamine Yamal */}
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-yellow-600 transition-all">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-bold text-white mb-1">Lamine Yamal</h3>
              <div className="text-yellow-400 text-sm font-semibold mb-3">Right Winger</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                The prodigy who took Euro 2024 by storm. Lightning pace, fearless dribbling, and decision-making beyond his years. 
                Spain's most dangerous weapon.
              </p>
            </div>

            {/* Rodri */}
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-yellow-600 transition-all">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-white mb-1">Rodri</h3>
              <div className="text-yellow-400 text-sm font-semibold mb-3">Defensive Midfielder</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                The metronome. Ballon d'Or contender who controls tempo, wins duels, and rarely makes mistakes. 
                Spain's entire system flows through him.
              </p>
            </div>

            {/* Nico Williams */}
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-yellow-600 transition-all">
              <div className="text-4xl mb-3">🔥</div>
              <h3 className="text-xl font-bold text-white mb-1">Nico Williams</h3>
              <div className="text-yellow-400 text-sm font-semibold mb-3">Left Winger</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Pure speed and directness. Stretches defenses, creates chaos in transition, and provides perfect balance 
                to Yamal on the opposite flank.
              </p>
            </div>

            {/* Unai Simón */}
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-yellow-600 transition-all">
              <div className="text-4xl mb-3">🧤</div>
              <h3 className="text-xl font-bold text-white mb-1">Unai Simón</h3>
              <div className="text-yellow-400 text-sm font-semibold mb-3">Goalkeeper</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Commanding presence with excellent distribution. Essential to Spain's build-up play and a reliable 
                last line of defense in big moments.
              </p>
            </div>

          </div>
        </div>

        {/* Recent Form */}
        <div className="bg-gray-800 rounded-xl p-6 sm:p-8 mb-8 border border-gray-700">
          <h2 className="text-3xl font-bold mb-4 text-yellow-400">Recent Form</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="text-2xl">🏆</div>
              <div>
                <h3 className="font-bold text-white mb-1">Euro 2024 Champions</h3>
                <p className="text-gray-400">
                  Dominated the tournament from start to finish, winning all seven matches including victories over 
                  Germany, France, and England. Yamal and Williams emerged as stars, while Rodri controlled every midfield battle.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="text-2xl">🌟</div>
              <div>
                <h3 className="font-bold text-white mb-1">Youth Resurgence</h3>
                <p className="text-gray-400">
                  The integration of La Masia graduates and young talents from across Spain has revitalized the national team. 
                  Fearless, technically brilliant, and tactically intelligent — this generation plays without pressure.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="text-2xl">📈</div>
              <div>
                <h3 className="font-bold text-white mb-1">Possession Evolution</h3>
                <p className="text-gray-400">
                  Spain hasn't abandoned tiki-taka, they've evolved it. Still dominating possession (average 65%+ at Euro 2024), 
                  but now with vertical passes, explosive transitions, and clinical finishing. The best of both worlds.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Betting Angles */}
        <div className="bg-gradient-to-br from-gray-800 via-gray-850 to-gray-900 rounded-xl p-6 sm:p-8 border border-yellow-600 shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-yellow-400">💰 Three Betting Angles</h2>
          
          <div className="space-y-6">
            
            {/* Angle 1 */}
            <div className="bg-gray-900/50 rounded-lg p-5 border border-gray-700">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl">1️⃣</span>
                <h3 className="text-xl font-bold text-white">Spain to Reach the Final @ 3.50+</h3>
              </div>
              <p className="text-gray-300 leading-relaxed ml-10">
                <span className="font-semibold text-yellow-300">Why it hits:</span> Spain's style is built for tournament football. 
                They control games, exhaust opponents, and have the depth to rotate without dropping quality. Euro 2024 proved they can 
                beat anyone. With favorable group stage seeding and momentum from their European triumph, reaching the final is highly probable.
              </p>
            </div>

            {/* Angle 2 */}
            <div className="bg-gray-900/50 rounded-lg p-5 border border-gray-700">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl">2️⃣</span>
                <h3 className="text-xl font-bold text-white">Lamine Yamal Top Scorer or Player of Tournament @ 15.00</h3>
              </div>
              <p className="text-gray-300 leading-relaxed ml-10">
                <span className="font-semibold text-yellow-300">Why it hits:</span> Yamal is football's next global superstar, 
                and the World Cup is his stage. He thrives under pressure, creates goals from nothing, and takes every big moment in stride. 
                At inflated odds due to his age, this is exceptional value. If Spain go deep (likely), Yamal will be central to it.
              </p>
            </div>

            {/* Angle 3 */}
            <div className="bg-gray-900/50 rounded-lg p-5 border border-gray-700">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl">3️⃣</span>
                <h3 className="text-xl font-bold text-white">Spain to Win Group & Keep 2+ Clean Sheets @ 2.80+</h3>
              </div>
              <p className="text-gray-300 leading-relaxed ml-10">
                <span className="font-semibold text-yellow-300">Why it hits:</span> Spain should dominate their group stage opponents, 
                controlling possession and limiting chances. With Rodri shielding the defense and Unai Simón in top form, clean sheets 
                come naturally. Combine group winner (1.75) with their defensive solidity for a tasty combo bet.
              </p>
            </div>

          </div>

          {/* Disclaimer */}
          <div className="mt-6 pt-6 border-t border-gray-700">
            <p className="text-gray-500 text-sm italic">
              ⚠️ All odds are for illustrative purposes. Always gamble responsibly and within your means.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-yellow-600 to-red-600 rounded-xl p-6 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-2">
              🏆 Spain to Win 2026 World Cup @ 8.00
            </h3>
            <p className="text-yellow-50 mb-4">
              La Roja are back. Don't miss the beautiful game's return to glory.
            </p>
            <div className="inline-flex gap-2 text-sm text-yellow-100">
              <span>⚡ Euro 2024 Champions</span>
              <span>•</span>
              <span>🌟 Golden Generation 2.0</span>
              <span>•</span>
              <span>🔥 Best Odds</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
