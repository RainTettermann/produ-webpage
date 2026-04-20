import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://produ.studio";
const siteTitle = "PRODU — Audiovisual Production Studio";
const siteDescription =
  "PRODU is an audiovisual production studio crafting stages, light, and spatial experiences for alternative and electronic music.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s — PRODU"
  },
  description: siteDescription,
  applicationName: "PRODU",
  keywords: [
    "PRODU",
    "audiovisual",
    "AV production",
    "stage design",
    "light design",
    "video production",
    "installation",
    "electronic music",
    "creative studio",
    "Tallinn",
    "Estonia"
  ],
  authors: [{ name: "PRODU" }],
  creator: "PRODU",
  publisher: "PRODU",
  formatDetection: {
    telephone: false
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "PRODU",
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription
  },
  icons: {
    icon: "/logos/mark-white.svg"
  }
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-produ-black text-produ-white antialiased">
        {children}
      </body>
    </html>
  );
}
