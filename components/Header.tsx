'use client'

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "ホーム" },
  { href: "/repair", label: "修理メニュー" },
  { href: "/buyback", label: "買取" },
  { href: "/sales", label: "販売中の端末" },
  { href: "/area", label: "対応エリア" },
  { href: "/faq", label: "よくある質問" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #e2e8f0", position: "sticky", top: 0, zIndex: 50, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between" style={{ height: "64px" }}>
        <Link href="/" className="flex items-center gap-2">
          <span style={{ color: "#2563eb", fontSize: "20px", fontWeight: 700, letterSpacing: "-0.02em" }}>TechMate</span>
          <span style={{ color: "#94a3b8", fontSize: "14px" }} className="hidden sm:block">Repair Service</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{ color: "#475569", fontSize: "15px", textDecoration: "none" }}
              className="hover:text-blue-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{
              backgroundColor: "#06C755",
              color: "#ffffff",
              padding: "10px 20px",
              borderRadius: "8px",
              fontSize: "15px",
              fontWeight: 600,
              textDecoration: "none",
              display: "inline-block",
            }}
            className="btn-line"
          >
            LINEで相談
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          style={{ color: "#64748b", background: "none", border: "none", cursor: "pointer", padding: "8px" }}
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開く"
        >
          <div style={{ width: "22px", height: "2px", backgroundColor: "currentColor", marginBottom: "5px", borderRadius: "1px" }} />
          <div style={{ width: "22px", height: "2px", backgroundColor: "currentColor", marginBottom: "5px", borderRadius: "1px" }} />
          <div style={{ width: "22px", height: "2px", backgroundColor: "currentColor", borderRadius: "1px" }} />
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div style={{ backgroundColor: "#ffffff", borderTop: "1px solid #f1f5f9" }}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{ display: "block", padding: "14px 20px", color: "#475569", fontSize: "16px", textDecoration: "none", borderBottom: "1px solid #f8fafc" }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div style={{ padding: "12px 20px" }}>
            <Link
              href="/contact"
              style={{
                display: "block",
                textAlign: "center",
                backgroundColor: "#06C755",
                color: "#ffffff",
                padding: "12px 20px",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: 600,
                textDecoration: "none",
              }}
              onClick={() => setMenuOpen(false)}
            >
              LINEで相談
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
