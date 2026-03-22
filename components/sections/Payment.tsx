"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { BUSINESS, PAYMENT_COPY } from "@/lib/content";

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

export default function Payment() {
  return (
    <section
      id="payment"
      className="px-6 py-16 md:px-20 md:py-[100px] max-w-[1100px] mx-auto"
    >
      <motion.div {...reveal} className="text-center mb-14">
        <SectionLabel centered>{PAYMENT_COPY.label}</SectionLabel>
        <h2 className="font-display text-[clamp(2rem,3vw,3rem)] font-bold leading-[1.2] text-brown">
          {PAYMENT_COPY.title}
        </h2>
      </motion.div>

      <motion.div
        {...reveal}
        className="grid grid-cols-1 md:grid-cols-2 gap-7"
      >
        {/* Cash Card */}
        <div className="bg-white-warm rounded-3xl p-10 shadow-[0_4px_32px_rgba(58,34,16,0.08)] border border-amber/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_48px_rgba(58,34,16,0.14)]">
          <span className="text-[2.2rem] block mb-4">{"\u{1F4B5}"}</span>
          <div className="font-display text-[1.4rem] font-semibold text-brown mb-2">
            {PAYMENT_COPY.cash.title}
          </div>
          <span className="inline-block bg-green-600/[0.12] text-green-800 font-sans text-[0.73rem] font-semibold tracking-[0.06em] uppercase px-2.5 py-[3px] rounded-[20px] mb-4">
            Preferred
          </span>
          <p className="text-[0.92rem] leading-[1.75] text-text-soft">
            Bring the exact amount when you come to collect. Exact change
            appreciated &mdash; <strong>$30</strong> for one tub,{" "}
            <strong>$50</strong> for two. Just text us first to arrange a
            time.
          </p>
        </div>

        {/* Bank Transfer Card */}
        <div className="bg-white-warm rounded-3xl p-10 shadow-[0_4px_32px_rgba(58,34,16,0.08)] border border-amber/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_48px_rgba(58,34,16,0.14)]">
          <span className="text-[2.2rem] block mb-4">{"\u{1F3E6}"}</span>
          <div className="font-display text-[1.4rem] font-semibold text-brown mb-2">
            {PAYMENT_COPY.bank.title}
          </div>
          <p className="text-[0.92rem] leading-[1.75] text-text-soft">
            Transfer before pickup and send us a screenshot of your proof of
            payment via text to <strong>{BUSINESS.phone}</strong>.
            We&apos;ll confirm once received.
          </p>

          <div className="space-y-2.5 mt-4">
            {[
              { label: "BSB", value: BUSINESS.bsb },
              { label: "Account Number", value: BUSINESS.accountNumber },
              {
                label: "Reference",
                value: BUSINESS.paymentReference,
              },
            ].map((detail) => (
              <div
                key={detail.label}
                className="bg-cream rounded-xl px-5 py-4 font-sans"
              >
                <span className="text-[0.72rem] font-medium text-amber tracking-[0.08em] uppercase block mb-0.5">
                  {detail.label}
                </span>
                <div className="font-semibold text-base text-brown tracking-wide">
                  {detail.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
