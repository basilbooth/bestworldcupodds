import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best World Cup Odds 2026 - Compare Betting Odds Across All Bookmakers",
  description: "Real-time odds comparison for all 64 matches of the 2026 FIFA World Cup. Compare DraftKings, FanDuel, Bet365, Cloudbet and more. Find the best value for every bet.",
  keywords: ["world cup odds", "world cup betting", "2026 world cup", "betting odds comparison", "football betting", "soccer odds"],
  openGraph: {
    title: "Best World Cup Odds 2026 - Compare All Bookmakers",
    description: "Real-time odds comparison for all 64 matches of the 2026 FIFA World Cup",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
