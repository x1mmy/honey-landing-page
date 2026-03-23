"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import Pill from "@/components/ui/Pill";
import { ABOUT_COPY, ABOUT_PILLS, HONEY_INFO, IMAGES } from "@/lib/content";

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
      className="px-6 py-16 md:px-20 md:py-[100px] max-w-[1200px] mx-auto relative"
    >
      {/* Two-column: images + text */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center mb-20">
        {/* Images */}
        <motion.div {...reveal} className="relative h-[300px] md:h-[480px]">
          {/* Honeycomb pattern behind images */}
          <div className="absolute -inset-8 honeycomb-bg opacity-30 rounded-3xl pointer-events-none" />

          {/* Main image — farm landscape */}
          <div className="w-[72%] h-full rounded-[20px] overflow-hidden shadow-warm-xl relative golden-glow">
            <Image
              src={IMAGES.hills}
              alt="Rolling hills and eucalyptus bush near Tamworth NSW where Sandy Hills Honey is harvested"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 70vw, 35vw"
            />
          </div>

          {/* Overlapping secondary image — honeycomb */}
          <div className="absolute right-0 bottom-10 w-[52%] h-[55%] rounded-2xl overflow-hidden shadow-warm-lg border-[5px] border-cream">
            <Image
              src={IMAGES.honeycomb}
              alt="Beekeeper holding a frame of fresh honeycomb with bees on a sunny day at the Sandy Hills farm"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
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
      </div>

      {/* Promise strip — what Sandy Hills Honey is NOT */}
      <motion.div
        {...reveal}
        className="bg-white-warm rounded-3xl p-8 md:p-12 shadow-warm border border-amber/10"
      >
        <div className="text-center mb-8">
          <h3 className="font-display text-xl md:text-2xl font-bold text-brown mb-2">
            Our Promise
          </h3>
          <p className="font-sans text-[0.85rem] text-text-soft">
            {HONEY_INFO.name} &mdash; {HONEY_INFO.type.toLowerCase()}, direct from a {HONEY_INFO.farm}.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mb-8">
          {HONEY_INFO.promises.map((promise) => (
            <div
              key={promise.text}
              className="text-center py-4 px-3 rounded-2xl bg-cream border border-amber/[0.08] transition-all duration-200 hover:border-amber/20 hover:shadow-warm"
            >
              <span className="text-2xl block mb-2">{promise.icon}</span>
              <span className="font-sans text-[0.82rem] font-medium text-brown">
                {promise.text}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center font-body text-[0.95rem] text-text-soft italic leading-relaxed max-w-[600px] mx-auto">
          &ldquo;{HONEY_INFO.legacy}&rdquo;
        </p>
      </motion.div>

      {/* Farm gallery strip */}
      <motion.div
        {...reveal}
        className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4"
      >
        <div className="relative h-[180px] md:h-[240px] rounded-2xl overflow-hidden shadow-warm">
          <Image
            src={IMAGES.farm}
            alt="Lush green paddocks on the Sandy Hills farm property near Tamworth NSW"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </div>
        <div className="relative h-[180px] md:h-[240px] rounded-2xl overflow-hidden shadow-warm">
          <Image
            src={IMAGES.tubs}
            alt="Freshly packed tubs of Sandy Hills raw eucalyptus honey ready for sale"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </div>
        <div className="relative h-[180px] md:h-[240px] rounded-2xl overflow-hidden shadow-warm col-span-2 md:col-span-1">
          <Image
            src={IMAGES.label}
            alt="Sandy Hills Honey product label showing 100% Australian natural raw product certification"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </motion.div>
    </section>
  );
}
