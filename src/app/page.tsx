import ConfigSection from "@/views/CapabilitiesSection/CapabilitiesSection";
import HeroSection from "@/views/HeroSection/HeroSection";
import About from "@/components/About/About";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-24 container mb-20 relative mx-auto px-8">
      <HeroSection />
      <ConfigSection />
      <About />
    </main>
  );
}
