import { BUSINESS } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-brown px-6 py-6 md:px-20 md:py-8 flex flex-col md:flex-row justify-between items-center gap-3 text-center">
      <div className="font-display text-base font-bold text-white-warm/85">
        Hive <span className="text-honey">&amp;</span> Harvest
      </div>
      <div className="font-sans text-[0.78rem] text-white-warm/40">
        Pure Australian Honey &middot; {BUSINESS.location}
      </div>
      <div className="font-sans text-[0.78rem] text-white-warm/40">
        &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
      </div>
    </footer>
  );
}
