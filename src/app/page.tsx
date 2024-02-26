import ConfigSection from "@/Views/ConfigSection/ConfigSection";
import HeroSection from "@/Views/HeroSection/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8">
      <HeroSection />
      <ConfigSection />
    </main>
  );
}
