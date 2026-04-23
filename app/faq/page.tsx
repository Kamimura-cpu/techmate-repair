import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "よくある質問 | TechMate Repair Service",
};

const faqs = [
  { q: "出張費はかかりますか？", a: "対応エリア内（上田市・東御市・坂城町・青木村・長和町）への出張費は無料です。エリア外の方はご相談ください。" },
  { q: "その場で修理できない場合はどうなりますか？", a: "部品の取り寄せや高度な修理が必要な場合は端末をお預かりします。目安は1〜3日程度です。完了次第ご連絡し、お届けまたはお引き渡しします。" },
  { q: "修理前に見積もりはもらえますか？", a: "はい、必ず修理前に見積もり金額をご提示します。ご納得いただいてから修理を開始しますので、ご安心ください。" },
  { q: "データは消えますか？", a: "修理内容によってはデータが消える可能性があります。修理前にバックアップを取っていただくことをお勧めします。バックアップのお手伝いもお気軽にご相談ください。" },
  { q: "電源が入らないiPhoneも買取してもらえますか？", a: "はい、条件を満たせば電源が入らない端末でも買取可能です。機種・状態をLINEでお知らせいただければ、査定金額をご連絡します。" },
  { q: "アクティベーションロックがかかっている端末は買取できますか？", a: "基本的にアクティベーションロックがかかっている端末は買取が難しい状況です。ロック解除済みの場合はご相談ください。" },
  { q: "修理後に保証はありますか？", a: "修理後1ヶ月間の保証をお付けしています。同一箇所の不具合が再発した場合は無償で対応します（外的要因による破損を除く）。" },
  { q: "予約は必要ですか？", a: "はい、出張の日程調整が必要なため、LINEで事前にご連絡ください。当日の対応も可能な場合がありますので、お気軽にご相談ください。" },
  { q: "対応していない機種・修理はありますか？", a: "記載のないものでもお気軽にご相談ください。できる限り対応します。" },
];

export default function FaqPage() {
  return (
    <div style={{ backgroundColor: "#f1f5f9", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ position: "relative", width: "100%", height: "clamp(220px, 35vw, 320px)", overflow: "hidden" }}>
        <Image src="/hero-faq.png" alt="よくある質問" fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(15,23,42,0.4) 0%, rgba(15,23,42,0.65) 100%)" }} />
        <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 24px" }}>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", fontWeight: 700, marginBottom: "10px", letterSpacing: "0.08em" }}>FAQ</p>
          <h1 style={{ fontSize: "clamp(24px, 5vw, 36px)", fontWeight: 800, color: "#ffffff", textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>よくある質問</h1>
        </div>
      </section>

      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "48px 20px" }}>

        <div style={{ marginBottom: "40px" }}>
          <p style={{ fontSize: "15px", color: "#475569" }}>解決しない場合はLINEでお気軽にお問い合わせください。</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "40px" }}>
          {faqs.map((faq) => (
            <div key={faq.q} style={{ backgroundColor: "#ffffff", borderRadius: "14px", padding: "20px 22px", border: "1px solid #e2e8f0", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
              <p style={{ fontSize: "16px", fontWeight: 700, color: "#1e293b", marginBottom: "10px", display: "flex", gap: "10px" }}>
                <span style={{ color: "#2563eb", flexShrink: 0 }}>Q.</span>
                {faq.q}
              </p>
              <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.8, display: "flex", gap: "10px" }}>
                <span style={{ color: "#cbd5e1", flexShrink: 0, fontWeight: 700 }}>A.</span>
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "15px", color: "#64748b", marginBottom: "14px" }}>他にご不明な点はLINEでご質問ください</p>
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
            LINEで質問する
          </Link>
        </div>

      </div>
    </div>
  );
}
