import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import image from "../../image/homeImg/1792b51136295dafce3f1c348d2f9d51.jpeg";
import image2 from "../../image/homeImg/ab75f8816406a6abda6e0b651d3d2928.png";
import image3 from "../../image/homeImg/de5d84da3808f78d14951f122dcbf918.jpeg";
import shape1 from "../../../slider/shapes/shape1.png";
import shape2 from "../../../slider/shapes/shape2.png";
import LoadBlurHashImage from "../../../lazy/loadBlurHash";
import Button from "../../Button";
import "swiper/css";
import "../../../slider/swiper/confere.css";
import "../../../slider/swiper/pagination.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ConfereneVideos = () => {
  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  return (
    <section className="flex  bg-[#1F2126] flex-col justify-center items-center relative w-full overflow-hidden">
      <div className="static flex flex-col justify-center items-center w-full max-w-[1039px] px-[15px] py-[25px] at500:px-[72px] my-0 mx-auto overflow-hidden">
        <div className="blog-container w-full gap-[20px] flex flex-col items-center ">
          <h5 className="text-white">Conference Videos Archive</h5>
          <div className=" absolute top-[33%] z-50 flex items-center justify-between w-[80%] gap-2 ">
            <div className="p-2">
              <GoChevronLeft className="swiper-button-prev-blog  text-[#E1E6ED]  w-[20px]" />
            </div>
            <div className="p-2">
              <GoChevronRight className="swiper-button-next-blog  text-[#E1E6ED] top-0  w-[20px]" />
            </div>
          </div>

          <div className=" absolute flex justify-between items-center w-full ">
            <div className="flex relative top-[89px] justify-start items-end h-[480.07px] w-full">
              <img src={shape2} alt="shapes" className="h-auto w-[130px]" />
            </div>
            <div className="flex relative top-[-6px] justify-end items-end h-[480.07px] w-full">
              <img src={shape1} alt="shapes" className="h-auto w-[130px]" />
            </div>
          </div>

          <Swiper
            className="relative flex flex-col sm:!py-[30px]"
            style={{ width: "100%" }}
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={25}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-blog",
              prevEl: ".swiper-button-prev-blog",
            }}
          >
            <SwiperSlide className="!w-full z-[4]">
              <div className="flex justify-center items-center w-full h-auto">
                <div className="flex gap-[15px] flex-col justify-center items-center w-full">
                  <div
                    data-aos="zoom-in"
                    className="relative flex justify-start items-start h-[420px] w-full rounded-[12px] overflow-hidden"
                  >
                    <LoadBlurHashImage
                      src={image}
                      blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                      className="w-full h-auto object-cover rounded-[12px]"
                      alt="Discover Your Potential"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h5 className="text-white !text-[20px]">Session Name</h5>
                    <span className="font-[84] text-[16px] text-[#F9FBFC] leading-[24px]">
                      2024 Keynote speaker
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!w-full z-[4]">
              <div className="flex justify-center items-center w-full h-auto">
                <div className="flex gap-[15px] flex-col justify-center items-center w-full">
                  <div
                    data-aos="zoom-in"
                    className="relative flex justify-start items-start h-[420px] w-full rounded-[12px] overflow-hidden"
                  >
                    <LoadBlurHashImage
                      src={image}
                      blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                      className="w-full h-auto object-cover rounded-[12px]"
                      alt="Discover Your Potential"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h5 className="text-white !text-[20px]">Session Name</h5>
                    <span className="font-[84] text-[16px] text-[#F9FBFC] leading-[24px]">
                      2024 Keynote speaker
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!w-full z-[4]">
              <div className="flex justify-center items-center w-full h-auto">
                <div className="flex gap-[15px] flex-col justify-center items-center w-full">
                  <div
                    data-aos="zoom-in"
                    className="relative flex justify-start items-start h-[420px] w-full rounded-[12px] overflow-hidden"
                  >
                    <LoadBlurHashImage
                      src={image}
                      blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                      className="w-full h-auto object-cover rounded-[12px]"
                      alt="Discover Your Potential"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h5 className="text-white !text-[20px]">Session Name</h5>
                    <span className="font-[84] text-[16px] text-[#F9FBFC] leading-[24px]">
                      2024 Keynote speaker
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="relative grid grid-cols-1 at500:grid-cols-2 silver:grid-cols-3 gap-x-2 gap-y-4 items-center w-full h-auto">
          <div className="flex gap-[10px] flex-col justify-center items-center w-full">
            <div
              data-aos="zoom-in"
              className="relative flex justify-start items-start h-[214px] w-full rounded-[12px] overflow-hidden"
            >
              <LoadBlurHashImage
                src={image2}
                blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                className="w-full h-auto object-cover rounded-[12px]"
                alt="Discover Your Potential"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h5 className="text-white !text-[20px]">Session Name</h5>
              <span className="font-[84] text-[16px] text-[#F9FBFC] leading-[24px]">
                2024 Keynote speaker
              </span>
            </div>
          </div>
          <div className="flex gap-[15px] flex-col justify-center items-center w-full">
            <div
              data-aos="zoom-in"
              className="relative flex justify-start items-start h-[214px] w-full rounded-[12px] overflow-hidden"
            >
              <LoadBlurHashImage
                src={image}
                blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                className="w-full h-auto object-cover rounded-[12px]"
                alt="Discover Your Potential"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h5 className="text-white !text-[20px]">Session Name</h5>
              <span className="font-[84] text-[16px] text-[#F9FBFC] leading-[24px]">
                2024 Keynote speaker
              </span>
            </div>
          </div>
          <div className="flex gap-[15px] flex-col justify-center items-center w-full">
            <div
              data-aos="zoom-in"
              className="relative flex justify-start items-start h-[214px] w-full rounded-[12px] overflow-hidden"
            >
              <LoadBlurHashImage
                src={image3}
                blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                className="w-full h-auto object-cover rounded-[12px]"
                alt="Discover Your Potential"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h5 className="text-white !text-[20px]">Session Name</h5>
              <span className="font-[84] text-[16px] text-[#F9FBFC] leading-[24px]">
                2024 Keynote speaker
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfereneVideos;
