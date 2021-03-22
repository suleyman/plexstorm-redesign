import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, SwiperOptions, Pagination, Autoplay } from "swiper";
import IntroItem from "./IntroItem";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

export default function Intro() {
  const images = [
    "/intro-images/3.jpeg",
    "/intro-images/3.jpeg",
    "/intro-images/3.jpeg",
    "/intro-images/3.jpeg",
    "/intro-images/3.jpeg",
    "/intro-images/3.jpeg",
  ];

  const sliderSettings: SwiperOptions = {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: 1,
    initialSlide: 2,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    grabCursor: true,
    slideToClickedSlide: true,
    coverflowEffect: {
      rotate: 0, // Slide rotate in degrees
      stretch: 50, // Stretch space between slides (in px)
      // depth: 100, // Depth offset in px (slides translate in Z axis)
      modifier: 1.5, // Effect multipler
      slideShadows: false, // Enables slides shadows
    },
    pagination: {
      el: "#swiper-pagination",
      bulletClass: "w-1 h-1 inline-block rounded-full bg-gray-400 mr-1",
      bulletActiveClass: "bg-red",
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <section className="py-32 px-3 lg:py-40 lg:px-0 flex flex-col justify-center items-center">
      <div className="text-center">
        <h4 className="text-red text-3xl font-bold">Featured</h4>
        <h5 className="text-white text-5xl mb-10">
          Streams and Broadcasters <br />
          We Love
        </h5>
      </div>
      <div className="max-w-full">
        <Swiper {...sliderSettings} className="h-full">
          {images.map((item, i) => (
            <SwiperSlide>{({ isActive }) => <IntroItem key={i} isActive={isActive} image={item} />}</SwiperSlide>
          ))}
        </Swiper>
        <div id="swiper-pagination" className="text-center mt-4"></div>
      </div>
    </section>
  );
}
