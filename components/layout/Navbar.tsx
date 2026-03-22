"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BUSINESS } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] px-6 py-4 md:px-12 flex justify-between items-center bg-cream/85 backdrop-blur-[12px] border-b border-amber/[0.12] transition-all duration-300 ${
        scrolled ? "shadow-[0_4px_32px_rgba(58,34,16,0.12)]" : ""
      }`}
    >
      <div className="font-display text-xl font-bold text-brown tracking-[0.02em]">
        Hive <span className="text-amber">&amp;</span> Harvest
      </div>
      <div className="flex items-center gap-5 md:gap-9">
        <Link
          href="#about"
          className="hidden md:inline font-sans text-[0.85rem] font-medium text-text-soft uppercase tracking-[0.06em] transition-colors duration-200 hover:text-amber"
        >
          Our Story
        </Link>
        <Link
          href="#shop"
          className="hidden md:inline font-sans text-[0.85rem] font-medium text-text-soft uppercase tracking-[0.06em] transition-colors duration-200 hover:text-amber"
        >
          Shop
        </Link>
        <Link
          href="#contact"
          className="font-sans text-[0.85rem] font-medium text-white-warm bg-amber px-5 py-2.5 rounded-full transition-all duration-200 hover:bg-brown-mid hover:-translate-y-px"
          aria-label={`Order now - call ${BUSINESS.phone}`}
        >
          Order Now
        </Link>
      </div>
    </nav>
  );
}
