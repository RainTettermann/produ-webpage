import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { WhyProdu } from "@/components/WhyProdu";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Process />
        <WhyProdu />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
