import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asset Management Society, India (AMSI)",
  description:
    "Advancing asset management excellence through collaboration, education, and innovation across India and globally.",
  keywords: [
    "Asset Management",
    "Engineering",
    "India",
    "Reliability",
    "Maintenance",
    "AMSI",
    "Professional Society",
    "Physical Asset Management",
    "ISO 55000",
  ],
  authors: [{ name: "Asset Management Society, India" }],
  creator: "Asset Management Society, India",
  publisher: "Asset Management Society, India",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Asset Management Society, India (AMSI)",
    description:
      "Advancing asset management excellence through collaboration, education, and innovation across India and globally.",
    url: "https://www.amsi.net.in",
    siteName: "AMSI India",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asset Management Society, India (AMSI)",
    description:
      "Advancing asset management excellence through collaboration, education, and innovation across India and globally.",
    creator: "@AMSI_India",
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
  category: "Education / Engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
