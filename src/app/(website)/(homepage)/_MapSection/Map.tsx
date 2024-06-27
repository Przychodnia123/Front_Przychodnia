"use client";

import { Wrapper } from "@googlemaps/react-wrapper";
import React, { useEffect, useRef } from "react";

export const GoogleMapsWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return <div>Cannot display the map: google maps api key missing</div>;
  }

  return <Wrapper apiKey={apiKey}>{children}</Wrapper>;
};

const DEFAULT_CENTER = { lat: 52.237049, lng: 21.017532 };
const DEFAULT_ZOOM = 7;

export const GoogleMaps = ({
  locations,
  className,
}: {
  locations: ReadonlyArray<google.maps.LatLngLiteral>;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      const map = new window.google.maps.Map(ref.current, {
        center: DEFAULT_CENTER,
        zoom: DEFAULT_ZOOM,
      });
    }
  }, [ref]);

  return <div ref={ref} style={{ width: "100%", height: "100%" }} />;
};

export const MapComponent = () => {
  const cities = [
    {
      name: "Warszawa",
      locations: [
        {
          street: "ul. Fikcyjna 123",
          openingHours: "Poniedziałek - Piątek: 08:00 - 17:00",
          location: [{ lat: 52.237049, lng: 21.017532 }],
        },
      ],
    },
  ];

  return (
    <>
      <div className=" w-full laptop:w-1/4  flex flex-col items-center px-8 py-8">
        <div className="relative h-10 w-3/4 min-w-[200px] space-y-5">
          <select className="peer flex items-center h-full w-full rounded-[7px] bg-light-gray px-3 py-2.5 text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
            {cities.map((city) => (
              <option key={city.name} defaultChecked value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
          {cities.map((city) => (
            <div
              className="border-[1px] hidden laptop:block rounded-md p-5 border-medium-gray"
              key={city.name}
            >
              <p className="text-dark-blue text-lg font-medium">
                {city.locations[0].street}
              </p>
              <p className="font-bold text-lg">Godziny Otwarcia:</p>
              <p>{city.locations[0].openingHours}</p>
            </div>
          ))}
        </div>
      </div>
      <GoogleMapsWrapper>
        <GoogleMaps locations={cities[0].locations[0].location} />
      </GoogleMapsWrapper>
    </>
  );
};
