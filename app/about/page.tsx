import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Best World Cup Odds",
  description: "Learn about BestWorldCupOdds.com - your trusted source for real-time World Cup betting odds comparison.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="mb-8 text-4xl font-bold text-white sm:text-5xl">
          About Best World Cup Odds
        </h1>

        <div className="space-y-8 text-lg leading-relaxed text-white/70">
          <p>
            Welcome to BestWorldCupOdds.com — your trusted source for comprehensive betting odds
            comparison for the 2026 FIFA World Cup.
          </p>

          <h2 className="text-2xl font-bold text-white">Our Mission</h2>
          <p>
            We believe bettors deserve transparent, real-time access to the best odds available
            across all major bookmakers. The 2026 World Cup is the biggest sporting event on the
            planet, and we're here to help you find maximum value for every bet.
          </p>

          <h2 className="text-2xl font-bold text-white">What We Offer</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Real-time odds comparison from 8+ major bookmakers</li>
            <li>Coverage of all 64 World Cup matches</li>
            <li>Detailed team analysis and betting guides</li>
            <li>Player props, outright markets, and in-play odds</li>
            <li>Expert betting angles and strategy recommendations</li>
            <li>Both mainstream and crypto bookmaker options</li>
          </ul>

          <h2 className="text-2xl font-bold text-white">How We Work</h2>
          <p>
            Our platform aggregates odds from top-tier bookmakers including DraftKings, FanDuel,
            Bet365, BetMGM, Caesars, Cloudbet, Stake, and BC.Game. We update odds every 15 minutes
            to ensure you always see the latest lines.
          </p>
          <p>
            When you click "Bet Now" on our site, we direct you to the bookmaker offering the best
            odds for that specific market. We may earn a commission if you sign up and place a bet,
            but this never affects the odds you see — we always show you the truth.
          </p>

          <h2 className="text-2xl font-bold text-white">Why Trust Us?</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Transparency:</strong> We clearly disclose our affiliate relationships
            </li>
            <li>
              <strong>Accuracy:</strong> All odds are pulled directly from bookmaker APIs and
              websites — no fake data
            </li>
            <li>
              <strong>Independence:</strong> We're not owned by any bookmaker; our loyalty is to
              bettors
            </li>
            <li>
              <strong>Education:</strong> We provide betting guides and responsible gambling
              resources
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-white">Responsible Gambling</h2>
          <p>
            We take responsible gambling seriously. Betting should be entertainment, not a way to
            make money. If you or someone you know has a gambling problem, help is available:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              National Problem Gambling Helpline:{" "}
              <a
                href="tel:1-800-522-4700"
                className="font-semibold text-green-400 hover:underline"
              >
                1-800-522-4700
              </a>
            </li>
            <li>
              <a
                href="https://www.ncpgambling.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-green-400 hover:underline"
              >
                National Council on Problem Gambling
              </a>
            </li>
            <li>
              <a
                href="https://www.begambleaware.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-green-400 hover:underline"
              >
                BeGambleAware.org
              </a>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-white">Contact Us</h2>
          <p>
            Have questions, suggestions, or found an error? We'd love to hear from you:
          </p>
          <p>
            <a
              href="mailto:basilbooth@agentmail.to"
              className="font-semibold text-green-400 hover:underline"
            >
              basilbooth@agentmail.to
            </a>
          </p>

          <div className="mt-12 rounded-lg border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-white/50">
              <strong className="text-white">Disclaimer:</strong> BestWorldCupOdds.com is an
              independent odds comparison service. We are not a bookmaker and do not accept bets.
              All betting activity occurs on the bookmaker's platform. You must be 21+ to gamble.
              Gambling laws vary by state/country — please check your local regulations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
