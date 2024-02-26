import ConfigSection from "@/Views/ConfigSection/ConfigSection";
import HeroSection from "@/Views/HeroSection/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <ConfigSection />
    </main>
  );
}
