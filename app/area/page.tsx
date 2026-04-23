import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "対応エリア | TechMate Repair Service",
};

const areas = [
  { name: "上田市", note: "市内全域対応" },
  { name: "東御市", note: "市内全域対応" },
  { name: "坂城町", note: "町内全域対応" },
  { name: "青木村", note: "村内全域対応" },
  { name: "長和町", note: "町内全域対応" },
];

const notes = [
  "出張費は無料です（上記エリア内）",
  "エリア外の方もご相談いただける場合があります",
  "日程はLINEにてご調整ください",
  "修理内容によっては当日対応が難しい場合があります",
];

export default function AreaPage() {
  return (
    <div style={{ backgroundColor: "#f1f5f9", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ position: "relative", width: "100%", height: "clamp(220px, 35vw, 320px)", overflow: "hidden" }}>
        <Image src="/hero-area.png" alt="上田市の風景" fill style={{ objectFit: "cover", objectPosition: "center 40%" }} priority />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(15,23,42,0.35) 0%, rgba(15,23,42,0.6) 100%)" }} />
        <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 24px" }}>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", fontWeight: 700, marginBottom: "10px", letterSpacing: "0.08em" }}>SERVICE AREA</p>
          <h1 style={{ fontSize: "clamp(24px, 5vw, 36px)", fontWeight: 800, color: "#ffffff", textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>出張対応エリア</h1>
        </div>
      </section>

      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "48px 20px" }}>

        <div style={{ marginBottom: "40px" }}>
          <p style={{ fontSize: "15px", color: "#475569", lineHeight: 1.8 }}>
            以下のエリアへ出張修理・買取・販売に伺います。出張費は無料です。エリア外の方もまずはご相談ください。
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px", marginBottom: "32px" }}>
          {areas.map((area) => (
            <div key={area.name} style={{ backgroundColor: "#ffffff", borderRadius: "14px", padding: "18px 20px", display: "flex", alignItems: "center", gap: "14px", border: "1px solid #e2e8f0", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
              <span style={{ fontSize: "20px" }}>📍</span>
              <div>
                <p style={{ fontSize: "16px", fontWeight: 700, color: "#1e293b", marginBottom: "1px" }}>{area.name}</p>
                <p style={{ fontSize: "13px", color: "#94a3b8" }}>{area.note}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ backgroundColor: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "14px", padding: "20px 22px", marginBottom: "32px" }}>
          <h2 style={{ fontSize: "16px", fontWeight: 700, color: "#1e293b", marginBottom: "12px" }}>出張に関するご案内</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {notes.map((note) => (
              <li key={note} style={{ fontSize: "14px", color: "#334155", padding: "5px 0", display: "flex", alignItems: "flex-start", gap: "8px" }}>
                <span style={{ color: "#2563eb", fontWeight: 700, flexShrink: 0 }}>✓</span>
                {note}
              </li>
            ))}
          </ul>
        </div>

        <Link href="/contact" style={{
          display: "block",
          backgroundColor: "#2563eb",
          color: "#ffffff",
          padding: "16px",
          borderRadius: "12px",
          fontSize: "16px",
          fontWeight: 700,
          textDecoration: "none",
          textAlign: "center",
          boxShadow: "0 4px 12px rgba(37,99,235,0.3)",
        }}>
          LINEで日程を相談する
        </Link>

      </div>
    </div>
  );
}
