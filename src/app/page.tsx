import ConfigSection from "@/Views/CapabilitiesSection/CapabilitiesSection";
import HeroSection from "@/Views/HeroSection/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 mx-8">
      <HeroSection />
      <ConfigSection />
    </main>
  );
}
