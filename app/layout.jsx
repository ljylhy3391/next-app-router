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
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Next X AI",
    description: "한땀 한땀 치는 시대는 끝?",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Next X AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next X AI",
    description: "한땀 한땀 치는 시대는 끝?",
    images: ["/opengraph-image.png"],
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
