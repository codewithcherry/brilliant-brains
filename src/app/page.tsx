import HeroSection from "@/components/Home/HeroSection";
import MarketingStatsComponent from "@/components/Home/MarketingStatsComponent";
import ValuesSection from "@/components/Home/ValuesSection";
import InfiniteScrollReviews from "@/components/Home/InfiniteScrollReviews";
import Image from "next/image";
import WhyChooseUs from "@/components/Home/WhyChooseUs";

export default function Home() {
  return (
    <div className="text-3xl min-h-screen">
      <HeroSection />
      <ValuesSection />
      <MarketingStatsComponent />
      <WhyChooseUs />
      <InfiniteScrollReviews />
    </div>
  );
}
