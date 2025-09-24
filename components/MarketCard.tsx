"use client";
import Link from "next/link";

export type Market = {
  id: number;
  type: "YES/NO" | "MULTI";
  question: string;
  description?: string;
  ai_prob: number; // 0..1
  crowd_prob?: number; // 0..1
  volume: number;
  liquidity: number;
  fee_bps: number;
  category: string;
  outcomes?: { label: string; prob: number }[];
  trending?: boolean;
  ends?: string; // ISO
};

export default function MarketCard({ m }: { m: Market }) {
  const yes = Math.round(100*(m.crowd_prob ?? m.ai_prob));
  const no = 100-yes;
  return (
    <Link href={`/market/${m.id}`} className="card p-4 block hover:ring-1 hover:ring-white/20 transition">
      <div className="flex items-center justify-between mb-2">
        <div className="text-xs text-white/70">{m.category}</div>
        <div className="flex items-center gap-2 text-xs">
          <span className="badge">AI {Math.round(m.ai_prob*100)}%</span>
          <span className="text-white/60">Vol ${m.volume.toLocaleString()}</span>
        </div>
      </div>
      <div className="font-semibold leading-snug mb-3">{m.question}</div>

      {m.type === "YES/NO" ? (
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white/10 rounded-lg px-3 py-2 flex items-center justify-between">
            <span>Yes</span><span className="font-semibold">{yes}%</span>
          </div>
          <div className="bg-white/10 rounded-lg px-3 py-2 flex items-center justify-between">
            <span>No</span><span className="font-semibold">{no}%</span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-2">
          {m.outcomes?.slice(0,3).map(o => (
            <div key={o.label} className="bg-white/10 rounded-lg px-3 py-2 flex items-center justify-between">
              <span>{o.label}</span><span className="font-semibold">{Math.round(o.prob*100)}%</span>
            </div>
          ))}
        </div>
      )}

      <div className="mt-3 flex items-center gap-3 text-xs text-white/60">
        <span>Liquidity ${m.liquidity.toLocaleString()}</span>
        <span>Fee {Math.round(m.fee_bps)/100}%</span>
      </div>
    </Link>
  );
}
