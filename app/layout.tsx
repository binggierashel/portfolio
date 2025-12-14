import { Inter } from "next/font/google";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Binggie Rashel Prasetyo | Computer Engineering Student & Web Developer",
  description:
    "Personal portfolio of Binggie Rashel Prasetyo, a Computer Engineering student and web developer specializing in Laravel, React, and Next.js.",
};

config.autoAddCss = false;

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
