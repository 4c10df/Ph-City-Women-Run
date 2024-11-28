import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

import LoadBlurHashImage from "../lazy/loadBlurHash";
import Button from "../contents/Button";
import Loading from "../contents/APIs/loading";
import "swiper/css";
import "./swiper/benefit.css";
import "./swiper/pagination.css";
import AOS from "aos";
import "aos/dist/aos.css";

const BenefitSlider = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  const query = `{
     volunteer(where: {id: "cm3fmdf901fir07o61geldecy"}) {
    title
    subtitle
    subtext
    schedule
    slideText
    coverImage {
      url
    }
  }
}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(hygraphEndpoint, { query });
        setData(response.data.data.volunteer);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  if (loading)
    return (
      <p className="h-[20vh] flex justify-center items-center leading-tight text-[20px] text-white"></p>
    );
  if (error)
    return (
      <p className="h-[30vh] flex justify-center items-center leading-tight text-[20px] text-white">
        Let's get you back online
      </p>
    );

  return (
    <section className="flex flex-col justify-center items-center relative bg-[#F9FBFC] rounded-[16px] w-full">
      <div className="blog-container w-full flex flex-col justify-center items-center max-w-[341px] h-[373px]">
        <GoChevronLeft className="swiper-button-prev-text !hidden at500:!flex left-[0px] w-[20px] z-50" />
        <GoChevronRight className="swiper-button-next-text !hidden at500:!flex right-[0px] w-[20px] z-50" />

        <Swiper
          className="relative flex flex-col justify-center items-center sm:!py-[30px] w-full"
          style={{ width: "100%" }}
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next-text",
            prevEl: ".swiper-button-prev-text",
          }}
        >
          {data.slideText.map((text, index) => (
            <SwiperSlide key={index} className="z-[4]">
              <div className="flex gap-[15px] flex-col justify-center items-center w-full overflow-hidden">
                <div className="flex gap-[10px] flex-col justify-center items-start pb-[16px]">
                  <span className="font-semibold text-[#262D33] leading-[32px] text-[24px] sm:leading-[52px] sm:text-[45px]">
                    {text}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BenefitSlider;
