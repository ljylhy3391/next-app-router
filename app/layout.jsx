// app/layout.jsx
import "./globals.css";
import AppNavigation from "./components/layout/AppNavigation";

export const metadata = {
  title: "Next X AI",
  description: "한땀 한땀 치는 시대는 끝?",
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
