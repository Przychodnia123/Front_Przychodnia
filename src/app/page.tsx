import Image from "next/image";
import Link from "next/link";
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
    </>
  );
}
