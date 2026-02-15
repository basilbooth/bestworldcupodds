import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure & Disclaimer - Best World Cup Odds",
  description: "Transparency about our affiliate relationships and how we operate.",
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="mb-8 text-4xl font-bold text-white sm:text-5xl">
          Affiliate Disclosure & Disclaimer
        </h1>

        <div className="space-y-8 text-lg leading-relaxed text-white/70">
          <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-6">
            <p className="text-white">
              <strong>Transparency First:</strong> BestWorldCupOdds.com operates as an affiliate
              marketing website. This page explains exactly how we work and how we make money.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white">How We Earn Money</h2>
          <p>
            When you click a "Bet Now" button or bookmaker link on our site and subsequently sign up
            for an account and place a bet, we may earn a commission from that bookmaker. This is
            called affiliate marketing, and it's how we fund the operation of this site.
          </p>
          <p>
            <strong>Important:</strong> Our affiliate relationships do NOT influence the odds we
            display. All odds are pulled directly from bookmaker APIs and websites. We have no
            ability to manipulate odds in favor of any bookmaker.
          </p>

          <h2 className="text-2xl font-bold text-white">Our Affiliate Partners</h2>
          <p>We work with the following bookmakers (as of February 2026):</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>DraftKings</li>
            <li>FanDuel</li>
            <li>BetMGM</li>
            <li>Bet365</li>
            <li>Caesars Sportsbook</li>
            <li>Cloudbet (crypto)</li>
            <li>Stake (crypto)</li>
            <li>BC.Game (crypto)</li>
          </ul>
          <p>
            This list may change over time as we add or remove partners. We only partner with
            licensed, reputable bookmakers with strong user reviews.
          </p>

          <h2 className="text-2xl font-bold text-white">How Commissions Work</h2>
          <p>Bookmakers pay us in one of two ways:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Cost Per Acquisition (CPA):</strong> A flat fee when you sign up and make your
              first deposit (typically $50-$200)
            </li>
            <li>
              <strong>Revenue Share:</strong> A percentage (usually 25-35%) of the net revenue the
              bookmaker generates from your betting activity over your lifetime as a customer
            </li>
          </ul>
          <p>
            Some bookmakers use a hybrid model (e.g., $50 CPA + 20% revenue share). The exact terms
            vary by bookmaker and are subject to change.
          </p>

          <h2 className="text-2xl font-bold text-white">What We Do NOT Do</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Fake odds:</strong> Every odd displayed on this site is real and pulled from the
              bookmaker's live platform
            </li>
            <li>
              <strong>Hide better odds:</strong> We show you the best odds available, even if that
              bookmaker pays us a lower commission
            </li>
            <li>
              <strong>Recommend bad bets:</strong> Our betting guides are educational, not guaranteed
              winners. We never push bets just to earn commissions
            </li>
            <li>
              <strong>Share your data:</strong> We do not collect or sell your personal information.
              When you click through to a bookmaker, their privacy policy applies
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-white">Independent Reviews</h2>
          <p>
            While we earn commissions from bookmakers, our editorial integrity is non-negotiable. Our
            betting guides, team analysis, and strategy recommendations are based on research, data,
            and genuine expertise — not which bookmaker pays us the most.
          </p>
          <p>
            If a bookmaker offers poor odds, bad customer service, or shady practices, we will not
            recommend them — regardless of commission potential.
          </p>

          <h2 className="text-2xl font-bold text-white">General Disclaimer</h2>
          <div className="space-y-4 rounded-lg border border-white/10 bg-white/5 p-6 text-base">
            <p>
              <strong>Not Financial Advice:</strong> Nothing on this website constitutes financial,
              legal, or professional advice. All betting involves risk, and you should never bet more
              than you can afford to lose.
            </p>
            <p>
              <strong>No Guarantees:</strong> Past performance does not guarantee future results.
              Sports betting is inherently unpredictable, and no betting strategy guarantees profit.
            </p>
            <p>
              <strong>Age Restriction:</strong> You must be 21 years of age or older to use our site
              and place bets with our partner bookmakers. Gambling laws vary by jurisdiction — it is
              your responsibility to ensure betting is legal in your location.
            </p>
            <p>
              <strong>Not a Bookmaker:</strong> BestWorldCupOdds.com is an odds comparison service. We
              do not accept bets, hold funds, or facilitate gambling transactions. All betting activity
              occurs directly on the bookmaker's platform.
            </p>
            <p>
              <strong>Accuracy:</strong> While we strive for accuracy, odds can change rapidly. Always
              verify odds on the bookmaker's site before placing a bet. We are not responsible for any
              errors, delays, or discrepancies in displayed odds.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white">Responsible Gambling</h2>
          <p>
            Gambling should be entertainment, not a way to make money or solve financial problems. If
            you or someone you know is struggling with gambling addiction, help is available:
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
                ncpgambling.org
              </a>
            </li>
            <li>
              <a
                href="https://www.begambleaware.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-green-400 hover:underline"
              >
                begambleaware.org
              </a>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-white">Questions or Concerns?</h2>
          <p>
            If you have questions about our affiliate relationships, how we operate, or anything else,
            contact us:
          </p>
          <p>
            <a
              href="mailto:basilbooth@agentmail.to"
              className="font-semibold text-green-400 hover:underline"
            >
              basilbooth@agentmail.to
            </a>
          </p>

          <div className="mt-12 text-sm text-white/50">
            <p>Last updated: February 15, 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}
