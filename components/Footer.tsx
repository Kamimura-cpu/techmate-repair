import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#ffffff", borderTop: "1px solid #e2e8f0", marginTop: "80px" }}>
      <div className="max-w-6xl mx-auto px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p style={{ color: "#2563eb", fontWeight: 700, fontSize: "18px", marginBottom: "10px" }}>TechMate Repair Service</p>
            <p style={{ color: "#64748b", fontSize: "15px", lineHeight: "1.7" }}>
              長野県上田市エリアを中心に<br />
              出張修理・買取・販売を行っています。<br />
              お気軽にLINEからご相談ください。
            </p>
          </div>
          <div>
            <p style={{ color: "#334155", fontWeight: 600, fontSize: "15px", marginBottom: "12px" }}>サービス</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { href: "/repair", label: "修理メニュー・料金" },
                { href: "/buyback", label: "買取" },
                { href: "/sales", label: "販売中の端末" },
                { href: "/area", label: "対応エリア" },
              ].map((item) => (
                <li key={item.href} style={{ marginBottom: "8px" }}>
                  <Link href={item.href} style={{ color: "#64748b", fontSize: "15px", textDecoration: "none" }}
                    className="hover:text-blue-600 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p style={{ color: "#334155", fontWeight: 600, fontSize: "15px", marginBottom: "12px" }}>サポート</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { href: "/faq", label: "よくある質問" },
                { href: "/contact", label: "お問い合わせ" },
              ].map((item) => (
                <li key={item.href} style={{ marginBottom: "8px" }}>
                  <Link href={item.href} style={{ color: "#64748b", fontSize: "15px", textDecoration: "none" }}
                    className="hover:text-blue-600 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div style={{ marginTop: "40px", paddingTop: "24px", borderTop: "1px solid #f1f5f9", textAlign: "center" }}>
          <p style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "4px" }}>
            古物商　長野県公安委員会許可　第481102500050号（事務機器商）　許可者：上村 航我
          </p>
          <p style={{ color: "#94a3b8", fontSize: "13px" }}>© 2024 TechMate Repair Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
