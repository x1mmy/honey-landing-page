"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { BUSINESS, CONTACT_COPY } from "@/lib/content";

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-cream-dark px-6 py-16 md:px-20 md:py-20 text-center border-t border-amber/[0.12]"
    >
      <motion.div {...reveal} className="max-w-[560px] mx-auto">
        <SectionLabel centered>{CONTACT_COPY.label}</SectionLabel>
        <h2 className="font-display text-[clamp(2rem,3vw,3rem)] font-bold leading-[1.2] text-brown mb-4">
          {CONTACT_COPY.title}
        </h2>
        <p className="text-base leading-[1.8] text-text-soft mb-9">
          {CONTACT_COPY.body}
        </p>
        <a
          href={BUSINESS.phoneHref}
          className="inline-block font-display text-[2.4rem] font-bold text-amber transition-colors duration-200 hover:text-brown"
          aria-label={`Call or text ${BUSINESS.phone} to order`}
        >
          {BUSINESS.phone}
        </a>
        <p className="mt-4 font-sans text-[0.83rem] text-text-soft">
          {CONTACT_COPY.note}
        </p>
        <div className="inline-flex items-center gap-2 mt-7 bg-white-warm rounded-full px-6 py-3 font-sans text-[0.85rem] text-brown-mid shadow-[0_4px_16px_rgba(58,34,16,0.08)]">
          {"\u{1F4CD}"} Pickup available in{" "}
          <strong>{BUSINESS.location}</strong>
        </div>
      </motion.div>
    </section>
  );
}
