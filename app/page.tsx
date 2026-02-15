import { HeroSection } from "@/components/hero-section";
import { OddsComparison } from "@/components/odds-comparison";
import { UpcomingMatches } from "@/components/upcoming-matches";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <HeroSection />
      <OddsComparison />
      <UpcomingMatches />
    </div>
  );
}
