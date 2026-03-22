import Link from "next/link";
import { BUSINESS } from "@/lib/content";

const FOOTER_LINKS = [
  { label: "Our Story", href: "#about" },
  { label: "Shop", href: "#shop" },
  { label: "Payment", href: "#payment" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brown relative overflow-hidden">
      {/* Honeycomb overlay */}
      <div className="absolute inset-0 honeycomb-bg opacity-10 pointer-events-none" />

      {/* Golden separator line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-honey/40 to-transparent" />

      <div className="px-6 py-12 md:px-20 md:py-16 max-w-[1200px] mx-auto relative z-[1]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start text-center md:text-left">
          {/* Brand */}
          <div>
            <div className="font-display text-xl font-bold text-white-warm/90 mb-3">
              Hive <span className="text-honey">&amp;</span> Harvest
            </div>
            <p className="font-sans text-[0.82rem] text-white-warm/40 leading-relaxed max-w-[280px] mx-auto md:mx-0">
              Small-batch Australian honey. Raw, unfiltered, and full of natural goodness.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="font-sans text-[0.72rem] font-medium text-honey/60 uppercase tracking-[0.12em] mb-4">
              Quick Links
            </div>
            <div className="flex flex-col gap-2.5">
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-sans text-[0.85rem] text-white-warm/55 transition-colors duration-200 hover:text-honey"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <div className="font-sans text-[0.72rem] font-medium text-honey/60 uppercase tracking-[0.12em] mb-4">
              Get In Touch
            </div>
            <a
              href={BUSINESS.phoneHref}
              className="block font-sans text-[0.95rem] font-semibold text-honey transition-colors duration-200 hover:text-honey-light mb-2"
            >
              {"\u{1F4DE}"} {BUSINESS.phone}
            </a>
            <p className="font-sans text-[0.82rem] text-white-warm/40">
              {"\u{1F4CD}"} {BUSINESS.location}
            </p>
            <p className="font-sans text-[0.78rem] text-white-warm/30 mt-1">
              Text us to arrange pickup
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white-warm/[0.08] flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="font-sans text-[0.75rem] text-white-warm/30">
            &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </div>
          <div className="font-sans text-[0.75rem] text-white-warm/30">
            Pure Australian Honey &middot; {BUSINESS.location}
          </div>
        </div>
      </div>
    </footer>
  );
}
