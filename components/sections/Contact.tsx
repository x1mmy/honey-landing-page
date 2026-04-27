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
      className="relative px-6 py-16 md:px-20 md:py-24 text-center overflow-hidden"
    >
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-dark via-cream-dark to-cream pointer-events-none" />

      {/* Honeycomb pattern */}
      <div className="absolute inset-0 honeycomb-bg opacity-25 pointer-events-none" />

      {/* Ambient golden glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(245,192,64,0.12)_0%,transparent_60%)] pointer-events-none" />

      <motion.div {...reveal} className="max-w-[560px] mx-auto relative z-[1]">
        <SectionLabel centered>{CONTACT_COPY.label}</SectionLabel>
        <h2 className="font-display text-[clamp(2rem,3vw,3rem)] font-bold leading-[1.2] text-brown mb-4">
          {CONTACT_COPY.title}
        </h2>
        <p className="text-base leading-[1.8] text-text-soft mb-9">
          {CONTACT_COPY.body}
        </p>

        {/* Phone CTA with golden glow */}
        <div className="relative inline-block">
          <div className="absolute -inset-4 bg-[radial-gradient(circle,rgba(245,192,64,0.22)_0%,transparent_72%)] rounded-full pointer-events-none" />
          <a
            href={BUSINESS.phoneHref}
            className="relative inline-block font-display text-[clamp(2.25rem,5.8vw,3.4rem)] font-bold tracking-[0.03em] text-brown bg-white-warm/65 px-5 py-2 rounded-2xl border border-amber/20 shadow-[0_8px_30px_rgba(58,34,16,0.08)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_35px_rgba(58,34,16,0.14)]"
            aria-label={`Call or text ${BUSINESS.phone} to order honey`}
          >
            {BUSINESS.phone}
          </a>
        </div>

        <p className="mt-2 font-sans text-[0.75rem] text-amber font-medium uppercase tracking-wider">
          Send us an SMS
        </p>

        <p className="mt-4 font-sans text-[0.83rem] text-text-soft">
          {CONTACT_COPY.note}
        </p>

        <div className="inline-flex items-center gap-2 mt-7 bg-white-warm rounded-full px-6 py-3 font-sans text-[0.85rem] text-brown-mid shadow-warm border border-amber/[0.08]">
          {"\u{1F4CD}"} Pickup available in{" "}
          <strong>{BUSINESS.location}</strong>
        </div>

        {/* Urgency nudge */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 font-sans text-[0.78rem] text-amber font-medium italic"
        >
          Limited batches direct from the farm &mdash; once they&apos;re gone, they&apos;re gone
        </motion.p>
      </motion.div>
    </section>
  );
}
