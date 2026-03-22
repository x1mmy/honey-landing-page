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
      className="bg-brown px-6 py-20 md:px-20 md:py-[100px] relative overflow-hidden honey-drip"
    >
      {/* Ambient glow */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(245,192,64,0.1)_0%,transparent_65%)] pointer-events-none" />

      {/* Honeycomb pattern */}
      <div className="absolute inset-0 honeycomb-bg opacity-15 pointer-events-none" />

      {/* Header */}
      <motion.div {...reveal} className="text-center mb-16 relative z-[1]">
        <SectionLabel centered>The Honey Shop</SectionLabel>
        <h2 className="font-display text-[clamp(2rem,3vw,3rem)] font-bold leading-[1.2] text-white-warm mb-4">
          Grab yours before it&apos;s gone.
        </h2>
        <p className="font-sans text-[0.85rem] text-white-warm/[0.65] max-w-[480px] mx-auto">
          Small-batch, limited supply. Each tub is packed fresh and sold until the batch runs out.
        </p>
      </motion.div>

      {/* Product Cards */}
      <motion.div
        {...reveal}
        className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-[380px] md:max-w-[800px] mx-auto mb-16 relative z-[1]"
      >
        {PRODUCTS.map((product) => (
          <div
            key={product.id}
            className={`relative rounded-3xl p-10 text-center transition-all duration-300 cursor-pointer overflow-hidden group ${
              product.featured
                ? "bg-gradient-honey border border-honey/30 hover:shadow-honey-lg"
                : "bg-white-warm/[0.06] border border-honey/20 hover:-translate-y-1.5 hover:bg-white-warm/10 hover:border-honey/50 hover:shadow-honey"
            }`}
          >
            {product.badge && (
              <span className="absolute top-4 right-4 bg-honey text-brown font-sans text-[0.72rem] font-bold tracking-[0.05em] uppercase px-3 py-1 rounded-[20px] golden-shimmer">
                {product.badge}
              </span>
            )}
            <span className="text-[3.5rem] block mb-5 transition-transform duration-300 group-hover:scale-110">
              {product.icon}
            </span>
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

      {/* How to Order */}
      <motion.div {...reveal} className="text-center mb-10 relative z-[1]">
        <h3 className="font-display text-xl font-semibold text-white-warm mb-2">
          How to order
        </h3>
        <p className="font-sans text-[0.8rem] text-white-warm/50">
          Four simple steps. No app needed.
        </p>
      </motion.div>

      {/* Order Steps */}
      <motion.div
        {...reveal}
        className="flex flex-col md:flex-row justify-center max-w-[900px] mx-auto relative z-[1]"
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
            <div className="w-12 h-12 rounded-full border-[1.5px] border-honey/35 flex items-center justify-center mx-auto mb-4 font-display text-[1.1rem] text-honey font-semibold transition-all duration-300 hover:bg-honey/10 hover:border-honey/60">
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
