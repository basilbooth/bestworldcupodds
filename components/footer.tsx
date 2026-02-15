import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">⚽</span>
              <span className="text-lg font-bold text-white">
                Best<span className="text-green-400">WorldCup</span>Odds
              </span>
            </Link>
            <p className="text-sm text-white/50">
              Real-time odds comparison for all 64 matches of the 2026 FIFA World Cup.
            </p>
          </div>

          {/* Teams */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-white">Teams</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/teams/usa"
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  🇺🇸 USA
                </Link>
              </li>
              <li>
                <Link
                  href="/teams/mexico"
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  🇲🇽 Mexico
                </Link>
              </li>
              <li>
                <Link
                  href="/teams/argentina"
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  🇦🇷 Argentina
                </Link>
              </li>
              <li>
                <Link
                  href="/teams/brazil"
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  🇧🇷 Brazil
                </Link>
              </li>
              <li>
                <Link
                  href="/teams/england"
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  🏴󠁧󠁢󠁥󠁮󠁧󠁿 England
                </Link>
              </li>
              <li>
                <Link
                  href="/teams/france"
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  🇫🇷 France
                </Link>
              </li>
              <li>
                <Link
                  href="/teams/spain"
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  🇪🇸 Spain
                </Link>
              </li>
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-white">Betting Guides</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/guides/how-to-bet"
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  How to Bet on World Cup
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/best-betting-sites"
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  Best Betting Sites 2026
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/top-scorer-betting"
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  Top Scorer Betting Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-white">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  Affiliate Disclosure
                </Link>
              </li>
              <li>
                <a
                  href="https://www.ncpgambling.org/help-treatment/national-helpline-1-800-522-4700/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  Responsible Gambling
                </a>
              </li>
              <li>
                <a
                  href="mailto:basilbooth@agentmail.to"
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-white/50">
              © 2026 BestWorldCupOdds.com • All rights reserved
            </p>
            <div className="flex items-center gap-4 text-sm text-white/50">
              <span>🔞 21+ Only</span>
              <span>•</span>
              <a
                href="https://www.begambleaware.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                BeGambleAware
              </a>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-white/40">
              Gambling can be addictive. Please play responsibly. If you or someone you know has a gambling problem, 
              call the National Problem Gambling Helpline at 1-800-522-4700 or visit{" "}
              <a
                href="https://www.ncpgambling.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                ncpgambling.org
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
