import type { Metadata } from "next";
import { Michroma, Rubik, Inter } from "next/font/google";
import "./globals.css";

const michroma = Michroma({
  weight: "400",
  variable: "--font-michroma",
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Veloz - Your home for playing and earning",
  description: "The first cross-chain mini-app aggregator and marketplace. Discover, play, and earn rewards from all mini-apps in one hub.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${michroma.variable} ${rubik.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
