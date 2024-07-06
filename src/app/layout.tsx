import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/templatePart/header"
import Footer from "../components/templatePart/footer"
import { GoogleAnalytics } from '@next/third-parties/google'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YouTube Video Embedding Tool",
  description: "Generated by create next app",
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
