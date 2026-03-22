import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import About from "@/components/sections/About";
import Shop from "@/components/sections/Shop";
import Payment from "@/components/sections/Payment";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustStrip />
      <About />
      <Shop />
      <Payment />
      <Contact />
      <Footer />
    </main>
  );
}
