import React from "react";
import { useEffect } from "react";
import image from "../../image/homeImg/8febc29051bcfc8a9896ced270874b6c.jfif";
import LoadBlurHashImage from "../../../lazy/loadBlurHash";
import AOS from "aos";
import "aos/dist/aos.css";

// import Link from "./link";

// import Button from "../Button";

function Partnership() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <>
      <section className=" relative pt-[151px] flex justify-center items-center w-full h-auto ">
        <div className="static flex flex-col justify-center items-center w-full max-w-[1280px] px-[15px] pt-[110px] pb-[20px] at500:px-[70px] my-0 mx-auto">
          <div className="flex justify-center items-center w-full h-auto">
            <div className="flex gap-[30px] flex-col silver:flex-row justify-center items-center w-full h-auto ">
              <div
                data-aos="zoom-in"
                className="relative flex justify-start items-start h-[258px] w-full rounded-[12px]"
              >
                <LoadBlurHashImage
                  src={image}
                  blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                  className="w-full h-[258px] lg:w-[522px] object-cover rounded-[16px] overflow-hidden"
                  alt="Discover Your Potential"
                />
              </div>
              <div className="flex flex-col gap-[24px] justify-center items-start w-full max-w-[548px]">
                <h2 className="!text-[40px] text-[#111E2F]">
                  Partnership Talk With Adidas and Monster Energy
                </h2>
                <span className="text-[#7E8EA2] txt5 !font-[84]">
                  It’s a new era for us at PH city as we have now entered a
                  Partnership worth $1.9m with Adidas and Monster Energy. This
                  partnership which was led by Chuka Obi, Tonte Davies, with
                  Rising Tide, Launch Africa...
                </span>
                <div>
                  <span
                    data-aos="fade-right"
                    data-aos-delay="1000"
                    data-aos-duration="60000"
                    data-aos-easing="ease-in-out"
                    className="text-[#353F50] leading-[18.9px] text-[14px]"
                  >
                    by &nbsp;
                    <strong className="text-[#353F50] txt4">
                      Tonte Davies
                    </strong>
                  </span>
                  <p className=" !font-Galano text-[#353F50] text-[14px] leading-[18.9px]">
                    21st August 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Partnership;
