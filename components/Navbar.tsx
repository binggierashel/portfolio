"use client";

import { useEffect, useState } from "react";
import { Fira_Code } from "next/font/google";
import Clock from "./Clock";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 w-full z-50
        transition-all duration-300
        ${
          scrolled
            ? "bg-black/60 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }
      `}
    >
      <div className={`max-w-6xl mx-auto px-6 text-xl py-4 flex justify-between items-center ${firaCode.className}`}>
        <h1 className="font-bold text-white">binggie.vercel.app</h1>
        <Clock />
      </div>
    </nav>
  );
}
