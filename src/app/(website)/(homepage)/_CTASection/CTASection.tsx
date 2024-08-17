import { Button } from "@utilities/Button";
import Image from "next/image";

export const CTASection = () => {
  return (
    <section className="bg-dark-blue flex laptop:space-x-20 desktop:space-x-40 items-center px-5 laptop:px-20 desktop:px-40 py-20 text-2xl text-white">
      <div className="w-1/3  hidden laptop:flex justify-center items-center">
        <Image
          src="/homepage-assets/doctor.png"
          alt="service image"
          width={400}
          height={400}
        />
      </div>
      <div className="space-y-14 w-full laptop:w-2/3 flex flex-col items-center laptop:items-start">
        <p className="text-3xl text-center laptop:text-left">
        Czuj się bezpiecznie i dbaj o swoje zdrowie! Skontaktuj się z nami już teraz! Wspólnie zadbamy o Twoje zdrowie i dobre samopoczucie!
        </p>
        <Button
          bg="white"
          textColor="dark-blue"
          text="Zarejestruj się na e-wizytę"
        />
      </div>
    </section>
  );
};
