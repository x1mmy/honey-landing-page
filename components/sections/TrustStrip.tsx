"use client";

import { motion } from "framer-motion";
import { TRUST_ITEMS } from "@/lib/content";

export default function TrustStrip() {
  return (
    <div className="bg-brown px-6 py-8 md:px-20 relative overflow-hidden honey-drip">
      {/* Subtle honeycomb overlay */}
      <div className="absolute inset-0 honeycomb-bg opacity-20 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap justify-center gap-6 md:gap-[60px] relative z-[1]"
      >
        {TRUST_ITEMS.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex items-center gap-3 text-white-warm/90 font-sans text-[0.85rem] tracking-wide group"
          >
            <span className="text-xl transition-transform duration-300 group-hover:scale-125">
              {item.icon}
            </span>
            <span className="font-medium">{item.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
