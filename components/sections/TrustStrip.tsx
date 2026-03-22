import { TRUST_ITEMS } from "@/lib/content";

export default function TrustStrip() {
  return (
    <div className="bg-brown px-6 py-7 md:px-20 flex flex-wrap justify-center gap-6 md:gap-[60px] relative z-[1]">
      {TRUST_ITEMS.map((item) => (
        <div
          key={item.label}
          className="flex items-center gap-3 text-white-warm/85 font-sans text-[0.85rem] tracking-wide"
        >
          <span className="text-xl">{item.icon}</span>
          {item.label}
        </div>
      ))}
    </div>
  );
}
