import { CTASection } from "@/src/app/(routes)/(homepage)/_CTASection/CTASection";
import { CounterSection } from "@/src/app/(routes)/(homepage)/_CounterSection/CounterSection";
import { FAQSection } from "@/src/app/(routes)/(homepage)/_FAQSection/FAQSection";
import { MainSection } from "@/src/app/(routes)/(homepage)/_MainSection/MainSection";
import { MapSection } from "@/src/app/(routes)/(homepage)/_MapSection/MapSection";
import { OfferSection } from "@/src/app/(routes)/(homepage)/_OfferSection/OfferSection";
import { ReviewsSection } from "@/src/app/(routes)/(homepage)/_ReviewsSection/ReviewsSection";

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
