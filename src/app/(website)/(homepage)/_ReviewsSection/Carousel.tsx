"use client";

import { Review } from "@homepage/_ReviewsSection/types";
import ArrowBackIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardRounded";
import { Card } from "@utilities/Card";
import Image from "next/image";
import { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
  reviews: Review[];
};

export const Carousel = ({ reviews }: Props) => {
  const swiperRef = useRef<SwiperType>();
  return (
    <>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },

          1024: {
            slidesPerView: 3,
          },
        }}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Pagination, Navigation, FreeMode]}
        spaceBetween={80}
      >
        {reviews.map((review: Review) => (
          <SwiperSlide key={review.id}>
            <Card>
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={70}
                    height={70}
                  />
                  <div>
                    <p className="font-medium text-lg">{review.name}</p>
                    <p className="text-medium-blue">{review.location}</p>
                  </div>

                  <p className="text-medium-blue">{review.rate}</p>
                </div>
                <div>
                  <p className="text-base">{review.description}</p>
                </div>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hidden laptop:flex justify-end px-24">
        <button
          className="text-dark-blue"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ArrowBackIcon sx={{ marginRight: "20px" }} />
        </button>
        <button
          className="text-dark-blue"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ArrowForwardIcon />
        </button>
      </div>
    </>
  );
};
