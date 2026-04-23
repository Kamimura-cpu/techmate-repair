import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";

const trustPoints = [
  { icon: "🚗", title: "出張費無料", desc: "対応エリア内はどこでも出張費が無料です。" },
  { icon: "📋", title: "修理前に見積もり", desc: "必ず先に金額をご提示。追加費用は一切ありません。" },
  { icon: "🛡️", title: "修理後1ヶ月保証", desc: "同じ箇所の不具合は無償で再修理します。" },
  { icon: "💬", title: "LINEで気軽に相談", desc: "見積もり・予約・質問すべてLINEで対応します。" },
];

const services = [
  { icon: "🚗", title: "出張修理", description: "ご指定の場所へお伺いして即日修理。店舗に行く手間がありません。" },
  { icon: "📦", title: "預かり修理", description: "その場で直せない場合はお預かりして丁寧に修理します。" },
  { icon: "💰", title: "買取", description: "壊れていても電源が入らなくてもOK。条件次第で買取します。" },
  { icon: "📱", title: "販売", description: "整備・動作確認済みの端末を適正価格で販売しています。" },
];

const repairItems = [
  { device: "iPhone", items: ["画面割れ修理", "バッテリー交換", "背面ガラス交換"] },
  { device: "Mac / Windows PC", items: ["画面修理", "バッテリー交換", "キーボード修理", "データ復旧"] },
];

const studentAdvantages = [
  {
    icon: "💸",
    title: "店舗なしだから安い",
    desc: "家賃・人件費・広告費ゼロ。その分をそのまま料金に反映しています。大手チェーンより安く修理できるのはこのためです。",
  },
  {
    icon: "🤝",
    title: "直接やりとりできる",
    desc: "窓口スタッフを通さず、修理する本人と直接LINEでやりとりできます。状況がリアルタイムで伝わるので安心です。",
  },
  {
    icon: "⚡",
    title: "フットワークが軽い",
    desc: "大学生ならではの機動力で、相談から出張までをスピーディに対応。融通が利くのも個人運営ならではです。",
  },
];

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#f1f5f9" }}>

      {/* Hero */}
      <section style={{ position: "relative", width: "100%", minHeight: "clamp(420px, 60vw, 620px)", overflow: "hidden" }}>
        <Image
          src="/repair2.png"
          alt="iPhone修理作業中"
          fill
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
          priority
        />
        {/* オーバーレイ */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(15,23,42,0.55) 0%, rgba(15,23,42,0.7) 100%)" }} />
        {/* テキスト */}
        <div style={{ position: "relative", zIndex: 1, maxWidth: "700px", margin: "0 auto", padding: "clamp(60px, 12vw, 120px) 24px", textAlign: "center" }}>
          <span className="hero-badge" style={{
            display: "inline-block",
            backgroundColor: "rgba(254,249,195,0.9)",
            color: "#854d0e",
            fontSize: "14px",
            fontWeight: 600,
            padding: "6px 16px",
            borderRadius: "999px",
            marginBottom: "24px",
          }}>
            🎓 現役大学生が運営・店舗なしで低価格
          </span>
          <h1 className="hero-title" style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: 800, color: "#ffffff", lineHeight: 1.45, marginBottom: "18px", textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>
            スマホ・PCの困りごと<br />お気軽にご相談ください
          </h1>
          <p className="hero-desc" style={{ fontSize: "clamp(14px, 2.5vw, 17px)", color: "rgba(255,255,255,0.85)", lineHeight: 1.8, marginBottom: "32px" }}>
            出張修理・買取・販売を行っています。iPhone・Mac・Windows PCに対応。まずはLINEで無料相談。
          </p>
          <div className="hero-buttons" style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "360px", margin: "0 auto" }}>
            <Link href="/contact" className="btn-primary" style={{
              display: "block",
              backgroundColor: "#2563eb",
              color: "#ffffff",
              padding: "16px",
              borderRadius: "12px",
              fontSize: "17px",
              fontWeight: 700,
              textDecoration: "none",
              textAlign: "center",
              boxShadow: "0 4px 12px rgba(37,99,235,0.4)",
            }}>
              LINEで無料相談
            </Link>
            <Link href="/repair" style={{
              display: "block",
              backgroundColor: "rgba(255,255,255,0.15)",
              color: "#ffffff",
              padding: "16px",
              borderRadius: "12px",
              fontSize: "17px",
              fontWeight: 600,
              textDecoration: "none",
              textAlign: "center",
              border: "1px solid rgba(255,255,255,0.4)",
              backdropFilter: "blur(4px)",
            }}>
              修理メニューを見る
            </Link>
          </div>
        </div>
      </section>

      {/* Trust points */}
      <section style={{ backgroundColor: "#ffffff", padding: "48px 20px", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
            {trustPoints.map((t, i) => (
              <Reveal key={t.title} delay={(i + 1) as 1 | 2 | 3 | 4}>
                <div style={{ textAlign: "center", padding: "4px" }}>
                  <div style={{ fontSize: "32px", marginBottom: "10px" }}>{t.icon}</div>
                  <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#1e293b", marginBottom: "6px" }}>{t.title}</h3>
                  <p style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.6 }}>{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* College student advantage */}
      <section style={{ backgroundColor: "#fffbeb", borderTop: "1px solid #fde68a", borderBottom: "1px solid #fde68a", padding: "56px 20px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: "32px" }}>
              <p style={{ fontSize: "13px", fontWeight: 700, color: "#92400e", marginBottom: "8px", letterSpacing: "0.05em" }}>🎓 現役大学生が運営しているからこそ</p>
              <h2 style={{ fontSize: "clamp(20px, 4vw, 26px)", fontWeight: 800, color: "#1e293b", marginBottom: "12px" }}>お客さんに正直に、低価格で提供できます</h2>
              <p style={{ fontSize: "15px", color: "#78716c", lineHeight: 1.8, maxWidth: "480px", margin: "0 auto" }}>
                店舗を持たず広告費もかけない分、その分を修理料金に還元しています。大手修理店より安く、でも手を抜かない丁寧な仕事を心がけています。
              </p>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px" }}>
            {studentAdvantages.map((item, i) => (
              <Reveal key={item.title} delay={(i + 1) as 1 | 2 | 3}>
                <div className="card-lift" style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "24px", border: "1px solid #fde68a", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
                  <div style={{ fontSize: "32px", marginBottom: "12px" }}>{item.icon}</div>
                  <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#1e293b", marginBottom: "8px" }}>{item.title}</h3>
                  <p style={{ fontSize: "14px", color: "#78716c", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 大丈夫？安心の根拠 */}
      <section style={{ backgroundColor: "#ffffff", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0", padding: "56px 20px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: "28px" }}>
              <p style={{ fontSize: "13px", fontWeight: 700, color: "#64748b", marginBottom: "8px", letterSpacing: "0.05em" }}>よくある不安</p>
              <h2 style={{ fontSize: "clamp(20px, 4vw, 26px)", fontWeight: 800, color: "#1e293b", marginBottom: "16px" }}>
                「大学生が修理して大丈夫？」
              </h2>
              {/* プロフィール写真 */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ width: "200px", height: "200px", borderRadius: "50%", overflow: "hidden", border: "4px solid #e2e8f0", boxShadow: "0 6px 20px rgba(0,0,0,0.12)", flexShrink: 0 }}>
                  <Image src="/profile.png" alt="上村 航我" width={200} height={200} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <p style={{ fontSize: "14px", color: "#64748b" }}>上村 航我</p>
              </div>
              <p style={{ fontSize: "15px", color: "#475569", lineHeight: 1.8, maxWidth: "480px", margin: "0 auto" }}>
                ご安心ください。情報技術・電子工学に関する専門的な学習・研究を行っている大学生が対応します。
              </p>
            </div>
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              {
                icon: "📚",
                title: "専門課程で学んだ知識",
                desc: "大学で情報技術・電子工学系の専門課程を学んでいます。デバイスの仕組みを理論から理解した上で修理に臨んでいます。",
              },
              {
                icon: "🔬",
                title: "実践的な研究・経験",
                desc: "授業や研究活動を通じて培った実践的な技術を修理に活かしています。感覚ではなく知識に基づいた作業を行います。",
              },
              {
                icon: "✅",
                title: "修理前後に動作確認",
                desc: "修理後は必ず動作確認を行い、問題がないことを確かめてからお返しします。万が一の場合は1ヶ月保証で対応します。",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={(i + 1) as 1 | 2 | 3}>
                <div className="card-lift" style={{ display: "flex", gap: "18px", alignItems: "flex-start", backgroundColor: "#f8fafc", borderRadius: "14px", padding: "20px 22px", border: "1px solid #e2e8f0" }}>
                  <span style={{ fontSize: "28px", flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#1e293b", marginBottom: "6px" }}>{item.title}</h3>
                    <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: "56px 20px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <Reveal>
            <h2 style={{ fontSize: "clamp(20px, 4vw, 24px)", fontWeight: 800, color: "#1e293b", textAlign: "center", marginBottom: "8px" }}>サービス一覧</h2>
            <p style={{ fontSize: "15px", color: "#64748b", textAlign: "center", marginBottom: "28px" }}>4つのサービスでお困りごとを解決します</p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "14px" }}>
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i + 1) as 1 | 2 | 3 | 4}>
                <div className="card-lift" style={{ backgroundColor: "#ffffff", borderRadius: "16px", border: "1px solid #e2e8f0", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", padding: "22px 18px", height: "100%" }}>
                  <div style={{ fontSize: "30px", marginBottom: "10px" }}>{s.icon}</div>
                  <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#1e293b", marginBottom: "6px" }}>{s.title}</h3>
                  <p style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.7 }}>{s.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Repair preview */}
      <section style={{ backgroundColor: "#ffffff", padding: "56px 20px", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <Reveal>
            <div style={{ borderRadius: "20px", overflow: "hidden", marginBottom: "32px", position: "relative", height: "220px" }}>
              <Image
                src="/repair1.png"
                alt="修理作業"
                fill
                style={{ objectFit: "cover", objectPosition: "center 40%" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,23,42,0.7) 0%, rgba(15,23,42,0.2) 100%)", display: "flex", alignItems: "center", padding: "0 36px" }}>
                <div>
                  <h2 style={{ fontSize: "clamp(20px, 4vw, 26px)", fontWeight: 800, color: "#ffffff", marginBottom: "8px" }}>対応修理メニュー</h2>
                  <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.8)" }}>iPhone・Mac・Windows PCに対応しています</p>
                </div>
              </div>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px", marginBottom: "28px" }}>
            {repairItems.map((r, i) => (
              <Reveal key={r.device} delay={(i + 1) as 1 | 2}>
                <div className="card-lift" style={{ backgroundColor: "#f8fafc", borderRadius: "16px", padding: "24px", border: "1px solid #e2e8f0" }}>
                  <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#2563eb", marginBottom: "16px" }}>{r.device}</h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {r.items.map((item) => (
                      <li key={item} style={{ fontSize: "15px", color: "#475569", padding: "8px 0", borderBottom: "1px solid #e2e8f0", display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ width: "7px", height: "7px", backgroundColor: "#3b82f6", borderRadius: "50%", flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div style={{ textAlign: "center" }}>
              <Link href="/repair" style={{
                display: "inline-block",
                border: "2px solid #2563eb",
                color: "#2563eb",
                padding: "12px 28px",
                borderRadius: "10px",
                fontSize: "15px",
                fontWeight: 600,
                textDecoration: "none",
                backgroundColor: "#ffffff",
                transition: "background-color 0.15s ease, color 0.15s ease",
              }}>
                料金・詳細を見る →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Buyback */}
      <section style={{ padding: "56px 20px" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <Reveal>
            <div className="card-lift" style={{ backgroundColor: "#ffffff", borderRadius: "20px", padding: "36px 24px", textAlign: "center", border: "1px solid #e2e8f0", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
              <div style={{ fontSize: "44px", marginBottom: "14px" }}>♻️</div>
              <h2 style={{ fontSize: "clamp(20px, 4vw, 24px)", fontWeight: 800, color: "#1e293b", marginBottom: "12px" }}>壊れていても買取します</h2>
              <p style={{ fontSize: "15px", color: "#475569", lineHeight: 1.8, marginBottom: "16px" }}>
                画面割れ・水没・電源が入らない端末でも条件を満たせばお買取します。まずはLINEでお気軽にお問い合わせください。
              </p>
              <div style={{ backgroundColor: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "10px", padding: "12px 16px", marginBottom: "20px", textAlign: "left", display: "flex", gap: "10px", alignItems: "center" }}>
                <span style={{ fontSize: "18px", flexShrink: 0 }}>🪪</span>
                <p style={{ fontSize: "13px", color: "#15803d", lineHeight: 1.6 }}>
                  <span style={{ fontWeight: 700 }}>古物商許可取得済み</span>　長野県公安委員会許可 第481102500050号（事務機器商）
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <Link href="/contact" className="btn-primary" style={{
                  display: "block",
                  backgroundColor: "#2563eb",
                  color: "#ffffff",
                  padding: "14px",
                  borderRadius: "10px",
                  fontSize: "16px",
                  fontWeight: 700,
                  textDecoration: "none",
                  textAlign: "center",
                  boxShadow: "0 4px 12px rgba(37,99,235,0.25)",
                }}>
                  LINEで査定依頼
                </Link>
                <Link href="/buyback" style={{
                  display: "block",
                  backgroundColor: "#f1f5f9",
                  color: "#334155",
                  padding: "14px",
                  borderRadius: "10px",
                  fontSize: "15px",
                  fontWeight: 600,
                  textDecoration: "none",
                  textAlign: "center",
                  border: "1px solid #cbd5e1",
                  transition: "background-color 0.15s ease",
                }}>
                  買取詳細を見る
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Area */}
      <section style={{ backgroundColor: "#ffffff", padding: "56px 20px", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
          <Reveal>
            <h2 style={{ fontSize: "clamp(20px, 4vw, 24px)", fontWeight: 800, color: "#1e293b", marginBottom: "8px" }}>出張対応エリア</h2>
            <p style={{ fontSize: "15px", color: "#64748b", marginBottom: "24px" }}>以下のエリアへ無料で出張します</p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", marginBottom: "16px" }}>
              {["上田市", "東御市", "坂城町", "青木村", "長和町"].map((area) => (
                <span key={area} style={{
                  padding: "9px 20px",
                  backgroundColor: "#eff6ff",
                  border: "1px solid #bfdbfe",
                  color: "#1d4ed8",
                  borderRadius: "999px",
                  fontSize: "15px",
                  fontWeight: 600,
                  transition: "background-color 0.15s ease",
                }}>
                  {area}
                </span>
              ))}
            </div>
            <p style={{ fontSize: "14px", color: "#94a3b8" }}>エリア外の方もまずはご相談ください</p>
          </Reveal>
        </div>
      </section>

      {/* LINE CTA */}
      <section style={{ backgroundColor: "#1d4ed8", padding: "64px 20px" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
          <Reveal>
            <h2 style={{ fontSize: "clamp(22px, 5vw, 28px)", fontWeight: 800, color: "#ffffff", marginBottom: "14px" }}>まずはLINEでお気軽にご相談を</h2>
            <p style={{ fontSize: "15px", color: "#bfdbfe", lineHeight: 1.8, marginBottom: "28px" }}>
              見積もり・ご予約・ご質問、すべてLINEで受け付けています。24時間以内に返信します。
            </p>
            <Link href="/contact" className="btn-line" style={{
              display: "block",
              backgroundColor: "#06C755",
              color: "#ffffff",
              padding: "18px",
              borderRadius: "14px",
              fontSize: "18px",
              fontWeight: 700,
              textDecoration: "none",
              textAlign: "center",
              boxShadow: "0 4px 16px rgba(6,199,85,0.4)",
            }}>
              LINEで相談する
            </Link>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
