import { CTASection } from "../ui/sections/CTASection/CTASection";
import { CounterSection } from "../ui/sections/CounterSection/CounterSection";
import { FAQSection } from "../ui/sections/FAQSection/FAQSection";
import { MainSection } from "../ui/sections/MainSection/MainSection";
import { MapSection } from "../ui/sections/MapSection/MapSection";
import { OfferSection } from "../ui/sections/OfferSection/OfferSection";
import { ReviewsSection } from "../ui/sections/ReviewsSection/ReviewsSection";

export default function Home() {
  return (
    <>
      <MainSection />
      <CounterSection />
      <OfferSection />
      <CTASection />
      <FAQSection />
      <ReviewsSection />
      <MapSection />
    </>
  );
}
