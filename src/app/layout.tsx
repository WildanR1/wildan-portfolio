import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wildan Rachmadoni | Portfolio",
  description:
    "Saya Wildan Rachmadoni, seorang mahasiswa di Universitas Negeri Surabaya, yang bercita-cita membangun karier sebagai Front-End Web Developer. Saya sedang fokus untuk menguasai ReactJS dan menjadikannya sebagai teknologi utama dalam pengembangan web saya. Kunjungi website portfolio saya untuk melihat karya-karya saya dan proyek-proyek yang saya kerjakan menggunakan ReactJS.",
  authors: [
    { name: "Wildan Rachmadoni", url: "https://wildan-portfolio.vercel.app/" },
  ],
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "wildan",
    "rachmadoni",
    "wildan rachmadoni",
    "portfolio",
    "react",
    "nextjs",
    "wildan-portfolio",
    "wildan portfolio",
  ],
  openGraph: {
    type: "website",
    title: "Wildan Rachmadoni | Portfolio",
    url: "https://wildan-portfolio.vercel.app/",
    siteName: "Wildan Rachmadoni | Portfolio",
    description:
      "Saya Wildan Rachmadoni, seorang mahasiswa di Universitas Negeri Surabaya, yang bercita-cita membangun karier sebagai Front-End Web Developer. Saya sedang fokus untuk menguasai ReactJS dan menjadikannya sebagai teknologi utama dalam pengembangan web saya. Kunjungi website portfolio saya untuk melihat karya-karya saya dan proyek-proyek yang saya kerjakan menggunakan ReactJS.",
    images: [
      {
        url: "https://postimg.cc/d7G2kCJS",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
