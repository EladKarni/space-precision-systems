import ConfigSection from "@/views/CapabilitiesSection/CapabilitiesSection";
import HeroSection from "@/views/HeroSection/HeroSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-16 lg:mx-auto mx-8 lg:max-w-[1366px] my-20">
      <HeroSection />
      <ConfigSection />
    </main>
  );
}
