import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import ScrollToTopButton from "./_components/ScrollToTopButton";
import PageTransition from "./_components/PageTransition";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    template: "%s | ポートフォリオサイト",
    default: "ポートフォリオサイト",
  },
  description: "「Next.js+ヘッドレスCMSではじめる！かんたん・モダンWebサイト制作入門」で作成されるサイトです。",
  openGraph: {
    title: "シンプルなコーポレートサイト",
    description: "「Next.js+ヘッドレスCMSではじめる！かんたん・モダンWebサイト制作入門」で作成されるサイトです。",
    images: ["ogp.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <PageTransition>
        <Header />
        {children}
        <Footer />
        <ScrollToTopButton />
        </PageTransition>
        </body>
        <GoogleAnalytics gaId="G-XXX" />
    </html>
  );
}