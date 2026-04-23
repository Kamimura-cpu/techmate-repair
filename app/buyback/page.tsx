import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "買取 | TechMate Repair Service",
};

const targets = [
  { device: "iPhone", detail: "iPhone 6以降・ジャンク品・水没品も可" },
  { device: "Mac", detail: "MacBook / iMac / Mac mini など" },
  { device: "Windows PC", detail: "ノート・デスクトップ問わず" },
  { device: "iPad", detail: "全モデル対応（要相談）" },
  { device: "Apple Watch", detail: "各シリーズ（要相談）" },
];

const conditions = [
  { label: "電源が入らない", ok: true },
  { label: "画面割れ・ひび割れ", ok: true },
  { label: "水没・水濡れ", ok: true },
  { label: "バッテリー劣化", ok: true },
  { label: "アクティベーションロックがかかっている", ok: false },
  { label: "部品がない・著しく欠損している", ok: false },
];

const steps = [
  { step: "01", title: "LINEで相談", desc: "機種・状態・写真をLINEで送ってください。" },
  { step: "02", title: "査定・金額提示", desc: "状態確認後、買取金額をご連絡します。" },
  { step: "03", title: "日程調整", desc: "出張日時をLINEで調整します。" },
  { step: "04", title: "出張・現金払い", desc: "当日その場で現金でお支払いします。" },
];

export default function BuybackPage() {
  return (
    <div style={{ backgroundColor: "#f1f5f9", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ position: "relative", width: "100%", height: "clamp(220px, 35vw, 320px)", overflow: "hidden" }}>
        <Image src="/hero-buyback.png" alt="買取サービス" fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(15,23,42,0.4) 0%, rgba(15,23,42,0.65) 100%)" }} />
        <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 24px" }}>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", fontWeight: 700, marginBottom: "10px", letterSpacing: "0.08em" }}>BUYBACK</p>
          <h1 style={{ fontSize: "clamp(24px, 5vw, 36px)", fontWeight: 800, color: "#ffffff", textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>買取サービス</h1>
        </div>
      </section>

      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "48px 20px" }}>

        <div style={{ marginBottom: "40px" }}>
          <p style={{ fontSize: "15px", color: "#475569", lineHeight: 1.8, marginBottom: "20px" }}>
            壊れていても・電源が入らなくてもOK。不要になったスマホ・PCをお買取します。出張査定・その場で現金払いです。
          </p>
          {/* 古物商許可 */}
          <div style={{ backgroundColor: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "14px", padding: "18px 20px", display: "flex", gap: "14px", alignItems: "flex-start" }}>
            <span style={{ fontSize: "24px", flexShrink: 0 }}>🪪</span>
            <div>
              <p style={{ fontSize: "14px", fontWeight: 700, color: "#15803d", marginBottom: "6px" }}>古物商許可取得済み・安心してお任せください</p>
              <p style={{ fontSize: "13px", color: "#166534", lineHeight: 1.7 }}>
                長野県公安委員会許可　第481102500050号（事務機器商）<br />
                古物営業法に基づく正規の許可を取得した上で買取を行っています。
              </p>
              <p style={{ fontSize: "12px", color: "#4ade80", marginTop: "6px" }}>許可者：上村 航我</p>
            </div>
          </div>
        </div>

        {/* Flow */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "19px", fontWeight: 700, color: "#1e293b", marginBottom: "16px" }}>買取の流れ</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }}>
            {steps.map((s) => (
              <div key={s.step} style={{ backgroundColor: "#ffffff", borderRadius: "14px", padding: "20px", border: "1px solid #e2e8f0", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
                <p style={{ color: "#2563eb", fontSize: "12px", fontWeight: 700, marginBottom: "6px", letterSpacing: "0.05em" }}>STEP {s.step}</p>
                <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#1e293b", marginBottom: "6px" }}>{s.title}</h3>
                <p style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Targets */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "19px", fontWeight: 700, color: "#1e293b", marginBottom: "14px" }}>買取対象機種</h2>
          <div style={{ backgroundColor: "#ffffff", borderRadius: "14px", border: "1px solid #e2e8f0", overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
            {targets.map((t, i) => (
              <div key={t.device} style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "15px 20px",
                borderBottom: i !== targets.length - 1 ? "1px solid #f1f5f9" : "none",
              }}>
                <span style={{ backgroundColor: "#dcfce7", color: "#16a34a", border: "1px solid #bbf7d0", padding: "3px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: 600, flexShrink: 0 }}>買取可</span>
                <div>
                  <p style={{ fontSize: "15px", fontWeight: 600, color: "#1e293b", marginBottom: "1px" }}>{t.device}</p>
                  <p style={{ fontSize: "13px", color: "#94a3b8" }}>{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Conditions */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "19px", fontWeight: 700, color: "#1e293b", marginBottom: "14px" }}>買取できる状態・できない状態</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
            {conditions.map((c) => (
              <div key={c.label} style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "13px 16px",
                borderRadius: "10px",
                border: c.ok ? "1px solid #bbf7d0" : "1px solid #fecaca",
                backgroundColor: c.ok ? "#f0fdf4" : "#fff5f5",
              }}>
                <span style={{ fontSize: "16px", color: c.ok ? "#16a34a" : "#ef4444", fontWeight: 700, flexShrink: 0 }}>{c.ok ? "✓" : "✗"}</span>
                <span style={{ fontSize: "14px", color: "#334155" }}>{c.label}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "12px", color: "#94a3b8", marginTop: "10px" }}>
            ※ アクティベーションロック解除済みの場合は買取可能な場合があります。解除方法は<a href="/activation-lock" style={{ color: "#2563eb", textDecoration: "underline" }}>こちら</a>をご覧ください。
          </p>
        </section>

        {/* 古物営業法の本人確認 */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "19px", fontWeight: 700, color: "#1e293b", marginBottom: "14px" }}>買取時の本人確認について</h2>
          <div style={{ backgroundColor: "#fffbeb", border: "1px solid #fde68a", borderRadius: "14px", padding: "20px 22px" }}>
            <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "16px" }}>
              <span style={{ fontSize: "20px", flexShrink: 0 }}>⚖️</span>
              <p style={{ fontSize: "14px", color: "#713f12", lineHeight: 1.7 }}>
                古物営業法の規定により、買取の際は売主様の本人確認が<span style={{ fontWeight: 700 }}>法律上必須</span>となっています。ご協力をお願いします。
              </p>
            </div>

            <div style={{ marginBottom: "16px" }}>
              <p style={{ fontSize: "13px", fontWeight: 700, color: "#92400e", marginBottom: "10px" }}>確認が必要な4項目</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "8px" }}>
                {["住所", "氏名", "職業", "年齢"].map((item) => (
                  <div key={item} style={{ backgroundColor: "#ffffff", border: "1px solid #fde68a", borderRadius: "8px", padding: "10px 14px", display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ color: "#d97706", fontWeight: 700, fontSize: "14px" }}>✓</span>
                    <span style={{ fontSize: "15px", fontWeight: 600, color: "#1e293b" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p style={{ fontSize: "13px", fontWeight: 700, color: "#92400e", marginBottom: "8px" }}>確認書類の例（いずれか1点）</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {["運転免許証", "マイナンバーカード", "健康保険証", "パスポート"].map((doc) => (
                  <span key={doc} style={{ fontSize: "13px", color: "#713f12", backgroundColor: "#fef9c3", border: "1px solid #fde68a", borderRadius: "999px", padding: "4px 12px" }}>
                    {doc}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div style={{ backgroundColor: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "16px", padding: "28px 24px", textAlign: "center" }}>
          <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#1e293b", marginBottom: "10px" }}>まずはLINEで査定依頼</h3>
          <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.7, marginBottom: "20px" }}>
            機種名・状態・写真を送っていただくとスムーズに査定できます。
          </p>
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
            LINEで査定依頼
          </Link>
        </div>

      </div>
    </div>
  );
}
