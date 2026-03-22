"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BUSINESS } from "@/lib/content";

const NAV_LINKS = [
  { label: "Our Story", href: "#about" },
  { label: "Shop", href: "#shop" },
  { label: "Payment", href: "#payment" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] px-6 py-4 md:px-12 flex justify-between items-center bg-cream/85 backdrop-blur-[12px] border-b border-amber/[0.12] transition-all duration-300 ${
          scrolled ? "shadow-warm" : ""
        }`}
      >
        {/* Logo */}
        <Link href="#" className="font-display text-xl font-bold text-brown tracking-[0.02em]">
          Hive <span className="text-gradient-honey">&amp;</span> Harvest
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative font-sans text-[0.85rem] font-medium text-text-soft uppercase tracking-[0.06em] transition-colors duration-200 hover:text-amber after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-honey after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="font-sans text-[0.85rem] font-medium text-white-warm bg-gradient-honey px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-honey hover:-translate-y-px"
            aria-label={`Order now - call ${BUSINESS.phone}`}
          >
            Order Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 relative z-[110]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-5 h-[2px] bg-brown transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-brown transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-brown transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[90] bg-cream/98 backdrop-blur-md flex flex-col items-center justify-center gap-8"
          role="dialog"
          aria-modal="true"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-display text-2xl font-semibold text-brown transition-colors duration-200 hover:text-amber"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 font-sans text-base font-medium text-white-warm bg-gradient-honey px-8 py-3.5 rounded-full shadow-honey transition-all duration-300 hover:shadow-honey-lg"
          >
            Order Now
          </Link>
          <a
            href={BUSINESS.phoneHref}
            className="mt-2 font-sans text-sm text-text-soft"
          >
            {"\u{1F4DE}"} {BUSINESS.phone}
          </a>
        </div>
      )}
    </>
  );
}
