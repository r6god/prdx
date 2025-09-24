"use client";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import data from "@/data/markets.json";
import MarketCard, { Market } from "@/components/MarketCard";

export default function MarketsPage() {
  const params = useSearchParams();
  const q = (params.get("q") || "").toLowerCase();
  const cat = params.get("cat") || "All";
  const tab = (params.get("tab") || "trending").toLowerCase();

  const markets = (data as Market[]);
  const filtered = useMemo(() => {
    let list = markets.slice();
    if (cat !== "All") list = list.filter(m => m.category === cat);
    if (q) list = list.filter(m => m.question.toLowerCase().includes(q));
    if (tab === "trending") list = list.filter(m => m.trending || m.volume > 60000).sort((a,b)=> b.volume-a.volume);
    if (tab === "new") list = list.slice(-12).reverse();
    if (tab === "ending soon") list = list.filter(m => !!m.ends);
    return list;
  }, [markets, cat, q, tab]);

  return (
    <div className="container py-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(m => <MarketCard key={m.id} m={m} />)}
      </div>
    </div>
  );
}
