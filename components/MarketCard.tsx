"use client";
import Link from "next/link";
import { clsx } from "clsx";

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
  return (
    <Link href={`/market/${m.id}`} className="card p-5 block hover:scale-[1.01] transition">
      <div className="flex items-center justify-between">
        <div className="text-white/80 text-xs">{m.category.toUpperCase()}</div>
        <div className="flex items-center gap-2">
          <span className="badge">Vol ${m.volume.toLocaleString()}</span>
          <span className="badge">AI {Math.round(m.ai_prob*100)}%</span>
        </div>
      </div>
      <div className="font-semibold mt-2">{m.question}</div>
      <div className="mt-3">
        {m.type === "YES/NO" ? (
          <div className="grid grid-cols-2 gap-2">
            <div className="btn-ghost justify-between">
              <span>Yes</span><span className="font-semibold">{formatProb(m.crowd_prob ?? m.ai_prob)}%</span>
            </div>
            <div className="btn-ghost justify-between">
              <span>No</span><span className="font-semibold">{formatProb(1 - (m.crowd_prob ?? m.ai_prob))}%</span>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-2">
            {m.outcomes?.slice(0,3).map(o => (
              <div key={o.label} className="btn-ghost justify-between">
                <span>{o.label}</span><span className="font-semibold">{formatProb(o.prob)}%</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="mt-3 flex items-center gap-3 text-xs text-white/60">
        <span>Liquidity ${m.liquidity.toLocaleString()}</span>
        <span>Fee {Math.round(m.fee_bps)/100}%</span>
      </div>
    </Link>
  );
}

function formatProb(p:number){ return Math.round(Math.max(0, Math.min(1,p))*100) }
