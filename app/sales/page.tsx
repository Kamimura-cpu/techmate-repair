import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "販売中の端末 | TechMate Repair Service",
};

const LINE_URL = "https://line.me/R/ti/p/%40644lbfta";
const PAYPAY_FLEA_URL = "https://paypayfleamarket.yahoo.co.jp/user/p56027646";

const conditionLabel = {
  S: { label: "S ランク", bg: "#faf5ff", color: "#7c3aed", border: "#ddd6fe" },
  A: { label: "A ランク", bg: "#eff6ff", color: "#2563eb", border: "#bfdbfe" },
  B: { label: "B ランク", bg: "#f0fdf4", color: "#16a34a", border: "#bbf7d0" },
  C: { label: "C ランク", bg: "#fffbeb", color: "#d97706", border: "#fde68a" },
};

const channels = [
  {
    icon: "💬",
    title: "LINEで在庫を問い合わせる",
    description: "ご希望の機種・容量・ご予算をお送りください。在庫の状態や写真をLINEでお知らせします。上田市周辺なら出張でのお渡しもできます。",
    href: LINE_URL,
    button: "LINEで問い合わせ",
    buttonBg: "#06c755",
  },
  {
    icon: "🛍️",
    title: "Yahoo!フリマで出品中の端末を見る",
    description: "整備済みの端末をYahoo!フリマに出品しています。全国どこからでも購入でき、配送でお届けします。",
    href: PAYPAY_FLEA_URL,
    button: "出品一覧を見る",
    buttonBg: "#2563eb",
  },
];

export default function SalesPage() {
  return (
    <div style={{ backgroundColor: "#f1f5f9", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ position: "relative", width: "100%", height: "clamp(220px, 35vw, 320px)", overflow: "hidden" }}>
        <Image src="/hero-sales.png" alt="販売中の端末" fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(15,23,42,0.35) 0%, rgba(15,23,42,0.6) 100%)" }} />
        <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 24px" }}>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", fontWeight: 700, marginBottom: "10px", letterSpacing: "0.08em" }}>FOR SALE</p>
          <h1 style={{ fontSize: "clamp(24px, 5vw, 36px)", fontWeight: 800, color: "#ffffff", textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>販売中の端末</h1>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-5 py-16">

        {/* Header */}
        <div style={{ marginBottom: "32px" }}>
          <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.7 }}>
            整備・動作確認済みの端末を販売しています。在庫は日々入れ替わるため、LINEでのご案内とYahoo!フリマへの出品でお知らせしています。
          </p>
        </div>

        {/* Channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {channels.map((c) => (
            <div key={c.title} style={{ backgroundColor: "#ffffff", borderRadius: "16px", border: "1px solid #e2e8f0", padding: "28px", display: "flex", flexDirection: "column", gap: "14px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
              <p style={{ fontSize: "36px", lineHeight: 1 }}>{c.icon}</p>
              <h2 style={{ fontSize: "19px", fontWeight: 700, color: "#1e293b" }}>{c.title}</h2>
              <p style={{ fontSize: "15px", color: "#64748b", lineHeight: 1.7, flexGrow: 1 }}>{c.description}</p>
              <Link href={c.href} target="_blank" rel="noopener noreferrer" style={{
                alignSelf: "flex-start",
                backgroundColor: c.buttonBg,
                color: "#ffffff",
                padding: "12px 24px",
                borderRadius: "10px",
                fontSize: "15px",
                fontWeight: 600,
                textDecoration: "none",
              }}>
                {c.button}
              </Link>
            </div>
          ))}
        </div>

        {/* Condition guide */}
        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontSize: "17px", fontWeight: 700, color: "#1e293b", marginBottom: "12px" }}>端末の状態ランク</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {Object.entries(conditionLabel).map(([k, v]) => (
              <span key={k} style={{ padding: "6px 14px", fontSize: "14px", fontWeight: 600, borderRadius: "999px", border: `1px solid ${v.border}`, backgroundColor: v.bg, color: v.color }}>
                {v.label}
              </span>
            ))}
            <span style={{ padding: "6px 14px", fontSize: "13px", borderRadius: "999px", border: "1px solid #e2e8f0", backgroundColor: "#ffffff", color: "#94a3b8" }}>
              ※ランクの詳細はLINEでご確認ください
            </span>
          </div>
        </div>

        {/* CTA */}
        <div style={{ marginTop: "48px", textAlign: "center" }}>
          <p style={{ fontSize: "16px", color: "#64748b", marginBottom: "16px" }}>希望の機種がない場合もお気軽にご相談ください</p>
          <Link href={LINE_URL} target="_blank" rel="noopener noreferrer" style={{
            display: "inline-block",
            border: "2px solid #2563eb",
            color: "#2563eb",
            padding: "12px 28px",
            borderRadius: "10px",
            fontSize: "16px",
            fontWeight: 600,
            textDecoration: "none",
            backgroundColor: "#ffffff",
          }}>
            LINEで問い合わせ
          </Link>
        </div>

      </div>
    </div>
  );
}
