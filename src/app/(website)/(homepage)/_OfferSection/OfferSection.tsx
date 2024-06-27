import services from "@lib/data/services.json";
import { Title } from "@utilities/Title";
import Image from "next/image";

export const OfferSection = () => {
  return (
    <section className="px-5 laptop:px-20 desktop:px-40 py-20 laptop:py-24 space-y-14 laptop:space-y-28">
      <Title textAlign="text-center" size="text-5xl">
        W Czym Możemy Pomóc
      </Title>

      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-5 laptop:gap-10 desktop:gap-32">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white flex flex-col gap-y-6 px-14 py-10 rounded-md shadow-md hover:shadow-xl hover:-translate-y-3 duration-200"
          >
            <Image
              className="self-center"
              src={service.image}
              alt="service image"
              width={152}
              height={152}
            />
            <div className="space-y-3">
              <Title textAlign="text-left" size="text-2xl">
                {service.title}
              </Title>
              <svg
                width="90"
                height="3"
                viewBox="0 0 90 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  y1="1.5"
                  x2="89.0505"
                  y2="1.5"
                  stroke="#DED4E3"
                  strokeWidth="3"
                />
              </svg>
              <p className="text-md">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
