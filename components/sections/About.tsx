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
      className="px-6 py-16 md:px-20 md:py-[100px] max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center"
    >
      {/* Images */}
      <motion.div {...reveal} className="relative h-[300px] md:h-[480px]">
        <div className="w-[72%] h-full rounded-[20px] overflow-hidden shadow-[0_24px_60px_rgba(58,34,16,0.2)]">
          <div className="w-full h-full bg-gradient-to-br from-honey to-amber flex items-center justify-center text-[4rem]">
            {"\u{1F33E}"}
          </div>
        </div>
        <div className="absolute right-0 bottom-10 w-[52%] h-[55%] rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(58,34,16,0.25)] border-[5px] border-cream">
          <div className="w-full h-full bg-gradient-to-br from-brown-mid to-amber flex items-center justify-center text-[3rem]">
            {"\u{1F41D}"}
          </div>
        </div>
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
