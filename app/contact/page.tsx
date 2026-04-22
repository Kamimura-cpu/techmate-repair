import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ | TechMate Repair Service",
};

const usecases = [
  { icon: "🔧", text: "修理の見積もりを依頼したい" },
  { icon: "💰", text: "壊れた端末を買取してほしい" },
  { icon: "📅", text: "出張の日程を予約したい" },
  { icon: "📱", text: "販売中の端末を購入したい" },
  { icon: "❓", text: "その他の質問・相談" },
];

const tips = [
  "機種名（例：iPhone 14 Pro）をお知らせください",
  "不具合の状態や症状を教えていただけると助かります",
  "可能であれば写真も送っていただくとよりスムーズです",
  "ご希望の日時や時間帯があればお伝えください",
];

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: "#f1f5f9", minHeight: "100vh" }}>
      <div style={{ maxWidth: "560px", margin: "0 auto", padding: "48px 20px" }}>

        <div style={{ marginBottom: "36px" }}>
          <p style={{ color: "#2563eb", fontSize: "13px", fontWeight: 700, marginBottom: "8px", letterSpacing: "0.05em" }}>CONTACT</p>
          <h1 style={{ fontSize: "clamp(24px, 5vw, 30px)", fontWeight: 800, color: "#1e293b", marginBottom: "12px" }}>お問い合わせ</h1>
          <p style={{ fontSize: "15px", color: "#475569", lineHeight: 1.8 }}>
            見積もり・ご予約・ご質問はすべてLINEで受け付けています。お気軽にご連絡ください。
          </p>
        </div>

        {/* LINE CTA */}
        <div style={{ backgroundColor: "#ffffff", borderRadius: "18px", padding: "32px 24px", textAlign: "center", border: "1px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", marginBottom: "20px" }}>
          <div style={{ width: "64px", height: "64px", backgroundColor: "#06C755", borderRadius: "18px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px", fontSize: "32px", boxShadow: "0 4px 12px rgba(6,199,85,0.3)" }}>
            💬
          </div>
          <h2 style={{ fontSize: "20px", fontWeight: 800, color: "#1e293b", marginBottom: "10px" }}>LINEで問い合わせる</h2>
          <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.7, marginBottom: "24px" }}>
            公式LINEアカウントにメッセージをお送りください。24時間以内に返信します。
          </p>
          <a
            href="https://line.me/ti/p/@techmate-repair"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              backgroundColor: "#06C755",
              color: "#ffffff",
              padding: "16px",
              borderRadius: "14px",
              fontSize: "17px",
              fontWeight: 700,
              textDecoration: "none",
              textAlign: "center",
              boxShadow: "0 4px 16px rgba(6,199,85,0.35)",
            }}
          >
            LINE を開く
          </a>
          <p style={{ fontSize: "12px", color: "#cbd5e1", marginTop: "12px" }}>
            ※ LINEアプリが開きます
          </p>
        </div>

        {/* Use cases */}
        <div style={{ marginBottom: "20px" }}>
          <p style={{ fontSize: "13px", color: "#94a3b8", marginBottom: "10px" }}>こんなことをお気軽にご相談ください</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {usecases.map((u) => (
              <div key={u.text} style={{ display: "flex", alignItems: "center", gap: "14px", padding: "13px 16px", backgroundColor: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
                <span style={{ fontSize: "20px" }}>{u.icon}</span>
                <span style={{ fontSize: "15px", color: "#334155" }}>{u.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div style={{ backgroundColor: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "14px", padding: "20px 22px" }}>
          <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#1e293b", marginBottom: "12px" }}>スムーズな対応のために</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {tips.map((tip) => (
              <li key={tip} style={{ fontSize: "14px", color: "#334155", padding: "5px 0", display: "flex", alignItems: "flex-start", gap: "8px" }}>
                <span style={{ color: "#2563eb", fontWeight: 700, flexShrink: 0 }}>・</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
