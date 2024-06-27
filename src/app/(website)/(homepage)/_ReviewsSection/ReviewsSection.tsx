import { Carousel } from "@homepage/_ReviewsSection/Carousel";
import reviews from "@lib/data/reviews.json";
import { Title } from "@utilities/Title";

export const ReviewsSection = () => {
  return (
    <section className="overflow-x-hidden relative space-y-14 laptop:space-y-28">
      <div className="space-y-5">
        <Title textAlign="text-center" size="text-5xl">
          Satysfakcja Naszych Klientów
        </Title>
        <p className="text-center mb-28">
          Odkryj, co nasi pacjenci mówią o naszym podejściu i dlaczego warto nam
          zaufać. Dołącz do grona zadowolonych użytkowników i ciesz się
          kompleksową opieką zdrowotną, jakiej zasługujesz.
        </p>
      </div>
      <Carousel reviews={reviews} />
    </section>
  );
};
