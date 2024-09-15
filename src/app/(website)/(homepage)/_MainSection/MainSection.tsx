import { Button } from "@utilities/Button";
import { Title } from "@utilities/Title";
import Image from "next/image";
import Link from "next/link";

export const MainSection = () => {
  return (
    <section className="w-full px-5 laptop:px-20 laptop:py-24 desktop:px-40 py-20 flex flex-col-reverse laptop:flex-row gap-y-10">
      <div className="w-full laptop:w-1/2 flex flex-col justify-center items-center laptop:items-start gap-y-14">
        <Title size="text-6xl">Twoje zdrowie, nasza troska</Title>
        <p className="text-lg text-center laptop:text-justify">
        Znajdź najnowsze i najbardziej innowacyjne rozwiązania w opiece zdrowotnej. Złóż prośbę o skierowanie na badania podstawowe, umów wizytę online, zamów e-receptę – wszystko w jednym miejscu. Dołącz do nas już dziś i zacznij z nami dbać o swoje zdrowie!
        </p>
        <div className="flex flex-col tablet:flex-row items-center gap-5">
          <Link href="/sign-up"
          className="bg-dark-blue text-white px-10 py-5 rounded-xl font-medium inline-flex items-center justify-center shadow-md"
          >Zarejestruj się teraz</Link>
          <p>
            Masz już konto?{" "}
            <Link className="text-light-blue font-medium" href={"/"}>
              Zaloguj się!
            </Link>
          </p>
        </div>
      </div>
      <div className="w-full laptop:w-1/2 flex justify-center items-center">
        <Image
          width={800}
          height={800}
          src={"/homepage-assets/doctor-main.JPG"}
          alt="main image"
        />
      </div>
    </section>
  );
};
