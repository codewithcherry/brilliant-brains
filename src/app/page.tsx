import HeroSection from "@/components/Home/HeroSection";
import ValuesSection from "@/components/Home/ValuesSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-3xl min-h-screen">
      <HeroSection />
      <ValuesSection />
    </div>
  );
}
