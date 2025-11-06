// app/layout.jsx
import "./globals.css";
import AppNavigation from "./components/layout/AppNavigation";

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "Next X AI",
  description: "한땀 한땀 치는 시대는 끝?",
  icons: {
    icon: "/favicon.ico", // 또는 "/icon.png", "/icon.svg" 등
  },
  openGraph: {
    title: "Next X AI",
    description: "한땀 한땀 치는 시대는 끝?",
    // images는 app/opengraph-image.png 파일이 자동으로 인식됩니다
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <AppNavigation />
        {children}
      </body>
    </html>
  );
}
