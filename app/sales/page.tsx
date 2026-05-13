import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import type { Device } from "@/app/api/sales/route";

export const metadata: Metadata = {
  title: "販売中の端末 | TechMate Repair Service",
};

const conditionLabel: Record<Device["condition"], { label: string; bg: string; color: string; border: string }> = {
  S: { label: "S ランク", bg: "#faf5ff", color: "#7c3aed", border: "#ddd6fe" },
  A: { label: "A ランク", bg: "#eff6ff", color: "#2563eb", border: "#bfdbfe" },
  B: { label: "B ランク", bg: "#f0fdf4", color: "#16a34a", border: "#bbf7d0" },
  C: { label: "C ランク", bg: "#fffbeb", color: "#d97706", border: "#fde68a" },
};

async function getDevices(): Promise<Device[]> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
  try {
    const res = await fetch(`${baseUrl}/api/sales`, { next: { revalidate: 60 } });
    const json = await res.json();
    return json.devices ?? [];
  } catch {
    return [];
  }
}

export default async function SalesPage() {
  const devices = await getDevices();

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
        <div style={{ marginBottom: "40px" }}>
          <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.7 }}>
            整備・動作確認済みの端末を販売しています。購入はLINEからご連絡ください。
          </p>
        </div>

        {/* Condition guide */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
          {Object.entries(conditionLabel).map(([k, v]) => (
            <span key={k} style={{ padding: "6px 14px", fontSize: "14px", fontWeight: 600, borderRadius: "999px", border: `1px solid ${v.border}`, backgroundColor: v.bg, color: v.color }}>
              {v.label}
            </span>
          ))}
          <span style={{ padding: "6px 14px", fontSize: "13px", borderRadius: "999px", border: "1px solid #e2e8f0", backgroundColor: "#ffffff", color: "#94a3b8" }}>
            ※ランクの詳細はLINEでご確認ください
          </span>
        </div>

        {/* Device grid */}
        {devices.length === 0 ? (
          <div style={{ backgroundColor: "#ffffff", borderRadius: "20px", border: "1px solid #e2e8f0", padding: "80px 20px", textAlign: "center" }}>
            <p style={{ fontSize: "48px", marginBottom: "16px" }}>📦</p>
            <p style={{ fontSize: "18px", fontWeight: 600, color: "#475569", marginBottom: "8px" }}>現在販売中の端末はありません</p>
            <p style={{ fontSize: "15px", color: "#94a3b8" }}>入荷次第こちらに掲載します</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {devices.map((device) => {
              const cond = conditionLabel[device.condition];
              return (
                <div key={device.id} style={{ backgroundColor: "#ffffff", borderRadius: "16px", border: "1px solid #e2e8f0", overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                  <div style={{ height: "200px", backgroundColor: "#f8fafc", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {device.imageUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={device.imageUrl} alt={device.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    ) : (
                      <span style={{ fontSize: "56px", opacity: 0.2 }}>📱</span>
                    )}
                  </div>
                  <div style={{ padding: "20px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                      <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#1e293b" }}>{device.name}</h3>
                      <span style={{ fontSize: "12px", fontWeight: 600, padding: "3px 10px", borderRadius: "999px", border: `1px solid ${cond.border}`, backgroundColor: cond.bg, color: cond.color, flexShrink: 0, marginLeft: "8px" }}>
                        {cond.label}
                      </span>
                    </div>
                    <p style={{ fontSize: "14px", color: "#94a3b8", marginBottom: "8px" }}>{device.model} / {device.storage}</p>
                    <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.6, marginBottom: "18px" }}>{device.conditionNote}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <p style={{ fontSize: "20px", fontWeight: 800, color: "#1e293b" }}>¥{device.price.toLocaleString()}</p>
                      <Link href="https://line.me/R/ti/p/%40644lbfta" target="_blank" rel="noopener noreferrer" style={{
                        backgroundColor: "#2563eb",
                        color: "#ffffff",
                        padding: "8px 16px",
                        borderRadius: "8px",
                        fontSize: "14px",
                        fontWeight: 600,
                        textDecoration: "none",
                      }}>
                        購入を問い合わせ
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* CTA */}
        <div style={{ marginTop: "48px", textAlign: "center" }}>
          <p style={{ fontSize: "16px", color: "#64748b", marginBottom: "16px" }}>希望の機種がない場合もお気軽にご相談ください</p>
          <Link href="https://line.me/R/ti/p/%40644lbfta" target="_blank" rel="noopener noreferrer" style={{
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
