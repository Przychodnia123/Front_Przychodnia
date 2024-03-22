"use client";

import ArrowBackIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardRounded";
import Image from "next/image";
import { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { Card } from "../Card/Card";

export type CarouselProps = {
  reviews: ReviewProps[];
};

export type ReviewProps = {
  id: string;
  name: string;
  description: string;
  rate: string;
  location: string;
  image: string;
};

export const Carousel = ({ reviews }: CarouselProps) => {
  const swiperRef = useRef<SwiperType>();
  return (
    <>
      <Swiper
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Pagination, Navigation, FreeMode]}
        spaceBetween={50}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {reviews.map((review: any) => (
          <SwiperSlide key={review.id}>
            <Card paddingX={30} paddingY={30} key={review.id}>
              <div className="flex justify-between">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={10}
                  height={10}
                />
                <div>
                  <p>{review.name}</p>
                  <p>{review.location}</p>
                </div>

                <p>{review.rate}</p>
              </div>
              <div>
                <p>{review.description}</p>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-end px-24">
        <button onClick={() => swiperRef.current?.slidePrev()}>
          <ArrowBackIcon sx={{ color: "#25305E", marginRight: "20px" }} />
        </button>
        <button onClick={() => swiperRef.current?.slideNext()}>
          <ArrowForwardIcon sx={{ color: "#25305E" }} />
        </button>
      </div>
    </>
  );
};
