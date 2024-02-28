import ConfigSection from "@/views/CapabilitiesSection/CapabilitiesSection";
import HeroSection from "@/views/HeroSection/HeroSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-8 container px-8 mx-auto">
      <HeroSection />
      <ConfigSection />
    </main>
  );
}
