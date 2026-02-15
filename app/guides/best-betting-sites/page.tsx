import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best World Cup Betting Sites 2026 | Top Bookmaker Comparison',
  description: 'Compare the best World Cup 2026 betting sites. Expert reviews of DraftKings, FanDuel, BetMGM, Bet365, Caesars, and crypto options like Cloudbet, Stake, and BC.Game. Find the perfect sportsbook for your needs.',
  keywords: 'world cup betting sites, world cup 2026 betting, best betting sites world cup, soccer betting sites, crypto betting sites, world cup odds comparison',
};

interface BookmakerRating {
  name: string;
  rating: number;
  logo?: string;
  promoted?: boolean;
  pros: string[];
  cons: string[];
  features: {
    oddsQuality: string;
    markets: string;
    depositMethods: string[];
    cryptoOptions?: string[];
    welcomeBonus?: string;
    liveStreaming?: boolean;
    cashOut?: boolean;
  };
  bestFor: string;
}

const bookmakers: BookmakerRating[] = [
  {
    name: 'DraftKings',
    rating: 4.7,
    promoted: true,
    pros: [
      'Extensive World Cup markets (500+ per match)',
      'Competitive odds, especially on US matches',
      'Industry-leading mobile app experience',
      'Same Game Parlay builder with great boosts',
      'Fast payouts and reliable customer service',
    ],
    cons: [
      'Not available in all US states',
      'Some international markets limited vs European books',
      'High wagering requirements on bonuses',
    ],
    features: {
      oddsQuality: 'Excellent - consistently top 3 for soccer odds',
      markets: '500+ markets per match including player props, corners, cards, team totals',
      depositMethods: ['Credit/Debit Card', 'PayPal', 'Online Banking', 'Cash at Casino'],
      welcomeBonus: 'Bet $5, Get $200 in Bonus Bets',
      liveStreaming: false,
      cashOut: true,
    },
    bestFor: 'US bettors seeking comprehensive markets and mobile convenience',
  },
  {
    name: 'FanDuel',
    rating: 4.6,
    promoted: true,
    pros: [
      'Best-in-class user interface',
      'Excellent live betting platform with rapid updates',
      'No-sweat first bet promotions',
      'Strong parlay offerings with boosts',
      'Quick withdrawal processing',
    ],
    cons: [
      'Odds can be slightly lower than competitors',
      'Limited international soccer compared to Bet365',
      'Geographic restrictions within US',
    ],
    features: {
      oddsQuality: 'Very Good - solid but occasionally trails DraftKings',
      markets: '400+ markets per match with focus on popular bets',
      depositMethods: ['Credit/Debit Card', 'PayPal', 'FanDuel Prepaid Card', 'Online Banking'],
      welcomeBonus: 'No Sweat First Bet up to $1,000',
      liveStreaming: false,
      cashOut: true,
    },
    bestFor: 'Casual bettors and those prioritizing user experience',
  },
  {
    name: 'BetMGM',
    rating: 4.5,
    pros: [
      'Deep markets on major matches',
      'Edit My Bet feature for adjusting active wagers',
      'Strong loyalty rewards program',
      'Parlay+ for customized combo bets',
      'Solid odds across all markets',
    ],
    cons: [
      'App can be slower than DraftKings/FanDuel',
      'Customer service response times vary',
      'Some states excluded',
    ],
    features: {
      oddsQuality: 'Very Good - middle of the pack for US books',
      markets: '350+ markets per match with unique prop builders',
      depositMethods: ['Credit/Debit Card', 'PayPal', 'Bank Transfer', 'MGM Prepaid Card'],
      welcomeBonus: 'Up to $1,500 Paid Back in Bonus Bets',
      liveStreaming: false,
      cashOut: true,
    },
    bestFor: 'Loyalty seekers and those wanting flexible bet editing',
  },
  {
    name: 'Bet365',
    rating: 4.8,
    pros: [
      'Unmatched breadth of markets (1000+ per major match)',
      'Best live streaming service for soccer',
      'Superior international soccer coverage',
      'Build-a-Bet feature for custom parlays',
      'Outstanding in-play betting platform',
    ],
    cons: [
      'Only available in select US states (expanding)',
      'Interface can feel cluttered for beginners',
      'Bonus terms more restrictive than US-only books',
    ],
    features: {
      oddsQuality: 'Outstanding - industry benchmark for soccer odds',
      markets: '1000+ markets per match including obscure props and team specials',
      depositMethods: ['Credit/Debit Card', 'PayPal', 'Bank Transfer', 'Apple Pay'],
      welcomeBonus: 'Bet $1 Get $365 in Bonus Bets',
      liveStreaming: true,
      cashOut: true,
    },
    bestFor: 'Serious soccer bettors demanding maximum market variety',
  },
  {
    name: 'Caesars',
    rating: 4.3,
    pros: [
      'Generous promotional offers',
      'Caesars Rewards integration (hotel comps, dining)',
      'Decent market depth on major matches',
      'Established brand trust',
      'Good odds boosts on World Cup futures',
    ],
    cons: [
      'App stability issues reported',
      'Fewer markets than top competitors',
      'Withdrawal processing can be slow',
    ],
    features: {
      oddsQuality: 'Good - competitive but rarely the best line',
      markets: '300+ markets per match with focus on mainstream bets',
      depositMethods: ['Credit/Debit Card', 'PayPal', 'Bank Transfer', 'Caesars Cage'],
      welcomeBonus: 'Up to $1,000 First Bet on Caesars',
      liveStreaming: false,
      cashOut: true,
    },
    bestFor: 'Caesars Rewards members and bonus hunters',
  },
  {
    name: 'Cloudbet',
    rating: 4.4,
    pros: [
      'Full crypto betting - Bitcoin, Ethereum, USDT, and 20+ altcoins',
      'No KYC requirements for crypto users',
      'High betting limits',
      'Available worldwide (except restricted jurisdictions)',
      'Fast crypto withdrawals (under 30 minutes)',
    ],
    cons: [
      'No fiat currency options',
      'Fewer markets than Bet365',
      'Limited customer support hours',
    ],
    features: {
      oddsQuality: 'Very Good - competitive pricing on major markets',
      markets: '400+ markets per match with focus on Asian handicaps',
      depositMethods: [],
      cryptoOptions: ['Bitcoin', 'Ethereum', 'Litecoin', 'USDT', 'USDC', 'XRP', '20+ others'],
      welcomeBonus: '100% Deposit Match up to 5 BTC',
      liveStreaming: false,
      cashOut: true,
    },
    bestFor: 'Crypto enthusiasts and privacy-focused bettors',
  },
  {
    name: 'Stake',
    rating: 4.6,
    pros: [
      'Pure crypto platform - instant deposits/withdrawals',
      'No betting limits on most markets',
      'Sleek, modern interface',
      'VIP program with cashback and rewards',
      'Active community and social features',
    ],
    cons: [
      'Not available in US',
      'Learning curve for crypto newcomers',
      'No traditional currency support',
    ],
    features: {
      oddsQuality: 'Excellent - sharp lines, good value on player props',
      markets: '500+ markets per match with unique prop combinations',
      depositMethods: [],
      cryptoOptions: ['Bitcoin', 'Ethereum', 'Litecoin', 'Dogecoin', 'TRX', 'USDT', '15+ others'],
      welcomeBonus: '200% Deposit Bonus + Daily Rakeback',
      liveStreaming: false,
      cashOut: true,
    },
    bestFor: 'International crypto bettors seeking unlimited action',
  },
  {
    name: 'BC.Game',
    rating: 4.2,
    pros: [
      'Wide crypto selection (50+ cryptocurrencies)',
      'Provably fair betting system',
      'Generous rakeback and VIP program',
      'No geo-restrictions for most users',
      'Gamification features and bonuses',
    ],
    cons: [
      'Interface less polished than Stake',
      'Smaller market selection on niche props',
      'Customer support can be slow during peak times',
    ],
    features: {
      oddsQuality: 'Good - solid pricing, occasional value lines',
      markets: '250+ markets per match focusing on main markets',
      depositMethods: [],
      cryptoOptions: ['Bitcoin', 'Ethereum', 'BNB', 'Cardano', 'Solana', 'Polygon', '50+ others'],
      welcomeBonus: '300% Deposit Bonus up to $20,000',
      liveStreaming: false,
      cashOut: true,
    },
    bestFor: 'Crypto diversifiers and bonus maximizers',
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className="text-lg">
          {star <= Math.floor(rating) ? '⭐' : star - 0.5 <= rating ? '⭐' : '☆'}
        </span>
      ))}
      <span className="ml-2 text-sm text-gray-400">{rating.toFixed(1)}/5.0</span>
    </div>
  );
};

const BookmakerCard = ({ bookmaker }: { bookmaker: BookmakerRating }) => {
  return (
    <div className={`bg-gray-800 rounded-lg p-6 border ${bookmaker.promoted ? 'border-yellow-500' : 'border-gray-700'} hover:border-gray-600 transition-all`}>
      {bookmaker.promoted && (
        <div className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
          EDITOR'S CHOICE
        </div>
      )}
      
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold text-white">{bookmaker.name}</h3>
        <StarRating rating={bookmaker.rating} />
      </div>

      <div className="mb-4 p-3 bg-gray-900 rounded border border-gray-700">
        <p className="text-sm text-gray-300 italic">Best for: <span className="text-white font-medium">{bookmaker.bestFor}</span></p>
      </div>

      {bookmaker.features.welcomeBonus && (
        <div className="mb-4 p-3 bg-green-900/20 border border-green-700 rounded">
          <p className="text-sm font-semibold text-green-400">🎁 Welcome Bonus</p>
          <p className="text-white">{bookmaker.features.welcomeBonus}</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <h4 className="text-green-400 font-semibold mb-2 flex items-center gap-2">
            <span>✓</span> Pros
          </h4>
          <ul className="space-y-1">
            {bookmaker.pros.map((pro, idx) => (
              <li key={idx} className="text-sm text-gray-300 pl-4 relative before:content-['•'] before:absolute before:left-0">
                {pro}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-red-400 font-semibold mb-2 flex items-center gap-2">
            <span>✗</span> Cons
          </h4>
          <ul className="space-y-1">
            {bookmaker.cons.map((con, idx) => (
              <li key={idx} className="text-sm text-gray-300 pl-4 relative before:content-['•'] before:absolute before:left-0">
                {con}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-y-3 border-t border-gray-700 pt-4">
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Odds Quality</p>
          <p className="text-sm text-white">{bookmaker.features.oddsQuality}</p>
        </div>

        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Market Depth</p>
          <p className="text-sm text-white">{bookmaker.features.markets}</p>
        </div>

        {bookmaker.features.depositMethods.length > 0 && (
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Deposit Methods</p>
            <div className="flex flex-wrap gap-2">
              {bookmaker.features.depositMethods.map((method, idx) => (
                <span key={idx} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                  {method}
                </span>
              ))}
            </div>
          </div>
        )}

        {bookmaker.features.cryptoOptions && (
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Crypto Options</p>
            <div className="flex flex-wrap gap-2">
              {bookmaker.features.cryptoOptions.map((crypto, idx) => (
                <span key={idx} className="text-xs bg-orange-900/30 text-orange-400 px-2 py-1 rounded border border-orange-700">
                  {crypto}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center gap-4 text-xs text-gray-400 pt-2">
          <span className={bookmaker.features.liveStreaming ? 'text-green-400' : 'text-gray-600'}>
            {bookmaker.features.liveStreaming ? '✓' : '✗'} Live Streaming
          </span>
          <span className={bookmaker.features.cashOut ? 'text-green-400' : 'text-gray-600'}>
            {bookmaker.features.cashOut ? '✓' : '✗'} Cash Out
          </span>
        </div>
      </div>
    </div>
  );
};

export default function BestBettingSitesGuide() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-blue-400 hover:text-blue-300 text-sm mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Best World Cup Betting Sites 2026
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Expert comparison of top bookmakers for the 2026 FIFA World Cup. Find the perfect betting site for your needs with our in-depth analysis of odds, markets, and features.
          </p>
          <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-4">
            <p className="text-sm text-blue-300">
              💡 <strong>Pro Tip:</strong> Don't settle for one bookmaker's odds. Use our{' '}
              <Link href="/" className="text-blue-400 hover:underline font-semibold">
                live odds comparison tool
              </Link>{' '}
              to find the best lines across all these sites in real-time. Even a 1% better odd can mean thousands in extra profit over a tournament.
            </p>
          </div>
        </div>

        {/* Quick Comparison Table */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Quick Comparison Overview</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-gray-700">
                <tr>
                  <th className="text-left p-3 text-white">Bookmaker</th>
                  <th className="text-left p-3 text-white">Rating</th>
                  <th className="text-left p-3 text-white">Best Feature</th>
                  <th className="text-left p-3 text-white">Payment Type</th>
                  <th className="text-left p-3 text-white">US Available</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {bookmakers.map((book) => (
                  <tr key={book.name} className="hover:bg-gray-750">
                    <td className="p-3 font-semibold text-white">{book.name}</td>
                    <td className="p-3 text-yellow-400">{book.rating}/5.0</td>
                    <td className="p-3 text-gray-300">{book.pros[0]}</td>
                    <td className="p-3">
                      <span className={`text-xs px-2 py-1 rounded ${book.features.cryptoOptions ? 'bg-orange-900/30 text-orange-400' : 'bg-gray-700 text-gray-300'}`}>
                        {book.features.cryptoOptions ? 'Crypto Only' : 'Fiat'}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className={book.name === 'Stake' ? 'text-red-400' : 'text-green-400'}>
                        {book.name === 'Stake' ? '✗ No' : '✓ Yes'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed Reviews */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Detailed Bookmaker Reviews</h2>
          <p className="text-gray-400 mb-6">
            Our expert analysis of the top 8 betting sites for World Cup 2026, including odds quality, market variety, and unique features.
          </p>
          <div className="grid gap-6">
            {bookmakers.map((bookmaker) => (
              <BookmakerCard key={bookmaker.name} bookmaker={bookmaker} />
            ))}
          </div>
        </section>

        {/* How to Choose Guide */}
        <section className="mb-12 bg-gray-800 rounded-lg p-8 border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-6">How to Choose the Right World Cup Betting Site</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-blue-400">1.</span> Assess Your Betting Style
              </h3>
              <p className="text-gray-300 mb-2">
                Different bettors need different features. Consider what matters most to you:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="text-gray-300 pl-4 relative before:content-['→'] before:absolute before:left-0">
                  <strong className="text-white">Casual bettors:</strong> Prioritize user experience and simple interfaces (FanDuel, DraftKings)
                </li>
                <li className="text-gray-300 pl-4 relative before:content-['→'] before:absolute before:left-0">
                  <strong className="text-white">Serious/pro bettors:</strong> Focus on odds quality and market depth (Bet365, DraftKings)
                </li>
                <li className="text-gray-300 pl-4 relative before:content-['→'] before:absolute before:left-0">
                  <strong className="text-white">Live betting fans:</strong> Look for fast updates and streaming (Bet365, FanDuel)
                </li>
                <li className="text-gray-300 pl-4 relative before:content-['→'] before:absolute before:left-0">
                  <strong className="text-white">Privacy-focused:</strong> Consider crypto options with no KYC (Cloudbet, Stake)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-blue-400">2.</span> Compare Odds Across Sites
              </h3>
              <p className="text-gray-300 mb-2">
                Odds variance between bookmakers can be substantial. For example, on a single World Cup match:
              </p>
              <div className="bg-gray-900 rounded p-4 my-3 border border-gray-700">
                <p className="text-sm text-gray-400 mb-2">Example: USA to Win</p>
                <ul className="text-sm space-y-1">
                  <li className="text-gray-300">DraftKings: <span className="text-green-400 font-semibold">+185</span></li>
                  <li className="text-gray-300">FanDuel: <span className="text-yellow-400">+180</span></li>
                  <li className="text-gray-300">BetMGM: <span className="text-red-400">+175</span></li>
                </ul>
                <p className="text-xs text-gray-500 mt-2">
                  A $100 bet returns $285 vs $280 vs $275 - that's a $10 difference on one bet!
                </p>
              </div>
              <p className="text-gray-300">
                <strong className="text-white">Solution:</strong> Use an odds comparison site (like ours!) to instantly see which book offers the best line for each bet. Line shopping is the single most important habit for profitable betting.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-blue-400">3.</span> Check Market Availability
              </h3>
              <p className="text-gray-300 mb-2">
                Not all bookmakers offer the same markets. Consider what types of bets you enjoy:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="text-gray-300 pl-4 relative before:content-['•'] before:absolute before:left-0">
                  <strong className="text-white">Mainstream markets</strong> (match winner, over/under): Available on all sites
                </li>
                <li className="text-gray-300 pl-4 relative before:content-['•'] before:absolute before:left-0">
                  <strong className="text-white">Player props</strong> (goal scorers, assists): Best at DraftKings, Bet365, Stake
                </li>
                <li className="text-gray-300 pl-4 relative before:content-['•'] before:absolute before:left-0">
                  <strong className="text-white">Niche markets</strong> (corners, cards, specific minutes): Bet365 leads by far
                </li>
                <li className="text-gray-300 pl-4 relative before:content-['•'] before:absolute before:left-0">
                  <strong className="text-white">Futures</strong> (tournament winner, golden boot): All sites offer, but odds vary significantly
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-blue-400">4.</span> Evaluate Payment Methods
              </h3>
              <p className="text-gray-300 mb-2">
                Your location and preferred payment method will narrow your options:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-3">
                <div className="bg-gray-900 rounded p-4 border border-gray-700">
                  <h4 className="font-semibold text-white mb-2">🇺🇸 US Bettors (Fiat)</h4>
                  <p className="text-sm text-gray-300">DraftKings, FanDuel, BetMGM, Bet365, Caesars offer standard payment methods: credit cards, PayPal, bank transfers. Fast deposits, withdrawals typically 1-5 days.</p>
                </div>
                <div className="bg-gray-900 rounded p-4 border border-orange-700">
                  <h4 className="font-semibold text-white mb-2">🌍 International/Crypto Users</h4>
                  <p className="text-sm text-gray-300">Cloudbet, Stake, BC.Game provide anonymous crypto betting with instant deposits/withdrawals. Perfect for users in restricted regions or seeking privacy.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-blue-400">5.</span> Consider Bonuses (But Read the Fine Print)
              </h3>
              <p className="text-gray-300 mb-2">
                Welcome bonuses look attractive but come with conditions. Key factors to evaluate:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="text-gray-300 pl-4 relative before:content-['⚠️'] before:absolute before:left-0">
                  <strong className="text-white">Wagering requirements:</strong> How many times you must bet the bonus (20x-40x is standard)
                </li>
                <li className="text-gray-300 pl-4 relative before:content-['⚠️'] before:absolute before:left-0">
                  <strong className="text-white">Minimum odds:</strong> Bets below certain odds may not count toward rollover
                </li>
                <li className="text-gray-300 pl-4 relative before:content-['⚠️'] before:absolute before:left-0">
                  <strong className="text-white">Expiration:</strong> Time limits to use the bonus (typically 7-30 days)
                </li>
                <li className="text-gray-300 pl-4 relative before:content-['⚠️'] before:absolute before:left-0">
                  <strong className="text-white">Restrictions:</strong> Some bets (heavy favorites, live bets) may be excluded
                </li>
              </ul>
              <p className="text-gray-300 mt-2">
                <strong className="text-white">Reality check:</strong> Don't choose a bookmaker solely for the bonus. Long-term factors like odds quality and market selection matter far more for profitability.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-blue-400">6.</span> Test Customer Support Before You Need It
              </h3>
              <p className="text-gray-300">
                Reach out with a simple question before depositing large amounts. Good customer support can save you immense frustration when issues arise. Look for 24/7 live chat (DraftKings, FanDuel, Bet365 excel here).
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-green-900/20 border border-green-700 rounded-lg">
            <p className="text-green-300 font-semibold mb-2">💡 Our Recommendation: Multi-Book Strategy</p>
            <p className="text-gray-300 text-sm">
              Don't limit yourself to one bookmaker. Serious bettors maintain accounts at 3-5 sites to always get the best odds. Use our comparison tool to instantly see which book has the best line for each specific bet. This "line shopping" approach is the difference between winning and losing bettors.
            </p>
          </div>
        </section>

        {/* Why Use Odds Comparison Sites */}
        <section className="mb-12 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-8 border border-blue-700">
          <h2 className="text-3xl font-bold text-white mb-6">Why Odds Comparison Sites Give You an Edge</h2>
          
          <p className="text-gray-300 mb-4">
            Even with the best bookmaker, you're leaving money on the table without comparing odds across all available sites. Here's why odds comparison is essential for World Cup 2026 betting:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-gray-800/50 rounded-lg p-5 border border-gray-700">
              <div className="text-3xl mb-3">⏱️</div>
              <h3 className="font-semibold text-white mb-2">Save Time</h3>
              <p className="text-sm text-gray-300">
                Instead of checking 8 bookmakers manually, see all odds in one place. Get the best line in seconds, not minutes.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-5 border border-gray-700">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-semibold text-white mb-2">Maximize Profit</h3>
              <p className="text-sm text-gray-300">
                Odds can vary 5-10% between books. On a $10,000 bankroll over the tournament, that's $500-$1,000 in extra profit from better odds alone.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-5 border border-gray-700">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-semibold text-white mb-2">Spot Value</h3>
              <p className="text-sm text-gray-300">
                Identify when one book has mispriced a line compared to the market. These value opportunities are where sharp bettors profit.
              </p>
            </div>
          </div>

          <div className="bg-gray-900/70 rounded-lg p-5 border border-gray-700">
            <h4 className="font-semibold text-white mb-3">Real Example: 2022 World Cup Final</h4>
            <p className="text-sm text-gray-300 mb-2">
              Argentina vs France - odds for Argentina to win in regulation:
            </p>
            <ul className="text-sm space-y-1 mb-3">
              <li className="text-gray-300">• Best odds: <span className="text-green-400 font-semibold">+165</span> (Bet365)</li>
              <li className="text-gray-300">• Worst odds: <span className="text-red-400 font-semibold">+145</span> (Local book)</li>
              <li className="text-gray-300">• Difference on $100 bet: <span className="text-yellow-400 font-semibold">$20 extra profit</span></li>
            </ul>
            <p className="text-sm text-gray-300">
              Multiply this across dozens of bets during the tournament, and the value of line shopping becomes crystal clear. Odds comparison isn't optional—it's fundamental to winning betting strategy.
            </p>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Compare Live World Cup Odds →
            </Link>
          </div>
        </section>

        {/* Crypto vs Traditional */}
        <section className="mb-12 bg-gray-800 rounded-lg p-8 border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-6">Crypto vs Traditional Sportsbooks: Which is Right for You?</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span>💳</span> Traditional Fiat Sportsbooks
              </h3>
              <div className="space-y-3">
                <div className="bg-green-900/20 border border-green-700 rounded p-3">
                  <p className="text-sm font-semibold text-green-400 mb-1">✓ Advantages</p>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Regulated and licensed (safer for large deposits)</li>
                    <li>• Familiar payment methods (credit cards, PayPal)</li>
                    <li>• Better customer protection and recourse</li>
                    <li>• More markets and features (live streaming on Bet365)</li>
                    <li>• Generous welcome bonuses</li>
                  </ul>
                </div>
                <div className="bg-red-900/20 border border-red-700 rounded p-3">
                  <p className="text-sm font-semibold text-red-400 mb-1">✗ Disadvantages</p>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Slower withdrawals (1-5 business days)</li>
                    <li>• Geographic restrictions (not available everywhere)</li>
                    <li>• Full KYC required (ID, proof of address)</li>
                    <li>• Betting limits on winning players</li>
                    <li>• Tax reporting implications</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span>₿</span> Crypto Sportsbooks
              </h3>
              <div className="space-y-3">
                <div className="bg-green-900/20 border border-green-700 rounded p-3">
                  <p className="text-sm font-semibold text-green-400 mb-1">✓ Advantages</p>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Instant deposits and withdrawals (minutes, not days)</li>
                    <li>• No KYC for most platforms (anonymous betting)</li>
                    <li>• Available worldwide (except banned jurisdictions)</li>
                    <li>• No betting limits or account restrictions</li>
                    <li>• Lower fees, especially for international users</li>
                  </ul>
                </div>
                <div className="bg-red-900/20 border border-red-700 rounded p-3">
                  <p className="text-sm font-semibold text-red-400 mb-1">✗ Disadvantages</p>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Less regulatory protection (higher risk)</li>
                    <li>• Crypto price volatility (your winnings fluctuate)</li>
                    <li>• Learning curve for crypto beginners</li>
                    <li>• Smaller market selection vs Bet365</li>
                    <li>• Customer support often slower</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-900/20 border border-blue-700 rounded">
            <p className="text-sm text-blue-300">
              <strong>Our Take:</strong> If you're in a regulated US state, start with traditional books (DraftKings, FanDuel, Bet365) for security and features. If you value privacy, speed, or live in a restricted region, crypto books (Cloudbet, Stake) are excellent alternatives. Many experienced bettors use both: traditional for large, serious bets, and crypto for flexibility and speed.
            </p>
          </div>
        </section>

        {/* Responsible Gambling */}
        <section className="mb-12 bg-yellow-900/20 border-2 border-yellow-700 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span>⚠️</span> Responsible Gambling: Bet Smart, Stay Safe
          </h2>
          
          <p className="text-gray-300 mb-6">
            The World Cup is exciting, but betting should enhance your enjoyment, not create financial stress. Follow these principles to bet responsibly:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
              <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-green-400">✓</span> Do This
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="pl-4 relative before:content-['→'] before:absolute before:left-0">Set a tournament budget BEFORE you start betting</li>
                <li className="pl-4 relative before:content-['→'] before:absolute before:left-0">Never bet more than 1-5% of your bankroll on a single match</li>
                <li className="pl-4 relative before:content-['→'] before:absolute before:left-0">Use deposit limits available on most platforms</li>
                <li className="pl-4 relative before:content-['→'] before:absolute before:left-0">Track your bets to understand your performance</li>
                <li className="pl-4 relative before:content-['→'] before:absolute before:left-0">Take breaks during the tournament</li>
                <li className="pl-4 relative before:content-['→'] before:absolute before:left-0">Only bet with money you can afford to lose</li>
                <li className="pl-4 relative before:content-['→'] before:absolute before:left-0">Treat betting as entertainment, not income</li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
              <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-red-400">✗</span> Avoid This
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="pl-4 relative before:content-['→'] before:absolute before:left-0">Chasing losses by increasing bet size</li>
                <li className="pl-4 relative before:content-['→'] before:absolute before:left-0">Betting while intoxicated or emotional</li>
                <li className="pl-4 relative before:content-['→'] before:absolute before:left-0">Borrowing money to bet</li>
                <li className="pl-4 relative before:content-['→'] before:absolute before:left-0">Lying to friends/family about betting habits</li>
                <li className="pl-4 relative before:content-['→'] before:absolute before:left-0">Betting on credit or money needed for bills</li>
                <li className="pl-4 relative before:content-['→'] before:absolute before:left-0">Trying to "win back" yesterday's losses today</li>
                <li className="pl-4 relative before:content-['→'] before:absolute before:left-0">Ignoring time spent betting (track your hours)</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-5 border border-yellow-700">
            <h4 className="font-semibold text-yellow-400 mb-3">🚨 Warning Signs of Problem Gambling</h4>
            <p className="text-sm text-gray-300 mb-3">
              If you notice any of these behaviors, it may be time to seek help:
            </p>
            <ul className="text-sm text-gray-300 space-y-1 mb-4">
              <li>• Betting more than you can afford to lose</li>
              <li>• Spending excessive time thinking about betting</li>
              <li>• Neglecting work, school, or family due to betting</li>
              <li>• Feeling anxious or irritable when not betting</li>
              <li>• Failed attempts to cut back or stop</li>
            </ul>
            <p className="text-sm text-gray-300 font-semibold mb-2">Help is available:</p>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• <strong className="text-white">National Council on Problem Gambling:</strong> 1-800-522-4700</li>
              <li>• <strong className="text-white">Gamblers Anonymous:</strong> <a href="https://www.gamblersanonymous.org" className="text-blue-400 hover:underline">gamblersanonymous.org</a></li>
              <li>• <strong className="text-white">Self-Exclusion Programs:</strong> Available on all major US sportsbooks</li>
            </ul>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400 italic">
              Remember: The house always has an edge. Long-term profitability requires discipline, research, and emotional control. Bet with your head, not over it.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Find the Best Odds?</h2>
          <p className="text-lg text-gray-100 mb-6 max-w-2xl mx-auto">
            Don't settle for whatever odds your default bookmaker offers. Compare live odds across all these sites instantly and maximize your World Cup betting profits.
          </p>
          <Link
            href="/"
            className="inline-block bg-white hover:bg-gray-100 text-blue-600 font-bold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            Compare World Cup Odds Now →
          </Link>
          <p className="text-sm text-gray-200 mt-4">
            Updated in real-time • All major bookmakers • Free to use
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p className="mb-2">
            Last updated: February 2026 | World Cup 2026 kicks off June 11, 2026
          </p>
          <p className="mb-4">
            Gambling problem? Call 1-800-GAMBLER. Must be 21+ to bet. Subject to eligibility and location restrictions.
          </p>
          <div className="flex justify-center gap-4 text-gray-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>•</span>
            <Link href="/about" className="hover:text-white">About</Link>
            <span>•</span>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
