import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alasu.live"),
  title: {
    default: "ALASU — Чистая вода из Хан Тэнгри",
    template: "%s | ALASU",
  },
  description: "ALASU — природная минеральная вода из источников Хан Тэнгри. Чистая, живая, настоящая. Негазированная, газированная, Zam Zam и SPORT+.",
  keywords: ["ALASU", "аласу", "вода", "вода алматы", "минеральная вода", "доставка воды алматы", "су алматы", "таза су", "купить воду алматы", "Хан Тэнгри", "Казахстан", "su", "Алматы", "Zam Zam"],
  authors: [{ name: "ALASU" }],
  creator: "ALASU",
  openGraph: {
    type: "website",
    locale: "ru_KZ",
    alternateLocale: ["kk_KZ", "en_US"],
    url: "https://www.alasu.live",
    siteName: "ALASU",
    title: "ALASU — Чистая вода из Хан Тэнгри",
    description: "Природная минеральная вода из источников Хан Тэнгри. Негазированная, газированная, Zam Zam и SPORT+.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ALASU — Природная вода из Хан Тэнгри",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ALASU — Чистая вода из Хан Тэнгри",
    description: "Природная минеральная вода из источников Хан Тэнгри.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={poppins.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Inter', Arial, sans-serif" }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
