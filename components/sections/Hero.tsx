"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { HERO_COPY, PRODUCTS, IMAGES } from "@/lib/content";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center px-6 pt-24 pb-16 md:px-20 md:pt-[120px] md:pb-20 relative overflow-hidden gap-10 lg:gap-16">
      {/* Multiple ambient glows for depth */}
      <div className="absolute -right-[120px] -top-[100px] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(245,192,64,0.2)_0%,transparent_70%)] rounded-full pointer-events-none" />
      <div className="absolute -left-[200px] bottom-[100px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(200,118,10,0.08)_0%,transparent_70%)] rounded-full pointer-events-none" />

      {/* Subtle honeycomb pattern */}
      <div className="absolute inset-0 honeycomb-bg opacity-40 pointer-events-none" />

      {/* Visual — shown first on mobile */}
      <div className="order-first lg:order-last flex justify-center items-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        >
          {/* Main honey tubs image */}
          <div className="w-[280px] h-[340px] md:w-[420px] md:h-[520px] rounded-[220px_220px_180px_180px] overflow-hidden relative golden-glow border-4 border-honey/30">
            <Image
              src={IMAGES.tubs}
              alt="Stacks of fresh Sandy Hills Honey tubs, pure raw eucalyptus honey from Tamworth NSW"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 280px, 420px"
              priority
            />
            {/* Warm overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brown/20 via-transparent to-honey/10" />
          </div>

          {/* Floating badge — availability */}
          <motion.div
            className="absolute bottom-5 left-2.5 lg:bottom-[60px] lg:-left-[30px] bg-white-warm rounded-2xl px-5 py-3.5 shadow-warm-lg font-sans text-[0.8rem] text-brown font-medium flex items-center gap-2.5"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="w-2.5 h-2.5 bg-green-600 rounded-full animate-pulse-dot" />
            Fresh batch available now
          </motion.div>

          {/* Floating badge — price */}
          <motion.div
            className="absolute top-5 right-2.5 lg:top-[60px] lg:-right-5 bg-gradient-honey rounded-2xl px-5 py-3.5 shadow-honey-lg font-sans text-[0.8rem] text-white-warm font-medium"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              delay: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="block text-[1.4rem] font-display font-bold">
              from ${PRODUCTS[0].price}
            </span>
            per tub
          </motion.div>

          {/* Small floating bee */}
          <motion.div
            className="absolute -top-3 left-10 lg:top-[20px] lg:left-[-20px] text-3xl opacity-40"
            animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
            transition={{
              duration: 5,
              delay: 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {"\u{1F41D}"}
          </motion.div>
        </motion.div>
      </div>

      {/* Text content */}
      <div className="text-center lg:text-left relative z-10">
        <motion.div
          {...fadeUp(0.1)}
          className="inline-flex items-center gap-2 bg-amber/10 border border-amber/25 rounded-full px-4 py-1.5 font-sans text-[0.78rem] font-medium text-amber uppercase tracking-[0.07em] mb-6"
        >
          <span className="text-[0.65rem]">{"\u2726"}</span>
          {HERO_COPY.badge}
        </motion.div>

        <motion.h1
          {...fadeUp(0.25)}
          className="font-display text-[clamp(2.8rem,5vw,5.5rem)] font-bold leading-[1.08] text-brown mb-7"
        >
          {HERO_COPY.titleLine1}
          <br />
          <em className="italic text-gradient-honey">{HERO_COPY.titleEmphasis}</em>{" "}
          {HERO_COPY.titleLine2}
        </motion.h1>

        <motion.p
          {...fadeUp(0.4)}
          className="text-[1.05rem] leading-[1.75] text-text-soft max-w-[500px] mb-11 mx-auto lg:mx-0"
        >
          {HERO_COPY.subtitle}
        </motion.p>

        <motion.div
          {...fadeUp(0.55)}
          className="flex gap-4 items-center justify-center lg:justify-start"
        >
          <Button variant="primary" href="#shop">
            Get Your Tub
          </Button>
          <Button variant="secondary" href="#about">
            The Honey
          </Button>
        </motion.div>

        {/* Farm origin hint */}
        <motion.p
          {...fadeUp(0.7)}
          className="mt-8 font-sans text-[0.8rem] text-text-soft/70 flex items-center gap-2 justify-center lg:justify-start"
        >
          <span className="flex -space-x-1">
            <span className="w-6 h-6 rounded-full bg-honey/60 border-2 border-cream flex items-center justify-center text-[0.6rem]">{"\u{1F1E6}\u{1F1FA}"}</span>
            <span className="w-6 h-6 rounded-full bg-amber/60 border-2 border-cream flex items-center justify-center text-[0.6rem]">{"\u{1F41D}"}</span>
            <span className="w-6 h-6 rounded-full bg-brown-light/60 border-2 border-cream flex items-center justify-center text-[0.6rem]">{"\u{270B}"}</span>
          </span>
          Handmade on a family farm for 60+ years
        </motion.p>
      </div>
    </section>
  );
}
