import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/templatePart/header";
import Footer from "../components/templatePart/footer";
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Remove YouTube Information From Embedded Videos",
  description: "Remove Title from Embedded YouTube Videos with our powerful YouTube Embed Tool. Achieve a clean, distraction-free video embedding experience by removing YouTube branding and ads.",
  keywords: ["Remove Title from Embedded YouTube Videos", "YouTube Embed Tool", "Remove YouTube Branding", "Distraction-Free Video Embedding", "Remove Title", "Embedded YouTube Videos"],
  openGraph: {
    title: "Remove YouTube Information From Embedded Videos",
    description: "Remove titles from embedded YouTube videos with our tool. Clean, distraction-free video embedding without YouTube's controls, ads, or branding.",
    url: "https://vasux.site/",
    type: "website",
    images: [
      {
        url: "/blog1.jpg",
        width: 1200,
        height: 630,
        alt: "Remove YouTube Information From Embedded Videos"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-76N7T0NVFH" />
      <body className={inter.className}> <Header/> {children} <Footer/> </body>
    </html>
  );
}
