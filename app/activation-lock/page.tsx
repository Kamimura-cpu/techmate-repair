import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "アクティベーションロックの解除方法 | TechMate Repair Service",
  description: "iPhoneのアクティベーションロックを解除する方法を解説します。",
};

const methods = [
  {
    step: "方法 1",
    title: "Apple IDとパスワードで解除する（最も簡単）",
    badge: "おすすめ",
    badgeColor: { bg: "#dcfce7", color: "#16a34a", border: "#bbf7d0" },
    desc: "Apple IDとパスワードを覚えている場合はこの方法で即座に解除できます。",
    steps: [
      "iPhoneの電源を入れ、アクティベーション画面でApple IDとパスワードを入力する",
      "または「設定」→ 自分の名前 → 「iPhoneを探す」をオフにする",
      "iCloud.com/find にパソコンからアクセスし、対象デバイスを削除する方法もあります",
    ],
    note: null,
  },
  {
    step: "方法 2",
    title: "前の持ち主に解除してもらう",
    badge: "中古購入者向け",
    badgeColor: { bg: "#eff6ff", color: "#2563eb", border: "#bfdbfe" },
    desc: "中古でiPhoneを購入したときにロックがかかっていた場合は、前の所有者に連絡して解除してもらうのが確実です。",
    steps: [
      "iPhoneのシリアル番号またはIMEIを確認する（設定 → 一般 → 情報、または本体側面のSIMトレイ付近に記載）",
      "前の所有者に連絡し、Apple IDとパスワードで iCloud.com/find にログインしてもらう",
      "「すべてのデバイス」から対象のiPhoneを選んで「このデバイスを削除」をタップしてもらう",
      "削除完了後、iPhoneを再起動するとロックが解除される",
    ],
    note: "中古購入の際は、売買前にアクティベーションロックが解除されているか必ず確認しましょう。",
  },
  {
    step: "方法 3",
    title: "Appleサポートに問い合わせる",
    badge: "購入証明書が必要",
    badgeColor: { bg: "#fffbeb", color: "#d97706", border: "#fde68a" },
    desc: "前の所有者と連絡が取れない場合、購入証明書（レシートや納品書）があればAppleに解除を依頼できる場合があります。",
    steps: [
      "Appleのアクティベーションロックサポートページ（al-support.apple.com）にアクセスする",
      "デバイスのシリアル番号・IMEI・購入証明書を準備する",
      "フォームに必要事項を入力して申請を送る",
      "Appleの審査後、承認されれば解除される（数日かかる場合あり）",
    ],
    note: "購入証明書がない場合はAppleでも解除できません。中古品の場合は特に注意が必要です。",
  },
];

export default function ActivationLockPage() {
  return (
    <div style={{ backgroundColor: "#f1f5f9", minHeight: "100vh" }}>
      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "48px 20px" }}>

        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          <p style={{ color: "#2563eb", fontSize: "13px", fontWeight: 700, marginBottom: "8px", letterSpacing: "0.05em" }}>ACTIVATION LOCK</p>
          <h1 style={{ fontSize: "clamp(22px, 5vw, 28px)", fontWeight: 800, color: "#1e293b", marginBottom: "14px" }}>アクティベーションロックの解除方法</h1>
          <p style={{ fontSize: "15px", color: "#475569", lineHeight: 1.8 }}>
            アクティベーションロックとは、iPhoneの紛失・盗難時に第三者が使えないようにするAppleのセキュリティ機能です。「iPhoneを探す」をオンにすると自動で有効になります。
          </p>
        </div>

        {/* Warning */}
        <div style={{ backgroundColor: "#fef9c3", border: "1px solid #fde68a", borderRadius: "14px", padding: "18px 20px", marginBottom: "36px", display: "flex", gap: "12px" }}>
          <span style={{ fontSize: "20px", flexShrink: 0 }}>⚠️</span>
          <p style={{ fontSize: "14px", color: "#713f12", lineHeight: 1.7 }}>
            非正規の「解除ツール」や「解除業者」は詐欺・セキュリティリスクの可能性があります。必ずApple公式の方法で解除してください。
          </p>
        </div>

        {/* Methods */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
          {methods.map((m) => (
            <div key={m.step} style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "24px 22px", border: "1px solid #e2e8f0", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "#64748b", letterSpacing: "0.05em" }}>{m.step}</span>
                <span style={{ fontSize: "12px", fontWeight: 600, padding: "3px 10px", borderRadius: "999px", backgroundColor: m.badgeColor.bg, color: m.badgeColor.color, border: `1px solid ${m.badgeColor.border}` }}>{m.badge}</span>
              </div>
              <h2 style={{ fontSize: "17px", fontWeight: 700, color: "#1e293b", marginBottom: "10px" }}>{m.title}</h2>
              <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.7, marginBottom: "16px" }}>{m.desc}</p>
              <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {m.steps.map((s, i) => (
                  <li key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <span style={{ width: "22px", height: "22px", borderRadius: "50%", backgroundColor: "#eff6ff", color: "#2563eb", fontSize: "12px", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>{i + 1}</span>
                    <span style={{ fontSize: "14px", color: "#334155", lineHeight: 1.7 }}>{s}</span>
                  </li>
                ))}
              </ol>
              {m.note && (
                <p style={{ fontSize: "13px", color: "#94a3b8", marginTop: "14px", padding: "10px 14px", backgroundColor: "#f8fafc", borderRadius: "8px", lineHeight: 1.6 }}>
                  💡 {m.note}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Can't unlock */}
        <div style={{ backgroundColor: "#fff5f5", border: "1px solid #fecaca", borderRadius: "14px", padding: "20px 22px", marginBottom: "36px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#1e293b", marginBottom: "12px" }}>解除できないケース</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              "Apple IDのパスワードを完全に忘れ、リセットも不可能な場合",
              "購入証明書がなく、Appleへの申請が通らない場合",
              "前の所有者が協力してくれない場合",
            ].map((item) => (
              <li key={item} style={{ fontSize: "14px", color: "#334155", padding: "5px 0", display: "flex", gap: "8px" }}>
                <span style={{ color: "#ef4444", fontWeight: 700, flexShrink: 0 }}>✗</span>
                {item}
              </li>
            ))}
          </ul>
          <p style={{ fontSize: "13px", color: "#64748b", marginTop: "12px", lineHeight: 1.6 }}>
            上記に当てはまる場合でも、当店では状態によって買取できるケースがあります。まずはご相談ください。
          </p>
        </div>

        {/* CTA */}
        <div style={{ backgroundColor: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "16px", padding: "28px 24px", textAlign: "center" }}>
          <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#1e293b", marginBottom: "10px" }}>ロックがかかっていても買取相談OK</h3>
          <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.7, marginBottom: "20px" }}>
            解除できないかもしれない状態でも、まずはLINEで相談してください。状態を確認してご対応します。
          </p>
          <Link href="/contact" style={{
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
            LINEで相談する
          </Link>
        </div>

        <div style={{ marginTop: "24px", textAlign: "center" }}>
          <Link href="/buyback" style={{ fontSize: "14px", color: "#64748b", textDecoration: "underline" }}>← 買取ページに戻る</Link>
        </div>

      </div>
    </div>
  );
}
