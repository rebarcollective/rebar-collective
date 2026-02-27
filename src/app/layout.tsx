import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rebar Collective | 비즈니스 성장 파트너",
  description: "이커머스 마케팅 실행과 체계적인 세일즈 오퍼레이션으로 비즈니스 성장을 설계합니다.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
