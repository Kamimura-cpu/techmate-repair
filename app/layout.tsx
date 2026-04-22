import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "TechMate Repair Service | スマホ・PC修理・買取・販売",
  description: "上田市・東御市・坂城町・青木村・長和町エリアで出張修理・買取・販売を行うTechMate Repair Service。iPhone・Mac・Windows PCに対応。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" style={{ backgroundColor: "#f1f5f9", color: "#1e293b" }}>
      <body style={{ backgroundColor: "#f1f5f9", color: "#1e293b", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
