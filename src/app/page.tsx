import Image from "next/image";
import Link from "next/link";
import services from "./lib/data/services.json";
import { Title } from "./ui/components/Title/Title";

export default function Home() {
  return (
    <>
      <section className="w-full h-screen px-20 grid grid-cols-2">
        <div className="flex flex-col justify-center gap-y-14">
          <Title size="text-6xl">Twoje Zdrowie, Nasza Troska</Title>
          <p className="text-base">
            Znajdź najnowsze i najbardziej innowacyjne rozwiązania w opiece
            zdrowotnej. Złóż prośbę o skierowanie na badania podstawowe, umów
            wizytę online, zamów e-receptę - wszystko na jednym miejscu. Dołącz
            do nas już dziś, aby zacząć dbać o swoje zdrowie!
          </p>
          <div>
            <button>Zarejestruj się Teraz</button>
            <p>
              Masz już konto? <Link href={"/"}>Zaloguj się!</Link>
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            width={600}
            height={600}
            src={"/doctor-main.JPG"}
            alt="main image"
          />
        </div>
      </section>
      <section className="px-24  flex justify-center">
        <div className="w-full flex justify-between rounded-md bg-white px-28 py-12">
          <Title size="text-2xl">Ponad 10,000 Zrealizowanych Wizyt</Title>
          <Title size="text-2xl">98% zadowolonych pacjentów</Title>
          <Title size="text-2xl">24/7 Dostęp do Opieki Medycznej</Title>
        </div>
      </section>
      <section className="px-20 py-24 space-y-28">
        <Title textAlign="text-center" size="text-5xl">
          W Czym Możemy Pomóc
        </Title>

        <div className="grid grid-cols-3 gap-24">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white flex flex-col gap-y-6 px-7 py-10 rounded-md shadow-xl"
            >
              <Image
                className="self-center"
                src={service.image}
                alt="service image"
                width={152}
                height={152}
              />
              <Title textAlign="text-left" size="text-2xl">
                {service.title}
              </Title>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
