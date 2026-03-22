"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { HERO_COPY, PRODUCTS } from "@/lib/content";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center px-6 pt-24 pb-16 md:px-20 md:pt-[120px] md:pb-20 relative overflow-hidden gap-10 lg:gap-16">
      {/* Ambient glow */}
      <div className="absolute -right-[120px] -top-[100px] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(245,192,64,0.18)_0%,transparent_70%)] rounded-full pointer-events-none" />

      {/* Visual — shown first on mobile */}
      <div className="order-first lg:order-last flex justify-center items-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <div className="w-[280px] h-[340px] md:w-[420px] md:h-[520px] rounded-[220px_220px_180px_180px] overflow-hidden relative shadow-[0_32px_80px_rgba(58,34,16,0.25)] border-4 border-honey/30">
            <div className="w-full h-full bg-gradient-to-br from-amber-light via-amber to-brown-mid flex flex-col items-center justify-center text-white-warm/90 font-display text-center p-8">
              <span className="text-[5rem] mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
                {"\u{1F36F}"}
              </span>
              <p className="text-[0.85rem] font-sans opacity-75 italic">
                Add your honey photo here
              </p>
            </div>
          </div>

          {/* Floating tag — bottom left */}
          <motion.div
            className="absolute bottom-5 left-2.5 lg:bottom-[60px] lg:-left-[30px] bg-white-warm rounded-2xl px-5 py-3.5 shadow-[0_8px_32px_rgba(58,34,16,0.15)] font-sans text-[0.8rem] text-brown font-medium flex items-center gap-2.5"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="w-2.5 h-2.5 bg-green-600 rounded-full animate-pulse-dot" />
            Available now in Merrylands
          </motion.div>

          {/* Floating tag — top right */}
          <motion.div
            className="absolute top-5 right-2.5 lg:top-[60px] lg:-right-5 bg-amber rounded-2xl px-5 py-3.5 shadow-[0_8px_32px_rgba(200,118,10,0.3)] font-sans text-[0.8rem] text-white-warm font-medium"
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
        </motion.div>
      </div>

      {/* Text content */}
      <div className="text-center lg:text-left">
        <motion.div
          {...fadeUp(0.1)}
          className="inline-flex items-center gap-2 bg-amber/10 border border-amber/25 rounded-full px-4 py-1.5 font-sans text-[0.78rem] font-medium text-amber uppercase tracking-[0.07em] mb-6"
        >
          <span className="text-[0.65rem]">{"\u2726"}</span>
          {HERO_COPY.badge}
        </motion.div>

        <motion.h1
          {...fadeUp(0.25)}
          className="font-display text-[clamp(3rem,5vw,5.5rem)] font-bold leading-[1.08] text-brown mb-7"
        >
          {HERO_COPY.titleLine1}
          <br />
          <em className="italic text-amber">{HERO_COPY.titleEmphasis}</em>{" "}
          {HERO_COPY.titleLine2}
        </motion.h1>

        <motion.p
          {...fadeUp(0.4)}
          className="text-[1.05rem] leading-[1.75] text-text-soft max-w-[420px] mb-11 mx-auto lg:mx-0"
        >
          {HERO_COPY.subtitle}
        </motion.p>

        <motion.div
          {...fadeUp(0.55)}
          className="flex gap-4 items-center justify-center lg:justify-start"
        >
          <Button variant="primary" href="#shop">
            Shop Now
          </Button>
          <Button variant="secondary" href="#about">
            Our Story
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
