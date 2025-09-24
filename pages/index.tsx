import Link from "next/link";
export default function Home() {
  return (
    <div className="container py-16 md:py-24">
      <div className="badge">SOLANA • MAINNET READY</div>
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
        Trade the <span className="gradient-text">future</span> with <span className="gradient-text">AI-guided</span> odds.
      </h1>
      <p className="text-lg text-white/70 max-w-xl mt-4">
        PRDX is a Solana-native prediction market. Create and trade event outcomes with lightning-fast, low-fee settlement — powered by AI probability forecasts.
      </p>
      <div className="flex gap-3 mt-6">
        <Link href="/markets" className="btn-primary">Explore Markets</Link>
        <a href="/docs" className="btn-ghost">Read Docs</a>
      </div>
    </div>
  );
}
