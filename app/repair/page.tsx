import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "修理メニュー・料金 | TechMate Repair Service",
};

const iphoneRepairs = [
  { name: "画面割れ修理（iPhone 11〜13）", price: "¥8,000〜" },
  { name: "画面割れ修理（iPhone 14〜16）", price: "¥10,000〜" },
  { name: "バッテリー交換", price: "¥5,000〜" },
  { name: "背面ガラス交換", price: "¥8,000〜" },
  { name: "カメラ修理", price: "¥6,000〜" },
];

const pcRepairs = [
  { name: "液晶画面交換（ノートPC）", price: "¥15,000〜" },
  { name: "バッテリー交換", price: "¥10,000〜" },
  { name: "キーボード交換", price: "¥8,000〜" },
  { name: "SSD交換・容量アップ", price: "¥10,000〜" },
  { name: "データ復旧", price: "¥10,000〜" },
  { name: "動作不良・その他修理", price: "要相談" },
];

const notes = [
  "出張費は無料です（対応エリア内）",
  "部品代込みの価格です",
  "その場で修理できない場合はお預かりします（目安：1〜3日）",
  "修理前に必ず見積もりを提示します",
  "記載のない機種・修理もお気軽にご相談ください",
];

export default function RepairPage() {
  return (
    <div style={{ backgroundColor: "#f1f5f9", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ position: "relative", width: "100%", height: "clamp(220px, 35vw, 320px)", overflow: "hidden" }}>
        <Image src="/hero-repair.png" alt="修理作業" fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(15,23,42,0.45) 0%, rgba(15,23,42,0.65) 100%)" }} />
        <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 24px" }}>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", fontWeight: 700, marginBottom: "10px", letterSpacing: "0.08em" }}>REPAIR MENU</p>
          <h1 style={{ fontSize: "clamp(24px, 5vw, 36px)", fontWeight: 800, color: "#ffffff", textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>修理メニュー・料金</h1>
        </div>
      </section>

      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "48px 20px" }}>

        <div style={{ marginBottom: "40px" }}>
          <p style={{ fontSize: "15px", color: "#475569", lineHeight: 1.8 }}>
            以下はあくまでも目安料金です。機種・状態によって変動する場合があります。正確な料金はLINEにて無料でお見積もりします。
          </p>
        </div>

        {/* iPhone */}
        <section style={{ marginBottom: "36px" }}>
          <h2 style={{ fontSize: "19px", fontWeight: 700, color: "#1e293b", marginBottom: "4px", display: "flex", alignItems: "center", gap: "8px" }}>
            <span>📱</span> iPhone 修理
          </h2>
          <p style={{ fontSize: "14px", color: "#94a3b8", marginBottom: "14px" }}>iPhone 8 以降の機種に対応</p>
          <div style={{ backgroundColor: "#ffffff", borderRadius: "14px", border: "1px solid #e2e8f0", overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
            {iphoneRepairs.map((item, i) => (
              <div key={item.name} style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px 20px",
                borderBottom: i !== iphoneRepairs.length - 1 ? "1px solid #f1f5f9" : "none",
              }}>
                <span style={{ fontSize: "15px", color: "#334155" }}>{item.name}</span>
                <span style={{ fontSize: "15px", color: "#2563eb", fontWeight: 700, flexShrink: 0, marginLeft: "12px" }}>{item.price}</span>
              </div>
            ))}
          </div>
        </section>

        {/* PC */}
        <section style={{ marginBottom: "36px" }}>
          <h2 style={{ fontSize: "19px", fontWeight: 700, color: "#1e293b", marginBottom: "4px", display: "flex", alignItems: "center", gap: "8px" }}>
            <span>💻</span> Mac / Windows PC 修理
          </h2>
          <p style={{ fontSize: "14px", color: "#94a3b8", marginBottom: "14px" }}>Mac・Windows 両方に対応</p>
          <div style={{ backgroundColor: "#ffffff", borderRadius: "14px", border: "1px solid #e2e8f0", overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
            {pcRepairs.map((item, i) => (
              <div key={item.name} style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px 20px",
                borderBottom: i !== pcRepairs.length - 1 ? "1px solid #f1f5f9" : "none",
              }}>
                <span style={{ fontSize: "15px", color: "#334155" }}>{item.name}</span>
                <span style={{ fontSize: "15px", color: "#2563eb", fontWeight: 700, flexShrink: 0, marginLeft: "12px" }}>{item.price}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Notes */}
        <div style={{ backgroundColor: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "14px", padding: "20px 24px", marginBottom: "36px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#1e293b", marginBottom: "12px" }}>ご注意・補足</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {notes.map((note) => (
              <li key={note} style={{ fontSize: "14px", color: "#334155", padding: "5px 0", display: "flex", alignItems: "flex-start", gap: "8px" }}>
                <span style={{ color: "#2563eb", fontWeight: 700, flexShrink: 0 }}>✓</span>
                {note}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "15px", color: "#64748b", marginBottom: "14px" }}>まずはLINEで無料見積もりをどうぞ</p>
          <Link href="/contact" className="btn-line" style={{
            display: "block",
            backgroundColor: "#06C755",
            color: "#ffffff",
            padding: "16px",
            borderRadius: "12px",
            fontSize: "16px",
            fontWeight: 700,
            textDecoration: "none",
            textAlign: "center",
            boxShadow: "0 4px 12px rgba(6,199,85,0.3)",
          }}>
            LINEで見積もり依頼
          </Link>
        </div>

      </div>
    </div>
  );
}
