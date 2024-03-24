"use client";

import { Wrapper } from "@googlemaps/react-wrapper";
import React, { useEffect, useRef, useState } from "react";

export const addSingleMarkers = ({
  locations,
  map,
}: {
  locations: ReadonlyArray<google.maps.LatLngLiteral>;
  map: google.maps.Map | null | undefined;
}) =>
  locations.map(
    (position) =>
      new google.maps.Marker({
        position,
        map,
      })
  );

export const GoogleMapsWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Ideally we want the apiKey to be fetch from an environment variable
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
    // Display the map
    if (ref.current) {
      const map = new window.google.maps.Map(ref.current, {
        center: DEFAULT_CENTER,
        zoom: DEFAULT_ZOOM,
      });
      addSingleMarkers({ locations, map });
    }
  }, [ref]);

  return <div ref={ref} style={{ width: "100%", height: "100%" }} />;
};

export const LOCATIONS = [
  { lat: 48.8566, lng: 2.3522 },
  { lat: 47.1533, lng: 2.9123 },
];

export const MapComponent = () => {
  const [locations, setLocations] = useState("");
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

  const handleSelect = (city: string) => {
    setLocations(city);
  };
  console.log(locations);
  return (
    <>
      <div className=" w-full laptop:w-1/4  flex flex-col items-center px-8 py-8">
        <div className="relative h-10 w-3/4 min-w-[200px]">
          <select
            onChange={(e) => handleSelect(e.target.value)}
            className="peer flex items-center h-full w-full rounded-[7px] bg-light-gray px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          >
            {cities.map((city) => (
              <option key={city.name} defaultChecked value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <GoogleMapsWrapper>
        <GoogleMaps locations={cities[0].locations[0].location} />
      </GoogleMapsWrapper>
    </>
  );
};
