"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { PRODUCTS, ORDER_STEPS } from "@/lib/content";

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

export default function Shop() {
  return (
    <section
      id="shop"
      className="bg-brown px-6 py-20 md:px-20 md:py-[100px] relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(245,192,64,0.07)_0%,transparent_65%)] pointer-events-none" />

      {/* Header */}
      <motion.div {...reveal} className="text-center mb-16">
        <SectionLabel centered>The Shop</SectionLabel>
        <h2 className="font-display text-[clamp(2rem,3vw,3rem)] font-bold leading-[1.2] text-white-warm mb-4">
          Pick your tub.
        </h2>
        <p className="font-sans text-[0.85rem] text-white-warm/[0.65] max-w-[480px] mx-auto">
          Simple pricing. Stock is limited &mdash; grab yours before
          it&apos;s gone.
        </p>
      </motion.div>

      {/* Product Cards */}
      <motion.div
        {...reveal}
        className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-[380px] md:max-w-[800px] mx-auto mb-16"
      >
        {PRODUCTS.map((product) => (
          <div
            key={product.id}
            className={`relative rounded-3xl p-10 text-center transition-all duration-300 cursor-pointer overflow-hidden ${
              product.featured
                ? "bg-amber border border-amber hover:bg-[#D4820A] hover:border-[#D4820A]"
                : "bg-white-warm/[0.06] border border-honey/20 hover:-translate-y-1.5 hover:bg-white-warm/10 hover:border-honey/50"
            }`}
          >
            {product.badge && (
              <span className="absolute top-4 right-4 bg-honey text-brown font-sans text-[0.72rem] font-bold tracking-[0.05em] uppercase px-3 py-1 rounded-[20px]">
                {product.badge}
              </span>
            )}
            <span className="text-[3.5rem] block mb-5">{product.icon}</span>
            <div
              className={`font-display text-2xl font-bold mb-2 ${
                product.featured ? "text-brown" : "text-white-warm"
              }`}
            >
              {product.label}
            </div>
            <div
              className={`font-sans text-[0.85rem] mb-6 leading-relaxed ${
                product.featured
                  ? "text-brown/70"
                  : "text-white-warm/60"
              }`}
            >
              {product.description}
            </div>
            <div
              className={`font-display text-[2.8rem] font-bold leading-none ${
                product.featured ? "text-brown" : "text-honey"
              }`}
            >
              <sup className="text-xl align-super">$</sup>
              {product.price}
            </div>
            <div
              className={`font-sans text-[0.78rem] mt-1.5 ${
                product.featured
                  ? "text-brown/55"
                  : "text-white-warm/50"
              }`}
            >
              {product.priceNote}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Order Steps */}
      <motion.div
        {...reveal}
        className="flex flex-col md:flex-row justify-center max-w-[900px] mx-auto"
      >
        {ORDER_STEPS.map((step, i) => (
          <div
            key={step.step}
            className="flex-1 text-center py-8 px-6 relative"
          >
            {i < ORDER_STEPS.length - 1 && (
              <span className="hidden md:block absolute right-[-10px] top-1/2 -translate-y-1/2 text-honey/40 text-[1.4rem]">
                &rarr;
              </span>
            )}
            <div className="w-12 h-12 rounded-full border-[1.5px] border-honey/35 flex items-center justify-center mx-auto mb-4 font-display text-[1.1rem] text-honey font-semibold">
              {step.step}
            </div>
            <div className="font-display text-base text-white-warm mb-2">
              {step.title}
            </div>
            <div className="font-sans text-[0.8rem] text-white-warm/50 leading-relaxed">
              {step.desc}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
