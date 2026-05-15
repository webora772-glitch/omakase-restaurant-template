import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const notoJP = Noto_Serif_JP({
  variable: "--font-noto-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shin Kai Omakase | New York",
  description:
    "A curated journey of taste, crafted in the moment. Shin Kai Omakase offers an intimate 12-seat counter experience in New York City.",
  keywords: "omakase, Japanese restaurant, sushi, New York, fine dining, tasting menu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${notoJP.variable}`}
    >
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
