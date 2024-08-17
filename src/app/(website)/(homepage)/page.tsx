import { CTASection } from "@homepage/_CTASection/CTASection";
import { CounterSection } from "@homepage/_CounterSection/CounterSection";
import { FAQSection } from "@homepage/_FAQSection/FAQSection";
import { MainSection } from "@homepage/_MainSection/MainSection";
import { OfferSection } from "@homepage/_OfferSection/OfferSection";
import { ReviewsSection } from "@homepage/_ReviewsSection/ReviewsSection";

export default function Home() {
  return (
    <>
      <MainSection />
      <CounterSection />
      <OfferSection />
      <CTASection />
      <FAQSection />
      <ReviewsSection />
    </>
  );
}
