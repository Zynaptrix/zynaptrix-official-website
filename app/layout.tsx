import { Fraunces, Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zynaptrix - AI Research Company",
  description:
    "Zynaptrix is a research company building the foundations of general-purpose intelligence.",
  openGraph: {
    title: "Zynaptrix",
    description:
      "Building the foundations of general-purpose intelligence through rigorous research.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`} data-scroll-behavior="smooth">

      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}


