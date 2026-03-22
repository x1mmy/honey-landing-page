"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Pill from "@/components/ui/Pill";
import { ABOUT_COPY, ABOUT_PILLS } from "@/lib/content";

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-16 md:px-20 md:py-[100px] max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center relative"
    >
      {/* Images */}
      <motion.div {...reveal} className="relative h-[300px] md:h-[480px]">
        {/* Honeycomb pattern behind images */}
        <div className="absolute -inset-8 honeycomb-bg opacity-30 rounded-3xl pointer-events-none" />

        {/* Main image */}
        <div className="w-[72%] h-full rounded-[20px] overflow-hidden shadow-warm-xl relative golden-glow">
          <div className="w-full h-full bg-gradient-to-br from-honey-light via-honey to-amber flex items-center justify-center text-[4rem] relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
            {"\u{1F33E}"}
          </div>
        </div>

        {/* Overlapping secondary image */}
        <div className="absolute right-0 bottom-10 w-[52%] h-[55%] rounded-2xl overflow-hidden shadow-warm-lg border-[5px] border-cream">
          <div className="w-full h-full bg-gradient-to-br from-amber via-brown-light to-amber flex items-center justify-center text-[3rem] relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(255,255,255,0.15)_0%,transparent_50%)]" />
            {"\u{1F41D}"}
          </div>
        </div>

        {/* Floating decorative bee */}
        <motion.span
          className="absolute -top-2 right-[20%] text-2xl opacity-50"
          animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          {"\u{1F41D}"}
        </motion.span>
      </motion.div>

      {/* Text */}
      <motion.div {...reveal}>
        <SectionLabel>{ABOUT_COPY.label}</SectionLabel>
        <h2 className="font-display text-[clamp(2rem,3vw,3rem)] font-bold leading-[1.2] text-brown mb-6">
          {ABOUT_COPY.title}
        </h2>
        {ABOUT_COPY.paragraphs.map((p, i) => (
          <p
            key={i}
            className="text-base leading-[1.8] text-text-soft mb-4"
          >
            {p}
          </p>
        ))}
        <div className="flex flex-wrap gap-2.5 mt-7">
          {ABOUT_PILLS.map((pill) => (
            <Pill key={pill}>{pill}</Pill>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
