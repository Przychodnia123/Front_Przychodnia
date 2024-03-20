import { MapComponent } from "@/src/app/(routes)/(homepage)/_MapSection/Map";
import { Title } from "@/src/app/utilities/Title";

export const MapSection = () => {
  return (
    <section className="flex flex-col items-center space-y-14 laptop:space-y-28 px-5 py-20 laptop:py-24 laptop:px-20 desktop:px-40">
      <div className="space-y-5">
        <Title textAlign="text-center" size="text-5xl">
          Znajdź Nas w Twoim Mieście
        </Title>
        <p className="text-center">
          Znajdź naszą przychodnię w różnych miastach! Kliknij na interaktywną
          mapę, aby dowiedzieć się, gdzie możesz skorzystać z naszych usług.
          Dbamy o Twoje zdrowie, bez względu na lokalizację!
        </p>
      </div>
      <div className="w-full desktop:w-[1000px] h-[500px] bg-white flex flex-col laptop:flex-row shadow-xl rounded-md">
        <MapComponent />
      </div>
    </section>
  );
};
