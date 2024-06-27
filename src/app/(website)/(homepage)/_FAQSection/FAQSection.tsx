import { AccordionMenu } from "@homepage/_FAQSection/AccordionMenu";
import faq from "@lib/data/faq.json";
import { Title } from "@utilities/Title";

export const FAQSection = () => {
  return (
    <section className="space-y-14 laptop:space-y-28 px-5 py-20 laptop:py-24 laptop:px-20 desktop:px-40">
      <Title textAlign="text-center" size="text-5xl">
        Najczęściej zadawane pytania przez pacjentów
      </Title>
      <div>
        <AccordionMenu faq={faq} />
      </div>
    </section>
  );
};
