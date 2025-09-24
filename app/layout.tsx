import "./globals.css";
import { ReactNode } from "react";
import Link from "next/link";

export const metadata = {
  title: "PRDX — AI-Powered Prediction Markets on Solana",
  description: "Trade event outcomes with AI-guided probability forecasts. Built on Solana.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  const tabs = ["Trending", "Breaking", "New"];
  const cats = ["All","Politics","Crypto","Sports","Macro","Tech","World"];
  return (
    <header className="border-b border-white/10 sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#0b1023]/70">
      <div className="container h-14 flex items-center gap-3">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <img src="/logo.svg" alt="PRDX" className="h-6 w-6" />
          <span>PRDX</span>
        </Link>

        <div className="hidden md:flex items-center gap-2 ml-4">
          {tabs.map(t => (
            <Link key={t} href={"/markets?tab="+t.toLowerCase()} className="px-2 py-1 rounded-md text-sm hover:bg-white/10">{t}</Link>
          ))}
        </div>

        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-xl">
            <form action="/markets" className="flex">
              <input name="q" placeholder="Search PRDX" className="w-full bg-white/10 rounded-l-xl px-3 py-2 placeholder-white/40"/>
              <button className="bg-white text-black rounded-r-xl px-3">Search</button>
            </form>
          </div>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <Link href="/markets" className="btn-ghost text-sm">Markets</Link>
          <Link href="/about" className="btn-ghost text-sm">About</Link>
          <Link href="/token" className="btn-ghost text-sm">Token</Link>
          <a href="#" className="btn-primary text-sm">Connect Wallet</a>
        </div>
      </div>
      <div className="container py-2 overflow-x-auto no-scrollbar">
        <div className="flex gap-2 text-sm">
          {cats.map(c => <a key={c} href={"/markets?cat="+encodeURIComponent(c)} className="px-3 py-1 bg-white/10 rounded-full whitespace-nowrap">{c}</a>)}
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="container py-10 text-sm text-white/60">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <img src="/logo.svg" className="h-6 w-6" />
              <span className="font-semibold">PRDX</span>
            </div>
            <p>AI-powered prediction markets on Solana. © {new Date().getFullYear()} PRDX Labs.</p>
          </div>
          <div className="flex gap-6">
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy</a>
            <a href="mailto:hello@prdx.market">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
