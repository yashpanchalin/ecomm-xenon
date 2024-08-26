import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./../components/NavBar";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "xenon",
  description: "A complete e-commerce application with Next.js and Wix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ fontFamily: poppins.style.fontFamily }}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
