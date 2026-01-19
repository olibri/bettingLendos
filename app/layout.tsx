import type { Metadata } from "next";
import { Schibsted_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Expiryx | Bet on Live Market Moves Every Minute",
  description: "Predict short-term price behavior on real exchange charts. Transparent, skill-driven market predictions powered by real exchange prices.",
  keywords: ["market predictions", "trading", "crypto", "live markets", "price prediction", "exchange", "betting"],
  authors: [{ name: "Expiryx" }],
  creator: "Expiryx",
  publisher: "Expiryx",
  metadataBase: new URL("https://expiryx.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://expiryx.com",
    siteName: "Expiryx",
    title: "Expiryx | Bet on Live Market Moves Every Minute",
    description: "Predict short-term price behavior on real exchange charts. Transparent, skill-driven market predictions powered by real exchange prices.",
    images: [
      {
        url: "/1766166390711.jpeg",
        width: 1200,
        height: 630,
        alt: "Expiryx - Live Market Predictions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expiryx | Bet on Live Market Moves Every Minute",
    description: "Predict short-term price behavior on real exchange charts. Transparent, skill-driven market predictions powered by real exchange prices.",
    images: ["/1766166390711.jpeg"],
  },
  icons: {
    icon: "/Frame 2147258268.svg",
    shortcut: "/Frame 2147258268.svg",
    apple: "/Frame 2147258268.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${schibstedGrotesk.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
